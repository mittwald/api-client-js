import type { ConversationCategoryData } from "../../conversation/ConversationCategory/types.js";

export function buildConversationCategoryData(
  overrides: Partial<ConversationCategoryData> = {},
): ConversationCategoryData {
  return {
    referenceType: ["project"],
    categoryId: "category-id",
    name: "General",
    ...overrides,
  };
}
