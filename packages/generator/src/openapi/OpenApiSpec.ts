import { OpenAPIV3 } from "openapi-types";
import { OpenAPISchemaValidationError } from "./OpenAPISchemaValidationError.js";
import VError from "verror";
import { makeError } from "../lib/makeError.js";
import OpenAPISchemaValidator from "openapi-schema-validator";

const validator = new OpenAPISchemaValidator.default({
  version: 3,
});

interface ParserOptions {
  skipValidation?: boolean;
}

export class OpenApiSpec {
  public readonly document: OpenAPIV3.Document;

  public constructor(document: OpenAPIV3.Document) {
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

      return new OpenApiSpec(doc as OpenAPIV3.Document);
    } catch (error) {
      throw new VError(
        { cause: makeError(error), name: "OpenAPIParserError" },
        "Failed parsing OpenAPISpec",
      );
    }
  }
}
