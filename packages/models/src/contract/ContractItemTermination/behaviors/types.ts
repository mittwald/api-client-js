import {
  ContractItemTerminationCancelResponse,
  ContractItemTerminationCreateRequest,
  ContractItemTerminationCreateResponse,
} from "../types.js";

export interface ContractItemTerminationBehaviors {
  scheduleTermination: (
    contractId: string,
    contractItemId: string,
    data: ContractItemTerminationCreateRequest,
  ) => Promise<ContractItemTerminationCreateResponse>;

  cancelTermination: (
    contractId: string,
    contractItemId: string,
  ) => Promise<ContractItemTerminationCancelResponse>;
}
