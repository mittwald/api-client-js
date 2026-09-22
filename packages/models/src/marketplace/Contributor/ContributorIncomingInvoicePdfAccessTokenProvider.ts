import type { AxiosRequestConfig } from "axios";

import type { ContributorIncomingInvoice } from "./ContributorIncomingInvoice.js";
import type { FileAccessTokenProvider } from "../../file/index.js";

import { config } from "../../config/index.js";

export class ContributorIncomingInvoicePdfAccessTokenProvider
  implements FileAccessTokenProvider
{
  public readonly invoice: ContributorIncomingInvoice;

  public constructor(invoice: ContributorIncomingInvoice) {
    this.invoice = invoice;
  }

  public getDownloadToken(_: string, requestConfig?: AxiosRequestConfig) {
    return config.behaviors.contributor.getFileAccessToken(
      this.invoice.contributor.id,
      this.invoice.id,
      requestConfig,
    );
  }
}
