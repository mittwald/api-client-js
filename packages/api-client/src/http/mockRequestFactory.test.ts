import { mapResponse } from "./response";
import { mockRequestFactory, resetAllRequestMocks } from "./mockRequestFactory";
import { KyClient } from "./KyClient";

const client = new KyClient({
    ky: {
        prefixUrl: "http://localhost",
    },
});

describe("mockRequestFactory()", () => {
    beforeEach(() => {
        resetAllRequestMocks();
    });

    test("does generally mock responses correctly", async () => {
        const mockRequest = mockRequestFactory<
            {},
            {
                status: 200;
                content: {
                    bar: string;
                };
            }
        >({
            path: "/test-mock",
            method: "get",
        });

        mockRequest(
            {},
            {
                content: {
                    bar: "bar",
                },
                status: 200,
            },
        );

        const response = await client.ky.get("test-mock");
        const mappedResponse = await mapResponse(response);

        return expect(mappedResponse).toMatchInlineSnapshot(`
                    Object {
                      "content": Object {
                        "bar": "bar",
                      },
                      "headers": Object {
                        "content-length": "13",
                        "content-type": "application/json",
                      },
                      "mediaType": "application/json",
                      "status": 200,
                    }
                `);
    });

    test("does use correct response content-type", async () => {
        const mockRequest = mockRequestFactory<
            {},
            {
                status: 200;
                content: string;
                mediaType: "base64";
            }
        >({
            path: "/test-mock",
            method: "get",
        });

        mockRequest(
            {},
            {
                content: "Zm9v",
                status: 200,
                mediaType: "base64; charset=UTF-8" as any,
            },
        );

        const response = await client.ky.get("test-mock");
        const mappedResponse = await mapResponse(response);

        return expect(mappedResponse).toMatchInlineSnapshot(`
                    Object {
                      "content": "Zm9v",
                      "headers": Object {
                        "content-length": "4",
                        "content-type": "base64; charset=UTF-8",
                      },
                      "mediaType": "base64",
                      "status": 200,
                    }
                `);
    });
});
