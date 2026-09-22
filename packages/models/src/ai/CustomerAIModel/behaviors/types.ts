import type {
  CustomerAIModelListQueryData,
  CustomerAIModelListItemData,
} from "../types";

export interface CustomerAIModelBehaviors {
  list: (
    customerId: string,
    query?: CustomerAIModelListQueryData,
  ) => Promise<{ items: CustomerAIModelListItemData[]; totalCount: number }>;
}
