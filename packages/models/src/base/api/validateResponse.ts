import type { Commons } from "@mittwald/api-client";

import { assertOneOfStatus, assertStatus } from "@mittwald/api-client";

import {
  type ResponseValidationOptions,
  withResponseValidation,
} from "./withResponseValidation";

export function validateResponse<
  T extends Commons.Response,
  S extends T["status"],
>(
  response: T,
  status: S[] | S,
  options?: ResponseValidationOptions,
): asserts response is {
  status: S;
} & T {
  const assertionWithValidation = withResponseValidation(() => {
    if (Array.isArray(status)) {
      assertOneOfStatus(response, status);
    } else {
      assertStatus(response, status);
    }
  }, options);

  assertionWithValidation();
}
