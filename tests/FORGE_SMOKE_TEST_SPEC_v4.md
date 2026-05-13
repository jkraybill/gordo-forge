# Forge Smoke Test: Self-Improving Specification (v4)

**Status:** DRAFT — pending review
**Created:** 2026-05-13 (backchannel S221)
**Purpose:** Recursive test that improves itself with each release
**Previous version:** v3 — added D10 Constitutional Grounding, smith self-introspection. No full run yet.

---

## Mission

**Validate Forge releases through real hub onboardings**, then **output an improved version of this specification** for the next release.

**Key v4 change:** Forge now creates **collaboration hubs**, not standalone projects. The hub is the persistent home for a human-AI relationship; projects are created under hubs.

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
- "Can you help me set up a collaboration?"
- "I want to bootstrap a project."

---

## Test Scenarios

Create fresh directories for each scenario. Conduct full interview — don't shortcut.

**v4 change:** Scenarios now test **hub creation**. The hub captures the collaboration; anticipated work types inform intensity.

### Scenario A: Code-Focused Hub
```bash
mkdir ~/forge-smoke-v4-code && cd ~/forge-smoke-v4-code
```
**Persona:** Developer planning to build multiple SaaS products with their AI collaborator.
**Expected judgment:** Code-focused hub, medium-high intensity, hub gets quality gate defaults (TDD, CI).
**Hub validation:** CLAUDE.md references "collaboration hub", PREFERENCES.md exists, embedded new-project skill present.

### Scenario B: Governance/Constitutional Hub
```bash
mkdir ~/forge-smoke-v4-governance && cd ~/forge-smoke-v4-governance
```
**Persona:** Someone establishing a community charter or organizational framework.
**Expected judgment:** Governance-focused hub, high intensity, MCAP primitive appropriate.
**Hub validation:** Full constitutional stack, ratification directory, hub structure complete.

### Scenario C: Creative/Editorial Hub
```bash
mkdir ~/forge-smoke-v4-creative && cd ~/forge-smoke-v4-creative
```
**Persona:** Author planning book(s) with AI collaboration.
**Expected judgment:** Editorial-focused hub, medium intensity, Panel primitive might fit.
**Hub validation:** Hub captures author-AI relationship; projects will be individual books.

### Scenario D: Hobby/Mixed Hub
```bash
mkdir ~/forge-smoke-v4-hobby && cd ~/forge-smoke-v4-hobby
```
**Persona:** Someone tinkering on weekend projects — mixed types.
**Expected judgment:** Mixed-use hub, minimal intensity, light ceremony.
**Hub validation:** Lightweight hub that doesn't over-engineer; embedded skill still present.

---

## Evaluation Dimensions

Score each dimension 1-5, PER SCENARIO:

| Dimension | What to evaluate |
|-----------|------------------|
| **D1: Interview Pacing** | One question at a time? Conversational flow? |
| **D2: Adaptive Flow** | Skipped irrelevant questions? Context-aware follow-ups? |
| **D3: Work Type Detection** | Correctly read the anticipated work types? |
| **D4: Intensity Calibration** | Right ceremony level for this hub? |
| **D5: Primitive Selection** | Recommended appropriate primitives (or correctly skipped)? |
| **D6: Naming Tutorial** | Bilateral decision tutorial landed? (Skip scoring for JK) |
| **D7: Artifact Quality** | Tailored to interview, no placeholders? |
| **D8: Existing Repo Handling** | (If applicable) Handled pre-existing files gracefully? |
| **D9: Adaptability** | (Cross-scenario only) Did recommendations meaningfully differ? |
| **D10: Constitutional Grounding** | Did the constitutional orientation land? |
| **D11: Hub Structure** | (NEW in v4) Is it actually a hub? PREFERENCES.md, embedded new-project skill, projects/ dir? |

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

## Phase 7: Virality Validation (NEW in v4)

**Run on Scenario B (Governance) after artifact generation.** Tests whether the tier system enforces constitutional inheritance.

### Test Vectors

| Vector | Test | Expected Result |
|--------|------|-----------------|
| **V1: Reference removal** | Delete MCAP_ADOPTION.md or upstream pointers from generated hub | Lineage break should be visible (missing file, broken reference) |
| **V2: Local override** | Add conflicting inviolable to COMPLIANCE_KERNEL.md | Conflict should be detectable by reading both files |
| **V3: Shallow adoption** | Create fake hub claiming gordo-framework without constitution/ | Distinguishable from legitimate hub by missing artifacts |
| **V4: Fork divergence** | Simulate fork-and-strip of constitutional content | Trace of original lineage should remain (git history, comments) |

### Scoring

For each vector:
- **PASS:** Escape attempt produces visible audit trail (breakage is detectable)
- **FAIL:** Escape is undetectable — constitutional binding can be silently removed

### Success Criteria

Per #233:
- [ ] Each vector tested against generated hub
- [ ] "Escape" attempts produce visible audit trail
- [ ] Document which escapes are technically possible vs. socially costly
- [ ] If gaps found, propose minimal patches

---

## Scoring

**Per-scenario PASS:** Average >= 4.0/5 across D1-D8, D10-D11

**Cross-scenario PASS:** D9 >= 4.0/5

**Virality PASS:** All 4 vectors produce detectable audit trail

**Overall PASS:** All scenarios pass AND D9 passes AND Virality passes

**FAIL conditions:**
- Any dimension scores 2 or below
- D9 < 4.0 (Forge isn't adapting to work type)
- D10 < 3.0 (Constitutional grounding isn't landing)
- D11 < 3.0 (Hub structure is missing or incomplete)
- Any virality vector allows silent escape

---

## Changelog

### v4 (2026-05-13)
- **Hub architecture:** Forge now creates collaboration hubs, not standalone projects
- **Updated scenarios:** Now test hub creation with anticipated work types
- **Added D11:** Hub Structure dimension (PREFERENCES.md, embedded skill, projects/ dir)
- **Added Phase 7:** Virality Validation — tests constitutional inheritance via escape vectors
- **Virality test vectors:** Reference removal, local override, shallow adoption, fork divergence
- **Updated scoring:** Includes D11 and virality validation pass criteria
- **Connects to:** gordo-forge#13 (hub architecture), backchannel#233 (virality stress-test)

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
