import { KyClient } from "./KyClient";

describe("KyClient", () => {
    test("query array param with multiple ids", async () => {
        const client = new KyClient();

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
        const client = new KyClient();

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

        return expect(response.content).toMatchObject(
            [
                {
                    completed: false,
                    id: 2,
                    title: "quis ut nam facilis et officia qui",
                    userId: 1,
                },
            ],
        );
    });

    test("path param with single id", async () => {
        const client = new KyClient();

        const handler = client.requestFunctionFactory({
            method: "get",
            operationId: "foo",
            path: "https://jsonplaceholder.typicode.com/todos/{todo}",
        });

        const response = await handler({
            path: {
                todo: 2,
            },
        });

        //https://jsonplaceholder.typicode.com/todos/2
        return expect(response.content).toMatchObject(
            {
                completed: false,
                id: 2,
                title: "quis ut nam facilis et officia qui",
                userId: 1,
            }
        );
    });
});
