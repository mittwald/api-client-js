import { Headers, OperationDescriptor } from "../OperationDescriptor";

export interface Response {
    status: number;
    mediaType?: string;
    content?: any;
    headers?: any;
    operation: OperationDescriptor;
}

export interface Request {
    requestBody?: any;
    header?: any;
    path?: any;
    query?: any;
}

export type RequestFunctionFactory = <TRequest extends Request, TResponse extends Omit<Response, "operation">>(
    descriptor: OperationDescriptor<TRequest, TResponse>,
) => (request: TRequest) => Promise<TResponse>;

export interface Client {
    requestFunctionFactory: RequestFunctionFactory;
    setDefaultHeaders(headers: Headers): void;
}
