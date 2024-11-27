import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { ConversationBehaviors } from "./types.js";

export const apiConversationBehaviors = (
  client: MittwaldAPIV2Client,
): ConversationBehaviors => ({
  find: async (id) => {
    const response = await client.conversation.getConversation({
      conversationId: id,
    });
    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 404);
  },
});
