import type { ExternalCertificateOrderPreviewData } from "../../order/Order/types.js";

export function buildExternalCertificateOrderPreviewData(
  overrides: Partial<ExternalCertificateOrderPreviewData> = {},
): ExternalCertificateOrderPreviewData {
  return {
    recurringPrice: 0,
    totalPrice: 0,
    feePrice: 0,
    ...overrides,
  };
}
