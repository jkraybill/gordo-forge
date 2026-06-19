#!/usr/bin/env node

import * as readline from "readline";
import { tools, handleToolCall } from "./server.js";

// MCP protocol version
const PROTOCOL_VERSION = "2024-11-05";

interface MCPRequest {
  jsonrpc: "2.0";
  id: string | number;
  method: string;
  params?: Record<string, unknown>;
}

interface MCPResponse {
  jsonrpc: "2.0";
  id: string | number;
  result?: unknown;
  error?: {
    code: number;
    message: string;
    data?: unknown;
  };
}

function sendResponse(response: MCPResponse): void {
  console.log(JSON.stringify(response));
}

function handleRequest(request: MCPRequest): void {
  const { id, method, params } = request;

  switch (method) {
    case "initialize":
      sendResponse({
        jsonrpc: "2.0",
        id,
        result: {
          protocolVersion: PROTOCOL_VERSION,
          capabilities: {
            tools: {}
          },
          serverInfo: {
            name: "gordo-mcp",
            version: "1.0.0-rc16"
          }
        }
      });
      break;

    case "notifications/initialized":
      // Client acknowledged initialization, no response needed
      break;

    case "tools/list":
      sendResponse({
        jsonrpc: "2.0",
        id,
        result: {
          tools: tools.map(t => ({
            name: t.name,
            description: t.description,
            inputSchema: t.input_schema
          }))
        }
      });
      break;

    case "tools/call":
      const toolParams = params as { name: string; arguments?: Record<string, unknown> };
      const toolName = toolParams.name;
      const toolArgs = toolParams.arguments || {};

      try {
        const result = handleToolCall(toolName, toolArgs);
        sendResponse({
          jsonrpc: "2.0",
          id,
          result: {
            content: [
              {
                type: "text",
                text: JSON.stringify(result, null, 2)
              }
            ]
          }
        });
      } catch (err) {
        sendResponse({
          jsonrpc: "2.0",
          id,
          error: {
            code: -32603,
            message: err instanceof Error ? err.message : "Internal error"
          }
        });
      }
      break;

    case "ping":
      sendResponse({
        jsonrpc: "2.0",
        id,
        result: {}
      });
      break;

    default:
      sendResponse({
        jsonrpc: "2.0",
        id,
        error: {
          code: -32601,
          message: `Method not found: ${method}`
        }
      });
  }
}

// Main entry point
async function main(): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  for await (const line of rl) {
    if (!line.trim()) continue;

    try {
      const request = JSON.parse(line) as MCPRequest;
      handleRequest(request);
    } catch (err) {
      sendResponse({
        jsonrpc: "2.0",
        id: null as unknown as string,
        error: {
          code: -32700,
          message: "Parse error"
        }
      });
    }
  }
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
