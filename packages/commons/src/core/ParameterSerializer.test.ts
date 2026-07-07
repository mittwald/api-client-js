import { ParamSerializer } from "./ParameterSerializer.js";
import {
  QuerySerializationStyles,
  SerializationOptions,
} from "../types/index.js";

type SerializerOptions = Record<
  string,
  SerializationOptions<QuerySerializationStyles>
>;

function getDecodedUrlString(serializer: ParamSerializer): string {
  return decodeURIComponent(serializer.getSearchParams().toString());
}

describe("QueryParamSerializer", () => {
  describe("Primitive Values", () => {
    test.each([
      {
        value: "value",
        expected: "key=value",
      },
      {
        value: 123,
        expected: "key=123",
      },
      {
        value: true,
        expected: "key=true",
      },
      {
        value: false,
        expected: "key=false",
      },
    ])("serializes primitive value $value", ({ value, expected }) => {
      const options: SerializerOptions = {};
      const serializer = new ParamSerializer(options);

      serializer.serializeQueryParam("key", value);

      expect(getDecodedUrlString(serializer)).toBe(expected);
    });
  });

  describe("Array Serialization", () => {
    test.each([
      {
        style: "form",
        explode: true,
        expected: "arrayParam=value1&arrayParam=value2",
      },
      {
        style: "form",
        explode: false,
        expected: "arrayParam=value1,value2",
      },
      {
        style: "spaceDelimited",
        explode: false,
        // URLSearchParams encodes spaces as plus signs (+)
        // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#preserving_plus_signs
        expected: "arrayParam=value1+value2",
      },
      {
        style: "pipeDelimited",
        explode: false,
        expected: "arrayParam=value1|value2",
      },
    ] as const)(
      "serializes arrays in $style style with explode=$explode",
      ({ style, explode, expected }) => {
        const options: SerializerOptions = {
          arrayParam: { style, explode },
        };
        const serializer = new ParamSerializer(options);

        serializer.serializeQueryParam("arrayParam", ["value1", "value2"]);

        expect(getDecodedUrlString(serializer)).toBe(expected);
      },
    );

    test("throws an error for unsupported array serialization styles", () => {
      const options: SerializerOptions = {
        arrayParam: { style: "deepObject" },
      };
      const serializer = new ParamSerializer(options);

      expect(() => {
        serializer.serializeQueryParam("arrayParam", ["value1", "value2"]);
      }).toThrow("Unsupported serialization style for arrays: 'deepObject'");
    });
  });

  describe("Object Serialization", () => {
    test.each([
      {
        style: "form",
        explode: true,
        expected: "foo=bar&baz=qux",
      },
      {
        style: "form",
        explode: false,
        expected: "objectParam=foo,bar,baz,qux",
      },
      {
        style: "deepObject",
        explode: true,
        expected: "objectParam[foo]=bar&objectParam[baz]=qux",
      },
      {
        style: "contentJSON",
        explode: true,
        expected: 'objectParam={"foo":"bar","baz":"qux"}',
      },
    ] as const)(
      "serializes objects in $style style with explode=$explode",
      ({ style, explode, expected }) => {
        const options: SerializerOptions = {
          objectParam: { style, explode },
        };
        const serializer = new ParamSerializer(options);

        serializer.serializeQueryParam("objectParam", {
          foo: "bar",
          baz: "qux",
        });

        expect(getDecodedUrlString(serializer)).toBe(expected);
      },
    );

    test("throws an error for unsupported object serialization styles", () => {
      const options: SerializerOptions = {
        objectParam: { style: "pipeDelimited" },
      };
      const serializer = new ParamSerializer(options);

      expect(() => {
        serializer.serializeQueryParam("objectParam", { foo: "bar" });
      }).toThrow(
        "Unsupported serialization style for objects: 'pipeDelimited'",
      );
    });
  });
});
