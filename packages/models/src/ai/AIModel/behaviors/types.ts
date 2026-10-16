import type { AIModelListQueryData, AIModelListItemData } from "../types.js";

export interface AIModelBehaviors {
  list: (
    query?: AIModelListQueryData,
  ) => Promise<{ items: AIModelListItemData[]; totalCount: number }>;
}
