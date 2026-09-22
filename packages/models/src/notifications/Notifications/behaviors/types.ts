import type { QueryResponseData } from "../../../base";
import type {
  NotificationReadAllQueryData,
  NotificationListQueryData,
  NotificationListItemData,
} from "../types";

export interface NotificationBehaviors {
  list: (
    query?: NotificationListQueryData,
  ) => Promise<QueryResponseData<NotificationListItemData>>;

  markAllAsRead: (query?: NotificationReadAllQueryData) => Promise<void>;

  markAsRead: (notificationId: string) => Promise<void>;
}
