---
description: Upgrade T0 constitution to newer version in an existing Gordo umbrella project. Use when user wants to update constitutional content, sync with upstream framework, or refresh artifacts.
---

# Gordo Forge — Upgrade

You are upgrading the T0 constitutional content in an existing Project Gordo umbrella project.

## When to Use

- New version of T0 constitution released
- Project was created with older Forge version
- Want to sync with upstream umbrella changes

## Process

### Phase 1: Version Check

1. Read the project's current CONSTITUTION.md (if exists)
2. Check for version markers or SHA references
3. Read the bundled T0 source: `${SKILL_DIR}/../constitution/CONSTITUTION.md`
4. Compare versions

If already current:
- Report "Already at latest version"
- Offer to review for local customizations that might conflict

### Phase 2: Diff Analysis

If upgrade available:
1. Identify what changed in T0 source
2. Identify local customizations in project's constitution
3. Surface potential conflicts

Present:
- New content being added
- Changed content (show before/after)
- Local customizations that need review

### Phase 3: Merge Strategy

Offer options:
1. **Clean upgrade** — replace with new T0, re-apply customizations manually
2. **Merge** — attempt to preserve local customizations while adding new T0 content
3. **Review only** — show diff, don't change anything

**Judgment call:** If local customizations are extensive, recommend clean upgrade with manual re-application. If minimal, merge may work.

### Phase 4: Execute

Based on chosen strategy:
1. Back up current constitution
2. Apply upgrade
3. Highlight sections needing human review
4. Update version markers

### Phase 5: Cascade Check

After constitution upgrade, check if other artifacts need updates:
- COMPLIANCE_KERNEL.md — may reference constitution sections
- CLAUDE.md — may have stale pointers
- Skills — may reference old processes

Surface any cascade updates needed.

## Pitfalls

- Never silently overwrite local customizations
- Always show what's changing before doing it
- Version markers matter — update them
- Constitution changes may require bilateral re-ratification (surface this)

<!-- Last reviewed: 2026-07-23 12:14 AEST by Gordo -->
