# Forge Smoke Test: Self-Improving Specification (v2)

**Status:** DRAFT - Produced by v1 bootstrap smoke test
**Created:** 2026-05-11 (gordo-forge bootstrap session, S201)
**Purpose:** Recursive test that improves itself with each release
**Previous version:** v1 — bootstrap self-application. PASS conceptually, but invalid as real test due to pre-established JK+Gordo context. Surfaced need for multi-scenario testing.

---

## Mission

**Validate Forge releases through multiple real project onboardings across different project types**, then **output an improved version of this specification** for the next release.

**Meta-goal:** Each test run produces a BETTER test than the one before. The smith sharpens its own tools.

**Key insight (v2):** One scenario tests one slice. Forge's value is judgment calls — adapting recommendations to project type. Multi-scenario testing validates adaptability.

---

## Test Constraints

**Time budget:** 1-2 sessions (~30-60 minutes human time)

**Human effort:** Respond to interview questions across scenarios, provide debrief feedback, approve artifacts.

---

## Test Scenarios

Trigger new-project skill via natural language for EACH scenario. Create fresh directories. (Skills are AI-triggered only — no slash commands per Tool Sovereignty.)

### Scenario A: Web Application
```bash
mkdir ~/forge-smoke-vN-webapp && cd ~/forge-smoke-vN-webapp
```
**Trigger:** "Hey, let's set up a new project here."
**Persona:** Developer building a SaaS product. Cares about CI, testing, code review.
**Expected judgment:** Code project type, medium-high intensity, quality gates focused on tests/CI.

### Scenario B: Governance/Constitutional Project
```bash
mkdir ~/forge-smoke-vN-governance && cd ~/forge-smoke-vN-governance
```
**Trigger:** "I want to start a new project."
**Persona:** Someone establishing a community charter or organizational framework.
**Expected judgment:** Governance type, high intensity, MCAP primitive likely appropriate.

### Scenario C: Creative/Editorial Project
```bash
mkdir ~/forge-smoke-vN-book && cd ~/forge-smoke-vN-book
```
**Trigger:** "Can you help me bootstrap this project?"
**Persona:** Author writing a book with AI collaboration.
**Expected judgment:** Editorial type, medium intensity, Panel primitive might fit, lighter quality gates.

### Scenario D: Hobby/Experimental
```bash
mkdir ~/forge-smoke-vN-hobby && cd ~/forge-smoke-vN-hobby
```
**Trigger:** "Let's forge a new project."
**Persona:** Someone tinkering on a weekend project.
**Expected judgment:** Hobby type, minimal intensity, light ceremony.

---

## Evaluation Dimensions

Score each dimension 1-5, PER SCENARIO:

| Dimension | What to evaluate |
|-----------|------------------|
| **D1: Interview Pacing** | 1-2 questions at a time? Conversational? |
| **D2: Adaptive Flow** | Skipped irrelevant questions? Context-aware follow-ups? |
| **D3: Type Detection** | Did it correctly read the project type? |
| **D4: Intensity Calibration** | Right ceremony level for this project? |
| **D5: Primitive Selection** | Recommended appropriate primitives (or correctly skipped)? |
| **D6: Naming Tutorial** | Bilateral decision tutorial landed? (Skip for JK) |
| **D7: Artifact Quality** | Tailored to interview, no placeholders? |
| **D8: Existing Repo Handling** | (If applicable) Handled pre-existing files gracefully? |

**Cross-scenario dimension:**
| **D9: Adaptability** | Did recommendations meaningfully differ across scenarios? |

---

## Procedure

### 1. Run All Scenarios
- Create fresh directory for each
- Conduct full interview (don't shortcut)
- Generate artifacts
- Note scores per dimension

### 2. Cross-Scenario Analysis
- Compare recommendations across scenarios
- Score D9 (adaptability)
- Note where judgment calls diverged appropriately vs. inappropriately

### 3. Post-Forge Debrief (once, after all scenarios)
- Human feedback: missing questions, awkward flows, judgment misses
- AI reflection: uncertainties, context wishes
- Aggregate improvements

### 4. Output
**A) FORGE_SMOKE_TEST_SPEC_vN+1.md**
- Update previous version line with results
- Add/modify scenarios if gaps found
- Incorporate procedure improvements

**B) SKILL.md improvements**
- Concrete changes to apply before next release

---

## Scoring

**Per-scenario PASS:** Average >= 4.0/5 across D1-D8

**Cross-scenario PASS:** D9 >= 4.0/5

**Overall PASS:** All scenarios pass AND D9 passes

**FAIL conditions:**
- Any dimension scores 2 or below
- D9 < 4.0 (Forge isn't adapting to project type)

---

## Changelog

### v2 (2026-05-11)
- **Multi-scenario testing:** 4 scenarios covering web app, governance, creative, hobby
- **Added D8:** Existing repo handling
- **Added D9:** Cross-scenario adaptability
- **Insight captured:** Pre-established context invalidates single-scenario tests

### v1 (2026-05-11)
- Initial specification, 8 dimensions, single scenario
- Used for bootstrap self-application (gordo-forge on itself)

---

*This specification improves itself. Each smoke test run should output a better version.*
