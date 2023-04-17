import { viewHelpersFactory } from "./viewHelpers";
import { Schema } from "@mittwald/awesome-node-utils/types/schema";

const viewHelpers = viewHelpersFactory("test");

describe("ViewHelpers", () => {
  describe("transformNamespaceName", () => {
    test("should replace all invalid chars with namespace separator", () => {
      const completeAlphabethWithSpecialChars = new Array(94)
        .fill(1)
        .map((_, i) => String.fromCharCode(33 + i))
        .join("");
      const name = viewHelpers.transformNamespaceName(
        completeAlphabethWithSpecialChars,
      );
      expect(name).toBe(
        "$0123456789_Abcdefghijklmnopqrstuvwxyz_Abcdefghijklmnopqrstuvwxyz",
      );
    });

    test("should make a simple namespace name", () => {
      expect(viewHelpers.transformNamespaceName("hello-guys")).toBe(
        "Hello_Guys",
      );
    });

    test("should append a prefix if the name starts with a number", () => {
      expect(viewHelpers.transformNamespaceName("200hello-guys")).toBe(
        "$200Hello_Guys",
      );
    });
  });

  describe("joinNamespace", () => {
    test("should make a full namespace from array", () => {
      expect(viewHelpers.joinNamespace("foo", "bar", "baz")).toBe(
        "Foo.Bar.Baz",
      );
      expect(viewHelpers.joinNamespace("%$foo", "asd-bar", "baz")).toBe(
        "Foo.Asd_Bar.Baz",
      );
    });
  });

  describe("referenceNames", () => {
    test("should replace the ref with json schema const", () => {
      const schema: Schema = {
        $ref: "#asd",
      };
      expect(viewHelpers.replaceRefWithConst(schema)).toEqual({
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
      expect(viewHelpers.replaceRefWithConst(schema)).toStrictEqual({
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
      const tsCode =
        'interface De_Mittwald_V1_Signup_Profile { firstName: string; lastName: "#/foo/bar"; }';

      const result = viewHelpers.replaceRefsTypeNames("ROOTNAMESPACE", tsCode);
      expect(result).toBe(
        "interface De_Mittwald_V1_Signup_Profile { firstName: string; lastName: ROOTNAMESPACE.Foo.Bar; }",
      );
    });
  });
});
