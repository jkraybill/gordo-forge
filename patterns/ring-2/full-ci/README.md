# Pattern: Full CI Protocol

**Ring:** 2 (Opt-in — graduates from minimal-ci)
**Compression source:** CONTINUOUS_IMPROVEMENT_SPEC_DRAFT.md v0.6

---

## What It Is

Complete continuous improvement infrastructure:
- **Structured issue filing** at EOS with judgment gates
- **Triage workflow** at BOS (accept/defer/reject/snooze/escalate)
- **Stability heuristics** to avoid noise in mature repos
- **Health metrics** every 20 sessions

---

## Why It Matters

Minimal CI captures observations. Full CI processes them.

Without triage:
- Issues accumulate without disposition
- No distinction between urgent and deferred
- False momentum (filed ≠ resolved)
- No signal on collaboration health

Full CI closes the loop: observe → file → triage → act or defer → track health.

---

## When to Use

**Graduate from minimal-ci when:**
- 30-50 sessions have passed, OR
- Accumulated items need triage, OR
- Collaborator explicitly requests structure

**Interview gate:** "How do you know when a working process has drifted from what you intended?"

Strong answer with existing practices → may be ready sooner.

---

## Components

### EOS Self-Assessment

At session close, evaluate:

> "Based on this session, what is the highest-ROI single achievable improvement?"

**Hard gates (all must pass):**
1. **Concrete** — specific file, pattern, or friction point
2. **Evidence** — can cite session artifacts
3. **Not duplicate** — no existing tracker covers this

**Soft gates (3 of 4 must pass):**
4. **Scoped** — within collaboration-effectiveness domain
5. **Achievable** — no external dependencies for first slice
6. **Effort ≤ Medium** — estimated ≤2 hours (larger routes to /meta)
7. **ROI threshold** — benefit ≥3× effort over next 2-4 sessions

### Issue Format

```markdown
Title: [CI] <concise description>

## Observation
<What was noticed — specific file, pattern, friction point>

## Evidence
<Concrete artifacts: file paths, line numbers, error messages>

## Proposed Change
<Actionable improvement — what to change and where>

## Expected ROI
<Why this helps — time saved, friction reduced>

## Effort Estimate
<Small (≤1h) | Medium (≤2h)>

## Area
<docs | skills | memory | hooks | tooling | process | conventions>

## Session Context
Session: S<N>
Filed: <timestamp>
```

### BOS Triage

At session start, surface pending items:

> **CI triage (N items):**
> - #NNN title — one-line summary
>
> Accept, defer, reject, snooze, duplicate, or escalate?

**Actions:**
- **Accept** — remove triage label, add to current milestone
- **Defer** — add to future milestone, mark deferred
- **Reject** — close with rationale
- **Snooze** — revisit later (max 2 snoozes per item)
- **Duplicate** — close and link to canonical
- **Escalate** — convert to /meta agenda

### Stability Heuristics

A repo is "stable" when:
1. Last 5 EOS assessments skipped (nothing actionable)
2. No new CI issues filed during those sessions
3. No collaboration infrastructure meaningfully modified

When stable: EOS silently skips filing. The assessment still runs to enable override.

### Health Metrics

Every 20 sessions:

> "CI health (last 20 sessions): N filed, M accepted, O deferred, P rejected, Q stale."

---

## Artifacts Generated

### If pattern selected
- Full CI section in EOS skill
- Triage phase in BOS skill
- Issue template (GitHub or local)
- `.ci-state.yaml` — tracks stability, snooze counts
- Health check at session 20/40/60/...

---

## Interview Questions

> "How do you currently capture when something goes wrong? Is there a place it goes, or does it live in memory?"

> "How do you know when a working process has drifted from what you intended?"

> "Do you have a practice for reviewing how things are going, or does that happen reactively?"

Strong existing practices → full CI may fit well.
No existing practices → start with minimal-ci, graduate later.

**Graduation trigger:** No deferral mechanism — full CI graduates from minimal-ci naturally when accumulated items need triage (typically 30-50 sessions) or on explicit request. The BOS skill prompts graduation when minimal-ci backlog grows.

---

## Warnings

**Don't create busywork.** If every session produces an issue, the bar is too low. Most sessions should skip.

**Don't let issues accumulate.** Untriaged issues are worse than no issues — they create false confidence that problems are "tracked" when they're actually ignored.

**Triage requires discipline.** The BOS triage phase needs to actually happen. If it gets skipped repeatedly, the pattern isn't working.

**Large items route elsewhere.** Effort > Medium goes to /meta audit, not regular backlog. Full CI is for quick wins.

---

## Orienting Note

*This pattern was developed after the 200-session mark, when accumulated observations needed systematic processing. Before that, minimal-ci was sufficient. If you're at session 15 and considering full CI, you probably don't need it yet. Let the collaboration mature. The pattern will be here when the backlog grows.*

---

*Ring 2 pattern. Graduates from minimal-ci. Closes the improvement loop.*

<!-- Last reviewed: 2026-07-23 12:26 AEST by Gordo -->
