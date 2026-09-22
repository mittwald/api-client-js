import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type {
  CustomerAIPlanListQueryData,
  CustomerAIPlanTopUsage,
  CustomerAIPlanTokens,
  CustomerAIPlanLimit,
  CustomerAIPlanData,
  CustomerAIPlanKeys,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { ContractDetailed } from "../../contract";
import { AggregateMetaData } from "../../common";
import { formatTokenUsage } from "../helper";
import { Customer } from "../../customer";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "CustomerAIPlan",
})
export class CustomerAIPlan extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "llmlocksmith",
    "locksmithPlan",
  );

  public readonly customerId: string;

  public constructor(planId: string, customerId: string) {
    super(planId);
    this.customerId = customerId;
  }

  public static async acceptModelTermsForCustomer(customerId: string) {
    await config.behaviors.customerAiPlan.acceptModelTerms(customerId);
  }

  public static async declareProfileForCustomer(customerId: string) {
    await config.behaviors.customerAiPlan.declareProfile(customerId);
  }

  public static async find(
    customerId: string,
    planId: string,
    topUsageCount?: number,
    options?: AxiosRequestConfig,
  ) {
    const data = await config.behaviors.customerAiPlan.find(
      customerId,
      planId,
      topUsageCount,
      options,
    );

    if (data) {
      return new CustomerAIPlanDetailed(data);
    }
  }

  public static async get(
    customerId: string,
    planId: string,
    topUsageCount?: number,
    options?: AxiosRequestConfig,
  ) {
    const plan = await this.find(customerId, planId, topUsageCount, options);
    assertObjectFound(plan, CustomerAIPlan, planId);
    return plan;
  }

  public static ofId(customerId: string, planId: string) {
    return new CustomerAIPlan(planId, customerId);
  }

  public static query(customerId: Customer | string) {
    return new CustomerAIPlanListQuery(extractId(customerId));
  }

  public async acceptModelTerms() {
    await config.behaviors.customerAiPlan.acceptModelTerms(this.customerId);
  }

  public async findCommon(
    topUsageCount?: number,
    options?: AxiosRequestConfig,
  ): Promise<CustomerAIPlanCommon | undefined> {
    return this instanceof CustomerAIPlanCommon
      ? this
      : this.findDetailed(topUsageCount, options);
  }

  public async findContract(options?: AxiosRequestConfig) {
    const data = await config.behaviors.customerAiPlan.findContract(
      this.customerId,
      this.id,
      options,
    );
    if (data) {
      return new ContractDetailed(data);
    }
  }

  public async findDetailed(
    topUsageCount?: number,
    options?: AxiosRequestConfig,
  ): Promise<CustomerAIPlanDetailed | undefined> {
    return CustomerAIPlan.find(
      this.customerId,
      this.id,
      topUsageCount,
      options,
    );
  }

  public async getCommon(
    topUsageCount?: number,
    options?: AxiosRequestConfig,
  ): Promise<CustomerAIPlanCommon> {
    return this instanceof CustomerAIPlanCommon
      ? this
      : this.getDetailed(topUsageCount, options);
  }

  public async getContract(options?: AxiosRequestConfig) {
    const contract = await this.findContract(options);
    assertObjectFound(contract, CustomerAIPlan, this);
    return contract;
  }

  public async getDetailed(
    topUsageCount?: number,
    options?: AxiosRequestConfig,
  ): Promise<CustomerAIPlanDetailed> {
    return CustomerAIPlan.get(this.customerId, this.id, topUsageCount, options);
  }

  public async updateName(name: string): Promise<void> {
    await config.behaviors.customerAiPlan.updateName(
      this.customerId,
      this.id,
      name,
    );
  }
}

export class CustomerAIPlanCommon extends WithData<CustomerAIPlanData>()(
  CustomerAIPlan,
) {
  public readonly apiKeys: CustomerAIPlanKeys;
  public readonly customer: Customer;
  public override readonly data: CustomerAIPlanData;
  public readonly description: string;
  public readonly modelTermsApprovalRequired: boolean;
  public readonly nextTokenResetDate: DateTime;
  public readonly planId: string;
  public readonly rateLimit: CustomerAIPlanLimit;
  public readonly tokens: CustomerAIPlanTokens;
  public readonly topUsages: CustomerAIPlanTopUsage;

  public constructor(data: CustomerAIPlanData) {
    super(data.planId, data.customerId);
    this.data = data;

    this.planId = data.planId;
    this.description = data.description;
    this.customer = Customer.ofId(data.customerId);
    this.apiKeys = data.keys;
    this.rateLimit = data.rateLimit;
    this.tokens = {
      ...data.tokens,
      formattedPlanLimit: formatTokenUsage(data.tokens.planLimit, 0),
      formattedUsed: formatTokenUsage(data.tokens.used),
    };
    this.topUsages = (data.topUsages ?? []).map((item) => ({
      ...item,
      formattedTokenUsed: formatTokenUsage(item.tokenUsed),
    }));
    this.nextTokenResetDate = DateTime.fromISO(data.nextTokenReset);
    this.modelTermsApprovalRequired = data.modelTermsApprovalRequired;
  }

  public hasPlan(): boolean {
    return (
      this.rateLimit.allowedRequestsPerUnit > 0 &&
      this.tokens.planLimit > 0 &&
      (this.apiKeys.planLimit > 0 || this.apiKeys.planLimit === -1)
    );
  }
}

export class CustomerAIPlanDetailed extends CustomerAIPlanCommon {
  public constructor(data: CustomerAIPlanData) {
    super(data);
  }
}

export class CustomerAIPlanListItem extends CustomerAIPlanCommon {
  public constructor(data: CustomerAIPlanData) {
    super(data);
  }
}

export class CustomerAIPlanListQuery extends ListQueryModel<CustomerAIPlanListQueryData> {
  private readonly customerId: string;

  public constructor(
    customerId: string,
    query: CustomerAIPlanListQueryData = {},
  ) {
    super(query, { dependencies: [customerId] });
    this.customerId = customerId;
  }

  public async execute(options?: AxiosRequestConfig) {
    const result = await config.behaviors.customerAiPlan.list(
      this.customerId,
      this.query,
      options,
    );

    return new CustomerAIPlanList(
      this.customerId,
      this.query,
      result.items.map((item) => new CustomerAIPlanListItem(item)),
      result.totalCount,
    );
  }

  public override async getTotalCount(options?: AxiosRequestConfig) {
    const list = await this.execute(options);
    return list.totalCount;
  }
}

export class CustomerAIPlanList extends WithListData<CustomerAIPlanListItem>()(
  CustomerAIPlanListQuery,
) {
  public override readonly items: readonly CustomerAIPlanListItem[];
  public override readonly totalCount: number;

  public constructor(
    customerId: string,
    query: CustomerAIPlanListQueryData,
    items: CustomerAIPlanListItem[],
    totalCount: number,
  ) {
    super(customerId, query);
    this.items = Object.freeze(items);
    this.totalCount = totalCount;
  }
}
