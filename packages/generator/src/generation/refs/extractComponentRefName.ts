import { splitRefNamespaces } from "./splitRefNamespaces.js";
import { ComponentTypeName } from "../model/components/Components.js";

export const extractComponentRefName = (
  ref: string,
  component: ComponentTypeName,
): string => {
  const parts = splitRefNamespaces(ref);

  if (parts[parts.length - 2] === component) {
    return parts[parts.length - 1];
  }

  throw new Error(
    `Could not extract ref name (component: ${component}, ref: ${ref})`,
  );
};
