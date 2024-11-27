import {
  MittwaldAPIV2Client,
  assertStatus,
  extractTotalCountHeader,
} from "@mittwald/api-client";
import { NotificationBehaviors } from "./types.js";

export const apiNotificationBehaviors = (
  client: MittwaldAPIV2Client,
): NotificationBehaviors => ({
  list: async (query) => {
    const response = await client.notification.slistNotifications({
      queryParameters: query,
    });

    assertStatus(response, 200);

    return {
      items: response.data,
      totalCount: extractTotalCountHeader(response),
    };
  },
  markAsRead: async (id: string) => {
    const response = await client.notification.sreadNotification({
      notificationId: id,
      data: { status: "read" },
    });

    assertStatus(response, 200);
  },
});
