import type { AxiosRequestConfig } from "axios";

import type { FileDownloadTokenData } from "../../../file/index.js";
import type { QueryResponseData } from "../../../base/index.js";
import type {
  InvoiceListQueryData,
  InvoiceListItemData,
  InvoiceData,
} from "../types.js";

export interface InvoiceBehaviors {
  getFileAccessToken: (
    invoiceId: string,
    customerId: string,
    requestConfig?: AxiosRequestConfig,
  ) => Promise<FileDownloadTokenData>;

  list: (
    customerId: string,
    query?: InvoiceListQueryData,
  ) => Promise<QueryResponseData<InvoiceListItemData>>;

  find: (invoiceId: string) => Promise<InvoiceData | undefined>;
}
