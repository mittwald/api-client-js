import type { ContributorOnBehalfInvoiceData } from "../../marketplace/Contributor/types.js";

export function buildContributorOnBehalfInvoiceData(
  overrides?: Partial<ContributorOnBehalfInvoiceData>,
): ContributorOnBehalfInvoiceData {
  return {
    pdfLink: "https://example.test/invoice.pdf",
    invoiceNumber: "INV-2024-001",
    invoiceDate: "2024-05-01",
    invoiceId: "invoice-id",
    invoiceType: "INVOICE",
    totalGross: 11900,
    totalNet: 10000,
    ...overrides,
  };
}
