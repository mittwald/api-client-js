import { OpenAPIV3 } from "openapi-types";
import { OpenAPISchemaValidationError } from "./OpenAPISchemaValidationError.js";
import VError from "verror";
import { makeError } from "../lib/makeError.js";
import OpenAPISchemaValidator, {
  IOpenAPISchemaValidator,
  OpenAPISchemaValidatorArgs,
} from "openapi-schema-validator";
import { convert } from "swagger2openapi";
import { ux } from "@oclif/core";

type OpenAPISchemaValidatorConstructor = new (
  args: OpenAPISchemaValidatorArgs,
) => IOpenAPISchemaValidator;

/**
 * `openapi-schema-validator` is a CommonJS package, and the shape of its
 * default import depends on the module resolution of the consumer: the ESM
 * build sees the whole `module.exports` (so the class sits on `.default`),
 * while a CommonJS resolution already unwraps it. Normalize both.
 */
const ValidatorConstructor: OpenAPISchemaValidatorConstructor = (
  "default" in OpenAPISchemaValidator
    ? OpenAPISchemaValidator.default
    : OpenAPISchemaValidator
) as OpenAPISchemaValidatorConstructor;

const validator = new ValidatorConstructor({
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static async convertToOpenApi(doc: any): Promise<OpenAPIV3.Document> {
    const version = doc.openapi ?? doc.swagger;
    if (version.startsWith("3")) {
      return doc;
    }

    ux.action.start("Converting doc to OpenAPI v3");
    const spec = await convert(doc, {
      patch: true,
    });
    ux.action.stop();
    return spec.openapi;
  }

  public static async parse(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    doc: any,
    opts: ParserOptions = {},
  ): Promise<OpenApiSpec> {
    try {
      const { skipValidation = false } = opts;
      doc = await OpenApiSpec.convertToOpenApi(doc);

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
