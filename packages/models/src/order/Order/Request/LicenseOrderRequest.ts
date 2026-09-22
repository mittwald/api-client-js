import type { Contract } from "../../../contract";
import type {
  LicenseOrderPreviewRequestData,
  CompleteOrderRequestData,
  LicenseOrderPreviewData,
  LicenseOrderRequestData,
} from "../types";

import { LicenseOrderPreview } from "../Preview/LicenseOrderPreview";
import { DataModel } from "../../../base";
import { config } from "../../../config";
import { Order } from "../Order";

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
