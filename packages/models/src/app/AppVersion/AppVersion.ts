import { classes } from "polytype";
import type {
  AppVersionData,
  AppVersionListItemData,
  AppVersionListQueryData,
} from "./types.js";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { App } from "../App/index.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { config } from "../../config/config.js";

export class AppVersion extends ReferenceModel {
  public readonly app: App;

  public constructor(id: string, app: App) {
    super(id);
    this.app = app;
  }

  public static ofId(id: string, app: App): AppVersion {
    return new AppVersion(id, app);
  }

  public static find = provideReact(
    async (id: string, app: App): Promise<AppVersionDetailed | undefined> => {
      const data = await config.behaviors.appVersion.find(id, app.id);
      if (data) {
        return new AppVersionDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string, app: App): Promise<AppVersionDetailed> => {
      const appVersion = await this.find(id, app);
      assertObjectFound(appVersion, this, id);
      return appVersion;
    },
  );

  public findDetailed = provideReact(
    () => AppVersion.find(this.id, this.app),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<AppVersionDetailed | undefined>>;

  public getDetailed = provideReact(
    () => AppVersion.get(this.id, this.app),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<AppVersionDetailed>>;

  public static query(app: App, query: AppVersionListQueryData = {}) {
    return new AppVersionListQuery(app, query);
  }
}

class AppVersionCommon extends classes(
  DataModel<AppVersionData | AppVersionListItemData>,
  AppVersion,
) {
  public constructor(data: AppVersionData | AppVersionListItemData) {
    super([data], [data.id, App.ofId(data.appId)]);
  }
}

export class AppVersionDetailed extends classes(
  AppVersionCommon,
  DataModel<AppVersionData>,
) {
  public constructor(data: AppVersionData) {
    super([data], [data]);
  }
}

export class AppVersionListItem extends classes(
  AppVersionCommon,
  DataModel<AppVersionListItemData>,
) {
  public constructor(data: AppVersionListItemData) {
    super([data], [data]);
  }
}

export class AppVersionListQuery extends ListQueryModel<AppVersionListQueryData> {
  public readonly app: App;
  public constructor(app: App, query: AppVersionListQueryData = {}) {
    super(query, {
      dependencies: [app.id],
    });
    this.app = app;
  }

  public refine(query: AppVersionListQueryData) {
    return new AppVersionListQuery(this.app, {
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.appVersion.list(
      this.app.id,
      this.query,
    );

    return new AppVersionList(
      this.app,
      this.query,
      items.map((d) => new AppVersionListItem(d)),
      totalCount,
    );
  }, [this.queryId]);
}

export class AppVersionList extends classes(
  AppVersionListQuery,
  ListDataModel<AppVersionListItem>,
) {
  public constructor(
    app: App,
    query: AppVersionListQueryData,
    appVersions: AppVersionListItem[],
    totalCount: number,
  ) {
    super([app, query], [appVersions, totalCount]);
  }
}
