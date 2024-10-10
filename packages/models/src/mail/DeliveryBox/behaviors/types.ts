import { DeliveryBoxData, DeliveryBoxListItemData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface DeliveryBoxBehaviors {
  find: (deliveryBoxId: string) => Promise<DeliveryBoxData | undefined>;
  query: (
    projectId: string,
  ) => Promise<QueryResponseData<DeliveryBoxListItemData>>;

  create: (
    projectId: string,
    description: string,
    password: string,
  ) => Promise<void>;

  delete: (deliveryBoxId: string) => Promise<void>;
  updateDescription: (
    deliveryBoxId: string,
    description: string,
  ) => Promise<void>;
  updatePassword: (deliveryBoxId: string, password: string) => Promise<void>;
}
