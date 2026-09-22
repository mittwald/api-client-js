import type { LeadFyndrOrderRequest } from "../Request/LeadFyndrOrderRequest";
import type { LeadFyndrOrderPreviewData } from "../types";

import { DataModel } from "../../../base";
import { Money } from "../../../common";

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
