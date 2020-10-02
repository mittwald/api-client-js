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
        new Promise<MockResponse>((res) => {
            if (typeof opts.body !== "string") {
                throw new Error("Cannot generate mocked response. Expected body to be of type string.");
            }

            const actualRequest = {
                path: request.path,
                header: opts.headers,
                query: request.header,
                requestBody: JSON.parse(opts.body),
            } as RequestType<typeof descriptor>;

            const response = typeof responseFactory === "function" ? responseFactory(actualRequest) : responseFactory;
            setTimeout(
                () =>
                    res({
                        body: response.content,
                        headers: response.header,
                        status: response.status,
                    }),
                Math.random() * 600 + 200,
            );
        });

    fetchMock.mock(
        {
            method: descriptor.method,
            url: `glob:*/${pathWithParams}${request.query ? "?*" : ""}`,
            query: request.query ?? {},
            body: request.requestBody ?? {},
            matchPartialBody: true,
        },
        asyncResponse,
    );
};
