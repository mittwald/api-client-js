import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import type { AsyncResourceVariant } from "../../lib/provideReact.js";
import { provideReact } from "../../lib/provideReact.js";
import {
  CustomerListItemData,
  CustomerData,
  CustomerListQuery,
} from "./types.js";

export class Customer extends ReferenceModel {
  public static ofId(id: string): Customer {
    return new Customer(id);
  }

  public static find = provideReact(
    async (id: string): Promise<CustomerDetailed | undefined> => {
      const data = await config.behaviors.customer.find(id);
      if (data !== undefined) {
        return new CustomerDetailed(data);
      }
    },
  );

  public static list = provideReact(
    async (
      query: CustomerListQuery = {},
    ): Promise<Readonly<Array<CustomerListItem>>> => {
      const data = await config.behaviors.customer.list(query);
      return Object.freeze(data.map((d) => new CustomerListItem(d)));
    },
  );

  public static get = provideReact(
    async (id: string): Promise<CustomerDetailed> => {
      const customer = await this.find(id);
      assertObjectFound(customer, this, id);
      return customer;
    },
  );

  public getDetailed = provideReact(
    () => Customer.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<CustomerDetailed, []>;
}

// Common class for future extension
class CustomerCommon extends classes(
  DataModel<CustomerListItemData | CustomerData>,
  Customer,
) {
  public constructor(data: CustomerListItemData | CustomerData) {
    super([data], [data.customerId]);
  }
}

export class CustomerDetailed extends classes(
  CustomerCommon,
  DataModel<CustomerData>,
) {
  public constructor(data: CustomerData) {
    super([data], [data]);
  }
}

export class CustomerListItem extends classes(
  CustomerCommon,
  DataModel<CustomerListItemData>,
) {
  public constructor(data: CustomerListItemData) {
    super([data], [data]);
  }
}
