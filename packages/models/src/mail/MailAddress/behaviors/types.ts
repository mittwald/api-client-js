import { MailAddressData, MailAddressListItemData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface MailAddressBehaviors {
  find: (mailAddressId: string) => Promise<MailAddressData | undefined>;
  query: (
    projectId: string,
  ) => Promise<QueryResponseData<MailAddressListItemData>>;

  delete: (mailAddressId: string) => Promise<void>;

  updateAddress: (mailAddressId: string, address: string) => Promise<void>;
  updatePassword: (mailAddressId: string, password: string) => Promise<void>;
  updateSpamProtection: (
    mailAddressId: string,
    active: boolean,
    autoDeleteSpam: boolean,
    folder: "inbox" | "spam",
    relocationMinSpamScore: number,
  ) => Promise<void>;
  updateQuotaInBytes: (mailAddressId: string, bytes: number) => Promise<void>;
  updateForwards: (mailAddressId: string, forwards: string[]) => Promise<void>;
  updateCatchAll: (mailAddressId: string, enabled: boolean) => Promise<void>;
}
