import { SERVER_VERSION, FRAMEWORK_VERSION } from "./metadata.js";
import { documents } from "./documents.js";
import { examples } from "./examples.js";

interface SearchResult {
  title: string;
  uri: string;
  excerpt: string;
  relevance: number;
  doc_type: string;
  source_url: string;
}

// Simple keyword-based search for v1
// Can be upgraded to semantic search with embeddings later
export function search(query: string, limit: number = 5) {
  const queryTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);

  const results: SearchResult[] = [];

  // Search documents
  for (const doc of documents) {
    const text = (doc.title + " " + doc.description + " " + doc.content).toLowerCase();
    let score = 0;

    for (const term of queryTerms) {
      const matches = (text.match(new RegExp(term, "g")) || []).length;
      score += matches;
    }

    if (score > 0) {
      // Extract relevant excerpt
      const excerpt = extractExcerpt(doc.content, queryTerms);

      results.push({
        title: doc.title,
        uri: doc.uri,
        excerpt,
        relevance: Math.min(score / (queryTerms.length * 3), 1),
        doc_type: "document",
        source_url: doc.source_url
      });
    }
  }

  // Search examples
  for (const example of examples) {
    const text = (example.name + " " + example.description + " " + example.content).toLowerCase();
    let score = 0;

    for (const term of queryTerms) {
      const matches = (text.match(new RegExp(term, "g")) || []).length;
      score += matches;
    }

    if (score > 0) {
      const excerpt = extractExcerpt(example.content, queryTerms);

      results.push({
        title: example.name,
        uri: example.uri,
        excerpt,
        relevance: Math.min(score / (queryTerms.length * 3), 1),
        doc_type: "example",
        source_url: `https://github.com/jkraybill/project-gordo`
      });
    }
  }

  // Sort by relevance and limit
  results.sort((a, b) => b.relevance - a.relevance);

  return {
    results: results.slice(0, limit),
    index_type: "embedded",
    server_version: SERVER_VERSION,
    framework_version: FRAMEWORK_VERSION
  };
}

function extractExcerpt(content: string, queryTerms: string[]): string {
  const lines = content.split("\n").filter(l => l.trim());

  // Find the line with the most query term matches
  let bestLine = "";
  let bestScore = 0;

  for (const line of lines) {
    const lower = line.toLowerCase();
    let score = 0;
    for (const term of queryTerms) {
      if (lower.includes(term)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestLine = line;
    }
  }

  // Clean up the excerpt
  let excerpt = bestLine.replace(/^#+\s*/, "").trim();

  // Truncate if too long
  if (excerpt.length > 200) {
    excerpt = excerpt.slice(0, 197) + "...";
  }

  return excerpt || content.slice(0, 200).replace(/\n/g, " ").trim() + "...";
}
