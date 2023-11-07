import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ProxyModel } from "../../base/ProxyModel.js";
import { isUuid } from "../../lib/isUuid.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import type { AsyncResourceVariant } from "../../react/index.js";
import { withAsyncResourceVariant } from "../../react/index.js";
import {
  CustomerCompactData,
  CustomerData,
  CustomerListQuery,
} from "./types.js";

export class CustomerProxy extends ProxyModel {
  protected async getUuid(): Promise<string> {
    return CustomerProxy.getUuid(this.id);
  }

  public static async getUuid(numberOrUuid: string): Promise<string> {
    if (isUuid(numberOrUuid)) {
      return numberOrUuid;
    }
    const allCustomers = await CustomerListItem.list();

    const uuid = allCustomers.find(
      (p) => p.data.customerNumber === numberOrUuid,
    )?.id;

    if (uuid === undefined) {
      throw new ObjectNotFoundError(Customer.name, numberOrUuid);
    }

    return uuid;
  }

  public getDetailed = withAsyncResourceVariant(() =>
    Customer.get(this.id),
  ) as AsyncResourceVariant<CustomerDetailed, []>;

  public static ofId(id: string): CustomerProxy {
    return new CustomerProxy(id);
  }
}

class CustomerBase extends classes(
  DataModel<CustomerCompactData | CustomerData>,
  CustomerProxy,
) {
  public constructor(data: CustomerCompactData | CustomerData) {
    super([data], [data.customerId]);
  }
}

export class CustomerDetailed extends classes(
  CustomerBase,
  DataModel<CustomerData>,
) {
  public constructor(data: CustomerData) {
    super([data], [data]);
  }

  public static find = withAsyncResourceVariant(
    async (id: string): Promise<CustomerDetailed | undefined> => {
      const data = await config.behaviors.customer.find(
        await CustomerProxy.getUuid(id),
      );
      if (data !== undefined) {
        return new CustomerDetailed(data);
      }
    },
  );

  public static get = withAsyncResourceVariant(
    async (id: string): Promise<CustomerDetailed> => {
      const customer = await this.find(id);
      assertObjectFound(customer, this, id);
      return customer;
    },
  );
}

export class CustomerListItem extends classes(
  CustomerBase,
  DataModel<CustomerCompactData>,
) {
  public constructor(data: CustomerCompactData) {
    super([data], [data]);
  }

  public static list = withAsyncResourceVariant(
    async (query: CustomerListQuery = {}): Promise<Array<CustomerListItem>> => {
      const data = await config.behaviors.customer.list(query);
      return data.map((d) => new CustomerListItem(d));
    },
  );
}

export class Customer extends classes(CustomerDetailed, CustomerListItem) {}
