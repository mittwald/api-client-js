import { replaceRefsTypeNames, replaceRefWithConst } from "../references";
import { Schema } from "@mittwald/awesome-node-utils/types/schema";

test("should replace the ref with json schema const", () => {
    const schema: Schema = {
        $ref: "#asd",
    };
    expect(replaceRefWithConst(schema)).toBe({
        const: "#asd",
    });
});

test("should replace deep in th object the ref with json schema const", () => {
    const schema: Schema = {
        properties: {
            hello: {
                $ref: "#hello",
            },
            foo: {
                type: "string",
            },
        },
    };
    expect(replaceRefWithConst(schema)).toStrictEqual({
        properties: {
            hello: {
                const: "#hello",
            },
            foo: {
                type: "string",
            },
        },
    });
});

test("should replace references in ts code with namespace strings", () => {
    const tsCode = 'interface De_Mittwald_V1_Signup_Profile { firstName: string; lastName: "#/foo/bar"; }';
    const result = replaceRefsTypeNames("ROOTNAMESPACE", tsCode);
    expect(result).toBe("interface De_Mittwald_V1_Signup_Profile { firstName: string; lastName: ROOTNAMESPACE.Foo.Bar; }");
});
