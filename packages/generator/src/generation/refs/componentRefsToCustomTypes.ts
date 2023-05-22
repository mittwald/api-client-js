import { refNameToTSName } from "./refNameToTSName.js";
import is from "@sindresorhus/is";
import cloneDeep from "clone-deep";

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

  if (
    "$ref" in something &&
    typeof something.$ref === "string" &&
    something.$ref.startsWith("#/components/")
  ) {
    return {
      // see https://github.com/bcherny/json-schema-to-typescript#custom-schema-properties
      tsType: refNameToTSName(rootNamespace, something.$ref),
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
