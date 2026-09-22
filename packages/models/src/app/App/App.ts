import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type { AppVersionListQuery } from "../";
import type {
  AppListQueryData,
  AppListItemData,
  AppData,
  AppName,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { config } from "../../config";
import { AppVersion } from "../";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "App",
})
export class App extends ReferenceModel {
  public readonly recommendedVersions: AppVersionListQuery;

  public constructor(id: string) {
    super(id);
    this.recommendedVersions = AppVersion.query({
      recommended: true,
      app: this,
    });
  }

  public static async find(id: string) {
    const data = await config.behaviors.app.find(id);
    if (data) {
      return new AppDetailed(data);
    }
  }

  public static async get(id: string) {
    const app = await this.find(id);
    assertObjectFound(app, App, id);
    return app;
  }

  public static ofId(id: string) {
    return new App(id);
  }

  public static query = (query: AppListQueryData = {}) =>
    new AppListQuery(query);

  public async findCommon(): Promise<AppCommon | undefined> {
    return this instanceof AppCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<AppDetailed | undefined> {
    return App.find(this.id);
  }

  public async getCommon(): Promise<AppCommon> {
    return this instanceof AppCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<AppDetailed> {
    return App.get(this.id);
  }
}

export class AppCommon extends WithData<AppListItemData | AppData>()(App) {
  public override readonly data: AppListItemData | AppData;
  public readonly isCustomApp: boolean;
  public readonly isNodeApp: boolean;
  public readonly isPopular: boolean;
  public readonly name: AppName;
  public readonly tags: string[];
  public constructor(data: AppListItemData | AppData) {
    super(data.id);
    this.data = data;
    this.name = data.name as AppName;
    this.isNodeApp = this.name === "Node.js";
    this.isCustomApp =
      this.isNodeApp ||
      this.name === "PHP" ||
      this.name === "Static Files" ||
      this.name === "Python" ||
      this.name === "PHP-Worker";
    this.tags = data.tags;
    this.isPopular =
      this.name === "WordPress" ||
      this.name === "TYPO3" ||
      this.name === "Shopware 6" ||
      this.name === "PHP";
  }
}

export class AppDetailed extends AppCommon {
  public override readonly data: AppData;
  public constructor(data: AppData) {
    super(data);
    this.data = data;
  }
}

export class AppListItem extends AppCommon {
  public override readonly data: AppListItemData;
  public constructor(data: AppListItemData) {
    super(data);
    this.data = data;
  }
}

export class AppListQuery extends ListQueryModel<AppListQueryData> {
  public constructor(query: AppListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.app.list(this.query);

    return new AppList(
      this.query,
      items.map((d) => new AppListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: AppListQueryData) {
    return new AppListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class AppList extends WithListData<AppListItem>()(AppListQuery) {
  public override readonly items: readonly AppListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: AppListQueryData,
    apps: AppListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(apps);
    this.totalCount = totalCount;
  }
}
