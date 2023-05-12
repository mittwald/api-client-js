import { JSONSchema } from "json-schema-to-typescript";
import { z } from "zod";

const tagZ = z.object({
  name: z.string(),
  description: z.string(),
});

const tagsZ = z.array(tagZ);

const jsonSchemaZ = z.custom<JSONSchema>((data) => typeof data === "object");

const operationParametersZ = z.object({
  path: jsonSchemaZ.optional(),
  query: jsonSchemaZ.optional(),
  header: jsonSchemaZ.optional(),
  requestBody: jsonSchemaZ.optional(),
});

const operationResponseZ = z.object({
  content: z.record(z.string(), jsonSchemaZ).optional(),
  headers: jsonSchemaZ.optional(),
});

const operationResponsesZ = z.record(z.string(), operationResponseZ);

const operationZ = z.object({
  operationId: z.string(),
  parameters: operationParametersZ.optional(),
  responses: operationResponsesZ,
  summary: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const operationsZ = z.record(z.string(), operationZ);

const pathsZ = z.record(z.string(), operationsZ);

const schemasZ = z.record(z.string(), jsonSchemaZ);

const responseMediaTypeSchemaZ = z.object({
  schema: jsonSchemaZ,
});

const responseMediaTypesZ = z.record(z.string(), responseMediaTypeSchemaZ);

const responseZ = z.object({
  content: responseMediaTypesZ.optional(),
});

const responsesZ = z.record(z.string(), responseZ);

export const transformedOpenApiDocumentZ = z.object({
  tags: tagsZ,
  paths: pathsZ,
  components: z
    .object({
      schemas: schemasZ.optional(),
      parameters: schemasZ.optional(),
      requestBodies: schemasZ.optional(),
      responses: responsesZ.optional(),
    })
    .optional(),
  definitions: schemasZ.optional(),
});

export type Tag = z.infer<typeof tagZ>;

export type OperationParameters = z.infer<typeof operationParametersZ>;

export type OperationResponse = z.infer<typeof operationResponseZ>;

export type OperationResponses = z.infer<typeof operationResponsesZ>;

export type Operation = z.infer<typeof operationZ>;

export type Operations = z.infer<typeof operationsZ>;

export type Paths = z.infer<typeof pathsZ>;

export type Schemas = z.infer<typeof schemasZ>;

export type ResponseMediaTypes = z.infer<typeof responseMediaTypesZ>;

export type Responses = z.infer<typeof responsesZ>;

export type TransformedOpenApiDocument = z.infer<
  typeof transformedOpenApiDocumentZ
>;
