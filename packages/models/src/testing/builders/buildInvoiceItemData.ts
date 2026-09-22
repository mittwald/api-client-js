import type { InvoiceItemData } from "../../invoice/InvoiceItem/types.js";

export function buildInvoiceItemData(
  overrides?: Partial<InvoiceItemData>,
): InvoiceItemData {
  return {
    price: { currency: "EUR", value: 1000 },
    contractItemId: "contract-item-id",
    description: "Test item",
    itemId: "item-id",
    vatRate: 19,
    ...overrides,
  };
}
