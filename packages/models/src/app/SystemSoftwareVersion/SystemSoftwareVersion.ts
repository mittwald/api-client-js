import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import semverCompare from "semver-compare";
import { DateTime } from "luxon";

import type { SystemSoftware } from "../SystemSoftware/index.js";
import type {
  SystemSoftwareVersionListQueryData,
  SystemSoftwareVersionListItemData,
  SystemSoftwareVersionData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { FeePeriod } from "./FeePeriod.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "SystemSoftwareVersion",
})
export class SystemSoftwareVersion extends ReferenceModel {
  public readonly systemSoftware: SystemSoftware;

  public constructor(id: string, systemSoftware: SystemSoftware) {
    super(id);
    this.systemSoftware = systemSoftware;
  }

  public static async find(id: string, systemSoftware: SystemSoftware) {
    const data = await config.behaviors.systemSoftwareVersion.find(
      id,
      systemSoftware.id,
    );
    if (data) {
      return new SystemSoftwareVersionDetailed(data, systemSoftware);
    }
  }

  public static async get(id: string, systemSoftware: SystemSoftware) {
    const systemSoftwareVersion = await this.find(id, systemSoftware);
    assertObjectFound(systemSoftwareVersion, SystemSoftwareVersion, id);
    return systemSoftwareVersion;
  }

  public static ofId(id: string, systemSoftware: SystemSoftware) {
    return new SystemSoftwareVersion(id, systemSoftware);
  }

  public static query(
    systemSoftware: SystemSoftware,
    query: SystemSoftwareVersionListQueryData = {},
  ) {
    return new SystemSoftwareVersionListQuery(systemSoftware, query);
  }

  public async findCommon(): Promise<SystemSoftwareVersionCommon | undefined> {
    return this instanceof SystemSoftwareVersionCommon
      ? this
      : this.findDetailed();
  }

  public async findDetailed(): Promise<
    SystemSoftwareVersionDetailed | undefined
  > {
    return SystemSoftwareVersion.find(this.id, this.systemSoftware);
  }

  public async getCommon(): Promise<SystemSoftwareVersionCommon> {
    return this instanceof SystemSoftwareVersionCommon
      ? this
      : this.getDetailed();
  }

  public getDetailed(): Promise<SystemSoftwareVersionDetailed> {
    return SystemSoftwareVersion.get(this.id, this.systemSoftware);
  }
}

export class SystemSoftwareVersionCommon extends WithData<
  SystemSoftwareVersionListItemData | SystemSoftwareVersionData
>()(SystemSoftwareVersion) {
  public override readonly data:
    | SystemSoftwareVersionListItemData
    | SystemSoftwareVersionData;
  public readonly expiryDate?: DateTime;
  public readonly version: string;
  public constructor(
    data: SystemSoftwareVersionListItemData | SystemSoftwareVersionData,
    systemSoftware: SystemSoftware,
  ) {
    super(data.id, systemSoftware);
    this.data = data;
    this.version = data.externalVersion;
    this.expiryDate = data.expiryDate
      ? DateTime.fromISO(data.expiryDate)
      : undefined;
  }

  public checkCurrentFee() {
    if (this.data.fee && "periods" in this.data.fee) {
      const period = this.data.fee.periods.find(
        (period) =>
          period.feeValidFrom &&
          DateTime.fromISO(period.feeValidFrom) <= DateTime.now() &&
          (!period.feeValidUntil ||
            DateTime.fromISO(period.feeValidUntil) > DateTime.now()),
      );
      if (period) {
        return new FeePeriod(period);
      }
    }
  }

  public checkImminentExpiryDate() {
    if (
      this.data.expiryDate &&
      DateTime.fromISO(this.data.expiryDate) < DateTime.now().plus({ month: 6 })
    ) {
      return this.data.expiryDate;
    }
  }

  public checkImminentFee() {
    if (
      this.data.fee &&
      "periods" in this.data.fee &&
      !this.checkCurrentFee()
    ) {
      const period = this.data.fee.periods.find(
        (period) =>
          period.feeValidFrom &&
          DateTime.fromISO(period.feeValidFrom) > DateTime.now() &&
          DateTime.fromISO(period.feeValidFrom) <
            DateTime.now().plus({ month: 6 }),
      );

      if (period) {
        return new FeePeriod(period);
      }
    }
  }

  public compare(other: SystemSoftwareVersionListItem): -1 | 0 | 1 {
    return semverCompare(this.data.internalVersion, other.data.internalVersion);
  }
}

export class SystemSoftwareVersionDetailed extends SystemSoftwareVersionCommon {
  public override readonly data: SystemSoftwareVersionData;

  public constructor(
    data: SystemSoftwareVersionData,
    systemSoftware: SystemSoftware,
  ) {
    super(data, systemSoftware);
    this.data = data;
  }
}

export class SystemSoftwareVersionListItem extends SystemSoftwareVersionCommon {
  public override readonly data: SystemSoftwareVersionListItemData;

  public constructor(
    data: SystemSoftwareVersionListItemData,
    systemSoftware: SystemSoftware,
  ) {
    super(data, systemSoftware);
    this.data = data;
  }
}

export class SystemSoftwareVersionListQuery extends ListQueryModel<SystemSoftwareVersionListQueryData> {
  public readonly systemSoftware: SystemSoftware;

  public constructor(
    systemSoftware: SystemSoftware,
    query: SystemSoftwareVersionListQueryData,
  ) {
    super(query, { dependencies: [systemSoftware.id] });
    this.systemSoftware = systemSoftware;
  }

  public async execute() {
    const { totalCount, items } =
      await config.behaviors.systemSoftwareVersion.list(
        this.systemSoftware.id,
        this.query,
      );

    return new SystemSoftwareVersionList(
      this.systemSoftware,
      this.query,
      items
        .map((d) => new SystemSoftwareVersionListItem(d, this.systemSoftware))
        .sort((a, b) => b.compare(a)),
      totalCount,
    );
  }

  public refine(query: SystemSoftwareVersionListQueryData) {
    return new SystemSoftwareVersionListQuery(this.systemSoftware, {
      ...this.query,
      ...query,
    });
  }
}

export class SystemSoftwareVersionList extends WithListData<SystemSoftwareVersionListItem>()(
  SystemSoftwareVersionListQuery,
) {
  public override readonly items: readonly SystemSoftwareVersionListItem[];
  public override readonly totalCount: number;

  public constructor(
    systemSoftware: SystemSoftware,
    query: SystemSoftwareVersionListQueryData,
    systemSoftwareVersions: SystemSoftwareVersionListItem[],
    totalCount: number,
  ) {
    super(systemSoftware, query);
    this.items = Object.freeze(systemSoftwareVersions);
    this.totalCount = totalCount;
  }
}
