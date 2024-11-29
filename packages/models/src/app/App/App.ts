import { classes } from "polytype";
import {
  AppData,
  AppListItemData,
  AppListQueryData,
  AppNames,
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

export class App extends ReferenceModel {
  public static ofId(id: string): App {
    return new App(id);
  }

  public static find = provideReact(
    async (id: string): Promise<AppDetailed | undefined> => {
      const data = await config.behaviors.app.find(id);
      if (data) {
        return new AppDetailed(data);
      }
    },
  );

  public static get = provideReact(async (id: string): Promise<AppDetailed> => {
    const app = await this.find(id);
    assertObjectFound(app, this, id);
    return app;
  });

  public findDetailed = provideReact(
    () => App.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<AppDetailed | undefined>>;

  public getDetailed = provideReact(
    () => App.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<AppDetailed>>;

  public static query = (query: AppListQueryData = {}) =>
    new AppListQuery(query);
}

class AppCommon extends classes(DataModel<AppData | AppListItemData>, App) {
  public readonly isCustomApp: boolean;
  public constructor(data: AppData | AppListItemData) {
    super([data], [data.id]);

    this.isCustomApp =
      data.name === AppNames.node ||
      data.name === AppNames.php ||
      data.name === AppNames.staticapp ||
      data.name === AppNames.python;
  }
}

export class AppDetailed extends classes(AppCommon, DataModel<AppData>) {
  public constructor(data: AppData) {
    super([data], [data]);
  }
}

export class AppListItem extends classes(
  AppCommon,
  DataModel<AppListItemData>,
) {
  public constructor(data: AppListItemData) {
    super([data], [data]);
  }
}

export class AppListQuery extends ListQueryModel<AppListQueryData> {
  public constructor(query: AppListQueryData = {}) {
    super(query);
  }

  public refine(query: AppListQueryData) {
    return new AppListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.app.list(this.query);

    return new AppList(
      this.query,
      items.map((d) => new AppListItem(d)),
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

export class AppList extends classes(AppListQuery, ListDataModel<AppListItem>) {
  public constructor(
    query: AppListQueryData,
    apps: AppListItem[],
    totalCount: number,
  ) {
    super([query], [apps, totalCount]);
  }
}
