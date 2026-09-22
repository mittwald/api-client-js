import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { SftpUserBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiSftpUserBehaviors = (
  client: MittwaldAPIV2Client,
): SftpUserBehaviors => ({
  create: async (projectId, data) => {
    const response = await client.sshsftpUser.sftpUserCreateSftpUser({
      projectId,
      data,
    });

    validateResponse(response, 201, {
      validationError: {
        pathMappings: {
          "*comment*": "sshKey",
          "*key*": "sshKey",
        },
      },
    });

    return response.data;
  },

  update: async (sftpUserId, data) => {
    const response = await client.sshsftpUser.sftpUserUpdateSftpUser({
      sftpUserId,
      data,
    });

    validateResponse(response, 204, {
      validationError: {
        pathMappings: {
          "*comment*": "sshKey",
          "*key*": "sshKey",
        },
      },
    });
  },

  list: async (projectId, query) => {
    const response = await client.sshsftpUser.sftpUserListSftpUsers({
      queryParameters: query,
      projectId,
    });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (sftpUserId) => {
    const response = await client.sshsftpUser.sftpUserGetSftpUser({
      sftpUserId,
    });

    if (response.status === 200) {
      return response.data;
    }

    validateResponse(response, [403, 404]);
  },

  delete: async (sftpUserId) => {
    const response = await client.sshsftpUser.sftpUserDeleteSftpUser({
      sftpUserId,
    });

    validateResponse(response, 204);
  },
});
