import { mapResponse } from "./response.js";
import { Response as NodeResponse } from "node-fetch";

describe("mapResponse()", () => {
    test("does not fail on empty response", () => {
        return expect(mapResponse(new NodeResponse() as any, { method: "get", operationId: "test", path: "/test" })).resolves
            .toMatchInlineSnapshot(`
                    {
                      "content": "",
                      "headers": {},
                      "mediaType": undefined,
                      "operation": {
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
