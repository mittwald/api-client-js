import type { AxiosRequestConfig } from "axios";

import type { FinderProfileListItemData, FinderProfileData } from "../types";
import type { QueryResponseData } from "../../../base";
import type { ContractData } from "../../../contract";

export interface FinderProfileBehaviors {
  find: (
    finderProfileId: string,
    options?: AxiosRequestConfig,
  ) => Promise<FinderProfileData | undefined>;
  findContract: (finderProfileId: string) => Promise<ContractData | undefined>;
  list: () => Promise<QueryResponseData<FinderProfileListItemData>>;
}
