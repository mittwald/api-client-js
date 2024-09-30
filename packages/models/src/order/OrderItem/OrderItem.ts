import { DataModel, ReferenceModel } from "../../base/index.js";
import { OrderItemData } from "./types.js";
import { classes } from "polytype";

export class OrderItem extends ReferenceModel {
  ofId(orderItemId: string): OrderItem {
    return new OrderItem(orderItemId);
  }

  public readonly orderItemId: string;

  public constructor(orderItemId: string) {
    super(orderItemId);
    this.orderItemId = orderItemId;
  }
}

class OrderItemCommon extends classes(DataModel<OrderItemData>, OrderItem) {
  public constructor(data: OrderItemData, orderId: string) {
    super([data], [orderId]);
  }
}

export class OrderItemDetailed extends OrderItemCommon {
  public constructor(orderId: string, data: OrderItemData) {
    super(data, orderId);
  }
}
