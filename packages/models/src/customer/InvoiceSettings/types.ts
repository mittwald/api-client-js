import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type InvoiceSettingsData =
  MittwaldAPIV2.Operations.InvoiceGetDetailOfInvoiceSettings.ResponseData;

export type InvoiceSettingsUpdateRequestData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdInvoiceSettings.Put.Parameters.RequestBody;

export type InvoiceSettingsStatus =
  MittwaldAPIV2.Components.Schemas.InvoiceInvoiceSettingsStatus;

export type InvoicePaymentSettings =
  MittwaldAPIV2.Components.Schemas.InvoicePaymentSettings;

export type InvoiceBankingInformation =
  MittwaldAPIV2.Components.Schemas.InvoiceBankingInformation;
