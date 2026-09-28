import type { MailAddressBackupData } from "../../mail/MailAddressBackup/types.js";

export function buildMailAddressBackupData(
  overrides?: Partial<MailAddressBackupData>,
): MailAddressBackupData {
  return { name: "20240102", ...overrides };
}
