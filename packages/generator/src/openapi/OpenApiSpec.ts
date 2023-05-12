import { OpenAPI } from "openapi-types";
import OpenAPISchemaValidatorDefault from "openapi-schema-validator";
import { OpenAPISchemaValidationError } from "./OpenAPISchemaValidationError.js";
import VError from "verror";
import { makeError } from "../lib/makeError.js";

// Fixes issue on ESM import
const { default: OpenAPISchemaValidator } =
  OpenAPISchemaValidatorDefault as unknown as {
    default: typeof OpenAPISchemaValidatorDefault;
  };

const validator = new OpenAPISchemaValidator({
  version: 3,
});

interface ParserOptions {
  skipValidation?: boolean;
}

export class OpenApiSpec {
  public readonly document: OpenAPI.Document;

  public constructor(document: OpenAPI.Document) {
    this.document = document;
  }

  public static async parse(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    doc: any,
    opts: ParserOptions = {},
  ): Promise<OpenApiSpec> {
    try {
      const { skipValidation = false } = opts;

      const validationResult = await validator.validate(doc);

      if (validationResult.errors.length > 0 && !skipValidation) {
        throw new OpenAPISchemaValidationError(validationResult.errors);
      }

      return new OpenApiSpec(doc as OpenAPI.Document);
    } catch (error) {
      throw new VError(
        { cause: makeError(error), name: "OpenAPIParserError" },
        "Failed parsing OpenAPISpec",
      );
    }
  }
}
