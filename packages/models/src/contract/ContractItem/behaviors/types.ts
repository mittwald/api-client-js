import { ContractItemData } from "../types.js";

export interface ContractItemBehaviors {
  find: (
    contractId: string,
    contractItemId: string,
  ) => Promise<ContractItemData | undefined>;
}
