import type { MailArchiveOrderPreviewData } from "../../order/Order/types.js";

export function buildMailArchiveOrderPreviewData(
  overrides: Partial<MailArchiveOrderPreviewData> = {},
): MailArchiveOrderPreviewData {
  return {
    recurringPrice: 0,
    totalPrice: 0,
    feePrice: 0,
    ...overrides,
  };
}
