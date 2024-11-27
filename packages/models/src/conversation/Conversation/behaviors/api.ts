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

  create: async (data) => {
    const response = await client.conversation.createConversation({
      data,
    });
    assertStatus(response, 201);
    return { id: response.data.conversationId };
  },

  update: async (id, data) => {
    const response = await client.conversation.updateConversation({
      conversationId: id,
      data,
    });
    assertStatus(response, 200);
  },

  updateMessage: async (id, messageId, content) => {
    const response = await client.conversation.updateMessage({
      conversationId: id,
      messageId,
      data: { messageContent: content },
    });
    assertStatus(response, 200);
  },

  listCategories: async () => {
    const response = await client.conversation.listCategories();
    assertStatus(response, 200);

    return response.data;
  },

  getMembers: async (conversationId) => {
    const response = await client.conversation.getConversationMembers({
      conversationId,
    });

    assertStatus(response, 200);

    return response.data;
  },
});
