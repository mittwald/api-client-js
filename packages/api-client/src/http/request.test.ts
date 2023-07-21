import { convertQueryToUrlSearchParams } from "./request.js";

describe.each([
    ["foo=bar", "foo=bar"],
    [{ foo: "bar" }, "foo=bar"],
    [{ foo: ["bar", "baz"] }, "foo=bar&foo=baz"],
    [{ foo: ["bar"] }, "foo=bar"],
    [{ foo: 42 }, "foo=42"],
    [{ foo: true }, "foo=true"],
    [{ foo: [42, true] }, "foo=42&foo=true"],
    [null, undefined],
    [undefined, undefined],
])("Conversion of %s", (params, expected) => {
    test(`results in ${expected}`, () => {
        const converted = convertQueryToUrlSearchParams(params);
        expect(converted?.toString()).toBe(expected);
    });
});
