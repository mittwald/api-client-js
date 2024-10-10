import { MailSettingsData } from "../types.js";

export interface MailSettingsBehaviors {
  find: (projectId: string) => Promise<MailSettingsData | undefined>;

  updateAllowlist: (projectId: string, allowList: string[]) => Promise<void>;
  updateBlocklist: (projectId: string, blockList: string[]) => Promise<void>;
}
