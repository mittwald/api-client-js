import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { MySqlBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { anyStatus403 } from "../../../base/api/typeFixes";
import { resolveTotalCount } from "../../../base";

export const apiMySqlBehaviors = (
  client: MittwaldAPIV2Client,
): MySqlBehaviors => ({
  find: async (mysqlDatabaseId) => {
    const response = await client.database.getMysqlDatabase({
      mysqlDatabaseId,
    });
    if (response.status === 200) {
      return response.data;
    }
    // API-DRIFT: getMysqlDatabase omits 403 in its generated response type, so anyStatus403 (403 as any) is passed (resolve: use the literal 403 once the client type declares it)
    validateResponse(response, [anyStatus403, 404]);
  },

  create: async (projectId, data) => {
    const response = await client.database.createMysqlDatabase({
      projectId,
      data,
    });

    validateResponse(response, 201, {
      validationError: {
        pathMappings: {
          "*password*": "password",
        },
      },
    });
    return response.data;
  },

  listCharsets: async (query) => {
    const response = await client.database.listMysqlCharsets({
      queryParameters: query,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  list: async (projectId) => {
    const response = await client.database.listMysqlDatabases({
      projectId,
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  updateDefaultCharset: async (mysqlDatabaseId, data) => {
    const response = await client.database.patchMysqlDatabase({
      data: { characterSettings: data },
      mysqlDatabaseId,
    });
    validateResponse(response, 204);
  },

  updateDescription: async (mysqlDatabaseId, description) => {
    const response = await client.database.patchMysqlDatabase({
      data: { description },
      mysqlDatabaseId,
    });
    validateResponse(response, 204);
  },

  updateVersion: async (mysqlDatabaseId, version) => {
    const response = await client.database.patchMysqlDatabase({
      data: { version },
      mysqlDatabaseId,
    });
    validateResponse(response, 204);
  },

  copyDatabase: async (mysqlDatabaseId, data) => {
    const response = await client.database.copyMysqlDatabase({
      mysqlDatabaseId,
      data,
    });
    validateResponse(response, 201);
  },

  delete: async (mysqlDatabaseId) => {
    const response = await client.database.deleteMysqlDatabase({
      mysqlDatabaseId,
    });
    validateResponse(response, 204);
  },

  listVersions: async () => {
    const response = await client.database.listMysqlVersions();
    validateResponse(response, 200);
    return response.data;
  },
});
