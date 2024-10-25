import { MailAddressData, MailAddressListItemData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface MailAddressBehaviors {
  find: (mailAddressId: string) => Promise<MailAddressData | undefined>;
  query: (
    projectId: string,
  ) => Promise<QueryResponseData<MailAddressListItemData>>;

  delete: (mailAddressId: string) => Promise<void>;

  create: (
    projectId: string,
    mailAddress: string,
    password: string,
    isCatchAll: boolean,
    enableSpamProtection: boolean,
    quotaInBytes: number,
  ) => Promise<{ id: string }>;
  createForward: (
    projectId: string,
    address: string,
    forwardAddresses: string[],
  ) => Promise<{ id: string }>;

  updateAddress: (mailAddressId: string, address: string) => Promise<void>;
  updatePassword: (mailAddressId: string, password: string) => Promise<void>;
  updateSpamProtection: (
    mailAddressId: string,
    active: boolean,
    autoDeleteSpam: boolean,
    folder: "inbox" | "spam",
    relocationMinSpamScore: number,
  ) => Promise<void>;
  updateQuota: (mailAddressId: string, bytes: number) => Promise<void>;
  updateForwardAddresses: (
    mailAddressId: string,
    forwardAddresses: string[],
  ) => Promise<void>;
  updateCatchAll: (mailAddressId: string, active: boolean) => Promise<void>;
  updateAutoResponder: (
    mailAddressId: string,
    active: boolean,
    expiresAt: Date,
    message: string,
    startsAt: Date,
  ) => Promise<void>;
}
