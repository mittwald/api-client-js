import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { assertString } from "@sindresorhus/is";
import { DateTime } from "luxon";
import { omit } from "remeda";

import type {
  SshUserListQueryModelData,
  SshUserCreateRequestData,
  SshUserUpdateRequestData,
  SshUserListItemData,
  SshUserSshKey,
  SshUserData,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { arrayRemoveItem } from "../../lib/arrayRemoveItem";
import { Project } from "../../project/internal";
import { config } from "../../config";
import { User } from "../../user";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "SshUser",
})
export class SshUser extends ReferenceModel {
  public static async create(project: Project, data: SshUserCreateRequestData) {
    const response = await config.behaviors.sshUser.create(project.id, data);

    return new SshUser(response.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.sshUser.find(id);
    if (data !== undefined) {
      return new SshUserDetailed(data);
    }
  }

  public static async get(id: string) {
    const sshUser = await this.find(id);
    assertObjectFound(sshUser, SshUser, id);
    return sshUser;
  }

  public static async getDefault(
    project: Project | string,
  ): Promise<SshUserCommon> {
    const projectDetailed = await Project.get(extractId(project));
    const user = await User.self.getCommon();

    assertString(user.email);

    return new SshUserCommon({
      authUpdatedAt: projectDetailed.data.createdAt,
      createdAt: projectDetailed.data.createdAt,
      description: "mStudio Benutzer",
      projectId: projectDetailed.id,
      userName: user.email,
      hasPassword: false,
      id: "default",
      active: true,
    });
  }

  public static ofId(id: string) {
    return new SshUser(id);
  }

  public static query(query: SshUserListQueryModelData) {
    return new SshUserListQuery(query);
  }

  public async delete() {
    await config.behaviors.sshUser.delete(this.id);
  }

  public async findCommon(): Promise<SshUserCommon | undefined> {
    return this instanceof SshUserCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<SshUserDetailed | undefined> {
    return SshUser.find(this.id);
  }

  public async getCommon(): Promise<SshUserCommon> {
    return this instanceof SshUserCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<SshUserDetailed> {
    return SshUser.get(this.id);
  }

  public async update(data: SshUserUpdateRequestData) {
    await config.behaviors.sshUser.update(this.id, data);
  }
}

export class SshUserCommon extends WithData<
  SshUserListItemData | SshUserData
>()(SshUser) {
  public readonly active: boolean;
  public override readonly data: SshUserListItemData | SshUserData;
  public readonly description: string;
  public readonly expiresAt?: DateTime;
  public readonly hasPassword?: boolean;
  public readonly hasPublicKeys?: boolean;
  public readonly isDefault?: boolean;
  public readonly project: Project;
  public readonly publicKeys: SshUserSshKey[];
  public readonly type: "SSH";
  public readonly userName: string;

  public constructor(data: SshUserListItemData | SshUserData) {
    super(data.id);
    this.data = data;
    this.description = data.description;
    this.userName = data.userName;
    this.active = data.active ?? false;
    this.expiresAt = data.expiresAt
      ? DateTime.fromISO(data.expiresAt)
      : undefined;
    this.hasPassword = data.hasPassword;
    this.hasPublicKeys = data.publicKeys && data.publicKeys.length > 0;
    this.publicKeys = data.publicKeys ?? [];
    this.project = Project.ofId(data.projectId);
    this.type = "SSH";
    this.isDefault = data.id === "default" ? true : undefined;
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

export class SshUserDetailed extends SshUserCommon {
  public override readonly data: SshUserData;
  public constructor(data: SshUserData) {
    super(data);
    this.data = data;
  }
}

export class SshUserListItem extends SshUserCommon {
  public override readonly data: SshUserListItemData;
  public constructor(data: SshUserListItemData) {
    super(data);
    this.data = data;
  }
}

export class SshUserListQuery extends ListQueryModel<SshUserListQueryModelData> {
  public constructor(query: SshUserListQueryModelData) {
    super(query, { dependencies: [extractId(query.project)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.sshUser.list(
      extractId(this.query.project),
      omit(this.query, ["project"]),
    );
    return new SshUserList(
      this.query,
      items.map((d) => new SshUserListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: Partial<SshUserListQueryModelData> = {}) {
    return new SshUserListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class SshUserList extends WithListData<SshUserListItem>()(
  SshUserListQuery,
) {
  public override readonly items: readonly SshUserListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: SshUserListQueryModelData,
    sshUsers: SshUserListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(sshUsers);
    this.totalCount = totalCount;
  }
}
