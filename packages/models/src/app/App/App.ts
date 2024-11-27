import { classes } from "polytype";
import type { AppData, AppListItemData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
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

  public getDetailed = provideReact(
    () => App.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<AppDetailed, []>;

  public findDetailed = provideReact(
    () => App.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<AppDetailed | undefined, []>;
}

class AppCommon extends classes(DataModel<AppData | AppListItemData>, App) {
  public constructor(data: AppData | AppListItemData) {
    super([data], [data.id]);
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
