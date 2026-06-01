export interface Example {
    id: string;
    name: string;
    description: string;
    uri: string;
    content: string;
    guidance: string;
    template_vars: string[];
    prerequisites: string[];
}
export declare const examples: Example[];
export declare function listExamples(): {
    examples: {
        id: string;
        name: string;
        description: string;
        uri: string;
    }[];
    server_version: string;
    framework_version: string;
};
export declare function getExample(id: string): {
    error: {
        code: string;
        message: string;
        available: string[];
        hint: string;
    };
    name?: undefined;
    uri?: undefined;
    prerequisites?: undefined;
    guidance?: undefined;
    content?: undefined;
    template_vars?: undefined;
    server_version?: undefined;
    framework_version?: undefined;
} | {
    name: string;
    uri: string;
    prerequisites: string[];
    guidance: string;
    content: string;
    template_vars: string[];
    server_version: string;
    framework_version: string;
    error?: undefined;
};
