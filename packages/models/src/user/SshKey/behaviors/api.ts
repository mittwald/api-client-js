import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { SshKeyBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";
import { resolveTotalCount } from "../../../base/index.js";

export const apiSshKeyBehaviors = (
  client: MittwaldAPIV2Client,
): SshKeyBehaviors => ({
  list: async () => {
    const response = await client.user.listSshKeys();
    validateResponse(response, 200);
    const items = response.data.sshKeys ?? [];
    return {
      totalCount: resolveTotalCount({ ...response, data: items }),
      items,
    };
  },

  find: async (sshKeyId) => {
    const response = await client.user.getSshKey({ sshKeyId });

    if (response.status === 200) {
      return response.data.sshKey;
    }
    validateResponse(response, 404);
  },

  update: async (sshKeyId, data) => {
    const response = await client.user.editSshKey({ sshKeyId, data });
    validateResponse(response, 204);
  },

  delete: async (sshKeyId) => {
    const response = await client.user.deleteSshKey({ sshKeyId });
    validateResponse(response, 204);
  },

  create: async (data) => {
    const response = await client.user.createSshKey({ data });

    validateResponse(response, 201);
  },
});
