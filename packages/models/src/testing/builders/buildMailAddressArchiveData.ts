import type { MailAddressArchiveData } from "../../mail/MailAddressArchive/types";

export function buildMailAddressArchiveData(
  overrides?: Partial<MailAddressArchiveData>,
): MailAddressArchiveData {
  return {
    usedBytes: 536870912,
    quota: 1073741824,
    active: true,
    ...overrides,
  };
}
