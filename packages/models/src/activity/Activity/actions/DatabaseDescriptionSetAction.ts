import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction.js";

type ActivityDatabaseDescriptionSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogDatabaseDescriptionSet;

export class DatabaseDescriptionSetAction extends ActivityAction<ActivityDatabaseDescriptionSet> {
  public readonly parameters;

  constructor(data: ActivityDatabaseDescriptionSet) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.description.name;
    this.type = "edit";
    this.fieldLabels = { name: "databaseName" };
    this.titleOptions = {
      oldDescription: data.changes.before?.description,
      description: data.changes.after?.description,
    };
  }
}
