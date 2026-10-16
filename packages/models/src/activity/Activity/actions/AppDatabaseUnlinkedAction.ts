import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction.js";

type ActivityAppInstallationDatabaseUnlinked =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationDatabaseUnlinked;

export class AppDatabaseUnlinkedAction extends ActivityAction<ActivityAppInstallationDatabaseUnlinked> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationDatabaseUnlinked) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.appInstallation.name;
    this.type = "edit";
    this.titleOptions = { database: data.parameters.database.name };
  }
}
