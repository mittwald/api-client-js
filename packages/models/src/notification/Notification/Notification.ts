import { classes } from "polytype";
import type {
  NotificationListItemData,
  NotificationListQueryData,
} from "./types.js";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import { DateTime } from "luxon";

export class Notification extends ReferenceModel {
  public static ofId(id: string): Notification {
    return new Notification(id);
  }

  public static query(query: NotificationListQueryData = {}) {
    return new NotificationListQuery(query);
  }

  public async markAsRead() {
    await config.behaviors.notification.markAsRead(this.id);
  }
}

class NotificationCommon extends classes(
  DataModel<NotificationListItemData>,
  Notification,
) {
  public readonly createdAt: DateTime;
  public constructor(data: NotificationListItemData) {
    super([data], [data.id]);
    this.createdAt = DateTime.fromISO(data.createdAt);
  }
}

export class NotificationListItem extends classes(
  NotificationCommon,
  DataModel<NotificationListItemData>,
) {
  public constructor(data: NotificationListItemData) {
    super([data], [data]);
  }
}

export class NotificationListQuery extends ListQueryModel<NotificationListQueryData> {
  public constructor(query: NotificationListQueryData = {}) {
    super(query);
  }

  public refine(query: NotificationListQueryData) {
    return new NotificationListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.notification.list(
      this.query,
    );

    return new NotificationList(
      this.query,
      items.map((d) => new NotificationListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }, [this.queryId]);

  public getTotalUnreadCount = provideReact(async () => {
    const { totalCount } = await this.refine({
      limit: 1,
      status: "unread",
    }).execute();
    return totalCount;
  }, [this.queryId]);
}

export class NotificationList extends classes(
  NotificationListQuery,
  ListDataModel<NotificationListItem>,
) {
  public constructor(
    query: NotificationListQueryData,
    notifications: NotificationListItem[],
    totalCount: number,
  ) {
    super([query], [notifications, totalCount]);
  }
}
