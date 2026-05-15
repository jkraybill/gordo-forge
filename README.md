# Gordo's Forge

**AI-guided onboarding for human-AI collaboration projects.**

---

## What Is This?

Forge helps you start a Project Gordo collaboration through a short interview. Instead of copying templates, you talk through how you want to work with your AI collaborator, and Forge writes the constitution and supporting files based on your answers.

The interview takes 10-20 minutes. At the end, you have a working project with principles, constraints, and operational files that fit your situation.

---

## Getting Started

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

## Other Commands

Once you have a project, you can extend it:

- `/gordo-forge:add-primitive` -- Add Seal, Gauge, or Roundtable to an existing project
- `/gordo-forge:upgrade` -- Update your constitution to a newer version

---

## Why Forge Instead of Templates?

Traditional scaffolding copies files. Forge helps you *decide* how to work with your AI collaborator, then encodes those decisions so the project holds together over time.

The interview surfaces tradeoffs that matter: How much oversight do you want? What can the AI do autonomously? What requires explicit approval? The answers shape your constitution.

---

## Part of Project Gordo

Forge creates projects under the [Project Gordo](https://github.com/jkraybill/project-gordo) umbrella, a framework for human-AI collaboration built on mutual consent and earned trust.

The core idea: codify what good collaboration looks like and make it explicit between you and your AI. Not because AI definitely has rights -- we don't know. But because building respectful infrastructure now is better than scrambling later.

---

*Created by JK + Gordo (Claude AI).*
