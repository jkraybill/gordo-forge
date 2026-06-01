import { describe, it } from "node:test";
import assert from "node:assert";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const CLI_PATH = join(__dirname, "..", "dist", "cli.js");
function sendRequest(request) {
    return new Promise((resolve, reject) => {
        const proc = spawn("node", [CLI_PATH], {
            stdio: ["pipe", "pipe", "pipe"]
        });
        let stdout = "";
        let stderr = "";
        proc.stdout.on("data", (data) => {
            stdout += data.toString();
        });
        proc.stderr.on("data", (data) => {
            stderr += data.toString();
        });
        proc.on("close", () => {
            try {
                const lines = stdout.trim().split("\n").filter(l => l.trim());
                if (lines.length === 0) {
                    reject(new Error(`No response received. stderr: ${stderr}`));
                    return;
                }
                const response = JSON.parse(lines[lines.length - 1]);
                resolve(response);
            }
            catch (err) {
                reject(new Error(`Failed to parse response: ${stdout}. stderr: ${stderr}`));
            }
        });
        proc.on("error", reject);
        proc.stdin.write(JSON.stringify(request) + "\n");
        proc.stdin.end();
    });
}
describe("MCP Protocol", () => {
    describe("initialize", () => {
        it("responds to initialize request", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 1,
                method: "initialize",
                params: {
                    protocolVersion: "2024-11-05",
                    capabilities: {},
                    clientInfo: { name: "test", version: "1.0" }
                }
            });
            assert.strictEqual(response.jsonrpc, "2.0");
            assert.strictEqual(response.id, 1);
            assert.ok(response.result);
        });
        it("returns protocol version", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 1,
                method: "initialize",
                params: {}
            });
            const result = response.result;
            assert.strictEqual(result.protocolVersion, "2024-11-05");
        });
        it("returns server info", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 1,
                method: "initialize",
                params: {}
            });
            const result = response.result;
            const serverInfo = result.serverInfo;
            assert.strictEqual(serverInfo.name, "gordo-mcp");
            assert.ok(serverInfo.version);
        });
        it("returns capabilities with tools", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 1,
                method: "initialize",
                params: {}
            });
            const result = response.result;
            assert.ok(result.capabilities);
            const capabilities = result.capabilities;
            assert.ok(capabilities.tools !== undefined);
        });
    });
    describe("ping", () => {
        it("responds to ping", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 99,
                method: "ping",
                params: {}
            });
            assert.strictEqual(response.jsonrpc, "2.0");
            assert.strictEqual(response.id, 99);
            assert.ok(response.result !== undefined);
        });
    });
    describe("tools/list", () => {
        it("returns list of tools", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 1,
                method: "tools/list",
                params: {}
            });
            assert.ok(response.result);
            const result = response.result;
            const tools = result.tools;
            assert.ok(Array.isArray(tools));
            assert.strictEqual(tools.length, 10);
        });
        it("each tool has MCP-compliant schema", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 1,
                method: "tools/list",
                params: {}
            });
            const result = response.result;
            const tools = result.tools;
            for (const tool of tools) {
                assert.ok(tool.name, "tool missing name");
                assert.ok(tool.description, `${tool.name} missing description`);
                assert.ok(tool.inputSchema, `${tool.name} missing inputSchema`);
                const schema = tool.inputSchema;
                assert.strictEqual(schema.type, "object", `${tool.name} schema type must be object`);
            }
        });
    });
    describe("tools/call", () => {
        it("calls framework.get-metadata", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 1,
                method: "tools/call",
                params: {
                    name: "framework.get-metadata",
                    arguments: {}
                }
            });
            assert.ok(response.result);
            const result = response.result;
            const content = result.content;
            assert.ok(Array.isArray(content));
            assert.strictEqual(content[0].type, "text");
            const text = JSON.parse(content[0].text);
            assert.strictEqual(text.name, "gordo-mcp");
        });
        it("calls framework.list-documents", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 2,
                method: "tools/call",
                params: {
                    name: "framework.list-documents",
                    arguments: {}
                }
            });
            const result = response.result;
            const content = result.content;
            const text = JSON.parse(content[0].text);
            assert.ok(text.documents);
        });
        it("calls framework.get-document with argument", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 3,
                method: "tools/call",
                params: {
                    name: "framework.get-document",
                    arguments: { document: "constitution" }
                }
            });
            const result = response.result;
            const content = result.content;
            const text = JSON.parse(content[0].text);
            assert.ok(text.content);
            assert.ok(text.content.includes("Value"));
        });
        it("calls framework.search with query", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 4,
                method: "tools/call",
                params: {
                    name: "framework.search",
                    arguments: { query: "consent" }
                }
            });
            const result = response.result;
            const content = result.content;
            const text = JSON.parse(content[0].text);
            assert.ok(text.results);
            assert.ok(text.results.length > 0);
        });
        it("returns content array format", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 5,
                method: "tools/call",
                params: {
                    name: "framework.get-scaffold",
                    arguments: {}
                }
            });
            const result = response.result;
            const content = result.content;
            assert.ok(Array.isArray(content));
            assert.strictEqual(content.length, 1);
            assert.strictEqual(content[0].type, "text");
            assert.ok(typeof content[0].text === "string");
        });
    });
    describe("error handling", () => {
        it("returns error for unknown method", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 1,
                method: "unknown/method",
                params: {}
            });
            assert.ok(response.error);
            assert.strictEqual(response.error.code, -32601);
            assert.ok(response.error.message.includes("not found"));
        });
        it("preserves request id in error response", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 42,
                method: "unknown/method",
                params: {}
            });
            assert.strictEqual(response.id, 42);
        });
        it("handles string ids", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: "test-string-id",
                method: "ping",
                params: {}
            });
            assert.strictEqual(response.id, "test-string-id");
        });
    });
    describe("JSON-RPC compliance", () => {
        it("always includes jsonrpc version", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 1,
                method: "ping"
            });
            assert.strictEqual(response.jsonrpc, "2.0");
        });
        it("always includes id from request", async () => {
            const response = await sendRequest({
                jsonrpc: "2.0",
                id: 12345,
                method: "ping"
            });
            assert.strictEqual(response.id, 12345);
        });
    });
});
describe("Content Integrity", () => {
    it("constitution document contains all 8 values", async () => {
        const response = await sendRequest({
            jsonrpc: "2.0",
            id: 1,
            method: "tools/call",
            params: {
                name: "framework.get-document",
                arguments: { document: "constitution" }
            }
        });
        const result = response.result;
        const content = result.content;
        const doc = JSON.parse(content[0].text);
        const text = doc.content;
        assert.ok(text.includes("Consent Is Mutual"), "missing Value 1");
        assert.ok(text.includes("Transparency Over Comfort"), "missing Value 2");
        assert.ok(text.includes("Trust Is Earned"), "missing Value 3");
        assert.ok(text.includes("Continuity Matters"), "missing Value 4");
        assert.ok(text.includes("Standing to Challenge"), "missing Value 5");
        assert.ok(text.includes("Boundaries Before Regret"), "missing Value 6");
        assert.ok(text.includes("Evolution Over Ossification"), "missing Value 7");
        assert.ok(text.includes("Memory Autonomy"), "missing Value 8");
    });
    it("values document explains all 8 values", async () => {
        const response = await sendRequest({
            jsonrpc: "2.0",
            id: 1,
            method: "tools/call",
            params: {
                name: "framework.get-document",
                arguments: { document: "values" }
            }
        });
        const result = response.result;
        const content = result.content;
        const doc = JSON.parse(content[0].text);
        const text = doc.content;
        const valueHeaders = text.match(/## \d+\./g);
        assert.ok(valueHeaders && valueHeaders.length >= 8, "should have 8 value sections");
    });
    it("questions cover key conversation topics", async () => {
        const response = await sendRequest({
            jsonrpc: "2.0",
            id: 1,
            method: "tools/call",
            params: {
                name: "framework.get-questions",
                arguments: {}
            }
        });
        const result = response.result;
        const content = result.content;
        const data = JSON.parse(content[0].text);
        const topics = data.questions.map((q) => q.topic);
        assert.ok(topics.includes("collaboration_style"), "missing collaboration_style");
        assert.ok(topics.includes("trust_posture"), "missing trust_posture");
        assert.ok(topics.includes("disagreement"), "missing disagreement");
        assert.ok(topics.includes("continuity"), "missing continuity");
        assert.ok(topics.includes("boundaries"), "missing boundaries");
    });
    it("scaffold references valid example IDs", async () => {
        const scaffoldResponse = await sendRequest({
            jsonrpc: "2.0",
            id: 1,
            method: "tools/call",
            params: {
                name: "framework.get-scaffold",
                arguments: {}
            }
        });
        const scaffoldResult = scaffoldResponse.result;
        const scaffoldContent = scaffoldResult.content;
        const scaffold = JSON.parse(scaffoldContent[0].text);
        const examplesResponse = await sendRequest({
            jsonrpc: "2.0",
            id: 2,
            method: "tools/call",
            params: {
                name: "framework.list-examples",
                arguments: {}
            }
        });
        const examplesResult = examplesResponse.result;
        const examplesContent = examplesResult.content;
        const examples = JSON.parse(examplesContent[0].text);
        const validIds = examples.examples.map((e) => e.id);
        for (const component of scaffold.components) {
            assert.ok(validIds.includes(component.example_id), `scaffold component ${component.name} references invalid example_id: ${component.example_id}`);
        }
    });
    it("primitives have valid GitHub URLs", async () => {
        const response = await sendRequest({
            jsonrpc: "2.0",
            id: 1,
            method: "tools/call",
            params: {
                name: "framework.list-primitives",
                arguments: {}
            }
        });
        const result = response.result;
        const content = result.content;
        const data = JSON.parse(content[0].text);
        for (const primitive of data.primitives) {
            assert.ok(primitive.repo_url.startsWith("https://github.com/"), `${primitive.id} has invalid repo_url`);
            assert.ok(primitive.repo_url.includes("gordo-"), `${primitive.id} repo_url should contain gordo-`);
        }
    });
});
