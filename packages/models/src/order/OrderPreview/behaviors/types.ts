import { OrderPreviewRequestData, OrderPreviewResponseData } from "../types.js";

export interface OrderPreviewBehaviors {
  previewOrder: (
    orderData: OrderPreviewRequestData,
  ) => Promise<OrderPreviewResponseData>;
}
