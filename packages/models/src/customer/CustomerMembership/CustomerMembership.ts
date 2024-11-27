import { classes } from "polytype";
import type {
  CustomerMembershipData,
  CustomerMembershipListItemData,
  CustomerMembershipListQueryData,
} from "./types.js";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Customer } from "../Customer/index.js";
import { User } from "../../user/User/index.js";
import { CustomerRole } from "../CustomerRole/index.js";

export class CustomerMembership extends ReferenceModel {
  public static ofId(id: string): CustomerMembership {
    return new CustomerMembership(id);
  }

  public static find = provideReact(
    async (id: string): Promise<CustomerMembershipDetailed | undefined> => {
      const data = await config.behaviors.customerMembership.find(id);
      if (data) {
        return new CustomerMembershipDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<CustomerMembershipDetailed> => {
      const customerMembership = await this.find(id);
      assertObjectFound(customerMembership, this, id);
      return customerMembership;
    },
  );

  public findDetailed = provideReact((): Promise<
    CustomerMembershipDetailed | undefined
  > => {
    return CustomerMembership.find(this.id);
  }, [this.id]) as AsyncResourceVariant<
    () => Promise<CustomerMembershipDetailed | undefined>
  >;

  public getDetailed = provideReact((): Promise<CustomerMembershipDetailed> => {
    return CustomerMembership.get(this.id);
  }, [this.id]) as AsyncResourceVariant<
    () => Promise<CustomerMembershipDetailed>
  >;

  public static query(
    customer: Customer,
    query: CustomerMembershipListQueryData = {},
  ) {
    return new CustomerMembershipListQuery(customer, query);
  }
}

class CustomerMembershipCommon extends classes(
  DataModel<CustomerMembershipData | CustomerMembershipListItemData>,
  CustomerMembership,
) {
  public readonly user: User;
  public readonly role: CustomerRole;

  public constructor(
    data: CustomerMembershipData | CustomerMembershipListItemData,
  ) {
    super([data], [data.id]);
    this.user = User.ofId(data.userId);
    this.role = new CustomerRole(data.role);
  }
}

export class CustomerMembershipDetailed extends classes(
  CustomerMembershipCommon,
  DataModel<CustomerMembershipData>,
) {
  public constructor(data: CustomerMembershipData) {
    super([data], [data]);
  }
}

export class CustomerMembershipListItem extends classes(
  CustomerMembershipCommon,
  DataModel<CustomerMembershipListItemData>,
) {
  public constructor(data: CustomerMembershipListItemData) {
    super([data], [data]);
  }
}

export class CustomerMembershipListQuery extends ListQueryModel<CustomerMembershipListQueryData> {
  public readonly customer: Customer;

  public constructor(
    customer: Customer,
    query: CustomerMembershipListQueryData = {},
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    super(query, { dependencies: [customer.id] });
    this.customer = customer;
  }

  public refine(query: CustomerMembershipListQueryData) {
    return new CustomerMembershipListQuery(this.customer, {
      ...this.query,
      ...query,
    });
  }

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({ limit: 1 }).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);

  public execute = provideReact(async () => {
    const { items, totalCount } =
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
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }, [this.queryId]);
}

export class CustomerMembershipList extends classes(
  CustomerMembershipListQuery,
  ListDataModel<CustomerMembershipListItem>,
) {
  public constructor(
    customer: Customer,
    query: CustomerMembershipListQueryData,
    memberships: CustomerMembershipListItem[],
    totalCount: number,
  ) {
    super([customer, query], [memberships, totalCount]);
  }
}
