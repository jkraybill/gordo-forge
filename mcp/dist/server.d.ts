import { Anthropic } from "@anthropic-ai/sdk";
export declare const tools: Anthropic.Tool[];
export declare function handleToolCall(name: string, input: Record<string, unknown>): unknown;
