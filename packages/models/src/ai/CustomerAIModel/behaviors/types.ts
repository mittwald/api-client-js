import type {
  CustomerAIModelListQueryData,
  CustomerAIModelListItemData,
} from "../types.js";

export interface CustomerAIModelBehaviors {
  list: (
    customerId: string,
    query?: CustomerAIModelListQueryData,
  ) => Promise<{ items: CustomerAIModelListItemData[]; totalCount: number }>;
}
