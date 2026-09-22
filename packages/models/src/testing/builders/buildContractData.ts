import type { ContractData } from "../../contract/Contract/types";

import { buildContractItemData } from "./buildContractItemData";

export function buildContractData(
  overrides?: Partial<ContractData>,
): ContractData {
  return {
    baseItem: buildContractItemData({ isBaseItem: true }),
    contractId: "contract-id",
    customerId: "customer-id",
    contractNumber: "12345",
    ...overrides,
  };
}
