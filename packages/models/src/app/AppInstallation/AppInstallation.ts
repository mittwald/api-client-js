import { classes } from "polytype";
import type {
  AppInstallationData,
  AppInstallationListItemData,
} from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class AppInstallation extends ReferenceModel {
  public static ofId(id: string): AppInstallation {
    return new AppInstallation(id);
  }

  public static find = provideReact(
    async (id: string): Promise<AppInstallationDetailed | undefined> => {
      const data = await config.behaviors.appInstallation.find(id);
      if (data) {
        return new AppInstallationDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<AppInstallationDetailed> => {
      const appInstallation = await this.find(id);
      assertObjectFound(appInstallation, this, id);
      return appInstallation;
    },
  );

  public findDetailed = provideReact(async (): Promise<
    AppInstallationDetailed | undefined
  > => {
    return AppInstallation.find(this.id);
  }, [this.id]) as AsyncResourceVariant<
    AppInstallationDetailed | undefined,
    []
  >;

  public getDetailed =
    provideReact(async (): Promise<AppInstallationDetailed> => {
      return AppInstallation.get(this.id);
    }, [this.id]) as AsyncResourceVariant<AppInstallationDetailed, []>;
}

class AppInstallationCommon extends classes(
  DataModel<AppInstallationData | AppInstallationListItemData>,
  AppInstallation,
) {
  public constructor(data: AppInstallationData | AppInstallationListItemData) {
    super([data], [data.id]);
  }
}

export class AppInstallationDetailed extends classes(
  AppInstallationCommon,
  DataModel<AppInstallationData>,
) {
  public constructor(data: AppInstallationData) {
    super([data], [data]);
  }
}

export class AppInstallationListItem extends classes(
  AppInstallationCommon,
  DataModel<AppInstallationListItemData>,
) {
  public constructor(data: AppInstallationListItemData) {
    super([data], [data]);
  }
}
