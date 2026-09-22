import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { ValidationErrorMapping } from "./mapping/types";

export type ErrorApiData = MittwaldAPIV2.Components.Schemas.CommonsError;

type ValidationErrorParams = Record<string, string | undefined>;
type ValidationErrorMeta = Record<string, string | undefined>;

// @todo: use enum with only allowed types
type ValidationErrorType = string;

export type ValidationErrorObjectApiData =
  MittwaldAPIV2.Components.Schemas.CommonsValidationErrorSchema;

export type ValidationErrorsApiData =
  MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;

export interface ValidationErrorObject {
  params?: ValidationErrorParams;
  meta?: ValidationErrorMeta;
  type: ValidationErrorType;
  message?: string;
  path: string;
}

export const isValidationErrorsApiData = (
  data: unknown,
): data is ValidationErrorsApiData => {
  return (
    typeof data === "object" &&
    data !== null &&
    "validationErrors" in data &&
    Array.isArray(data.validationErrors) &&
    "type" in data &&
    data.type === "ValidationError"
  );
};

export interface ValidationErrorFromApiResponseOptions<T> {
  pathMappings?: ValidationErrorMapping<T>;
  typeMappings?: ValidationErrorMapping<T>;
}
