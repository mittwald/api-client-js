import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import assertObjectFound from "../../base/assertObjectFound.js";
import {
  ContractData,
  ContractListItemData,
  ContractListQueryData,
  ContractListQueryModelData,
} from "./types.js";

export class Contract extends ReferenceModel {
  public static ofId(id: string): Contract {
    return new Contract(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ContractDetailed | undefined> => {
      const data = await config.behaviors.contract.find(id);
      if (data !== undefined) {
        return new ContractDetailed(data);
      }
    },
  );

  public static query(query: ContractListQueryModelData) {
    return new ContractListQuery(query);
  }

  public static get = provideReact(
    async (id: string): Promise<ContractDetailed> => {
      const customer = await this.find(id);
      assertObjectFound(customer, this, id);
      return customer;
    },
  );
}

class ContractCommon extends classes(
  DataModel<ContractListItemData | ContractData>,
  Contract,
) {
  public constructor(data: ContractListItemData | ContractData) {
    super([data], [data.customerId]);
  }
}

export class ContractDetailed extends classes(
  ContractCommon,
  DataModel<ContractData>,
) {
  public constructor(data: ContractData) {
    super([data], [data]);
  }
}

export class ContractListItem extends classes(
  ContractCommon,
  DataModel<ContractListItemData>,
) {
  public constructor(data: ContractListItemData) {
    super([data], [data]);
  }
}

export class ContractListQuery extends ListQueryModel<ContractListQueryModelData> {
  public constructor(query: ContractListQueryModelData) {
    super(query);
  }

  public refine(query: ContractListQueryData) {
    return new ContractListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { customer, ...query } = this.query;

    const customerId = customer.id;
    const request = {
      customerId: customerId,
      queryParameters: {
        limit: config.defaultPaginationLimit,
        ...query,
      },
    };
    const { items, totalCount } = await config.behaviors.contract.list(request);

    return new ContractList(
      this.query,
      items.map((d) => new ContractListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({ limit: 1 }).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class ContractList extends classes(
  ContractListQuery,
  ListDataModel<ContractListItem>,
) {
  public constructor(
    query: ContractListQueryModelData,
    contracts: ContractListItem[],
    totalCount: number,
  ) {
    super([query], [contracts, totalCount]);
  }
}
