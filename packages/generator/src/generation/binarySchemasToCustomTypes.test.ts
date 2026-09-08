import { binarySchemasToCustomTypes } from "./binarySchemasToCustomTypes.js";

test.each([
  // OpenAPI 3.0
  [
    { type: "string", format: "binary" },
    { type: "string", tsType: "BinaryData" },
  ],
  // OpenAPI 3.1
  [
    { type: "string", contentMediaType: "application/octet-stream" },
    { type: "string", tsType: "BinaryData" },
  ],
  [
    { type: "string", contentEncoding: "binary" },
    { type: "string", tsType: "BinaryData" },
  ],
  // base64 encoded strings stay strings
  [
    { type: "string", format: "byte" },
    { type: "string", format: "byte" },
  ],
  [
    { type: "string", contentEncoding: "base64" },
    { type: "string", contentEncoding: "base64" },
  ],
  // non-string schemas are never binary
  [
    { type: "object", format: "binary" },
    { type: "object", format: "binary" },
  ],
  // descriptions are preserved
  [
    { type: "string", format: "binary", description: "The file" },
    { type: "string", tsType: "BinaryData", description: "The file" },
  ],
  // nested schemas are traversed
  [
    {
      type: "object",
      required: ["file"],
      properties: {
        file: { type: "string", format: "binary" },
        name: { type: "string" },
      },
    },
    {
      type: "object",
      required: ["file"],
      properties: {
        file: { type: "string", tsType: "BinaryData" },
        name: { type: "string" },
      },
    },
  ],
  [
    { anyOf: [{ type: "string", format: "binary" }, { type: "null" }] },
    { anyOf: [{ type: "string", tsType: "BinaryData" }, { type: "null" }] },
  ],
  [
    { type: "array", items: { type: "string", format: "binary" } },
    { type: "array", items: { type: "string", tsType: "BinaryData" } },
  ],
])("binarySchemasToCustomTypes works for test %#", (input, expected) => {
  expect(binarySchemasToCustomTypes(input)).toStrictEqual(expected);
});

test("does not mutate the input schema", () => {
  const input = {
    type: "object",
    properties: { file: { type: "string", format: "binary" } },
  };

  binarySchemasToCustomTypes(input);

  expect(input.properties.file).toStrictEqual({
    type: "string",
    format: "binary",
  });
});
