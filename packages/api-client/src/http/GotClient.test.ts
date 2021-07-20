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

    test("can post data to jsonplaceholder", async () => {
        const client = new GotClient();
        const handler = client.requestFunctionFactory({
            method: "post",
            operationId: "foo",
            path: "https://jsonplaceholder.typicode.com/posts",
        });

        const response = await handler({
            requestBody: {
                title: "foo",
                body: "foo",
            },
        });

        expect(response.status).toBe(201);
        expect(response.content).toMatchInlineSnapshot(`
                    Object {
                      "body": "foo",
                      "id": 101,
                      "title": "foo",
                    }
                `);
    });
});
