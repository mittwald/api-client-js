import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { ServerBehaviors } from "./types";

import { withAxiosRequestConfig,resolveTotalCount } from "../../../base";
import { validateResponse } from "../../../base/api/validateResponse";

export const apiServerBehaviors = (
  client: MittwaldAPIV2Client,
): ServerBehaviors => ({
  updateStorageNotificationThreshold: async (
    serverId,
    thresholdInBytes?: number,
  ) => {
    const response = await client.project.storagespaceUpdateServerStatistics({
      data: { notificationThresholdInBytes: thresholdInBytes },
      serverId,
    });

    validateResponse(response, 204);
  },

  find: async (serverId, options) => {
    const response = await client.project.getServer(
      {
        serverId,
      },
      withAxiosRequestConfig(options),
    );

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403, 404]);
  },

  createAvatarUploadToken: async (serverId) => {
    const response = await client.project.requestServerAvatarUpload({
      serverId,
    });
    validateResponse(response, 200);
    return {
      token: response.data.refId,
      rules: response.data.rules,
    };
  },

  list: async (query) => {
    const response = await client.project.listServers({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  updateDescription: async (serverId, description) => {
    const response = await client.project.updateServer({
      data: {
        description,
      },
      serverId,
    });
    validateResponse(response, 204);
  },

  removeAvatar: async (serverId) => {
    const response = await client.project.deleteServerAvatar({ serverId });

    validateResponse(response, 204);
  },
});
