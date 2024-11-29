import { classes } from "polytype";
import type {
  SystemSoftwareData,
  SystemSoftwareListItemData,
  SystemSoftwareListQueryData,
} from "./types.js";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class SystemSoftware extends ReferenceModel {
  public static ofId(id: string): SystemSoftware {
    return new SystemSoftware(id);
  }

  public static find = provideReact(
    async (id: string): Promise<SystemSoftwareDetailed | undefined> => {
      const data = await config.behaviors.systemSoftware.find(id);

      if (data) {
        return new SystemSoftwareDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<SystemSoftwareDetailed> => {
      const systemSoftware = await this.find(id);
      assertObjectFound(systemSoftware, this, id);
      return systemSoftware;
    },
  );

  public findDetailed = provideReact(
    () => SystemSoftware.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<SystemSoftwareDetailed | undefined>>;

  public getDetailed = provideReact(
    () => SystemSoftware.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<SystemSoftwareDetailed>>;
}

class SystemSoftwareCommon extends classes(
  DataModel<SystemSoftwareData | SystemSoftwareListItemData>,
  SystemSoftware,
) {
  public constructor(data: SystemSoftwareData | SystemSoftwareListItemData) {
    super([data], [data.id]);
  }
}

export class SystemSoftwareDetailed extends classes(
  SystemSoftwareCommon,
  DataModel<SystemSoftwareData>,
) {
  public constructor(data: SystemSoftwareData) {
    super([data], [data]);
  }
}

export class SystemSoftwareListItem extends classes(
  SystemSoftwareCommon,
  DataModel<SystemSoftwareListItemData>,
) {
  public constructor(data: SystemSoftwareListItemData) {
    super([data], [data]);
  }
}

export class SystemSoftwareListQuery extends ListQueryModel<SystemSoftwareListQueryData> {
  public constructor(query: SystemSoftwareListQueryData = {}) {
    super(query);
  }

  public refine(query: SystemSoftwareListQueryData) {
    return new SystemSoftwareListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.systemSoftware.list(
      this.query,
    );

    return new SystemSoftwareList(
      this.query,
      items.map((d) => new SystemSoftwareListItem(d)),
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

export class SystemSoftwareList extends classes(
  SystemSoftwareListQuery,
  ListDataModel<SystemSoftwareListItem>,
) {
  public constructor(
    query: SystemSoftwareListQueryData,
    systemSoftwares: SystemSoftwareListItem[],
    totalCount: number,
  ) {
    super([query], [systemSoftwares, totalCount]);
  }
}
