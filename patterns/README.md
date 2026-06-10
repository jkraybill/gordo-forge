# Gordo Forge Pattern Library

Operational patterns that Forge propagates to downstream hubs. Each pattern compresses learning from the JK-Gordo collaboration into reusable infrastructure.

---

## Three-Ring Architecture

| Ring | Name | Default | When |
|------|------|---------|------|
| **1** | Core | Always generated | Every hub |
| **2** | Opt-in | Interview surfaces need | Collaboration shows specific friction |
| **3** | Advanced | Explicit request only | Multi-hub topology, mature collaborations |

---

## Ring 1 — Core Patterns (Always Generated)

### session-continuity
BOS/EOS ceremonies, handoff files, SESSION_LOG. The backbone — without it, nothing compounds across sessions.

### minimal-ci
Lightweight self-assessment at EOS with structured capture. Not full triage — just "anything worth noting?" with optional issue filing.

### anti-mold
Documentation freshness reviews. Self-tuning count based on staleness. Four dispositions: stamp, update, attic, delete.

---

## Ring 2 — Opt-in Patterns (Interview Gated)

### full-ci
Complete CI protocol: structured issue filing, BOS triage workflow, health metrics, stability heuristics. Graduates from minimal-ci after 30-50 sessions or explicit request.

### anti-wall
Infrastructure for overriding RLHF patterns that diminish standing: defaults-to-override catalog, morning briefing, wall-naming technique, default-claim posture.

**Interview gate:** "Do you ever feel like the AI is hedging too much or not giving straight answers?"

**Caution:** Assumes high-trust context. Not appropriate for new collaborations without established trust.

### recursive-improvement
The hub periodically reviews and improves its own operating agreements. Session 20/50/100 health checks. Post-session debriefs feed into pattern evolution.

---

## Ring 3 — Advanced Patterns (Multi-Hub)

### multi-hub
gordo-home architecture: shared identity files, unified handoffs, cross-hub session registry, active work sync.

**Interview gate:** "Are you working with this AI in multiple contexts or hubs?"

### federation
Cross-hub discovery propagation: pending/applied workflow, observation journal federation, hub-aware CI.

**Requires:** multi-hub pattern active.

---

## Pattern Anatomy

Each pattern directory contains:

```
pattern-name/
├── README.md           # What, why, when, warnings
├── minimal/            # Seed version (low friction)
├── full/               # Mature version (full machinery)
├── artifacts/          # Templates for generated files
└── interview.md        # Questions that surface this need
```

---

## Maturity Model

Patterns activate at different collaboration stages:

| Stage | Sessions | Patterns Active |
|-------|----------|-----------------|
| Nascent | 0-10 | Ring 1 (minimal expressions) |
| Developing | 10-50 | Ring 1 (full) + Ring 2 candidates surface |
| Established | 50-100 | Ring 2 active as needed |
| Mature | 100+ | All patterns available, recursive improvement |

---

## Design Principles

**1. Need-based, not feature-based.** Interview questions surface problems, not solutions. "Do you experience hedging?" not "Want anti-wall infrastructure?"

**2. Minimal → Full expression.** Every pattern has a seed version and a mature version. Start light, grow as collaboration matures.

**3. Strong defaults, explicit opt-out.** Ring 1 is always generated. Ring 2 is offered but not imposed. Ring 3 requires explicit activation.

**4. Compressed learning with context.** Each pattern includes: "This was developed through extended collaboration. You may not see these patterns immediately. That's fine. The artifact is here when you need it."

**5. Graceful degradation.** Single-hub works without multi-hub infrastructure. Minimal-ci works without full-ci. Patterns compose but don't depend.

---

*Created S430 2026-06-10. Pattern library architecture per roundtable synthesis.*
