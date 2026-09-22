import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { omit } from "remeda";

import type {
  VolumeListQueryModelData,
  VolumeListItemData,
  VolumeData,
} from "./types.js";

import { generateRandomAlphanumericString } from "../../lib/generateRandomAlphanumericString.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { ContainerStack, Container } from "../Container/index.js";
import { config } from "../../config/index.js";
import { Bytes } from "../../common/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Volume",
})
export class Volume extends ReferenceModel {
  public readonly stackId: string;

  public constructor(id: string, stackId: string) {
    super(id);
    this.stackId = stackId;
  }

  public static async create(name: string, stackId: string) {
    const targetStackId = stackId;
    const response = await config.behaviors.volume.create(targetStackId, name);

    return new Volume(response.id, targetStackId);
  }

  public static async find(id: string, stackId: string) {
    const data = await config.behaviors.volume.find(id, stackId);
    if (data) {
      return new VolumeDetailed(data);
    }
  }

  public static generateRandomName(initialName: string): string {
    const suffix = generateRandomAlphanumericString(4);
    return `${initialName}-${suffix}`;
  }

  public static async get(id: string, stackId: string) {
    const volume = await Volume.find(id, stackId);
    assertObjectFound(volume, Volume, id);
    return volume;
  }

  public static ofId(id: string, stackId: string) {
    return new Volume(id, stackId);
  }

  public static query(query: VolumeListQueryModelData) {
    return new VolumeListQuery(query);
  }

  public async delete() {
    await config.behaviors.volume.delete(this.id, this.stackId);
  }

  public async findCommon(): Promise<VolumeCommon | undefined> {
    return this instanceof VolumeCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<VolumeDetailed | undefined> {
    return Volume.find(this.id, this.stackId);
  }

  public async getCommon(): Promise<VolumeCommon> {
    return this instanceof VolumeCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<VolumeDetailed> {
    return Volume.get(this.id, this.stackId);
  }
}

export class VolumeCommon extends WithData<VolumeListItemData | VolumeData>()(
  Volume,
) {
  public override readonly data: VolumeListItemData | VolumeData;
  public readonly linkedContainers: Container[];
  public readonly name: string;
  public readonly orphaned: boolean;
  public readonly stack: ContainerStack;
  public readonly storageUsage: Bytes;
  public readonly storageUsageInBytes: number;

  public constructor(data: VolumeListItemData | VolumeData) {
    super(data.id, data.stackId);
    this.data = data;
    this.name = data.name;
    this.linkedContainers =
      data.linkedServices?.map((s) => Container.ofId(s, data.stackId)) ?? [];
    this.storageUsage = Bytes.of(data.storageUsageInBytes, "bytes");
    this.storageUsageInBytes = data.storageUsageInBytes;
    this.orphaned = data.orphaned;
    this.stack = ContainerStack.ofId(data.stackId);
  }
}

export class VolumeDetailed extends VolumeCommon {
  public override readonly data: VolumeData;
  public constructor(data: VolumeData) {
    super(data);
    this.data = data;
  }
}

export class VolumeListItem extends VolumeCommon {
  public override readonly data: VolumeListItemData;
  public constructor(data: VolumeListItemData) {
    super(data);
    this.data = data;
  }
}

export class VolumeListQuery extends ListQueryModel<VolumeListQueryModelData> {
  public constructor(query: VolumeListQueryModelData) {
    super(query, { dependencies: [extractId(query.project)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.volume.list(
      extractId(this.query.project),
      {
        ...omit(this.query, ["project", "stack"]),
        stackId: extractId(this.query.stack),
      },
    );
    return new VolumeList(
      this.query,
      items.map((v) => new VolumeListItem(v)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: Partial<VolumeListQueryModelData> = {}) {
    return new VolumeListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class VolumeList extends WithListData<VolumeListItem>()(
  VolumeListQuery,
) {
  public override readonly items: readonly VolumeListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: VolumeListQueryModelData,
    volumes: VolumeListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(volumes);
    this.totalCount = totalCount;
  }
}
