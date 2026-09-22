import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Project } from "../../project/index.js";
import type { Bytes } from "../../common/index.js";

export type RedisData =
  MittwaldAPIV2.Operations.DatabaseGetRedisDatabase.ResponseData;

export type RedisListItemData =
  MittwaldAPIV2.Operations.DatabaseListRedisDatabases.ResponseData[number];

export type RedisListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Get.Parameters.Query;

export type RedisListQueryModelData = {
  project: Project | string;
} & RedisListQueryData;

export type RedisCreateRequestData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdRedisDatabases.Post.Parameters.RequestBody;

export type RedisPatchRequestData =
  MittwaldAPIV2.Paths.V2RedisDatabasesRedisDatabaseId.Patch.Parameters.RequestBody;

export type RedisVersionData =
  MittwaldAPIV2.Operations.DatabaseListRedisVersions.ResponseData;

export interface RedisConfiguration {
  maxMemoryPolicy?: RedisMaxMemoryPolicy;
  persistent: boolean;
  maxMemory?: Bytes;
}

export type RedisMaxMemoryPolicy =
  | "volatile-random"
  | "allkeys-random"
  | "volatile-lru"
  | "volatile-lfu"
  | "volatile-ttl"
  | "allkeys-lru"
  | "allkeys-lfu"
  | "noeviction";

export type RedisConfigurationUpdateRequestData =
  RedisPatchRequestData["configuration"];
