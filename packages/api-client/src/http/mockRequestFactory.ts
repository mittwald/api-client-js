import { OperationDescriptor, RequestType } from "../OperationDescriptor";
import { Request, Response } from "./Client";
import fetchMock, { MockResponse, MockResponseFunction } from "fetch-mock";
import { setPathParams } from "./path";

type DeepPartial<T> = {
    [TKey in keyof T]?: DeepPartial<T[TKey]>;
};

type PartialRequest<TRequest extends Request> = DeepPartial<Omit<TRequest, "path">> & Omit<TRequest, "query" | "header" | "requestBody">;

export type MockRequestFactory = <TRequest extends Request, TResponse extends Response>(
    descriptor: OperationDescriptor<TRequest, TResponse>,
) => (request: PartialRequest<TRequest>, response: TResponse | ((req: TRequest) => TResponse)) => void;

export const mockRequestFactory: MockRequestFactory = (descriptor) => (request, responseFactory) => {
    const pathWithParams = setPathParams(descriptor.path, request.path);

    const asyncResponse: MockResponseFunction = (url, opts) =>
        new Promise<MockResponse>((res, rej) => {
            (async () => {
                const requestBody = await (opts.body as any);

                if (typeof requestBody !== "string") {
                    throw new Error("Cannot create mocked response. Expected body to be a string.");
                }

                const actualRequest = {
                    path: request.path,
                    header: opts.headers,
                    query: request.header,
                    requestBody: requestBody.length > 0 ? JSON.parse(requestBody) : requestBody,
                } as RequestType<typeof descriptor>;

                const response = typeof responseFactory === "function" ? responseFactory(actualRequest) : responseFactory;

                const mockResponse: MockResponse = {
                    body: response.content,
                    status: response.status,
                    headers: response.header,
                };

                setTimeout(() => res(mockResponse), Math.random() * 600 + 200);
            })().catch(rej);
        });

    fetchMock.mock(
        {
            method: descriptor.method,
            url: `glob:*/${pathWithParams}*`,
            query: request.query ?? undefined,
            body: request.requestBody ?? undefined,
            matchPartialBody: true,
        },
        asyncResponse,
    );
};
