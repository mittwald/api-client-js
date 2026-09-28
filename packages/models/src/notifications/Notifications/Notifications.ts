import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { DateTime } from "luxon";

import type {
  NotificationReadAllQueryData,
  NotificationListQueryData,
  NotificationListItemData,
} from "./types.js";

import { CustomerInvite } from "../../customer/index.js";
import { ProjectInvite } from "../../project/index.js";
import { config } from "../../config/index.js";
import {
  tryResolveAggregateReference,
  type AggregateReference,
} from "../../common/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Notifications",
})
export class Notifications extends ReferenceModel {
  public static async markAllAsRead(query?: NotificationReadAllQueryData) {
    await config.behaviors.notification.markAllAsRead(query);
  }

  public static ofId(id: string) {
    return new Notifications(id);
  }

  public static query(query: NotificationListQueryData = {}) {
    return new NotificationListQuery(query);
  }

  public async markAsRead() {
    await config.behaviors.notification.markAsRead(this.id);
  }
}

export class NotificationCommon extends WithData<NotificationListItemData>()(
  Notifications,
) {
  public readonly createdAt: DateTime;
  public override readonly data: NotificationListItemData;
  public readonly isInvite: boolean;
  public readonly reference: AggregateReference | undefined;
  public readonly severity: "success" | "warning" | "error" | "info";
  public readonly type: string;
  public readonly unread: boolean;
  public constructor(data: NotificationListItemData) {
    super(data.id);
    this.data = data;
    this.createdAt = DateTime.fromISO(data.createdAt);
    this.type = data.type;
    this.severity = data.severity;
    this.reference = tryResolveAggregateReference({
      aggregate: data.reference.aggregate,
      parent: data.reference.parents?.[0],
      domain: data.reference.domain,
      id: data.reference.id,
    });
    this.unread = !data.read;
    this.isInvite =
      this.reference instanceof ProjectInvite ||
      this.reference instanceof CustomerInvite;
  }
}

export class NotificationListItem extends NotificationCommon {
  public constructor(data: NotificationListItemData) {
    super(data);
  }
}

export class NotificationListQuery extends ListQueryModel<NotificationListQueryData> {
  public constructor(query: NotificationListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.notification.list({
      limit: config.defaultPaginationLimit,
      ...this.query,
    });

    return new NotificationList(
      this.query,
      items.map((i) => new NotificationListItem(i)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: NotificationListQueryData) {
    return new NotificationListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class NotificationList extends WithListData<NotificationListItem>()(
  NotificationListQuery,
) {
  public override readonly items: readonly NotificationListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: NotificationListQueryData,
    notifications: NotificationListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(notifications);
    this.totalCount = totalCount;
  }
}
