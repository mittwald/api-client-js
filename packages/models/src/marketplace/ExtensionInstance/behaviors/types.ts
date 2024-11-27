import {
  ExtensionInstanceConsentToScopesRequestData,
  ExtensionInstanceCreateRequestData,
  ExtensionInstanceData,
  ExtensionInstanceListItemData,
  ExtensionInstanceListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface ExtensionInstanceBehaviors {
  find: (id: string) => Promise<ExtensionInstanceData | undefined>;

  list: (
    query: ExtensionInstanceListQueryData,
  ) => Promise<QueryResponseData<ExtensionInstanceListItemData>>;

  create: (data: ExtensionInstanceCreateRequestData) => Promise<{ id: string }>;

  consentToScopes: (
    extensionInstanceId: string,
    data: ExtensionInstanceConsentToScopesRequestData,
  ) => Promise<void>;

  enable: (extensionInstanceId: string) => Promise<void>;
  disable: (extensionInstanceId: string) => Promise<void>;

  delete: (extensionInstanceId: string) => Promise<void>;
}
