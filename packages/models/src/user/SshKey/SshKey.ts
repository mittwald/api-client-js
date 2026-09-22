import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type {
  SshKeyListItemData,
  SshKeyCreateData,
  SshKeyUpdateData,
  SshKeyData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  ListDataModel,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "SshKey",
})
export class SshKey extends ReferenceModel {
  public static async create(data: SshKeyCreateData) {
    await config.behaviors.sshKey.create(data);
  }

  public static async find(id: string) {
    const data = await config.behaviors.sshKey.find(id);
    if (data) {
      return new SshKeyDetailed(data);
    }
  }

  public static async get(id: string) {
    const sshKey = await this.find(id);
    assertObjectFound(sshKey, SshKey, id);
    return sshKey;
  }

  public static ofId(id: string) {
    return new SshKey(id);
  }

  public static query() {
    return new SshKeyListQuery({});
  }

  public async delete() {
    await config.behaviors.sshKey.delete(this.id);
  }

  public async findCommon(): Promise<SshKeyCommon | undefined> {
    return this instanceof SshKeyCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<SshKeyDetailed | undefined> {
    return SshKey.find(this.id);
  }

  public async getCommon(): Promise<SshKeyCommon> {
    return this instanceof SshKeyCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<SshKeyDetailed> {
    return SshKey.get(this.id);
  }

  public async update(data: SshKeyUpdateData) {
    await config.behaviors.sshKey.update(this.id, data);
  }
}

export class SshKeyCommon extends WithData<SshKeyData>()(SshKey) {
  public readonly comment: string;
  public override readonly data: SshKeyData;
  public readonly expiresAt?: DateTime;

  public constructor(data: SshKeyData) {
    super(data.sshKeyId);
    this.data = data;
    this.comment = data.comment;
    this.expiresAt = data.expiresAt
      ? DateTime.fromISO(data.expiresAt)
      : undefined;
  }
}

export class SshKeyDetailed extends SshKeyCommon {
  public constructor(data: SshKeyData) {
    super(data);
  }
}

export class SshKeyListItem extends SshKeyCommon {
  public override readonly data: SshKeyListItemData;
  public constructor(data: SshKeyListItemData) {
    super(data);
    this.data = data;
  }
}

export class SshKeyListQuery extends ListQueryModel<Record<string, never>> {
  public async execute() {
    const { totalCount, items } = await config.behaviors.sshKey.list();

    return new SshKeyList(
      items.map((d) => new SshKeyListItem(d)),
      totalCount,
    );
  }}

export class SshKeyList extends ListDataModel<SshKeyListItem> {
  public constructor(sshKeys: SshKeyListItem[], totalCount: number) {
    super(sshKeys, totalCount);
  }
}
