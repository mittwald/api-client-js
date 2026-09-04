import { refNameToTSName } from "./refNameToTSName.js";
import is from "@sindresorhus/is";
import cloneDeep from "clone-deep";

const getComponentRef = (something: object): string | undefined => {
  if (
    "$ref" in something &&
    typeof something.$ref === "string" &&
    something.$ref.startsWith("#/components/")
  ) {
    return something.$ref;
  }
};

/**
 * Annotation keywords that may sit next to a `$ref` (see
 * `referenceObjectAnnotationExtensions` in `openapi/OpenApiSpec.ts`). They
 * describe the referencing property, not the referenced component, so they must
 * survive the conversion into a custom `tsType` reference.
 */
const refSiblingAnnotationKeys = ["deprecated", "description"] as const;

const getRefSiblingAnnotations = (
  something: Record<string, unknown>,
): Record<string, unknown> =>
  Object.fromEntries(
    refSiblingAnnotationKeys
      .filter((key) => something[key] !== undefined)
      .map((key) => [key, something[key]]),
  );

export const componentRefsToCustomTypes = (
  rootNamespace: string,
  something: unknown,
  clone = true,
): unknown => {
  if (clone) {
    something = cloneDeep(something);
  }

  if (!is.nonEmptyObject(something)) {
    return something;
  }

  if (is.array(something)) {
    return something.map((item) =>
      componentRefsToCustomTypes(rootNamespace, item, false),
    );
  }

  const componentRef = getComponentRef(something);

  if (componentRef !== undefined) {
    // see https://github.com/bcherny/json-schema-to-typescript#custom-schema-properties
    return {
      ...getRefSiblingAnnotations(something),
      tsType: refNameToTSName(rootNamespace, componentRef),
      type: "object",
    };
  }

  return Object.fromEntries(
    Object.entries(something).map(([key, value]) => [
      key,
      componentRefsToCustomTypes(rootNamespace, value, false),
    ]),
  );
};
