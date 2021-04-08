import { mapResponse } from "./response";
import { Response as NodeResponse } from "node-fetch";

describe("mapResponse()", () => {
    test("does not fail on empty response", () => {
        return expect(mapResponse(new NodeResponse() as any, { method: "get", operationId: "test", path: "/test" })).resolves
            .toMatchInlineSnapshot(`
                    Object {
                      "content": "",
                      "headers": Object {},
                      "mediaType": undefined,
                      "operation": Object {
                        "method": "get",
                        "operationId": "test",
                        "path": "/test",
                      },
                      "status": 200,
                      "url": "",
                    }
                `);
    });
});
