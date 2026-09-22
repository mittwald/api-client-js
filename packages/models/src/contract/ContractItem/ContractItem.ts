import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { PlanChangeRequestData } from "../../order/index.js";
import type { ContractCommon } from "../Contract/index.js";
import type {
  ContractItemTerminationCreateRequestData,
  ContractItemData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { ContractItemReference } from "./ContractItemReference.js";
import { ContractTermination } from "../ContractTermination/index.js";
import { ReferenceModel, WithData } from "../../base/index.js";
import { ContractArticle } from "../ContractArticle/index.js";
import { Project } from "../../project/internal.js";
import { PlanChange } from "../PlanChange/index.js";
import { config } from "../../config/index.js";
import { Money } from "../../common/index.js";
import { Order } from "../../order/index.js";

@GhostMakerModel({
  name: "ContractItem",
})
export class ContractItem extends ReferenceModel {
  public readonly contract: ContractCommon;

  public constructor(contract: ContractCommon, id: string) {
    super(id);
    this.contract = contract;
  }

  public static async find(contract: ContractCommon, contractItemId: string) {
    const data = await config.behaviors.contractItem.find(
      contract.id,
      contractItemId,
    );
    if (data) {
      return new ContractItemDetailed(contract, data);
    }
  }

  public static async get(contract: ContractCommon, contractItemId: string) {
    const item = await this.find(contract, contractItemId);
    assertObjectFound(item, ContractItem, contractItemId);
    return item;
  }

  public static ofId(contract: ContractCommon, id: string) {
    return new ContractItem(contract, id);
  }

  public async cancelPlanChange() {
    await config.behaviors.contractItem.cancelTariffChange(
      this.contract.id,
      this.id,
    );
  }

  public async cancelTermination() {
    await config.behaviors.contractItem.cancelTermination(
      this.contract.id,
      this.id,
    );
  }

  public async createPlanChange(data: PlanChangeRequestData) {
    await Order.changePlan(data);
  }

  public async findDetailed(): Promise<ContractItemDetailed | undefined> {
    return ContractItem.get(this.contract, this.id);
  }

  public async getDetailed(): Promise<ContractItemDetailed> {
    return ContractItem.get(this.contract, this.id);
  }

  public async terminate(data: ContractItemTerminationCreateRequestData) {
    await config.behaviors.contractItem.terminate(
      this.contract.id,
      this.id,
      data,
    );
  }
}

export class ContractItemCommon extends WithData<ContractItemData>()(
  ContractItem,
) {
  public readonly activationDate?: DateTime;
  public readonly aggregateReference?: ContractItemReference;
  public readonly articleName: string;
  public readonly articles: ContractArticle[];
  public readonly baseArticle?: ContractArticle;
  public readonly contractPeriod?: number;
  public override readonly data: ContractItemData;
  public readonly description: string;
  public readonly freeTrialDays?: number;
  public readonly freeTrialUntil?: DateTime;
  public readonly invoiceStop?: DateTime;
  public readonly invoicingPeriod?: number;
  public readonly isActivated: boolean;
  public readonly isBaseItem: boolean;
  public readonly itemId: string;
  public readonly nextPossibleDowngradeDate?: DateTime;
  public readonly nextPossibleTerminationDate?: DateTime;
  public readonly nextPossibleUpgradeDate?: DateTime;
  public readonly orderDate?: DateTime;
  public readonly planChange?: PlanChange;
  public readonly project?: Project;
  public readonly termination?: ContractTermination;
  public readonly totalPrice: Money;
  public readonly totalYearlyPrice: Money;

  public constructor(contract: ContractCommon, data: ContractItemData) {
    super(contract, data.itemId);
    this.data = data;
    this.description = data.description;
    this.itemId = data.itemId;
    this.isActivated = data.isActivated;
    this.project = data.groupByProjectId
      ? Project.ofId(data.groupByProjectId)
      : undefined;
    this.isBaseItem = data.isBaseItem;
    this.aggregateReference = data.aggregateReference
      ? new ContractItemReference(data.aggregateReference, contract.customer.id)
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
    if (data.activationDate) {
      this.activationDate = DateTime.fromISO(data.activationDate);
    }
    if (data.nextPossibleDowngradeDate) {
      this.nextPossibleDowngradeDate = DateTime.fromISO(
        data.nextPossibleDowngradeDate,
      );
    }
    if (data.nextPossibleTerminationDate) {
      this.nextPossibleTerminationDate = DateTime.fromISO(
        data.nextPossibleTerminationDate,
      );
    }
    if (data.nextPossibleUpgradeDate) {
      this.nextPossibleUpgradeDate = DateTime.fromISO(
        data.nextPossibleUpgradeDate,
      );
    }
    if (data.orderDate) {
      this.orderDate = DateTime.fromISO(data.orderDate);
    }
    if (data.invoiceStop) {
      this.invoiceStop = DateTime.fromISO(data.invoiceStop);
    }
    if (data.termination) {
      this.termination = new ContractTermination(data.termination);
    }
    if (data.tariffChange) {
      this.planChange = new PlanChange(this, data.tariffChange);
    }
    if (data.contractPeriod) {
      this.contractPeriod = data.contractPeriod;
    }
    if (data.invoicingPeriod) {
      this.invoicingPeriod = data.invoicingPeriod;
    }
    this.freeTrialUntil =
      data.isInFreeTrial &&
        this.activationDate &&
        this.activationDate.diff(DateTime.now()).toMillis() > 0
        ? this.activationDate
        : undefined;
    this.articles = data.articles.map(
      (articleData) => new ContractArticle(articleData),
    );
    this.baseArticle = this.articles[0];
    this.articleName = this.articles[0]?.name ?? "";
  }

  public findArticlesOfTemplate(template: { templateId?: string }) {
    return this.articles.filter(
      (article) => article.articleTemplateId === template.templateId,
    );
  }
}

export class ContractItemDetailed extends ContractItemCommon {
  public readonly articles: ContractArticle[];
  public readonly planChange?: PlanChange;

  public constructor(contract: ContractCommon, data: ContractItemData) {
    super(contract, data);

    this.articles = data.articles.map(
      (articleData) => new ContractArticle(articleData),
    );

    this.planChange = data.tariffChange
      ? new PlanChange(this, data.tariffChange)
      : undefined;
  }
}
