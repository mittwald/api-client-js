import { classes } from "polytype";
import type {
  ExtensionData,
  ExtensionListItemData,
  ExtensionListQueryData,
} from "./types.js";
import {
  DataModel,
  ReferenceModel,
  AggregateMetaData,
  ListQueryModel,
  ListDataModel,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Contributor } from "../Contributor/index.js";

export class Extension extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "extension",
    "extension",
  );

  public static ofId(id: string): Extension {
    return new Extension(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ExtensionDetailed | undefined> => {
      const data = await config.behaviors.extension.find(id);

      if (data) {
        return new ExtensionDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ExtensionDetailed> => {
      const extension = await this.find(id);
      assertObjectFound(extension, this, id);
      return extension;
    },
  );

  public findDetailed = provideReact(
    () => Extension.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<ExtensionDetailed | undefined>>;

  public getDetailed = provideReact(
    () => Extension.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<ExtensionDetailed>>;

  public query(query: ExtensionListQueryData = {}) {
    return new ExtensionListQuery(query);
  }
}

class ExtensionCommon extends classes(
  DataModel<ExtensionData | ExtensionListItemData>,
  Extension,
) {
  public readonly contributor: Contributor;
  public constructor(data: ExtensionData | ExtensionListItemData) {
    super([data], [data.id]);
    this.contributor = Contributor.ofId(data.contributorId);
  }
}

export class ExtensionDetailed extends classes(
  ExtensionCommon,
  DataModel<ExtensionData>,
) {
  public constructor(data: ExtensionData) {
    super([data], [data]);
  }
}

export class ExtensionListItem extends classes(
  ExtensionCommon,
  DataModel<ExtensionListItemData>,
) {
  public constructor(data: ExtensionListItemData) {
    super([data], [data]);
  }
}

export class ExtensionListQuery extends ListQueryModel<ExtensionListQueryData> {
  public constructor(query: ExtensionListQueryData = {}) {
    super(query);
  }

  public refine(query: ExtensionListQueryData) {
    return new ExtensionListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.extension.list(
      this.query,
    );

    return new ExtensionList(
      this.query,
      items.map((d) => new ExtensionListItem(d)),
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

export class ExtensionList extends classes(
  ExtensionListQuery,
  ListDataModel<ExtensionListItem>,
) {
  public constructor(
    query: ExtensionListQueryData,
    extensions: ExtensionListItem[],
    totalCount: number,
  ) {
    super([query], [extensions, totalCount]);
  }
}
