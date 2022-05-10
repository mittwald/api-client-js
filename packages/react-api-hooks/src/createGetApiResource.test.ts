import createGetApiResource from "./createGetApiResource";
import ApiResource from "./ApiResource";

const getUserProfileResource = createGetApiResource(
    {
        operationId: "getUserProfile",
        method: "get",
        path: "/user/{id}",
    },
    async () => {},
);

test("Factored getter returns ApiResource", () => {
    const user1 = getUserProfileResource({
        path: {
            id: "123",
            test: "abc",
        },
    });

    const user2 = getUserProfileResource({
        path: {
            test: "abc",
            id: "123",
        },
    });

    expect(user1).toBeInstanceOf(ApiResource);
    expect(user2).toBeInstanceOf(ApiResource);
    expect(user2).toBe(user1);
});

test("Factored getter returns new ApiResource for other request params", () => {
    const user1 = getUserProfileResource({
        path: {
            id: "123",
            test: "abc",
        },
    });

    const user2 = getUserProfileResource({
        path: {
            test: "xyz",
            id: "123",
        },
    });

    expect(user2).not.toBe(user1);
});

test("Factored getter returns same ApiResource for identical request params", () => {
    const user1 = getUserProfileResource({
        path: {
            id: "123",
            test: "abc",
        },
    });

    const user2 = getUserProfileResource({
        path: {
            test: "abc",
            id: "123",
        },
    });

    expect(user2).toBe(user1);
});
