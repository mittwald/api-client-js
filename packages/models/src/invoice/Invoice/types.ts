import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Customer } from "../../customer/index.js";

export type InvoiceListQueryData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoices.Get.Parameters.Query;

export type InvoiceData = MittwaldAPIV2.Operations.InvoiceDetail.ResponseData;

export type InvoiceListItemData =
  MittwaldAPIV2.Operations.InvoiceListCustomerInvoices.ResponseData[number];

export type InvoiceFileAccessTokenData =
  MittwaldAPIV2.Operations.InvoiceGetFileAccessToken.ResponseData;

export type InvoiceListQueryModelData = Omit<
  InvoiceListQueryData,
  "customerId"
> & {
  customer: Customer;
};
