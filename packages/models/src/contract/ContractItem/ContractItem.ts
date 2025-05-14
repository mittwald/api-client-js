import { classes } from "polytype";
import { ContractItemData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class ContractItem extends ReferenceModel {
  public static ofId(contractId: string, id: string): ContractItem {
    return new ContractItem(contractId, id);
  }

  public static find = provideReact(
    async (
      contractId: string,
      contractItemId: string,
    ): Promise<ContractItemDetailed | undefined> => {
      const data = await config.behaviors.contractItem.find(
        contractId,
        contractItemId,
      );
      if (data !== undefined) {
        return new ContractItemDetailed(contractId, data);
      }
    },
  );

  public static get = provideReact(
    async (
      contractId: string,
      contractItemId: string,
    ): Promise<ContractItemDetailed> => {
      const item = await this.find(contractId, contractItemId);
      assertObjectFound(item, this, contractItemId);
      return item;
    },
  );

  public readonly contractId: string;

  public constructor(contractId: string, id: string) {
    super(id);
    this.contractId = contractId;
  }
}

export class ContractItemDetailed extends classes(
  DataModel<ContractItemData>,
  ContractItem,
) {
  public constructor(contractId: string, data: ContractItemData) {
    super([data], [contractId, data.itemId]);
  }
}
