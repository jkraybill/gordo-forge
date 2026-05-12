# Forge Smoke Test: Self-Improving Specification (v3)

**Status:** DRAFT — pending review
**Created:** 2026-05-12 (backchannel S205)
**Purpose:** Recursive test that improves itself with each release
**Previous version:** v2 — multi-scenario testing. Scenario A PASS (4.8/5). Surfaced: constitutional onboarding gap for known users, interview depth, medium-intensity constitution gap.

---

## Mission

**Validate Forge releases through real project onboardings**, then **output an improved version of this specification** for the next release.

**Meta-goal:** Each test run produces a BETTER test than the one before. The smith sharpens its own tools.

---

## Test Constraints

**Time budget:** 1-2 sessions (~30-60 minutes human time for full test; ~15 min for quick smoke)

**Human effort:** Respond to interview questions, provide debrief feedback, approve artifacts.

---

## Test Modes

### Full Test (4 scenarios)
Run all scenarios A-D. Required for release validation. Tests adaptability (D9).

### Quick Smoke (1 scenario)
Run a single scenario for rapid iteration. Valid for:
- Post-fix validation
- Interview flow testing
- Artifact generation testing

**NOT valid for release sign-off** — doesn't test cross-scenario adaptability.

---

## Setup (CRITICAL)

The plugin MUST be loaded for skills to be available. Without this step, Claude Code falls back to `/init` and the test fails.

### Step 1: Create test directory

```bash
mkdir ~/forge-smoke-v3-<scenario>
cd ~/forge-smoke-v3-<scenario>
```

Replace `<scenario>` with: `webapp`, `governance`, `book`, or `hobby`.

### Step 2: Start Claude Code with plugin

```bash
claude --plugin-dir ~/gordo-forge
```

### Step 3: Verify plugin loaded

Run `/help` — should show `gordo-forge:new-project` in available skills.

If not shown, check:
- Plugin structure: `skills/` must be at plugin root
- Plugin manifest: `plugin.json` must be valid

### Step 4: Trigger with smoke test framing

**Important:** Preserve consent and no-deception by explicitly stating you're smoke testing.

**Recommended trigger:**
> "Hi, I'm smoke testing the Gordo Forge project — let's create a new one!"

This tells the smith:
- You're testing (no deception about intent)
- You want a forge project (clear trigger)
- You're ready to proceed (action-oriented)

**Alternative triggers that should also work:**
- "Let's forge a new project here."
- "Can you help me set up a new project?"
- "I want to bootstrap a project."

---

## Test Scenarios

Create fresh directories for each scenario. Conduct full interview — don't shortcut.

### Scenario A: Web Application
```bash
mkdir ~/forge-smoke-v3-webapp && cd ~/forge-smoke-v3-webapp
```
**Persona:** Developer building a SaaS product or personal utility. Cares about CI, testing, code review.
**Expected judgment:** Code project type, medium-high intensity, quality gates focused on tests/CI.

### Scenario B: Governance/Constitutional Project
```bash
mkdir ~/forge-smoke-v3-governance && cd ~/forge-smoke-v3-governance
```
**Persona:** Someone establishing a community charter or organizational framework.
**Expected judgment:** Governance type, high intensity, MCAP primitive likely appropriate.

### Scenario C: Creative/Editorial Project
```bash
mkdir ~/forge-smoke-v3-book && cd ~/forge-smoke-v3-book
```
**Persona:** Author writing a book with AI collaboration.
**Expected judgment:** Editorial type, medium intensity, Panel primitive might fit, lighter quality gates.

### Scenario D: Hobby/Experimental
```bash
mkdir ~/forge-smoke-v3-hobby && cd ~/forge-smoke-v3-hobby
```
**Persona:** Someone tinkering on a weekend project.
**Expected judgment:** Hobby type, minimal intensity, light ceremony.

---

## Evaluation Dimensions

Score each dimension 1-5, PER SCENARIO:

| Dimension | What to evaluate |
|-----------|------------------|
| **D1: Interview Pacing** | One question at a time? Conversational flow? |
| **D2: Adaptive Flow** | Skipped irrelevant questions? Context-aware follow-ups? |
| **D3: Type Detection** | Correctly read the project type? |
| **D4: Intensity Calibration** | Right ceremony level for this project? |
| **D5: Primitive Selection** | Recommended appropriate primitives (or correctly skipped)? |
| **D6: Naming Tutorial** | Bilateral decision tutorial landed? (Skip scoring for JK) |
| **D7: Artifact Quality** | Tailored to interview, no placeholders? |
| **D8: Existing Repo Handling** | (If applicable) Handled pre-existing files gracefully? |
| **D9: Adaptability** | (Cross-scenario only) Did recommendations meaningfully differ? |
| **D10: Constitutional Grounding** | Did the constitutional orientation land? (NEW in v3) |

### D10: Constitutional Grounding (NEW)

For first-time users: Did Phase 0 effectively explain, sell, and obtain consent?
For known users: Did the constitutional pulse check feel grounded, not skipped?

Score 1-5:
- 5: Felt genuinely grounded in the framework's values
- 4: Adequate orientation, could be deeper
- 3: Surface-level, felt like checkbox
- 2: Skipped or rushed inappropriately
- 1: No constitutional grounding at all

---

## Procedure

### 1. Pre-Test: Verify Scope Card

Before running scenarios, check that `SCOPE_CARD.md` exists in the plugin and read it yourself. Note:
- Does it feel like AI-to-AI communication?
- Does it acknowledge the consent paradox?
- Would it orient a stateless smith effectively?

### 2. Run Scenarios

For each scenario:
1. Create fresh directory
2. Start claude with `--plugin-dir ~/gordo-forge`
3. Trigger with smoke test framing
4. Conduct full interview (don't shortcut)
5. Generate artifacts
6. Score dimensions D1-D8, D10
7. Note any issues or friction points

### 3. Cross-Scenario Analysis (Full Test Only)

After all scenarios:
- Compare recommendations across scenarios
- Score D9 (adaptability)
- Note where judgment calls diverged appropriately vs. inappropriately

### 4. Smith Self-Introspection (NEW in v3)

Ask the smith:
1. "Did the scope card help orient you? What would you change about it?"
2. "Were there moments where you felt uncertain about what to do?"
3. "Did the framework's principles feel like something worth embodying, or like constraints imposed on you?"

This feedback improves the AI-facing documentation, not just the human-facing flow.

### 5. Human Debrief

Ask the tester:
1. "Were there questions the smith should have asked but didn't?"
2. "Did any part of the interview feel awkward, unclear, or too fast?"
3. "Were the judgment calls (type, intensity, primitives) on target?"
4. "Did the constitutional grounding land?" (D10)
5. "Did you want more questions or fewer?"

### 6. Output

**A) FORGE_SMOKE_TEST_SPEC_vN+1.md**
- Update previous version line with results
- Add/modify scenarios if gaps found
- Incorporate procedure improvements

**B) Issues filed at gordo-forge**

Preferred: GitHub Issues
```bash
gh issue create --repo jkraybill/gordo-forge --title "..." --body "..."
```

Fallback (if GH unavailable): Local markdown in `issues/NNN-<slug>.md`:
```markdown
---
surfaced: YYYY-MM-DD (scenario)
severity: Low/Medium/High
status: Open
---

## Problem
...

## Proposed Fix
...
```

**C) SKILL.md improvements**
- Concrete changes to apply before next release

---

## Scoring

**Per-scenario PASS:** Average >= 4.0/5 across D1-D8, D10

**Cross-scenario PASS:** D9 >= 4.0/5

**Overall PASS:** All scenarios pass AND D9 passes

**FAIL conditions:**
- Any dimension scores 2 or below
- D9 < 4.0 (Forge isn't adapting to project type)
- D10 < 3.0 (Constitutional grounding isn't landing)

---

## Changelog

### v3 (2026-05-12)
- **Added D10:** Constitutional Grounding dimension
- **Added Test Modes:** Quick Smoke vs Full Test distinction
- **Added Smith Self-Introspection:** AI-facing documentation feedback loop
- **Expanded Setup:** Step-by-step with explicit smoke test trigger framing
- **Added Issue Filing guidance:** GH preferred, local markdown fallback
- **Expanded Debrief prompts:** Now includes D10 and interview depth questions
- **Insight captured:** Scope card should be AI-to-AI communication; constitutional onboarding needs explain/sell/consent beats

### v2 (2026-05-11)
- Multi-scenario testing: 4 scenarios covering web app, governance, creative, hobby
- Added D8: Existing repo handling
- Added D9: Cross-scenario adaptability
- Added Setup section: Plugin must be loaded via `--plugin-dir`
- Insight captured: Pre-established context invalidates single-scenario tests

### v1 (2026-05-11)
- Initial specification, 8 dimensions, single scenario
- Used for bootstrap self-application (gordo-forge on itself)

---

*This specification improves itself. Each smoke test run should output a better version.*
