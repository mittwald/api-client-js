import { ReferenceModel } from "../../base/ReferenceModel.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { DataModel } from "../../base/DataModel.js";
import { classes } from "polytype";
import {
  AppVersionData,
  AppVersionListItemData,
  AppVersionListQuery,
} from "./types.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import semverCompare from "semver-compare";

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
        return new AppVersionDetailed(data, appId);
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

  public getDetailed = provideReact(() =>
    AppVersion.get(this.id, this.appId),
  ) as AsyncResourceVariant<AppVersionDetailed, []>;

  public static list = provideReact(
    async (
      appId: string,
      query: AppVersionListQuery = {},
    ): Promise<Readonly<Array<AppVersionListItem>>> => {
      const data = await config.behaviors.appVersion.list(appId, query);
      return Object.freeze(
        data
          .map((d) => new AppVersionListItem(d, appId))
          .sort((a, b) =>
            semverCompare(b.data.internalVersion, a.data.internalVersion),
          ),
      );
    },
  );

  public listUpdateCandidates = provideReact(
    async (appId: string): Promise<Readonly<Array<AppVersionListItem>>> => {
      const data = await config.behaviors.appVersion.listUpdateCandidates(
        appId,
        this.id,
      );
      return Object.freeze(
        data
          .map((d) => new AppVersionListItem(d, appId))
          .sort((a, b) =>
            semverCompare(b.data.internalVersion, a.data.internalVersion),
          ),
      );
    },
  );
}

// ToDo use appId from data when new app specs are in prod

class AppVersionCommon extends classes(
  DataModel<AppVersionData | AppVersionListItemData>,
  AppVersion,
) {
  public constructor(
    data: AppVersionData | AppVersionListItemData,
    appId: string,
  ) {
    super([data], [data.id, appId]);
  }
}

export class AppVersionDetailed extends classes(
  AppVersionCommon,
  DataModel<AppVersionData>,
) {
  public constructor(data: AppVersionData, appId: string) {
    super([data, appId], [data]);
  }
}

export class AppVersionListItem extends classes(
  AppVersionCommon,
  DataModel<AppVersionListItemData>,
) {
  public constructor(data: AppVersionListItemData, appId: string) {
    super([data, appId], [data]);
  }
}
