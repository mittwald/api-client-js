import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction.js";

type ActivityAppInstallationFailed =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationFailed;

export class AppFailedAction extends ActivityAction<ActivityAppInstallationFailed> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationFailed) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.appInstallation.name;
    this.type = "fail";

    // `changes` is empty, so the title is the only place the reason can surface.
    if (data.parameters.error) {
      this.titleKey = "app.failed.withError";
      this.titleOptions = { error: data.parameters.error.name };
    }
  }
}
