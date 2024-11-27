import { MittwaldAPIV2 } from "@mittwald/api-client";

export type NotificationListItemData =
  MittwaldAPIV2.Operations.NotificationsListNotifications.ResponseData[number];

export type NotificationListQueryData =
  MittwaldAPIV2.Paths.V2Notifications.Get.Parameters.Query;
