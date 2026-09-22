import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction";

type ActivityAppInstallationDatabaseLinked =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationDatabaseLinked;

export class AppDatabaseLinkedAction extends ActivityAction<ActivityAppInstallationDatabaseLinked> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationDatabaseLinked) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.appInstallation.name;
    this.type = "edit";
    this.titleOptions = { database: data.parameters.database.name };
  }
}
