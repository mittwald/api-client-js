import type { MailAddressBackupData } from "../../MailAddressBackup/index.js";
import type { QueryResponseData } from "../../../base/index.js";
import type {
  AutoresponderUpdateRequestData,
  SpamProtectionRequestData,
  MailAddressListQueryData,
  MailAddressListItemData,
  MailAddressRequestData,
  ForwardRequestData,
  MailAddressData,
  EmailOrigin,
} from "../types.js";

export interface MailAddressBehaviors {
  list: (
    projectId: string,
    query?: MailAddressListQueryData,
  ) => Promise<QueryResponseData<MailAddressListItemData>>;
  updateAutoResponder: (
    mailAddressId: string,
    data: AutoresponderUpdateRequestData,
  ) => Promise<void>;

  listForUser: (
    query?: MailAddressListQueryData,
  ) => Promise<QueryResponseData<MailAddressListItemData>>;

  createMailAddress: (
    projectId: string,
    data: MailAddressRequestData,
  ) => Promise<{ id: string }>;

  updateSpamProtection: (
    mailAddressId: string,
    data: SpamProtectionRequestData,
  ) => Promise<void>;
  updateForwardAddresses: (
    mailAddressId: string,
    forwardAddresses: string[],
  ) => Promise<void>;

  createForward: (
    projectId: string,
    data: ForwardRequestData,
  ) => Promise<{ id: string }>;
  listBackups: (
    mailAddressId: string,
  ) => Promise<QueryResponseData<MailAddressBackupData>>;
  requestRateLimitChange: (
    mailAddressId: string,
    rateLimitId: string,
  ) => Promise<void>;
  updatePassword: (mailAddressId: string, password: string) => Promise<void>;
  updateCatchAll: (mailAddressId: string, active: boolean) => Promise<void>;
  restoreBackup: (mailAddressId: string, backupId: string) => Promise<void>;
  updateAddress: (mailAddressId: string, address: string) => Promise<void>;
  find: (mailAddressId: string) => Promise<MailAddressData | undefined>;
  updateQuota: (mailAddressId: string, bytes: number) => Promise<void>;
  disableMailArchive: (mailArchiveId: string) => Promise<void>;
  detectPhishingMail: (input: File) => Promise<EmailOrigin>;
  delete: (mailAddressId: string) => Promise<void>;
}
