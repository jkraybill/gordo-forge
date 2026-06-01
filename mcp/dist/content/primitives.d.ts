export interface Primitive {
    id: string;
    name: string;
    tier: number;
    purpose: string;
    repo_url: string;
    status: "stable" | "beta" | "experimental";
    when_to_use: string;
}
export declare const primitives: Primitive[];
export declare function listPrimitives(): {
    primitives: {
        id: string;
        name: string;
        tier: number;
        purpose: string;
        repo_url: string;
        status: "stable" | "beta" | "experimental";
        when_to_use: string;
    }[];
    server_version: string;
    framework_version: string;
};
