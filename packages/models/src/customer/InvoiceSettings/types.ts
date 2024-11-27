import { MittwaldAPIV2 } from "@mittwald/api-client";

export type InvoiceSettingsData =
  MittwaldAPIV2.Operations.InvoiceGetDetailOfInvoiceSettings.ResponseData;

export type InvoiceSettingsUpdateRequestData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Parameters.RequestBody;
