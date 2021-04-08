import { Headers, OperationDescriptor } from "../OperationDescriptor";

export interface RequestInfos {
    method: string;
    url?: string;
}

export interface Response {
    status: number;
    mediaType?: string;
    content?: any;
    headers?: any;
    requestInfos: RequestInfos;
}

export interface Request {
    requestBody?: any;
    header?: any;
    path?: any;
    query?: any;
}

export type RequestFunctionFactory = <TRequest extends Request, TResponse extends Omit<Response, "requestInfos">>(
    descriptor: OperationDescriptor<TRequest, TResponse>,
) => (request: TRequest) => Promise<TResponse>;

export interface Client {
    requestFunctionFactory: RequestFunctionFactory;
    setDefaultHeaders(headers: Headers): void;
}
