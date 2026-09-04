import { jest } from "@jest/globals";
import { OpenApiSpec } from "./OpenApiSpec.js";
import { OpenAPISchemaValidationError } from "./OpenAPISchemaValidationError.js";
import { makePetstoreDoc } from "../generation/model/__fixtures__/petstore.js";

jest.setTimeout(30_000);

describe("parsing a valid v3 document", () => {
  test("keeps the document as-is", async () => {
    const doc = makePetstoreDoc();

    const spec = await OpenApiSpec.parse(doc);

    expect(spec.document).toBe(doc);
  });

  test("exposes the document through the instance", async () => {
    const spec = await OpenApiSpec.parse(makePetstoreDoc());

    expect(spec.document.info.title).toBe("Petstore");
    expect(Object.keys(spec.document.paths)).toEqual([
      "/pets",
      "/pets/{petId}",
    ]);
  });

  test("accepts a document constructed directly", () => {
    const doc = makePetstoreDoc();

    expect(new OpenApiSpec(doc).document).toBe(doc);
  });
});

describe("validation", () => {
  const invalidDoc = { openapi: "3.0.3", info: { title: "Broken" } };

  test("rejects a document that does not satisfy the OpenAPI schema", async () => {
    await expect(OpenApiSpec.parse(invalidDoc)).rejects.toThrow(
      "Failed parsing OpenAPISpec",
    );
  });

  test("names the failure OpenAPIParserError", async () => {
    await expect(OpenApiSpec.parse(invalidDoc)).rejects.toMatchObject({
      name: "OpenAPIParserError",
    });
  });

  test("keeps the validation error as the cause", async () => {
    const error = await OpenApiSpec.parse(invalidDoc).catch((e) => e);

    expect(error.cause()).toBeInstanceOf(OpenAPISchemaValidationError);
  });

  test("accepts the same document when validation is skipped", async () => {
    const spec = await OpenApiSpec.parse(invalidDoc, { skipValidation: true });

    expect(spec.document.info.title).toBe("Broken");
  });
});

describe("swagger 2 conversion", () => {
  const swaggerDoc = {
    swagger: "2.0",
    info: { title: "Legacy", version: "1.0.0" },
    paths: {
      "/pets": {
        get: {
          operationId: "listPets",
          responses: {
            "200": { description: "ok", schema: { type: "array", items: {} } },
          },
        },
      },
    },
  };

  test("converts a swagger 2 document to OpenAPI 3", async () => {
    const spec = await OpenApiSpec.parse(swaggerDoc);

    expect(spec.document.openapi).toMatch(/^3\./);
    expect(spec.document.paths["/pets"]?.get?.operationId).toBe("listPets");
  });
});

describe("malformed input", () => {
  test("rejects a document without a version field", async () => {
    await expect(OpenApiSpec.parse({ info: {} })).rejects.toThrow(
      "Failed parsing OpenAPISpec",
    );
  });
});
