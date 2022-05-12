import { OperationDescriptor, RequestType } from "../OperationDescriptor";
import { Request as ClientRequest, Response } from "./Client";
import fetchMock, { MockOptions, MockRequest, MockResponse } from "fetch-mock";
import { buildPathParamsMatcher, setPathParams } from "./path";
import { mapBody } from "./response";
import { mapHeaders } from "./headers";
import queryString from "querystring";
import debug from "../debug";
import globals from "../globals";
import { LooseObject } from "../types/LooseObject";

export type DeepPartial<T> = {
    [TKey in keyof T]?: DeepPartial<T[TKey]>;
};

export type PartialRequest<TRequest extends ClientRequest> = DeepPartial<Omit<TRequest, "path">> &
    Omit<TRequest, "query" | "header" | "requestBody">;

// The provided types are not up-to-date (third param is missing). So I did my own 🤷‍♂️
export type MockResponseFunction = (url: string, opts: MockRequest, request: Request) => Promise<MockResponse>;

// Make the mediaType property optional, because it can be defaulted to `application/json`
export type MockRequestFactoryResponse<T extends Response> = T extends { mediaType: string }
    ? Partial<Pick<T, "mediaType">> & Omit<T, "mediaType" | "operation" | "url">
    : Omit<T, "operation" | "url">;

export type MockRequestFactory = <TRequest extends ClientRequest, TResponse extends Response>(
    descriptor: OperationDescriptor<TRequest, TResponse>,
) => (
    request: PartialRequest<TRequest>,
    response: MockRequestFactoryResponse<TResponse> | ((req: LooseObject<TRequest>) => MockRequestFactoryResponse<TResponse>),
) => void;

const d = debug.extend("mockRequestFactory");

export const mockRequestFactory: MockRequestFactory = (descriptor) => {
    const matchPathParams = buildPathParamsMatcher(descriptor.path);

    return (request, responseFactory) => {
        const pathWithParams = setPathParams(descriptor.path, request.path);

        const asyncResponse: MockResponseFunction = async (url, opts, rawRequest) => {
            const requestBody = await mapBody(rawRequest, rawRequest.headers);
            const pathParams = matchPathParams(rawRequest.url);

            const actualRequest = ({
                path: pathParams,
                header: mapHeaders(rawRequest.headers),
                query: queryString.parse(url.split("?")[1]),
                requestBody,
            } as unknown) as RequestType<typeof descriptor>;

            const response = typeof responseFactory === "function" ? responseFactory(actualRequest) : responseFactory;

            const headers = response.headers ?? {};

            if (response.mediaType) {
                headers["content-type"] = response.mediaType;
            }

            const mockResponse: MockResponse = {
                body: response.content,
                status: response.status,
                headers: headers,
            };

            await globals.mockRequestSleeper();

            return mockResponse;
        };

        const mockOptions: MockOptions = {
            method: descriptor.method,
            query: request.query ?? undefined,
            body: request.requestBody ?? undefined,
            matchPartialBody: true,
            overwriteRoutes: true,
        };

        d("mocking %o for url %s with options %o", descriptor, pathWithParams, mockOptions);

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
};

export const resetAllRequestMocks = (): void => {
    fetchMock.reset();
};
