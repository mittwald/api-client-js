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
