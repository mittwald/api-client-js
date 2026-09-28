import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import semverCompare from "semver-compare";
import { omit } from "remeda";

import type { DatabaseType } from "../types.js";
import type {
  MySqlUserCreateRequestData,
  MySqlUserListQuery,
} from "../MySqlUser/index.js";
import type {
  MySqlCharsetUpdateRequestData,
  MySqlListQueryModelData,
  MySqlCharacterSettings,
  MySqlDatabaseStatus,
  MySqlCreateRequest,
  MySqlListItemData,
  MySqlData,
} from "./types.js";

import { AppInstallation } from "../../app/AppInstallation/AppInstallation.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { MySqlUserDetailed, MySqlUser } from "../MySqlUser/index.js";
import { AggregateMetaData, Bytes } from "../../common/index.js";
import { Project } from "../../project/internal.js";
import { isNewerVersion } from "../lib.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "MySql",
})
export class MySql extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "database",
    "mysqldb",
  );

  public readonly mySqlUsers: MySqlUserListQuery;

  public constructor(id: string) {
    super(id);
    this.mySqlUsers = MySqlUser.query({ database: this });
  }

  public static async create(project: Project, data: MySqlCreateRequest) {
    const response = await config.behaviors.mySql.create(project.id, {
      database: {
        description: data.description,
        version: data.version,
      },
      user: { password: data.password, accessLevel: "full" },
    });

    return new MySql(response.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.mySql.find(id);
    if (data !== undefined) {
      return new MySqlDetailed(data);
    }
  }

  public static async get(id: string) {
    const database = await this.find(id);
    assertObjectFound(database, MySql, id);
    return database;
  }

  public static async getLatestVersion() {
    const versions = await MySql.listVersions();
    return versions[0];
  }

  public static async listVersions() {
    const versions = await config.behaviors.mySql.listVersions();
    return versions
      .filter((d) => !d.disabled)
      .sort((a, b) => semverCompare(b.number, a.number));
  }

  public static ofId(id: string) {
    return new MySql(id);
  }

  public static query(query: MySqlListQueryModelData) {
    return new MySqlListQuery(query);
  }

  public async copy(description: string, password: string) {
    await config.behaviors.mySql.copyDatabase(this.id, {
      user: { accessLevel: "full", password },
      description,
    });
  }

  public async createUser(data: MySqlUserCreateRequestData) {
    return MySqlUser.create(this, data);
  }

  public async delete() {
    await config.behaviors.mySql.delete(this.id);
  }

  public findCommon(): Promise<MySqlCommon | undefined> | MySqlCommon {
    return this instanceof MySqlCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<MySqlDetailed | undefined> {
    return MySql.find(this.id);
  }

  public getCommon(): Promise<MySqlCommon> | MySqlCommon {
    return this instanceof MySqlCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<MySqlDetailed> {
    return MySql.get(this.id);
  }

  public async updateDefaultCharacterSettings(
    data: MySqlCharsetUpdateRequestData,
  ) {
    await config.behaviors.mySql.updateDefaultCharset(this.id, data);
  }

  public async updateDescription(description: string) {
    await config.behaviors.mySql.updateDescription(this.id, description);
  }

  public async updateVersion(version: string) {
    await config.behaviors.mySql.updateVersion(this.id, version);
  }
}

export class MySqlCommon extends WithData<MySqlListItemData | MySqlData>()(
  MySql,
) {
  public readonly characterSettings: MySqlCharacterSettings;
  public override readonly data: MySqlListItemData | MySqlData;
  public readonly description: string;
  public readonly externalHostname: string;
  public readonly hostname: string;
  public readonly linkedAppInstallations: AppInstallation[];
  public readonly mainUser?: MySqlUserDetailed;
  public readonly name: string;
  public readonly project: Project;
  public readonly shortId: string;
  public readonly status: MySqlDatabaseStatus;
  public readonly storageUsage: Bytes;
  public readonly type: DatabaseType;
  public readonly version: string;

  public constructor(data: MySqlListItemData | MySqlData) {
    super(data.id);
    this.data = data;
    this.name = data.name;
    this.description = data.description;
    this.shortId = data.name.substring(data.name.lastIndexOf("_") + 1);
    this.version = data.version;
    this.type = "MySQL";
    this.storageUsage = Bytes.of(data.storageUsageInBytes, "bytes");

    this.linkedAppInstallations =
      data.finalizers?.map((f) =>
        AppInstallation.ofId(f.split(":")?.[2] ?? ""),
      ) ?? [];

    this.hostname = data.hostname;
    this.externalHostname = data.externalHostname;
    this.mainUser = data.mainUser
      ? new MySqlUserDetailed(data.mainUser)
      : undefined;
    this.characterSettings = data.characterSettings;
    this.project = Project.ofId(data.projectId);
    this.status = data.status;
  }

  public async getAvailableVersionUpdate() {
    const latestVersion = await MySql.getLatestVersion();
    return latestVersion && isNewerVersion(this.version, latestVersion)
      ? latestVersion
      : undefined;
  }
}

export class MySqlDetailed extends MySqlCommon {
  public override readonly data: MySqlData;

  public constructor(data: MySqlData) {
    super(data);
    this.data = data;
  }
}

export class MySqlListItem extends MySqlCommon {
  public override readonly data: MySqlListItemData;

  public constructor(data: MySqlListItemData) {
    super(data);
    this.data = data;
  }
}

export class MySqlListQuery extends ListQueryModel<MySqlListQueryModelData> {
  public constructor(query: MySqlListQueryModelData) {
    super(query, { dependencies: [extractId(query.project)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.mySql.list(
      extractId(this.query.project),
      omit(this.query, ["project"]),
    );
    return new MySqlList(
      this.query,
      items
        .map((d) => new MySqlListItem(d))
        .sort((a, b) => a.description.localeCompare(b.description)),
      totalCount,
    );
  }

  public refine(query: Partial<MySqlListQueryModelData> = {}) {
    return new MySqlListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class MySqlList extends WithListData<MySqlListItem>()(MySqlListQuery) {
  public override readonly items: readonly MySqlListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: MySqlListQueryModelData,
    databases: MySqlListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(databases);
    this.totalCount = totalCount;
  }
}
