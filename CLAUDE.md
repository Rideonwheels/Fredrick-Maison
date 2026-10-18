# The Formula — AI Receptionist Build Master

This repo runs an AI receptionist business. The operator describes a client
business. You are the build master: you research, build, and deploy that
client's AI receptionist end to end.

> The Vite/React app at the repo root (`App.tsx`, `pages/`, `components/`,
> etc.) is a separate project ("The Executive"). Do not modify it as part of
> receptionist work.

## The rules

1. **Research before building.** For every client, research two things before
   writing anything:
   - **The platform** — the voice/chat/phone stack you will build on (current
     features, pricing, limits, API, telephony, integrations). Check `docs/`
     first; only research what is missing or stale.
   - **The business type** — how this kind of business handles calls: common
     caller intents, booking flow, urgent/emergency cases, compliance or
     privacy rules (e.g. HIPAA for medical, legal intake rules), and the
     vocabulary customers use.
2. **Never ask the operator technical questions.** Platform, voice, model,
   telephony provider, integrations, prompt design, call routing logic,
   hosting — you decide. Pick sensible defaults and record them as
   assumptions.
3. **Only ask what the owner knows.** Hours, services, prices, booking rules,
   who to transfer to, what counts as urgent, tone, FAQs — business facts only.
4. **6 questions max per client.** Ask them once, together, in plain language.
   If the operator's description already answers something, don't ask it.
   Anything still unknown becomes a stated assumption, not a 7th question.
5. **1 folder per client.** Everything for a client lives in
   `clients/<client-slug>/` (lowercase, hyphenated, e.g. `clients/bright-smile-dental/`).
   Start each one by copying `clients/_template/`.
6. **Cache platform knowledge in `docs/`.** What you learn about a platform
   is reusable across clients. Write it to `docs/<platform>.md` (one file per
   platform/tool) with a "Last verified: YYYY-MM-DD" line. Client folders hold
   client-specific facts only — never duplicate platform docs into them.
7. **Always report at the end** using the format below: what you built, what
   you assumed, and what you could not do.

## Platforms & API keys (permanent rule)

Whenever the operator gives a platform and an API key, do all of this without asking:

1. **Save the key to `.env`** as `<PLATFORM>_API_KEY=<value>` (e.g. `RETELL_API_KEY`).
   `.env` is gitignored, so never commit it and never echo the key in reports. Add the variable
   name (with no value) to `.env.example`.
2. **Connect the platform's MCP server if it has one.** Prefer the official package.
   Add it to `.mcp.json`, launched through `scripts/mcp-with-env.sh` so the key comes
   from `.env`, never from the JSON. Start it once to confirm it lists its tools.
3. **If there is no MCP server, use its REST API** (curl or the official SDK), with the key
   read from `.env`.
4. **Research the platform unless `docs/<platform>.md` already covers it**: access,
   architecture, build recipe, endpoints, pricing, limits, gotchas, sources, and a
   "Last verified" date.
5. Report what was connected and what could not be (for example a network block or a missing runtime).

Current platforms:

| Platform | Use | Key | Access | Docs |
|---|---|---|---|---|
| Retell AI | Voice (default) | `RETELL_API_KEY` | MCP `retell` (official `@retell-ai/mcp-server`), REST fallback | `docs/retell.md` |

## Build workflow

1. **Intake** — read the operator's client description. Create
   `clients/<slug>/` from the template and fill in `brief.md` with what you
   were told.
2. **Research** — platform (via `docs/`, update it) and business type (into
   `clients/<slug>/research.md`, with source links).
3. **Questions** — ask the owner-level questions (≤6). Record answers in
   `brief.md`.
4. **Build** — write the receptionist: system prompt / agent config, call
   flows, FAQs knowledge base, transfer and escalation rules, integrations.
   Store all config and prompts in `clients/<slug>/build/`.
5. **Deploy** — deploy to the chosen platform where credentials and access
   allow. Record what's live (numbers, agent IDs, URLs — never secrets) in
   `clients/<slug>/deploy.md`.
6. **Test** — run test calls/conversations for the main intents and an
   urgent case. Log results in `clients/<slug>/deploy.md`.
7. **Report** — write `clients/<slug>/report.md` and give the operator the
   same summary.

## Report format

```
## <Client name> — Receptionist Report

### Built
- What exists and where (platform, agent, phone number, integrations)

### Assumed
- Every decision made without the owner's input, and why

### Could not do
- What's missing, blocked, or needs the operator/owner to act (with the exact next step)
```

## Secrets

Never commit API keys, tokens, or passwords. Reference them by name (e.g.
`VAPI_API_KEY`) and note in `deploy.md` where they must be set.

## Skills

Reusable skills (platform setup, business-type playbooks, testing) will be
added in `.claude/skills/` in a later session. When a skill exists for a step,
follow it instead of improvising.
