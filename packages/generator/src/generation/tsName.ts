import { toSafeString } from "json-schema-to-typescript/dist/src/utils.js";

export const tsName = (name: string): string => {
  const nameStartsWithNumber = /^\d/.test(name);
  const almostSafeString = nameStartsWithNumber ? `$${name}` : name;
  return toSafeString(almostSafeString);
};
