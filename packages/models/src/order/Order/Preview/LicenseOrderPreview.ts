import type { LicenseOrderRequest } from "../Request/LicenseOrderRequest.js";
import type { LicenseOrderPreviewData } from "../types.js";

import { DataModel } from "../../../base/index.js";
import { Money } from "../../../common/index.js";

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
