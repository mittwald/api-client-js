import { compile, JSONSchema, Options } from "json-schema-to-typescript";

const defaultCompileOptions: Partial<Options> = {
  bannerComment: "",
  additionalProperties: false,
  maxItems: 5,
};

export const compileJsonSchema = (
  schema: JSONSchema,
  name: string,
  options: Partial<Options> = {},
) =>
  compile(schema, name, {
    ...defaultCompileOptions,
    ...options,
  });
