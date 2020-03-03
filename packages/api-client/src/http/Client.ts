import { OperationDescriptor } from "../OperationDescriptor";

export interface Response {
    status: number;
    content?: any;
    header?: any;
}

export interface Request {
    requestBody?: any;
    header?: any;
    path?: any;
    query?: any;
}

export type RequestFunctionFactory = <TRequest extends Request, TResponse extends Response>(
    descriptor: OperationDescriptor<TRequest, TResponse>,
) => (request: TRequest) => Promise<TResponse>;

export interface Client {
    requestFunctionFactory: RequestFunctionFactory;
}
