import {
  NotificationListItemData,
  NotificationListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface NotificationBehaviors {
  list: (
    query?: NotificationListQueryData,
  ) => Promise<QueryResponseData<NotificationListItemData>>;
  markAsRead: (id: string) => Promise<void>;
}
