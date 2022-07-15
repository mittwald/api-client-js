import { Response } from "./http/Client";

export class UnexpectedResponseError extends Error {
    public readonly operationId?: string;
    public readonly path?: string;
    public readonly httpMethod?: string;
    public readonly traceId?: string;
    public readonly errorType?: string;
    public readonly errorMessage?: string;
    public readonly statusCode?: number;
    public readonly content?: any;
    public readonly isServerError: boolean = false;
    public readonly isClientError: boolean = false;
    public readonly isAuthenticationError: boolean = false;
    public readonly isNotFoundError: boolean = false;

    public constructor(response: Partial<Response>) {
        super();
        this.name = "UnexpectedResponseError";
        Object.setPrototypeOf(this, UnexpectedResponseError.prototype);

        const { url, status: statusCode, operation: apiOperation } = response;

        this.operationId = apiOperation?.operationId;
        this.path = apiOperation?.path ?? url;
        this.httpMethod = apiOperation?.method;
        this.statusCode = statusCode;
        this.content = response.content;

        if (statusCode !== undefined) {
            this.isServerError = statusCode >= 500;
            this.isClientError = statusCode >= 400 && statusCode < 500;
            this.isAuthenticationError = statusCode >= 400 && statusCode < 500;
            this.isNotFoundError = statusCode === 404;
        }

        this.message = `${this.httpMethod?.toUpperCase() ?? "UNKNOWN"} ${this.path ?? "unknown"} [${statusCode ?? "0"}`;

        if (this.content && typeof this.content === "object") {
            const responseErrorMessage = this.content.message ?? this.content.error_description ?? this.content.error;

            if (typeof responseErrorMessage === "string") {
                this.errorMessage = responseErrorMessage;
                this.message += `: ${responseErrorMessage}`;
            }

            const responseTraceId = this.content.params?.traceId;
            if (typeof responseTraceId === "string") {
                this.traceId = responseTraceId;
            }

            const responseErrorType = this.content.type;
            if (typeof responseErrorType === "string") {
                this.errorType = responseErrorType;
            }
        }
    }
}
export default UnexpectedResponseError;
