import type { AxiosRequestConfig } from "axios";

import type { QueryResponseData } from "../../../base";
import type {
  ExtensionInstanceConsentToScopesRequestData,
  ExtensionInstanceCreateRequestData,
  ExtensionInstanceRetrievalKeyData,
  ExtensionInstanceListQueryData,
  OpenCustomerExtensionOrderData,
  ExtensionInstanceContractData,
  ExtensionInstanceListItemData,
  OpenProjectExtensionOrderData,
  ExtensionSessionTokenData,
  ExtensionInstanceData,
} from "../types";

export interface ExtensionInstanceBehaviors {
  list: (
    query: ExtensionInstanceListQueryData,
    options?: AxiosRequestConfig,
  ) => Promise<QueryResponseData<ExtensionInstanceListItemData>>;

  findContract: (
    extensionInstanceId: string,
    requestConfig?: AxiosRequestConfig,
  ) => Promise<ExtensionInstanceContractData | undefined>;

  consentToScopes: (
    extensionInstanceId: string,
    data: ExtensionInstanceConsentToScopesRequestData,
  ) => Promise<void>;

  generateSessionToken: (
    extensionInstanceId: string,
    sessionId: string,
  ) => Promise<ExtensionSessionTokenData>;

  findOpenCustomerOrders: (
    customerId: string,
  ) => Promise<OpenCustomerExtensionOrderData[] | undefined>;
  findOpenProjectOrders: (
    projectId: string,
  ) => Promise<OpenProjectExtensionOrderData[] | undefined>;

  createRetrievalKey: (
    extensionInstanceId: string,
  ) => Promise<ExtensionInstanceRetrievalKeyData>;

  scheduleVariantSwitch: (
    extensionInstanceId: string,
    variantKey?: string,
  ) => Promise<void>;

  terminate: (
    extensionInstanceId: string,
    instantTermination: boolean,
  ) => Promise<void>;

  updateContract: (
    extensionInstanceId: string,
    variantKey?: string,
  ) => Promise<void>;

  find: (
    extensionInstanceId: string,
  ) => Promise<ExtensionInstanceData | undefined>;

  create: (data: ExtensionInstanceCreateRequestData) => Promise<{ id: string }>;

  cancelVariantSwitch: (extensionInstanceId: string) => Promise<void>;
  cancelTermination: (extensionInstanceId: string) => Promise<void>;

  disable: (extensionInstanceId: string) => Promise<void>;

  enable: (extensionInstanceId: string) => Promise<void>;

  delete: (extensionInstanceId: string) => Promise<void>;
}
