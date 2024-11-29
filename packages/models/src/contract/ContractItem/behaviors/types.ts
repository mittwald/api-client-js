import {
  ContractItemData,
  ContractItemTerminationCreateRequestData,
} from "../types.js";

export interface ContractItemBehaviors {
  find: (
    contractId: string,
    contractItemId: string,
  ) => Promise<ContractItemData | undefined>;

  terminate: (
    contractId: string,
    contractItemId: string,
    data: ContractItemTerminationCreateRequestData,
  ) => Promise<void>;

  cancelTermination: (
    contractId: string,
    contractItemId: string,
  ) => Promise<void>;

  cancelTariffChange: (
    contractId: string,
    contractItemId: string,
  ) => Promise<void>;
}
