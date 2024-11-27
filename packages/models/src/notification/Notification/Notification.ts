import { classes } from "polytype";
import type { NotificationListItemData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";

export class Notification extends ReferenceModel {
  public static ofId(id: string): Notification {
    return new Notification(id);
  }
}

class NotificationCommon extends classes(
  DataModel<NotificationListItemData>,
  Notification,
) {
  public constructor(data: NotificationListItemData) {
    super([data], [data.id]);
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
