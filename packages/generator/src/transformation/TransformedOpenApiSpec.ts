import {
  TransformedOpenApiDocument,
  transformedOpenApiDocumentZ,
} from "./TransformedOpenApiDocument.js";
import { UniversalFileLoader } from "../lib/UniversalFileLoader.js";
import { OpenApiSpec } from "../openapi/OpenApiSpec.js";
import jsonata from "jsonata";
import { relativePath } from "../lib/relativePath.js";
import { fromZodError } from "zod-validation-error";
import VError from "verror";

const jsonataFile = new UniversalFileLoader(
  relativePath(import.meta, "../../resources/transform.jsonata"),
);

export class TransformedOpenApiSpec {
  public readonly document: TransformedOpenApiDocument;

  private constructor(document: TransformedOpenApiDocument) {
    this.document = Object.freeze(document);
  }

  public static async transform(
    spec: OpenApiSpec,
  ): Promise<TransformedOpenApiSpec> {
    const jsonataExpression = await jsonataFile.load();
    const { evaluate } = jsonata(jsonataExpression);
    const evaluated = await evaluate(spec.document);
    const parsed = await transformedOpenApiDocumentZ.safeParseAsync(evaluated);

    if (!parsed.success) {
      throw new VError(
        {
          cause: fromZodError(parsed.error),
          name: "OpenAPITransformationError",
        },
        "Error transforming the OpenAPI spec. Possible causes can be an invalid OpenAPI spec or an incorrect transformation.",
      );
    }

    return new TransformedOpenApiSpec(evaluated);
  }
}
