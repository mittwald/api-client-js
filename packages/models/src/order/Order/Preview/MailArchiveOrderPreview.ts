import type { MailArchiveOrderRequest } from "../Request/MailArchiveOrderRequest.js";
import type { MailArchiveOrderPreviewData } from "../types.js";

import { DataModel } from "../../../base/index.js";
import { Money } from "../../../common/index.js";

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
