import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type {
  CustomerMembershipListQueryData,
  CustomerMembershipListItemData,
  CustomerMembershipData,
  CustomerRole,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { File } from "../../file/File/internal.js";
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
  name: "CustomerMembership",
})
export class CustomerMembership extends ReferenceModel {
  public static canEditMember(
    ownMember: CustomerMembershipListItem,
    member: CustomerMembershipListItem,
    memberList: readonly CustomerMembershipListItem[],
  ) {
    return (
      ownMember.role === "owner" &&
      !CustomerMembership.memberIsOwnMember(ownMember, member) &&
      !CustomerMembership.memberIsLastOwner(memberList, member)
    );
  }

  public static canLeaveCustomer(
    ownMember: CustomerMembershipListItem,
    member: CustomerMembershipListItem,
    memberList: readonly CustomerMembershipListItem[],
  ) {
    return (
      CustomerMembership.memberIsOwnMember(ownMember, member) &&
      !CustomerMembership.memberIsLastOwner(memberList, member)
    );
  }

  public static canRemoveMember(
    ownMember: CustomerMembershipListItem,
    member: CustomerMembershipListItem,
    memberList: readonly CustomerMembershipListItem[],
  ) {
    return (
      ownMember.role === "owner" &&
      !CustomerMembership.memberIsOwnMember(ownMember, member) &&
      !CustomerMembership.memberIsLastOwner(memberList, member)
    );
  }

  public static async find(id: string, options?: AxiosRequestConfig) {
    const data = await config.behaviors.customerMembership.find(id, options);
    if (data) {
      return new CustomerMembershipDetailed(data);
    }
  }

  public static async findOwn(customer: Customer) {
    const ownUser = await User.self.getCommon();
    const data = await config.behaviors.customerMembership.findOwn(
      customer.id,
      ownUser.id,
    );
    if (data) {
      return new CustomerMembershipListItem(data);
    }
  }

  public static async get(id: string, options?: AxiosRequestConfig) {
    const customerMembership = await this.find(id, options);
    assertObjectFound(customerMembership, CustomerMembership, id);
    return customerMembership;
  }

  public static async getOwn(customer: Customer) {
    const membership = await this.findOwn(customer);
    assertObjectFound(membership, CustomerMembership, customer.id);
    return membership;
  }

  public static memberIsLastOwner(
    memberList: readonly CustomerMembershipListItem[],
    member: CustomerMembershipListItem,
  ): boolean | undefined {
    if (member.role !== "owner" || member.expiresAt) {
      return;
    }

    const otherActiveOwners = memberList.filter(
      (m) => m.id !== member.id && m.role === "owner" && !m.expiresAt,
    );

    return otherActiveOwners.length === 0;
  }

  public static memberIsOwnMember(
    ownMember: CustomerMembershipListItem,
    member: CustomerMembershipListItem,
  ) {
    return ownMember.id === member.id;
  }

  public static ofId(id: string) {
    return new CustomerMembership(id);
  }

  public static query(
    customer: Customer,
    query: CustomerMembershipListQueryData = {},
  ) {
    return new CustomerMembershipListQuery(customer, query);
  }

  public async findCommon(
    options?: AxiosRequestConfig,
  ): Promise<CustomerMembershipCommon | undefined> {
    return this instanceof CustomerMembershipCommon
      ? this
      : this.findDetailed(options);
  }

  public async findDetailed(
    options?: AxiosRequestConfig,
  ): Promise<CustomerMembershipDetailed | undefined> {
    return CustomerMembership.find(this.id, options);
  }

  public async getCommon(
    options?: AxiosRequestConfig,
  ): Promise<CustomerMembershipCommon> {
    return this instanceof CustomerMembershipCommon
      ? this
      : this.getDetailed(options);
  }

  public async getDetailed(
    options?: AxiosRequestConfig,
  ): Promise<CustomerMembershipDetailed> {
    return CustomerMembership.get(this.id, options);
  }

  public async remove() {
    await config.behaviors.customerMembership.remove(this.id);
  }
}

export class CustomerMembershipCommon extends WithData<
  CustomerMembershipListItemData | CustomerMembershipData
>()(CustomerMembership) {
  public readonly avatar?: File;
  public readonly customer: Customer;
  public override readonly data:
    | CustomerMembershipListItemData
    | CustomerMembershipData;
  public readonly expiresAt?: DateTime;
  public readonly fullName: string;
  public readonly role: CustomerRole;
  public readonly user: User;

  public constructor(
    data: CustomerMembershipListItemData | CustomerMembershipData,
  ) {
    super(data.id);
    this.data = data;
    this.user = User.ofId(data.userId);
    this.role = data.role;
    if (data.expiresAt) {
      this.expiresAt = DateTime.fromISO(data.expiresAt);
    }
    this.fullName = `${data.firstName} ${data.lastName}`;
    this.avatar = data.avatarRef ? File.ofId(data.avatarRef) : undefined;
    this.customer = Customer.ofId(data.customerId);
  }

  public async updateExpirationDate(expiresAt: string | null) {
    await config.behaviors.customerMembership.update(this.id, {
      expiresAt: expiresAt as string | undefined,
      role: this.role,
    });
  }

  public async updateRole(role: CustomerRole) {
    await config.behaviors.customerMembership.update(this.id, {
      expiresAt: this.data.expiresAt,
      role,
    });
  }
}

export class CustomerMembershipDetailed extends CustomerMembershipCommon {
  public override readonly data: CustomerMembershipData;
  public constructor(data: CustomerMembershipData) {
    super(data);
    this.data = data;
  }
}

export class CustomerMembershipListItem extends CustomerMembershipCommon {
  public override readonly data: CustomerMembershipListItemData;
  public constructor(data: CustomerMembershipListItemData) {
    super(data);
    this.data = data;
  }
}

export class CustomerMembershipListQuery extends ListQueryModel<CustomerMembershipListQueryData> {
  public readonly customer: Customer;

  public constructor(
    customer: Customer,
    query: CustomerMembershipListQueryData = {},
  ) {
    super(query, { dependencies: [customer.id] });
    this.customer = customer;
  }

  public async execute() {
    const { totalCount, items } =
      await config.behaviors.customerMembership.list(
        this.customer.id,
        this.query,
      );

    return new CustomerMembershipList(
      this.customer,
      this.query,
      items.map((d) => new CustomerMembershipListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: CustomerMembershipListQueryData) {
    return new CustomerMembershipListQuery(this.customer, {
      ...this.query,
      ...query,
    });
  }
}

export class CustomerMembershipList extends WithListData<CustomerMembershipListItem>()(
  CustomerMembershipListQuery,
) {
  public override readonly items: readonly CustomerMembershipListItem[];
  public override readonly totalCount: number;
  public constructor(
    customer: Customer,
    query: CustomerMembershipListQueryData,
    memberships: CustomerMembershipListItem[],
    totalCount: number,
  ) {
    super(customer, query);
    this.items = Object.freeze(memberships);
    this.totalCount = totalCount;
  }
}
