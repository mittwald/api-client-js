import type { InvoiceSettingsData } from "../../customer/InvoiceSettings/types";

export function buildInvoiceSettingsData(
  overrides?: Partial<InvoiceSettingsData>,
): InvoiceSettingsData {
  return {
    paymentSettings: { method: "invoice" },
    additionalEmailRecipients: [],
    id: "customer-id",
    invoicePeriod: 1,
    status: [],
    ...overrides,
  };
}
