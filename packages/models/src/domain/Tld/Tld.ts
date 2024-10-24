import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { classes } from "polytype";
import {
  TldData,
  TldListItemData,
  TldListQueryData,
  TldListQueryModelData,
} from "./types.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";

export class Tld extends ReferenceModel {
  public static ofTld(tld: string): Tld {
    return new Tld(tld);
  }
}

export class TldCommon extends classes(Tld, DataModel<TldData>) {
  public constructor(data: TldData) {
    super([data.tld], [data]);
  }
}

export class TldDetailed extends classes(TldCommon, DataModel<TldData>) {
  public constructor(data: TldData) {
    super([data], [data]);
  }
}

export class TldListItem extends classes(
  TldCommon,
  DataModel<TldListItemData>,
) {
  public constructor(data: TldListItemData) {
    super([data]);
  }
}

export class TldListQuery extends ListQueryModel<TldListQueryData> {
  public constructor(query: TldListQueryModelData = {}) {
    super(query);
  }

  public refine(query: TldListQueryModelData) {
    return new TldListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { ...query } = this.query;
    const { items, totalCount } = await config.behaviors.tld.query({
      ...query,
    });

    return new TldList(
      this.query,
      items.map((t) => new TldListItem(t)),
      totalCount,
    );
  }, [this.queryId]);
}

export class TldList extends classes(TldListQuery, ListDataModel<TldListItem>) {
  public constructor(
    data: TldListQueryData,
    tlds: TldListItem[],
    totalCount: number,
  ) {
    super([data], [tlds, totalCount]);
  }
}
