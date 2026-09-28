import type { QueryResponseData } from "../../../base/index.js";
import type {
  NotificationReadAllQueryData,
  NotificationListQueryData,
  NotificationListItemData,
} from "../types.js";

export interface NotificationBehaviors {
  list: (
    query?: NotificationListQueryData,
  ) => Promise<QueryResponseData<NotificationListItemData>>;

  markAllAsRead: (query?: NotificationReadAllQueryData) => Promise<void>;

  markAsRead: (notificationId: string) => Promise<void>;
}
