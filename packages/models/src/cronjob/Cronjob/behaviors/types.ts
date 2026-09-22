import type { QueryResponseData } from "../../../base/index.js";
import type {
  CronjobCreateRequestData,
  CronjobUpdateRequestData,
  CronjobListQueryData,
  CronjobListItemData,
  CronjobData,
} from "../types.js";

export interface CronjobBehaviors {
  list: (
    projectId: string,
    query?: CronjobListQueryData,
  ) => Promise<QueryResponseData<CronjobListItemData>>;

  create: (
    projectId: string,
    data: CronjobCreateRequestData,
  ) => Promise<{ id: string }>;

  update: (cronjobId: string, data: CronjobUpdateRequestData) => Promise<void>;

  find: (cronjobId: string) => Promise<CronjobData | undefined>;

  trigger: (cronjobId: string) => Promise<void>;

  delete: (cronjobId: string) => Promise<void>;

  getTimeZones: () => Promise<string[]>;
}
