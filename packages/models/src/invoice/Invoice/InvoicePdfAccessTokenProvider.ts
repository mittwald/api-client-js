import { FileAccessTokenProvider } from "../../file/FileAccessToken/FileAccessTokenProvider.js";
import { InvoiceDetailed } from "./Invoice.js";
import { FileDownloadTokenData } from "../../file/FileAccessToken/types.js";
import { config } from "../../config/config.js";

export class InvoicePdfAccessTokenProvider implements FileAccessTokenProvider {
  public readonly invoice: InvoiceDetailed;

  public constructor(invoice: InvoiceDetailed) {
    this.invoice = invoice;
  }

  public getDownloadToken(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ignoredFileId: string,
  ): Promise<FileDownloadTokenData> {
    return config.behaviors.invoice.getFileAccessToken(
      this.invoice.id,
      this.invoice.customer.id,
    );
  }
}
