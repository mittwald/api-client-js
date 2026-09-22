import type { HandleReadableData } from "../../domain/DomainHandleReadable/types";

import { buildDomainHandleData } from "./buildDomainHandleData";

export function buildDomainHandleReadableData(
  overrides?: Partial<HandleReadableData>,
): HandleReadableData {
  return {
    current: buildDomainHandleData(),
    ...overrides,
  };
}
