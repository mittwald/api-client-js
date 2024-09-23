import { ReferenceModel } from "../../base/ReferenceModel.js";
import { DataModel } from "../../base/DataModel.js";
import { InstalledSystemSoftwareData } from "./types.js";
import { classes } from "polytype";

export class InstalledSystemSoftware extends ReferenceModel {}

class InstalledSystemSoftwareCommon extends classes(
  DataModel<InstalledSystemSoftwareData>,
  InstalledSystemSoftware,
) {
  public readonly isUpdating: boolean;
  public readonly isInstalling: boolean;

  public constructor(data: InstalledSystemSoftwareData) {
    super([data], [data.systemSoftwareId]);

    this.isUpdating =
      !!this.data.systemSoftwareVersion.current &&
      this.data.systemSoftwareVersion.current !==
        this.data.systemSoftwareVersion.desired;

    this.isInstalling = !this.data.systemSoftwareVersion.current;
  }
}

export class InstalledSystemSoftwareListItem extends classes(
  InstalledSystemSoftwareCommon,
  DataModel<InstalledSystemSoftwareData>,
) {
  // ToDo: Activate when SystemSoftware model is merged (https://github.com/mittwald/api-client-js/pull/91)
  // public readonly systemSoftware: SystemSoftware;
  // ToDo: Activate when SystemSoftwareVersion model is merged (https://github.com/mittwald/api-client-js/pull/73)
  // public readonly systemSoftwareVersion: SystemSoftwareVersion;

  public constructor(data: InstalledSystemSoftwareData) {
    super([data], [data]);
    //this.systemSoftware = SystemSoftware.ofId(data.systemSoftwareId);
    //this.systemSoftwareVersion = SystemSoftwareVersion.ofId(data.systemSoftwareId, data.systemSoftwareVersion.desired);
  }
}
