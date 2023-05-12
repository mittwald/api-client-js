import { tsName } from "./tsName.js";

export const tsNamespaceName = (...parts: string[]): string =>
  parts.map(tsName).join(".");
