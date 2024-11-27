import { classes } from "polytype";
import type {
  ExtensionInstanceConsentToScopesRequestData,
  ExtensionInstanceCreateRequestData,
  ExtensionInstanceData,
  ExtensionInstanceListItemData,
  ExtensionInstanceListQueryModelData,
} from "./types.js";
import {
  AggregateMetaData,
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Project } from "../../project/index.js";
import { Customer } from "../../customer/index.js";

export class ExtensionInstance extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "extension",
    "extensionInstance",
  );

  public static ofId(id: string): ExtensionInstance {
    return new ExtensionInstance(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ExtensionInstanceDetailed | undefined> => {
      const data = await config.behaviors.extensionInstance.find(id);

      if (data) {
        return new ExtensionInstanceDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ExtensionInstanceDetailed> => {
      const extensionInstance = await this.find(id);
      assertObjectFound(extensionInstance, this, id);
      return extensionInstance;
    },
  );

  public findDetailed = provideReact(async (): Promise<
    ExtensionInstanceDetailed | undefined
  > => {
    return await ExtensionInstance.find(this.id);
  }, [this.id]) as AsyncResourceVariant<
    () => Promise<ExtensionInstanceDetailed | undefined>
  >;

  public getDetailed = provideReact(
    () => ExtensionInstance.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<ExtensionInstanceDetailed>>;

  public static async create(
    data: ExtensionInstanceCreateRequestData,
  ): Promise<ExtensionInstance> {
    const { id } = await config.behaviors.extensionInstance.create(data);

    return new ExtensionInstance(id);
  }

  public async consentToScopes(
    data: ExtensionInstanceConsentToScopesRequestData,
  ): Promise<void> {
    await config.behaviors.extensionInstance.consentToScopes(this.id, data);
  }

  public async enable(): Promise<void> {
    await config.behaviors.extensionInstance.enable(this.id);
  }

  public async disable(): Promise<void> {
    await config.behaviors.extensionInstance.disable(this.id);
  }

  public async delete(): Promise<void> {
    await config.behaviors.extensionInstance.delete(this.id);
  }
}

class ExtensionInstanceCommon extends classes(
  DataModel<ExtensionInstanceData | ExtensionInstanceListItemData>,
  ExtensionInstance,
) {
  public constructor(
    data: ExtensionInstanceData | ExtensionInstanceListItemData,
  ) {
    super([data], [data.id]);
  }
}

export class ExtensionInstanceDetailed extends classes(
  ExtensionInstanceCommon,
  DataModel<ExtensionInstanceData>,
) {
  public constructor(data: ExtensionInstanceData) {
    super([data], [data]);
  }
}

export class ExtensionInstanceListItem extends classes(
  ExtensionInstanceCommon,
  DataModel<ExtensionInstanceListItemData>,
) {
  public constructor(data: ExtensionInstanceListItemData) {
    super([data], [data]);
  }
}

export class ExtensionInstanceListQuery extends ListQueryModel<ExtensionInstanceListQueryModelData> {
  public constructor(query: ExtensionInstanceListQueryModelData) {
    super(query);
  }

  public refine(query: ExtensionInstanceListQueryModelData) {
    return new ExtensionInstanceListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { context, ...query } = this.query;
    const { items, totalCount } = await config.behaviors.extensionInstance.list(
      {
        ...query,
        context: context instanceof Project ? "project" : "customer",
        contextId: context.id,
      },
    );

    return new ExtensionInstanceList(
      this.query,
      items.map((d) => new ExtensionInstanceListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(
    async (context: Project | Customer) => {
      const { totalCount } = await this.refine({ context, limit: 1 }).execute();
      return totalCount;
    },
    [this.queryId],
  );

  public findOneAndOnly = provideReact(
    async (context: Project | Customer) => {
      const { items, totalCount } = await this.refine({
        context,
        limit: 2,
      }).execute();
      if (totalCount === 1) {
        return items[0];
      }
    },
    [this.queryId],
  );
}

export class ExtensionInstanceList extends classes(
  ExtensionInstanceListQuery,
  ListDataModel<ExtensionInstanceListItem>,
) {
  public constructor(
    query: ExtensionInstanceListQueryModelData,
    extensionInstances: ExtensionInstanceListItem[],
    totalCount: number,
  ) {
    super([query], [extensionInstances, totalCount]);
  }
}
