import { Request as ClientRequest, Response } from "./Client";
import { mockRequestFactory, MockRequestFactoryResponse, PartialRequest, resetAllRequestMocks } from "./mockRequestFactory";
import { KyClient } from "./KyClient";
import { OperationDescriptor } from "../OperationDescriptor";

const client = new KyClient({
    ky: {
        prefixUrl: "http://localhost",
    },
});

interface MockTableEntry {
    operation: OperationDescriptor<ClientRequest, Response>;
    reqMatcher?: PartialRequest<ClientRequest>;
    req?: ClientRequest;
    expectedReq?: ClientRequest;
    mockResp?: MockRequestFactoryResponse<Response>;
    expectedResp?: Partial<Response>;
    throws?: boolean;
}

describe("mockRequestFactory()", () => {
    beforeEach(() => {
        resetAllRequestMocks();
    });

    test.each<[string, MockTableEntry]>([
        [
            "Requests are generally mocked",
            {
                operation: {
                    path: "/test/",
                    method: "get",
                },
            },
        ],
        [
            "Requests will be mocked, when using wildcards in path parameters",
            {
                operation: {
                    path: "/test/{id}",
                    method: "get",
                },
                reqMatcher: {
                    path: {
                        id: "*",
                    },
                },
                req: {
                    path: { id: "foo" },
                },
            },
        ],
        [
            "Requests will not be mocked, when path parameters do not match",
            {
                operation: {
                    path: "/test/{id}",
                    method: "get",
                },
                reqMatcher: {
                    path: {
                        id: "special-id",
                    },
                },
                req: {
                    path: { id: "foo" },
                },
                throws: true,
            },
        ],
        [
            "Path parameter is in request",
            {
                operation: {
                    path: "/test/{id}",
                    method: "get",
                },
                reqMatcher: {
                    path: {
                        id: "*",
                    },
                },
                req: {
                    path: { id: "foo" },
                },
                expectedReq: {
                    path: { id: "foo" },
                },
            },
        ],
        [
            "Request body is in request",
            {
                operation: {
                    path: "/test",
                    method: "post",
                },
                req: {
                    requestBody: { foo: "bar" },
                },
                expectedReq: {
                    requestBody: { foo: "bar" },
                },
            },
        ],
        [
            "Request query string is in request",
            {
                operation: {
                    path: "/test",
                    method: "post",
                },
                req: {
                    query: {
                        foo: "bar",
                    },
                },
                expectedReq: {
                    query: { foo: "bar" },
                },
            },
        ],
        [
            "Request media type in in request",
            {
                operation: {
                    path: "/test",
                    method: "post",
                },
                req: {
                    header: {
                        "x-my-header": "foo",
                    },
                },
                expectedReq: {
                    header: {
                        "x-my-header": "foo",
                    },
                },
            },
        ],
        [
            "Mocked application/JSON response has object in its content",
            {
                operation: {
                    path: "/test",
                    method: "get",
                },
                reqMatcher: {
                    path: "/test",
                },
                mockResp: {
                    status: 200,
                    content: {
                        foo: "bar",
                    },
                    mediaType: "application/json",
                    requestInfos: {
                        method: "get",
                        url: "http://localhost/test",
                    },
                },
                expectedResp: {
                    content: {
                        foo: "bar",
                    },
                    mediaType: "application/json",
                    requestInfos: {
                        method: "get",
                        url: "http://localhost/test",
                    },
                },
            },
        ],
        [
            "Mocked text/plain response has string in its content",
            {
                operation: {
                    path: "/test",
                    method: "get",
                },
                reqMatcher: {
                    path: "/test",
                },
                mockResp: {
                    status: 200,
                    content: "plainText",
                    mediaType: "text/plain",
                    requestInfos: {
                        method: "get",
                        url: "http://localhost/test",
                    },
                },
                expectedResp: {
                    content: "plainText",
                    mediaType: "text/plain",
                    requestInfos: {
                        method: "get",
                        url: "http://localhost/test",
                    },
                },
            },
        ],
    ])(
        "%s",
        async (
            _,
            {
                expectedResp,
                expectedReq,
                mockResp = {
                    status: 200,
                    requestInfos: {
                        method: "get",
                        url: "http://localhost/test",
                    },
                },
                reqMatcher = {},
                req = {},
                operation,
                throws,
            },
        ) => {
            let actualRequest: any;

            const mockRequest = mockRequestFactory(operation);
            mockRequest(reqMatcher, (request) => {
                actualRequest = request;
                return mockResp;
            });

            const requestFunction = client.requestFunctionFactory(operation);

            if (throws) {
                return expect(requestFunction(req)).rejects.toBeDefined();
            }

            const response = await requestFunction(req);

            if (expectedReq) {
                expect(actualRequest).toMatchObject(expectedReq);
            }

            if (expectedResp) {
                expect(response).toMatchObject(expectedResp);
            }
        },
    );
});
