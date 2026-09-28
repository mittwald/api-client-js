import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction.js";

type ActivityAppInstallationCopyRequested =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationCopyRequested;

export class AppCopyRequestedAction extends ActivityAction<ActivityAppInstallationCopyRequested> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationCopyRequested) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.appInstallation.name;
    this.type = "copy";
    this.titleOptions = {
      sourceAppInstallation: data.parameters.sourceAppInstallation.name,
    };
  }
}
