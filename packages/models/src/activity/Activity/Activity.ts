import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { ActivityListQueryData, ActivityListItemData } from "./types";
import type { AggregateReference } from "../../common";
import type { ActivityAction } from "./ActivityAction";
import type { Project } from "../../project";

import { tryResolveAggregateReference } from "../../common";
import { createActivityAction } from "./actionRegistry";
import { Extension } from "../../marketplace";
import { config } from "../../config";
import { User } from "../../user";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "Activity",
})
export class Activity extends ReferenceModel {
  public static query(project: Project, query: ActivityListQueryData = {}) {
    return new ActivityListQuery(project, query);
  }
}

export class ActivityListItem extends WithData<ActivityListItemData>()(
  Activity,
) {
  public readonly action: ActivityAction;
  public readonly aggregate: AggregateReference | undefined;
  public readonly dateTime: DateTime;
  public readonly extension?: Extension;
  public readonly impersonated: boolean;
  public readonly project: Project;
  public readonly user?: User;

  public constructor(project: Project, data: ActivityListItemData) {
    const action = createActivityAction(data.action);

    // A log entry has no id, and timestamp, aggregate and action name alone are
    // not unique (several records of one zone written in one request).
    super(
      [
        data.dateTime,
        data.aggregate.id,
        data.action.name,
        action.displayName,
      ].join("-"),
    );

    this.dateTime = DateTime.fromISO(data.dateTime);

    this.action = action;

    this.aggregate = tryResolveAggregateReference(data.aggregate);
    this.user =
      data.user && data.user.type === "user"
        ? User.ofId(data.user.id)
        : undefined;
    this.extension =
      data.user && data.user.type === "extension"
        ? Extension.ofId(data.user.id)
        : undefined;
    this.impersonated = !!data.impersonator;
    this.project = project;
  }
}

export class ActivityListQuery extends ListQueryModel<ActivityListQueryData> {
  public readonly project: Project;

  public constructor(project: Project, query: ActivityListQueryData = {}) {
    super(query);
    this.project = project;
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.activity.list(
      extractId(this.project),
      this.query,
    );

    return new ActivityList(
      this.project,
      this.query,
      items.map((i) => new ActivityListItem(this.project, i)),
      totalCount,
    );
  }

  public refine(query: ActivityListQueryData) {
    return new ActivityListQuery(this.project, { ...this.query, ...query });
  }
}

export class ActivityList extends WithListData<ActivityListItem>()(
  ActivityListQuery,
) {
  public override readonly items: readonly ActivityListItem[];
  public override readonly totalCount: number;

  public constructor(
    project: Project,
    query: ActivityListQueryData,
    items: ActivityListItem[],
    totalCount: number,
  ) {
    super(project, query);
    this.items = Object.freeze(items);
    this.totalCount = totalCount;
  }
}
