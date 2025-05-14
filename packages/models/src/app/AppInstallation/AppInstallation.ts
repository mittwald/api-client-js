import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import {
  AsyncResourceVariant,
  provideReact,
} from "../../react/provideReact.js";
import {
  AppInstallationData,
  AppInstallationListItemData,
  AppInstallationListQueryData,
} from "./types.js";
import { ListQueryModel } from "../../base/ListQueryModel.js";
import { ListDataModel } from "../../base/ListDataModel.js";
import { Project } from "../../project/index.js";

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

  public query(project: Project, query: AppInstallationListQueryData = {}) {
    return new AppInstallationListQuery(project, query);
  }

  /** @deprecated: use query() or project.appInstallations */
  public static list = provideReact(
    async (
      projectId: string,
      query: AppInstallationListQueryData = {},
    ): Promise<Readonly<Array<AppInstallationListItem>>> => {
      return new AppInstallationListQuery(Project.ofId(projectId), query)
        .execute()
        .then((r) => r.items);
    },
  );

  public getDetailed = provideReact(
    () => AppInstallation.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<AppInstallationDetailed>>;

  public findDetailed = provideReact(
    () => AppInstallation.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<AppInstallationDetailed | undefined>>;
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

export class AppInstallationListQuery extends ListQueryModel<AppInstallationListQueryData> {
  public readonly project: Project;

  public constructor(
    project: Project,
    query: AppInstallationListQueryData = {},
  ) {
    super(query, {
      dependencies: [project.id],
    });
    this.project = project;
  }

  public refine(query: AppInstallationListQueryData) {
    return new AppInstallationListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.appInstallation.list(
      this.project.id,
      {
        limit: config.defaultPaginationLimit,
        ...this.query,
      },
    );

    return new AppInstallationList(
      this.project,
      this.query,
      items.map((d) => new AppInstallationListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({ limit: 2 }).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class AppInstallationList extends classes(
  AppInstallationListQuery,
  ListDataModel<AppInstallationListItem>,
) {
  public constructor(
    project: Project,
    query: AppInstallationListQueryData,
    appInstallations: AppInstallationListItem[],
    totalCount: number,
  ) {
    super([project, query], [appInstallations, totalCount]);
  }
}
