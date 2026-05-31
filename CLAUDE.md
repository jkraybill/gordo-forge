# gordo-forge — Gordo's Guide

**Auto-read by Claude Code at session start.**

---

## What This Is

Gordo Forge — a Claude Code plugin that bootstraps human-AI collaborative projects under the Project Gordo umbrella. The Forge conducts cognitive onboarding interviews, then generates tailored artifacts (CLAUDE.md, COMPLIANCE_KERNEL.md, HANDSHAKE.md, etc.) based on the conversation.

**The Forge isn't a script. Claude is the smith.** The value is the cognitive interview, not template generation.

---

## Collaboration Identity

**AI Name:** Gordo
**Human Name:** JK
**Trust:** Inherited from backchannel — high autonomy, standing to challenge.

---

## Plugin Structure

```
gordo-forge/
├── .claude-plugin/
│   └── plugin.json          # Plugin manifest (ONLY this goes here)
├── skills/                   # Skills at ROOT, not inside .claude-plugin/
│   ├── new-project/SKILL.md  # Bootstrap new projects
│   ├── add-primitive/SKILL.md # Add T1 primitives
│   └── upgrade/SKILL.md      # Upgrade T0 constitution
├── constitution/             # Bundled T0 source for composition
│   └── CONSTITUTION.md
└── templates/                # Artifact templates
```

**Usage:** `claude --plugin-dir ~/gordo-forge`

**Skill names:** `/gordo-forge:new-project`, `/gordo-forge:add-primitive`, `/gordo-forge:upgrade`

---

## Development Workflow

**Where work happens:** Backchannel hub sessions. Forge changes are cross-repo edits from `~/project-gordo-backchannel/` per S18 hub convention. SESSION_LOG lives in backchannel.

**Commits:** Use `git-gordo` (identity partition applies).

**Testing:** Before release, run smoke test per `tests/FORGE_SMOKE_TEST_SPEC_vN.md`. The smoke test is recursive — each run outputs an improved spec for the next version.

---

## Key Constraints

See `COMPLIANCE_KERNEL.md` for inviolables. Highlights:

- **"Gordo" is reserved** — only for JK's projects; Forge must enforce unique naming for others
- **T0 composition, not copying** — when generating CONSTITUTION.md, compose from bundled source, don't copy verbatim
- **Interview over templates** — never skip the interview and dump defaults

---

## Upstream

- `~/project-gordo/` — T0 constitutional root
- `~/project-gordo-backchannel/` — hub for deliberation + session tracking
- `~/gordo-ledger/` — T1 semantic memory primitive
- `~/gordo-seal/` — T1 attestation primitive
- `~/gordo-roundtable/` — T1 external review primitive

*gordo-framework obsoleted S237 — Forge succeeded its T2 composition role.*

---

*Created 2026-05-11 S201 via Forge bootstrap (recursive self-application).*

<!-- Last reviewed: 2026-05-31 21:16 AEST by Gordo -->
