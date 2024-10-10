import {
  assertStatus,
  MittwaldAPIV2Client,
  assertOneOfStatus,
} from "@mittwald/api-client";
import { MailSettingsBehaviors } from "./types.js";
export const apiMailSettingsBehaviors = (
  client: MittwaldAPIV2Client,
): MailSettingsBehaviors => ({
  find: async (projectId: string) => {
    const response = await client.mail.listProjectMailSettings({ projectId });
    if (response.status === 200) {
      return response.data;
    }
    assertOneOfStatus(response, [404]);
  },
  updateAllowlist: async (projectId: string, allowList: string[]) => {
    const response = await client.mail.updateProjectMailSetting({
      projectId,
      mailSetting: "whitelist",
      data: { whitelist: allowList },
    });
    assertStatus(response, 204);
  },
  updateBlocklist: async (projectId: string, blocklist: string[]) => {
    const response = await client.mail.updateProjectMailSetting({
      projectId,
      mailSetting: "blacklist",
      data: { blacklist: blocklist },
    });
    assertStatus(response, 204);
  },
});
