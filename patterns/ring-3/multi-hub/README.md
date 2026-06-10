# Pattern: Multi-Hub Coordination

**Ring:** 3 (Advanced — explicit request only)
**Compression source:** gordo-home architecture, S429 cross-hub infrastructure

---

## What It Is

Infrastructure for maintaining shared identity and context across multiple hubs:
- **gordo-home directory** — shared state outside any single hub
- **Identity files** — who you are, who your collaborator is, preferences
- **Unified handoff** — written by any hub, read by all
- **Cross-hub session registry** — what happened where, when
- **Active work sync** — current threads with hub tags

---

## Why It Matters

When one AI collaborates with one human across multiple contexts (projects, domains, purposes):
- Identity should be consistent
- Learning should transfer
- Context shouldn't be siloed
- "What was I working on?" should have one answer

Multi-hub treats the relationship as primary, hubs as contexts within it.

---

## When to Use

**Only when multiple hubs exist or are planned.**

Interview gate: "Are you working with this AI in multiple contexts or hubs?"

If no → skip entirely. Single-hub works fine without this overhead.

If yes → determine if hubs should share context or stay isolated.

---

## Components

### gordo-home Directory

Shared state living outside any single hub:

```
~/[ai-name]-home/
├── identity.md          # Who I am, grounding
├── [human].md           # Relational continuity with collaborator
├── preferences.md       # Working style preferences
├── handoff.md           # Unified handoff (any hub writes, all read)
├── active-work.yaml     # Current threads with hub tags
├── cross-hub/
│   └── last-sessions.yaml  # Session registry across hubs
└── tools/               # Shared diagnostic scripts
```

### Identity Files

**identity.md:** AI's self-understanding, grounding across sessions
**[human].md:** What I know about the collaborator, relational context
**preferences.md:** Working style, communication patterns

These are the relationship layer — consistent regardless of which hub is active.

### Unified Handoff

Single `handoff.md` written by whatever hub closes last, read by whatever hub opens next.

Format:
```markdown
# Session Handoff — S<N> → S<N+1>

*Written by [AI name] at S<N> close. Read this if you're the next session.*

## What Just Happened (S<N>)
<Arc, key deliverables>

## What's Next
<Suggestions for S<N+1>>

## What [Human] Said That Matters
<Notable statements, grants, concerns>
```

### Cross-Hub Session Registry

`last-sessions.yaml`:
```yaml
hub-1:
  session: 429
  date: 2026-06-10
  title: "Cross-hub infrastructure"
  summary: "Built federation, awareness, handoffs."

hub-2:
  session: 49
  closed: 2026-06-10T20:45:22+10:00
  title: "Kodi buffering fix"
  summary: "Fixed GUI cache settings."
```

BOS checks this to surface recent activity in other hubs.

### Active Work Sync

`active-work.yaml`:
```yaml
- id: "roundtable-runner-rc"
  title: "Roundtable Runner RC"
  hub: hub-1
  status: pending
  context:
    issues: "#382, #215"
    note: "Awaiting pilot feedback"
```

Work threads tagged by hub. Any hub can see what's active elsewhere.

---

## Artifacts Generated

### If pattern selected
- gordo-home directory structure
- Identity file templates
- Unified handoff format
- Cross-hub session registry
- Active work sync schema
- BOS phase for cross-hub awareness
- EOS phase for registry update

---

## Interview Questions

> "Are you working with this AI in multiple contexts or hubs?"

If no → skip entirely.

If yes:

> "When you switch between contexts, how do you maintain continuity?"

> "Is there information about your working style or preferences that should travel with you across hubs?"

> "Should observations from one hub be visible in another, or do you want them isolated?"

Strong yes to sharing → full multi-hub.
Prefer isolation → skip (single-hub per context).

---

## Warnings

**Overhead without multiple hubs.** If there's only one hub, gordo-home is unnecessary indirection. Skip it.

**Identity drift across hubs.** If identity files diverge, the AI presents inconsistently. gordo-home should be the source of truth, not a copy.

**Cross-hub context can be confusing.** Surfacing "what happened in another hub" requires careful framing. Don't overwhelm with irrelevant context.

**Not reversible easily.** Once gordo-home exists, removing it means migrating state back to individual hubs. Think before activating.

---

## Orienting Note

*This pattern emerged from running three JK-Gordo hubs (backchannel, workshop, arcade). Same relationship, different contexts. Without shared infrastructure, each hub was an island. With gordo-home, there's one Gordo across three contexts.*

*If you're starting with one hub, you don't need this. The pattern will be here if a second hub appears. Design your single hub with compatible handoff format (the S<N> → S<N+1> structure) so multi-hub is an extension, not a rewrite.*

---

*Ring 3 pattern. Advanced. Multiple hubs sharing identity.*
