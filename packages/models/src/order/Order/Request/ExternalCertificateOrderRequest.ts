import type {
  ExternalCertificateOrderPreviewRequestModelData,
  ExternalCertificateOrderRequestModelData,
  ExternalCertificateOrderPreviewData,
  CompleteOrderRequestData,
} from "../types";

import { ExternalCertificateOrderPreview } from "../Preview/ExternalCertificateOrderPreview";
import { DataModel, extractId } from "../../../base";
import { config } from "../../../config";
import { Order } from "../Order";

export class ExternalCertificateOrderRequest extends DataModel<ExternalCertificateOrderPreviewRequestModelData> {
  public constructor(data: ExternalCertificateOrderPreviewRequestModelData) {
    super(data);
  }

  public static create(data: ExternalCertificateOrderPreviewRequestModelData) {
    return new ExternalCertificateOrderRequest(data);
  }

  public async getPreview() {
    const { project, ...restData } = this.data;
    const response = await config.behaviors.order.preview({
      orderData: {
        ...restData,
        projectId: extractId(project),
      },
      orderType: "externalCertificate",
    });
    return new ExternalCertificateOrderPreview(
      this,
      response as ExternalCertificateOrderPreviewData,
    );
  }

  public async order(
    data: CompleteOrderRequestData<
      ExternalCertificateOrderPreviewRequestModelData,
      ExternalCertificateOrderRequestModelData
    >,
  ): Promise<Order> {
    const { project, ...restOrderData } = {
      ...this.data,
      ...data,
    };

    const order = await config.behaviors.order.create({
      orderData: {
        ...restOrderData,
        projectId: extractId(project),
      },
      orderType: "externalCertificate",
    });
    return Order.ofId(order.id);
  }
}
