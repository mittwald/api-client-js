import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Customer } from "../../customer/index.js";

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

export type InvoiceListQueryData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Parameters.Query;

export type InvoiceListQueryModelData = {
  customer: Customer | string;
} & InvoiceListQueryData;
