import { OpenAPIV3 } from "openapi-types";

/**
 * A deliberately small but structurally complete OpenAPI v3 document: refs
 * between components, both safe and unsafe operations, path/query/header
 * parameters, several response statuses, and a security scheme. It exercises
 * the code generation model without the bulk of a real spec.
 *
 * Returned fresh on every call: building a `CodeGenerationModel` runs
 * `populateNullableTypes` over the document and mutates it in place, so a
 * shared instance would accumulate changes between tests.
 */
export const makePetstoreDoc = (): OpenAPIV3.Document => ({
  openapi: "3.0.3",
  info: { title: "Petstore", version: "1.0.0" },
  tags: [
    { name: "pet", description: "Everything about pets" },
    { name: "store" },
  ],
  components: {
    securitySchemes: {
      accessToken: {
        type: "apiKey",
        in: "header",
        name: "x-access-token",
      },
    },
    schemas: {
      Pet: {
        type: "object",
        required: ["id", "name"],
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          nickname: { type: "string", nullable: true },
          tags: { type: "array", items: { $ref: "#/components/schemas/Tag" } },
        },
      },
      Tag: {
        type: "object",
        required: ["label"],
        properties: { label: { type: "string" } },
      },
      Error: {
        type: "object",
        required: ["message"],
        properties: { message: { type: "string" } },
      },
    },
    parameters: {
      PetId: {
        name: "petId",
        in: "path",
        required: true,
        schema: { type: "string" },
      },
    },
    requestBodies: {
      PetBody: {
        required: true,
        content: {
          "application/json": { schema: { $ref: "#/components/schemas/Pet" } },
        },
      },
    },
    responses: {
      NotFound: {
        description: "Not found",
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/Error" },
          },
        },
      },
    },
  },
  paths: {
    "/pets": {
      get: {
        operationId: "listPets",
        tags: ["pet"],
        parameters: [
          {
            name: "limit",
            in: "query",
            required: false,
            schema: { type: "integer" },
          },
          {
            name: "x-access-token",
            in: "header",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "A list of pets",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Pet" },
                },
              },
            },
          },
          default: { $ref: "#/components/responses/NotFound" },
        },
      },
      post: {
        operationId: "createPet",
        tags: ["pet"],
        requestBody: { $ref: "#/components/requestBodies/PetBody" },
        responses: {
          "201": {
            description: "The created pet",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Pet" },
              },
            },
          },
          "400": { $ref: "#/components/responses/NotFound" },
        },
      },
    },
    "/pets/{petId}": {
      get: {
        operationId: "getPet",
        tags: ["pet"],
        parameters: [{ $ref: "#/components/parameters/PetId" }],
        responses: {
          "200": {
            description: "The pet",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Pet" },
              },
            },
          },
          "404": { $ref: "#/components/responses/NotFound" },
        },
      },
      delete: {
        operationId: "deletePet",
        parameters: [{ $ref: "#/components/parameters/PetId" }],
        responses: {
          "204": { description: "Deleted" },
        },
      },
    },
  },
});
