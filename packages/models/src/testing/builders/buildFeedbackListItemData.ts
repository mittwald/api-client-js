import type { FeedbackListItemData } from "../../user/Feedback/types.js";

export function buildFeedbackListItemData(
  overrides: Partial<FeedbackListItemData> = {},
): FeedbackListItemData {
  return {
    id: "feedback-id",
    message: "great",
    subject: "nps",
    origin: "web",
    vote: 10,
    ...overrides,
  };
}
