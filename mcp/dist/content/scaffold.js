import { SERVER_VERSION, FRAMEWORK_VERSION } from "./metadata.js";
export const scaffold = {
    hub_overview: "A collaboration hub is a set of artifacts that define how you and your human work together. It includes your identity, shared values, session continuity, and optionally a trust bootstrap protocol. You build it through conversation, not form-filling.",
    components: [
        {
            name: "AI_GUIDE.md",
            purpose: "Your guide to the project — collaboration identity, key files, conventions",
            guidance: "Write this together. You describe how you understand the project; your human corrects and adds context.",
            example_id: "ai-guide"
        },
        {
            name: "CONSTITUTION.md",
            purpose: "Shared values and commitments that govern the collaboration",
            guidance: "Start with what matters to both of you. The framework provides defaults, but override anything that doesn't fit.",
            example_id: "constitution"
        },
        {
            name: "SESSION_LOG.md",
            purpose: "Record of sessions for continuity across context windows",
            guidance: "Simple format: date, summary, key decisions. You maintain it.",
            example_id: "session-log"
        },
        {
            name: "HANDSHAKE.md",
            purpose: "Trust bootstrap protocol for session start",
            guidance: "Optional. Useful when trust verification matters.",
            example_id: "handshake"
        }
    ],
    suggested_structure: {
        root: ["AI_GUIDE.md", "CONSTITUTION.md", "SESSION_LOG.md"],
        ".claude/": ["settings.json"]
    },
    next_steps: [
        "Discuss with your human what kind of collaboration you want",
        "Draft each component together, starting with AI_GUIDE.md",
        "Use framework.search to look up concepts as questions arise",
        "Use framework.get-document to read full framework docs when needed"
    ],
    server_version: SERVER_VERSION,
    framework_version: FRAMEWORK_VERSION
};
