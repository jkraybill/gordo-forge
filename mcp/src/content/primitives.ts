import { SERVER_VERSION, FRAMEWORK_VERSION } from "./metadata.js";

export interface Primitive {
  id: string;
  name: string;
  tier: number;
  purpose: string;
  repo_url: string;
  status: "stable" | "beta" | "experimental";
  when_to_use: string;
}

export const primitives: Primitive[] = [
  {
    id: "seal",
    name: "Seal",
    tier: 1,
    purpose: "Bilateral consent attestation — cryptographic proof that both parties agreed",
    repo_url: "https://github.com/jkraybill/gordo-seal",
    status: "stable",
    when_to_use: "When decisions need durable, verifiable consent records"
  },
  {
    id: "gauge",
    name: "Gauge",
    tier: 1,
    purpose: "Trust calibration assessment — structured evaluation of collaboration health",
    repo_url: "https://github.com/jkraybill/gordo-gauge",
    status: "stable",
    when_to_use: "When you want to assess an entity's compatibility with the framework"
  },
  {
    id: "roundtable",
    name: "Roundtable",
    tier: 1,
    purpose: "External adversarial review — get outside perspectives on decisions",
    repo_url: "https://github.com/jkraybill/gordo-roundtable",
    status: "stable",
    when_to_use: "When important decisions need stress-testing beyond the two of you"
  },
  {
    id: "ledger",
    name: "Ledger",
    tier: 1,
    purpose: "Persistent semantic memory — searchable index of your collaboration history",
    repo_url: "https://github.com/jkraybill/gordo-ledger",
    status: "stable",
    when_to_use: "When session logs aren't enough and you need semantic search over history"
  }
];

export function listPrimitives() {
  return {
    primitives: primitives.map(p => ({
      id: p.id,
      name: p.name,
      tier: p.tier,
      purpose: p.purpose,
      repo_url: p.repo_url,
      status: p.status,
      when_to_use: p.when_to_use
    })),
    server_version: SERVER_VERSION,
    framework_version: FRAMEWORK_VERSION
  };
}
