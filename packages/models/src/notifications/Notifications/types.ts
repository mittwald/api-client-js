import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type NotificationListItemData =
  MittwaldAPIV2.Operations.NotificationsListNotifications.ResponseData[number];

export type NotificationListQueryData =
  MittwaldAPIV2.Paths.V2Notifications.Get.Parameters.Query;

export type NotificationReadAllQueryData =
  MittwaldAPIV2.Paths.V2NotificationsActionsReadAll.Post.Parameters.Query;
