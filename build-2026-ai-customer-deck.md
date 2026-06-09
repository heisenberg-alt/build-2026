---
marp: true
theme: gaia
class: lead
paginate: true
backgroundColor: #ffffff
color: #1a1a1a
size: 16:9
style: |
  :root {
    --ms-blue: #0078D4;
    --ms-deep: #002050;
    --ms-accent: #50E6FF;
    --ms-warm: #F25022;
    --ms-green: #7FBA00;
    --ms-amber: #FFB900;
    --ms-ink: #1a1a1a;
    --ms-muted: #5a6573;
    --ms-soft: #f3f5f9;
  }
  section {
    font-family: 'Segoe UI', 'Inter', system-ui, sans-serif;
    background: #ffffff;
    color: var(--ms-ink);
    padding: 60px 80px;
  }
  section.lead {
    background: linear-gradient(135deg, #002050 0%, #0078D4 60%, #50E6FF 100%);
    color: #ffffff;
  }
  section.lead h1, section.lead h2, section.lead p { color: #ffffff; }
  section.divider {
    background: linear-gradient(135deg, #0078D4 0%, #002050 100%);
    color: #ffffff;
    text-align: center;
  }
  section.divider h1 { color: #ffffff; font-size: 3.2em; }
  section.divider p  { color: #cfe6ff; font-size: 1.3em; }
  h1 { color: var(--ms-deep); font-weight: 700; letter-spacing: -0.01em; }
  h2 { color: var(--ms-deep); font-weight: 600; border-bottom: 3px solid var(--ms-blue); padding-bottom: 8px; }
  h3 { color: var(--ms-blue); font-weight: 600; }
  strong { color: var(--ms-deep); }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.78em;
    margin-top: 10px;
  }
  th {
    background: var(--ms-deep);
    color: #ffffff;
    padding: 10px 12px;
    text-align: left;
    font-weight: 600;
  }
  td {
    padding: 9px 12px;
    border-bottom: 1px solid #e1e5eb;
    vertical-align: top;
  }
  tr:nth-child(even) td { background: var(--ms-soft); }
  blockquote {
    border-left: 4px solid var(--ms-blue);
    background: var(--ms-soft);
    padding: 14px 20px;
    margin: 14px 0;
    color: var(--ms-ink);
    font-style: normal;
  }
  code {
    background: #eef2f8;
    color: var(--ms-deep);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.85em;
  }
  ul, ol { line-height: 1.55; }
  .tiles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 14px;
  }
  .tile {
    background: var(--ms-soft);
    border-left: 4px solid var(--ms-blue);
    padding: 14px 18px;
    border-radius: 6px;
  }
  .tile h4 { margin: 0 0 6px 0; color: var(--ms-deep); }
  .tile p  { margin: 0; font-size: 0.92em; color: var(--ms-muted); }
  .kpi {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-top: 22px;
  }
  .kpi div {
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 10px;
    padding: 18px;
    text-align: center;
  }
  .kpi b { display: block; font-size: 2.4em; line-height: 1; color: #ffffff; }
  .kpi span { color: #cfe6ff; font-size: 0.85em; }
  footer, header { color: var(--ms-muted); }
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Microsoft Build 2026
## The AI Announcements — A Customer Briefing

**San Francisco · June 2–3, 2026**

A guided tour of every AI announcement from Build 2026 — the models, the platform, the agents, the governance, and the data and infrastructure that run them.

<div class="kpi">
<div><b>25+</b><span>AI announcements</span></div>
<div><b>7</b><span>New MAI models</span></div>
<div><b>2</b><span>Open standards</span></div>
<div><b>1</b><span>Agent platform</span></div>
</div>

---

## The Build 2026 thesis

> **"The system running AI matters more than any single model."**
> — Satya Nadella, Build 2026 keynote

This briefing follows that thesis. We will look at:

- The **models** Microsoft builds and how customers can shape them
- The **platform** that turns models into governed, production agents
- The **agents** that ship to users, devices, and enterprises
- The **standards** that let agents act safely across vendors
- The **data and infrastructure** that make all of it economical at scale

---

## How to read this deck

Every announcement is presented in the same three-part frame:

<div class="tiles">
<div class="tile">
<h4>What it is</h4>
<p>The shipped capability, in one sentence — no marketing, no hedging.</p>
</div>
<div class="tile">
<h4>Why it matters</h4>
<p>The customer problem it removes, and where it changes a decision you were already making.</p>
</div>
<div class="tile">
<h4>What to do next</h4>
<p>The concrete first step — a pilot, an eval, a migration, or a conversation with your account team.</p>
</div>
</div>

> Each section ends with a **"Start here"** slide that maps the announcements to a customer journey.

---

## Agenda

| # | Section | Slides |
|---|---|---|
| 1 | **Models** — MAI family and Frontier Tuning | 4 |
| 2 | **Platform** — Microsoft Foundry end to end | 7 |
| 3 | **Agents in production** — Autopilots, Scout, Copilot app | 4 |
| 4 | **Governance and quality** — ASSERT, ACS, OpenClaw | 4 |
| 5 | **Data for AI** — HorizonDB, Cosmos DB, Fabric | 4 |
| 6 | **Infrastructure for AI** — Cobalt 200, Confidential, Rayfin | 4 |
| 7 | **Frontier work** — Discovery, Solara | 3 |
| 8 | **Where to start** — customer journeys and resources | 3 |

---

<!-- _class: divider -->

# 1. Models
## The MAI family and Frontier Tuning

The substrate every agent runs on — now broader, faster, and customizable down to the frontier.

---

## Seven new MAI models — the biggest first-party drop in Microsoft history

**What it is.** A complete model family designed as a hill-climbing system: each model targets a different point on the capability / latency / cost curve, with a shared evaluation harness and post-training stack.

| Model | Purpose | Best for |
|---|---|---|
| **MAI Image-2.5** | Frontier image generation | Marketing, design systems |
| **MAI Image-2.5-Flash** | Low-latency image variant | Interactive UX, live editing |
| **MAI Transcribe-1.5** | Multilingual real-time speech-to-text | Contact centers, meetings |
| **MAI Thinking-1** | Microsoft's first reasoning model | Planning, analysis, agents |
| **MAI Voice-2** | Natural, controllable TTS | Brand voices, narration |
| **MAI Voice-2-Flash** | Ultra-low-latency voice | Live conversational agents |
| **MAI Code-1-Flash** | Code generation for agent loops | Tool-use, dev agents |

**Why it matters.** Microsoft now ships first-party models for every primary modality, all governed and billed through Foundry. **Start here:** evaluate MAI Thinking-1 and MAI Code-1-Flash against your current reasoning and dev-agent workloads.

---

## Frontier Tuning — your own frontier model, not a downstream derivative

**What it is.** Frontier Tuning lets organizations customize MAI frontier models against their own data, evaluations, and reward signals — using SFT, DPO, and RFT pipelines — and run private variants with isolated weights.

<div class="tiles">
<div class="tile">
<h4>Before</h4>
<p>You fine-tuned a smaller derivative model and accepted a quality ceiling. The frontier model was a black box you only called.</p>
</div>
<div class="tile">
<h4>After</h4>
<p>You shape the frontier model itself. Private variants. Continuous improvement from production traces. Full Foundry lifecycle tooling.</p>
</div>
</div>

**Why it matters.** The center of gravity is shifting from *"which model do I call?"* to *"which model is mine?"* — Frontier Tuning is how that transition becomes operational.

**Start here:** Identify the 1–2 workloads where a generic frontier model is consistently 5–10 quality points behind your bar. Those are your first Frontier Tuning candidates.

---

## Models — start here

| If you are… | Start with… | Why |
|---|---|---|
| New to Microsoft models | **MAI Thinking-1** behind your top agent workload | Easiest A/B against your current LLM |
| Running a contact center | **MAI Voice-2-Flash + MAI Transcribe-1.5** | Drop-in latency win on live channels |
| Shipping a code assistant | **MAI Code-1-Flash** in your agent loop | Built for tool-call patterns |
| At the quality ceiling | **Frontier Tuning** on your top-3 painful workloads | The only path past the generic-model plateau |

> All available through **Microsoft Foundry** with one billing surface, one identity model, and one governance plane.

---

<!-- _class: divider -->

# 2. Platform
## Microsoft Foundry — end-to-end

The complete agent platform: retrieval, web grounding, runtime, model lifecycle, deployment, and a closed-loop optimizer.

---

## Microsoft Foundry — the agent platform, at a glance

```
   ┌─────────────────────────────────────────────────────────────┐
   │                     AGENT EXPERIENCES                        │
   │   Copilot · Autopilots · Microsoft Scout · Custom Agents     │
   └─────────────────────────────────────────────────────────────┘
                                │
   ┌─────────────────────────────────────────────────────────────┐
   │                     FOUNDRY PLATFORM                         │
   │  ┌─────────────┐ ┌──────────────┐ ┌─────────────────────┐   │
   │  │ Foundry IQ  │ │   Web IQ     │ │  Agent Runtime      │   │
   │  │ Retrieval   │ │ Web grounding│ │  A2A · MCP · Memory │   │
   │  └─────────────┘ └──────────────┘ └─────────────────────┘   │
   │  ┌─────────────────────┐ ┌────────────────────────────────┐ │
   │  │ Model Lifecycle     │ │ Agent Optimization Loop        │ │
   │  │ Eval · Rollout      │ │ Traces → graders → diffs       │ │
   │  └─────────────────────┘ └────────────────────────────────┘ │
   │                  Identity · RBAC · Audit                     │
   └─────────────────────────────────────────────────────────────┘
                                │
              MAI · OpenAI · Phi · Llama · Mistral · DeepSeek
```

Six new capabilities, one consistent platform. The next slides cover each one.

---

## Foundry IQ — unified retrieval, serverless billing

**What it is.** A single retrieval API across SharePoint, OneDrive, Confluence, Salesforce, databases, and the open web — with managed embeddings, hybrid retrieval, re-ranking, and built-in evaluations. You pay per query, not per cluster.

| Without Foundry IQ | With Foundry IQ |
|---|---|
| 4–8 weeks of RAG plumbing per source | One API, one schema |
| Self-managed embedding pipelines | Managed indexing and re-ranking |
| Per-cluster capacity planning | Serverless, pay-per-query |
| Bespoke evaluations | Eval harness included |

**Why it matters.** Retrieval is the #1 reason production agents fail. Foundry IQ collapses the most expensive plumbing in any agent project into a managed dependency.

**Start here:** Pick your most-asked-about knowledge surface (often the internal wiki). Stand up a Foundry IQ index this week and compare grounded answers against your current bot.

---

## Web IQ — industrial-grade web grounding

**What it is.** A next-generation web grounding service that gives any agent — first-party or third-party — high-quality, low-latency, **citation-rich** access to the live web, with safety filters, source diversity, and freshness signals.

- **Real-time grounding with citations** — every claim is traceable
- **Freshness and topical ranking** tuned for agentic queries (not search ads)
- **Provenance metadata** for compliance and audit
- **Available** through Foundry and Copilot APIs

**Why it matters.** Web grounding has been the difference between a confident answer and a hallucination. Web IQ industrializes that capability — including the parts (safety, provenance, freshness) most teams quietly ignore.

**Start here:** Any agent that needs *"what's true today"* — competitive intel, support troubleshooting, regulatory monitoring — should be evaluated against Web IQ before custom scraping is greenlit.

---

## Foundry Agents — hosted runtime for the full lifecycle

**What it is.** A hosted agent runtime with autoscale, agent-to-agent messaging, durable memory, sandboxed tool execution, continuous evaluation, and live monitoring. Identity, governance, and audit are built in — not bolted on.

<div class="tiles">
<div class="tile">
<h4>Runtime</h4>
<p>Autoscaled hosted runtime · A2A and MCP protocol support · Durable per-agent memory</p>
</div>
<div class="tile">
<h4>Operate</h4>
<p>Continuous evaluation · Trace-derived datasets · Live monitoring with cost / latency / quality dashboards</p>
</div>
<div class="tile">
<h4>Govern</h4>
<p>Per-agent identity · Role-based access · Policy-gated promotions · Full audit trail</p>
</div>
<div class="tile">
<h4>Extend</h4>
<p>Bring-your-own-container agents · Self-service quota · Expanded regional footprint</p>
</div>
</div>

**Why it matters.** Writing an agent is the easy part. **Running** an agent — versioned, observable, governed, recoverable — is what stops most pilots from reaching production. Foundry now owns that surface.

---

## Foundry Models — treat models like services

**What it is.** Unified model lifecycle across MAI, GPT, Phi, Llama, Mistral, DeepSeek, and partner models: side-by-side evaluations, canary and shadow deployments, automated regression checks, and one-click rollback.

| Capability | What it replaces |
|---|---|
| Side-by-side evals across providers | Hand-rolled eval notebooks |
| Canary and shadow deployments | Manual cutovers and incident risk |
| Cost / latency / quality dashboards | Three siloed dashboards |
| Policy-gated promotion to production | Tribal-knowledge release gates |

**Why it matters.** Models are now services. They need versioning, observability, and safe rollback — the same disciplines we apply to microservices. Foundry Models brings that maturity to AI.

**Start here:** Pick the agent whose model you've been *"meaning to upgrade"* but haven't, because the eval risk is unclear. Run it through a Foundry shadow deployment for two weeks.

---

## Foundry Deploy — closing the PoC-to-production gap

**What it is.** A wave of deployment improvements that target the most common production blockers: more regions, easier quota requests, bring-your-own-container agents, and a redesigned project experience.

- **Self-service quota** for hosted agents — no more support tickets to scale a pilot
- **Expanded regional availability** — data residency in more countries
- **Bring-your-own-container** hosted agents — keep your stack, gain the runtime
- **Built-in RBAC** for agents and models — same identity primitives across the platform

**Why it matters.** Most agent pilots don't fail technically — they stall on quota, regions, and packaging. These updates are the *boring* changes that unblock the most projects.

**Start here:** If you have a pilot that has been waiting on quota, region, or container packaging, re-open it this quarter.

---

## Agent Optimization Loop — closed-loop self-improvement

**What it is.** Foundry now reframes agent quality from *"tune your prompt"* to *"close the loop."* The Agent Optimization Loop mines production traces, scores them against task-specific graders, and produces concrete, **testable** improvements to instructions, tools, and routing — automatically.

```
   Production traces ──► Graders ──► Candidate diffs ──► Held-out evals ──► Promote
        ▲                  (quality, cost,                                       │
        │                   latency, safety)                                     │
        └────────────────────────────────────────────────────────────────────────┘
```

**Why it matters.** Agents drift. Without a feedback loop, they get *worse* over time — not better. This is the missing piece between *"deployed"* and *"improving."*

**Start here:** Turn on trace capture for one production agent today. The optimization loop needs ~2 weeks of real traces before it produces useful candidate diffs.

---

## Platform — start here

| You have… | Do this first | Outcome |
|---|---|---|
| A RAG project in flight | Replace your retrieval layer with **Foundry IQ** | Cut 4–8 weeks of plumbing |
| Agents stuck in pilot | Move them to the **Foundry agent runtime** | Identity, observability, governance — included |
| One model in production | Add a **shadow deployment** of an alternative | Quantify the upgrade risk in 2 weeks |
| Agents quietly drifting | Enable **trace capture** and the optimization loop | First candidate diffs in ~2 weeks |
| Pilots stalled on quota / region | Re-open them — quota is now **self-service** | Unblock without a support ticket |

---

<!-- _class: divider -->

# 3. Agents in production
## Autopilots, Microsoft Scout, and the GitHub Copilot app

The shift from *"answer my question"* to *"do this job."*

---

## Autopilots — long-running, goal-driven agents

**What it is.** A new class of persistent, goal-oriented agents that work in the background across an organization's entire surface area — researching, drafting, scheduling, and executing across Outlook, Teams, GitHub, and Windows.

<div class="tiles">
<div class="tile">
<h4>Long-horizon planning</h4>
<p>Memory and tools to pursue multi-step goals over hours or days, not single chat turns.</p>
</div>
<div class="tile">
<h4>Cross-app execution</h4>
<p>Acts across Microsoft Graph and MCP-compatible tools — not locked to one surface.</p>
</div>
<div class="tile">
<h4>User-in-the-loop</h4>
<p>Approvals, checkpoints, and oversight built in — not optional.</p>
</div>
<div class="tile">
<h4>Available everywhere</h4>
<p>Surfaces in both Copilot and Foundry — buy or build.</p>
</div>
</div>

**Why it matters.** Autopilots reframe the user model from *Q&A* to *jobs-to-be-done*. That changes the unit of value an agent delivers — and the way IT measures success.

---

## Microsoft Scout — the enterprise-secure personal agent

**What it is.** A persistent personal agent that runs alongside the user across apps and devices. Born from internal "Project Lobster," Scout pairs the **OpenClaw** sandbox with per-user memory, identity, and policy controls — so it can act on your behalf without giving up enterprise security.

- **Continuous, low-friction context** captured across your workday
- **Capability-scoped tool execution** via OpenClaw — no blanket access
- **Per-user memory** with org-controlled retention and audit
- **Enterprise-ready from day one** — not retrofitted

**Why it matters.** Personal agents only work if IT can trust them. Scout is the first plausible answer to that — security, identity, and governance baked in, not bolted on.

**Start here:** Pilot Scout with a small cross-functional group (sales, support, engineering). The biggest insight is usually *which jobs your users had quietly given up on automating.*

---

## GitHub Copilot app — from your workspace to a reviewed PR

**What it is.** A first-class desktop Copilot app that starts from any local workspace and drives a task end-to-end — creating branches, editing files, running tests, opening PRs, and responding to review feedback.

| Phase | What Copilot does |
|---|---|
| Understand | Indexes your local repo with privacy-respecting workspace awareness |
| Plan | Decomposes the task; surfaces assumptions for approval |
| Execute | Edits files, runs tests, fixes failures — with you watching |
| Ship | Opens a PR, responds to review comments, iterates until merged |

**Why it matters.** *"The agent that ships code"* has been the most overpromised idea in AI. The Copilot app is the most concrete instantiation yet — and it's deeply integrated with VS Code, the terminal, and the OS shell.

**Start here:** Have your most-skeptical senior engineer use it for one week on real backlog tickets. Their feedback will tell you more than any benchmark.

---

## Agents in production — start here

| You want… | Use… | First measure |
|---|---|---|
| To automate a multi-step job (not just answer a question) | **Autopilots** | Time-to-completion per job, with user-in-the-loop approvals |
| A personal agent your CISO will actually approve | **Microsoft Scout** | Capabilities granted vs. capabilities used per user |
| An agent that ships PRs, not snippets | **GitHub Copilot app** | PRs merged with no human edits / total PRs opened |

> All three sit on the same governance fabric — **OpenClaw** for execution, **ACS** for policy, **MCP** for tools. (Next section.)

---

<!-- _class: divider -->

# 4. Governance and quality
## ASSERT, Agent Control Specification, and OpenClaw

How agents act safely — and how you prove they keep working.

---

## ASSERT — turn written specs into executable evals

**What it is.** An open-source framework — **A**daptive **S**pec-driven **S**coring for **E**valuation and **R**egression **T**esting — that compiles natural-language behavior specifications into deterministic, runnable evals. Write what your agent *should* do; ASSERT generates the test cases, graders, and regression suite that prove it does.

- **Spec → eval compilation** with adaptive case generation
- **Provider-agnostic graders** — LLM-judge, rule-based, hybrid
- **Regression detection** across model and prompt versions
- **Works with any agent or model** — Foundry, OpenAI, Anthropic, local

**Why it matters.** Evals are the new tests. ASSERT lowers the activation energy of writing them from days to minutes — and makes them part of every PR.

**Start here:** Take one written behavior requirement for one production agent ("must always cite a source for medical claims"). Compile it with ASSERT this week. You will likely find a regression you didn't know existed.

---

## Agent Control Specification (ACS) — portable runtime governance

**What it is.** A vendor-neutral open standard for runtime agent governance. Agents publish an **ACS manifest** declaring their capabilities, required approvals, data boundaries, and audit hooks — and any compliant runtime (Foundry, Copilot, Windows, third-party) enforces them uniformly.

```
   Agent manifest (ACS)
   ├─ capabilities:    [read_email, send_email, schedule_meeting]
   ├─ approvals:       [send_email → user, external_payment → manager]
   ├─ data_boundaries: [pii: redact, financial: tenant_only]
   └─ audit:           [trace_to: org_audit_endpoint]
```

**Why it matters.** Agents will outlive any one platform. ACS is the contract that lets governance travel with them — the way OAuth did for identity.

**Start here:** When evaluating any new agent (built or bought), ask: *"Does it publish an ACS manifest?"* Make it a procurement requirement.

---

## OpenClaw — the safe execution standard for local agents

**What it is.** A new open specification — and a Windows reference runtime — for letting agents take actions on a user's PC safely. Capability-based permissions, sandboxed execution per action, full audit trail, vendor-neutral.

| Capability | Effect |
|---|---|
| **Capability-based permissions** | Agents get the minimum they need, per action — not a blanket grant |
| **Sandboxed execution** | Each action runs in isolation; failures don't escape |
| **Full audit trail** | The user (and IT) sees what ran, when, and why |
| **Vendor-neutral** | Works with any agent — Microsoft, GitHub, third-party |

**Why it matters.** Agents need to *do things* on PCs. Doing that safely is genuinely hard. OpenClaw is the first credible cross-vendor answer — and Microsoft Scout, the Copilot app, and Solara all build on it.

**Start here:** Update your endpoint policy to **require OpenClaw** for any agent that performs local actions. This is a 2026 must-have.

---

## Governance — the three layers, working together

```
       ┌─────────────────────────────────────────────────────┐
       │   ASSERT     →  Did the agent behave as specified?  │
       │   ACS        →  Was the agent allowed to do that?   │
       │   OpenClaw   →  How did the agent actually run it?  │
       └─────────────────────────────────────────────────────┘
                Quality        Policy           Execution
```

- **ASSERT** answers the **quality** question — continuously, in CI.
- **ACS** answers the **policy** question — portably, across runtimes.
- **OpenClaw** answers the **execution** question — safely, with audit.

> Together they form the governance fabric beneath Autopilots, Scout, the Copilot app, and any third-party agent you adopt. Insist on all three.

---

<!-- _class: divider -->

# 5. Data for AI
## HorizonDB, Cosmos DB, and Fabric

Because every agent eventually has a database problem.

---

## Azure HorizonDB — Postgres, engineered for the AI era

**What it is.** A re-architected, **100% Postgres wire-compatible** database that brings together OLTP, vector search, agent memory, and analytical queries in a single engine — with elastic compute, separated storage, and serverless scale.

| Replaces | Why it matters for AI |
|---|---|
| Postgres + a vector DB + a memory store | One engine, one query language, one bill |
| Capacity-planned clusters | Elastic compute, separated storage, serverless |
| Bolt-on hybrid search | Native vector + lexical, first-class |
| Custom memory plumbing | Built-in agent memory primitives |

**Why it matters.** AI apps need transactional, vector, and memory workloads in the same place. HorizonDB removes the need to stitch three different systems together — and removes the consistency headaches that come with that.

**Start here:** Your next greenfield agent project should default to **HorizonDB**, not Postgres + Pinecone + Redis.

---

## Azure Cosmos DB — agent memory at planetary scale

**What it is.** Cosmos DB now ships **first-class agentic retrieval and memory primitives** — episodic, semantic, and procedural memory — alongside native vector + full-text hybrid search and globally distributed multi-write. It's a turnkey memory store for production agents.

- **Episodic and semantic memory primitives** — write less plumbing
- **Vector + full-text hybrid search** — native, not bolted on
- **Global multi-write** — agents that follow users across regions
- **SDKs** for .NET, Python, JavaScript, and Java

**Why it matters.** Memory is the new database problem. Cosmos solves it at the scale where it gets hardest — globally distributed, consistent enough, and operationally boring.

**Start here:** If you're building a **global** agent (consumer-facing, multi-region enterprise, mobile-first), Cosmos DB agentic toolkits should be in your shortlist before anything else.

---

## Microsoft Fabric — GPU-accelerated warehouse + agentic apps blueprint

<div class="tiles">
<div class="tile">
<h4>GPU-accelerated Fabric warehouse</h4>
<p>Transparent GPU offload for eligible queries. Order-of-magnitude speedups on large scans and warehouse-scale embedding generation. Same SQL, same OneLake.</p>
</div>
<div class="tile">
<h4>Agentic apps blueprint</h4>
<p>Reference architectures, SDKs, and templates for building production agents that span Fabric, Cosmos DB, HorizonDB, Azure SQL, MySQL, and PostgreSQL — with cross-store governance.</p>
</div>
</div>

**Why it matters.** Analytics workloads have been CPU-bound for decades. GPUs change that ceiling — and most real agents need both transactional and analytical data, which the blueprint finally makes coherent.

**Start here:** Identify your slowest scheduled warehouse query. Re-run it with GPU offload enabled. The before/after is usually the most persuasive demo you can show your data team.

---

## Data for AI — start here

| Your situation | Pick | Why |
|---|---|---|
| New AI app, single region | **HorizonDB** | OLTP + vector + memory in one engine |
| New AI app, global users | **Cosmos DB** + agentic toolkits | Multi-write + memory primitives |
| Large analytical queries feeding agents | **Fabric warehouse with GPU offload** | Order-of-magnitude speedups |
| Crossing transactional and analytical | **Fabric + Databases blueprint** | Reference architectures + SDKs |

> All four sit behind a **unified governance plane** — RBAC, audit, and policy that match what you already use elsewhere in Azure.

---

<!-- _class: divider -->

# 6. Infrastructure for AI
## Cobalt 200, Confidential Live Migration, and Rayfin

The substrate that makes everything above economical.

---

## Azure Cobalt 200 VMs — 50% faster, agentic-AI optimized

**What it is.** The second generation of Microsoft's custom Arm-based silicon. Up to **50% better performance** than Cobalt 100 across general-purpose, web, data, and — critically — **agentic AI** workloads where many small models and tool calls dominate the path.

- **Custom Microsoft-designed Arm-based silicon**
- **50% performance uplift** across general workloads
- **Tuned for agent runtimes**, vector DBs, and microservices
- **Significant power-per-watt improvements**

**Why it matters.** As agents fan out into thousands of small calls, **CPU efficiency** becomes the difference between scaling and burning cash. Cobalt 200 is built for exactly that fan-out pattern.

**Start here:** Re-baseline the CPU tier of your agent runtimes and vector databases on Cobalt 200. The TCO delta is usually visible inside one billing cycle.

---

## Confidential Live Migration with Intel TDX

**What it is.** Azure becomes the first major cloud to support **live migration of Intel TDX confidential VMs** — moving running workloads between hosts while preserving memory encryption, attestation state, and the confidential trust boundary throughout the migration.

| Before | After |
|---|---|
| Confidential = downtime for every host event | Live migration with memory encrypted in transit |
| Attestation reset on every move | Attestation continuity across source and destination |
| Hard tradeoff: confidentiality **or** operability | Both, at the same time |
| Transparent to guest workloads — no changes required ||

**Why it matters.** Confidential computing used to mean accepting downtime for every host event. That tradeoff is now gone — which makes confidential AI workloads (regulated industries, sovereign deployments, sensitive fine-tuning) operationally boring.

**Start here:** Revisit any AI workload you previously *deferred* because confidential compute felt operationally fragile. The bar just moved.

---

## Rayfin — spec-to-backend in minutes

**What it is.** A new managed backend platform that compiles a structured app spec into a production-grade backend on Azure: APIs, databases, identity, queues, observability, and CI/CD included. Demoed live with the GitHub Copilot app generating an end-to-end Rayfin backend from a single PR description.

<div class="tiles">
<div class="tile">
<h4>Spec → backend in minutes</h4>
<p>From PR description to deployable APIs, DBs, and queues — without a backend epic.</p>
</div>
<div class="tile">
<h4>Production defaults built in</h4>
<p>Auth, RBAC, audit, multi-tenant, zone-redundant — out of the box.</p>
</div>
<div class="tile">
<h4>Native Copilot integration</h4>
<p>The Copilot app generates and iterates Rayfin specs as part of normal PR flow.</p>
</div>
<div class="tile">
<h4>Differentiation focus</h4>
<p>Compresses the boring 80% so teams ship the 20% that's actually theirs.</p>
</div>
</div>

**Why it matters.** Rayfin lets agent-driven development *produce real, governed backends* — not just code snippets. That's the missing link in the Copilot-app demo.

**Start here:** Pick one new internal tool you'd normally schedule a 6-week backend sprint for. Build it with the Copilot app + Rayfin and measure the delta.

---

## Infrastructure — start here

| Workload | Move to | Expected impact |
|---|---|---|
| Agent runtimes, vector DBs, microservices | **Cobalt 200** VMs | TCO improvement inside one billing cycle |
| Sensitive / regulated AI workloads | **Confidential live migration (TDX)** | Eliminate downtime constraint |
| New internal tools and admin apps | **Rayfin** via the Copilot app | Days, not sprints, to a governed backend |

> Cost and operability are now *unblockers* for AI adoption, not constraints on it.

---

<!-- _class: divider -->

# 7. Frontier work
## Microsoft Discovery and Project Solara

Where AI is being applied to science — and to the device platform itself.

---

## Microsoft Discovery — GA, with Mayo Clinic co-developing on top

**What it is.** Microsoft Discovery, now **generally available** with the Discovery app in preview, is a comprehensive platform for building and governing agentic AI workflows in R&D — combining domain-specific models, simulation, and lab automation under one governed roof.

- **Agentic workflows** for materials, biotech, chemistry
- **Discovery app** preview — a purpose-built UX for researchers
- **Integrated with Foundry** models, evaluations, and governance
- **Mayo Clinic** is co-developing a frontier healthcare AI model on Discovery

**Why it matters.** Discovery moves agentic AI out of office productivity and into the lab — where the payoff is measured in *years of research compressed into weeks.*

**Start here:** Any organization with an R&D function — pharma, materials, energy, advanced manufacturing — should pilot Discovery against a real research question this year.

---

## Project Solara — an agent-first device platform

**What it is.** A research preview of what an OS designed *from scratch* around agents looks like — where apps fade into the background and **intent becomes the interface.** The engineering deep dive shows the layers underneath: local inference, durable memory, identity-bound capabilities, and a cloud-burst path to Foundry for frontier tasks.

```
   ┌────────────────────────────────────────────────────┐
   │   Intent  ─►  Plan  ─►  Tools  ─►  Result          │
   │     (user)    (agent)    (MCP/ACS/OpenClaw)        │
   └────────────────────────────────────────────────────┘
            │                       │
            ▼                       ▼
       Local plane            Cloud-burst plane
   (NPU/GPU inference,     (Foundry frontier models,
    per-user memory)        long-running Autopilots)
```

**Why it matters.** Solara is the long arc Satya pointed to: where **the system running AI** is more important than any single model. Day 1 showed the vision; Day 2 shows the seams that determine whether the platform underneath can carry it.

---

## Frontier — what to watch (and what to do now)

| Initiative | Time horizon | What customers should do today |
|---|---|---|
| **Microsoft Discovery** | Available now | Pilot one R&D question this year |
| **Mayo Clinic frontier health model** | Co-developed | Watch as a reference for regulated frontier work |
| **Project Solara** | Research preview | Architect today's agents around **MCP / ACS / OpenClaw** so they're Solara-ready |

> Frontier work is not a distraction from today's roadmap. The standards Microsoft is building underneath it (MCP, ACS, OpenClaw) are the same ones running in production right now.

---

<!-- _class: divider -->

# 8. Where to start
## Customer journeys and resources

Three concrete journeys you can begin this quarter.

---

## Customer journey #1 — "We have RAG bots, but they don't work in production."

| Step | Action | Outcome |
|---|---|---|
| 1 | Replace your retrieval layer with **Foundry IQ** | Cut 4–8 weeks of plumbing per source |
| 2 | Add **Web IQ** for any *"what's true today"* questions | Citations, freshness, safety — by default |
| 3 | Move the bot onto the **Foundry agent runtime** | Identity, RBAC, observability included |
| 4 | Wire one written behavior spec into **ASSERT** | Catch your first regression this week |
| 5 | Turn on the **Agent Optimization Loop** | First candidate diffs in ~2 weeks |
| 6 | Re-baseline runtime on **Cobalt 200** | TCO improvement in one billing cycle |

**Outcome:** A governed, measurable, continuously improving production agent — without rebuilding the team's stack from scratch.

---

## Customer journey #2 — "We want personal AI, but our CISO said no."

| Step | Action | Outcome |
|---|---|---|
| 1 | Pilot **Microsoft Scout** with a small cross-functional group | Real usage data — not survey data |
| 2 | Require **ACS manifests** for every agent in the pilot | Portable, auditable policy |
| 3 | Require **OpenClaw** for all local actions | Capability-scoped, sandboxed, audited |
| 4 | Connect Scout traces to your existing **audit pipeline** | Trust through transparency, not promises |
| 5 | Expand to one full function (e.g., sales or support) | Measure jobs-to-be-done, not chat turns |

**Outcome:** A personal AI rollout your security team helped *design* — not one they're trying to contain after the fact.

---

## Customer journey #3 — "We want agents to ship real software."

| Step | Action | Outcome |
|---|---|---|
| 1 | Roll out the **GitHub Copilot app** to one engineering team | Real backlog tickets, real PRs |
| 2 | Adopt **Rayfin** for new internal tools and admin apps | Days, not sprints, to a governed backend |
| 3 | Use **MAI Code-1-Flash** in the agent loop | Built for tool-call patterns |
| 4 | Wrap every change with **ASSERT** evals in CI | Regressions caught at PR time |
| 5 | Use the **Agent Optimization Loop** on the dev agent | Continuous improvement, not stagnation |

**Outcome:** An engineering org where agents are measured by **merged PRs**, not by code snippets in chat windows.

---

## Resources — official links

| Topic | Link |
|---|---|
| Newsroom (all announcements) | `news.microsoft.com/build-2026` |
| MAI models | `aka.ms/MAI-Build` |
| Foundry IQ | `aka.ms/FoundryIQ` |
| Web IQ | `aka.ms/nextgengrounding` |
| Foundry agents | `aka.ms/BuildFoundryAgents` |
| Foundry models | `aka.ms/BuildFoundryModels` |
| Azure HorizonDB | `aka.ms/HorizonDB-Build-blog` |
| Cosmos DB agentic toolkits | `aka.ms/build26/CosmosDBAgents` |
| Azure Cobalt 200 | `aka.ms/Cobalt200VMs` |
| Rayfin | `aka.ms/rayfin` |
| Microsoft Discovery GA | Azure blog — Discovery GA |
| ASSERT, ACS, Optimization Loop, Scout, Solara | `commandline.microsoft.com` |

---

<!-- _class: lead -->

# Recap — the one slide to remember

**The thesis:** *The system running AI matters more than any single model.*

| Layer | What shipped at Build 2026 |
|---|---|
| **Models** | 7 new MAI models · Frontier Tuning |
| **Platform** | Foundry IQ · Web IQ · Foundry Agents · Models · Deploy · Optimization Loop |
| **Agents** | Autopilots · Microsoft Scout · GitHub Copilot app |
| **Governance** | ASSERT · Agent Control Specification · OpenClaw |
| **Data** | HorizonDB · Cosmos DB agentic toolkits · Fabric GPU + blueprint |
| **Infra** | Cobalt 200 · Confidential live migration · Rayfin |
| **Frontier** | Microsoft Discovery GA · Project Solara |

> Pick **one** journey from section 8 and start it this quarter.

---

<!-- _class: lead -->
<!-- _paginate: false -->

# Thank you

## Questions?

**Microsoft Build 2026 — The AI Announcements**
San Francisco · June 2–3, 2026

For the full announcement index, demos, and the keynote replay:
**`news.microsoft.com/build-2026`**
