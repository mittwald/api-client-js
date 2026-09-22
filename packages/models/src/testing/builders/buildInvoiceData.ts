import type { InvoiceData } from "../../invoice/Invoice/types";

import { buildInvoiceItemData } from "./buildInvoiceItemData";

export function buildInvoiceData(
  overrides?: Partial<InvoiceData>,
): InvoiceData {
  return {
    recipient: {
      address: {
        street: "Test Street",
        city: "Test City",
        countryCode: "DE",
        houseNumber: "1",
        zip: "12345",
      },
      salutation: "mr",
    },
    groups: [
      {
        items: [buildInvoiceItemData()],
        description: "Group 1",
      },
    ],
    date: "2024-05-01T00:00:00.000Z",
    invoiceNumber: "INV-2024-001",
    customerId: "customer-id",
    invoiceType: "REGULAR",
    totalGross: 11900,
    id: "invoice-id",
    currency: "EUR",
    totalNet: 10000,
    pdfId: "pdf-id",
    status: "NEW",
    amountPaid: 0,
    ...overrides,
  };
}
