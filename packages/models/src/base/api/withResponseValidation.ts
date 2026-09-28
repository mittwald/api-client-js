import { Commons } from "@mittwald/api-client";

import {
  type ValidationErrorFromApiResponseOptions,
  type ValidationErrorObject,
  ValidationError,
} from "../../errors/index.js";

type AnyFn = (...args: unknown[]) => unknown;

export interface ResponseValidationOptions {
  validationError?: ValidationErrorFromApiResponseOptions<ValidationErrorObject>;
}

const mapError = (error: unknown, options: ResponseValidationOptions) => {
  if (error instanceof Commons.ApiClientError && error.response) {
    const validationError = ValidationError.fromResponse(
      error.response as Commons.AnyResponse,
      options.validationError,
    );

    if (validationError) {
      throw validationError;
    }
  }
  throw error;
};

export const withResponseValidation = <T extends AnyFn>(
  fn: T,
  options: ResponseValidationOptions = {},
): T =>
  ((...args) => {
    try {
      return fn(...args);
    } catch (error) {
      mapError(error, options);
    }
  }) as T;
