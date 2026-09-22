import type { MailSettingsData } from "../../mail/MailSettings/types.js";

export function buildMailSettingsData(
  overrides?: Partial<MailSettingsData>,
): MailSettingsData {
  return {
    projectId: "project-id",
    blacklist: [],
    whitelist: [],
    ...overrides,
  };
}
