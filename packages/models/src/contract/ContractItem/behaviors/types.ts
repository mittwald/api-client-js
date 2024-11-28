import {
  ContractItemData,
  ContractItemTerminationCreateRequest,
} from "../types.js";

export interface ContractItemBehaviors {
  find: (
    contractId: string,
    contractItemId: string,
  ) => Promise<ContractItemData | undefined>;

  terminate: (
    contractId: string,
    contractItemId: string,
    data: ContractItemTerminationCreateRequest,
  ) => Promise<void>;

  cancelTermination: (
    contractId: string,
    contractItemId: string,
  ) => Promise<void>;
}
