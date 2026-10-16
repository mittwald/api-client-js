import type { DomainProcessData } from "../../domain/DomainProcess/types.js";

export function buildDomainProcessData(
  overrides?: Partial<DomainProcessData>,
): DomainProcessData {
  return {
    lastUpdate: "2024-01-01T00:00:00.000Z",
    processType: "REGISTER",
    transactionId: "tx-1",
    state: "REQUESTED",
    ...overrides,
  };
}
