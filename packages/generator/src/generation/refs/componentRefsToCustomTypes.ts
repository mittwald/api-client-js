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
 * A `deprecated` annotation next to a `$ref` is put there by our own code
 * model, not by the input document: the OpenAPI 3.0 meta schema rejects any
 * sibling of a `$ref`, so a document that carries one never reaches this point.
 * `RequestParameters` and `Parameters` copy the flag from a Parameter Object
 * onto the referencing schema, because only the schema is handed to the
 * TypeScript compiler. It describes the referencing property rather than the
 * referenced component, so it has to survive the conversion into a custom
 * `tsType` reference.
 */
const getRefSiblingAnnotations = (
  something: Record<string, unknown>,
): Record<string, unknown> =>
  something["deprecated"] === undefined
    ? {}
    : { deprecated: something["deprecated"] };

/**
 * Resolves a `#/components/…` ref to the TypeScript type it should be compiled
 * to. Used to redirect refs to the widened request variant of a component
 * schema.
 */
export type RefTSNameResolver = (rootNamespace: string, $ref: string) => string;

export const componentRefsToCustomTypes = (
  rootNamespace: string,
  something: unknown,
  clone = true,
  resolveTSName: RefTSNameResolver = refNameToTSName,
): unknown => {
  if (clone) {
    something = cloneDeep(something);
  }

  if (!is.nonEmptyObject(something)) {
    return something;
  }

  if (is.array(something)) {
    return something.map((item) =>
      componentRefsToCustomTypes(rootNamespace, item, false, resolveTSName),
    );
  }

  const componentRef = getComponentRef(something);

  if (componentRef !== undefined) {
    // see https://github.com/bcherny/json-schema-to-typescript#custom-schema-properties
    return {
      ...getRefSiblingAnnotations(something),
      tsType: resolveTSName(rootNamespace, componentRef),
      type: "object",
    };
  }

  return Object.fromEntries(
    Object.entries(something).map(([key, value]) => [
      key,
      componentRefsToCustomTypes(rootNamespace, value, false, resolveTSName),
    ]),
  );
};
