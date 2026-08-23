# From MCP Server to Cost-Aware Host

> **A 3-minute show-and-tell on vibe-coding the whole protocol stack**
>
> For the styled version with the dark/gold theme, large fonts, and slide layout, open `public/presentation.html` in a browser or visit `https://ketanshukla-dev.vercel.app/presentation.html` after deployment.

---

## What is vibe coding?

*The simplest version*

- You describe what you want in plain English.
- The AI writes the boilerplate, the tests, and the first draft.
- You measure, correct, and keep the pieces that actually work.
- The project grows one honest question at a time.

It is not "let the AI do everything." It is **co-piloting with a very fast junior who never gets tired** — and checking every claim.

---

## What is MCP?

*The USB-C for AI*

Before MCP, every AI app needed a custom integration for every service it talked to.

With MCP, every app speaks the protocol once. Every service speaks the protocol once. They all plug together.

An AI can now **read files, roll dice, query a database, or ask another model to think** — through one agreed shape of message.

---

## The five layers I built

*Each project is a working production system, deployed to Vercel*

🍪 **1. Server** → offer tools
🔁 **2. Host** → run the loop
✋ **3. Guard** → ask first
👥 **4. Crew** → delegate
💸 **5. Ledger** → own the wallet

Each one reuses the last. Nothing is theoretical — every repo has a live endpoint and a regression suite.

---

## Project 1 — The Server

*A vending machine for AI tools*

- Built with Next.js, one file: `app/api/mcp/route.ts`.
- Exposes tools, resources, and prompts using Zod schemas.
- The AI reads the tool list and picks what it needs.

Takeaway: **MCP is just JSON-RPC with good descriptions.** The magic is the contract, not the code.

---

## Project 2 — The Host

*The other half of the conversation*

- The host reads a sentence, picks a tool, runs it, and loops.
- It juggles multiple MCP servers without name collisions.
- Added prompt caching and cut input token cost by ~47%.

This is what Claude Desktop and Cursor do under the hood. Now I had my own.

---

## Project 3 — The Guard

*Dangerous tools need a handbrake*

- The host pauses before destructive actions and asks a human.
- Conversations are persisted in Postgres, so a pause survives a refresh.
- Evals and replay let me verify safety without guessing.

The key rule: **the host owns the allow-list, not the server.** You cannot trust a tool to tell you it is safe.

---

## Project 4 — The Crew

*One agent hires help*

- Added `spawn_agent` so the host can delegate a slice of work.
- One approval queue covers the whole tree of sub-agents.
- Measured the cost: on big jobs, the crew was correct and 0.56× the price.

A sub-agent is just a tool that happens to think.

---

## Project 5 — The Ledger

*The host owns the wallet*

- MCP "sampling" lets a server ask the host to run a model call.
- The host estimates the cost first and refuses before spending.
- Every allowed and refused draw is written to a ledger.

The most expensive thing a server can ask for now costs exactly the same as the cheapest: **$0.00, if the gate says no.**

---

## How it all connects

*One pipeline from a single tool to a safe, cost-aware team*

**See** → tools + resources
**Decide** → agent loop
**Ask** → approval gate
**Delegate** → sub-agents
**Refuse** → spend ledger

By the end, the host can see the world, choose what to do, ask a human, split the work, and refuse the bill.

---

## Why this matters

*The job-market version*

- I did not just read about MCP. I built the whole stack and shipped it.
- Every project has a live URL, a GitHub repo, and a regression suite.
- I can take an AI system from idea to deployed endpoint and keep it safe, observable, and cheap.

If you are building with AI agents, **this is the infrastructure you want on your team.**
