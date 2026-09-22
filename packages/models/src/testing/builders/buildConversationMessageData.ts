import type { ConversationMessageData } from "../../conversation/ConversationMessage/types";

export function buildConversationMessageData(
  overrides: Partial<ConversationMessageData> = {},
): ConversationMessageData {
  return {
    createdAt: "2024-01-01T00:00:00.000Z",
    conversationId: "conversation-id",
    type: "MESSAGE" as const,
    messageId: "message-id",
    messageContent: "Hello",
    ...overrides,
  };
}
