import type { OrderAttributeConfigurationData, OrderItemData } from "./types";

import { DataModel } from "../../base";

export class OrderItem extends DataModel<OrderItemData> {
  public readonly attributeConfiguration?: OrderAttributeConfigurationData[];
  public readonly id: string;
  public readonly name: string;

  public constructor(data: OrderItemData) {
    super(data);
    this.id = data.orderItemId;
    this.name = data.articleName ?? data.orderItemId;
    this.attributeConfiguration = data.attributeConfiguration;
  }
}
