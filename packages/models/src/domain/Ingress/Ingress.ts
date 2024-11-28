import { config } from "../../config/config.js";
import { classes } from "polytype";
import assertObjectFound from "../../base/assertObjectFound.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import {
  IngressData,
  IngressListItemData,
  IngressListModelQueryData,
  IngressListQueryData,
} from "./types.js";
import {
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
  DataModel,
  AggregateMetaData,
} from "../../base/index.js";
import { extractId } from "../../base/index.js";
import { omit } from "remeda";
import { IngressPath } from "../IngressPath/index.js";

export class Ingress extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("ingress", "ingress");

  public static ofId(id: string): Ingress {
    return new Ingress(id);
  }

  public static ofHostname(hostname: string): Ingress {
    return Ingress.ofId(hostname);
  }

  /** @deprecated: use query() or project.ingresses */
  public static list = provideReact(
    async (
      query: IngressListQueryData = {},
    ): Promise<Readonly<Array<IngressListItem>>> =>
      new IngressListQuery(query).execute().then((r) => r.items),
  );

  public static find = provideReact(
    async (id: string): Promise<IngressDetailed | undefined> => {
      const data = await config.behaviors.ingress.find(id);
      if (data !== undefined) {
        return new IngressDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<IngressDetailed> => {
      const ingress = await this.find(id);
      assertObjectFound(ingress, this, id);
      return ingress;
    },
  );

  public getDetailed = provideReact(
    () => Ingress.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<IngressDetailed>>;

  public findDetailed = provideReact(
    () => Ingress.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<IngressDetailed | undefined>>;

  public static query = (query: IngressListModelQueryData = {}) =>
    new IngressListQuery(query);

  public static findDefaultIngress = provideReact(
    async (project?: string): Promise<IngressListItem | undefined> => {
      const ingresses = await this.query({ project }).execute();

      return ingresses.items.find((i) => i.data.isDefault);
    },
  );
}

export class IngressCommon extends classes(
  DataModel<IngressListItemData | IngressData>,
  Ingress,
) {
  public readonly baseUrl: string;
  public readonly paths: ReadonlyArray<IngressPath>;
  public readonly defaultPath: IngressPath;

  public constructor(data: IngressListItemData | IngressData) {
    super([data], [data.id]);
    this.baseUrl = `https://${data.hostname}`;
    this.paths = Object.freeze(data.paths.map((p) => new IngressPath(this, p)));

    const defaultPath = this.paths.find((p) => p.path === "/");
    if (defaultPath === undefined) {
      throw new Error(`Ingress ${this.describe()} has no default path.`);
    }
    this.defaultPath = defaultPath;
  }
}

export class IngressDetailed extends classes(
  IngressCommon,
  DataModel<IngressData>,
) {
  public constructor(data: IngressData) {
    super([data], [data]);
  }
}

export class IngressListItem extends classes(
  IngressCommon,
  DataModel<IngressListItemData>,
) {
  public constructor(data: IngressListItemData) {
    super([data], [data]);
  }
}

export class IngressListQuery extends ListQueryModel<IngressListModelQueryData> {
  public refine(query: IngressListModelQueryData) {
    return new IngressListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.ingress.list({
      ...omit(this.query, ["project"]),
      projectId: extractId(this.query.project),
    });

    return new IngressList(
      this.query as IngressListQueryData,
      items.map((d) => new IngressListItem(d)),
      totalCount,
    );
  }, [this.queryId]);
}

export class IngressList extends classes(
  IngressListQuery,
  ListDataModel<IngressListItem>,
) {
  public constructor(
    query: IngressListQueryData,
    ingresses: IngressListItem[],
    totalCount: number,
  ) {
    super([query], [ingresses, totalCount]);
  }
}
