import type { InvoiceItemGroupData } from "../../invoice/InvoiceItemGroup/types";

import { buildInvoiceItemData } from "./buildInvoiceItemData";

export function buildInvoiceItemGroupData(
  overrides?: Partial<InvoiceItemGroupData>,
): InvoiceItemGroupData {
  return {
    items: [buildInvoiceItemData()],
    description: "Test group",
    ...overrides,
  };
}
