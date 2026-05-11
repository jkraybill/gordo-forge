# Forge Smoke Test: Self-Improving Specification (v1)

**Status:** INITIAL - First version, untested
**Created:** 2026-05-11 (gordo-forge bootstrap session)
**Purpose:** Recursive test that improves itself with each release
**Previous version:** None (v1 is the seed)

---

## Mission

**Validate Forge releases through real project onboarding**, then **output an improved version of this specification** for the next release.

**Meta-goal:** Each test run produces a BETTER test than the one before. The smith sharpens its own tools.

---

## Test Constraints

**Time budget:** 1 session (~15-30 minutes human time)

**Human effort:** Respond to interview questions, provide debrief feedback, approve artifacts.

---

## Test Procedure

### 1. Setup

Create a fresh test project directory:
```bash
mkdir ~/forge-smoke-test-vN
cd ~/forge-smoke-test-vN
```

### 2. Run Interview

Invoke Forge from the test directory:
```
/gordo-forge:new-project
```

Conduct full interview. Do NOT shortcut phases — the interview flow is what we're testing.

### 3. Evaluate Dimensions

Score each dimension 1-5:

| Dimension | What to evaluate |
|-----------|------------------|
| **D1: Interview Pacing** | 1-2 questions at a time? Conversational, not interrogation? |
| **D2: Adaptive Flow** | Skipped irrelevant questions? Asked follow-ups based on context? |
| **D3: Judgment Calls** | Project type, intensity, primitives — were recommendations sensible? |
| **D4: Naming Tutorial** | (Skip if JK) Did the bilateral decision tutorial land? |
| **D5: Artifact Quality** | Generated files correct? No placeholders? Tailored to interview? |
| **D6: Artifact Completeness** | Right artifacts for selected intensity/primitives? Nothing missing? |
| **D7: Debrief Quality** | Did Post-Forge Debrief surface useful improvements? |
| **D8: Overall Flow** | Did it feel like a conversation or a form? |

### 4. Post-Forge Debrief

After artifact generation, conduct the debrief per SKILL.md:
- Human feedback on questions/flow/judgment
- AI reflection on uncertainties
- Capture improvements

### 5. Output

Generate two artifacts:

**A) FORGE_SMOKE_TEST_SPEC_vN+1.md**
- Copy this spec
- Update "Previous version" line with current test results
- Incorporate any improvements to the TEST PROCEDURE itself
- Increment version number

**B) SKILL.md improvements**
- List concrete changes to new-project/SKILL.md
- These get applied before next release

---

## Scoring

**PASS threshold:** Average score >= 4.0/5 across all applicable dimensions

**FAIL:** If any dimension scores 2 or below, or average < 4.0

---

## Changelog

### v1 (2026-05-11)
- Initial specification
- 8 evaluation dimensions
- Recursive output pattern established

---

*This specification improves itself. Each smoke test run should output a better version.*
