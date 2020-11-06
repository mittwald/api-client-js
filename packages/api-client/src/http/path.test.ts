import { buildPathParamsMatcher } from "./path";

describe("buildPathParamsMatcher()", () => {
    test("gets path params from url", () => {
        const parser = buildPathParamsMatcher("http://wtf/path/with/{foo}/param");
        const result = parser("http://wtf/path/with/value-for-foo/param");
        expect(result).toMatchInlineSnapshot(`
            Object {
              "foo": "value-for-foo",
            }
        `);
    });

    test("gets path params from path", () => {
        const parser = buildPathParamsMatcher("/path/with/{foo}/param");
        const result = parser("/path/with/value-for-foo/param");
        expect(result).toMatchInlineSnapshot(`
            Object {
              "foo": "value-for-foo",
            }
        `);
    });
});
