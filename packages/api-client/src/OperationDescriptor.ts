// Headers is also implemented in DOM, but this would tie this lib to browser-only
export type Headers = Record<string, string>;
export type PathParams = Record<string, string>;

export interface Response {
    status: number;
    content?: any;
    header?: Headers;
}

export interface Request {
    requestBody?: any;
    header?: any;
    path?: any;
    query?: any;
}

export interface OperationDescriptor<TRequest extends Request = Request, TResponse extends Response = Response> {
    path: string;
    method: string;
    _types?: {
        request?: TRequest;
        response?: TResponse;
    };
}

export type RequestFunction<TDescriptor = OperationDescriptor> = TDescriptor extends OperationDescriptor<infer TRequest, infer TResponse>
    ? (request: TRequest) => Promise<TResponse>
    : never;
