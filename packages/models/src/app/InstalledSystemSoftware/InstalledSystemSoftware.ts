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

  /* ToDo: Activate when SystemSoftware model is merged (https://github.com/mittwald/api-client-js/pull/91)
 public getSystemSoftware = provideReact(async (): Promise<SystemSoftwareDetailed> => {
   return await SystemSoftware.get(this.data.systemSoftwareId);
 });
 */

  /* ToDo: Activate when SystemSoftwareVersion model is merged (https://github.com/mittwald/api-client-js/pull/73)
  public getVersion = provideReact(async (): Promise<SystemSoftwareVersionDetailed> => {
  return SystemSoftwareVersion.get(this.data.systemSoftwareId, this.data.systemSoftwareVersion.desired);
  });
  */
}

export class InstalledSystemSoftwareListItem extends classes(
  InstalledSystemSoftwareCommon,
  DataModel<InstalledSystemSoftwareData>,
) {
  public constructor(data: InstalledSystemSoftwareData) {
    super([data], [data]);
  }
}
