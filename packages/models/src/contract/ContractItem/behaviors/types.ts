import type {
  ContractItemTerminationCreateRequestData,
  ContractItemData,
} from "../types.js";

export interface ContractItemBehaviors {
  terminate: (
    contractId: string,
    contractItemId: string,
    data: ContractItemTerminationCreateRequestData,
  ) => Promise<void>;

  find: (
    contractId: string,
    contractItemId: string,
  ) => Promise<ContractItemData | undefined>;

  cancelTariffChange: (
    contractId: string,
    contractItemId: string,
  ) => Promise<void>;

  cancelTermination: (
    contractId: string,
    contractItemId: string,
  ) => Promise<void>;
}
