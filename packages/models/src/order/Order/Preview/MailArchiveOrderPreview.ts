import type { MailArchiveOrderRequest } from "../Request/MailArchiveOrderRequest";
import type { MailArchiveOrderPreviewData } from "../types";

import { DataModel } from "../../../base";
import { Money } from "../../../common";

export class MailArchiveOrderPreview extends DataModel<MailArchiveOrderPreviewData> {
  public readonly feePrice: Money;
  public readonly recurringPrice: Money;
  public readonly request: MailArchiveOrderRequest;

  public constructor(
    request: MailArchiveOrderRequest,
    data: MailArchiveOrderPreviewData,
  ) {
    super(data);
    this.request = request;
    this.recurringPrice = Money({
      amount: data.recurringPrice,
      currency: "EUR",
    });
    this.feePrice = Money({
      amount: data.feePrice,
      currency: "EUR",
    });
  }
}
