import { classes } from "polytype";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import {
  DomainData,
  DomainListItemData,
  DomainListQueryData,
  DomainListQueryModelData,
} from "./types.js";
import { provideReact } from "../../react/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class Domain extends ReferenceModel {
  public static ofId(id: string): Domain {
    return new Domain(id);
  }

  public static find = provideReact(
    async (id: string): Promise<DomainDetailed | undefined> => {
      const data = await config.behaviors.domain.find(id);
      if (data !== undefined) {
        return new DomainDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<DomainDetailed> => {
      const domain = await this.find(id);
      assertObjectFound(domain, this, id);
      return domain;
    },
  );

  public static query = (query: DomainListQueryModelData = {}) => {
    return new DomainListQuery(query);
  };
}

export class DomainCommon extends classes(DataModel<DomainData>, Domain) {
  public constructor(data: DomainData) {
    super([data], [data.domainId]);
  }
}

export class DomainDetailed extends classes(
  DomainCommon,
  DataModel<DomainData>,
) {
  public constructor(data: DomainData) {
    super([data], [data]);
  }
}

export class DomainListItem extends classes(
  DomainCommon,
  DataModel<DomainListItemData>,
) {
  public constructor(data: DomainListItemData) {
    super([data]);
  }
}

export class DomainListQuery extends ListQueryModel<DomainListQueryData> {
  public constructor(data: DomainListQueryModelData = {}) {
    super(data);
  }

  public refine(query: DomainListQueryModelData) {
    return new DomainListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { ...query } = this.query;
    const { items, totalCount } = await config.behaviors.domain.query({
      limit: config.defaultPaginationLimit,
      ...query,
    });

    return new DomainList(
      this.query,
      items.map((d) => new DomainListItem(d)),
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

export class DomainList extends classes(
  DomainListQuery,
  ListDataModel<DomainListItem>,
) {
  public constructor(
    query: DomainListQueryData,
    domains: DomainListItem[],
    totalCount: number,
  ) {
    super([query], [domains, totalCount]);
  }
}
