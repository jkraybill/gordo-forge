export interface Document {
    id: string;
    title: string;
    description: string;
    uri: string;
    content: string;
    source_url: string;
}
export declare const documents: Document[];
export declare function listDocuments(): {
    documents: {
        id: string;
        title: string;
        description: string;
        uri: string;
    }[];
    server_version: string;
    framework_version: string;
};
export declare function getDocument(id: string): {
    error: {
        code: string;
        message: string;
        available: string[];
        hint: string;
    };
    title?: undefined;
    uri?: undefined;
    content?: undefined;
    content_type?: undefined;
    version?: undefined;
    license?: undefined;
    source_url?: undefined;
    server_version?: undefined;
    framework_version?: undefined;
} | {
    title: string;
    uri: string;
    content: string;
    content_type: string;
    version: string;
    license: string;
    source_url: string;
    server_version: string;
    framework_version: string;
    error?: undefined;
};
