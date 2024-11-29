import {
  InvoiceData,
  InvoiceListItemData,
  InvoiceListQueryData,
} from "../types.js";
import { FileDownloadTokenData } from "../../../file/index.js";
import { QueryResponseData } from "../../../base/index.js";

export interface InvoiceBehaviors {
  find: (id: string) => Promise<InvoiceData | undefined>;

  getFileAccessToken: (
    id: string,
    customerId: string,
  ) => Promise<FileDownloadTokenData>;

  list: (
    customerId: string,
    query?: InvoiceListQueryData,
  ) => Promise<QueryResponseData<InvoiceListItemData>>;
}
