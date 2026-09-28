import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { DateTime } from "luxon";
import { omit } from "remeda";

import type { SshUserSshKey } from "../SshUser/index.js";
import type {
  SftpUserListQueryModelData,
  SftpUserCreateRequestData,
  SftpUserUpdateRequestData,
  SftpUserListItemData,
  SftpUserAccessLevel,
  SftpUserData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { arrayRemoveItem } from "../../lib/arrayRemoveItem.js";
import { Project } from "../../project/internal.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "SftpUser",
})
export class SftpUser extends ReferenceModel {
  public static async create(
    project: Project,
    data: SftpUserCreateRequestData,
  ) {
    const response = await config.behaviors.sftpUser.create(project.id, data);

    return new SftpUser(response.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.sftpUser.find(id);
    if (data !== undefined) {
      return new SftpUserDetailed(data);
    }
  }

  public static async get(id: string) {
    const sftpUser = await this.find(id);
    assertObjectFound(sftpUser, SftpUser, id);
    return sftpUser;
  }

  public static ofId(id: string) {
    return new SftpUser(id);
  }

  public static query(query: SftpUserListQueryModelData) {
    return new SftpUserListQuery(query);
  }

  public async delete() {
    await config.behaviors.sftpUser.delete(this.id);
  }

  public async findCommon(): Promise<SftpUserCommon | undefined> {
    return this instanceof SftpUserCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<SftpUserDetailed | undefined> {
    return SftpUser.find(this.id);
  }

  public async getCommon(): Promise<SftpUserCommon> {
    return this instanceof SftpUserCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<SftpUserDetailed> {
    return SftpUser.get(this.id);
  }

  public async update(data: SftpUserUpdateRequestData) {
    return await config.behaviors.sftpUser.update(this.id, data);
  }
}

export class SftpUserCommon extends WithData<
  SftpUserListItemData | SftpUserData
>()(SftpUser) {
  public readonly accessLevel: SftpUserAccessLevel;
  public readonly active: boolean;
  public override readonly data: SftpUserListItemData | SftpUserData;
  public readonly description: string;
  public readonly directories?: string[];
  public readonly expiresAt?: DateTime;
  public readonly hasFullAccess: boolean;
  public readonly hasFullDirectoryAccess: boolean;
  public readonly hasPassword?: boolean;
  public readonly hasPublicKeys?: boolean;
  public readonly project: Project;
  public readonly publicKeys: SshUserSshKey[];
  public readonly type: "SFTP";
  public readonly userName: string;

  public constructor(data: SftpUserListItemData | SftpUserData) {
    super(data.id);
    this.data = data;
    this.description = data.description;
    this.userName = data.userName;
    this.active = data.active ?? false;
    this.accessLevel = data.accessLevel;
    this.hasFullAccess = data.accessLevel === "full";
    this.expiresAt = data.expiresAt
      ? DateTime.fromISO(data.expiresAt)
      : undefined;
    this.hasPassword = data.hasPassword;
    this.hasPublicKeys = data.publicKeys && data.publicKeys.length > 0;
    this.publicKeys = data.publicKeys ?? [];
    this.directories = data.directories ?? ["/"];
    this.hasFullDirectoryAccess =
      this.directories.length === 1 && this.directories[0] === "/";
    this.project = Project.ofId(data.projectId);
    this.type = "SFTP";
  }

  public async deleteSshKey(sshKey: SshUserSshKey) {
    const publicKeys = this.publicKeys;

    arrayRemoveItem(
      publicKeys,
      (k) => k.key === sshKey.key && k.comment === sshKey.comment,
    );

    await this.update({ publicKeys });
  }
}

export class SftpUserDetailed extends SftpUserCommon {
  public override readonly data: SftpUserData;
  public constructor(data: SftpUserData) {
    super(data);
    this.data = data;
  }
}

export class SftpUserListItem extends SftpUserCommon {
  public override readonly data: SftpUserListItemData;
  public constructor(data: SftpUserListItemData) {
    super(data);
    this.data = data;
  }
}

export class SftpUserListQuery extends ListQueryModel<SftpUserListQueryModelData> {
  public constructor(query: SftpUserListQueryModelData) {
    super(query, { dependencies: [extractId(query.project)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.sftpUser.list(
      extractId(this.query.project),
      omit(this.query, ["project"]),
    );
    return new SftpUserList(
      this.query,
      items.map((d) => new SftpUserListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: Partial<SftpUserListQueryModelData> = {}) {
    return new SftpUserListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class SftpUserList extends WithListData<SftpUserListItem>()(
  SftpUserListQuery,
) {
  public override readonly items: readonly SftpUserListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: SftpUserListQueryModelData,
    sftpUsers: SftpUserListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(sftpUsers);
    this.totalCount = totalCount;
  }
}
