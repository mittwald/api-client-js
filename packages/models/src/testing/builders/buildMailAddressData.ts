import type { MailAddressData } from "../../mail/MailAddress/types.js";

type Mailbox = NonNullable<MailAddressData["mailbox"]>;

export function buildMailbox(overrides?: Partial<Mailbox>): Mailbox {
  return {
    spamProtection: {
      relocationMinSpamScore: 1,
      autoDeleteSpam: false,
      folder: "spam",
      active: false,
    },
    storageInBytes: {
      current: { updatedAt: "2024-01-01T00:00:00.000Z", value: 0 },
      limit: 1073741824,
    },
    passwordUpdatedAt: "2024-01-01T00:00:00.000Z",
    mailsystemSettings: { rateLimitId: "rl-1" },
    sendingEnabled: true,
    name: "info",
    ...overrides,
  };
}

export function buildMailAddressData(
  overrides?: Partial<MailAddressData>,
): MailAddressData {
  return {
    archive: { quota: 1073741824, active: false, usedBytes: 0 },
    updatedAt: "2024-01-01T00:00:00.000Z",
    autoResponder: { active: false },
    address: "info@example.com",
    isBackupInProgress: false,
    receivingDisabled: false,
    projectId: "project-id",
    forwardAddresses: [],
    id: "mailaddr-id",
    isArchived: false,
    isCatchAll: false,
    ...overrides,
  };
}
