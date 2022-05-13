import { Response } from "@mittwald/api-client/dist/http/Client";
import { getObjectValue } from "@mittwald/flow-lib/dist/object/getObjectValue";

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
            const responseErrorMessage =
                getObjectValue("message", content) ?? getObjectValue("error_description", content) ?? getObjectValue("error", content);

            if (typeof responseErrorMessage === "string") {
                this.errorMessage = responseErrorMessage;
                this.message += `: ${responseErrorMessage}`;
            }

            const responseTraceId = getObjectValue("params.traceId", content);
            if (typeof responseTraceId === "string") {
                this.traceId = responseTraceId;
            }

            const responseErrorType = getObjectValue("type", content);
            if (typeof responseErrorType === "string") {
                this.errorType = responseErrorType;
            }
        }
    }
}
export default UnexpectedApiResponseError;
