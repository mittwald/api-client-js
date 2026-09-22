import type { MailSettingsData } from "../types.js";

export interface MailSettingsBehaviors {
  updateAllowlist: (projectId: string, allowList: string[]) => Promise<void>;

  updateBlocklist: (projectId: string, blockList: string[]) => Promise<void>;
  find: (projectId: string) => Promise<MailSettingsData | undefined>;
}
