import type { AxiosRequestConfig } from "axios";

import type { QueryResponseData } from "../../../base/index.js";
import type {
  ContractTerminationCreateRequestData,
  ContractListQueryData,
  ContractListItemData,
  ContractData,
} from "../types.js";

export interface ContractBehaviors {
  list: (
    customerId: string,
    query?: ContractListQueryData,
  ) => Promise<QueryResponseData<ContractListItemData>>;
  findByProject: (
    projectId: string,
    requestConfig?: AxiosRequestConfig,
  ) => Promise<ContractData | undefined>;
  terminate: (
    contractId: string,
    data: ContractTerminationCreateRequestData,
  ) => Promise<void>;

  cancelPlanChange: (
    contractId: string,
    contractItemId: string,
  ) => Promise<void>;

  findByServer: (serverId: string) => Promise<ContractData | undefined>;
  find: (contractId: string) => Promise<ContractData | undefined>;

  cancelTermination: (contractId: string) => Promise<void>;
}
