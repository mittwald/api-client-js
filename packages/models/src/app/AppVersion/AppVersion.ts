import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { classes } from "polytype";
import {
  AppVersionData,
  AppVersionListItemData,
  AppVersionListQueryModelData,
  AppVersionUpdateCandidateListQueryModelData,
} from "./types.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import semverCompare from "semver-compare";
import { DataModel } from "../../base/DataModel.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import { App } from "../App/index.js";
import { ListDataModel, ListQueryModel } from "../../base/index.js";
import { AppUserInput } from "../AppUserInput/index.js";

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
      if (data !== undefined) {
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

  public static query(query: AppVersionListQueryModelData) {
    return new AppVersionListQuery(query);
  }

  public queryUpdateCandidates() {
    return new AppVersionUpdateCandidateListQuery({
      app: this.app,
      baseAppVersion: this,
    });
  }

  public getDetailed = provideReact(() =>
    AppVersion.get(this.id, this.app),
  ) as AsyncResourceVariant<AppVersionDetailed, []>;

  public findDetailed = provideReact(
    () => AppVersion.find(this.id, this.app),
    [this.id],
  ) as AsyncResourceVariant<AppVersionDetailed | undefined, []>;
}

class AppVersionCommon extends classes(
  DataModel<AppVersionData | AppVersionListItemData>,
  AppVersion,
) {
  public readonly userInputs: AppUserInput[];
  public readonly userInputsForReconfigure: AppUserInput[];

  public constructor(data: AppVersionData | AppVersionListItemData) {
    super([data], [data.id, App.ofId(data.appId)]);
    this.userInputs = data.userInputs
      ? data.userInputs.map((i) => new AppUserInput(i))
      : [];
    this.userInputsForReconfigure = this.userInputs.filter(
      (i) => i.lifecycle === "reconfigure",
    );
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

export class AppVersionUpdateCandidateListQuery extends ListQueryModel<AppVersionUpdateCandidateListQueryModelData> {
  public constructor(query: AppVersionUpdateCandidateListQueryModelData) {
    super(query);
  }

  public refine(query: AppVersionUpdateCandidateListQueryModelData) {
    return new AppVersionUpdateCandidateListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { app, baseAppVersion } = this.query;
    const { items, totalCount } =
      await config.behaviors.appVersion.listUpdateCandidates(
        app.id,
        baseAppVersion.id,
      );

    return new AppVersionUpdateCandidateList(
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

export class AppVersionUpdateCandidateList extends classes(
  AppVersionUpdateCandidateListQuery,
  ListDataModel<AppVersionListItem>,
) {
  public constructor(
    query: AppVersionUpdateCandidateListQueryModelData,
    appVersions: AppVersionListItem[],
    totalCount: number,
  ) {
    super([query], [appVersions, totalCount]);
  }
}
