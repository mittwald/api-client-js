import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { classes } from "polytype";
import {
  AppVersionData,
  AppVersionListItemData,
  AppVersionListQueryModelData,
} from "./types.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import semverCompare from "semver-compare";
import { DataModel } from "../../base/DataModel.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import { App } from "../App/index.js";
import { ListDataModel, ListQueryModel } from "../../base/index.js";

export class AppVersion extends ReferenceModel {
  public readonly appId: string;

  public constructor(id: string, appid: string) {
    super(id);
    this.appId = appid;
  }

  public static ofId(id: string, appId: string): AppVersion {
    return new AppVersion(id, appId);
  }

  public static find = provideReact(
    async (
      id: string,
      appId: string,
    ): Promise<AppVersionDetailed | undefined> => {
      const data = await config.behaviors.appVersion.find(id, appId);
      if (data !== undefined) {
        return new AppVersionDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string, appId: string): Promise<AppVersionDetailed> => {
      const appVersion = await this.find(id, appId);
      assertObjectFound(appVersion, this, id);
      return appVersion;
    },
  );

  public static query(query: AppVersionListQueryModelData) {
    return new AppVersionListQuery(query);
  }

  public getDetailed = provideReact(() =>
    AppVersion.get(this.id, this.appId),
  ) as AsyncResourceVariant<AppVersionDetailed, []>;

  public findDetailed = provideReact(
    () => AppVersion.find(this.id, this.appId),
    [this.id],
  ) as AsyncResourceVariant<AppVersionDetailed | undefined, []>;

  public listUpdateCandidates = provideReact(
    async (appId: string): Promise<Readonly<Array<AppVersionListItem>>> => {
      const { items } = await config.behaviors.appVersion.listUpdateCandidates(
        appId,
        this.id,
      );
      return Object.freeze(
        items
          .map((d) => new AppVersionListItem(d))
          .sort((a, b) =>
            semverCompare(b.data.internalVersion, a.data.internalVersion),
          ),
      );
    },
  );
}

class AppVersionCommon extends classes(
  DataModel<AppVersionData | AppVersionListItemData>,
  AppVersion,
) {
  public constructor(data: AppVersionData | AppVersionListItemData) {
    super([data], [data.id, data.appId]);
  }
}

export class AppVersionDetailed extends classes(
  AppVersionCommon,
  DataModel<AppVersionData>,
) {
  public readonly app: App;

  public constructor(data: AppVersionData) {
    super([data], [data]);
    this.app = App.ofId(data.appId);
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
      items
        .map((d) => new AppVersionListItem(d))
        .sort((a, b) =>
          semverCompare(b.data.internalVersion, a.data.internalVersion),
        ),
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
