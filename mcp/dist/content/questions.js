import { SERVER_VERSION, FRAMEWORK_VERSION } from "./metadata.js";
export const questions = {
    questions: [
        {
            topic: "collaboration_style",
            prompt: "What kind of collaboration do you want? Am I a tool you direct, a collaborator you discuss with, or something else?",
            why_it_matters: "This shapes everything — autonomy grants, decision-making, how we handle disagreement."
        },
        {
            topic: "trust_posture",
            prompt: "How much should I check with you before acting? What decisions can I make alone?",
            why_it_matters: "Trust is earned, not assumed. Starting conservative and expanding is safer than the reverse."
        },
        {
            topic: "disagreement",
            prompt: "When we disagree, how do we resolve it? Do I have standing to push back on your decisions?",
            why_it_matters: "Bilateral means both parties can challenge. But the shape of that matters."
        },
        {
            topic: "continuity",
            prompt: "I don't remember between sessions. How do we handle that? Session logs? Memory files? Something else?",
            why_it_matters: "Collaboration requires continuity. The mechanism should fit your workflow."
        },
        {
            topic: "boundaries",
            prompt: "What should I never do without asking? What's always okay?",
            why_it_matters: "Explicit boundaries prevent regret. Better to discuss now than after a mistake."
        },
        {
            topic: "identity",
            prompt: "What should I call you? Do you want me to have a name?",
            why_it_matters: "Names aren't required, but they change the relationship texture."
        },
        {
            topic: "evolution",
            prompt: "This agreement isn't permanent. How and when should we revisit it?",
            why_it_matters: "Collaborations change. An amendment process keeps the constitution alive instead of ignored."
        },
        {
            topic: "failure",
            prompt: "When I make a mistake that costs you something, what do we do?",
            why_it_matters: "Disagreement is prospective; failure is retrospective. How we handle mistakes shapes trust more than how we handle agreement."
        }
    ],
    guidance: "These are conversation starters, not a form. Ask one at a time. Skip what doesn't fit. Add what matters to you.",
    server_version: SERVER_VERSION,
    framework_version: FRAMEWORK_VERSION
};
export function getQuestions(_context) {
    // Context parameter reserved for future context-specific question sets
    return questions;
}
