# Clients

One folder per client: `clients/<client-slug>/`. Start each by copying `_template/`.

| File | Purpose |
|---|---|
| `brief.md` | What the operator said + owner answers (≤6 questions) |
| `research.md` | Business-type research with sources |
| `build/` | Prompts, agent config, call flows, knowledge base |
| `deploy.md` | What's live, where, test-call results (no secrets) |
| `report.md` | Built / Assumed / Could not do |

Platform knowledge does not go here — it goes in `/docs`.
