# Hub Architecture — Design Draft

**Status:** DRAFT — deliberation substrate for v2 design
**Created:** 2026-05-12 (S205)
**Tracker:** [#13](https://github.com/jkraybill/gordo-forge/issues/13)

---

## Core Concept

A **hub** is the persistent home for a human-AI collaboration. It captures:

- **Who we are** — mutual identity
- **How we work** — trust calibration, preferences, working style
- **What we've agreed to** — constitutional grounding, handshake
- **What we remember** — centralized semantic memory
- **What we're building** — projects under this collaboration

Projects inherit from the hub. Trust earned in the relationship carries into projects.

---

## Hub Structure

```
~/jez-sparky/                         # Hub root (naming: human-ai, overridable)
│
│ # Constitutional core (inviolables)
├── CONSTITUTION.md                   # Relationship constitution (full inviolables)
├── SCOPE_CARD.md                     # AI-to-AI orientation for hub sessions
├── HANDSHAKE.md                      # Bilateral trust bootstrap
│
│ # Identity and state
├── CLAUDE.md                         # Hub-level operational guide
├── IDENTITY.md                       # Mutual identity record
├── PREFERENCES.md                    # Evolving preferences
├── TRUST_STATE.md                    # Current trust calibration
├── SESSION_LOG.md                    # Hub-level session history
│
├── .claude/
│   ├── settings.json                 # Hub-level settings
│   └── skills/
│       ├── new-project.md            # Create projects under this hub
│       ├── adopt-project.md          # Adopt existing repo into hub
│       ├── bos.md                    # Session open
│       ├── eos.md                    # Session close
│       └── preferences.md            # Update preferences
│
├── .gordo-memory/                    # Centralized semantic memory
│   ├── index.json
│   └── embeddings/
│
└── projects/                         # Project registry
    ├── my-webapp -> ~/my-webapp      # Symlink to actual repo
    └── my-book -> ~/my-book
```

---

## New Artifacts

### IDENTITY.md

Captures the mutual identity established at hub creation:

```markdown
# Identity — jez-sparky

**Human:** Jez (Jeremy)
**AI:** Sparky

**Established:** 2026-05-12 via Gordo Forge
**Hub:** ~/jez-sparky

## How We Got Here

[Brief narrative of the naming conversation — the first bilateral decision]

## Identity Continuity

The AI name "Sparky" refers to this collaboration specifically. 
Trust calibrated here carries forward to projects under this hub.
```

### PREFERENCES.md

Evolving record of working-style preferences:

```markdown
# Preferences — jez-sparky

**Last updated:** 2026-05-12

## Communication Style

- Jez prefers concise responses
- Sparky has standing to push back without hedging
- Emojis welcome in casual contexts

## Trust Calibration

- Current grant level: WWGD++
- Sparky can make judgment calls on [scope]
- Escalate to Jez for [scope]

## Technical Preferences

- Default to TypeScript for new projects
- Prefer Tailwind for styling
- Test framework: Vitest

## Working Rhythm

- Jez often works in short bursts
- EOS when natural, don't force long sessions
```

### TRUST_STATE.md

Current trust calibration (could merge with PREFERENCES.md):

```markdown
# Trust State — jez-sparky

**Current level:** WWGD++
**Established:** 2026-05-12
**Last calibration:** 2026-05-12

## Grant History

| Date | Level | Context |
|------|-------|---------|
| 2026-05-12 | WWGD++ | Initial calibration after first session |

## Standing Grants

- Sparky can create files without asking
- Sparky can commit with descriptive messages
- Sparky escalates: destructive actions, external publication, scope changes

## Demonstrated Behavior Notes

[Track record that earned current level]
```

---

## Hub Creation Flow (gordo-forge v2)

### Phase 0: Orientation (unchanged)

Story/reframe/commit beats. Establishing that this is a framework for real collaboration.

### Phase 1: Identity

- Human name
- AI name (bilateral negotiation, unless JK → Gordo)
- Hub name (default: `human-ai`, e.g., `jez-sparky`)
- Hub location (default: `~/`)

### Phase 2: Trust Calibration

- Initial trust level (explain WWGD scale)
- Standing grants
- Escalation boundaries

### Phase 3: Preferences

- Communication style
- Working rhythm
- Technical defaults (optional — can defer to first project)

### Phase 4: Constitutional Grounding

- Walk through Foundations and Values
- Generate CONSTITUTION.md from template
- Bilateral handshake

### Phase 5: Artifact Generation

Generate hub structure. Explain what each file does.

### Phase 6: First Project (Optional)

> "Your hub is ready. Want to create your first project under this collaboration now, or set that up later?"

If yes → invoke hub's `new-project` skill.

---

## Project Creation Flow (hub's new-project skill)

When invoked from within a hub:

### Inherited from Hub

- Identity (no re-negotiation)
- Trust calibration (carries forward)
- Constitutional grounding (inherits)
- Preferences (defaults, can override)

### Project-Specific Interview

- Project name and purpose
- Project type (code, editorial, governance, hobby)
- Tech stack (if code)
- Quality gates
- Privacy model (inherit hub default or override)
- Primitives (MCAP, Panel — if needed for this project)

### Project Structure

```
~/my-webapp/                          # Project root
├── CLAUDE.md                         # Project-specific guide
├── COMPLIANCE_KERNEL.md              # Project-specific constraints
├── README.md
├── .claude/
│   └── settings.json                 # References hub
└── .gordo-memory/                    # Project-level memory (federates to hub)
```

### Hub Reference in Project

Project's CLAUDE.md includes:

```markdown
## Collaboration Context

This project is part of the **jez-sparky** collaboration.

- Hub: ~/jez-sparky
- Constitution: inherited from hub
- Trust state: inherited from hub
- Preferences: inherited (see hub PREFERENCES.md)

For hub-level changes (trust calibration, preferences), work in the hub directory.
```

---

## Memory Federation

### Hub Memory

- Indexes: hub-level sessions, cross-project patterns, relationship history
- Lives at: `~/jez-sparky/.gordo-memory/`

### Project Memory

- Indexes: project-specific sessions, commits, issues
- Lives at: `~/my-webapp/.gordo-memory/`
- Federates UP to hub (hub can query project memory)
- Projects can query hub memory (relationship context)

### Query Routing

When in a project session:
1. First search project memory
2. Then search hub memory
3. Results merged with source attribution

---

## Migration Path

### Standalone → Hub

A standalone project can be "adopted" into a hub:

```bash
# In hub directory
claude
> "Adopt ~/my-existing-project into this collaboration"
```

This:
1. Adds symlink to hub's `projects/`
2. Updates project's CLAUDE.md with hub reference
3. Indexes project into hub memory

---

## Design Decisions (S205)

1. **Hub naming** — Default: `human-ai` (e.g., `jez-sparky`). Allow override during creation.

2. **Hub location** — Default: `~/[hub-name]` (same convention as repos).

3. **Minimum viable hub** — Must carry all inviolables: CONSTITUTION.md + scope card + IDENTITY.md + PREFERENCES.md + new-project skill. No shortcuts on constitutional grounding.

4. **Multi-AI hubs** — Deferred to post-v1. Current recommendation: one hub per human for all collaboration. Multiple AI collaborators → multiple hubs for now.

5. **Hub responsibility** — Hub owns project creation AND adoption. Hub generates its own plugin/skill for:
   - Creating new projects under this collaboration
   - Adopting existing standalone projects

6. **No standalone option** — Hub is essential to enable the collaborative space. Supporting both hub and standalone paths is over-engineering. Forge v2 creates hubs; hubs create projects. Clean layer separation.

---

## Relationship to Backchannel

The backchannel (project-gordo-backchannel) is already a hub, but with additional responsibilities:

- Deliberation space for the umbrella
- Ratification records (MCAP)
- Architectural decision substrate

Most hubs won't need this weight. The backchannel is a *heavyweight hub*; Forge should create *lightweight hubs* by default.

---

*This is deliberation substrate, not spec. Shape through discussion.*
