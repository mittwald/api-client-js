import { OrderPreviewData } from "./types.js";
import { Money } from "../../base/Money.js";
import { DataModel } from "../../base/index.js";

export class OrderPreview extends DataModel<OrderPreviewData> {
  public readonly totalPrice: Money;

  public constructor(data: OrderPreviewData) {
    super(data);
    this.totalPrice = Money({ amount: data.totalPrice, currency: "EUR" });
  }
}
