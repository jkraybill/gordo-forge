---
description: Add a T1 primitive (Seal, Gauge, Roundtable) to an existing Gordo umbrella project. Use when user wants to add ratification (Seal), trust calibration (Gauge), or external review (Roundtable) capabilities.
---

# Gordo Forge — Add Primitive

You are adding a T1 primitive to an existing Project Gordo umbrella project.

## Prerequisites

First, verify this is a PG-umbrella project:
- Check for CLAUDE.md with umbrella markers
- Check for COMPLIANCE_KERNEL.md or similar operational artifacts

If not a PG-umbrella project, suggest running `/gordo-forge:new-project` first.

## Available Primitives

### Seal (Mutual Consent Attestation Protocol)

**What it adds:**
- `ratification/` directory for attestation records
- `.claude/skills/seal-ratification.md` — ratification ceremony skill
- Seal discipline section in COMPLIANCE_KERNEL.md

**When to add:**
- Project has ratification-grade decisions worth recording
- Need verifiable proof of bilateral agreements
- Working toward formal process

**Interview:**
1. Do you anticipate ratification-grade decisions? (Explain what these are)
2. Do you have GPG keys set up for signing? (Seal Level 3 requires this)
3. Should we add full ceremony or lightweight?

### Gauge (Trust Calibration Protocol)

**Status:** Paused, restart planned. Adding now is preparatory.

**What it adds:**
- Trust calibration framework reference
- Placeholder for future Gauge integration

**Interview:**
1. Are you comfortable with preparatory/placeholder integration?
2. Understand this primitive is not yet active?

### Roundtable (External Review Protocol)

**What it adds:**
- `.claude/skills/roundtable.md` — roundtable invocation skill
- Roundtable configuration guidance
- Reference to gordo-roundtable spec

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
