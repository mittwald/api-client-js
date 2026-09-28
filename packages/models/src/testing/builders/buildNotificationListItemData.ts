import type { NotificationListItemData } from "../../notifications/Notifications/types.js";

export function buildNotificationListItemData(
  overrides?: Partial<NotificationListItemData>,
): NotificationListItemData {
  return {
    reference: { aggregate: "project", domain: "project", id: "p-1" },
    createdAt: "2024-01-01T00:00:00.000Z",
    type: "some-notification-type",
    id: "notification-id",
    severity: "info",
    read: false,
    ...overrides,
  };
}
