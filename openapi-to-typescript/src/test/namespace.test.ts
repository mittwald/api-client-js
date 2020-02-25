import { makeNamespace, transformNamespaceName } from "../namespace";

test("should replace all invalid chars with namespace separator", () => {
    const completeAlphabethWithSpecialChars = new Array(94)
        .fill(1)
        .map((_, i) => String.fromCharCode(33 + i))
        .join("");
    const name = transformNamespaceName(completeAlphabethWithSpecialChars);
    expect(name).toBe("$0123456789_Abcdefghijklmnopqrstuvwxyz_Abcdefghijklmnopqrstuvwxyz");
});

test("should make a simple namespace name", () => {
    expect(transformNamespaceName("hello-guys")).toBe("Hello_Guys");
});

test("should append a prefix if the name starts with a number", () => {
    expect(transformNamespaceName("200hello-guys")).toBe("$200Hello_Guys");
});

test("should make a full namespace from array", () => {
    expect(makeNamespace("foo", "bar", "baz")).toBe("Foo.bar.Baz");
    expect(makeNamespace("%$foo", "asd-bar", "baz")).toBe("Foo.Asd_Bar.Baz");
});
