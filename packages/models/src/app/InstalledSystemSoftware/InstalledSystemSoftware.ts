import { DateTime } from "luxon";

import type {
  SystemSoftwareName} from "../SystemSoftware";
import type { InstalledSystemSoftwareData } from "./types";

import {
  SystemSoftwareFullNames,
  SystemSoftware
} from "../SystemSoftware";
import { SystemSoftwareVersion } from "../SystemSoftwareVersion";
import { User } from "../../user/User/User";
import { DataModel } from "../../base";

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
