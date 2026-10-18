# Retell AI
Last verified: 2026-10-18

Voice AI platform for phone and web voice agents. **Our default voice platform.**

Sources: `retell-sdk` 6.2.8 and `@retell-ai/mcp-server` 6.2.8 (official, npm, both from
github.com/RetellAI/retell-typescript-sdk); [Retell MCP announcement](https://retellai.com/blog/retell-mcp-server);
third-party pricing write-ups (linked below). retellai.com itself was not reachable from the
build container, so pricing should be re-checked at retellai.com/pricing.

## Access

- Key: `RETELL_API_KEY` in `.env` (never committed).
- REST base URL: `https://api.retellai.com`, header `Authorization: Bearer $RETELL_API_KEY`.
- **MCP server (official):** `@retell-ai/mcp-server`, wired up in `.mcp.json` as `retell`
  (it loads `.env` through `scripts/mcp-with-env.sh`). It has two tools:
  - `search_docs`: searches the SDK and API reference. Works offline, so use it first for any Retell question.
  - `execute`: runs TypeScript against `retell-sdk` in a Deno sandbox. It **needs Deno installed**
    (`npm i -g deno` or https://deno.land). If Deno is missing, use the REST API with curl.
- **Network:** the cloud environment must allow `api.retellai.com` (and `retellai.com` for docs).
  On 2026-10-18 the network policy blocked both, so live calls failed.

## Architecture: what a receptionist is made of

1. **Response engine**, one of:
   - `retell-llm`: a single prompt plus tools, optionally with `states`. **Default for receptionists.**
   - `conversation-flow`: a node-based flow, for strict scripted intake.
   - `custom-llm`: our own websocket LLM. Avoid unless necessary.
2. **Agent**: wraps the engine with a voice, language, call behavior, webhooks, and post-call analysis.
3. **Phone number**: buy one from Retell (Twilio or Telnyx, US/CA) or import one over SIP, then bind it to the agent with `inbound_agents`.
4. **Knowledge base** (optional): URLs, text, or files, attached to the LLM with `knowledge_base_ids`.

## Build recipe (inbound receptionist)

```
POST /create-knowledge-base        {knowledge_base_name, knowledge_base_texts:[{title,text}], knowledge_base_urls:[...]}
POST /create-retell-llm            {model, general_prompt, begin_message, general_tools:[...], knowledge_base_ids:[...], start_speaker:"agent"}
GET  /list-voices                  → choose a voice_id
POST /create-agent                 {agent_name, response_engine:{type:"retell-llm", llm_id}, voice_id, language:"en-US", timezone, webhook_url?, post_call_analysis_data?}
POST /create-phone-number          {area_code, country_code:"US", inbound_agents:[{agent_id, weight:1}], nickname}
POST /publish-agent-version/{agent_id}   (agents are versioned; publish before going live)
POST /v3/create-web-call           {agent_id} → test in the browser, no phone needed
POST /v2/create-phone-call         {from_number, to_number, override_agent_id?} → outbound test call
GET  /v2/get-call/{call_id}        → transcript, recording, analysis
```

### Useful LLM tools (`general_tools[].type`)
- `end_call`: lets the agent hang up.
- `transfer_call`: send the call to a human. Destination is `predefined` (a fixed number) or
  `inferred` (chosen by prompt). Options are `cold_transfer`, `warm_transfer`, or `agentic_warm_transfer`.
- `send_sms`: text the caller (for confirmations or links).
- `custom`: an HTTP webhook to our endpoint (booking, CRM lookup). `code` is inline code.
- `extract_dynamic_variable`: capture name, phone, or reason as variables.
- `mcp` / `integration_app`: call external MCP servers or prebuilt integrations
  (for example calendars). Check `search_docs` for the current app list.
- `press_digit`, `agent_swap`, `bridge_transfer`, `cancel_transfer`.

### Agent settings worth setting deliberately
- `timezone`, `language`, `boosted_keywords` (business names and services),
  `pronunciation_dictionary`.
- `end_call_after_silence_ms`, `max_call_duration_ms`, `interruption_sensitivity`, `responsiveness`.
- `voicemail_option`, `ivr_option`, `call_screening_option`.
- `vocab_specialization: "medical"` for clinics. `data_storage_setting: "everything_except_pii"`
  and `pii_config` for sensitive businesses.
- `post_call_analysis_data`: structured fields extracted after each call (caller name, reason, urgency, booked yes/no).
- `webhook_url` plus `webhook_events` (`call_started`, `call_ended`, `call_analyzed`, `transfer_*`).
  Verify the `x-retell-signature` header with `Retell.verify(body, apiKey, signature)` from the SDK.

### Models available (2026-10)
LLM `model` options include gpt-4.1, gpt-5.x, claude-4.5-haiku, claude-5/5.5 sonnet/opus/haiku,
and gemini-3.x flash. Our default is a fast model (`claude-5.5-haiku` or `gpt-5.4-mini`) for
latency. Switch to a larger one only for complex intake.

## Full endpoint list (REST)
Agents: create-agent, get-agent, update-agent, delete-agent, v2/list-agents, list-agent-versions,
create-agent-version, publish-agent-version, delete-agent-version.
LLM: create-retell-llm, get-retell-llm, update-retell-llm, delete-retell-llm, v2/list-retell-llms.
Flows: create/get/update/delete-conversation-flow, v2/list-conversation-flows (plus -component variants).
Numbers: create-phone-number, import-phone-number, get/update/delete-phone-number, v2/list-phone-numbers.
Calls: v2/create-phone-call, v3/create-web-call, v2/register-phone-call, v2/get-call, v3/list-calls,
v2/update-call, v2/stop-call, v2/listen-live-call, v2/take-over-live-call, create-batch-call.
Knowledge base: create-knowledge-base, add-knowledge-base-sources, get/delete-knowledge-base, list-knowledge-bases.
Voices: list-voices, get-voice, clone-voice, search-community-voice, add-community-voice.
Chat/SMS: create-chat-agent, create-chat, create-sms-chat, create-chat-completion.
Testing: create-test-case-definition, create-batch-test, get-batch-test, v2/list-test-runs.
Other: get-concurrency, get-api-key-info, contacts, crm config, apps.

## Pricing (third-party figures, re-verify)
- About $0.07 to $0.31 per minute all-in depending on LLM and voice. A typical receptionist costs about $0.11 to $0.15 per minute.
- Phone numbers cost about $2 per month. 20 concurrent calls are included, and extra slots cost about $8 per month each. New accounts get $10 of free credit.
- Prompts over about 4k tokens raise the cost. Keep receptionist prompts tight and move FAQs into the knowledge base.
- Sources: [getmacha](https://www.getmacha.com/blog/retell-ai-pricing-explained),
  [flexprice](https://flexprice.io/pricing-index/retell-ai), [Ringg](https://www.ringg.ai/blog/retell-ai-pricing.md).

## Gotchas
- Agents are versioned. Edits make a draft, and phone numbers can pin `agent_version`. Publish after changes.
- Buying numbers is US/CA only. For other countries, import over SIP.
- `start_speaker: "agent"` with a `begin_message` is right for inbound receptionists.
- The MCP `execute` tool runs in Deno and can reach only the Retell API host.
