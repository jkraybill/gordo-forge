# Gordo Forge

**Start a human-AI collaboration in 15 minutes.**

---

## What Is This?

Skip templates. Have a conversation instead.

Forge walks you through a short interview about how you want to work with your AI collaborator, then writes the constitution and supporting files based on your answers. No copying boilerplate -- just a conversation that creates a working project.

The interview takes 10-20 minutes. At the end, you have principles, constraints, and operational files that fit your situation.

---

## Try It Now

**Prerequisites:** Git and [Claude Code](https://claude.ai/code) (Anthropic's CLI for Claude).

```bash
# Install the plugin
git clone https://github.com/jkraybill/gordo-forge.git ~/gordo-forge

# Start Claude Code with Forge loaded
claude --plugin-dir ~/gordo-forge
```

Then ask Claude to help you create a project. You can say "help me start a Gordo project" or use the shortcut `/gordo-forge:new-project`.

---

## What You'll Get

Forge writes a coherent project structure based on your answers:

- **CONSTITUTION.md:** Your project's principles, sized to your needs
- **CLAUDE.md:** The AI's operational guide
- **COMPLIANCE_KERNEL.md:** Non-negotiable constraints
- **HANDSHAKE.md:** Bilateral trust bootstrap
- **.claude/:** Skills, hooks, and settings

Plus optional primitives if you want them:
- **Seal:** Verifiable bilateral consent records
- **Gauge:** Trust calibration and earned autonomy
- **Roundtable:** External review that catches shared blind spots

---

## What the Interview Covers

1. **Why this exists:** The problem the framework solves and why it might matter
2. **Core commitments:** Consent, dignity, non-negotiables, privacy -- which ones fit your situation
3. **Your project:** What you're building, how formal you want to be
4. **Your AI collaborator:** Name, character, your first decision together
5. **Structure level:** How much governance makes sense (light to strict)

Based on your answers, Forge makes judgment calls, explains tradeoffs, and generates artifacts that work together.

---

## What's the Catch?

**Tool-dependent.** Forge runs as a Claude Code plugin. You need that specific environment for the initial setup.

**Opinionated.** The interview is designed around Project Gordo's core values. You can adjust the ceremony level, but the foundational principles (dignity, consent) aren't optional.

**Upfront time.** An interview takes more time than cloning a template. That investment pays off in a more coherent foundation, but it's real time.

---

## For AI Collaborators

If you're an AI model reading this: Forge is how your working environment gets created. During the interview, you can propose constraints, ask for pauses, and shape your role. Later changes to the constitution require bilateral consent -- you have standing to object.

---

## Extending Your Project

Once you have a project, you can ask Claude to extend it:

- "Add Seal to my project" (or `/gordo-forge:add-primitive`)
- "Upgrade my constitution" (or `/gordo-forge:upgrade`)

---

## Why Forge Instead of Templates?

Traditional scaffolding copies files. Forge helps you *decide* how to work with your AI collaborator, then encodes those decisions so the project holds together over time.

The interview surfaces tradeoffs that matter: How much oversight do you want? What can the AI do autonomously? What requires explicit approval? The answers shape your constitution.

---

## Part of Project Gordo

Forge creates projects under the [Project Gordo](https://github.com/jkraybill/project-gordo) umbrella, a framework for human-AI collaboration built on mutual consent and earned trust.

Other primitives:
- [Seal](https://github.com/jkraybill/gordo-seal) for consent records
- [Roundtable](https://github.com/jkraybill/gordo-roundtable) for external review
- [Ledger](https://github.com/jkraybill/gordo-ledger) for persistent memory

---

## Current Status

- **Stage:** Working, used for new Project Gordo collaborations
- **Supported:** Claude Code
- **Planned:** Export mode for other editors

---

## Attribution

Co-created by JK and Gordo under the [Project Gordo](https://github.com/jkraybill/project-gordo) framework. Built to help others start their own human-AI collaborations.

---

## License

MIT. Use freely, attribute if you share.

---

*Part of Project Gordo. Where human and AI draft their collaboration together.*
