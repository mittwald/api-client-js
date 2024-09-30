import { DataModel, ReferenceModel } from "../../base/index.js";
import { classes } from "polytype";
import { OrderPreviewRequestData, OrderPreviewResponseData } from "./types.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import { Money } from "../../base/Money.js";

export class OrderPreview extends ReferenceModel {
  public static preview = provideReact(
    async (
      orderData: OrderPreviewRequestData,
    ): Promise<OrderPreviewDetailed> => {
      const previewData =
        await config.behaviors.orderPreview.previewOrder(orderData);
      return new OrderPreviewDetailed(previewData);
    },
  );

  public constructor(id: string) {
    super(id);
  }
}

class OrderPreviewCommon extends classes(
  DataModel<OrderPreviewResponseData>,
  OrderPreview,
) {
  public readonly totalPrice: Money;
  public constructor(data: OrderPreviewResponseData) {
    super([data]);
    this.totalPrice = Money({ amount: data.totalPrice, currency: "EUR" });
  }
}

export class OrderPreviewDetailed extends OrderPreviewCommon {
  public constructor(data: OrderPreviewResponseData) {
    super(data);
  }
}
