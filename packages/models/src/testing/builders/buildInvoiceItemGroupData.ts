import type { InvoiceItemGroupData } from "../../invoice/InvoiceItemGroup/types.js";

import { buildInvoiceItemData } from "./buildInvoiceItemData.js";

export function buildInvoiceItemGroupData(
  overrides?: Partial<InvoiceItemGroupData>,
): InvoiceItemGroupData {
  return {
    items: [buildInvoiceItemData()],
    description: "Test group",
    ...overrides,
  };
}
