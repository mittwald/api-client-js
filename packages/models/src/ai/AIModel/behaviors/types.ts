import type { AIModelListQueryData, AIModelListItemData } from "../types";

export interface AIModelBehaviors {
  list: (
    query?: AIModelListQueryData,
  ) => Promise<{ items: AIModelListItemData[]; totalCount: number }>;
}
