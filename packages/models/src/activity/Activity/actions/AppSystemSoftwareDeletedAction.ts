import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { SystemSoftwareFullNames } from "../../../app";
import { ActivityAction } from "../ActivityAction";

type ActivityAppInstallationSystemSoftwareDeleted =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationDesiredSystemSoftwareDeleted;

export class AppSystemSoftwareDeletedAction extends ActivityAction<ActivityAppInstallationSystemSoftwareDeleted> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationSystemSoftwareDeleted) {
    super(data);

    this.parameters = data.parameters;
    this.displayName =
      SystemSoftwareFullNames[
        data.parameters.software.name as keyof typeof SystemSoftwareFullNames
      ];
    this.type = "delete";
  }
}
