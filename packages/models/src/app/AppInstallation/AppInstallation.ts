import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import type { AsyncResourceVariant } from "../../react/index.js";
import { withAsyncResourceVariant } from "../../react/index.js";
import {
  AppInstallationCompactData,
  AppInstallationData,
  AppInstallationListQuery,
} from "./types.js";

export class AppInstallation extends ReferenceModel {
  public static find = withAsyncResourceVariant(
    async (id: string): Promise<AppInstallationDetailed | undefined> => {
      const data = await config.behaviors.appInstallation.find(id);
      if (data !== undefined) {
        return new AppInstallationDetailed(data);
      }
    },
  );

  public static get = withAsyncResourceVariant(
    async (id: string): Promise<AppInstallationDetailed> => {
      const appInstallation = await this.find(id);
      assertObjectFound(appInstallation, this, id);
      return appInstallation;
    },
  );

  public static ofId(id: string): AppInstallation {
    return new AppInstallation(id);
  }

  public static list = withAsyncResourceVariant(
    async (
      query: AppInstallationListQuery = {},
    ): Promise<Array<AppInstallationListItem>> => {
      const data = await config.behaviors.appInstallation.list(query);
      return data.map((d) => new AppInstallationListItem(d));
    },
  );

  public getDetailed = withAsyncResourceVariant(() =>
    AppInstallation.get(this.id),
  ) as AsyncResourceVariant<AppInstallationDetailed, []>;
}

// Common class for future extension
class AppInstallationCommon extends classes(
  DataModel<AppInstallationCompactData | AppInstallationData>,
  AppInstallation,
) {
  public constructor(data: AppInstallationCompactData | AppInstallationData) {
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
  DataModel<AppInstallationCompactData>,
) {
  public constructor(data: AppInstallationCompactData) {
    super([data], [data]);
  }
}
