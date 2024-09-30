import {
  InvoiceData,
  InvoiceFileAccessTokenData,
  InvoiceListItemData,
  InvoiceListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface InvoiceBehaviors {
  find: (invoiceId: string) => Promise<InvoiceData | undefined>;

  list: (request: {
    customerId: string;
    queryParameters?: InvoiceListQueryData;
  }) => Promise<QueryResponseData<InvoiceListItemData>>;

  requestFileAccessToken: (
    invoiceId: string,
    customerId: string,
  ) => Promise<InvoiceFileAccessTokenData>;
}
