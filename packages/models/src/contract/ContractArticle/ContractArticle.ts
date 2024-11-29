import { ContractArticleData } from "./types.js";
import { Money } from "../../base/Money.js";
import { DataModel } from "../../base/index.js";

export class ContractArticle extends DataModel<ContractArticleData> {
  public readonly contractId: string;
  public readonly contractItemId: string;
  public readonly totalPrice: Money;
  public readonly displayName: string;

  public constructor(
    data: ContractArticleData,
    contractId: string,
    contractItemId: string,
  ) {
    super(data);

    this.contractId = contractId;
    this.contractItemId = contractItemId;
    this.totalPrice = Money({
      amount: data.amount * data.unitPrice.value,
      currency: "EUR",
    });
    this.displayName = `${data.name} (${data.description})`;
  }
}
