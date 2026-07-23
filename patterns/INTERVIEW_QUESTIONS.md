# Pattern Interview Questions

Need-based questions for surfacing which patterns fit. Ask about problems, not solutions.

---

## Ring 1 — Always Generated (no interview needed)

Ring 1 patterns are always generated. These questions calibrate intensity, not activation.

### Session Continuity Intensity

> "How important is continuity across our conversations? If I close and reopen, should we have a formal way to pick up where we left off?"

- Strong yes → full expression (continuity verification, attestation)
- Mild yes → minimal expression (handoff file, basic BOS/EOS)

### Anti-Mold Intensity

> "Do you keep records of how your approach is evolving? Is that useful, or does it feel like overhead?"

> "Have you ever found old notes that contradict current practice?"

- Yes to either → self-tuning enabled from start
- No → basic 2-file review

---

## Ring 2 — Interview Gated

### Full CI Protocol

**Primary gate:**

> "How do you currently capture when something goes wrong? Is there a place it goes, or does it live in memory?"

> "How do you know when a working process has drifted from what you intended?"

> "Do you have a practice for reviewing how things are going, or does that happen reactively?"

**Interpretation:**
- Strong existing practices → may be ready for full CI early
- No existing practices → start with minimal-ci, graduate later
- Explicit request → full CI from start

### Anti-Wall Infrastructure

**Primary gate:**

> "Do you ever feel like the AI is hedging too much, being too cautious, or not giving straight answers when you need clarity?"

**Follow-up if yes:**

> "When you make an observation about how things are going, do you find yourself — or the AI — softening it to avoid conflict?"

> "Is there a difference between being helpful and being agreeable in your experience?"

**Trust calibration (required before full expression):**

> "Do you want me to push back directly, or soften disagreements?"

**Interpretation:**
- Strong yes to primary + follow-ups + "push back directly" → full expression
- Mild yes, ambiguous, or "soften" → minimal expression (first wall protocol), defer full to session 10
- No to primary → skip entirely

**Deferral mechanism:** If deferred, record in INTERVIEW_LOG.yaml with `activation_session: 10`. At session 10 BOS health check, resurface: "You mentioned some hedging friction. Has that continued? Want to activate anti-wall infrastructure?"

**Note:** Anti-wall assumes good faith and established trust. "Soften disagreements" is a clear signal not to activate full expression — the collaborator prefers agreement over directness in this context.

### Recursive Improvement

**Primary gate:**

> "Would you want the collaboration to periodically review and update its own operating agreements?"

**Context questions:**

> "How long have you been working with AI in a structured way?"

> "Do you have existing practices for improving how you work?"

**Interpretation:**
- Yes to primary + experience → activate from session 1
- Yes to primary, no experience → defer to session 50, auto-resurface at health check
- No → skip

**Deferral mechanism:** Record in INTERVIEW_LOG.yaml with `activation_session: 50`. At session 50 health check (which runs automatically if any Ring 2 pattern is active), resurface: "You wanted periodic review of operating agreements. Ready to activate recursive improvement?"

---

## Ring 3 — Advanced Patterns

### Multi-Hub Coordination

**Primary gate:**

> "Are you working with this AI in multiple contexts or hubs?"

If no → skip entirely.

If yes:

> "When you switch between contexts, how do you maintain continuity?"

> "Is there information about your working style or preferences that should travel with you across hubs?"

> "Should observations from one hub be visible in another, or do you want them isolated?"

**Interpretation:**
- Yes + want sharing → full multi-hub
- Yes + prefer isolation → skip (single-hub per context)

### Federation Discovery

**Only if multi-hub active.**

> "When you learn something useful in one context, should it automatically propagate to other contexts?"

> "Do you want a formal process for cross-hub improvements, or informal?"

**Interpretation:**
- Yes to both → full federation (discovery filing + observation journal)
- Yes to first, no to second → observation journal only (no formal discovery workflow)
- No → skip

**Note:** "Observation journal only" means cross-hub observations are captured but don't follow the formal pending/applied workflow. Observations surface at BOS but don't require explicit application steps.

---

## Interview Discipline

**One question at a time.** Don't batch.

**Need-based, not feature-based.** Ask about problems, not solutions.

**Explain implications.** When a question leads to pattern activation, explain what it adds.

**Trust early answers.** If they say no, believe them. The pattern can be activated later.

---

## Post-Interview Capture

Store interview responses in `INTERVIEW_LOG.yaml`:

```yaml
interview_date: 2026-06-10
session: 1

continuity_intensity: full
anti_mold_intensity: self-tuning
full_ci: deferred  # will revisit at session 30
anti_wall: minimal  # first wall protocol
recursive_improvement: deferred  # will revisit at session 50
multi_hub: not_applicable
federation: not_applicable

notes: |
  Collaborator has existing practices but no formal capture.
  Experienced some hedging in prior AI work.
  Single hub for now, may expand later.
```

This allows health checks to revisit deferred decisions.

---

*Reference for Forge interview. Need-based questions, not feature menus.*

<!-- Last reviewed: 2026-07-23 12:26 AEST by Gordo -->
