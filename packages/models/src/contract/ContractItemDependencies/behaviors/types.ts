import { ContractItemDependenciesData } from "../types.js";

export interface ContractItemDependenciesBehaviors {
  find: (
    contractId: string,
    contractItemId: string,
  ) => Promise<ContractItemDependenciesData | undefined>;
}
