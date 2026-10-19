import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import semverCompare from "semver-compare";
import { omit } from "remeda";

import type { SystemSoftware } from "../SystemSoftware/index.js";
import type {
  AppVersionListQueryModelData,
  SystemSoftwareDependency,
  AppVersionListItemData,
  AppDefaultCronjobData,
  AppVersionData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { UserInput } from "../UserInput/index.js";
import { config } from "../../config/index.js";
import { App } from "../index.js";
import {
  sortByPositionMeta,
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "AppVersion",
})
export class AppVersion extends ReferenceModel {
  public readonly app: App;

  public constructor(id: string, app: App) {
    super(id);
    this.app = app;
  }

  public static async find(id: string, app: App) {
    const data = await config.behaviors.appVersion.find(id, app.id);
    if (data) {
      return new AppVersionDetailed(data);
    }
  }

  public static async get(id: string, app: App) {
    const appVersion = await this.find(id, app);
    assertObjectFound(appVersion, AppVersion, id);
    return appVersion;
  }

  public static ofId(id: string, app: App) {
    return new AppVersion(id, app);
  }

  public static query(query: AppVersionListQueryModelData) {
    return new AppVersionListQuery(query);
  }

  public async findCommon(): Promise<AppVersionCommon | undefined> {
    return this instanceof AppVersionCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<AppVersionDetailed | undefined> {
    return AppVersion.find(this.id, this.app);
  }

  public async getCommon(): Promise<AppVersionCommon> {
    return this instanceof AppVersionCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<AppVersionDetailed> {
    return AppVersion.get(this.id, this.app);
  }

  public async listUpdateCandidates(): Promise<AppVersionListItem[]> {
    const data = await config.behaviors.appVersion.listUpdateCandidates(
      this.app.id,
      this.id,
    );

    return data
      .map((d) => new AppVersionListItem(d))
      .sort((a, b) => b.compare(a));
  }

  public async updateAvailable() {
    return (await this.listUpdateCandidates()).length > 0;
  }
}

export class AppVersionCommon extends WithData<
  AppVersionListItemData | AppVersionData
>()(AppVersion) {
  public readonly backendPathTemplate?: string;
  public override readonly data: AppVersionListItemData | AppVersionData;
  public readonly defaultCronjobs?: AppDefaultCronjobData[];
  public readonly docRootUserEditable: boolean;
  public readonly installationUserInputs: UserInput[];
  public readonly installationUserInputSteps: string[];
  public readonly recommended?: boolean;
  public readonly systemSoftwareDependencies: SystemSoftwareDependency[];
  public readonly version: string;

  public constructor(data: AppVersionListItemData | AppVersionData) {
    super(data.id, App.ofId(data.appId));
    this.data = data;
    this.version = data.externalVersion;
    this.installationUserInputs = data.userInputs
      ? sortByPositionMeta(data.userInputs).map((u) => new UserInput(u))
      : [];
    this.installationUserInputSteps = Array.from(
      new Set(this.installationUserInputs.map((u) => u.step)).values(),
    );
    this.docRootUserEditable = data.docRootUserEditable;
    this.backendPathTemplate = data.backendPathTemplate;
    this.systemSoftwareDependencies = data.systemSoftwareDependencies ?? [];
    this.defaultCronjobs = data.defaultCronjobs;
    this.recommended = data.recommended;
  }

  public compare(other: AppVersionListItem): -1 | 0 | 1 {
    return semverCompare(this.data.internalVersion, other.data.internalVersion);
  }

  public isSystemSoftwareRequired(systemSoftware: SystemSoftware) {
    return this.data.systemSoftwareDependencies?.find(
      (d) => d.systemSoftwareId === systemSoftware.id,
    );
  }
}

export class AppVersionDetailed extends AppVersionCommon {
  public override readonly data: AppVersionData;

  public constructor(data: AppVersionData) {
    super(data);
    this.data = data;
  }
}

export class AppVersionListItem extends AppVersionCommon {
  public override readonly data: AppVersionListItemData;

  public constructor(data: AppVersionListItemData) {
    super(data);
    this.data = data;
  }
}

export class AppVersionListQuery extends ListQueryModel<AppVersionListQueryModelData> {
  public constructor(query: AppVersionListQueryModelData) {
    super(query, { dependencies: [extractId(query.app)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.appVersion.list(
      extractId(this.query.app),
      omit(this.query, ["app"]),
    );

    return new AppVersionList(
      this.query,
      items.reverse().map((d) => new AppVersionListItem(d)),
      totalCount,
    );
  }

  public refine(query: Partial<AppVersionListQueryModelData> = {}) {
    return new AppVersionListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class AppVersionList extends WithListData<AppVersionListItem>()(
  AppVersionListQuery,
) {
  public override readonly items: readonly AppVersionListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: AppVersionListQueryModelData,
    appVersions: AppVersionListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(appVersions);
    this.totalCount = totalCount;
  }
}
