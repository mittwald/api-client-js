import { expect } from "@jest/globals";
import assertStatus from "../types/assertStatus.js";
import { Response } from "../types/Response.js";

export function expectStatus<T extends Response, S extends T["status"]>(
  response: T,
  status: S,
): asserts response is T & { status: S } {
  expect(response.status).toBe(status);
  assertStatus(response, status);
}

export default expectStatus;
