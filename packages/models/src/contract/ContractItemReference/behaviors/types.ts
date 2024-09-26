import { ContractItemReferenceData } from "../types.js";

export interface ContractItemReferenceBehaviors {
  find: (
    contractId: string,
    contractItemId: string,
  ) => Promise<ContractItemReferenceData | undefined>;
}
