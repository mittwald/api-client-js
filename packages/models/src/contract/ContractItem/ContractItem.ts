import { classes } from "polytype";
import { ContractItemData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ContractArticle } from "../ContractArticle/index.js";
import { Money } from "../../base/Money.js";
import { ContractItemReference } from "./ContractItemReference.js";
import { ContractTermination } from "../ContractTermination/index.js";

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

export class ContractItemCommon extends classes(
  DataModel<ContractItemData>,
  ContractItem,
) {
  public readonly description: string;
  public readonly totalPrice: Money;
  public readonly totalYearlyPrice: Money;
  public readonly freeTrialDays?: number;
  public readonly orderDate?: Date;
  public readonly reference?: ContractItemReference;
  public readonly activationDate?: Date;
  public readonly nextPossibleDowngradeDate?: Date;
  public readonly nextPossibleTerminationDate?: Date;
  public readonly nextPossibleUpgradeDate?: Date;
  public readonly invoiceStop?: Date;
  public readonly termination?: ContractTermination;
  public constructor(contractId: string, data: ContractItemData) {
    super([data], [contractId, data.itemId]);
    this.description = data.description;
    this.reference = data.aggregateReference
      ? new ContractItemReference(data.aggregateReference)
      : undefined;
    this.totalPrice = Money({
      amount: data.totalPrice.value,
      currency: "EUR",
    });
    this.totalYearlyPrice = Money({
      amount: this.totalPrice.getAmount() * 12,
      currency: "EUR",
    });
    this.freeTrialDays = data.freeTrialDays;
    this.activationDate = data.activationDate
      ? new Date(data.activationDate)
      : undefined;
    this.nextPossibleDowngradeDate = data.nextPossibleDowngradeDate
      ? new Date(data.nextPossibleDowngradeDate)
      : undefined;
    this.nextPossibleTerminationDate = data.nextPossibleDowngradeDate
      ? new Date(data.nextPossibleDowngradeDate)
      : undefined;
    this.nextPossibleUpgradeDate = data.nextPossibleDowngradeDate
      ? new Date(data.nextPossibleDowngradeDate)
      : undefined;
    this.orderDate = data.orderDate ? new Date(data.orderDate) : undefined;
    this.invoiceStop = data.invoiceStop
      ? new Date(data.invoiceStop)
      : undefined;
    if (data.termination) {
      this.termination = new ContractTermination(data.termination);
    }
  }
}

export class ContractItemDetailed extends ContractItemCommon {
  public readonly articles: ContractArticle[];

  public constructor(contractId: string, data: ContractItemData) {
    super(contractId, data);

    this.articles = data.articles.map(
      (articleData) => new ContractArticle(articleData, contractId, this.id),
    );
  }
}
