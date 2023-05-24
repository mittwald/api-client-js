import { OpenAPISchemaValidatorResult } from "openapi-schema-validator";
import { dump } from "js-yaml";

type Errors = OpenAPISchemaValidatorResult["errors"];

export class OpenAPISchemaValidationError extends Error {
  public constructor(errors: Errors) {
    const mergedMessage =
      OpenAPISchemaValidationError.mergeErrorMessage(errors);
    super(`OpenAPI is invalid: ${mergedMessage}`);
    Object.setPrototypeOf(this, OpenAPISchemaValidationError.prototype);
    this.name = "OpenAPISchemaValidationError";
  }

  private static mergeErrorMessage(errors: Errors): string {
    return errors
      .map(
        (error, index) => `
#${index + 1}
${dump(error)}
`,
      )
      .join("");
  }
}
