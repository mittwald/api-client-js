import type { ExternalCertificateOrderRequest } from "../Request/ExternalCertificateOrderRequest.js";

import { type ExternalCertificateOrderPreviewData } from "../types.js";
import { DataModel } from "../../../base/index.js";
import { Money } from "../../../common/index.js";

export class ExternalCertificateOrderPreview extends DataModel<ExternalCertificateOrderPreviewData> {
  public readonly feePrice: Money;
  public readonly recurringPrice: Money;
  public readonly request: ExternalCertificateOrderRequest;
  public readonly totalPrice: Money;

  public constructor(
    request: ExternalCertificateOrderRequest,
    data: ExternalCertificateOrderPreviewData,
  ) {
    super(data);
    this.request = request;
    this.recurringPrice = Money({
      amount: data.recurringPrice,
      currency: "EUR",
    });
    this.totalPrice = Money({ amount: data.totalPrice, currency: "EUR" });
    this.feePrice = Money({
      amount: data.feePrice,
      currency: "EUR",
    });
  }
}
