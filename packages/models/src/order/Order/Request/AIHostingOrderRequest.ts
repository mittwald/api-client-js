import type { Contract } from "../../../contract/index.js";
import type {
  AiHostingOrderPreviewRequestData,
  CompleteOrderRequestData,
  AiHostingOrderData,
} from "../types.js";

import { AIHostingOrderPreview } from "../Preview/AIHostingOrderPreview.js";
import { DataModel } from "../../../base/index.js";
import { config } from "../../../config/index.js";
import { Order } from "../Order.js";

export class AIHostingOrderRequest extends DataModel<AiHostingOrderPreviewRequestData> {
  public readonly contract?: Contract;

  public constructor(data: AiHostingOrderPreviewRequestData) {
    super(data);
  }

  public async getPreview() {
    if (this.contract) {
      const response = await config.behaviors.order.previewTariffChange({
        tariffChangeData: { ...this.data, contractId: this.contract.id },
        tariffChangeType: "aiHosting",
      });
      return new AIHostingOrderPreview(this, response);
    } else {
      const response = await config.behaviors.order.preview({
        orderType: "aiHosting",
        orderData: this.data,
      });
      return new AIHostingOrderPreview(this, response);
    }
  }

  public async order(
    data: CompleteOrderRequestData<
      AiHostingOrderPreviewRequestData,
      AiHostingOrderData
    >,
  ): Promise<Order> {
    const order = await config.behaviors.order.create({
      orderData: {
        ...this.data,
        ...data,
      },
      orderType: "aiHosting",
    });

    return Order.ofId(order.id);
  }
}
