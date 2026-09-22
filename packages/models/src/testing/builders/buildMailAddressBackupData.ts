import type { MailAddressBackupData } from "../../mail/MailAddressBackup/types";

export function buildMailAddressBackupData(
  overrides?: Partial<MailAddressBackupData>,
): MailAddressBackupData {
  return { name: "20240102", ...overrides };
}
