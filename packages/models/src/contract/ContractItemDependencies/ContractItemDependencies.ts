import { classes } from "polytype";
import { ContractItemDependenciesData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class ContractItemDependencies extends ReferenceModel {
  public static ofId(
    contractId: string,
    contractItemId: string,
  ): ContractItemDependencies {
    return new ContractItemDependencies(contractId, contractItemId);
  }

  public static find = provideReact(
    async (
      contractId: string,
      contractItemId: string,
    ): Promise<ContractItemDependenciesDetailed | undefined> => {
      const data = await config.behaviors.contractItemDependencies.find(
        contractId,
        contractItemId,
      );
      if (data !== undefined) {
        return new ContractItemDependenciesDetailed(
          contractId,
          contractItemId,
          data,
        );
      }
    },
  );

  public static get = provideReact(
    async (
      contractId: string,
      contractItemId: string,
    ): Promise<ContractItemDependenciesDetailed> => {
      const item = await this.find(contractId, contractItemId);
      assertObjectFound(item, this, contractItemId);
      return item;
    },
  );

  public readonly contractId: string;
  public readonly contractItemId: string;

  public constructor(contractId: string, contractItemId: string) {
    super(contractItemId);
    this.contractId = contractId;
    this.contractItemId = contractItemId;
  }
}

export class ContractItemDependenciesDetailed extends classes(
  DataModel<ContractItemDependenciesData>,
  ContractItemDependencies,
) {
  public constructor(
    contractId: string,
    contractItemId: string,
    data: ContractItemDependenciesData,
  ) {
    super([data], [contractId, contractItemId]);
  }
}
