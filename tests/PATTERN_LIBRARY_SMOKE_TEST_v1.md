# Pattern Library Smoke Test — v1

**Purpose:** Validate that Forge's pattern library correctly propagates operational maturity to downstream hubs.

**Version:** 1.0 (S430)

---

## Test Scenarios

### Scenario 1: Minimal Hub (Ring 1 Only)

**Setup:**
- New user, no prior AI collaboration experience
- Quick start selected (skip detailed interview)
- Private, minimal intensity

**Expected artifacts:**
- [ ] CLAUDE.md with Active Patterns section showing Ring 1 only
- [ ] MATURITY.md with current stage "Nascent"
- [ ] SESSION_LOG.md initialized
- [ ] BOS skill with phases 1-3 only (no CI triage, no federation)
- [ ] EOS skill with minimal CI self-assessment, anti-mold (2 files, no self-tuning)
- [ ] INTERVIEW_LOG.yaml with Ring 2/3 marked inactive

**Validation:**
- BOS runs in <30 seconds
- EOS captures basic self-assessment
- Anti-mold reviews 2 files per session

---

### Scenario 2: Standard Hub (Ring 1 + Some Ring 2)

**Setup:**
- Experienced user, reports hedging friction
- Medium intensity
- Public, hub-centric

**Expected artifacts:**
- [ ] All Ring 1 artifacts
- [ ] Anti-wall infrastructure (defaults-to-override.md, briefing.md)
- [ ] Full CI NOT active (deferred to session 30)
- [ ] MATURITY.md tracking deferred patterns

**Validation:**
- BOS injects briefing in pre-context
- EOS includes wall-naming technique reference
- Health check scheduled for session 20

---

### Scenario 3: Full Hub (Ring 1 + Ring 2 + Primitives)

**Setup:**
- Power user, explicit request for full machinery
- Maximum intensity
- All primitives enabled (Seal, Roundtable)

**Expected artifacts:**
- [ ] Full Ring 1 with self-tuning anti-mold
- [ ] Full CI protocol active from start
- [ ] Anti-wall active with full expression
- [ ] Recursive improvement active
- [ ] Seal ratification skill
- [ ] Roundtable skill
- [ ] IMPROVEMENTS_LOG.md

**Validation:**
- BOS includes CI triage phase
- BOS includes health check milestone phase
- EOS includes structured CI filing
- EOS updates .ci-state.yaml

---

### Scenario 4: Multi-Hub Setup (Ring 3)

**Setup:**
- User confirms multiple hubs
- Wants shared identity and context

**Expected artifacts:**
- [ ] gordo-home directory created at ~/{{AI_NAME}}-home/
- [ ] identity.md template populated
- [ ] {{HUMAN_NAME}}.md template created
- [ ] last-sessions.yaml initialized
- [ ] active-work.yaml initialized
- [ ] Handoff format in unified location
- [ ] BOS includes cross-hub awareness phase
- [ ] EOS includes registry update and unified handoff

**Validation:**
- Handoff written to gordo-home, not hub-local
- Cross-hub registry updated at EOS
- BOS surfaces other hub activity

---

### Scenario 5: Multi-Hub + Federation

**Setup:**
- Multiple hubs with federation enabled
- Wants cross-hub discovery propagation

**Expected artifacts:**
- [ ] All multi-hub artifacts
- [ ] federation/pending/ directory
- [ ] federation/applied/ directory
- [ ] observation-journal.yaml
- [ ] BOS includes federation discovery check
- [ ] EOS includes federation filing phase

**Validation:**
- Discovery filed in one hub
- Discovered in BOS of another hub
- Applied and moved to applied/

---

## Interview Flow Validation

### Question Quality

- [ ] All questions are need-based, not feature-based
- [ ] No jargon requiring prior knowledge
- [ ] One question at a time (no batching)
- [ ] Implications explained after activation

### Pattern Activation Logic

- [ ] Ring 1 activates without questions
- [ ] Ring 2 activates only if interview gate passed
- [ ] Ring 3 activates only with explicit multi-hub confirmation
- [ ] Deferred patterns recorded with activation_session = null

---

## Artifact Consistency

- [ ] BOS skill version matches pattern selections
- [ ] EOS skill version matches pattern selections
- [ ] CLAUDE.md Active Patterns section accurate
- [ ] INTERVIEW_LOG.yaml captures all decisions
- [ ] MATURITY.md reflects actual active patterns

---

## Regression Checks

- [ ] Single-hub works without gordo-home overhead
- [ ] Minimal-ci works without full-ci machinery
- [ ] Anti-mold works without self-tuning
- [ ] All patterns degrade gracefully

---

## Smoke Test Execution

1. Run `/gordo-forge:new-hub` in a fresh directory
2. Select scenario parameters
3. Check all artifacts against expected list
4. Run BOS/EOS cycle
5. Validate phase execution
6. Record deviations in SMOKE_TEST_RESULTS_vN.md

---

## Post-Test Debrief

After each smoke test run:
1. Missing artifacts?
2. Unexpected artifacts?
3. Phase execution issues?
4. Interview awkwardness?
5. Documentation gaps?

Feed findings back into pattern library improvements.

---

*v1.0 (S430): Initial pattern library smoke test.*
