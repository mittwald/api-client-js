import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ConversationBehaviors } from "./types.js";

import {
  withAxiosRequestConfig,
  resolveTotalCount,
} from "../../../base/index.js";
import { validateResponse } from "../../../base/api/validateResponse.js";

export const apiConversationBehaviors = (
  client: MittwaldAPIV2Client,
): ConversationBehaviors => ({
  createFileUploadToken: async (conversationId) => {
    const response = await client.conversation.requestFileUpload(
      {
        conversationId,
      },
      withAxiosRequestConfig({
        retryCache: {
          dedupe: false,
          cache: false,
        },
      }),
    );
    validateResponse(response, 201);

    return {
      token: response.data.uploadToken,
      rules: response.data.rules,
    };
  },

  createMessage: async (conversationId, data) => {
    const response = await client.conversation.createMessage({
      conversationId,
      data,
    });
    validateResponse(response, 201, {
      validationError: {
        typeMappings: {
          minimum: "messageOrFileRequired",
        },
        pathMappings: {
          fileIds: "files",
        },
      },
    });
  },

  getFileDownloadToken: async (fileId, conversationId, requestConfig) => {
    const response = await client.conversation.getFileAccessToken(
      {
        conversationId,
        fileId,
      },
      withAxiosRequestConfig(requestConfig),
    );
    validateResponse(response, 200);

    return response.data;
  },

  list: async (query) => {
    const response = await client.conversation.listConversations({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  updateMessage: async (conversationId, messageId, content) => {
    const response = await client.conversation.updateMessage({
      data: { messageContent: content },
      conversationId,
      messageId,
    });
    validateResponse(response, 200);
  },

  find: async (conversationId) => {
    const response = await client.conversation.getConversation({
      conversationId,
    });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403, 404]);
  },

  setConversationStatus: async (conversationId, status) => {
    const response = await client.conversation.setConversationStatus({
      data: { status },
      conversationId,
    });
    validateResponse(response, 200);
  },

  listMessages: async (conversationId) => {
    const response = await client.conversation.listMessagesByConversation({
      conversationId,
    });
    validateResponse(response, 200);

    return response.data;
  },

  getMembers: async (conversationId) => {
    const response = await client.conversation.getConversationMembers({
      conversationId,
    });

    validateResponse(response, 200);

    return response.data;
  },

  create: async (data) => {
    const response = await client.conversation.createConversation({
      data,
    });
    validateResponse(response, 201);
    return { id: response.data.conversationId };
  },

  update: async (conversationId, data) => {
    const response = await client.conversation.updateConversation({
      conversationId,
      data,
    });
    validateResponse(response, 200);
  },

  listCategories: async () => {
    const response = await client.conversation.listCategories();
    validateResponse(response, 200);

    return response.data;
  },
});
