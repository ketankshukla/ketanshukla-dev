export interface Project {
  id: string;
  number: number;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  liveUrl: string;
  repoUrl: string;
  endpoint?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: "learn-mcp-5-year-old",
    number: 1,
    emoji: "🍪",
    title: "MCP Server — Tools, Resources, and Prompts",
    tagline: "The server",
    description:
      "A complete, working Model Context Protocol server built with Next.js and deployed to Vercel, with a hand-written route handler and a live playground.",
    highlights: [
      "4 MCP tools, 1 resource, 1 prompt",
      "Live playground + Streamable HTTP endpoint",
      "Zod input validation with guard rails",
      "Mermaid diagrams and executable examples in the repo",
    ],
    liveUrl: "https://learn-mcp-5-year-old.vercel.app",
    repoUrl: "https://github.com/ketankshukla/learn-mcp-5-year-old",
    endpoint: "https://learn-mcp-5-year-old.vercel.app/api/mcp",
    accent: "#38bdf8",
  },
  {
    id: "learn-mcp-agent-loop",
    number: 2,
    emoji: "🔁",
    title: "MCP Host — The Agent Loop",
    tagline: "The host",
    description:
      "The other half of the protocol: a host that reads plain English, picks tools across multiple MCP servers, runs them, and loops until it has an answer.",
    highlights: [
      "Hand-written agent loop with explicit stop_reason handling",
      "MCP schema → Claude API translation layer",
      "Multi-server namespacing to avoid tool collisions",
      "Prompt caching that cuts input cost by ~47%",
    ],
    liveUrl: "https://learn-mcp-agent-loop.vercel.app",
    repoUrl: "https://github.com/ketankshukla/learn-mcp-agent-loop",
    endpoint: "https://learn-mcp-agent-loop.vercel.app/api/toolbox",
    accent: "#fbbf24",
  },
  {
    id: "learn-mcp-agent-guard",
    number: 3,
    emoji: "✋",
    title: "The Agent That Asks First",
    tagline: "The gate",
    description:
      "Same loop, plus a notebook, an \"are you sure?\", a report card, and a rewind button — so an agent can own a dangerous tool and a human can still sleep at night.",
    highlights: [
      "Host-owned approval gate — never trusts server hints",
      "Postgres persistence for messages, pending calls, and traces",
      "Regression eval suite that deliberately regresses to stay honest",
      "Replay UI to watch any past run step by step",
    ],
    liveUrl: "https://learn-mcp-agent-guard.vercel.app",
    repoUrl: "https://github.com/ketankshukla/learn-mcp-agent-guard",
    endpoint: "https://learn-mcp-agent-guard.vercel.app/api/jar",
    accent: "#f87171",
  },
  {
    id: "learn-mcp-agent-crew",
    number: 4,
    emoji: "👥",
    title: "One Agent That Hires Help",
    tagline: "The crew",
    description:
      "A sub-agent is a tool that happens to think. This repo adds spawn_agent and measures when a crew is cheaper, better, or both compared to a lone agent.",
    highlights: [
      "Local spawn_agent tool that reuses the same loop",
      "One approval queue for an entire tree of workers",
      "partial_results and paused_children for safe resume",
      "Token-cost comparison showing 0.56× price at scale",
    ],
    liveUrl: "https://learn-mcp-agent-crew.vercel.app",
    repoUrl: "https://github.com/ketankshukla/learn-mcp-agent-crew",
    endpoint: "https://learn-mcp-agent-crew.vercel.app/api/pantry",
    accent: "#4ade80",
  },
  {
    id: "learn-mcp-agent-ledger",
    number: 5,
    emoji: "💸",
    title: "The Host That Owns The Wallet",
    tagline: "The ledger",
    description:
      "Sampling turns an MCP server into a client that asks your host to think for it. This repo adds a spend gate and a ledger so your host says no before the bill arrives.",
    highlights: [
      "Implements MCP sampling with stateless retry flow",
      "Cost ceiling that refuses before any model call",
      "Ledger rows for allowed and refused draws, tagged by server",
      "$0 regression suite replayed from stored traces",
    ],
    liveUrl: "https://learn-mcp-agent-ledger.vercel.app",
    repoUrl: "https://github.com/ketankshukla/learn-mcp-agent-ledger",
    endpoint: "https://learn-mcp-agent-ledger.vercel.app/api/kitchen",
    accent: "#a78bfa",
  },
];

export const skills = [
  { category: "Frameworks", items: ["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript"] },
  { category: "MCP / AI", items: ["Model Context Protocol", "MCP SDK", "mcp-handler", "Anthropic SDK", "Agent Loops", "Multi-Agent Orchestration"] },
  { category: "Backend / Data", items: ["Vercel", "Neon Postgres", "Zod", "JSON-RPC"] },
  { category: "Practices", items: ["Evals", "Human-in-the-Loop", "Cost Engineering", "Observability"] },
];
