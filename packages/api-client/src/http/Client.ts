import { Headers, OperationDescriptor, RequestFunction } from "../OperationDescriptor";

export interface Response {
    status: number;
    mediaType?: string;
    content?: any;
    headers?: any;
    operation: OperationDescriptor;
    url?: string;
}

export interface Request {
    requestBody?: any;
    header?: any;
    path?: any;
    query?: any;
}

export type RequestFunctionFactory = <TDescriptor extends OperationDescriptor>(descriptor: TDescriptor) => RequestFunction<TDescriptor>;
export type AnyRequestFunctionFactory = (descriptor: OperationDescriptor) => RequestFunction;

export interface Client {
    requestFunctionFactory: AnyRequestFunctionFactory;
    setDefaultHeaders(headers: Headers): void;
}
