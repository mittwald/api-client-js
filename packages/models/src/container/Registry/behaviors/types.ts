import type { QueryResponseData } from "../../../base/index.js";
import type {
  RegistryCreateRequestData,
  RegistryUpdateRequestData,
  RegistryListQueryData,
  RegistryListItemData,
  RegistryData,
} from "../types.js";

export interface RegistryBehaviors {
  list: (
    projectId: string,
    query?: RegistryListQueryData,
  ) => Promise<QueryResponseData<RegistryListItemData>>;

  create: (
    projectId: string,
    data: RegistryCreateRequestData,
  ) => Promise<{ id: string }>;

  update: (
    registryId: string,
    data: RegistryUpdateRequestData,
  ) => Promise<void>;

  find: (registryId: string) => Promise<RegistryData | undefined>;

  delete: (registryId: string) => Promise<void>;
}
