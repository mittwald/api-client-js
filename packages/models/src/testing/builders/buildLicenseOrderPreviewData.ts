import type { LicenseOrderPreviewData } from "../../order/Order/types";

export function buildLicenseOrderPreviewData(
  overrides: Partial<LicenseOrderPreviewData> = {},
): LicenseOrderPreviewData {
  return { totalPrice: 0, ...overrides };
}
