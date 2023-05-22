import { tsTypeName } from "./tsTypeName.js";

export const tsNamespaceName = (...parts: string[]): string =>
  parts.map(tsTypeName).join(".");
