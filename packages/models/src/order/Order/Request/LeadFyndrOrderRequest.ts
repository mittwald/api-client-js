import type { Contract } from "../../../contract";
import type {
  LeadFyndrOrderPreviewRequestData,
  LeadFyndrOrderPreviewData,
  LeadFyndrOrderRequestData,
  CompleteOrderRequestData,
} from "../types";

import { LeadFyndrOrderPreview } from "../Preview/LeadFyndrOrderPreview";
import { DataModel } from "../../../base";
import { config } from "../../../config";
import { Order } from "../Order";

export class LeadFyndrOrderRequest extends DataModel<LeadFyndrOrderPreviewRequestData> {
  public readonly contract?: Contract;

  public constructor(data: LeadFyndrOrderPreviewRequestData) {
    super(data);
  }

  public async getPreview() {
    if (this.contract) {
      const response = await config.behaviors.order.previewTariffChange({
        tariffChangeData: { ...this.data, contractId: this.contract.id },
        tariffChangeType: "leadFyndr",
      });
      return new LeadFyndrOrderPreview(
        this,
        response as LeadFyndrOrderPreviewData,
      );
    } else {
      const response = await config.behaviors.order.preview({
        orderType: "leadFyndr",
        orderData: this.data,
      });
      return new LeadFyndrOrderPreview(
        this,
        response as LeadFyndrOrderPreviewData,
      );
    }
  }

  public async order(
    data: CompleteOrderRequestData<
      LeadFyndrOrderPreviewRequestData,
      LeadFyndrOrderRequestData
    >,
  ): Promise<Order> {
    const order = await config.behaviors.order.create({
      orderData: {
        ...this.data,
        ...data,
      },
      orderType: "leadFyndr",
    });
    return Order.ofId(order.id);
  }
}
