import type { InvoiceRecipientData } from "../../invoice/InvoiceRecipient/types";

export function buildInvoiceRecipientData(
  overrides?: Partial<InvoiceRecipientData>,
): InvoiceRecipientData {
  return {
    address: {
      street: "Test Street",
      city: "Test City",
      countryCode: "DE",
      houseNumber: "1",
      zip: "12345",
    },
    salutation: "mr",
    ...overrides,
  };
}
