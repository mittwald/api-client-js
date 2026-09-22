import type { AxiosRequestConfig } from "axios";

import type { FileDownloadTokenData, FileUploadTokenData } from "../../../file/index.js";
import type { QueryResponseData } from "../../../base/index.js";
import type {
  ContributorListIncomingInvoiceQueryData,
  ContributorBillingInformationData,
  ContributorIncomingInvoiceData,
  ContributorOnBehalfInvoiceData,
  ContributorUpdateRequestData,
  ContributorListQueryData,
  ContributorListItemData,
  OwnContributorData,
  ContributorData,
} from "../types.js";

export interface ContributorBehaviors {
  listIncomingInvoices: (
    contributorId: string,
    queryParameters?: ContributorListIncomingInvoiceQueryData,
  ) => Promise<{
    items: ContributorIncomingInvoiceData[];
    totalCount: number;
  }>;

  getFileAccessToken: (
    contributorId: string,
    contributorReceiptId: string,
    requestConfig?: AxiosRequestConfig,
  ) => Promise<FileDownloadTokenData>;

  find: (
    contributorId: string,
    options?: AxiosRequestConfig,
  ) => Promise<OwnContributorData | ContributorData | undefined>;

  list: (
    query?: ContributorListQueryData,
  ) => Promise<QueryResponseData<ContributorListItemData>>;

  getBillingInformation: (
    contributorId: string,
  ) => Promise<ContributorBillingInformationData>;

  listOnBehalfInvoices: (
    contributorId: string,
  ) => Promise<ContributorOnBehalfInvoiceData[]>;

  update: (
    contributorId: string,
    data: ContributorUpdateRequestData,
  ) => Promise<void>;

  createAvatarUploadToken: (
    contributorId: string,
  ) => Promise<FileUploadTokenData>;

  getStripeOnboardingLink: (
    contributorId: string,
  ) => Promise<string | undefined>;

  getStripeLoginLink: (contributorId: string) => Promise<string | undefined>;

  contributorRequestVerification: (contributorId: string) => Promise<void>;

  removeAvatar: (contributorId: string) => Promise<undefined | void>;
}
