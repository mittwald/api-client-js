import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { CustomerDetailed } from "../../customer";
import type {
  FinderProfileRequestListModelQueryData,
  FinderProfileRequestListItemData,
  FinderProfileRequestStatus,
  FinderProfileRequestData,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { Customer } from "../../customer/Customer/Customer";
import { AggregateMetaData } from "../../common";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "FinderProfileRequest",
})
export class FinderProfileRequest extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "leadfinder",
    "finderprofilerequest",
  );

  public static async create(customerId: string) {
    const customer = await Customer.ofId(customerId).getDetailed();
    const contractPartnerDomain =
      this.getDomainFromContractPartnerEmail(customer);

    await config.behaviors.finderProfileRequest.create(customerId, {
      domain: contractPartnerDomain,
    });
  }

  public static async find(customerId: string, options?: AxiosRequestConfig) {
    const data = await config.behaviors.finderProfileRequest.find(
      customerId,
      options,
    );
    if (data) {
      return new FinderProfileRequestDetailed(data);
    }
  }

  public static async get(customerId: string) {
    const profile = await this.find(customerId);
    assertObjectFound(profile, FinderProfileRequest, customerId);
    return profile;
  }

  public static ofCustomer(customer: Customer | string): FinderProfileRequest {
    return new FinderProfileRequest(extractId(customer));
  }

  public static query() {
    return new FinderProfileRequestListQuery();
  }

  private static getDomainFromContractPartnerEmail(customer: CustomerDetailed) {
    const contractPartnerEmail = customer.data.owner?.emailAddress;

    if (!contractPartnerEmail) {
      throw new Error("Contract partner email is not defined");
    }

    return contractPartnerEmail.substring(
      (contractPartnerEmail as string).lastIndexOf("@") + 1,
    );
  }

  public async findCommon(): Promise<FinderProfileRequestCommon | undefined> {
    return this instanceof FinderProfileRequestCommon
      ? this
      : this.findDetailed();
  }

  public async findDetailed(
    options?: AxiosRequestConfig,
  ): Promise<FinderProfileRequestDetailed | undefined> {
    return FinderProfileRequest.find(this.id, options);
  }

  public async getCommon(): Promise<FinderProfileRequestCommon> {
    return this instanceof FinderProfileRequestCommon
      ? this
      : this.getDetailed();
  }

  public async getDetailed(): Promise<FinderProfileRequestDetailed> {
    if (this instanceof FinderProfileRequestDetailed) {
      return this;
    }
    return await FinderProfileRequest.get(this.id);
  }
}

export class FinderProfileRequestCommon extends WithData<
  FinderProfileRequestListItemData | FinderProfileRequestData
>()(FinderProfileRequest) {
  public readonly createdAt: DateTime;
  public readonly customer: Customer;
  public override readonly data:
    | FinderProfileRequestListItemData
    | FinderProfileRequestData;
  public readonly domain: string;
  public readonly profileId: string;
  public readonly resultAt: DateTime | undefined;
  public readonly status: FinderProfileRequestStatus;
  public readonly url: string;

  public constructor(
    data: FinderProfileRequestListItemData | FinderProfileRequestData,
  ) {
    super(data.customerId);
    this.data = data;
    this.profileId = data.profileId;
    this.customer = Customer.ofId(data.customerId);
    this.domain = data.domain;
    this.createdAt = DateTime.fromISO(data.createdOn);
    this.resultAt = data.resultOn ? DateTime.fromISO(data.resultOn) : undefined;
    this.status = data.status;
    this.url = data.domain.startsWith("https://")
      ? data.domain
      : `https://${data.domain}`;
  }
}

export class FinderProfileRequestDetailed extends FinderProfileRequestCommon {
  public constructor(data: FinderProfileRequestData) {
    super(data);
  }
}

export class FinderProfileRequestListItem extends FinderProfileRequestCommon {
  public constructor(data: FinderProfileRequestListItemData) {
    super(data);
  }
}

export class FinderProfileRequestListQuery extends ListQueryModel<FinderProfileRequestListModelQueryData> {
  public constructor(query: FinderProfileRequestListModelQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } =
      await config.behaviors.finderProfileRequest.list();

    return new FinderProfileRequestList(
      this.query,
      items.map((d) => new FinderProfileRequestListItem(d)),
      totalCount,
    );
  }

  public refine(query: FinderProfileRequestListModelQueryData) {
    return new FinderProfileRequestListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class FinderProfileRequestList extends WithListData<FinderProfileRequestListItem>()(
  FinderProfileRequestListQuery,
) {
  public override readonly items: readonly FinderProfileRequestListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: FinderProfileRequestListModelQueryData,
    items: FinderProfileRequestListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(items);
    this.totalCount = totalCount;
  }
}
