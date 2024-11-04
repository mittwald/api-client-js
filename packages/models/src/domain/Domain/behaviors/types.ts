import {
  DomainData,
  DomainListItemData,
  DomainListQueryData,
  DomainTransferableReasons,
  HandleField,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";
import { ContractData } from "../../../contract/index.js";

export interface DomainBehaviors {
  find: (id: string) => Promise<DomainData | undefined>;
  query: (
    query?: DomainListQueryData,
  ) => Promise<QueryResponseData<DomainListItemData>>;

  delete: (domainId: string) => Promise<void>;
  createAuthCode: (domainId: string) => Promise<{ authCode: string }>;
  updateAuthCode: (
    domainId: string,
    authCode: string,
  ) => Promise<{ isAsync: boolean; transactionId: string }>;
  updateNameservers: (
    domainId: string,
    nameservers: [string, string, ...string[]],
  ) => Promise<void>;
  checkDomainRegistrable: (
    domain: string,
  ) => Promise<{ isPremium: boolean; registrable: boolean }>;
  checkDomainTransferable: (
    domain: string,
    authCode: string,
  ) => Promise<{ transferable: boolean; reasons: DomainTransferableReasons }>;
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
  abortDomainDeclaration: (domainId: string) => Promise<void>;
  getDomainContract: (domainId: string) => Promise<ContractData>;
  getLatestScreenshot: (
    domainId: string,
    domainName: string,
    path: string,
  ) => Promise<{ reference?: string }>;
}
