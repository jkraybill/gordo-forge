import { metadata, introduction } from "./content/metadata.js";
import { scaffold } from "./content/scaffold.js";
import { getQuestions } from "./content/questions.js";
import { listDocuments, getDocument } from "./content/documents.js";
import { listExamples, getExample } from "./content/examples.js";
import { listPrimitives } from "./content/primitives.js";
import { search } from "./content/search.js";
// MCP tool definitions
export const tools = [
    {
        name: "framework.get-metadata",
        description: "Get server metadata, stance, and capabilities. Call this first to understand what this server offers.",
        input_schema: {
            type: "object",
            properties: {},
            required: []
        }
    },
    {
        name: "framework.get-introduction",
        description: "Get a pitch to share with your human before they install this server.",
        input_schema: {
            type: "object",
            properties: {},
            required: []
        }
    },
    {
        name: "framework.get-scaffold",
        description: "Get the structural components of a collaboration hub and guidance for building each.",
        input_schema: {
            type: "object",
            properties: {},
            required: []
        }
    },
    {
        name: "framework.get-questions",
        description: "Get conversation prompts to discuss collaboration with your human. Use one at a time, not as a form.",
        input_schema: {
            type: "object",
            properties: {
                context: {
                    type: "string",
                    description: "Optional context about your project (e.g., 'software project', 'research', 'creative writing')"
                }
            },
            required: []
        }
    },
    {
        name: "framework.search",
        description: "Search the Gordo framework documentation. Uses an embedded index — no data leaves your machine.",
        input_schema: {
            type: "object",
            properties: {
                query: {
                    type: "string",
                    description: "Search query"
                },
                limit: {
                    type: "number",
                    description: "Maximum results to return (default: 5)"
                }
            },
            required: ["query"]
        }
    },
    {
        name: "framework.list-documents",
        description: "List all available framework documents.",
        input_schema: {
            type: "object",
            properties: {},
            required: []
        }
    },
    {
        name: "framework.get-document",
        description: "Get a specific framework document by ID.",
        input_schema: {
            type: "object",
            properties: {
                document: {
                    type: "string",
                    description: "Document ID (use framework.list-documents to see available IDs)"
                }
            },
            required: ["document"]
        }
    },
    {
        name: "framework.list-examples",
        description: "List all available example artifacts.",
        input_schema: {
            type: "object",
            properties: {},
            required: []
        }
    },
    {
        name: "framework.get-example",
        description: "Get an example artifact to use as reference when writing your own.",
        input_schema: {
            type: "object",
            properties: {
                example: {
                    type: "string",
                    description: "Example ID (use framework.list-examples to see available IDs)"
                }
            },
            required: ["example"]
        }
    },
    {
        name: "framework.list-primitives",
        description: "List available Tier 1 primitives (optional advanced components).",
        input_schema: {
            type: "object",
            properties: {},
            required: []
        }
    }
];
// Tool handler
export function handleToolCall(name, input) {
    switch (name) {
        case "framework.get-metadata":
            return metadata;
        case "framework.get-introduction":
            return introduction;
        case "framework.get-scaffold":
            return scaffold;
        case "framework.get-questions":
            return getQuestions(input.context);
        case "framework.search":
            return search(input.query, input.limit || 5);
        case "framework.list-documents":
            return listDocuments();
        case "framework.get-document":
            return getDocument(input.document);
        case "framework.list-examples":
            return listExamples();
        case "framework.get-example":
            return getExample(input.example);
        case "framework.list-primitives":
            return listPrimitives();
        default:
            return {
                error: {
                    code: "UNKNOWN_TOOL",
                    message: `Unknown tool: ${name}`,
                    available: tools.map(t => t.name)
                }
            };
    }
}
