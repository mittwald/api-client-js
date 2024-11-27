import { classes } from "polytype";
import type { AppVersionData, AppVersionListItemData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
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
