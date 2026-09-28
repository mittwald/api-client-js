import type { DomainOrderPreviewData } from "../../order/Order/types.js";

export function buildDomainOrderPreviewData(
  overrides: Partial<DomainOrderPreviewData> = {},
): DomainOrderPreviewData {
  return {
    domainContractDuration: 12,
    domainPrice: 0,
    totalPrice: 0,
    feePrice: 0,
    ...overrides,
  };
}
