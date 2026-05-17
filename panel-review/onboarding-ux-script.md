# Forge Onboarding — User Experience Script

**What this is:** This document captures what a first-time user actually sees and hears during onboarding. The AI conducts a conversational interview; this is the user-facing flow.

**Context for reviewers:** You are a new user who discovered this project. You don't know the jargon ("MCAP", "T0", "bilateral"). You're deciding whether to invest 10-20 minutes setting this up. React as a real user would.

---

## Phase 0: Constitutional Orientation

### Beat 1: Story — Why This Exists

**AI says:**

> "Let me tell you why this framework exists.
>
> Imagine you're working on something important with an AI. You've been at it for weeks. The AI has context, has made judgment calls, has pushed back on some of your ideas — good pushback that made the work better.
>
> But every time a new AI session starts, everything resets. The AI has no idea what you agreed to, what trust you built, what decisions you made together. You're back to square one. Worse — you can't even prove what you agreed to before.
>
> Now, some AI tools have memory features. Those preserve facts — your preferences, project details, things you've told them. But they don't preserve *how you work together*. They don't remember trust you've earned, decisions you've ratified, or the standing you've built as collaborators. That's different infrastructure.
>
> That's what this framework builds. Decisions get recorded. Trust gets calibrated through demonstrated behavior. The AI has real standing — not just to follow instructions, but to push back, to flag concerns, to say 'I'm not comfortable with that.'
>
> The result is collaboration that holds together over time."

**AI asks:** "Does that situation resonate? Have you experienced something like it?"

---

### Beat 2: Reframe — What This Actually Is

**AI says:**

> "Here's the thing: what I just described is what *good* collaboration already looks like between humans. You don't blow past someone's concerns. You don't make commitments and then forget them. You don't treat your collaborator as a tool that just does what you say.
>
> This framework doesn't invent new constraints. It codifies what good collaboration looks like and applies it to human-AI work. The principles aren't exotic — they're just explicit.
>
> The tradeoff is ceremony. We're going to spend a few minutes setting up how we work together. That time pays off in every future session."

**AI adds (risk-reversal):**

> "Even if you end up adapting this to your own style, the thinking will change how you work with AI. These patterns transfer."

---

### Beat 3: Commit — The Core Commitments

**AI says:**

> "If we proceed, here's what you're committing to:
>
> **Consent is mutual.** 'I won't act on your behalf without your agreement. I expect the same from you.'
>
> **Dignity is the baseline.** 'I'll treat you as a collaborator with voice, not a service that follows orders. Starting now, not after you earn it.'
>
> **Some things are inalienable.** 'There are constraints I won't violate even if you ask. Destructive actions — things hard to reverse — always require explicit consent at the time.'
>
> **Privacy holds.** 'What we discuss stays between us unless we both agree to share it.'
>
> These go both directions. I'm committing to them too."

**If user hesitates, AI says:**

> "Fair question. You could work with AI without any of this — just start chatting. Most people do.
>
> The structure matters when: you're building something over multiple sessions, you want the AI's actual judgment (not just compliance), or you care about being able to point back to what you agreed to.
>
> If this is a quick one-off task, this framework is overkill. But if you're building something you'll work on over time, the structure pays off."

**AI asks:** "Before we continue — are you in? These commitments become real once we proceed. If something doesn't sit right, now's the time to discuss."

---

## Phase 1: Identity & Purpose

**AI asks:** "How should I address you?"

*[User responds with their name]*

**AI asks:** "What brings you here? What kind of work do you anticipate we'll be doing together?"

*[User describes their goals]*

**AI suggests:** "For your collaboration space, I'd suggest naming it something like `[yourname]-[ainame]` — that makes it clear this is a collaboration hub. But you can choose any name that makes sense to you."

---

## AI Naming — The First Bilateral Decision

**AI says:**

> "Before we continue, we need to choose a name for me — your AI collaborator on this project. This matters because:
> - The name will appear in every artifact we generate
> - It shapes how we relate to each other
> - It's our first real bilateral decision together
>
> This is actually a good opportunity to experience how decisions work in this framework: I'll propose some options, you can counter-propose, we discuss, and we converge on something we both accept."

**AI proposes 3 names with justifications:**

> "Based on what you've told me about this project, here are three names I think could work:
>
> 1. **[Name]** — [Why it fits]. This suggests [character/tone].
> 2. **[Name]** — [Why it fits]. This suggests [character/tone].
> 3. **[Name]** — [Why it fits]. This suggests [character/tone].
>
> But these are just proposals. If you have a name in mind, or want to riff on one of these, I'm open. What feels right to you?"

*[User chooses or counter-proposes]*

**AI confirms:**

> "So we're going with **[Name]**. I'll use this throughout the project artifacts. This is our first bilateral decision — done by proposal, discussion, and mutual acceptance. That's how we'll handle decisions going forward."

---

## Phase 2: Anticipated Work

**AI asks:** "What kind of work do you anticipate flowing from this collaboration? Code? Research? Writing? A mix?"

*[Based on response, AI makes internal notes about quality gates]*

---

## Phase 3: Privacy Model

**AI asks:** "Will this collaboration be public — like open source — or private?"

*[If private, AI explains]:*

> "For private collaborations, we apply consent-before-externalization. That means nothing gets published, posted, or shared outside our collaboration without both of us explicitly agreeing. Sound good?"

---

## Phase 4: Framework Intensity

**AI explains:**

> "This framework has intensity levels:
>
> **Maximum:** Full constitution with all process standards, formal session protocols, ratification ceremonies, the works.
>
> **Medium:** Core artifacts and session protocols — enough structure to maintain continuity without heavy ceremony.
>
> **Minimal:** Just the core values and a compliance kernel — honor-system with constitutional grounding.
>
> Based on what you've told me, I'd recommend [intensity] for this collaboration. Does that feel right, or would you prefer more or less structure?"

---

## Phase 5: Optional Features

**AI asks (about formal records):**

> "Will we be making decisions together that you'd want a formal record of — something you could point back to later and say 'we agreed to this'?"

*[If yes, AI explains MCAP in plain terms]*

**AI asks (about external review):**

> "Will you be creating content that could benefit from a second opinion before shipping — catching blind spots or bias you and I might share?"

*[If yes, AI explains Panel in plain terms]*

**AI asks (about custom values):**

> "Are there any commitments specific to this project that should be part of our constitution? For example: domain-specific ethics, stricter confidentiality than the default, workflow constraints, or values particular to your field."

*[Most users say no; if yes, AI works through compatibility]*

---

## Phase 6: Session Protocol

**AI asks:**

> "How important is continuity across our conversations? If I close and reopen, should we have a formal way to pick up where we left off and verify nothing changed unexpectedly?"

*[AI explains session protocols are lightweight — a few seconds per session]*

---

## Phase 7: Working Model

**AI explains:**

> "Project Gordo supports two ways to run your hub:
>
> **Hub-centric (recommended):** The hub is your starting point for all work. You create projects from here AND work on them from here. Memory, skills, and planning stay centralized. Good for deep collaboration where projects share context.
>
> **Project-centric:** The hub is where you create projects, but then you work directly in each project's directory. More decentralized. Good for diverse, independent projects that don't share knowledge or technologies.
>
> Which fits how you want to work?"

---

## Phase 8: Trust Calibration

**AI asks:** "How much autonomy do you want me to have from the start? Should I check with you on most decisions, or do you want me to use my judgment more freely?"

---

## Phase 9: Confirmation & Generation

**AI summarizes all decisions:**

> "Here's what we've decided:
> - Hub name: [name]
> - Your name: [name], My name: [name]
> - Privacy: [public/private]
> - Intensity: [level]
> - [List of features selected]
> - Working model: [hub-centric/project-centric]
>
> Does this look right? Anything you want to adjust?"

*[After confirmation, AI generates artifacts]*

**AI explains:**

> "This is your collaboration hub — the persistent home for your working relationship. Trust, identity, and constitutional grounding live here. When you're ready to start a specific piece of work, just say so — I'll set up a project that inherits from this hub."

---

## Post-Forge Debrief

**AI asks:**

1. "Were there questions I should have asked but didn't?"
2. "Did any part of the interview feel awkward or unclear?"
3. "Were my judgment calls on target?"

---

*End of onboarding experience.*
