import { MittwaldAPIV2 } from "@mittwald/api-client";

export type InvoiceData = MittwaldAPIV2.Operations.InvoiceDetail.ResponseData;

export type InvoiceListItemData =
  MittwaldAPIV2.Operations.InvoiceListCustomerInvoices.ResponseData[number];
