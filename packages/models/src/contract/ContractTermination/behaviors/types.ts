import {
  ContractTerminationCreateRequest,
  ContractTerminationCreateResponse,
  ContractTerminationCancelResponse,
} from "../types.js";

export interface ContractTerminationBehaviors {
  scheduleTermination: (
    contractId: string,
    data: ContractTerminationCreateRequest,
  ) => Promise<ContractTerminationCreateResponse>;

  cancelTermination: (
    contractId: string,
  ) => Promise<ContractTerminationCancelResponse>;
}
