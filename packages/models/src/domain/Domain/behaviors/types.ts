import type { DateTime } from "luxon";

import type { QueryResponseData } from "../../../base/index.js";
import type { ContractData } from "../../../contract/index.js";
import type { HandleField } from "../../DomainHandle/index.js";
import type {
  DomainTransferableResponse,
  DomainRegistrableResponse,
  VerifyAddressRequest,
  DomainListQueryData,
  DomainListItemData,
  DomainData,
} from "../types.js";

export interface DomainBehaviors {
  updateOwnerContact: (
    domainId: string,
    handleFields: HandleField[],
    avoidEmailConfirmation?: boolean,
  ) => Promise<void>;
  updateAuthCode: (
    domainId: string,
    authCode: string,
  ) => Promise<{ transactionId: string; isAsync: boolean; }>;

  createScheduledDeletion: (
    domainId: string,
    date: DateTime,
    deleteIngresses?: boolean,
  ) => Promise<void>;
  checkDomainTransferable: (
    domain: string,
    authCode?: string,
  ) => Promise<DomainTransferableResponse>;
  getSuggestions: (
    prompt: string,
    domainCount?: number,
    tlds?: string[],
  ) => Promise<string[]>;

  delete: (
    domainId: string,
    transit?: boolean,
    deleteIngresses?: boolean,
  ) => Promise<void>;
  createAuthCode: (
    domainId: string,
  ) => Promise<{ expirationDate?: string; authCode: string; }>;
  list: (
    query?: DomainListQueryData,
  ) => Promise<QueryResponseData<DomainListItemData>>;
  checkDomainRegistrable: (
    domain: string,
  ) => Promise<DomainRegistrableResponse>;
  updateNameservers: (domainId: string, nameservers: string[]) => Promise<void>;
  getLatestScreenshot: (domainName: string) => Promise<{ reference?: string }>;
  updateProjectId: (domainId: string, projectId: string) => Promise<void>;
  verifyAddress: (address: VerifyAddressRequest) => Promise<boolean>;
  getDomainContract: (domainId: string) => Promise<ContractData>;
  cancelScheduledDeletion: (domainId: string) => Promise<void>;
  abortDomainDeclaration: (domainId: string) => Promise<void>;
  find: (id: string) => Promise<DomainData | undefined>;
  verifyCompany: (name: string) => Promise<boolean>;
  resendEmail: (domainId: string) => Promise<void>;
}
