import {
  ContractData,
  ContractListItemData,
  ContractListQueryData,
  ContractTerminationCreateRequest,
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
  ) => Promise<void>;

  cancelTermination: (contractId: string) => Promise<void>;
}
