import { config } from "../../config/config.js";
import { classes } from "polytype";
import assertObjectFound from "../../base/assertObjectFound.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import {
  CustomerData,
  CustomerListItemData,
  CustomerListQueryData,
  CustomerUpdateRequestData,
} from "./types.js";
import {
  AggregateMetaData,
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { Server, ServerListQuery } from "../../server/index.js";
import { ProjectListQuery } from "../../project/index.js";
import { InvoiceSettings } from "../InvoiceSettings/index.js";
import {
  CustomerMembership,
  CustomerMembershipListQuery,
} from "../CustomerMembership/index.js";
import { ContractPartner } from "../ContractPartner/index.js";
import { File } from "../../file/index.js";

export class Customer extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "customer",
    "customer",
  );
  public readonly servers: ServerListQuery;
  public readonly projects: ProjectListQuery;
  public readonly memberships: CustomerMembershipListQuery;
  public readonly invoiceSettings: InvoiceSettings;

  public constructor(id: string) {
    super(id);
    this.servers = Server.query({ customer: this });
    this.projects = new ProjectListQuery({
      customer: this,
    });
    this.invoiceSettings = InvoiceSettings.ofCustomerId(id);
    this.memberships = CustomerMembership.query(this);
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

  public static get = provideReact(
    async (id: string): Promise<CustomerDetailed> => {
      const customer = await this.find(id);
      assertObjectFound(customer, this, id);
      return customer;
    },
  );

  public findDetailed = provideReact(
    () => Customer.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<CustomerDetailed | undefined>>;

  public getDetailed = provideReact(
    () => Customer.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<CustomerDetailed>>;

  public static query(query: CustomerListQueryData = {}) {
    return new CustomerListQuery(query);
  }

  public async update(data: CustomerUpdateRequestData): Promise<void> {
    await config.behaviors.customer.update(this.id, data);
  }
}

class CustomerCommon extends classes(
  DataModel<CustomerListItemData | CustomerData>,
  Customer,
) {
  public readonly name: string;
  public readonly number: string;
  public readonly mStudioPath: string;
  public readonly contractPartner?: ContractPartner;
  public readonly avatar?: File;

  public constructor(data: CustomerListItemData | CustomerData) {
    super([data], [data.customerId]);
    this.name = data.name;
    this.number = data.customerNumber;
    this.mStudioPath = `/app/organizations/${this.id}`;
    if (data.owner) {
      this.contractPartner = new ContractPartner(data.owner);
    }
    this.avatar = data.avatarRefId ? File.ofId(data.avatarRefId) : undefined;
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
