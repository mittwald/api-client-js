import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { DateTime } from "luxon";

import type {
  FinderProfileListModelQueryData,
  FinderProfileListItemData,
  FinderProfilePlanOptions,
  FinderProfileData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { ContractDetailed } from "../../contract/index.js";
import { AggregateMetaData } from "../../common/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "FinderProfile",
})
export class FinderProfile extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "leadfinder",
    "finderprofile",
  );

  public static async find(customerId: string, options?: AxiosRequestConfig) {
    const data = await config.behaviors.finderProfile.find(customerId, options);
    if (data) {
      return new FinderProfileDetailed(data);
    }
  }

  public static async get(customerId: string, options?: AxiosRequestConfig) {
    const data = await this.find(customerId, options);
    assertObjectFound(data, FinderProfile, customerId);
    return data;
  }

  public static ofCustomer(customer: Customer | string): FinderProfile {
    return this.ofCustomerId(extractId(customer));
  }

  public static ofCustomerId(customerId: string): FinderProfile {
    return new FinderProfile(customerId);
  }

  public static query(query: FinderProfileListModelQueryData = {}) {
    return new FinderProfileListQuery(query);
  }

  public async findCommon(
    options?: AxiosRequestConfig,
  ): Promise<FinderProfileCommon | undefined> {
    return this instanceof FinderProfileCommon
      ? this
      : this.findDetailed(options);
  }

  public async findDetailed(
    options?: AxiosRequestConfig,
  ): Promise<FinderProfileDetailed | undefined> {
    return FinderProfile.find(this.id, options);
  }

  public async getCommon(
    options?: AxiosRequestConfig,
  ): Promise<FinderProfileCommon> {
    return this instanceof FinderProfileCommon
      ? this
      : this.getDetailed(options);
  }

  public async getContract() {
    const data = await config.behaviors.finderProfile.findContract(this.id);
    if (data) {
      return new ContractDetailed(data);
    }
  }

  public async getDetailed(
    options?: AxiosRequestConfig,
  ): Promise<FinderProfileDetailed> {
    return FinderProfile.get(this.id, options);
  }
}

export class FinderProfileCommon extends WithData<FinderProfileData>()(
  FinderProfile,
) {
  public readonly approvedAt: DateTime | undefined;
  public readonly customer: Customer;
  public override readonly data: FinderProfileData;
  public readonly disabledAt: DateTime | undefined;
  public readonly domain: string;
  public readonly isDisabled: boolean;
  public readonly plan: FinderProfilePlanOptions;
  public readonly unlockContingentRenewalDate: DateTime | undefined;
  public readonly url: string;

  public constructor(data: FinderProfileData) {
    super(data.customerId);
    this.data = data;
    this.customer = Customer.ofId(data.customerId);
    this.domain = data.domain;
    this.url = data.domain.startsWith("https://")
      ? data.domain
      : `https://${data.domain}`;
    this.disabledAt = data.disabledOn
      ? DateTime.fromISO(data.disabledOn)
      : undefined;
    this.approvedAt = data.approvedOn
      ? DateTime.fromISO(data.approvedOn)
      : undefined;
    this.isDisabled = !!data.disabledOn;
    this.plan = data.tariff;
    this.unlockContingentRenewalDate = data.tariff.nextUnlockRenewalDate
      ? DateTime.fromISO(data.tariff.nextUnlockRenewalDate)
      : undefined;
  }

  public readonly hasAccess = () => {
    return !this.isDisabled;
  };
}

export class FinderProfileDetailed extends FinderProfileCommon {
  public constructor(data: FinderProfileData) {
    super(data);
  }
}

export class FinderProfileListItem extends FinderProfileCommon {
  public constructor(data: FinderProfileListItemData) {
    super(data);
  }
}

export class FinderProfileListQuery extends ListQueryModel<FinderProfileListModelQueryData> {
  public constructor(query: FinderProfileListModelQueryData) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.finderProfile.list();

    return new FinderProfileList(
      this.query,
      items.map((d) => new FinderProfileListItem(d)),
      totalCount,
    );
  }

  public refine(query: FinderProfileListModelQueryData) {
    return new FinderProfileListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class FinderProfileList extends WithListData<FinderProfileListItem>()(
  FinderProfileListQuery,
) {
  public override readonly items: readonly FinderProfileListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: FinderProfileListModelQueryData,
    items: FinderProfileListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(items);
    this.totalCount = totalCount;
  }
}
