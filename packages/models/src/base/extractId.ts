import type { ReferenceModel } from "@mittwald/api-models";

export const extractId = (
  from?: ReferenceModel | string,
): string | undefined => {
  if (from === undefined) {
    return;
  }
  if (typeof from === "string") {
    return from;
  }
  return from.id;
};
