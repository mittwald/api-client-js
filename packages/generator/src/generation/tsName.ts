import { toSafeString } from "json-schema-to-typescript/dist/src/utils.js";

export const tsName = (name: string): string =>
  toSafeString(/^\d/.test(name) ? `$${name}` : name);
