import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction.js";

type ActivityAppInstallationDeleted =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationDeleted;

export class AppDeletedAction extends ActivityAction<ActivityAppInstallationDeleted> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationDeleted) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.appInstallation.name;
    this.type = "delete";
  }
}
