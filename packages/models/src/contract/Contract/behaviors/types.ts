import {
  ContractData,
  ContractListItemData,
  ContractListQueryData,
  ContractTerminationCreateRequest,
  ContractTerminationData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface ContractBehaviors {
  find: (id: string) => Promise<ContractData | undefined>;
  list: (request: {
    customerId: string;
    queryParameters?: ContractListQueryData;
  }) => Promise<QueryResponseData<ContractListItemData>>;
  terminate: (
    contractId: string,
    data: ContractTerminationCreateRequest,
  ) => Promise<ContractTerminationData>;

  cancelTermination: (contractId: string) => Promise<void>;
}
