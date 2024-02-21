import { OpenAPIV3 } from "openapi-types";

export function isRef<T extends object>(
  obj: T | OpenAPIV3.ReferenceObject,
): obj is OpenAPIV3.ReferenceObject {
  return "$ref" in obj && typeof obj.$ref === "string";
}
