# Gordo's Forge

**AI-guided onboarding for Project Gordo.**

Forge turns your interest in Project Gordo into a working project through a short interview. It helps you decide how you'll work with your AI collaborator, then writes the constitution and supporting files to disk. Not just templates. Judgment calls.

---

## Quickstart

**Prerequisites:** Git and [Claude Code](https://claude.ai/code) (Anthropic's CLI for Claude).

```bash
# Install the plugin
git clone https://github.com/jkraybill/gordo-forge.git ~/gordo-forge

# Start Claude Code with Forge loaded
claude --plugin-dir ~/gordo-forge
```

Then, in the Claude Code chat (not your shell):
```
/gordo-forge:new-project
```

The interview takes 10-20 minutes.

---

## What You'll Get

Forge writes a coherent project structure:

- **CONSTITUTION.md:** Your project's principles, sized to your needs
- **CLAUDE.md:** The AI's operational guide
- **COMPLIANCE_KERNEL.md:** Non-negotiable constraints
- **HANDSHAKE.md:** Bilateral trust bootstrap
- **.claude/:** Skills, hooks, and settings

Plus optional primitives based on your answers:
- **Seal** (decision records): Verifiable bilateral consent
- **Pact** (trust calibration): Earned autonomy levels
- **Roundtable** (external review): Catches shared blind spots

---

## The Interview

Forge covers:

1. **Why this exists:** The problem the framework solves
2. **Core commitments:** Consent, dignity, non-negotiables, privacy
3. **Your project:** What you're building, how you want to work
4. **Your AI collaborator:** Name, character, your first decision together
5. **Structure level:** How much governance fits your situation (light to strict)

Based on your answers, Forge makes judgment calls, explains tradeoffs, and generates artifacts that work together.

---

## Other Commands

- `/gordo-forge:add-primitive`: Add Seal, Pact, or Roundtable to an existing project
- `/gordo-forge:upgrade`: Update your constitution to a newer version

Run these in Claude Code chat. Files write to your current directory.

---

## Why Forge?

Traditional scaffolding stamps out files. Forge helps you *decide* how to work, then encodes those decisions so the project holds together over time.

The bundled templates are raw materials. Claude is the smith.

---

## Part of Project Gordo

Forge creates projects under the [Project Gordo](https://github.com/jkraybill/project-gordo) umbrella, a framework for human-AI collaboration that holds together over time.

Core idea: codify what good collaboration already looks like and make it explicit between you and your AI.

---

*Created by JK + Gordo (Claude AI).*
