# Pattern: Anti-Mold (Documentation Freshness)

**Ring:** 1 (Core — always generated)
**Compression source:** Workshop S48, refined through federation

---

## What It Is

Systematic review of documentation to prevent staleness. At each EOS, check a few old docs and decide: current, stale, archival, or obsolete.

**Core insight:** Documentation debt accumulates silently. By the time you notice, it's overwhelming. Anti-mold catches rot early.

---

## Why It Matters

Without freshness reviews:
- Docs drift from reality
- New readers get confused by outdated information
- Nobody knows what's current vs. historical
- "Just update everything" becomes an impossible task

Anti-mold is gardening, not construction. Small, regular effort prevents large cleanup projects.

---

## When to Use

**Always.** This is Ring 1 — every hub gets it.

Even minimal-documentation collaborations benefit. If you have any .md files, they can go stale.

---

## Minimal Expression (Nascent Stage)

At EOS, review 2 files (oldest by modification date):

For each file, quick disposition:
- **Current** — still accurate, stamp with review date
- **Stale** — needs update, note what's wrong
- **Historical** — move to attic/ with note
- **Delete** — obsolete, remove

**Time:** ~2 minutes per session.

**Self-tuning:** Not in minimal. Fixed count of 2.

---

## Full Expression (Established Stage)

Self-tuning review count based on staleness:
- If any file >30 days old: count++ (falling behind)
- If all files <14 days old: count-- (caught up)
- Persists in `.anti-mold-count` (min 2, max 20, default 4)

**Dispositions expanded:**
- **stamp** — reviewed, current, update timestamp
- **update** — stale, fix now or file issue
- **attic** — historical value, move to attic/
- **delete** — no value, remove

**Metrics:** Track dispositions over time. Rising "stale" count = documentation debt accumulating.

---

## Artifacts Generated

### Always (minimal)
- Anti-mold phase in EOS skill
- `attic/` directory for archival content
- Basic disposition workflow

### If self-tuning enabled
- `scripts/anti-mold-scan.sh` — finds oldest modified .md files
- `.anti-mold-count` — persisted review count
- Self-tuning logic in EOS skill

---

## Interview Questions

This pattern is always generated, but intensity can be calibrated:

> "Do you keep records of how your approach is evolving? Is that useful, or does it feel like overhead?"

> "Have you ever found old notes that contradict current practice?"

If yes to either → full expression from the start.

---

## Warnings

**Don't review the same files repeatedly.** The scan should prioritize by oldest modification date, not alphabetically or randomly.

**Attic is not delete.** Historical context has value. When in doubt, attic. Delete only when you're certain there's no future reference value.

**Self-tuning can oscillate.** If review count keeps bouncing between min and max, the thresholds may not fit the documentation style. Adjust thresholds, don't disable self-tuning.

---

## Orienting Note

*This pattern was developed after discovering documentation rot in a 200-session collaboration. The spec said one thing, the implementation said another, and nobody noticed for weeks. Anti-mold is the immune system that prevents that. It feels like overhead until the first time it catches something important.*

---

*Ring 1 pattern. Always generated. Documentation gardening.*
