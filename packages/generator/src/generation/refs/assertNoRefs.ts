import { OpenAPIV3 } from "openapi-types";
import { isRef } from "./isRef.js";

export function assertNoRefs<T extends object>(
  obj: T,
): asserts obj is Exclude<T, OpenAPIV3.ReferenceObject> {
  if (isRef(obj)) {
    throw new Error(`$ref's are not supported here (ref: ${obj.$ref})`);
  }
}
