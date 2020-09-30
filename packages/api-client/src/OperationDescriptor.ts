// Headers is also implemented in DOM, but this would tie this lib to browser-only
export type Headers = Record<string, string>;
export type PathParams = Record<string, string>;

export interface OperationDescriptor<TRequest = any, TResponse = any> {
    path: string;
    method: string;
}

export type RequestType<T extends OperationDescriptor> = T extends OperationDescriptor<infer TReq> ? TReq : never;
export type ResponseType<T extends OperationDescriptor> = T extends OperationDescriptor<any, infer TRes> ? TRes : never;

export type RequestFunction<T extends OperationDescriptor = OperationDescriptor> = (request: RequestType<T>) => Promise<ResponseType<T>>;
