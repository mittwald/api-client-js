import type { QueryResponseData } from "../../../base";
import type {
  DeliveryBoxListQueryData,
  DeliveryBoxListItemData,
  DeliveryBoxData,
} from "../types";

export interface DeliveryBoxBehaviors {
  query: (
    projectId: string,
    query?: DeliveryBoxListQueryData,
  ) => Promise<QueryResponseData<DeliveryBoxListItemData>>;
  create: (
    projectId: string,
    description: string,
    password: string,
  ) => Promise<{ id: string }>;

  updateDescription: (
    deliveryBoxId: string,
    description: string,
  ) => Promise<void>;

  updatePassword: (deliveryBoxId: string, password: string) => Promise<void>;
  find: (deliveryBoxId: string) => Promise<DeliveryBoxData | undefined>;
  delete: (deliveryBoxId: string) => Promise<void>;
}
