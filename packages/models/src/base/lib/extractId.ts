import type { ReferenceModel } from "../models/ReferenceModel";

export function extractId(from: ReferenceModel | string): string;

export function extractId(
  from: ReferenceModel | string | undefined,
): string | undefined;

export function extractId(from?: ReferenceModel | string): string | undefined {
  if (from === undefined) {
    return;
  }
  if (typeof from === "string") {
    return from;
  }
  return from.id;
}
