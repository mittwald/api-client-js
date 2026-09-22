import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { omit } from "remeda";

import type {
  MySqlUserListQueryModelData,
  MySqlUserCreateRequestData,
  MySqlUserUpdateRequestData,
  MySqlUserListItemData,
  MySqlUserAccessLevel,
  MySqlUserData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { AggregateMetaData } from "../../common/index.js";
import { config } from "../../config/index.js";
import { MySql } from "../MySql/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "MySqlUser",
})
export class MySqlUser extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "database",
    "mysqluser",
  );

  public static async create(mySql: MySql, data: MySqlUserCreateRequestData) {
    const response = await config.behaviors.mySqlUser.create(mySql.id, data);

    return new MySqlUser(response.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.mySqlUser.find(id);
    if (data !== undefined) {
      return new MySqlUserDetailed(data);
    }
  }

  public static async get(id: string) {
    const databaseUser = await this.find(id);
    assertObjectFound(databaseUser, MySqlUser, id);
    return databaseUser;
  }

  public static ofId(id: string) {
    return new MySqlUser(id);
  }

  public static query(query: MySqlUserListQueryModelData) {
    return new MySqlUserListQuery(query);
  }

  public async delete() {
    await config.behaviors.mySqlUser.delete(this.id);
  }

  public findCommon(): Promise<MySqlUserCommon | undefined> | MySqlUserCommon {
    return this instanceof MySqlUserCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<MySqlUserDetailed | undefined> {
    return MySqlUser.find(this.id);
  }

  public getCommon(): Promise<MySqlUserCommon> | MySqlUserCommon {
    return this instanceof MySqlUserCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<MySqlUserDetailed> {
    return MySqlUser.get(this.id);
  }

  public async getPhpMyAdminUrl() {
    return await config.behaviors.mySqlUser.getPhpMyAdminUrl(this.id);
  }

  public async update(data: MySqlUserUpdateRequestData) {
    await config.behaviors.mySqlUser.update(this.id, data);
  }

  public async updatePassword(password: string) {
    await config.behaviors.mySqlUser.updatePassword(this.id, password);
  }
}

export class MySqlUserCommon extends WithData<
  MySqlUserListItemData | MySqlUserData
>()(MySqlUser) {
  public readonly accessLevel: MySqlUserAccessLevel;
  public override readonly data: MySqlUserListItemData | MySqlUserData;
  public readonly database: MySql;
  public readonly description: string;
  public readonly externalAccess: boolean;
  public readonly isReady: boolean;
  public readonly mainUser: boolean;
  public readonly name: string;

  public constructor(data: MySqlUserListItemData | MySqlUserData) {
    super(data.id);
    this.data = data;
    this.name = data.name;
    this.mainUser = data.mainUser;
    this.description = data.description ?? "";
    this.accessLevel = data.accessLevel;
    this.externalAccess = data.externalAccess;
    this.isReady = data.status === "ready";
    this.database = MySql.ofId(data.databaseId);
  }
}

export class MySqlUserDetailed extends MySqlUserCommon {
  public override readonly data: MySqlUserData;

  public constructor(data: MySqlUserData) {
    super(data);
    this.data = data;
  }
}

export class MySqlUserListItem extends MySqlUserCommon {
  public override readonly data: MySqlUserListItemData;

  public constructor(data: MySqlUserListItemData) {
    super(data);
    this.data = data;
  }
}

export class MySqlUserListQuery extends ListQueryModel<MySqlUserListQueryModelData> {
  public constructor(query: MySqlUserListQueryModelData) {
    super(query, { dependencies: [extractId(query.database)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.mySqlUser.list(
      extractId(this.query.database),
      omit(this.query, ["database"]),
    );
    return new MySqlUserList(
      this.query,
      items.map((d) => new MySqlUserListItem(d)),
      totalCount,
    );
  }

  public refine(query: Partial<MySqlUserListQueryModelData> = {}) {
    return new MySqlUserListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class MySqlUserList extends WithListData<MySqlUserListItem>()(
  MySqlUserListQuery,
) {
  public override readonly items: readonly MySqlUserListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: MySqlUserListQueryModelData,
    mySqlUsers: MySqlUserListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(mySqlUsers);
    this.totalCount = totalCount;
  }
}
