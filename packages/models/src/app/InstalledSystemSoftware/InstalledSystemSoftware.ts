import { InstalledSystemSoftwareData } from "./types.js";
import { SystemSoftware } from "../SystemSoftware/index.js";
import { SystemSoftwareVersion } from "../SystemSoftwareVersion/index.js";
import { DataModel } from "../../base/index.js";

export class InstalledSystemSoftware extends DataModel<InstalledSystemSoftwareData> {
  public readonly isUpdating: boolean;
  public readonly isInstalling: boolean;
  public readonly systemSoftware: SystemSoftware;
  public readonly systemSoftwareVersion: SystemSoftwareVersion;

  public constructor(data: InstalledSystemSoftwareData) {
    super(data);
    this.isUpdating =
      !!data.systemSoftwareVersion.current &&
      data.systemSoftwareVersion.current !== data.systemSoftwareVersion.desired;

    this.isInstalling = !data.systemSoftwareVersion.current;
    this.systemSoftware = SystemSoftware.ofId(data.systemSoftwareId);
    this.systemSoftwareVersion = SystemSoftwareVersion.ofId(
      data.systemSoftwareId,
      SystemSoftware.ofId(data.systemSoftwareVersion.desired),
    );
  }
}
