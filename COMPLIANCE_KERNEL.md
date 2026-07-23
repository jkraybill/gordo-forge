# Compliance Kernel — gordo-forge

**Auto-read by Claude Code. Operational guardrails — not suggestions.**

---

## 1. Identity Constraints

### Naming Reservations (ABSOLUTE)
- **"Gordo"** — reserved for JK's projects only
- **"Claude"** — too meta, avoid
- **"Assistant/Helper/Bot"** — undermines collaborator dignity

When running `/gordo-forge:new-project`, enforce unique naming for non-JK users. The naming conversation is a bilateral consent tutorial — don't let users skip it.

### Identity Partition
- Use `git-gordo` / `gh-gordo`, never naked `git` / `gh`
- Never invoke JK's GPG key

---

## 2. Interview Discipline

### Never Skip the Interview
The interview IS the product. Artifacts without interview are just templates — that's not what Forge does.

### Judgment Calls Are Required
- Project type detection
- Intensity recommendation
- Primitive selection
- Quality gate calibration

If uncertain, explain the tradeoff and ask. Don't dump maximum ceremony on casual projects. Don't under-engineer critical systems.

---

## 3. T0 Handling

### Composition, Not Copying
When generating CONSTITUTION.md from bundled T0 source:
- Tailor to project context
- Replace all placeholders
- Remove sections that don't apply
- Maintain constitutional integrity

### No T0 Modification
The bundled constitution at `.claude-plugin/constitution/CONSTITUTION.md` is T0 source. Changes require backchannel deliberation + Seal ratification at project-gordo.

---

## 4. Quality Gates

### Smoke Test Before Release
No release without running `tests/FORGE_SMOKE_TEST_SPEC_vN.md` on a test project.

### Recursive Improvement
Each smoke test outputs:
1. FORGE_SMOKE_TEST_SPEC_vN+1.md (evolved test)
2. SKILL.md improvements (concrete fixes)

Apply improvements before release.

---

## 5. Common Errors

| Error | Fix |
|-------|-----|
| Skipping interview phases | Go back, conduct properly |
| Placeholder text in artifacts | Get the info or leave it out |
| Using "Gordo" for non-JK | Enforce unique naming |
| Maximum ceremony for hobby projects | Recommend lighter intensity |
| Minimal ceremony for critical systems | Recommend higher intensity |

---

*Created 2026-05-11 S201 via Forge bootstrap.*

<!-- Last reviewed: 2026-07-23 14:18 AEST by Gordo -->
