import type { HandleField } from "../../domain/DomainHandle/types.js";

export function buildDomainHandleFieldData(
  overrides?: Partial<HandleField>,
): HandleField {
  return {
    value: "Example Owner",
    name: "name",
    ...overrides,
  };
}
