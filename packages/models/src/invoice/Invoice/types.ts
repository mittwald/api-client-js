import { MittwaldAPIV2 } from "@mittwald/api-client";

export type InvoiceListQuery =
  MittwaldAPIV2.Paths.InvoiceListCustomerInvoices.Get.Parameters.Query;

export type InvoiceData = MittwaldAPIV2.Operations.invoiceDetail.ResponseData;

export type InvoiceListItemData =
  MittwaldAPIV2.Operations.InvoiceListCustomerInvoices.ResponseData[number];

export type InvoiceFileAccessTokenData =
  MittwaldAPIV2.Operations.InvoiceGetFileAccessToken.ResponseData;
