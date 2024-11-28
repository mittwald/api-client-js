import { OrderPreviewData } from "./types.js";
import { Money } from "../../base/Money.js";

export class OrderPreview {
  public readonly data: OrderPreviewData;
  public readonly totalPrice: Money;

  public constructor(data: OrderPreviewData) {
    this.data = data;
    this.totalPrice = Money({ amount: data.totalPrice, currency: "EUR" });
  }
}
