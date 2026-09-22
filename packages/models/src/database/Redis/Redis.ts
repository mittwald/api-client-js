import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import semverCompare from "semver-compare";
import { omit } from "remeda";

import type { DatabaseType } from "../types";
import type {
  RedisConfigurationUpdateRequestData,
  RedisListQueryModelData,
  RedisCreateRequestData,
  RedisMaxMemoryPolicy,
  RedisConfiguration,
  RedisListItemData,
  RedisData,
} from "./types";

import { AppInstallation } from "../../app/AppInstallation/AppInstallation";
import assertObjectFound from "../../base/lib/assertObjectFound";
import { AggregateMetaData, Bytes } from "../../common";
import { Project } from "../../project/internal";
import { isNewerVersion } from "../lib";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "Redis",
})
export class Redis extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "database",
    "redisdb",
  );
  public static async create(project: Project, data: RedisCreateRequestData) {
    const { id } = await config.behaviors.redis.create(project.id, data);
    return new Redis(id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.redis.find(id);
    if (data !== undefined) {
      return new RedisDetailed(data);
    }
  }

  public static async get(id: string) {
    const database = await this.find(id);
    assertObjectFound(database, Redis, id);
    return database;
  }

  public static async getLatestVersion(project: Project) {
    const versions = await Redis.listVersions(project);
    return versions[0];
  }

  public static async listVersions(project: Project) {
    const versions = await config.behaviors.redis.listVersions(project.id);

    return versions
      .filter((v) => !v.disabled)
      .sort((a, b) => semverCompare(b.number, a.number));
  }

  public static ofId(id: string) {
    return new Redis(id);
  }

  public static query(query: RedisListQueryModelData) {
    return new RedisListQuery(query);
  }

  public async delete() {
    await config.behaviors.redis.delete(this.id);
  }

  public findCommon(): Promise<RedisCommon | undefined> | RedisCommon {
    return this instanceof RedisCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<RedisDetailed | undefined> {
    return Redis.find(this.id);
  }

  public getCommon(): Promise<RedisCommon> | RedisCommon {
    return this instanceof RedisCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<RedisDetailed> {
    return Redis.get(this.id);
  }

  public async updateConfiguration(data: RedisConfigurationUpdateRequestData) {
    await config.behaviors.redis.updateConfiguration(this.id, data);
  }

  public async updateDescription(description: string) {
    await config.behaviors.redis.updateDescription(this.id, description);
  }

  public async updateVersion(version: string) {
    await config.behaviors.redis.updateVersion(this.id, version);
  }
}

export class RedisCommon extends WithData<RedisListItemData | RedisData>()(
  Redis,
) {
  public readonly configuration?: RedisConfiguration;
  public readonly connectionString: string;
  public override readonly data: RedisListItemData | RedisData;
  public readonly description: string;
  public readonly hostname: string;
  public readonly linkedAppInstallations: AppInstallation[];
  public readonly name: string;
  public readonly port: number;
  public readonly project: Project;
  public readonly storageUsage: Bytes;
  public readonly type: DatabaseType;
  public readonly version: string;

  public constructor(data: RedisListItemData | RedisData) {
    super(data.id);
    this.data = data;
    this.name = data.name;
    this.description = data.description;
    this.version = data.version;
    this.type = "Redis";
    this.storageUsage = Bytes.of(data.storageUsageInBytes, "bytes");
    if (data.configuration) {
      this.configuration = {
        maxMemory: data.configuration.maxMemory
          ? Bytes.of(parseInt(data.configuration.maxMemory), "bytes")
          : undefined,
        maxMemoryPolicy: data.configuration.maxMemoryPolicy as
          | RedisMaxMemoryPolicy
          | undefined,
        persistent: !!data.configuration.persistent,
      };
    }
    this.hostname = data.hostname;
    this.port = data.port;
    this.connectionString = `redis://${data.hostname}:${data.port}`;

    this.linkedAppInstallations =
      data.finalizers?.map((f) =>
        AppInstallation.ofId(f.split(":")?.[2] ?? ""),
      ) ?? [];
    this.project = Project.ofId(data.projectId);
  }

  public async getAvailableVersionUpdate() {
    const latestVersion = await Redis.getLatestVersion(this.project);
    return latestVersion && isNewerVersion(this.version, latestVersion)
      ? latestVersion
      : undefined;
  }
}

export class RedisDetailed extends RedisCommon {
  public override readonly data: RedisData;

  public constructor(data: RedisData) {
    super(data);
    this.data = data;
  }
}

export class RedisListItem extends RedisCommon {
  public override readonly data: RedisListItemData;

  public constructor(data: RedisListItemData) {
    super(data);
    this.data = data;
  }
}

export class RedisListQuery extends ListQueryModel<RedisListQueryModelData> {
  public constructor(query: RedisListQueryModelData) {
    super(query, { dependencies: [extractId(query.project)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.redis.list(
      extractId(this.query.project),
      omit(this.query, ["project"]),
    );
    return new RedisList(
      this.query,
      items
        .map((d) => new RedisListItem(d))
        .sort((a, b) => a.description.localeCompare(b.description)),
      totalCount,
    );
  }

  public refine(query: Partial<RedisListQueryModelData> = {}) {
    return new RedisListQuery({
      ...this.query,
      ...query,
    });
  }}

export class RedisList extends WithListData<RedisListItem>()(RedisListQuery) {
  public override readonly items: readonly RedisListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: RedisListQueryModelData,
    databases: RedisListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(databases);
    this.totalCount = totalCount;
  }
}
