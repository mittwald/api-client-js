import { splitRefNamespaces } from "./splitRefNamespaces.js";
import { tsNamespaceName } from "../tsNamespaceName.js";

export const refNameToTSName = (rootNamespace: string, $ref: string): string =>
  tsNamespaceName(rootNamespace, ...splitRefNamespaces($ref));
