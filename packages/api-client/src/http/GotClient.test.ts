import { GotClient } from "./GotClient.js";

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
                    {
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
                    {
                      "body": "foo",
                      "id": 101,
                      "title": "foo",
                    }
                `);
    });

    test("query array param with multiple ids", async () => {
        const client = new GotClient();

        const handler = client.requestFunctionFactory({
            method: "get",
            operationId: "foo",
            path: "https://jsonplaceholder.typicode.com/todos",
        });

        const response = await handler({
            query: {
                id: ["2", "3"],
            },
        });
        //https://jsonplaceholder.typicode.com/todos?id=2&id=3
        return expect(response.content).toMatchObject([
            {
                completed: false,
                id: 2,
                title: "quis ut nam facilis et officia qui",
                userId: 1,
            },
            {
                completed: false,
                id: 3,
                title: "fugiat veniam minus",
                userId: 1,
            },
        ]);
    });

    //https://jsonplaceholder.typicode.com/todos?id=2
    test("query array param with single id", async () => {
        const client = new GotClient();

        const handler = client.requestFunctionFactory({
            method: "get",
            operationId: "foo",
            path: "https://jsonplaceholder.typicode.com/todos",
        });

        const response = await handler({
            query: {
                id: ["2"],
            },
        });

        return expect(response.content).toMatchObject([
            {
                completed: false,
                id: 2,
                title: "quis ut nam facilis et officia qui",
                userId: 1,
            },
        ]);
    });
});
