import { OperationDescriptor, Response } from "./OperationDescriptor";

export type RequestFunctionFactory = <TRequest, TResponse extends Response>(
    descriptor: OperationDescriptor<TRequest, TResponse>,
) => (request: TRequest) => Promise<TResponse>;

export interface HTTPClient {
    requestFunctionFactory: RequestFunctionFactory;
}
