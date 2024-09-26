import { classes } from "polytype";
import { ContractItemData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Money } from "../../base/Money.js";

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
        return new ContractItemDetailed(data);
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
  public readonly id: string;
  public readonly data: ContractItemData;
  public readonly description: string;
  public readonly totalPrice: Money;
  public readonly totalYearlyPrice: Money;
  public readonly freeTrialDays?: number;
  public readonly orderDate?: Date;
  public readonly isDomain: boolean;
  public readonly isSSLCertificate: boolean;
  public readonly isSpaceServer: boolean;
  public readonly isProSpace: boolean;
  public readonly activationDate?: Date;
  public readonly nextPossibleDowngradeDate?: Date;
  public readonly nextPossibleTerminationDate?: Date;
  public readonly nextPossibleUpgradeDate?: Date;
  public readonly invoiceStop?: Date;
  public constructor(data: ContractItemData) {
    super([data]);
    this.id = data.itemId;
    this.data = Object.freeze(data);
    this.description = data.description;
    this.isDomain = data.aggregateReference?.aggregate === "domain";
    this.isSSLCertificate =
      data.aggregateReference?.aggregate === "certificate";
    this.isSpaceServer =
      data.aggregateReference?.aggregate === "placementgroup";
    this.isProSpace = data.aggregateReference?.aggregate === "project";
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
  }
}

export class ContractItemDetailed extends classes(
  DataModel<ContractItemData>,
  ContractItemCommon,
) {
  public constructor(data: ContractItemData) {
    super([data]);
  }
}
