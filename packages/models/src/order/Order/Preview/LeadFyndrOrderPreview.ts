import type { LeadFyndrOrderRequest } from "../Request/LeadFyndrOrderRequest.js";
import type { LeadFyndrOrderPreviewData } from "../types.js";

import { DataModel } from "../../../base/index.js";
import { Money } from "../../../common/index.js";

export class LeadFyndrOrderPreview extends DataModel<LeadFyndrOrderPreviewData> {
  public readonly request: LeadFyndrOrderRequest;
  public readonly totalPrice: Money;

  public constructor(
    request: LeadFyndrOrderRequest,
    data: LeadFyndrOrderPreviewData,
  ) {
    super(data);
    this.request = request;
    this.totalPrice = Money({ amount: data.totalPrice, currency: "EUR" });
  }
}
