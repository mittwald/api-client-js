import ApiResource from "./ApiResource";

const res = new ApiResource(
    {
        operationId: "doStuff",
        path: "/foo/{id}",
        method: "get",
    },
    async () => {},
    {
        path: {
            id: "123",
        },
    },
);

test("Resolved request path is in Tags", () => {
    expect(res.tags.matches("foo/123")).toBe(true);
});

test("Operation ID is in Tags", () => {
    expect(res.tags.matches("doStuff")).toBe(true);
});
