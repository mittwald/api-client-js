import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";
import { omit } from "remeda";

import type {
  ContractTerminationCreateRequestData,
  ContractListQueryModelData,
  ContractListItemData,
  ContractData,
} from "./types.js";

import { ContractItemReference } from "../ContractItem/ContractItemReference.js";
import {
  ContractItemDetailed,
  ContractItemCommon,
} from "../ContractItem/index.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { ContractTermination } from "../ContractTermination/index.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { PlanChange } from "../PlanChange/index.js";
import { config } from "../../config/index.js";
import { Money } from "../../common/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Contract",
})
export class Contract extends ReferenceModel {
  public static async find(id: string) {
    const data = await config.behaviors.contract.find(id);
    if (data) {
      return new ContractDetailed(data);
    }
  }

  public static async findByProject(
    projectId: string,
    requestConfig?: AxiosRequestConfig,
  ) {
    const data = await config.behaviors.contract.findByProject(
      projectId,
      requestConfig,
    );
    if (data) {
      return new ContractDetailed(data);
    }
  }

  public static async findByServer(serverId: string) {
    const data = await config.behaviors.contract.findByServer(serverId);
    if (data) {
      return new ContractDetailed(data);
    }
  }

  public static async get(id: string) {
    const contract = await this.find(id);
    assertObjectFound(contract, Contract, id);
    return contract;
  }

  public static async getByProject(projectId: string) {
    const contract = await this.findByProject(projectId);
    assertObjectFound(contract, Contract, projectId);
    return contract;
  }

  public static async getByServer(serverId: string) {
    const contract = await this.findByServer(serverId);
    assertObjectFound(contract, Contract, serverId);
    return contract;
  }

  public static ofId(id: string) {
    return new Contract(id);
  }

  public static query(query: ContractListQueryModelData) {
    return new ContractListQuery(query);
  }

  public async cancelTermination() {
    await config.behaviors.contract.cancelTermination(this.id);
  }

  public async findCommon(): Promise<ContractCommon | undefined> {
    return this instanceof ContractCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<ContractDetailed | undefined> {
    return Contract.get(this.id);
  }

  public async getCommon(): Promise<ContractCommon> {
    return this instanceof ContractCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<ContractDetailed> {
    return Contract.get(this.id);
  }

  public async terminate(data: ContractTerminationCreateRequestData) {
    await config.behaviors.contract.terminate(this.id, data);
  }
}

export class ContractCommon extends WithData<
  ContractListItemData | ContractData
>()(Contract) {
  public readonly activationDate?: DateTime;
  public readonly additionalItems: ContractItemCommon[];
  public readonly additionalItemsTotalPrice: Money;
  public readonly aggregateReference?: ContractItemReference;
  public readonly baseItem: ContractItemDetailed;
  public readonly customer: Customer;
  public override readonly data: ContractListItemData | ContractData;
  public readonly description: string;
  public readonly domainItemsCount: number;
  public readonly freeTrialDaysRemaining?: number;
  public readonly freeTrialUntil?: DateTime;
  public readonly hostingDescription?: string;
  public readonly hostingShortId?: string;
  public readonly nextPossibleDowngradeDate?: DateTime;
  public readonly nextPossibleTerminationDate?: DateTime;
  public readonly nextPossibleUpgradeDate?: DateTime;
  public readonly period?: number;
  public readonly plan?: string;
  public readonly planChange?: PlanChange;
  public readonly termination?: ContractTermination;

  public constructor(data: ContractListItemData | ContractData) {
    super(data.contractId);
    this.data = data;
    if (data.termination) {
      this.termination = new ContractTermination(data.termination);
    }
    this.customer = Customer.ofId(data.customerId);
    this.additionalItems = data.additionalItems
      ? data.additionalItems.map((i) => new ContractItemCommon(this, i))
      : [];
    this.additionalItemsTotalPrice = this.additionalItems.reduce(
      (total, item) => {
        return total.add(item.totalPrice);
      },
      Money({ currency: "EUR", amount: 0 }),
    );
    this.domainItemsCount = this.additionalItems.filter((i) =>
      i.articleName.toLowerCase().includes("domain"),
    ).length;
    this.baseItem = new ContractItemDetailed(this, data.baseItem);
    this.plan = this.baseItem.baseArticle?.name;
    if (data.baseItem.tariffChange) {
      this.planChange = new PlanChange(
        this.baseItem,
        data.baseItem.tariffChange,
      );
    }
    this.description = data.baseItem.description;
    this.hostingDescription = /"(.*?)"/.exec(this.description)?.[1];
    const descriptionParts = this.description.split(":")[0]?.split(" ");
    if (descriptionParts) {
      this.hostingShortId = descriptionParts[descriptionParts.length - 1];
    }

    if (data.baseItem.nextPossibleDowngradeDate) {
      this.nextPossibleDowngradeDate = DateTime.fromISO(
        data.baseItem.nextPossibleDowngradeDate,
        { zone: "utc" },
      );
    }
    if (data.baseItem.nextPossibleUpgradeDate) {
      this.nextPossibleUpgradeDate = DateTime.fromISO(
        data.baseItem.nextPossibleUpgradeDate,
        { zone: "utc" },
      );
    }
    if (data.baseItem.nextPossibleTerminationDate) {
      this.nextPossibleTerminationDate = DateTime.fromISO(
        data.baseItem.nextPossibleTerminationDate,
        { zone: "utc" },
      );
    }

    this.aggregateReference = data.baseItem.aggregateReference
      ? new ContractItemReference(
          data.baseItem.aggregateReference,
          data.customerId,
        )
      : undefined;
    if (data.baseItem.activationDate) {
      this.activationDate = DateTime.fromISO(data.baseItem.activationDate);
    }
    this.freeTrialUntil =
      data.baseItem.isInFreeTrial &&
      this.activationDate &&
      this.activationDate.diff(DateTime.now()).toMillis() > 0
        ? this.activationDate
        : undefined;
    if (this.freeTrialUntil) {
      this.freeTrialDaysRemaining = Math.ceil(
        this.freeTrialUntil.diff(DateTime.now(), ["days"]).days,
      );
    }
    this.period = this.baseItem.contractPeriod;
  }

  public async cancelPlanChange() {
    await config.behaviors.contract.cancelPlanChange(this.id, this.baseItem.id);
  }
}

export class ContractDetailed extends ContractCommon {
  public override readonly data: ContractData;
  public constructor(data: ContractData) {
    super(data);
    this.data = data;
  }
}

export class ContractListItem extends ContractCommon {
  public override readonly data: ContractListItemData;
  public constructor(data: ContractListItemData) {
    super(data);
    this.data = data;
  }
}

export class ContractListQuery extends ListQueryModel<ContractListQueryModelData> {
  public constructor(query: ContractListQueryModelData) {
    super(query, { dependencies: [extractId(query.customer)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.contract.list(
      extractId(this.query.customer),
      omit(this.query, ["customer"]),
    );

    return new ContractList(
      this.query,
      items.map((d) => new ContractListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: Partial<ContractListQueryModelData> = {}) {
    return new ContractListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class ContractList extends WithListData<ContractListItem>()(
  ContractListQuery,
) {
  public override readonly items: readonly ContractListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: ContractListQueryModelData,
    contracts: ContractListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(contracts);
    this.totalCount = totalCount;
  }
}
