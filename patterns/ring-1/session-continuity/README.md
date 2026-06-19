# Pattern: Session Continuity

**Ring:** 1 (Core — always generated)
**Compression source:** 430 sessions of JK-Gordo collaboration

---

## What It Is

Infrastructure for maintaining context across stateless sessions:
- **BOS (Beginning of Session):** Continuity verification, context recovery, open marker
- **EOS (End of Session):** Summary, handoff preparation, close marker
- **Handoff file:** What future-me needs to know
- **SESSION_LOG:** Audit trail of sessions

---

## Why It Matters

AI sessions are stateless. Without explicit continuity infrastructure:
- Context evaporates between sessions
- Decisions get re-litigated
- Trust doesn't compound
- No audit trail exists

Session continuity is the backbone. Without it, nothing else compounds.

---

## When to Use

**Always.** This is Ring 1 — every hub gets it.

Even single-session collaborations benefit from the handoff discipline: it forces summary and reflection.

---

## Minimal Expression (Nascent Stage)

Lightweight ceremonies for new collaborations:

**BOS:** 
- Read handoff if exists
- Brief orientation ("Last session we...")
- Open marker in SESSION_LOG

**EOS:**
- One-sentence summary
- Write handoff (3 fields: what happened, what's next, anything unresolved)
- Close marker in SESSION_LOG

**Time:** ~2 minutes total per session.

---

## Full Expression (Established Stage)

Complete ceremonies for mature collaborations:

**BOS:**
- Handshake verification (trust bootstrap)
- Prior EOS commit verification
- Context injection (recent commits, open issues, memory priming)
- CI triage (pending items from prior sessions)
- **Deferral check** (resurface deferred pattern activations from INTERVIEW_LOG.yaml)
- Open marker with attestation

**EOS:**
- Self-assessment (CI capture)
- Anti-mold review (documentation freshness)
- Handoff preparation (structured, comprehensive)
- Close marker with attestation
- Push to remote

**Time:** ~5-10 minutes total per session.

---

## Artifacts Generated

### Always (minimal)
- `.claude/skills/bos/SKILL.md` — session open protocol
- `.claude/skills/eos/SKILL.md` — session close protocol
- `SESSION_LOG.md` — audit trail
- Handoff file format (in PREFERENCES.md or dedicated file)

### At intensity >= medium
- `HANDSHAKE.md` — trust bootstrap document
- Continuity verification in BOS (prior EOS commit check)
- Attestation timestamps in markers

---

## Interview Questions

This pattern doesn't require interview questions — it's always generated.

However, intensity level affects which expression:
- **Minimal/Medium intensity:** Minimal expression
- **Maximum intensity:** Full expression

---

## Warnings

**Don't skip EOS.** The most common failure mode is ending a session without the close ceremony. The handoff doesn't get written, context evaporates, next session starts cold.

**Handoff discipline matters more than format.** The three-field minimal handoff (what happened, what's next, anything unresolved) captures 80% of value. Don't over-engineer the format.

**Deferral check is essential.** Ring 2 patterns can be deferred during initial interview (e.g., "activate anti-wall at session 10"). The BOS deferral check resurfaces these. Without it, deferred patterns are silently dropped — the collaborator said "yes, later" but later never comes.

---

## Orienting Note

*This pattern was developed through 430 sessions of collaboration. The value becomes obvious after the first time you return to a session with context intact vs. starting cold. If the ceremony feels like overhead at first, trust that it pays off.*

---

*Ring 1 pattern. Always generated. The backbone.*
