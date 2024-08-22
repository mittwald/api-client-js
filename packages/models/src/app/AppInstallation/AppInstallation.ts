import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import type { AsyncResourceVariant } from "../../lib/provideReact.js";
import { provideReact } from "../../lib/provideReact.js";
import {
  AppInstallationListItemData,
  AppInstallationData,
  AppInstallationListQuery,
} from "./types.js";

export class AppInstallation extends ReferenceModel {
  public static find = provideReact(
    async (id: string): Promise<AppInstallationDetailed | undefined> => {
      const data = await config.behaviors.appInstallation.find(id);
      if (data !== undefined) {
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

  public static ofId(id: string): AppInstallation {
    return new AppInstallation(id);
  }

  public static list = provideReact(
    async (
      projectId: string,
      query: AppInstallationListQuery = {},
    ): Promise<Array<AppInstallationListItem>> => {
      const data = await config.behaviors.appInstallation.list(
        projectId,
        query,
      );
      return data.map((d) => new AppInstallationListItem(d));
    },
  );

  public getDetailed = provideReact(
    () => AppInstallation.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<AppInstallationDetailed, []>;

  public findDetailed = provideReact(
    () => AppInstallation.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<AppInstallationDetailed | undefined, []>;
}

// Common class for future extension
class AppInstallationCommon extends classes(
  DataModel<AppInstallationListItemData | AppInstallationData>,
  AppInstallation,
) {
  public constructor(data: AppInstallationListItemData | AppInstallationData) {
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
