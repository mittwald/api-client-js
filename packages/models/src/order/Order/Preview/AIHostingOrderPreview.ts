import { DataModel } from "../../../base/index.js";
import { Money } from "../../../common/index.js";

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
