import { Response } from "./Response.js";
import ApiClientError from "../core/ApiClientError.js";

export function assertStatus<T extends Response, S extends T["status"]>(
  response: T,
  expectedStatus: S,
): asserts response is T & { status: S } {
  if (response.status !== expectedStatus) {
    throw ApiClientError.fromResponse(
      `Unexpected response status (expected ${expectedStatus}, got: ${response.status})`,
      response,
    );
  }
}

export default assertStatus;
