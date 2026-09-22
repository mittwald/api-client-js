import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction.js";

type ActivityAppInstallationAppVersionUpdated =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationAppVersionSet;

export class AppVersionUpdatedAction extends ActivityAction<ActivityAppInstallationAppVersionUpdated> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationAppVersionUpdated) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.appInstallation.name;
    this.type = "update";
    this.titleOptions = { version: data.changes.after?.version };
  }
}
