import type { AxiosRequestConfig } from "axios";

import type { FileUploadTokenData } from "../../../index.js";
import type { QueryResponseData } from "../../../base/index.js";
import type {
  CustomerExpressInterestToContributeRequestData,
  CustomerCreateRequestData,
  CustomerPaymentMethodData,
  CustomerUpdateRequestData,
  CustomerListQueryData,
  CustomerListItemData,
  CustomerData,
} from "../types.js";

export interface CustomerBehaviors {
  expressInterestToContribute: (
    customerId: string,
    data: CustomerExpressInterestToContributeRequestData,
  ) => Promise<{ id: string }>;
  findMarketplacePaymentMethod: (
    customerId: string,
  ) => Promise<CustomerPaymentMethodData | "noAccess" | undefined>;
  updateMarketplacePaymentMethod: (
    customerId: string,
    customReturnUrl?: string,
  ) => Promise<string | undefined>;
  find: (
    customerId: string,
    options?: AxiosRequestConfig,
  ) => Promise<CustomerData | undefined>;
  createRecommendationSuggestion: (
    customerId: string,
    suggestion: string,
  ) => Promise<void>;

  list: (
    query?: CustomerListQueryData,
  ) => Promise<QueryResponseData<CustomerListItemData>>;

  update: (
    customerId: string,
    data: CustomerUpdateRequestData,
  ) => Promise<void>;

  createAvatarUploadToken: (customerId: string) => Promise<FileUploadTokenData>;

  getBillingPortalLink: (customerId: string) => Promise<string | undefined>;

  create: (data: CustomerCreateRequestData) => Promise<{ id: string }>;
  removeAvatar: (customerId: string) => Promise<void>;

  delete: (customerId: string) => Promise<void>;
}
