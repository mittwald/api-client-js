import type { AxiosRequestConfig } from "axios";

import type { FileAccessTokenProvider } from "../../file/index.js";
import type { InvoiceDetailed } from "./Invoice.js";

import { config } from "../../config/index.js";

export class InvoicePdfAccessTokenProvider implements FileAccessTokenProvider {
  public readonly invoice: InvoiceDetailed;

  public constructor(invoice: InvoiceDetailed) {
    this.invoice = invoice;
  }

  public getDownloadToken(_: string, requestConfig?: AxiosRequestConfig) {
    return config.behaviors.invoice.getFileAccessToken(
      this.invoice.id,
      this.invoice.customer.id,
      requestConfig,
    );
  }
}
