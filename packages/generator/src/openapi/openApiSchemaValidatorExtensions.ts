import { IJsonSchema } from "openapi-types";

/**
 * The meta schema shipped with `openapi-schema-validator` describes OpenAPI
 * 3.0, whose Schema Object is a subset of JSON Schema Draft Wright 00 and is
 * declared with `additionalProperties: false`. Keywords that were only added to
 * the Schema Object with OpenAPI 3.1 (which aligns with JSON Schema 2020-12)
 * are therefore rejected as "additional properties" — even though they are
 * perfectly understood by the code generation further down the pipeline.
 *
 * These extensions are deep-merged into the meta schema by
 * `openapi-schema-validator` and re-allow such keywords.
 *
 * @see https://spec.openapis.org/oas/v3.1.0.html#schema-object
 * @see https://json-schema.org/draft/2020-12/json-schema-validation#name-const
 */
export const openApiSchemaValidatorExtensions = {
  definitions: {
    schema: {
      properties: {
        /**
         * `const` restricts a schema to exactly one value; it is the JSON
         * Schema 2020-12 equivalent of a single-valued `enum` and is compiled
         * into a TypeScript literal type. Any JSON value is allowed here.
         */
        const: {
          description:
            "The value of this keyword MAY be of any type, including null.",
        },
      },
    },
  },
} as unknown as IJsonSchema;
