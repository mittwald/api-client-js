import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ProxyModel } from "../../base/ProxyModel.js";
import type { AsyncResourceVariant } from "../../react/index.js";
import { withAsyncResourceVariant } from "../../react/index.js";
import {
  AppInstallationCompactData,
  AppInstallationData,
  AppInstallationListQuery,
} from "./types.js";

export class AppInstallationProxy extends ProxyModel {
  public getDetailed = withAsyncResourceVariant(() =>
    AppInstallation.get(this.id),
  ) as AsyncResourceVariant<AppInstallationDetailed, []>;

  public static ofId(id: string): AppInstallationProxy {
    return new AppInstallationProxy(id);
  }
}

class AppInstallationBase extends classes(
  DataModel<AppInstallationCompactData | AppInstallationData>,
  AppInstallationProxy,
) {
  public constructor(data: AppInstallationCompactData | AppInstallationData) {
    super([data], [data.id]);
  }
}

export class AppInstallationDetailed extends classes(
  AppInstallationBase,
  DataModel<AppInstallationData>,
) {
  public constructor(data: AppInstallationData) {
    super([data], [data]);
  }

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
}

export class AppInstallationListItem extends classes(
  AppInstallationBase,
  DataModel<AppInstallationCompactData>,
) {
  public constructor(data: AppInstallationCompactData) {
    super([data], [data]);
  }

  public static list = withAsyncResourceVariant(
    async (
      query: AppInstallationListQuery = {},
    ): Promise<Array<AppInstallationListItem>> => {
      const data = await config.behaviors.appInstallation.list(query);
      return data.map((d) => new AppInstallationListItem(d));
    },
  );
}

export class AppInstallation extends classes(
  AppInstallationDetailed,
  AppInstallationListItem,
) {}
