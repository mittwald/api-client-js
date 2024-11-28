import {
  InvoiceData,
  InvoiceListItemData,
  InvoiceListQueryData,
} from "../types.js";
import { FileDownloadTokenData } from "../../../file/FileAccessToken/types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface InvoiceBehaviors {
  find: (id: string) => Promise<InvoiceData | undefined>;

  getFileAccessToken: (
    id: string,
    customerId: string,
  ) => Promise<FileDownloadTokenData>;

  list: (request: {
    customerId: string;
    queryParameters?: InvoiceListQueryData;
  }) => Promise<QueryResponseData<InvoiceListItemData>>;
}
