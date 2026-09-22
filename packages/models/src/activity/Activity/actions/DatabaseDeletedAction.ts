import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction.js";

type ActivityDatabaseDeleted =
  MittwaldAPIV2.Components.Schemas.ActivitylogDatabaseDeleted;

export class DatabaseDeletedAction extends ActivityAction<ActivityDatabaseDeleted> {
  public readonly parameters;

  constructor(data: ActivityDatabaseDeleted) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.description.name;
    this.type = "delete";
    this.fieldLabels = { name: "databaseName" };
  }
}
