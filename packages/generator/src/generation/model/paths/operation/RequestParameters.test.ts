import { OpenAPIV3 } from "openapi-types";
import { CodeGenerationModel } from "../../CodeGenerationModel.js";
import { format } from "../../../format.js";

const rootNamespace = "TestAPI";

const buildDoc = (
  requestBody: OpenAPIV3.RequestBodyObject,
): OpenAPIV3.Document => ({
  openapi: "3.0.0",
  info: { title: "Test API", version: "1.0.0" },
  paths: {
    "/upload": {
      post: {
        operationId: "test-upload",
        summary: "Upload something",
        requestBody,
        responses: {
          "204": { description: "No Content" },
        },
      },
    },
  },
});

const compile = async (
  requestBody: OpenAPIV3.RequestBodyObject,
): Promise<{ types: string; descriptors: string }> => {
  const model = CodeGenerationModel.fromDoc(
    rootNamespace,
    buildDoc(requestBody),
  );

  return {
    types: await format(await model.compileTypes({ rootNamespace })),
    descriptors: await format(model.paths.compileDescriptors()),
  };
};

const multipartWithBinaryField: OpenAPIV3.RequestBodyObject = {
  required: true,
  content: {
    "multipart/form-data": {
      schema: {
        type: "object",
        required: ["file"],
        properties: {
          file: { type: "string", format: "binary" },
          description: { type: "string" },
        },
      },
    },
  },
};

describe("multipart/form-data request bodies", () => {
  test("binary fields are typed as BinaryData, other fields keep their type", async () => {
    const { types } = await compile(multipartWithBinaryField);

    expect(types).toContain("export interface RequestBody {");
    expect(types).toContain("file: BinaryData;");
    expect(types).toContain("description?: string;");
    expect(types).not.toContain("[k: string]: unknown");
  });

  test("BinaryData is imported from the commons package", async () => {
    const { types } = await compile(multipartWithBinaryField);

    expect(types).toMatch(
      /import \{[^}]*BinaryData[^}]*\} from "@mittwald\/api-client-commons";/s,
    );
  });

  test("the descriptor carries the request content type", async () => {
    const { descriptors } = await compile(multipartWithBinaryField);

    expect(descriptors).toContain('requestContentType: "multipart/form-data",');
  });
});

describe("other request body media types", () => {
  test("application/json is used when available and not put into the descriptor", async () => {
    const { types, descriptors } = await compile({
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            properties: { file: { type: "string", format: "binary" } },
          },
        },
        "application/json": {
          schema: {
            type: "object",
            required: ["name"],
            properties: { name: { type: "string" } },
          },
        },
      },
    });

    expect(types).toContain("name: string;");
    expect(types).not.toContain("BinaryData;");
    expect(descriptors).not.toContain("requestContentType");
  });

  test("application/x-www-form-urlencoded is modelled and declared", async () => {
    const { types, descriptors } = await compile({
      content: {
        "application/x-www-form-urlencoded": {
          schema: {
            type: "object",
            required: ["grant_type"],
            properties: { grant_type: { type: "string" } },
          },
        },
      },
    });

    expect(types).toContain("grant_type: string;");
    expect(types).not.toContain("[k: string]: unknown");
    expect(descriptors).toContain(
      'requestContentType: "application/x-www-form-urlencoded",',
    );
  });
});
