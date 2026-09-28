import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";

import type { CustomerRole } from "../CustomerMembership/index.js";
import type {
  CustomerInviteCreateRequestData,
  CustomerInviteListQueryData,
  CustomerInviteListItemData,
  CustomerInviteData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { AggregateMetaData } from "../../common/index.js";
import { User } from "../../user/User/User.js";
import { Customer } from "../Customer/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "CustomerInvite",
})
export class CustomerInvite extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "membership",
    "customerinvite",
  );

  public static async acceptWithToken(invitationToken: string) {
    const invite =
      await config.behaviors.customerInvite.getByToken(invitationToken);

    await config.behaviors.customerInvite.accept(invite.id, invitationToken);
  }

  public static async create(
    customer: Customer,
    data: CustomerInviteCreateRequestData,
  ) {
    const response = await config.behaviors.customerInvite.create(
      customer.id,
      data,
    );

    return new CustomerInvite(response.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.customerInvite.find(id);
    if (data) {
      return new CustomerInviteDetailed(data);
    }
  }

  public static async get(id: string) {
    const customerInvite = await this.find(id);
    assertObjectFound(customerInvite, CustomerInvite, id);
    return customerInvite;
  }

  public static async listIncoming() {
    const data = await config.behaviors.customerInvite.listIncoming();

    return data.items.map((i) => new CustomerInviteListItem(i));
  }

  public static ofId(id: string) {
    return new CustomerInvite(id);
  }

  public static query(
    customer: Customer,
    query: CustomerInviteListQueryData = {},
  ) {
    return new CustomerInviteListQuery(customer, query);
  }

  public async decline() {
    await config.behaviors.customerInvite.decline(this.id);
  }

  public async delete() {
    await config.behaviors.customerInvite.delete(this.id);
  }

  public async findCommon(): Promise<CustomerInviteCommon | undefined> {
    return this instanceof CustomerInviteCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<CustomerInviteDetailed | undefined> {
    return CustomerInvite.find(this.id);
  }

  public async getCommon(): Promise<CustomerInviteCommon> {
    return this instanceof CustomerInviteCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<CustomerInviteDetailed> {
    return CustomerInvite.get(this.id);
  }
}

export class CustomerInviteCommon extends WithData<
  CustomerInviteListItemData | CustomerInviteData
>()(CustomerInvite) {
  public readonly customer: Customer;
  public readonly customerName: string;
  public override readonly data:
    | CustomerInviteListItemData
    | CustomerInviteData;
  public readonly invitedBy: User;
  public readonly mailAddress: string;
  public readonly message?: string;
  public readonly role: CustomerRole;

  public constructor(data: CustomerInviteListItemData | CustomerInviteData) {
    super(data.id);
    this.data = data;
    this.role = data.role;
    this.mailAddress = data.mailAddress;
    this.customerName = data.customerName;
    this.invitedBy = User.ofId(data.information.invitedBy);
    this.message = data.message;
    this.customer = Customer.ofId(data.customerId);
  }

  public async accept() {
    await config.behaviors.customerInvite.accept(this.id);
  }
}

export class CustomerInviteDetailed extends CustomerInviteCommon {
  public override readonly data: CustomerInviteData;
  public constructor(data: CustomerInviteData) {
    super(data);
    this.data = data;
  }
}

export class CustomerInviteListItem extends CustomerInviteCommon {
  public override readonly data: CustomerInviteListItemData;
  public constructor(data: CustomerInviteListItemData) {
    super(data);
    this.data = data;
  }
}

export class CustomerInviteListQuery extends ListQueryModel<CustomerInviteListQueryData> {
  public readonly customer: Customer;

  public constructor(
    customer: Customer,
    query: CustomerInviteListQueryData = {},
  ) {
    super(query, { dependencies: [customer.id] });
    this.customer = customer;
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.customerInvite.list(
      this.customer.id,
      this.query,
    );

    return new CustomerInviteList(
      this.customer,
      this.query,
      items.map((d) => new CustomerInviteListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: CustomerInviteListQueryData) {
    return new CustomerInviteListQuery(this.customer, {
      ...this.query,
      ...query,
    });
  }
}

export class CustomerInviteList extends WithListData<CustomerInviteListItem>()(
  CustomerInviteListQuery,
) {
  public override readonly items: readonly CustomerInviteListItem[];
  public override readonly totalCount: number;
  public constructor(
    customer: Customer,
    query: CustomerInviteListQueryData,
    invites: CustomerInviteListItem[],
    totalCount: number,
  ) {
    super(customer, query);
    this.items = Object.freeze(invites);
    this.totalCount = totalCount;
  }
}
