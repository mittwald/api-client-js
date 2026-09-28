import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { SshUserBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiSshUserBehaviors = (
  client: MittwaldAPIV2Client,
): SshUserBehaviors => ({
  create: async (projectId, data) => {
    const response = await client.sshsftpUser.sshUserCreateSshUser({
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

  update: async (sshUserId, data) => {
    const response = await client.sshsftpUser.sshUserUpdateSshUser({
      sshUserId,
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
    const response = await client.sshsftpUser.sshUserListSshUsers({
      queryParameters: query,
      projectId,
    });

    validateResponse(response, 200);

    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },

  find: async (sshUserId) => {
    const response = await client.sshsftpUser.sshUserGetSshUser({ sshUserId });

    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [403, 404]);
  },

  delete: async (sshUserId) => {
    const response = await client.sshsftpUser.sshUserDeleteSshUser({
      sshUserId,
    });

    validateResponse(response, 204);
  },
});
