import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import {
  CustomerListItemData,
  CustomerData,
  CustomerListQueryData,
} from "./types.js";
import { ListQueryModel } from "../../base/ListQueryModel.js";
import { ListDataModel } from "../../base/ListDataModel.js";
import { ServerListQuery } from "../../server/index.js";
import { ProjectListQuery } from "../../project/index.js";

export class Customer extends ReferenceModel {
  public readonly servers: ServerListQuery;
  public readonly projects: ProjectListQuery;

  public constructor(id: string) {
    super(id);
    this.servers = new ServerListQuery({
      customer: this,
    });
    this.projects = new ProjectListQuery({
      customer: this,
    });
  }

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

  public static query(query: CustomerListQueryData = {}) {
    return new CustomerListQuery(query);
  }

  /** @deprecated Use query() */
  public static list = provideReact(
    async (
      query: CustomerListQueryData = {},
    ): Promise<Readonly<Array<CustomerListItem>>> =>
      new CustomerListQuery(query).execute().then((res) => res.items),
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

  public findDetailed = provideReact(
    () => Customer.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<CustomerDetailed | undefined, []>;
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

export class CustomerListQuery extends ListQueryModel<CustomerListQueryData> {
  public constructor(query: CustomerListQueryData = {}) {
    super(query);
  }

  public refine(query: CustomerListQueryData) {
    return new CustomerListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.customer.list({
      limit: config.defaultPaginationLimit,
      ...this.query,
    });

    return new CustomerList(
      this.query,
      items.map((d) => new CustomerListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({ limit: 2 }).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class CustomerList extends classes(
  CustomerListQuery,
  ListDataModel<CustomerListItem>,
) {
  public constructor(
    query: CustomerListQueryData,
    customers: CustomerListItem[],
    totalCount: number,
  ) {
    super([query], [customers, totalCount]);
  }
}
