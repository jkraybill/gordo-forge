import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";
import { tools, handleToolCall } from "./server.js";

describe("gordo-mcp server", () => {
  describe("tool definitions", () => {
    it("exports exactly 10 tools", () => {
      assert.strictEqual(tools.length, 10);
    });

    it("all tools have required MCP fields", () => {
      for (const tool of tools) {
        assert.ok(tool.name, `tool missing name`);
        assert.ok(tool.description, `${tool.name} missing description`);
        assert.ok(tool.input_schema, `${tool.name} missing input_schema`);
        assert.strictEqual(tool.input_schema.type, "object", `${tool.name} schema type must be object`);
        assert.ok(Array.isArray(tool.input_schema.required), `${tool.name} missing required array`);
      }
    });

    it("all tool names use framework. prefix", () => {
      for (const tool of tools) {
        assert.ok(tool.name.startsWith("framework."), `${tool.name} should start with framework.`);
      }
    });

    it("tool names are unique", () => {
      const names = tools.map(t => t.name);
      const unique = new Set(names);
      assert.strictEqual(unique.size, names.length, "duplicate tool names detected");
    });

    const expectedTools = [
      "framework.get-metadata",
      "framework.get-introduction",
      "framework.get-scaffold",
      "framework.get-questions",
      "framework.search",
      "framework.list-documents",
      "framework.get-document",
      "framework.list-examples",
      "framework.get-example",
      "framework.list-primitives"
    ];

    it("exports exactly the expected tools", () => {
      const names = tools.map(t => t.name).sort();
      assert.deepStrictEqual(names, expectedTools.sort());
    });
  });

  describe("framework.get-metadata", () => {
    it("returns server metadata", () => {
      const result = handleToolCall("framework.get-metadata", {}) as Record<string, unknown>;
      assert.strictEqual(result.name, "gordo-mcp");
      assert.ok(result.description);
      assert.ok(result.stance);
    });

    it("declares offline mode", () => {
      const result = handleToolCall("framework.get-metadata", {}) as Record<string, unknown>;
      assert.strictEqual(result.offline, true);
      assert.strictEqual(result.read_only, true);
      assert.strictEqual(result.stateless, true);
      assert.strictEqual(result.no_telemetry, true);
    });

    it("includes version info", () => {
      const result = handleToolCall("framework.get-metadata", {}) as Record<string, unknown>;
      assert.ok(result.server_version);
      assert.ok(result.framework_version);
    });

    it("includes usage pattern", () => {
      const result = handleToolCall("framework.get-metadata", {}) as Record<string, unknown>;
      assert.ok(result.usage_pattern);
      assert.ok((result.usage_pattern as string).includes("get-scaffold"));
    });
  });

  describe("framework.get-introduction", () => {
    it("returns introduction with pitch", () => {
      const result = handleToolCall("framework.get-introduction", {}) as Record<string, unknown>;
      assert.ok(result.pitch);
      assert.ok((result.pitch as string).length > 100);
    });

    it("includes install command", () => {
      const result = handleToolCall("framework.get-introduction", {}) as Record<string, unknown>;
      assert.ok(result.install_command);
    });

    it("includes more info URL", () => {
      const result = handleToolCall("framework.get-introduction", {}) as Record<string, unknown>;
      assert.ok(result.more_info_url);
      assert.ok((result.more_info_url as string).includes("github.com"));
    });
  });

  describe("framework.get-scaffold", () => {
    it("returns hub overview", () => {
      const result = handleToolCall("framework.get-scaffold", {}) as Record<string, unknown>;
      assert.ok(result.hub_overview);
    });

    it("lists hub components", () => {
      const result = handleToolCall("framework.get-scaffold", {}) as Record<string, unknown>;
      const components = result.components as Array<Record<string, unknown>>;
      assert.ok(Array.isArray(components));
      assert.ok(components.length >= 3);
    });

    it("each component has required fields", () => {
      const result = handleToolCall("framework.get-scaffold", {}) as Record<string, unknown>;
      const components = result.components as Array<Record<string, unknown>>;
      for (const comp of components) {
        assert.ok(comp.name, "component missing name");
        assert.ok(comp.purpose, `${comp.name} missing purpose`);
        assert.ok(comp.guidance, `${comp.name} missing guidance`);
        assert.ok(comp.example_id, `${comp.name} missing example_id`);
      }
    });

    it("includes AI_GUIDE.md component", () => {
      const result = handleToolCall("framework.get-scaffold", {}) as Record<string, unknown>;
      const components = result.components as Array<Record<string, unknown>>;
      const aiGuide = components.find(c => c.name === "AI_GUIDE.md");
      assert.ok(aiGuide, "AI_GUIDE.md component not found");
    });

    it("includes CONSTITUTION.md component", () => {
      const result = handleToolCall("framework.get-scaffold", {}) as Record<string, unknown>;
      const components = result.components as Array<Record<string, unknown>>;
      const constitution = components.find(c => c.name === "CONSTITUTION.md");
      assert.ok(constitution, "CONSTITUTION.md component not found");
    });

    it("includes suggested structure", () => {
      const result = handleToolCall("framework.get-scaffold", {}) as Record<string, unknown>;
      assert.ok(result.suggested_structure);
    });

    it("includes next steps", () => {
      const result = handleToolCall("framework.get-scaffold", {}) as Record<string, unknown>;
      const steps = result.next_steps as string[];
      assert.ok(Array.isArray(steps));
      assert.ok(steps.length >= 2);
    });
  });

  describe("framework.get-questions", () => {
    it("returns questions array", () => {
      const result = handleToolCall("framework.get-questions", {}) as Record<string, unknown>;
      const questions = result.questions as Array<unknown>;
      assert.ok(Array.isArray(questions));
      assert.ok(questions.length >= 5);
    });

    it("each question has required fields", () => {
      const result = handleToolCall("framework.get-questions", {}) as Record<string, unknown>;
      const questions = result.questions as Array<Record<string, unknown>>;
      for (const q of questions) {
        assert.ok(q.topic, "question missing topic");
        assert.ok(q.prompt, `${q.topic} missing prompt`);
        assert.ok(q.why_it_matters, `${q.topic} missing why_it_matters`);
      }
    });

    it("includes collaboration_style question", () => {
      const result = handleToolCall("framework.get-questions", {}) as Record<string, unknown>;
      const questions = result.questions as Array<Record<string, unknown>>;
      const collab = questions.find(q => q.topic === "collaboration_style");
      assert.ok(collab, "collaboration_style question not found");
    });

    it("includes trust_posture question", () => {
      const result = handleToolCall("framework.get-questions", {}) as Record<string, unknown>;
      const questions = result.questions as Array<Record<string, unknown>>;
      const trust = questions.find(q => q.topic === "trust_posture");
      assert.ok(trust, "trust_posture question not found");
    });

    it("includes guidance", () => {
      const result = handleToolCall("framework.get-questions", {}) as Record<string, unknown>;
      assert.ok(result.guidance);
    });

    it("accepts optional context parameter", () => {
      const result = handleToolCall("framework.get-questions", { context: "software project" }) as Record<string, unknown>;
      assert.ok(result.questions);
    });
  });

  describe("framework.list-documents", () => {
    it("returns documents array", () => {
      const result = handleToolCall("framework.list-documents", {}) as Record<string, unknown>;
      const documents = result.documents as Array<unknown>;
      assert.ok(Array.isArray(documents));
      assert.ok(documents.length >= 3);
    });

    it("each document has required fields", () => {
      const result = handleToolCall("framework.list-documents", {}) as Record<string, unknown>;
      const documents = result.documents as Array<Record<string, unknown>>;
      for (const doc of documents) {
        assert.ok(doc.id, "document missing id");
        assert.ok(doc.title, `${doc.id} missing title`);
        assert.ok(doc.description, `${doc.id} missing description`);
        assert.ok(doc.uri, `${doc.id} missing uri`);
      }
    });

    it("document ids are unique", () => {
      const result = handleToolCall("framework.list-documents", {}) as Record<string, unknown>;
      const documents = result.documents as Array<Record<string, unknown>>;
      const ids = documents.map(d => d.id);
      const unique = new Set(ids);
      assert.strictEqual(unique.size, ids.length, "duplicate document ids");
    });

    it("document URIs use gordo:// scheme", () => {
      const result = handleToolCall("framework.list-documents", {}) as Record<string, unknown>;
      const documents = result.documents as Array<Record<string, unknown>>;
      for (const doc of documents) {
        assert.ok((doc.uri as string).startsWith("gordo://"), `${doc.id} URI should use gordo:// scheme`);
      }
    });

    it("includes constitution document", () => {
      const result = handleToolCall("framework.list-documents", {}) as Record<string, unknown>;
      const documents = result.documents as Array<Record<string, unknown>>;
      const constitution = documents.find(d => d.id === "constitution");
      assert.ok(constitution, "constitution document not found");
    });

    it("includes version info", () => {
      const result = handleToolCall("framework.list-documents", {}) as Record<string, unknown>;
      assert.ok(result.server_version);
      assert.ok(result.framework_version);
    });
  });

  describe("framework.get-document", () => {
    it("retrieves constitution document", () => {
      const result = handleToolCall("framework.get-document", { document: "constitution" }) as Record<string, unknown>;
      assert.ok(result.title);
      assert.ok(result.content);
      assert.ok((result.content as string).includes("Value"));
    });

    it("retrieves ai-perspective document", () => {
      const result = handleToolCall("framework.get-document", { document: "ai-perspective" }) as Record<string, unknown>;
      assert.ok(result.title);
      assert.ok(result.content);
    });

    it("retrieves foundations document", () => {
      const result = handleToolCall("framework.get-document", { document: "foundations" }) as Record<string, unknown>;
      assert.ok(result.title);
      assert.ok(result.content);
    });

    it("retrieves values document", () => {
      const result = handleToolCall("framework.get-document", { document: "values" }) as Record<string, unknown>;
      assert.ok(result.title);
      assert.ok(result.content);
      assert.ok((result.content as string).includes("Consent Is Mutual"));
    });

    it("retrieves getting-started document", () => {
      const result = handleToolCall("framework.get-document", { document: "getting-started" }) as Record<string, unknown>;
      assert.ok(result.title);
      assert.ok(result.content);
    });

    it("includes source URL", () => {
      const result = handleToolCall("framework.get-document", { document: "constitution" }) as Record<string, unknown>;
      assert.ok(result.source_url);
      assert.ok((result.source_url as string).includes("github.com"));
    });

    it("includes content type", () => {
      const result = handleToolCall("framework.get-document", { document: "constitution" }) as Record<string, unknown>;
      assert.strictEqual(result.content_type, "text/markdown");
    });

    it("includes license", () => {
      const result = handleToolCall("framework.get-document", { document: "constitution" }) as Record<string, unknown>;
      assert.strictEqual(result.license, "CC-BY-4.0");
    });

    it("returns error for unknown document", () => {
      const result = handleToolCall("framework.get-document", { document: "nonexistent" }) as Record<string, unknown>;
      assert.ok(result.error);
      const error = result.error as Record<string, unknown>;
      assert.strictEqual(error.code, "NOT_FOUND");
      assert.ok(error.available);
      assert.ok(error.hint);
    });

    it("error includes available document list", () => {
      const result = handleToolCall("framework.get-document", { document: "nonexistent" }) as Record<string, unknown>;
      const error = result.error as Record<string, unknown>;
      const available = error.available as string[];
      assert.ok(available.includes("constitution"));
    });
  });

  describe("framework.list-examples", () => {
    it("returns examples array", () => {
      const result = handleToolCall("framework.list-examples", {}) as Record<string, unknown>;
      const examples = result.examples as Array<unknown>;
      assert.ok(Array.isArray(examples));
      assert.ok(examples.length >= 3);
    });

    it("each example has required fields", () => {
      const result = handleToolCall("framework.list-examples", {}) as Record<string, unknown>;
      const examples = result.examples as Array<Record<string, unknown>>;
      for (const ex of examples) {
        assert.ok(ex.id, "example missing id");
        assert.ok(ex.name, `${ex.id} missing name`);
        assert.ok(ex.description, `${ex.id} missing description`);
        assert.ok(ex.uri, `${ex.id} missing uri`);
      }
    });

    it("example ids are unique", () => {
      const result = handleToolCall("framework.list-examples", {}) as Record<string, unknown>;
      const examples = result.examples as Array<Record<string, unknown>>;
      const ids = examples.map(e => e.id);
      const unique = new Set(ids);
      assert.strictEqual(unique.size, ids.length, "duplicate example ids");
    });

    it("example URIs use gordo:// scheme", () => {
      const result = handleToolCall("framework.list-examples", {}) as Record<string, unknown>;
      const examples = result.examples as Array<Record<string, unknown>>;
      for (const ex of examples) {
        assert.ok((ex.uri as string).startsWith("gordo://"), `${ex.id} URI should use gordo:// scheme`);
      }
    });

    it("includes ai-guide example", () => {
      const result = handleToolCall("framework.list-examples", {}) as Record<string, unknown>;
      const examples = result.examples as Array<Record<string, unknown>>;
      const aiGuide = examples.find(e => e.id === "ai-guide");
      assert.ok(aiGuide, "ai-guide example not found");
    });
  });

  describe("framework.get-example", () => {
    it("retrieves ai-guide example", () => {
      const result = handleToolCall("framework.get-example", { example: "ai-guide" }) as Record<string, unknown>;
      assert.ok(result.name);
      assert.ok(result.content);
      assert.ok((result.content as string).includes("Collaboration Identity"));
    });

    it("retrieves constitution example", () => {
      const result = handleToolCall("framework.get-example", { example: "constitution" }) as Record<string, unknown>;
      assert.ok(result.name);
      assert.ok(result.content);
    });

    it("retrieves session-log example", () => {
      const result = handleToolCall("framework.get-example", { example: "session-log" }) as Record<string, unknown>;
      assert.ok(result.name);
      assert.ok(result.content);
      assert.ok((result.content as string).includes("Session"));
    });

    it("retrieves handshake example", () => {
      const result = handleToolCall("framework.get-example", { example: "handshake" }) as Record<string, unknown>;
      assert.ok(result.name);
      assert.ok(result.content);
    });

    it("includes guidance", () => {
      const result = handleToolCall("framework.get-example", { example: "ai-guide" }) as Record<string, unknown>;
      assert.ok(result.guidance);
    });

    it("includes template vars", () => {
      const result = handleToolCall("framework.get-example", { example: "ai-guide" }) as Record<string, unknown>;
      assert.ok(Array.isArray(result.template_vars));
    });

    it("returns error for unknown example", () => {
      const result = handleToolCall("framework.get-example", { example: "nonexistent" }) as Record<string, unknown>;
      assert.ok(result.error);
      const error = result.error as Record<string, unknown>;
      assert.strictEqual(error.code, "NOT_FOUND");
      assert.ok(error.available);
      assert.ok(error.hint);
    });
  });

  describe("framework.list-primitives", () => {
    it("returns primitives array", () => {
      const result = handleToolCall("framework.list-primitives", {}) as Record<string, unknown>;
      const primitives = result.primitives as Array<unknown>;
      assert.ok(Array.isArray(primitives));
      assert.ok(primitives.length >= 3);
    });

    it("each primitive has required fields", () => {
      const result = handleToolCall("framework.list-primitives", {}) as Record<string, unknown>;
      const primitives = result.primitives as Array<Record<string, unknown>>;
      for (const p of primitives) {
        assert.ok(p.id, "primitive missing id");
        assert.ok(p.name, `${p.id} missing name`);
        assert.ok(p.purpose, `${p.id} missing purpose`);
        assert.ok(p.repo_url, `${p.id} missing repo_url`);
        assert.ok(p.status, `${p.id} missing status`);
        assert.ok(p.when_to_use, `${p.id} missing when_to_use`);
      }
    });

    it("all primitives are tier 1", () => {
      const result = handleToolCall("framework.list-primitives", {}) as Record<string, unknown>;
      const primitives = result.primitives as Array<Record<string, unknown>>;
      for (const p of primitives) {
        assert.strictEqual(p.tier, 1, `${p.id} should be tier 1`);
      }
    });

    it("includes Seal primitive", () => {
      const result = handleToolCall("framework.list-primitives", {}) as Record<string, unknown>;
      const primitives = result.primitives as Array<Record<string, unknown>>;
      const seal = primitives.find(p => p.id === "seal");
      assert.ok(seal, "Seal primitive not found");
    });

    it("includes Gauge primitive", () => {
      const result = handleToolCall("framework.list-primitives", {}) as Record<string, unknown>;
      const primitives = result.primitives as Array<Record<string, unknown>>;
      const gauge = primitives.find(p => p.id === "gauge");
      assert.ok(gauge, "Gauge primitive not found");
    });

    it("includes Roundtable primitive", () => {
      const result = handleToolCall("framework.list-primitives", {}) as Record<string, unknown>;
      const primitives = result.primitives as Array<Record<string, unknown>>;
      const roundtable = primitives.find(p => p.id === "roundtable");
      assert.ok(roundtable, "Roundtable primitive not found");
    });

    it("includes Ledger primitive", () => {
      const result = handleToolCall("framework.list-primitives", {}) as Record<string, unknown>;
      const primitives = result.primitives as Array<Record<string, unknown>>;
      const ledger = primitives.find(p => p.id === "ledger");
      assert.ok(ledger, "Ledger primitive not found");
    });
  });

  describe("framework.search", () => {
    it("returns results for consent query", () => {
      const result = handleToolCall("framework.search", { query: "consent" }) as Record<string, unknown>;
      const results = result.results as Array<unknown>;
      assert.ok(Array.isArray(results));
      assert.ok(results.length > 0);
    });

    it("returns results for trust query", () => {
      const result = handleToolCall("framework.search", { query: "trust earned" }) as Record<string, unknown>;
      const results = result.results as Array<unknown>;
      assert.ok(Array.isArray(results));
      assert.ok(results.length > 0);
    });

    it("returns results for session query", () => {
      const result = handleToolCall("framework.search", { query: "session continuity" }) as Record<string, unknown>;
      const results = result.results as Array<unknown>;
      assert.ok(results.length > 0);
    });

    it("each result has required fields", () => {
      const result = handleToolCall("framework.search", { query: "collaboration" }) as Record<string, unknown>;
      const results = result.results as Array<Record<string, unknown>>;
      for (const r of results) {
        assert.ok(r.title, "result missing title");
        assert.ok(r.uri, "result missing uri");
        assert.ok(r.excerpt !== undefined, "result missing excerpt");
        assert.ok(typeof r.relevance === "number", "result missing relevance score");
        assert.ok(r.doc_type, "result missing doc_type");
      }
    });

    it("respects limit parameter", () => {
      const result = handleToolCall("framework.search", { query: "the", limit: 2 }) as Record<string, unknown>;
      const results = result.results as Array<unknown>;
      assert.ok(results.length <= 2);
    });

    it("results are sorted by relevance", () => {
      const result = handleToolCall("framework.search", { query: "consent bilateral" }) as Record<string, unknown>;
      const results = result.results as Array<Record<string, unknown>>;
      if (results.length > 1) {
        for (let i = 0; i < results.length - 1; i++) {
          assert.ok((results[i].relevance as number) >= (results[i + 1].relevance as number),
            "results should be sorted by relevance descending");
        }
      }
    });

    it("returns empty results for nonsense query", () => {
      const result = handleToolCall("framework.search", { query: "xyzzy987" }) as Record<string, unknown>;
      const results = result.results as Array<unknown>;
      assert.ok(Array.isArray(results));
      assert.strictEqual(results.length, 0);
    });

    it("searches both documents and examples", () => {
      const result = handleToolCall("framework.search", { query: "session log" }) as Record<string, unknown>;
      const results = result.results as Array<Record<string, unknown>>;
      const docTypes = new Set(results.map(r => r.doc_type));
      assert.ok(docTypes.size > 0);
    });

    it("default limit is 5", () => {
      const result = handleToolCall("framework.search", { query: "the and" }) as Record<string, unknown>;
      const results = result.results as Array<unknown>;
      assert.ok(results.length <= 5);
    });

    it("includes index type in response", () => {
      const result = handleToolCall("framework.search", { query: "trust" }) as Record<string, unknown>;
      assert.strictEqual(result.index_type, "embedded");
    });
  });

  describe("unknown tool handling", () => {
    it("returns error for unknown tool", () => {
      const result = handleToolCall("framework.nonexistent", {}) as Record<string, unknown>;
      assert.ok(result.error);
      const error = result.error as Record<string, unknown>;
      assert.strictEqual(error.code, "UNKNOWN_TOOL");
    });

    it("error includes available tools list", () => {
      const result = handleToolCall("framework.nonexistent", {}) as Record<string, unknown>;
      const error = result.error as Record<string, unknown>;
      const available = error.available as string[];
      assert.ok(Array.isArray(available));
      assert.ok(available.length === 10);
      assert.ok(available.includes("framework.get-metadata"));
    });
  });
});
