import type { HostingOrderPreviewData } from "../../order/Order/types.js";

export function buildHostingOrderPreviewData(
  overrides: Partial<HostingOrderPreviewData> = {},
): HostingOrderPreviewData {
  return {
    machineTypePrice: 0,
    storagePrice: 0,
    totalPrice: 0,
    ...overrides,
  };
}
