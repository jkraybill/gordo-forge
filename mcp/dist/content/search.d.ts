interface SearchResult {
    title: string;
    uri: string;
    excerpt: string;
    relevance: number;
    doc_type: string;
    source_url: string;
}
export declare function search(query: string, limit?: number): {
    results: SearchResult[];
    index_type: string;
    server_version: string;
    framework_version: string;
};
export {};
