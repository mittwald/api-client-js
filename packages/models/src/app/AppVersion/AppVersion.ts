import { classes } from "polytype";
import type {
  AppVersionData,
  AppVersionListItemData,
  AppVersionListQueryModelData,
} from "./types.js";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
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
  ) as AsyncResourceVariant<AppVersionDetailed | undefined, []>;

  public getDetailed = provideReact(
    () => AppVersion.get(this.id, this.app),
    [this.id],
  ) as AsyncResourceVariant<AppVersionDetailed, []>;

  public static query(query: AppVersionListQueryModelData) {
    return new AppVersionListQuery(query);
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

export class AppVersionListQuery extends ListQueryModel<AppVersionListQueryModelData> {
  public constructor(query: AppVersionListQueryModelData) {
    super(query);
  }

  public refine(query: AppVersionListQueryModelData) {
    return new AppVersionListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { app, ...query } = this.query;
    const { items, totalCount } = await config.behaviors.appVersion.list(
      app.id,
      {
        ...query,
      },
    );

    return new AppVersionList(
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
    query: AppVersionListQueryModelData,
    appVersions: AppVersionListItem[],
    totalCount: number,
  ) {
    super([query], [appVersions, totalCount]);
  }
}
