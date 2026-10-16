import type { AxiosRequestConfig } from "axios";

import type { QueryResponseData } from "../../../base/index.js";
import type {
  FinderProfileRequestListItemData,
  FinderProfileRequestRequestData,
  FinderProfileRequestData,
} from "../types.js";

export interface FinderProfileRequestBehaviors {
  find: (
    customerId: string,
    options?: AxiosRequestConfig,
  ) => Promise<FinderProfileRequestData | undefined>;
  create: (
    customerId: string,
    data: FinderProfileRequestRequestData,
  ) => Promise<void>;
  list: () => Promise<QueryResponseData<FinderProfileRequestListItemData>>;
}
