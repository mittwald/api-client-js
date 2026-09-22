import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type { SystemSoftwareVersionListQuery } from "../SystemSoftwareVersion";
import type {
  SystemSoftwareListQueryData,
  SystemSoftwareListItemData,
  SystemSoftwareData,
  SystemSoftwareName,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { SystemSoftwareVersion } from "../SystemSoftwareVersion";
import { SystemSoftwareFullNames } from "./types";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "SystemSoftware",
})
export class SystemSoftware extends ReferenceModel {
  public readonly recommendedVersions: SystemSoftwareVersionListQuery;

  public constructor(id: string) {
    super(id);
    this.recommendedVersions = SystemSoftwareVersion.query(this, {
      recommended: true,
    });
  }

  public static async find(id: string) {
    const data = await config.behaviors.systemSoftware.find(id);

    if (data) {
      return new SystemSoftwareDetailed(data);
    }
  }

  public static async get(id: string) {
    const systemSoftware = await this.find(id);
    assertObjectFound(systemSoftware, SystemSoftware, id);
    return systemSoftware;
  }

  public static ofId(id: string) {
    return new SystemSoftware(id);
  }

  public static query(query: SystemSoftwareListQueryData = {}) {
    return new SystemSoftwareListQuery(query);
  }

  public async findCommon(): Promise<SystemSoftwareCommon | undefined> {
    return this instanceof SystemSoftwareCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<SystemSoftwareDetailed | undefined> {
    return SystemSoftware.find(this.id);
  }

  public async getCommon(): Promise<SystemSoftwareCommon> {
    return this instanceof SystemSoftwareCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<SystemSoftwareDetailed> {
    return SystemSoftware.get(this.id);
  }
}

export class SystemSoftwareCommon extends WithData<
  SystemSoftwareListItemData | SystemSoftwareData
>()(SystemSoftware) {
  public override readonly data:
    | SystemSoftwareListItemData
    | SystemSoftwareData;
  public readonly fullName: string;
  public readonly name: SystemSoftwareName;
  public readonly tags: string[];

  public constructor(data: SystemSoftwareListItemData | SystemSoftwareData) {
    super(data.id);
    this.data = data;
    this.name = data.name as SystemSoftwareName;
    this.fullName =
      SystemSoftwareFullNames[
        this.name as keyof typeof SystemSoftwareFullNames
      ];
    this.tags = data.tags;
  }
}

export class SystemSoftwareDetailed extends SystemSoftwareCommon {
  public override readonly data: SystemSoftwareData;

  public constructor(data: SystemSoftwareData) {
    super(data);
    this.data = data;
  }
}

export class SystemSoftwareListItem extends SystemSoftwareCommon {
  public override readonly data: SystemSoftwareListItemData;

  public constructor(data: SystemSoftwareListItemData) {
    super(data);
    this.data = data;
  }
}

export class SystemSoftwareListQuery extends ListQueryModel<SystemSoftwareListQueryData> {
  public constructor(query: SystemSoftwareListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.systemSoftware.list(
      this.query,
    );

    return new SystemSoftwareList(
      this.query,
      items.map((d) => new SystemSoftwareListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: SystemSoftwareListQueryData) {
    return new SystemSoftwareListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class SystemSoftwareList extends WithListData<SystemSoftwareListItem>()(
  SystemSoftwareListQuery,
) {
  public override readonly items: readonly SystemSoftwareListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: SystemSoftwareListQueryData,
    systemSoftwares: SystemSoftwareListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(systemSoftwares);
    this.totalCount = totalCount;
  }
}
