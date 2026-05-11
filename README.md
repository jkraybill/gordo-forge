# Gordo's Forge

**The smithy where T0 principles and T1 primitives are shaped into usable project structures.**

Gordo's Forge is a Claude Code plugin that bootstraps human-AI collaborative projects under the [Project Gordo](https://github.com/jkraybill/project-gordo) umbrella. Unlike traditional scaffolding tools, Forge conducts a cognitive onboarding interview — an AI-mediated conversation that makes judgment calls about how to apply umbrella principles to your specific project.

## Installation

```bash
# Clone the repo
git clone https://github.com/jkraybill/gordo-forge.git ~/gordo-forge

# Start Claude Code with the plugin
claude --plugin-dir ~/gordo-forge
```

## Usage

From any directory where you want to create a new project:

```
/gordo-forge:new-project
```

Claude will conduct an onboarding interview covering:
- Project identity (name, AI collaborator name, human collaborator name)
- Project type (code, research, editorial, etc.)
- Privacy model (public vs private)
- T1 primitives (MCAP, PACT, Panel)
- Framework intensity (maximum ceremony to minimal)
- Trust calibration and autonomy grants
- Quality gates and workflow preferences

Based on your answers, Forge generates tailored artifacts:
- `CONSTITUTION.md` — composed from T0 source
- `CLAUDE.md` — the AI's operational guide
- `COMPLIANCE_KERNEL.md` — inviolable constraints
- `HANDSHAKE.md` — bilateral trust bootstrap
- `.claude/` — skills, hooks, and settings
- Project-type-specific templates

## Other Skills

- `/gordo-forge:add-primitive` — add a T1 primitive (MCAP, PACT, Panel) to an existing project
- `/gordo-forge:upgrade` — upgrade T0 constitution to a newer version

## Philosophy

The Forge isn't a script that generates files. It's an environment that empowers Claude to conduct sophisticated onboarding — making judgment calls, explaining tradeoffs, catching contradictions, and generating artifacts that work together coherently.

The bundled T0 content and templates are raw materials. Claude is the smith.

## Craft Vocabulary

Forge joins the Project Gordo craft vocabulary:
- **Gate** guards entry (scope card)
- **Gauge** measures quality (engagement scoring)
- **Seal** attests authenticity (MCAP)
- **Forge** shapes raw materials into tools (this)

---

*Part of the [Project Gordo](https://github.com/jkraybill/project-gordo) umbrella.*
