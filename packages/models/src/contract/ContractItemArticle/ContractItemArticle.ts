import { DataModel, ListDataModel, ReferenceModel } from "../../base/index.js";
import { ContractItemArticleData } from "./types.js";
import { classes } from "polytype";

export class ContractItemArticle extends ReferenceModel {
  public static ofId(
    id: string,
    contractId: string,
    contractItemId: string,
  ): ContractItemArticle {
    return new ContractItemArticle(id, contractId, contractItemId);
  }

  public readonly contractId: string;
  public readonly contractItemId: string;

  public constructor(id: string, contractId: string, contractItemId: string) {
    super(id);
    this.contractId = contractId;
    this.contractItemId = contractItemId;
  }
}

class ContractItemArticleCommon extends classes(
  DataModel<ContractItemArticleData>,
  ContractItemArticle,
) {
  public constructor(
    contractId: string,
    contractItemId: string,
    data: ContractItemArticleData,
  ) {
    super([data], [data.id, contractId, contractItemId]);
  }
}

export class ContractItemArticleDetailed extends ContractItemArticleCommon {
  public constructor(
    contractId: string,
    contractItemId: string,
    data: ContractItemArticleData,
  ) {
    super(contractId, contractItemId, data);
  }

  public get totalPrice(): number {
    return this.data.amount * this.data.unitPrice.value;
  }

  public get displayName(): string {
    return `${this.data.name} (${this.data.description})`;
  }
}

export class ContractItemArticleListItem extends ContractItemArticleCommon {
  public constructor(
    contractId: string,
    contractItemId: string,
    data: ContractItemArticleData,
  ) {
    super(contractId, contractItemId, data);
  }
}

export class ContractItemArticleList extends ListDataModel<ContractItemArticleListItem> {
  public readonly contractId: string;
  public readonly contractItemId: string;

  public constructor(
    contractId: string,
    contractItemId: string,
    items: ContractItemArticleListItem[],
  ) {
    super(items, items.length);
    this.contractId = contractId;
    this.contractItemId = contractItemId;
  }
}
