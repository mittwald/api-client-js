import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction.js";

type ActivityAppInstallationRequested =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationRequested;

export class AppInstallationRequestedAction extends ActivityAction<ActivityAppInstallationRequested> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationRequested) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.appInstallation.name;
    this.type = "create";
  }
}
