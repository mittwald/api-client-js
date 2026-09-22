import { DateTime } from "luxon";

import type {
  SystemSoftwareName} from "../SystemSoftware/index.js";
import type { InstalledSystemSoftwareData } from "./types.js";

import {
  SystemSoftwareFullNames,
  SystemSoftware
} from "../SystemSoftware/index.js";
import { SystemSoftwareVersion } from "../SystemSoftwareVersion/index.js";
import { User } from "../../user/User/User.js";
import { DataModel } from "../../base/index.js";

export class InstalledSystemSoftware extends DataModel<InstalledSystemSoftwareData> {
  public readonly fullName: string;
  public readonly id: string;
  public readonly isInstalling: boolean;
  public readonly isUpdating: boolean;
  public readonly lastVersionChangedAt?: DateTime;
  public readonly lastVersionChangedBy?: User;
  public readonly name: string;
  public readonly previousSystemSoftwareVersion?: SystemSoftwareVersion;
  public readonly systemSoftware: SystemSoftware;
  public readonly systemSoftwareVersion: SystemSoftwareVersion;
  public readonly updateAvailable: boolean;
  public readonly version: string;

  public constructor(data: InstalledSystemSoftwareData) {
    super(data);

    this.id = data.systemSoftwareId;
    this.name = data.name as SystemSoftwareName;
    this.fullName =
      SystemSoftwareFullNames[
        this.name as keyof typeof SystemSoftwareFullNames
      ];
    this.version = data.externalVersion;
    this.updateAvailable = data.updateAvailable;

    this.isUpdating =
      !!data.systemSoftwareVersion.current &&
      data.systemSoftwareVersion.current !== data.systemSoftwareVersion.desired;
    this.isInstalling = !data.systemSoftwareVersion.current;
    this.systemSoftware = SystemSoftware.ofId(data.systemSoftwareId);
    const { lastChangedAt, lastChangeBy, previous, desired } =
      data.systemSoftwareVersion;

    this.systemSoftwareVersion = SystemSoftwareVersion.ofId(
      desired,
      SystemSoftware.ofId(data.systemSoftwareId),
    );
    this.previousSystemSoftwareVersion = previous
      ? SystemSoftwareVersion.ofId(
          previous,
          SystemSoftware.ofId(data.systemSoftwareId),
        )
      : undefined;
    this.lastVersionChangedAt = lastChangedAt
      ? DateTime.fromISO(lastChangedAt)
      : undefined;
    this.lastVersionChangedBy = lastChangeBy
      ? User.ofId(lastChangeBy)
      : undefined;
  }
}
