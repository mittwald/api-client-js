import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { RedisBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount, anyStatus403 } from "../../../base/index.js";

export const apiRedisBehaviors = (
  client: MittwaldAPIV2Client,
): RedisBehaviors => ({
  find: async (redisDatabaseId) => {
    const response = await client.database.getRedisDatabase({
      redisDatabaseId,
    });
    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: getRedisDatabase omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [anyStatus403, 404]);
  },

  list: async (projectId) => {
    const response = await client.database.listRedisDatabases({
      projectId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  updateConfiguration: async (redisDatabaseId, data) => {
    const response = await client.database.patchRedisDatabase({
      data: { configuration: data },
      redisDatabaseId,
    });
    validateResponse(response, 204);
  },

  updateDescription: async (redisDatabaseId, description) => {
    const response = await client.database.patchRedisDatabase({
      data: { description },
      redisDatabaseId,
    });
    validateResponse(response, 204);
  },

  updateVersion: async (redisDatabaseId, version) => {
    const response = await client.database.patchRedisDatabase({
      data: { version },
      redisDatabaseId,
    });
    validateResponse(response, 204);
  },

  listVersions: async (projectId) => {
    const response = await client.database.listRedisVersions({
      queryParameters: { projectId },
    });
    validateResponse(response, 200);
    return response.data;
  },

  create: async (projectId, data) => {
    const response = await client.database.createRedisDatabase({
      projectId,
      data,
    });
    validateResponse(response, 201);
    return response.data;
  },

  delete: async (redisDatabaseId) => {
    const response = await client.database.deleteRedisDatabase({
      redisDatabaseId,
    });
    validateResponse(response, 204);
  },
});
