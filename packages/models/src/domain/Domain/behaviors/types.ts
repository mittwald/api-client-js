import {
  DomainData,
  DomainListItemData,
  DomainListQueryData,
  HandleField,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface DomainBehaviors {
  find: (id: string) => Promise<DomainData | undefined>;
  query: (
    query?: DomainListQueryData,
  ) => Promise<QueryResponseData<DomainListItemData>>;

  delete: (domainId: string) => Promise<void>;
  createAuthCode: (domainId: string) => Promise<{ authCode: string }>;
  updateNameservers: (
    domainId: string,
    nameservers: [string, string, ...string[]],
  ) => Promise<void>;
  checkDomainRegistrable: (
    domain: string,
  ) => Promise<{ isPremium: boolean; registrable: boolean }>;
  resendEmail: (domainId: string) => Promise<void>;
  updateOwnerContact: (
    domainId: string,
    handleFields: [HandleField, ...HandleField[]],
  ) => Promise<void>;
  getSuggestions: (
    prompt: string,
    domainCount?: number,
    tlds?: string[],
  ) => Promise<string[]>;
}
