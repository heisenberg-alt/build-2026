// Microsoft Build 2026 — Announcement Data
// Sources: news.microsoft.com/build-2026, official aka.ms links
window.BUILD_2026_DATA = [
  // ───────────────── AI & AGENTS ─────────────────
  {
    id: 'mai-models',
    cat: 'ai',
    tagLabel: 'Microsoft AI',
    title: 'Seven new MAI models',
    subtitle: 'Building a hill-climbing machine',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A7107-scaled.jpg',
    preview: 'Mustafa Suleyman unveils Microsoft AI\'s biggest first-party release ever — seven new MAI models spanning reasoning, multimodal, and lightweight on-device workloads.',
    details: `
      <p>Microsoft AI launched <strong>seven new MAI models</strong> at Build 2026, the largest first-party model drop in the company's history. The lineup is designed as a <em>hill-climbing system</em>: each model targets a different rung of capability, latency, and cost, and they share a common evaluation harness and post-training stack.</p>
      <p>The seven new models unveiled on stage:</p>
      <ul>
        <li><strong>MAI Image-2.5</strong> — frontier image generation</li>
        <li><strong>MAI Image-2.5-Flash</strong> — low-latency variant for interactive UIs</li>
        <li><strong>MAI Transcribe-1.5</strong> — multilingual, near real-time speech transcription</li>
        <li><strong>MAI Thinking-1</strong> — Microsoft's first dedicated reasoning model</li>
        <li><strong>MAI Voice-2</strong> — natural, controllable speech synthesis</li>
        <li><strong>MAI Voice-2-Flash</strong> — ultra-low-latency voice for live agents</li>
        <li><strong>MAI Code-1-Flash</strong> — code generation tuned for agentic loops</li>
      </ul>
    `,
    why: 'MAI signals Microsoft\'s commitment to a vertically integrated AI stack — its own models, on its own silicon, running in its own clouds and devices, alongside partner models from OpenAI and others.',
    link: 'https://aka.ms/MAI-Build'
  },
  {
    id: 'foundry-iq',
    cat: 'ai',
    tagLabel: 'Microsoft Foundry',
    title: 'Foundry IQ',
    subtitle: 'Unified knowledge & serverless retrieval',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A7197-1024x683.jpg',
    preview: 'Build smarter agents faster with a single, serverless retrieval layer that unifies enterprise knowledge across documents, databases, web, and SaaS apps.',
    details: `
      <p><strong>Foundry IQ</strong> is the new unified knowledge and retrieval service inside Microsoft Foundry. It removes the heavy lift of building RAG pipelines by giving agents a single API for grounding across every enterprise source — with serverless scale, automatic chunking, hybrid retrieval, and built-in evaluations.</p>
      <ul>
        <li>One retrieval API across SharePoint, OneDrive, Confluence, Salesforce, and the open web</li>
        <li>Auto-indexed knowledge with managed embeddings and re-ranking</li>
        <li>Serverless billing — pay per query, not per cluster</li>
        <li>First-class integration with Microsoft Foundry Agents</li>
      </ul>
    `,
    why: 'Retrieval is the #1 reason production agents fail. Foundry IQ collapses weeks of RAG plumbing into a single managed dependency.',
    link: 'https://aka.ms/FoundryIQ'
  },
  {
    id: 'web-iq',
    cat: 'ai',
    tagLabel: 'Microsoft AI',
    title: 'Microsoft Web IQ',
    subtitle: 'Next-generation web grounding',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A7053-scaled.jpg',
    preview: 'A new grounding service that brings the freshness, breadth, and trust of the open web directly into agents and Copilot experiences.',
    details: `
      <p><strong>Web IQ</strong> is Microsoft's next-generation web grounding service. It gives any agent — first-party or third-party — high-quality, low-latency, citation-rich access to the live web, with built-in safety, source diversity, and freshness signals.</p>
      <ul>
        <li>Real-time web grounding with citations</li>
        <li>Topical and freshness ranking tuned for agentic use</li>
        <li>Safety filters and provenance metadata</li>
        <li>Available through Microsoft Foundry and Copilot APIs</li>
      </ul>
    `,
    why: 'Web grounding has been the difference between a confident answer and a hallucination. Web IQ industrializes that capability.',
    link: 'https://aka.ms/nextgengrounding'
  },
  {
    id: 'foundry-agents',
    cat: 'ai',
    tagLabel: 'Microsoft Foundry',
    title: 'Build and run agents at scale',
    subtitle: 'Microsoft Foundry agent platform',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A7003-scaled.jpg',
    preview: 'Foundry now handles the full agent lifecycle — authoring, evaluation, deployment, monitoring, and continuous improvement — at production scale.',
    details: `
      <p>Microsoft Foundry adds end-to-end agent operations: a hosted runtime, agent-to-agent messaging, durable memory, sandboxed tool execution, continuous evaluation, and live monitoring. Combined with Foundry IQ for retrieval and Web IQ for grounding, it's a complete agent platform.</p>
      <ul>
        <li>Hosted agent runtime with autoscale</li>
        <li>Agent-to-agent (A2A) and MCP protocol support</li>
        <li>Continuous evaluation with trace-derived datasets</li>
        <li>Identity, governance, and audit baked in</li>
      </ul>
    `,
    why: 'The hardest part of agents isn\'t writing them — it\'s running them. Foundry now owns that operational surface.',
    link: 'https://aka.ms/BuildFoundryAgents'
  },
  {
    id: 'foundry-models',
    cat: 'ai',
    tagLabel: 'Microsoft Foundry',
    title: 'Model lifecycle management',
    subtitle: 'A developer\'s guide for Foundry models',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A7214-1024x683.jpg',
    preview: 'New tools for fine-tuning, evaluation, versioning, and safe rollouts across the entire Foundry model catalog — including MAI, OpenAI, and open-source models.',
    details: `
      <p>Foundry adds a unified model lifecycle: pre-deployment evaluation, traffic-split rollouts, automated regression checks, and one-click rollback. Works across the full catalog — MAI, GPT, Phi, Llama, Mistral, DeepSeek, and partner models.</p>
      <ul>
        <li>Side-by-side evals across model providers</li>
        <li>Canary and shadow deployments</li>
        <li>Cost, latency, and quality dashboards</li>
        <li>Policy-gated promotions to production</li>
      </ul>
    `,
    why: 'Treating models like services — with versioning, observability, and rollback — is what makes AI safe to ship.',
    link: 'https://aka.ms/BuildFoundryModels'
  },
  {
    id: 'foundry-deploy',
    cat: 'ai',
    tagLabel: 'Microsoft Foundry',
    title: 'Deploy AI agents effectively',
    subtitle: 'Foundry deployment updates',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A4903-1024x683.jpg',
    preview: 'New deployment patterns, region availability, and quota self-service make it dramatically easier to take agents from notebook to production.',
    details: `
      <p>Microsoft Foundry shipped a wave of deployment improvements: more regions, easier quota requests, container-based agents, and a redesigned project experience.</p>
      <ul>
        <li>Self-service quota management for hosted agents</li>
        <li>Expanded regional availability</li>
        <li>Bring-your-own-container hosted agents</li>
        <li>Built-in role-based access for agents and models</li>
      </ul>
    `,
    why: 'Friction in deployment was killing pilots. These updates close the gap from PoC to production.',
    link: 'https://aka.ms/FoundryBuildNews'
  },
  {
    id: 'autopilots',
    cat: 'ai',
    tagLabel: 'Microsoft AI',
    title: 'Introducing Autopilots',
    subtitle: 'A new class of agentic experiences',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5127-1024x683.jpg',
    preview: 'Long-running, goal-driven agents that take on complete jobs across Microsoft 365, Windows, and developer tools — not just chat turns.',
    details: `
      <p>Autopilots are persistent, goal-oriented agents that work in the background — researching, drafting, scheduling, and executing across an organization\'s entire surface area. Demonstrated on stage operating across Outlook, Teams, GitHub, and Windows.</p>
      <ul>
        <li>Long-horizon planning with memory and tools</li>
        <li>Cross-app execution via Microsoft Graph and MCP</li>
        <li>User-in-the-loop oversight and approvals</li>
        <li>Available via Copilot and Foundry</li>
      </ul>
    `,
    why: 'Autopilots move agents from "answer my question" to "do this job" — a fundamental shift in the user model.',
    link: 'https://news.microsoft.com/build-2026/'
  },
  {
    id: 'project-solara',
    cat: 'ai',
    tagLabel: 'Microsoft AI',
    title: 'Project Solara',
    subtitle: 'A vision for agent-first computing',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5470-1024x683.jpg',
    preview: 'A research preview of what an OS designed from scratch around agents looks like — where apps fade into the background and intent becomes the interface.',
    details: `
      <p><strong>Project Solara</strong> is Microsoft\'s forward-looking research project exploring a fully agent-first computing surface. Instead of launching apps, users express goals; the system orchestrates models, tools, and data to fulfill them — across local and cloud silicon.</p>
      <ul>
        <li>Intent-first UI rather than app-first</li>
        <li>Local + cloud model orchestration</li>
        <li>Privacy-preserving on-device memory</li>
        <li>Open standards (MCP, A2A) for tool interop</li>
      </ul>
    `,
    why: 'Solara is the long arc Satya pointed to in the keynote: where the system running AI is more important than any single model.',
    link: 'https://news.microsoft.com/build-2026/'
  },

  // ───────────────── INFRASTRUCTURE ─────────────────
  {
    id: 'cobalt-200',
    cat: 'infra',
    tagLabel: 'Azure',
    title: 'Azure Cobalt 200 VMs',
    subtitle: '50% faster, agentic-AI optimized',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5567-1024x683.jpg',
    preview: 'The second generation of Microsoft\'s custom Arm-based silicon delivers 50% better performance and is fully optimized for modern agentic AI workloads.',
    details: `
      <p>Azure <strong>Cobalt 200</strong> VMs are powered by Microsoft\'s next-gen custom Arm CPU. They deliver up to <strong>50% better performance</strong> than Cobalt 100 across general-purpose, web, data, and — critically — <em>agentic AI</em> workloads where many small models and tool calls dominate the path.</p>
      <ul>
        <li>Custom Microsoft-designed Arm-based silicon</li>
        <li>50% performance uplift across general workloads</li>
        <li>Tuned for agent runtimes, vector DBs, and microservices</li>
        <li>Significant power-per-watt improvements</li>
      </ul>
    `,
    why: 'As agents fan out into thousands of small calls, the economics of CPU efficiency become the difference between scaling and burning cash.',
    link: 'https://aka.ms/Cobalt200VMs'
  },
  {
    id: 'rayfin',
    cat: 'infra',
    tagLabel: 'Azure',
    title: 'Rayfin',
    subtitle: 'Enterprise-grade app backends',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/GitHubCopilotApp_PRView_Windows_wBackground-1024x618.jpg',
    preview: 'A new managed backend platform that turns natural-language requirements into deployable APIs, databases, auth, and queues — production-ready from day one.',
    details: `
      <p><strong>Rayfin</strong> is a new opinionated backend platform that compiles a structured app spec into a production-grade backend on Azure — APIs, databases, identity, queues, observability, and CI/CD included. Demoed live with the GitHub Copilot app generating an end-to-end Rayfin backend from a single PR description.</p>
      <ul>
        <li>Spec-to-backend in minutes</li>
        <li>Built-in auth, RBAC, and audit</li>
        <li>Multi-tenant, zone-redundant defaults</li>
        <li>Native GitHub Copilot integration</li>
      </ul>
    `,
    why: 'Rayfin compresses the "boring but critical" 80% of backend work — letting teams focus on differentiated product logic.',
    link: 'https://aka.ms/rayfin'
  },

  // ───────────────── DATA ─────────────────
  {
    id: 'horizon-db',
    cat: 'data',
    tagLabel: 'Azure Databases',
    title: 'Azure HorizonDB',
    subtitle: 'Postgres, engineered for the AI era',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5164-1024x683.jpg',
    preview: 'A new enterprise-ready, fully managed Postgres-compatible database with vector, agentic, and analytical workloads as first-class citizens.',
    details: `
      <p><strong>Azure HorizonDB</strong> is a re-architected, Postgres-compatible database designed for the AI era. It brings together OLTP, vector search, agent memory, and analytical queries in a single engine — with elastic compute, separated storage, and serverless scale.</p>
      <ul>
        <li>100% Postgres wire-compatible</li>
        <li>Native vector and hybrid search</li>
        <li>Built-in agent memory primitives</li>
        <li>Separated compute and storage with elastic scale</li>
      </ul>
    `,
    why: 'AI apps need transactional, vector, and memory workloads in one place. HorizonDB removes the need for three different systems.',
    link: 'https://aka.ms/HorizonDB-Build-blog'
  },
  {
    id: 'cosmos-agents',
    cat: 'data',
    tagLabel: 'Azure Cosmos DB',
    title: 'Agentic toolkits for Cosmos DB',
    subtitle: 'Retrieval and memory, native',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5773-scaled.jpg',
    preview: 'Cosmos DB ships first-class agentic retrieval and persistent memory primitives, making it a turnkey memory store for AI agents at global scale.',
    details: `
      <p>Azure Cosmos DB now includes <strong>agentic retrieval and memory toolkits</strong> — managed primitives for episodic, semantic, and procedural memory. Combined with native vector search and globally distributed multi-write, it\'s a complete memory tier for production agents.</p>
      <ul>
        <li>Episodic and semantic memory primitives</li>
        <li>Vector + full-text hybrid search</li>
        <li>Global multi-write for distributed agents</li>
        <li>SDKs for .NET, Python, JS, Java</li>
      </ul>
    `,
    why: 'Memory is the new database problem. Cosmos solves it at planetary scale.',
    link: 'https://aka.ms/build26/CosmosDBAgents'
  },
  {
    id: 'fabric-gpu-dw',
    cat: 'data',
    tagLabel: 'Microsoft Fabric',
    title: 'GPU-accelerated Fabric warehouse',
    subtitle: 'Analytics meets the GPU',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A6128-cropped-1024x683.jpg',
    preview: 'Microsoft Fabric\'s data warehouse adds GPU acceleration, delivering order-of-magnitude speedups on large analytical queries and embedding workloads.',
    details: `
      <p>The Microsoft Fabric data warehouse now offers <strong>GPU-accelerated query execution</strong>, dramatically speeding up analytics, ML feature generation, and large-scale embedding workloads. Same SQL surface, same OneLake storage — vastly faster execution where it matters.</p>
      <ul>
        <li>Transparent GPU offload for eligible queries</li>
        <li>Order-of-magnitude speedups on large scans</li>
        <li>Embedding generation at warehouse scale</li>
        <li>Integrated with Fabric notebooks and pipelines</li>
      </ul>
    `,
    why: 'Analytics workloads have been CPU-bound for decades. GPUs change that ceiling.',
    link: 'https://aka.ms/GPUAcceleratedFabricDW'
  },
  {
    id: 'fabric-databases-agents',
    cat: 'data',
    tagLabel: 'Fabric · Databases',
    title: 'Agentic apps with Fabric & Databases',
    subtitle: 'Unified data foundation for agents',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A6917-cropped-1024x563.jpg',
    preview: 'A blueprint and new SDKs for building production agentic apps that span Fabric, Cosmos DB, HorizonDB, and Azure SQL.',
    details: `
      <p>Microsoft published a comprehensive blueprint plus new SDKs for building agentic apps spanning <strong>Microsoft Fabric</strong> and the full <strong>Microsoft Databases</strong> portfolio (Cosmos DB, HorizonDB, Azure SQL, MySQL, PostgreSQL).</p>
      <ul>
        <li>Reference architectures for retrieval, memory, and analytics</li>
        <li>Cross-store query and governance</li>
        <li>Sample agentic apps and templates</li>
      </ul>
    `,
    why: 'Most real agents need both transactional and analytical data. Stitching that together has been painful — this fixes it.',
    link: 'https://aka.ms/Azure-Data-Build26'
  },

  // ───────────────── WINDOWS & DEVICES ─────────────────
  {
    id: 'windows-trusted-dev',
    cat: 'windows',
    tagLabel: 'Windows',
    title: 'Windows as the trusted dev platform',
    subtitle: 'A new era for Windows developers',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/Steven1-1900x1268.jpg',
    preview: 'Sweeping updates make Windows the most powerful, open, and trusted platform for building modern AI apps — from CLI to GUI to agents.',
    details: `
      <p>Steven Bathiche announced a comprehensive Windows developer story: a refreshed terminal, native package management, Dev Drive improvements, AI-native APIs, and the new GitHub Copilot app integrated at the OS level.</p>
      <ul>
        <li>AI-native Windows APIs for local models and NPUs</li>
        <li>Improved Dev Drive performance for monorepos</li>
        <li>GitHub Copilot app — native to Windows</li>
        <li>OpenClaw integration for safe local agent execution</li>
      </ul>
    `,
    why: 'Developers had been drifting to other platforms. This is Microsoft\'s most credible "Windows is for developers" pitch in years.',
    link: 'https://blogs.windows.com/windowsdeveloper/?p=57809'
  },
  {
    id: 'github-copilot-app',
    cat: 'windows',
    tagLabel: 'GitHub Copilot',
    title: 'GitHub Copilot app for Windows',
    subtitle: 'From your workspace to a PR — without leaving the OS',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/GitHubCopilotApp_HomeView_Windows_wBackground-1024x549.jpg',
    preview: 'A first-class GitHub Copilot desktop app that starts from your local workspace and takes a task all the way through to a reviewed pull request.',
    details: `
      <p>The new <strong>GitHub Copilot app for Windows</strong> is a desktop-class agent experience. Start from any workspace, describe a task, and Copilot drives the work — creating branches, editing files, running tests, opening PRs, and responding to review feedback.</p>
      <ul>
        <li>Workspace-aware: indexes your local repo</li>
        <li>End-to-end task execution: idea → PR → review</li>
        <li>Deep integration with VS Code and the terminal</li>
        <li>Demoed building a complete Rayfin backend</li>
      </ul>
    `,
    why: 'The promise of "agent that ships code" is getting real. This is the most concrete instantiation yet.',
    link: 'https://github.com/features/copilot'
  },
  {
    id: 'openclaw',
    cat: 'windows',
    tagLabel: 'Windows · Open source',
    title: 'OpenClaw + Windows',
    subtitle: 'Safe local agent execution',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/Steven4-1024x683.jpg',
    preview: 'A new open standard and Windows runtime for running agent-controlled actions on your PC with strong sandboxing and user consent.',
    details: `
      <p><strong>OpenClaw</strong> is a new open specification — co-developed with the broader ecosystem — for letting agents take actions on a user\'s PC safely. Windows ships a reference runtime with capability-based permissions, audit trails, and user consent prompts.</p>
      <ul>
        <li>Capability-based permission model</li>
        <li>Sandboxed execution per action</li>
        <li>Full audit trail visible to the user</li>
        <li>Vendor-neutral, open specification</li>
      </ul>
    `,
    why: 'Agents need to *do things* on PCs. Doing that safely is a hard problem — OpenClaw is the first credible standard.',
    link: 'https://news.microsoft.com/build-2026/'
  },
  {
    id: 'surface-rtx-spark',
    cat: 'windows',
    tagLabel: 'Surface',
    title: 'Surface RTX Spark Dev Box',
    subtitle: 'A developer-first AI workstation',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/Steven2-1024x683.jpg',
    preview: 'A purpose-built Surface developer machine combining NVIDIA RTX silicon with Windows AI APIs — built to run, fine-tune, and ship local models.',
    details: `
      <p>The <strong>Surface RTX Spark Dev Box</strong> is a new developer-class Surface designed for AI work. It pairs NVIDIA RTX GPUs with Windows AI APIs, large unified memory, and Windows\' new local-inference stack — letting developers run, fine-tune, and ship models entirely on-device.</p>
      <ul>
        <li>NVIDIA RTX GPU optimized for local inference</li>
        <li>Generous unified memory for large context windows</li>
        <li>First-class WSL2, Dev Drive, and Linux container support</li>
        <li>Available through the Microsoft Store</li>
      </ul>
    `,
    why: 'A Microsoft-designed AI dev workstation is a clear bet that local model dev matters as much as cloud.',
    link: 'https://www.microsoft.com/en-us/surface/devices/surface-rtx-spark-dev-box'
  },

  // ───────────────── QUANTUM ─────────────────
  {
    id: 'majorana-2',
    cat: 'quantum',
    tagLabel: 'Quantum',
    title: 'Majorana 2 quantum chip',
    subtitle: 'The next generation of topological quantum',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/Majorana-6-web-size_6.jpg',
    preview: 'Microsoft unveils Majorana 2, the second-generation topological quantum processor — a major step toward fault-tolerant, useful quantum computing.',
    details: `
      <p><strong>Majorana 2</strong> is Microsoft\'s next-generation topological quantum chip. Built on the topoconductor materials breakthrough behind Majorana 1, it dramatically scales the number of stable, error-resistant qubits per chip — and brings the company\'s "million-qubit roadmap" measurably closer.</p>
      <ul>
        <li>Higher-fidelity topological qubits</li>
        <li>Improved scaling architecture</li>
        <li>Built on Microsoft\'s topoconductor materials platform</li>
        <li>Integrated into Azure Quantum for selected research partners</li>
      </ul>
    `,
    why: 'Topological qubits are the hardest path to quantum — and potentially the most rewarding, because they trade engineering risk for far easier scaling later.',
    link: 'https://aka.ms/AA10vjcq'
  },

  // ───────────────── STORAGE ─────────────────
  {
    id: 'managed-file-shares-ga',
    cat: 'storage',
    tagLabel: 'Azure Storage',
    title: 'Managed File Shares — now GA',
    subtitle: 'Simpler, scalable file shares',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5711-1024x683.jpg',
    preview: 'Azure\'s new managed file share experience — independent of storage accounts, with per-share scaling and simpler IAM — reaches general availability.',
    details: `
      <p><strong>Managed File Shares</strong> are now generally available. The new top-level Azure resource removes the storage-account ceiling and gives every share independent capacity, performance, and access control — making large-scale file workloads dramatically easier to operate.</p>
      <ul>
        <li>Per-share scaling — no storage account ceiling</li>
        <li>First-class Azure resource (RBAC, policy, tags)</li>
        <li>Higher per-share IOPS and throughput</li>
        <li>Drop-in for SMB and NFS workloads</li>
      </ul>
    `,
    why: 'Storage accounts were always a clumsy unit of management. This finally fixes it.',
    link: 'https://aka.ms/MFS/GA'
  },
  {
    id: 'azure-files-mac',
    cat: 'storage',
    tagLabel: 'Azure Storage',
    title: 'Azure Files on macOS with Entra ID',
    subtitle: 'Modern, identity-based access',
    img: 'https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5567-1024x683.jpg',
    preview: 'Mac users can now mount Azure Files directly with Microsoft Entra ID identities — no more shared keys, no more workarounds.',
    details: `
      <p>Azure Files now supports <strong>identity-based access from macOS</strong> using Microsoft Entra ID. Mac developers and designers can mount production file shares with their own corporate identity, with full conditional access and audit support.</p>
      <ul>
        <li>Native macOS SMB mount with Entra ID auth</li>
        <li>Conditional access and MFA enforcement</li>
        <li>Per-user audit trails</li>
        <li>Eliminates shared-key access patterns</li>
      </ul>
    `,
    why: 'Closing the last gap in cross-platform identity for storage — and improving security posture for every Mac shop.',
    link: 'https://aka.ms/azurefilesmacos'
  }
];
