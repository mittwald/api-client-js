import { Money } from "../../base/Money.js";
import { TariffChangePreviewData } from "./types.js";
import { DataModel } from "../../base/index.js";

export class TariffChangePreview extends DataModel<TariffChangePreviewData> {
  public readonly totalPrice: Money;
  public readonly storagePrice: Money;
  public readonly machineTypePrice: Money;

  public constructor(data: TariffChangePreviewData) {
    super(data);
    this.totalPrice = Money({ amount: data.totalPrice, currency: "EUR" });
    this.storagePrice = Money({ amount: data.storagePrice, currency: "EUR" });
    this.machineTypePrice = Money({
      amount: data.machineTypePrice,
      currency: "EUR",
    });
  }
}
