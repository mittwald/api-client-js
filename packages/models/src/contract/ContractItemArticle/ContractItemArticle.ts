import { ContractItemArticleData } from "./types.js";
import { Money } from "../../base/Money.js";

export class ContractItemArticle {
  public readonly data: ContractItemArticleData;
  public readonly contractId: string;
  public readonly contractItemId: string;
  public readonly totalPrice: Money;
  public readonly displayName: string;

  public constructor(
    data: ContractItemArticleData,
    contractId: string,
    contractItemId: string,
  ) {
    this.data = data;

    this.contractId = contractId;
    this.contractItemId = contractItemId;
    this.totalPrice = Money({
      amount: data.amount * data.unitPrice.value,
      currency: "EUR",
    });
    this.displayName = `${data.name} (${data.description})`;
  }
}
