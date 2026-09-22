import type { AxiosRequestConfig } from "axios";

import type { FileDownloadTokenData } from "../../../file";
import type { QueryResponseData } from "../../../base";
import type {
  InvoiceListQueryData,
  InvoiceListItemData,
  InvoiceData,
} from "../types";

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
