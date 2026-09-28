import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { NotificationBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiNotificationBehaviors = (
  client: MittwaldAPIV2Client,
): NotificationBehaviors => ({
  list: async (query) => {
    const response = await client.notification.slistNotifications({
      queryParameters: query,
    });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  markAsRead: async (notificationId) => {
    const response = await client.notification.sreadNotification({
      data: { status: "read" },
      notificationId,
    });

    validateResponse(response, 200);
  },

  markAllAsRead: async (query) => {
    const response = await client.notification.sreadAllNotifications({
      queryParameters: query,
    });

    validateResponse(response, 200);
  },
});
