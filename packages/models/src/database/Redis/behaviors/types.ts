import type { QueryResponseData } from "../../../base";
import type {
  RedisConfigurationUpdateRequestData,
  RedisCreateRequestData,
  RedisListQueryData,
  RedisListItemData,
  RedisVersionData,
  RedisData,
} from "../types";

export interface RedisBehaviors {
  updateConfiguration: (
    redisDatabaseId: string,
    data: RedisConfigurationUpdateRequestData,
  ) => Promise<void>;

  list: (
    projectId: string,
    query?: RedisListQueryData,
  ) => Promise<QueryResponseData<RedisListItemData>>;

  create: (
    projectId: string,
    data: RedisCreateRequestData,
  ) => Promise<{ id: string }>;

  updateDescription: (
    redisDatabaseId: string,
    description: string,
  ) => Promise<void>;

  updateVersion: (redisDatabaseId: string, version: string) => Promise<void>;

  find: (redisDatabaseId: string) => Promise<RedisData | undefined>;

  listVersions: (projectId: string) => Promise<RedisVersionData>;

  delete: (redisDatabaseId: string) => Promise<void>;
}
