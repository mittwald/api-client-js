import type { MailSettingsData } from "../../mail/MailSettings/types";

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
