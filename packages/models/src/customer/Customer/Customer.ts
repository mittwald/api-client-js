import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import { isUuid } from "../../lib/isUuid.js";
import type { AsyncResourceVariant } from "../../react/index.js";
import { withAsyncResourceVariant } from "../../react/index.js";
import {
  CustomerCompactData,
  CustomerData,
  CustomerListQuery,
} from "./types.js";

export class Customer extends ReferenceModel {
  public static ofId(id: string): Customer {
    return new Customer(id);
  }

  public static find = withAsyncResourceVariant(
    async (id: string): Promise<CustomerDetailed | undefined> => {
      const data = await config.behaviors.customer.find(
        await Customer.getUuid(id),
      );
      if (data !== undefined) {
        return new CustomerDetailed(data);
      }
    },
  );

  public static list = withAsyncResourceVariant(
    async (
      query: CustomerListQuery = {},
    ): Promise<Readonly<Array<CustomerListItem>>> => {
      const data = await config.behaviors.customer.list(query);
      return Object.freeze(data.map((d) => new CustomerListItem(d)));
    },
  );

  public static get = withAsyncResourceVariant(
    async (id: string): Promise<CustomerDetailed> => {
      const customer = await this.find(id);
      assertObjectFound(customer, this, id);
      return customer;
    },
  );

  private static async getUuid(numberOrUuid: string): Promise<string> {
    if (isUuid(numberOrUuid)) {
      return numberOrUuid;
    }
    const allCustomers = await CustomerListItem.list();

    const uuid = allCustomers.find(
      (p) => p.data.customerNumber === numberOrUuid,
    )?.id;
    assertObjectFound(uuid, Customer, numberOrUuid);
    return uuid;
  }

  public getDetailed = withAsyncResourceVariant(() =>
    Customer.get(this.id),
  ) as AsyncResourceVariant<CustomerDetailed, []>;
}

// Common class for future extension
class CustomerCommon extends classes(
  DataModel<CustomerCompactData | CustomerData>,
  Customer,
) {
  public constructor(data: CustomerCompactData | CustomerData) {
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
  DataModel<CustomerCompactData>,
) {
  public constructor(data: CustomerCompactData) {
    super([data], [data]);
  }
}
