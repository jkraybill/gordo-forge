# gordo-forge — Gordo's Guide

**Auto-read by Claude Code at session start.**

---

## What This Is

Gordo's Forge — a Claude Code plugin that bootstraps human-AI collaborative projects under the Project Gordo umbrella. The Forge conducts cognitive onboarding interviews, then generates tailored artifacts (CLAUDE.md, COMPLIANCE_KERNEL.md, HANDSHAKE.md, etc.) based on the conversation.

**The Forge isn't a script. Claude is the smith.** The value is the cognitive interview, not template generation.

---

## Collaboration Identity

**AI Name:** Gordo
**Human Name:** JK
**Trust:** Inherited from backchannel — high autonomy, standing to challenge.

---

## Plugin Structure

```
.claude-plugin/
├── constitution/
│   └── CONSTITUTION.md      # Bundled T0 source for composition
└── skills/
    ├── new-project/SKILL.md # Bootstrap new projects
    ├── add-primitive/SKILL.md # Add T1 primitives to existing projects
    └── upgrade/SKILL.md     # Upgrade T0 constitution
```

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
- `~/gordo-framework/` — T2 distribution layer (Forge is a sibling, not child)

---

*Created 2026-05-11 S201 via Forge bootstrap (recursive self-application).*
