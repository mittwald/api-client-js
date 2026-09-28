import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { SystemSoftwareFullNames } from "../../../app/index.js";
import { ActivityAction } from "../ActivityAction.js";

type ActivityAppInstallationSystemSoftwareSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationDesiredSystemSoftwareSet;

export class AppSystemSoftwareSetAction extends ActivityAction<ActivityAppInstallationSystemSoftwareSet> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationSystemSoftwareSet) {
    super(data);

    this.parameters = data.parameters;
    this.displayName =
      SystemSoftwareFullNames[
        data.parameters.software.name as keyof typeof SystemSoftwareFullNames
      ];

    const oldVersion = data.changes.before?.softwareVersion;

    this.type = oldVersion ? "update" : "create";
    this.titleKey = oldVersion
      ? "app.systemsoftware-set.changed"
      : "app.systemsoftware-set.created";
    this.titleOptions = {
      version: data.changes.after?.softwareVersion,
      oldVersion,
    };
  }
}
