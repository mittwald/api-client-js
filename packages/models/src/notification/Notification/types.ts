import { MittwaldAPIV2 } from "@mittwald/api-client";

export type NotificationListItemData =
  MittwaldAPIV2.Operations.NotificationsListNotifications.ResponseData[number];
