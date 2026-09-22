import type { LicenseOrderRequest } from "../Request/LicenseOrderRequest";
import type { LicenseOrderPreviewData } from "../types";

import { DataModel } from "../../../base";
import { Money } from "../../../common";

export class LicenseOrderPreview extends DataModel<LicenseOrderPreviewData> {
  public readonly request: LicenseOrderRequest;
  public readonly totalPrice: Money;

  public constructor(
    request: LicenseOrderRequest,
    data: LicenseOrderPreviewData,
  ) {
    super(data);
    this.request = request;
    this.totalPrice = Money({ amount: data.totalPrice, currency: "EUR" });
  }
}
