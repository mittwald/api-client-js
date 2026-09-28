import type { ConversationListItemData } from "../../conversation/Conversation/types.js";

export function buildConversationListItemData(
  overrides: Partial<ConversationListItemData> = {},
): ConversationListItemData {
  return {
    createdAt: "2024-01-01T00:00:00.000Z",
    conversationId: "conversation-id",
    mainUser: { userId: "user-id" },
    title: "Test conversation",
    visibility: "private",
    shortId: "CONV-1",
    status: "open",
    ...overrides,
  };
}
