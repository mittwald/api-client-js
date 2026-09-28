import type { ConversationUserData } from "../../conversation/ConversationUser/types.js";

export function buildConversationUserData(
  overrides: Partial<ConversationUserData> = {},
): ConversationUserData {
  return {
    clearName: "Jane Doe",
    userId: "user-id",
    ...overrides,
  };
}
