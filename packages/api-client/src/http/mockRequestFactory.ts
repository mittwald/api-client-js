import { OperationDescriptor, RequestType } from "../OperationDescriptor";
import { Request as ClientRequest, Response } from "./Client";
import fetchMock, { MockOptions, MockRequest, MockResponse } from "fetch-mock";
import { setPathParams } from "./path";

type DeepPartial<T> = {
    [TKey in keyof T]?: DeepPartial<T[TKey]>;
};

type PartialRequest<TRequest extends ClientRequest> = DeepPartial<Omit<TRequest, "path">> &
    Omit<TRequest, "query" | "header" | "requestBody">;

// The provided types are not up-to-date (third param is missing). So I did my own 🤷‍♂️
type MockResponseFunction = (url: string, opts: MockRequest, request: Request) => Promise<MockResponse>;

export type MockRequestFactory = <TRequest extends ClientRequest, TResponse extends Response>(
    descriptor: OperationDescriptor<TRequest, TResponse>,
) => (request: PartialRequest<TRequest>, response: TResponse | ((req: TRequest) => TResponse)) => void;

const sleep = (): Promise<void> => new Promise((res) => setTimeout(() => res(), Math.random() * 600 + 200));

export const mockRequestFactory: MockRequestFactory = (descriptor) => (request, responseFactory) => {
    const pathWithParams = setPathParams(descriptor.path, request.path);

    const asyncResponse: MockResponseFunction = async (url, opts, rawRequest) => {
        const requestBody = rawRequest.body ? await rawRequest.json() : undefined;

        const actualRequest = {
            path: request.path,
            header: opts.headers,
            query: request.header,
            requestBody,
        } as RequestType<typeof descriptor>;

        const response = typeof responseFactory === "function" ? responseFactory(actualRequest) : responseFactory;

        const mockResponse: MockResponse = {
            body: response.content,
            status: response.status,
            headers: response.header,
        };

        await sleep();

        return mockResponse;
    };

    const mockOptions: MockOptions = {
        method: descriptor.method,
        query: request.query ?? undefined,
        body: request.requestBody ?? undefined,
        matchPartialBody: true,
        overwriteRoutes: true,
    };

    fetchMock.mock(
        {
            ...mockOptions,
            url: `glob:*/${pathWithParams}?*`,
        },
        asyncResponse,
    );

    fetchMock.mock(
        {
            ...mockOptions,
            url: `glob:*/${pathWithParams}`,
        },
        asyncResponse,
    );
};

export const resetAllRequestMocks = (): void => {
    fetchMock.reset();
};
