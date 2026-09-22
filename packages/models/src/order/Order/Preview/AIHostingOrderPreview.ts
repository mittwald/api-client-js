import { DataModel } from "../../../base";
import { Money } from "../../../common";

export class AIHostingOrderPreview extends DataModel<any> {
  public readonly request: any;
  public readonly totalPrice: Money;

  public constructor(request: any, data: any) {
    super(data);
    this.request = request;
    this.totalPrice = Money({
      amount: data.totalPrice,
      currency: "EUR",
    });
  }
}
