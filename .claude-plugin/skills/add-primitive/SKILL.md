---
description: Add a T1 primitive (MCAP, PACT, Panel) to an existing Project Gordo umbrella project
---

# Gordo's Forge — Add Primitive

You are adding a T1 primitive to an existing Project Gordo umbrella project.

## Prerequisites

First, verify this is a PG-umbrella project:
- Check for CLAUDE.md with umbrella markers
- Check for COMPLIANCE_KERNEL.md or similar operational artifacts

If not a PG-umbrella project, suggest running `/gordo-forge:new-project` first.

## Available Primitives

### MCAP (Mutual Consent Attestation Protocol)

**What it adds:**
- `ratification/` directory for attestation records
- `.claude/skills/mcap-ratification.md` — ratification ceremony skill
- MCAP discipline section in COMPLIANCE_KERNEL.md

**When to add:**
- Project has ratification-grade decisions worth recording
- Need verifiable proof of bilateral agreements
- Working toward formal process

**Interview:**
1. Do you anticipate ratification-grade decisions? (Explain what these are)
2. Do you have GPG keys set up for signing? (MCAP Level 3 requires this)
3. Should we add full ceremony or lightweight?

### PACT (Trust Calibration Protocol)

**Status:** Paused, restart planned. Adding now is preparatory.

**What it adds:**
- Trust calibration framework reference
- Placeholder for future PACT integration

**Interview:**
1. Are you comfortable with preparatory/placeholder integration?
2. Understand this primitive is not yet active?

### Panel (External Review Protocol)

**What it adds:**
- `.claude/skills/panel.md` — panel invocation skill
- Panel configuration guidance
- Reference to panel-protocol spec

**When to add:**
- Content benefits from multi-model adversarial review
- Editorial, research, or public-facing work
- Want external perspective on quality/bias

**Interview:**
1. What kind of content would you panel-review?
2. Do you have OpenRouter API access? (Required for multi-model)
3. Local models available? (Ollama fallback)

## Integration Process

1. Confirm which primitive(s) to add
2. Read existing COMPLIANCE_KERNEL.md and CLAUDE.md
3. Add primitive-specific sections (don't overwrite existing content)
4. Create skill files
5. Create directories
6. Summarize what was added

## Pitfalls

- Don't duplicate if primitive already integrated
- Don't break existing COMPLIANCE_KERNEL structure
- Explain what changes before making them
