import type { Contract } from "../../../contract/index.js";
import type {
  LicenseOrderPreviewRequestData,
  CompleteOrderRequestData,
  LicenseOrderPreviewData,
  LicenseOrderRequestData,
} from "../types.js";

import { LicenseOrderPreview } from "../Preview/LicenseOrderPreview.js";
import { DataModel } from "../../../base/index.js";
import { config } from "../../../config/index.js";
import { Order } from "../Order.js";

export class LicenseOrderRequest extends DataModel<LicenseOrderPreviewRequestData> {
  public readonly contract?: Contract;

  public constructor(data: LicenseOrderPreviewRequestData) {
    super(data);
  }

  public async getPreview() {
    const response = await config.behaviors.order.preview({
      orderType: "license",
      orderData: this.data,
    });
    return new LicenseOrderPreview(this, response as LicenseOrderPreviewData);
  }

  public async order(
    data: CompleteOrderRequestData<
      LicenseOrderPreviewRequestData,
      LicenseOrderRequestData
    >,
  ): Promise<Order> {
    const order = await config.behaviors.order.create({
      orderData: {
        ...this.data,
        ...data,
      },
      orderType: "license",
    });
    return Order.ofId(order.id);
  }
}
