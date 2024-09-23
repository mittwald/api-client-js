import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import {
  AsyncResourceVariant,
  provideReact,
} from "../../react/provideReact.js";
import {
  IngressData,
  IngressListItemData,
  IngressListQueryData,
  IngressListQueryModelData,
} from "./types.js";
import { IngressPath } from "../IngressPath/IngressPath.js";
import { ListQueryModel } from "../../base/ListQueryModel.js";
import { ListDataModel } from "../../base/ListDataModel.js";

export class Ingress extends ReferenceModel {
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

export class IngressListQuery extends ListQueryModel<IngressListQueryModelData> {
  public constructor(query: IngressListQueryModelData = {}) {
    super(query);
  }

  public refine(query: IngressListQueryModelData = {}) {
    return new IngressListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { project, ...query } = this.query;
    const { items, totalCount } = await config.behaviors.ingress.list({
      /** @todo: use this code when pagination is supported by API */
      // limit: config.defaultPaginationLimit,
      ...query,
      projectId: project?.id,
    });

    return new IngressList(
      this.query,
      items.map((d) => new IngressListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    /** @todo: use this code when pagination is supported by API */
    // const { totalCount } = await this.refine({ limit: 1 }).execute();
    // return totalCount;
    const { items } = await this.refine({}).execute();
    return items.length;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    /** @todo: use this code when pagination is supported by API */
    // const { items, totalCount } = await this.refine({ limit: 2 }).execute();
    // if (totalCount === 1) {
    //   return items[0];
    // }
    const { items, totalCount } = await this.refine({}).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class IngressList extends classes(
  IngressListQuery,
  ListDataModel<IngressListItem>,
) {
  public constructor(
    query: IngressListQueryModelData,
    ingresses: IngressListItem[],
    totalCount: number,
  ) {
    super([query], [ingresses, totalCount]);
  }

  public getDefault() {
    const defaultIngress = this.items.find((i) => i.data.isDefault);
    assertObjectFound(defaultIngress, IngressListItem, "IngressList");
    return defaultIngress;
  }
}
