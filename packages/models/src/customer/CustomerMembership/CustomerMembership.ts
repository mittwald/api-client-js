import { classes } from "polytype";
import type {
  CustomerMembershipData,
  CustomerMembershipListItemData,
} from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

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
    CustomerMembershipDetailed | undefined,
    []
  >;

  public getDetailed = provideReact((): Promise<CustomerMembershipDetailed> => {
    return CustomerMembership.get(this.id);
  }, [this.id]) as AsyncResourceVariant<CustomerMembershipDetailed, []>;
}

class CustomerMembershipCommon extends classes(
  DataModel<CustomerMembershipData | CustomerMembershipListItemData>,
  CustomerMembership,
) {
  public constructor(
    data: CustomerMembershipData | CustomerMembershipListItemData,
  ) {
    super([data], [data.id]);
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
