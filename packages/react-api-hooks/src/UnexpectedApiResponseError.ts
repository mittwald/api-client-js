import { Response } from "@mittwald/api-client/dist/http/Client";

export class UnexpectedApiResponseError extends Error {
    public readonly operationId?: string;
    public readonly path?: string;
    public readonly httpMethod?: string;
    public readonly traceId?: string;
    public readonly errorType?: string;
    public readonly errorMessage?: string;
    public readonly statusCode?: number;

    public constructor(response: Response) {
        super();
        this.name = "UnexpectedApiResponseError";
        Object.setPrototypeOf(this, UnexpectedApiResponseError.prototype);

        const { url, status: statusCode, operation: apiOperation } = response;

        this.operationId = apiOperation?.operationId;
        this.path = apiOperation?.path ?? url;
        this.httpMethod = apiOperation?.method;
        this.statusCode = statusCode;
        const content = response.content;

        this.message = `${this.httpMethod?.toUpperCase() ?? "UNKNOWN"} ${this.path ?? "unknown"} [${statusCode ?? "0"}`;

        if (content && typeof content === "object") {
            const responseErrorMessage = content.message ?? content.error_description ?? content.error;

            if (typeof responseErrorMessage === "string") {
                this.errorMessage = responseErrorMessage;
                this.message += `: ${responseErrorMessage}`;
            }

            const responseTraceId = content.params?.traceId;
            if (typeof responseTraceId === "string") {
                this.traceId = responseTraceId;
            }

            const responseErrorType = content.type;
            if (typeof responseErrorType === "string") {
                this.errorType = responseErrorType;
            }
        }
    }
}
export default UnexpectedApiResponseError;
