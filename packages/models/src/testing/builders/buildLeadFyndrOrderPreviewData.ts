import type { LeadFyndrOrderPreviewData } from "../../order/Order/types.js";

export function buildLeadFyndrOrderPreviewData(
  overrides: Partial<LeadFyndrOrderPreviewData> = {},
): LeadFyndrOrderPreviewData {
  return { totalPrice: 0, ...overrides };
}
