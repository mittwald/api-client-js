import { MittwaldAPIV2 } from "@mittwald/api-client";

export type InvoiceData = MittwaldAPIV2.Operations.InvoiceDetail.ResponseData;

export type InvoiceListItemData =
  MittwaldAPIV2.Operations.InvoiceListCustomerInvoices.ResponseData[number];

export const invoiceStatusList = [
  "PAID",
  "PARTIALLY_PAID",
  "OVERPAID",
  "NEW",
  "CONFIRMED",
  "DENIED",
] as const;

export type InvoiceStatus = NonNullable<InvoiceData["status"]>[number] &
  (typeof invoiceStatusList)[number];
