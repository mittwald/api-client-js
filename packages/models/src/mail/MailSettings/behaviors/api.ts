import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { MailSettingsBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";

export const apiMailSettingsBehaviors = (
  client: MittwaldAPIV2Client,
): MailSettingsBehaviors => ({
  updateAllowlist: async (projectId, allowList) => {
    const response = await client.mail.updateProjectMailSetting({
      data: { whitelist: allowList },
      mailSetting: "whitelist",
      projectId,
    });

    validateResponse(response, 204, {
      validationError: {
        pathMappings: {
          "*entry*": "address",
        },
      },
    });
  },
  updateBlocklist: async (projectId, blocklist) => {
    const response = await client.mail.updateProjectMailSetting({
      data: { blacklist: blocklist },
      mailSetting: "blacklist",
      projectId,
    });

    validateResponse(response, 204, {
      validationError: {
        pathMappings: {
          "*entry*": "address",
        },
      },
    });
  },
  find: async (projectId) => {
    const response = await client.mail.listProjectMailSettings({ projectId });
    if (response.status === 200) {
      return response.data;
    }
    validateResponse(response, [404]);
  },
});
