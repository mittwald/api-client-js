import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction";

type ActivityAppInstallationDescriptionSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationDescriptionSet;

export class AppDescriptionSetAction extends ActivityAction<ActivityAppInstallationDescriptionSet> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationDescriptionSet) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.appInstallation.name;
    this.type = "edit";
    this.titleOptions = {
      oldDescription: data.changes.before?.description,
      description: data.changes.after?.description,
    };
  }
}
