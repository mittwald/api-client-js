import { mapResponse } from "./response";
import { Response as NodeResponse } from "node-fetch";

describe("mapResponse()", () => {
    test("does not fail on empty response", () => {
        return expect(mapResponse(new NodeResponse() as any)).resolves.toMatchInlineSnapshot(`
                    Object {
                      "content": "",
                      "headers": Object {},
                      "mediaType": undefined,
                      "status": 200,
                    }
                `);
    });
});
