import { classes } from "polytype";
import { ContractItemReferenceData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class ContractItemReference extends ReferenceModel {
  public static ofId(
    contractId: string,
    contractItemId: string,
  ): ContractItemReference {
    return new ContractItemReference(contractId, contractItemId);
  }

  public static find = provideReact(
    async (
      contractId: string,
      contractItemId: string,
    ): Promise<ContractItemReferenceDetailed | undefined> => {
      const data = await config.behaviors.contractItemReference.find(
        contractId,
        contractItemId,
      );
      if (data !== undefined) {
        return new ContractItemReferenceDetailed(
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
    ): Promise<ContractItemReferenceDetailed> => {
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

export class ContractItemReferenceDetailed extends classes(
  DataModel<ContractItemReferenceData>,
  ContractItemReference,
) {
  public constructor(
    contractId: string,
    contractItemId: string,
    data: ContractItemReferenceData,
  ) {
    super([data], [contractId, contractItemId]);
  }
}
