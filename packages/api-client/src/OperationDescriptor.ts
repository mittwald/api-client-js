import { LooseObject } from "./types/LooseObject";

// Headers is also implemented in DOM, but this would tie this lib to browser-only
export type Headers = Record<string, string>;
export type PathParams = Record<string, string>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
export interface OperationDescriptor<TRequest = any, TResponse = any> {
    path: string;
    method: string;
    operationId: string;
}

export type RequestType<T extends OperationDescriptor> = T extends OperationDescriptor<infer TReq> ? LooseObject<TReq> : never;
export type ResponseType<T extends OperationDescriptor> = T extends OperationDescriptor<any, infer TRes> ? TRes : never;

export type RequestFunction<T extends OperationDescriptor = OperationDescriptor> = RequestType<T> extends undefined
    ? (request?: RequestType<T>) => Promise<ResponseType<T>>
    : (request: RequestType<T>) => Promise<ResponseType<T>>;
