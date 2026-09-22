import type { ContractItemData } from "../../contract/ContractItem/types.js";

import { buildContractArticleData } from "./buildContractArticleData.js";

export function buildContractItemData(
  overrides?: Partial<ContractItemData>,
): ContractItemData {
  return {
    totalPrice: { currency: "EUR", value: 1000 },
    articles: [buildContractArticleData()],
    description: "Test contract item",
    contractPeriod: 12,
    isActivated: true,
    itemId: "item-id",
    isBaseItem: true,
    ...overrides,
  };
}
