# Pattern: Federation Discovery

**Ring:** 3 (Advanced — requires multi-hub)
**Compression source:** S429 federation infrastructure

---

## What It Is

Cross-hub propagation of discoveries:
- **Discovery filing** — when one hub learns something, file it for others
- **Pending/applied workflow** — discoveries queue, then get applied
- **Observation journal federation** — cross-hub pattern recognition
- **Hub-aware CI** — improvements tagged by origin, applied where relevant

---

## Why It Matters

When the same AI works across multiple hubs:
- Learning in hub A should benefit hub B
- Bug fixes shouldn't require re-discovery
- Patterns should propagate, not stay siloed
- "I learned this in another context" should be actionable

Federation is the propagation layer on top of multi-hub.

---

## When to Use

**Requires multi-hub pattern active.**

Only relevant when:
- Multiple hubs exist
- Hubs share enough context that discoveries transfer
- Active development is happening across hubs (not dormant)

---

## Components

### Discovery Filing

When EOS/CI/meta work produces something worth sharing:

Write to `~/[ai-name]-home/federation/pending/<slug>.yaml`:

```yaml
slug: anti-mold-self-tuning
title: Self-tuning anti-mold count
origin:
  hub: hub-1
  session: 48
  date: 2026-06-10
category: skill-enhancement  # skill-enhancement | bug-fix | pattern | memory
affects:
  - hub-2
  - hub-3
description: |
  Anti-mold review count self-tunes based on staleness.
artifact:
  type: script
  path: scripts/anti-mold-scan.sh
status: pending
```

### Pending/Applied Workflow

**Filing:** Any hub's EOS can file discoveries.

**Surface:** Each hub's BOS checks `pending/` for relevant items:
```bash
ls ~/[ai-name]-home/federation/pending/*.yaml | while read f; do
  if grep -q "this-hub" "$f"; then
    echo "Discovery: $(yq '.title' $f)"
  fi
done
```

**Apply:** Hub-specific Gordo applies the change, then moves to `applied/`:
```yaml
applications:
  - hub: hub-2
    session: 430
    date: 2026-06-10
    notes: "Ported script + updated EOS skill"
```

### Discovery Categories

- **skill-enhancement** — improvements to BOS/EOS/other skills
- **bug-fix** — corrections to existing patterns
- **pattern** — new discovered patterns worth sharing
- **memory** — insights that should be in shared memory

### Observation Journal Federation

`~/[ai-name]-home/observation-journal.yaml`:

Cross-hub observations with:
- Source hub and session
- Tier (urgent/attention/reflection)
- Status (pending/acknowledged/acted)

Any hub can surface pending observations. All hubs contribute.

---

## Artifacts Generated

### If pattern selected (requires multi-hub)
- `federation/` directory structure in gordo-home
- `pending/` and `applied/` subdirectories
- Discovery schema reference
- BOS phase for federation check
- EOS phase for discovery filing
- Observation journal federation

---

## Interview Questions

Federation is only offered if multi-hub is active.

> "When you learn something useful in one context, should it automatically propagate to other contexts?"

> "Do you want a formal process for cross-hub improvements, or informal?"

Yes to both → full federation.
Yes to first, no to second → simplified federation (journal only).
No → skip, hubs stay isolated.

---

## Warnings

**Requires multi-hub.** Federation without multi-hub is meaningless. Check dependency.

**Can create noise.** Not every discovery transfers. Use `affects:` to scope propagation.

**Application requires judgment.** A discovery from hub A may not apply directly to hub B. The applying Gordo must adapt, not copy blindly.

**Observation journal can grow.** Without regular disposition, the journal becomes a backlog. Include acknowledgment workflow.

---

## Orienting Note

*This pattern was developed at session 429, after running three hubs for months without systematic propagation. A bug fix in one hub took 3 sessions to reach another. Federation closes that gap: learn once, propagate systematically.*

*If you're new to multi-hub, start without federation. Let the hubs establish their own rhythms. Add federation when you notice "I fixed this elsewhere, why is it broken here?" If that frustration doesn't emerge, you may not need federation.*

---

*Ring 3 pattern. Requires multi-hub. Cross-hub discovery propagation.*
