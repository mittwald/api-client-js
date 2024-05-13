import { ReferenceModel } from "../../base/ReferenceModel.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import { DataModel } from "../../base/DataModel.js";
import { classes } from "polytype";
import { AppActions, AppData, AppListItemData, AppNames } from "./types.js";
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

  public getDetailed = provideReact(() =>
    App.get(this.id),
  ) as AsyncResourceVariant<AppDetailed, []>;

  public static list = provideReact(
    async (): Promise<Readonly<Array<AppListItem>>> => {
      const data = await config.behaviors.app.list();

      return Object.freeze(data.map((d) => new AppListItem(d)));
    },
  );

  public static async findByName(name: AppNames): Promise<App | undefined> {
    const appList = await App.list();

    return appList.find((a) => a.data.name === name);
  }

  /* ToDo: Activate when AppVersion model is merged (https://github.com/mittwald/api-client-js/pull/72)
  public listVersions = provideReact((query) =>
    AppVersion.list({ appId: this.id, query }),
  ) as AsyncResourceVariant<AppVersionListItem[], []>;
  */
}

class AppCommon extends classes(DataModel<AppData | AppListItemData>, App) {
  public readonly canStart: boolean;
  public readonly canStop: boolean;
  public readonly canRestart: boolean;
  public readonly isCustomApp: boolean;

  public constructor(data: AppData | AppListItemData) {
    super([data], [data.id]);

    this.canStart =
      data.actionCapabilities?.includes(AppActions.start) ?? false;

    this.canStop = data.actionCapabilities?.includes(AppActions.stop) ?? false;

    this.canRestart =
      data.actionCapabilities?.includes(AppActions.restart) ?? false;

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
