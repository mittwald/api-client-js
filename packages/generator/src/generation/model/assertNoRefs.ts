import { OpenAPIV3 } from "openapi-types";

export function assertNoRefs<T extends object>(
  obj: T,
): asserts obj is Exclude<T, OpenAPIV3.ReferenceObject> {
  if ("$ref" in obj) {
    throw new Error(`$ref's are not supported here (ref: ${obj.$ref})`);
  }
}
