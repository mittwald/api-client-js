import { DeliveryBoxData, DeliveryBoxListItemData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface DeliveryBoxBehaviors {
  find: (deliveryBoxId: string) => Promise<DeliveryBoxData | undefined>;
  query: (
    projectId: string,
  ) => Promise<QueryResponseData<DeliveryBoxListItemData>>;
}
