import { config } from "../../config/config.js";
import { classes } from "polytype";
import assertObjectFound from "../../base/assertObjectFound.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import {
  ContributorData,
  ContributorListItemData,
  ContributorListQueryData,
} from "./types.js";
import { Customer } from "../../customer/index.js";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";

export class Contributor extends ReferenceModel {
  public static ofId(id: string): Contributor {
    return new Contributor(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ContributorDetailed | undefined> => {
      const data = await config.behaviors.contributor.find(id);
      if (data !== undefined) {
        return new ContributorDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ContributorDetailed> => {
      const contributor = await this.find(id);
      assertObjectFound(contributor, this, id);
      return contributor;
    },
  );

  public getDetailed = provideReact(
    () => Contributor.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<ContributorDetailed, []>;

  public findDetailed = provideReact(
    () => Contributor.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<ContributorDetailed | undefined, []>;

  public query(query: ContributorListQueryData = {}) {
    return new ContributorListQuery(query);
  }
}

class ContributorCommon extends classes(
  DataModel<ContributorData | ContributorListItemData>,
  Contributor,
) {
  public readonly customer: Customer;

  public constructor(data: ContributorData | ContributorListItemData) {
    super([data], [data.id]);
    this.customer = Customer.ofId(data.customerId);
  }
}

export class ContributorDetailed extends classes(
  ContributorCommon,
  DataModel<ContributorData>,
) {
  public constructor(data: ContributorData) {
    super([data], [data]);
  }
}

export class ContributorListItem extends classes(
  ContributorCommon,
  DataModel<ContributorListItemData>,
) {
  public constructor(data: ContributorListItemData) {
    super([data], [data]);
  }
}

export class ContributorListQuery extends ListQueryModel<ContributorListQueryData> {
  public constructor(query: ContributorListQueryData = {}) {
    super(query);
  }

  public refine(query: ContributorListQueryData) {
    return new ContributorListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.contributor.list(
      this.query,
    );

    return new ContributorList(
      this.query,
      items.map((d) => new ContributorListItem(d)),
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

export class ContributorList extends classes(
  ContributorListQuery,
  ListDataModel<ContributorListItem>,
) {
  public constructor(
    query: ContributorListQueryData,
    contributors: ContributorListItem[],
    totalCount: number,
  ) {
    super([query], [contributors, totalCount]);
  }
}
