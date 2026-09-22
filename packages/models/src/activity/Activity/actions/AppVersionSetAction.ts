import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction";

type ActivityAppInstallationAppVersionSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationAppVersionSet;

export class AppVersionSetAction extends ActivityAction<ActivityAppInstallationAppVersionSet> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationAppVersionSet) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.appInstallation.name;
    this.type = "create";
    this.titleOptions = { version: data.changes.after?.version };
  }
}
