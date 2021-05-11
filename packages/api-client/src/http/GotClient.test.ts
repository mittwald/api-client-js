import { GotClient } from "./GotClient";

describe("GotClient", () => {
    test("can fetch jsonplaceholder", async () => {
        const client = new GotClient();
        const handler = client.requestFunctionFactory({
            method: "get",
            operationId: "foo",
            path: "https://jsonplaceholder.typicode.com/todos/{todo}",
        });

        const response = await handler({
            path: {
                todo: 1,
            },
        });

        return expect(response.content).toMatchInlineSnapshot(`
                    Object {
                      "completed": false,
                      "id": 1,
                      "title": "delectus aut autem",
                      "userId": 1,
                    }
                `);
    });
});
