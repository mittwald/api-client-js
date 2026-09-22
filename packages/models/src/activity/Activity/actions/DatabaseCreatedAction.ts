import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction";

type ActivityDatabaseCreated =
  MittwaldAPIV2.Components.Schemas.ActivitylogDatabaseCreated;

export class DatabaseCreatedAction extends ActivityAction<ActivityDatabaseCreated> {
  public readonly parameters;

  constructor(data: ActivityDatabaseCreated) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.description.name;
    this.type = "create";
    this.fieldLabels = { name: "databaseName" };
  }
}
