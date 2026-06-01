export declare const questions: {
    questions: {
        topic: string;
        prompt: string;
        why_it_matters: string;
    }[];
    guidance: string;
    server_version: string;
    framework_version: string;
};
export declare function getQuestions(_context?: string): {
    questions: {
        topic: string;
        prompt: string;
        why_it_matters: string;
    }[];
    guidance: string;
    server_version: string;
    framework_version: string;
};
