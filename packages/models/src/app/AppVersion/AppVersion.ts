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
  public static ofId(id: string): AppVersion {
    return new AppVersion(id);
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

  public getDetailed = provideReact(() =>
    AppVersion.get(this.id),
  ) as AsyncResourceVariant<AppVersionDetailed, []>;

  public static list = provideReact(
    async (
      appId: string,
      query: AppVersionListQuery = {},
    ): Promise<Readonly<Array<AppVersionListItem>>> => {
      const data = await config.behaviors.appVersion.list(appId, query);
      return Object.freeze(
        data
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
    super([data], [data.id]);
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
