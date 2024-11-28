import { OrderItemData } from "./types.js";

export class OrderItem {
  public readonly id: string;
  public readonly data: OrderItemData;
  public readonly name: string;

  public constructor(data: OrderItemData) {
    this.id = data.orderItemId;
    this.data = data;
    this.name = data.articleName ?? data.orderItemId;
  }
}
