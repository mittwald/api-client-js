import {
  FeedbackCreateData,
  FeedbackListItemData,
  FeedbackListQuery,
} from "../types.js";

export interface FeedbackBehaviors {
  list: (
    userId: string,
    query?: FeedbackListQuery,
  ) => Promise<FeedbackListItemData[]>;

  create: (data: FeedbackCreateData) => Promise<void>;
}
