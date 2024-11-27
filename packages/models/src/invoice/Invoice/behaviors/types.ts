import { InvoiceData } from "../types.js";
import { FileDownloadTokenData } from "../../../file/FileAccessToken/types.js";

export interface InvoiceBehaviors {
  find: (id: string) => Promise<InvoiceData | undefined>;

  getFileAccessToken: (
    id: string,
    customerId: string,
  ) => Promise<FileDownloadTokenData>;
}
