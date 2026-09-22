import type { LeadFyndrOrderPreviewData } from "../../order/Order/types";

export function buildLeadFyndrOrderPreviewData(
  overrides: Partial<LeadFyndrOrderPreviewData> = {},
): LeadFyndrOrderPreviewData {
  return { totalPrice: 0, ...overrides };
}
