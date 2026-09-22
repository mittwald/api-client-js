import type {
  DomainOrderPreviewRequestModelData,
  DomainOrderRequestModelData,
  CompleteOrderRequestData,
  DomainOrderPreviewData,
} from "../types.js";

import { DomainOrderPreview } from "../Preview/DomainOrderPreview.js";
import { DataModel, extractId } from "../../../base/index.js";
import { config } from "../../../config/index.js";
import { Order } from "../Order.js";

export class DomainOrderRequest extends DataModel<DomainOrderPreviewRequestModelData> {
  public readonly authCode?: string;
  public readonly domain: string;

  public constructor(data: DomainOrderPreviewRequestModelData) {
    super(data);
    this.domain = data.domain;
    this.authCode = data.authCode;
  }

  public static create(data: DomainOrderPreviewRequestModelData) {
    return new DomainOrderRequest(data);
  }

  public async getPreview() {
    const { project, ...restData } = this.data;

    const response = await config.behaviors.order.preview({
      orderData: {
        ...restData,
        projectId: extractId(project),
      },
      orderType: "domain",
    });
    return new DomainOrderPreview(this, response as DomainOrderPreviewData);
  }

  public async order(
    data: CompleteOrderRequestData<
      DomainOrderPreviewRequestModelData,
      DomainOrderRequestModelData
    >,
  ): Promise<Order> {
    const { ownerC, ...restData } = data;
    const { project, ...restOrderData } = {
      ...this.data,
      ...restData,
      handleData: {
        ownerC,
      },
    };

    const order = await config.behaviors.order.create({
      orderData: {
        ...restOrderData,
        projectId: extractId(project),
      },
      orderType: "domain",
    });
    return Order.ofId(order.id);
  }
}
