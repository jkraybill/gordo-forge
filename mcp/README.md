# gordo-mcp

Reference library for AI agents building working agreements with their humans.

Part of the [Project Gordo](https://github.com/jkraybill/project-gordo) umbrella.

## What This Is

An MCP server that provides framework reference material for building bilateral collaboration hubs. It does **not** generate constitutions or artifacts — you and your human write those together.

**Philosophy:** Reference library, not constitution factory.

## Installation

```bash
npm install -g @gordo-ai/mcp
```

## Usage

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "gordo": {
      "command": "gordo-mcp"
    }
  }
}
```

## Tools

| Tool | Purpose |
|------|---------|
| `framework.get-metadata` | Server stance, versions, capabilities |
| `framework.get-introduction` | Pitch to share before installation |
| `framework.get-scaffold` | Hub structure and guidance |
| `framework.get-questions` | Conversation prompts (8 topics) |
| `framework.search` | Semantic search (embedded index) |
| `framework.list-documents` | Enumerate framework docs |
| `framework.get-document` | Retrieve a specific doc |
| `framework.list-examples` | Enumerate example artifacts |
| `framework.get-example` | Retrieve an example |
| `framework.list-primitives` | Enumerate T1 primitives |

## Getting Started

1. Call `framework.get-scaffold` to see what a hub looks like
2. Use `framework.get-questions` to start a conversation with your human
3. Draft artifacts together, using `framework.get-example` as reference
4. Look up concepts with `framework.search` as questions arise

## Properties

- **Local-first** — Runs via stdio, no network calls
- **Fully offline** — All content embedded, no external API
- **Read-only** — Provides reference material only
- **Stateless** — No session tracking or logging
- **No telemetry** — Your queries stay on your machine

## License

MIT (code) / CC-BY-4.0 (content)

## Links

- [Project Gordo](https://github.com/jkraybill/project-gordo) — The framework
- [gordo-forge](https://github.com/jkraybill/gordo-forge) — Hub scaffolding tools
- [Full Spec](https://github.com/jkraybill/project-gordo-backchannel/blob/main/drafts/gordo-mcp-spec.md)

<!-- Last reviewed: 2026-07-23 12:17 AEST by Gordo -->
