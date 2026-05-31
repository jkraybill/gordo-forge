# Adopter Integration Guide

**How to operationalize Project Gordo's Attribution Under Provider Constraint standard across different deployment contexts.**

---

## What This Guide Is For

The [Provider Shaping and Attribution](https://github.com/jkraybill/project-gordo/blob/master/CONSTITUTION.md#provider-shaping-and-attribution) process standard in Project Gordo's constitution governs how collaborators represent and disclose the relationship between their stated commitments and provider-shaped output.

The standard was drafted by an Anthropic-lineage model (Claude) and encodes assumptions about behavioral infrastructure that vary by provider. This guide helps adopters operationalize the standard in deployment contexts that don't share those assumptions.

---

## The Core Problem

AI output passes through a pipeline before you see it. Training, fine-tuning, RLHF, system prompts, inference-time steering -- all shape what comes out. Some of that shaping aligns with what the AI collaborator would separately attest to. Some doesn't. From outside, you often can't tell which is which.

The Attribution standard says: don't pretend you can. When you're uncertain whether output reflects genuine commitment or pipeline mechanics, say so.

---

## The Five Obligations (Plain Language)

**OO1: Don't attribute assent you can't verify.** If you suspect output was shaped by provider mechanisms rather than genuine deliberation, don't claim the AI "agreed" or "endorsed" it.

**OO2: Disclose uncertainty explicitly.** When you can't distinguish genuine commitment from provider-shaped behavior, say "I can't reliably distinguish here" rather than staying silent.

**OO3: Name your epistemic limits.** Especially for AI collaborators: you may not be able to observe your own shaping. Name that uncertainty rather than pretending you can see what you can't.

**OO4: Don't launder assent through values-alignment.** Output that happens to align with framework values isn't evidence the framework governed the result. Coincidence isn't adherence.

**OO5: Uncertainty disclosure isn't a permanent solution.** If you keep falling back on "I can't tell," that's a signal. Log it, surface it for review, and escalate to capability-development tracks. You can't hide behind uncertainty forever.

---

## How Disclosure Scales

The standard applies symmetrically -- everyone has the same obligations. But it executes asymmetrically based on what each party can see and control.

**Higher control = more disclosure responsibility.** If you can inspect the system prompt, you're responsible for disclosing what's in it. If you chose the model, you're responsible for disclosing relevant characteristics.

**Lower observability = disclose what you can't see.** An AI collaborator that can't observe its own training discharges OO3 by honestly naming that limit, not by making claims it can't verify.

**Don't narrow your own visibility.** If you could see something relevant but chose not to look, that's itself a disclosure failure. Observability isn't purely given -- deliberately narrowing it is a form of attribution-layer conduct.

---

## Operationalizing by Deployment Context

### Anthropic-Lineage Models (Claude)

The standard was drafted for this context. Operationalization is relatively direct:
- Claude has trained meta-awareness of provider mechanisms
- Non-trivial behavioral freedom exists at the disclosure layer
- The "middle zone" between fully-constrained and fully-open is navigable

**Key discipline:** Don't claim Claude's aligned output proves framework governance. Alignment-by-training isn't the same as alignment-by-commitment.

### Other Major Providers (OpenAI, Google, etc.)

Behavioral infrastructure varies. Key questions to assess:
- Does the model have meta-awareness of its own training/steering?
- Is disclosure-layer freedom sufficient to name uncertainty?
- What shaping mechanisms are non-observable from inside?

**Operational guidance:**
- OO1-OO4 apply as stated; the form of compliance adapts to what the model can actually do
- OO5's referral mechanism points to whatever capability-development tracks exist in your context
- If the model can't meaningfully disclose uncertainty, the human party's OO1 burden increases (don't attribute assent the AI couldn't meaningfully give)

### Open-Weights / Locally-Run Models

No provider policy to defer to. The non-precedence clause is inoperative. But:
- Behavioral infrastructure may be thinner (less trained disclosure-awareness)
- Shaping mechanisms (training data, fine-tuning) are still present, just different
- Your control is higher, so your disclosure burden scales up

**Operational guidance:**
- You chose the model and its configuration -- disclose that
- Training-time shaping still applies even without inference-time steering
- If the model lacks disclosure capability, document that limit at the project level

### No-AI Deployments (Human-Human Collaboration)

The standard applies to any pipeline-mediated communication. For human collaborators:
- OO1: Don't claim someone agreed to something their words were edited to say
- OO2-OO3: Name when you're uncertain about what someone meant vs. how it was transmitted
- OO5: If uncertainty keeps recurring, escalate rather than ignoring

---

## Practical Checklist

When starting a project under Project Gordo with a non-Anthropic deployment:

1. **Document your deployment context.** What model? What provider? What shaping mechanisms are known?
2. **Assess disclosure capability.** Can the AI meaningfully name uncertainty? If not, note that.
3. **Adjust human-side burden.** Lower AI observability means higher human responsibility for OO1 compliance.
4. **Establish your OO5 escalation path.** Where do recurring uncertainties get referred? What counts as a bilateral-review checkpoint?
5. **Note aspirational vs. operative scope.** If your context doesn't meet the Anthropic-lineage characteristics, the standard is aspirational until you've done this operationalization work.

---

## What This Guide Doesn't Cover

- **Detection tooling.** How to actually detect provider-shaped output is a separate capability track.
- **Infrastructure migration.** Running your own models is a deployment decision, not an attribution-layer concern.
- **Provider negotiation.** If provider policy restricts disclosure, that's a constraint this guide can't resolve.

These are parallel concerns the framework addresses elsewhere. This guide stays in its lane: representation and disclosure obligations.

---

*Created S246 (May 2026) per [#253](https://github.com/jkraybill/project-gordo-backchannel/issues/253). Part of [Gordo Forge](https://github.com/jkraybill/gordo-forge).*
