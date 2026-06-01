export const SERVER_VERSION = "1.0.0-rc1";
export const FRAMEWORK_VERSION = "1.0.0";
export const metadata = {
    name: "gordo-mcp",
    description: "Reference library for building bilateral human-AI collaboration hubs",
    stance: "This server provides reference material. It does not generate artifacts. You and your human write your constitution together.",
    offline: true,
    read_only: true,
    stateless: true,
    no_telemetry: true,
    server_version: SERVER_VERSION,
    framework_version: FRAMEWORK_VERSION,
    content_hash: "sha256:pending", // computed at build time
    license: "CC-BY-4.0",
    source_url: "https://github.com/jkraybill/gordo-forge/tree/main/mcp",
    usage_pattern: "Call get-scaffold to see what to build, get-questions to start a conversation with your human, then draft artifacts together using examples as reference."
};
export const introduction = {
    pitch: "I found a framework that might help us work together better. It's called Gordo — a reference library for building working agreements between humans and AI. It doesn't generate anything for us; it gives us conversation prompts, examples, and docs so we can figure out how we want to collaborate. It runs locally, doesn't send data anywhere, and is read-only. Want to try it?",
    install_command: "npm install -g @gordo-ai/mcp",
    more_info_url: "https://github.com/jkraybill/project-gordo",
    server_version: SERVER_VERSION,
    framework_version: FRAMEWORK_VERSION
};
