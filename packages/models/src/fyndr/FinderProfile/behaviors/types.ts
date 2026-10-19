import type { AxiosRequestConfig } from "axios";

import type { FinderProfileListItemData, FinderProfileData } from "../types.js";
import type { QueryResponseData } from "../../../base/index.js";
import type { ContractData } from "../../../contract/index.js";

export interface FinderProfileBehaviors {
  find: (
    finderProfileId: string,
    options?: AxiosRequestConfig,
  ) => Promise<FinderProfileData | undefined>;
  findContract: (finderProfileId: string) => Promise<ContractData | undefined>;
  list: () => Promise<QueryResponseData<FinderProfileListItemData>>;
}
