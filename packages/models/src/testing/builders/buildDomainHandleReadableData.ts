import type { HandleReadableData } from "../../domain/DomainHandleReadable/types.js";

import { buildDomainHandleData } from "./buildDomainHandleData.js";

export function buildDomainHandleReadableData(
  overrides?: Partial<HandleReadableData>,
): HandleReadableData {
  return {
    current: buildDomainHandleData(),
    ...overrides,
  };
}
