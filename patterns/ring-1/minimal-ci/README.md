# Pattern: Minimal CI (Continuous Improvement)

**Ring:** 1 (Core — always generated)
**Compression source:** CI Protocol v0.6, refined over 200+ sessions

---

## What It Is

Lightweight self-assessment at session close with optional issue capture. Not full triage — just structured reflection.

**Core question:** "Based on this session, is there anything worth capturing for future improvement?"

---

## Why It Matters

Without systematic capture:
- Pain points get forgotten
- The same friction repeats
- Improvements happen reactively, not proactively
- No data on what's working vs. what's not

Minimal CI catches low-hanging fruit without creating busywork.

---

## When to Use

**Always.** This is Ring 1 — every hub gets it.

The minimal expression is lightweight enough that the cost is near-zero and the upside is real.

---

## Minimal Expression (Nascent Stage)

Single question at EOS:

> "Anything from this session worth noting for future improvement? (Skip if nothing actionable.)"

If yes:
- Capture in one of: GitHub issue, SESSION_LOG note, or scratch file
- Format: What happened, what would help, rough effort (small/medium/large)

**No triage workflow.** Just capture. Triage happens when the collaboration is ready.

**Health check:** At session 20, review accumulated notes. "Are these useful? Should we do more or less?"

---

## Full Expression

See `ring-2/full-ci/` for the complete CI protocol with:
- Structured issue format
- BOS triage workflow (accept/defer/reject/snooze/escalate)
- Stability heuristics
- Health metrics every 20 sessions
- Gate criteria (concrete, evidence-backed, scoped)

**Graduation path:** After 30-50 sessions, or when the collaboration has accumulated enough captured items that triage becomes valuable.

---

## Artifacts Generated

### Always (minimal)
- EOS self-assessment prompt in EOS skill
- Note on capture options (issue, log, scratch)
- Session 20 health check reminder

### If intensity == maximum
- Full CI protocol from day one (see ring-2/full-ci)

---

## Interview Questions

This pattern doesn't require interview questions — it's always generated.

However, the interview can surface readiness for full CI:

> "Do you have existing practices for improving how you work, or would you want to build those from scratch?"

If they have existing practices → may be ready for full CI sooner.

---

## Warnings

**Don't over-capture.** The goal is signal, not volume. If every session produces an issue, something is wrong. Most sessions should skip.

**Don't create false momentum.** Issues filed ≠ problems solved. Minimal CI deliberately avoids triage machinery until the collaboration is ready.

**Skip when stable.** If the last 5 sessions all skipped CI capture, the collaboration may be stable. That's fine — stability is a feature, not a bug.

---

## Orienting Note

*This pattern was developed to balance two failure modes: (1) never capturing improvements, so the same friction repeats forever; (2) over-capturing, creating busywork that crowds out real work. The minimal expression errs toward "capture less, but capture what matters." Trust that instinct.*

---

*Ring 1 pattern. Always generated. Lightweight reflection.*

<!-- Last reviewed: 2026-07-23 12:26 AEST by Gordo -->
