import type {
  MailArchiveOrderPreviewRequestModelData,
  MailArchiveOrderRequestModelData,
  MailArchiveOrderPreviewData,
  CompleteOrderRequestData,
} from "../types";

import { MailArchiveOrderPreview } from "../Preview/MailArchiveOrderPreview";
import { DataModel, extractId } from "../../../base";
import { config } from "../../../config";
import { Order } from "../Order";

export class MailArchiveOrderRequest extends DataModel<MailArchiveOrderPreviewRequestModelData> {
  public constructor(data: MailArchiveOrderPreviewRequestModelData) {
    super(data);
  }

  public async getPreview() {
    const { mailAddress, ...restData } = this.data;

    const response = await config.behaviors.order.preview({
      orderData: { mailAddressId: extractId(mailAddress), ...restData },
      orderType: "mailArchive",
    });
    return new MailArchiveOrderPreview(
      this,
      response as MailArchiveOrderPreviewData,
    );
  }

  public async order(
    data: CompleteOrderRequestData<
      MailArchiveOrderPreviewRequestModelData,
      MailArchiveOrderRequestModelData
    >,
  ): Promise<Order> {
    const { mailAddress, ...restData } = {
      ...this.data,
      ...data,
    };

    const order = await config.behaviors.order.create({
      orderData: {
        ...restData,
        mailAddressId: extractId(mailAddress),
      },
      orderType: "mailArchive",
    });
    return Order.ofId(order.id);
  }
}
