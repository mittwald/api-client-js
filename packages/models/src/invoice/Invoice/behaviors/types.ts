import {
  InvoiceData,
  InvoiceFileAccessTokenData,
  InvoiceListItemData,
  InvoiceListQuery,
} from "../types.js";

export interface InvoiceBehaviors {
  find: (invoiceId: string) => Promise<InvoiceData | undefined>;
  list: (query?: InvoiceListQuery) => Promise<InvoiceListItemData[]>;

  requestFileAccessToken: (
    invoiceId: string,
    customerId: string,
  ) => Promise<InvoiceFileAccessTokenData>;
}
