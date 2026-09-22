import type { ApiClientResponse } from "../../base";

import { performMappings } from "./mapping/performMappings";
import {
  type ValidationErrorFromApiResponseOptions,
  type ValidationErrorObjectApiData,
  type ValidationErrorObject,
  isValidationErrorsApiData,
} from "./types";

export class ValidationError {
  public readonly errors: ValidationErrorObject[] = [];

  public constructor(errors: ValidationErrorObject[] | ValidationErrorObject) {
    this.errors = Array.isArray(errors) ? errors : [errors];
  }

  public static fromResponse(
    response: ApiClientResponse,
    options: ValidationErrorFromApiResponseOptions<ValidationErrorObject> = {},
  ): ValidationError | undefined {
    if (response.status < 400 || !isValidationErrorsApiData(response.data)) {
      return;
    }

    const { pathMappings = {}, typeMappings = {} } = options;

    const errors = response.data.validationErrors
      .map(this.mapValidationErrorObject)
      .flatMap((errorObject) =>
        performMappings(errorObject, {
          mappings: pathMappings,
          property: "path",
        }).flatMap((errorObject) =>
          performMappings(errorObject, {
            mappings: typeMappings,
            property: "type",
          }),
        ),
      )
      .filter((e) => !!e);

    return new ValidationError(errors);
  }

  private static mapValidationErrorObject(
    data: ValidationErrorObjectApiData,
  ): ValidationErrorObject {
    // map context to params for better compatibility with existing ValidationErrorObject
    const { context, ...restData } = data;

    return {
      ...restData,
      params: context,
    };
  }
}
