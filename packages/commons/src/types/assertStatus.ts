import { Response } from "./Response.js";
import assertOneOfStatus from "./assertOneOfStatus.js";

export function assertStatus<T extends Response, S extends T["status"]>(
  response: T,
  expectedStatus: S,
): asserts response is T & { status: S } {
  assertOneOfStatus(response, [expectedStatus]);
}

export default assertStatus;
