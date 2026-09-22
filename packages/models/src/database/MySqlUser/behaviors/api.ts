import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { MySqlUserBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

export const apiMySqlUserBehaviors = (
  client: MittwaldAPIV2Client,
): MySqlUserBehaviors => ({
  list: async (databaseId) => {
    const response = await client.database.listMysqlUsers({
      mysqlDatabaseId: databaseId,
    });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  create: async (mySqlDatabaseId, data) => {
    const response = await client.database.createMysqlUser({
      mysqlDatabaseId: mySqlDatabaseId,
      data,
    });

    validateResponse(response, 201);
    return response.data;
  },

  find: async (mysqlUserId) => {
    const response = await client.database.getMysqlUser({ mysqlUserId });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, 404);
  },

  getPhpMyAdminUrl: async (mysqlUserId) => {
    const response = await client.database.getMysqlUserPhpMyAdminUrl({
      mysqlUserId,
    });

    validateResponse(response, 200);

    return response.data.url;
  },

  updatePassword: async (mysqlUserId, password) => {
    const response = await client.database.updateMysqlUser({
      data: { password },
      mysqlUserId,
    });
    validateResponse(response, 204);
  },

  update: async (mysqlUserId, data) => {
    const response = await client.database.updateMysqlUser({
      mysqlUserId,
      data,
    });
    validateResponse(response, 204);
  },

  delete: async (mysqlUserId) => {
    const response = await client.database.deleteMysqlUser({ mysqlUserId });
    validateResponse(response, 204);
  },
});
