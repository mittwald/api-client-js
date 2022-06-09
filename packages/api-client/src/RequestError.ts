export class RequestError extends Error {
    public readonly path: string;
    public readonly method: string;
    public readonly cause?: unknown;

    public constructor(path: string, method: string, cause?: unknown) {
        const causeMessage = cause instanceof Error ? `: ${cause.message}` : "undefined";
        super(`${method.toUpperCase()} ${path} failed${causeMessage}`);
        this.name = "RequestError";
        this.path = path;
        this.method = method.toUpperCase();
        this.cause = cause;
        Object.setPrototypeOf(this, RequestError.prototype);
    }
}
export default RequestError;
