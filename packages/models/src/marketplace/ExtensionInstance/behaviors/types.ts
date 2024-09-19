import {
  ExtensionInstanceConsentToScopesRequestData,
  ExtensionInstanceCreateRequestData,
  ExtensionInstanceData,
  ExtensionInstanceListItemData,
  ExtensionInstanceListQuery,
} from "../types.js";

export interface ExtensionInstanceBehaviors {
  find: (id: string) => Promise<ExtensionInstanceData | undefined>;

  list: (
    query: ExtensionInstanceListQuery,
  ) => Promise<ExtensionInstanceListItemData[]>;

  create: (data: ExtensionInstanceCreateRequestData) => Promise<{ id: string }>;

  consentToScopes: (
    extensionInstanceId: string,
    data: ExtensionInstanceConsentToScopesRequestData,
  ) => Promise<void>;

  enable: (extensionInstanceId: string) => Promise<void>;
  disable: (extensionInstanceId: string) => Promise<void>;

  delete: (extensionInstanceId: string) => Promise<void>;
}
