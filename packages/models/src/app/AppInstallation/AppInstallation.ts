import { classes } from "polytype";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import {
  AppInstallationCopyRequestData,
  AppInstallationCreateRequestData,
  AppInstallationData,
  AppInstallationLinkDatabaseRequestData,
  AppInstallationListItemData,
  AppInstallationListQueryData,
  AppInstallationStatus,
  AppInstallationUpdateRequestData,
} from "./types.js";
import {
  AggregateMetaData,
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Project } from "../../project/index.js";
import { AppVersion } from "../AppVersion/index.js";
import { App, AppUpdatePolicyData } from "../App/index.js";
import {
  SystemSoftwareListItem,
  SystemSoftwareNames,
} from "../SystemSoftware/index.js";
import { AppInstallationMissingDependencies } from "../AppInstallationMissingDependencies/index.js";
import { InstalledSystemSoftware } from "../InstalledSystemSoftware/index.js";

export class AppInstallation extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "app",
    "appinstallation",
  );

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
    () => Promise<AppInstallationDetailed | undefined>
  >;

  public getDetailed =
    provideReact(async (): Promise<AppInstallationDetailed> => {
      return AppInstallation.get(this.id);
    }, [this.id]) as AsyncResourceVariant<
      () => Promise<AppInstallationDetailed>
    >;

  public static query(
    project: Project,
    query: AppInstallationListQueryData = {},
  ): AppInstallationListQuery {
    return new AppInstallationListQuery(project, query);
  }

  public static async create(
    projectId: string,
    data: AppInstallationCreateRequestData,
  ): Promise<AppInstallation> {
    const { id } = await config.behaviors.appInstallation.create(
      projectId,
      data,
    );
    return new AppInstallation(id);
  }

  public async update(data: AppInstallationUpdateRequestData): Promise<void> {
    await config.behaviors.appInstallation.update(this.id, data);
  }

  public async addSystemSoftware(
    systemSoftwareId: string,
    systemSoftwareVersionId: string,
    updatePolicy?: AppUpdatePolicyData,
  ): Promise<void> {
    await this.update({
      systemSoftware: {
        [systemSoftwareId]: {
          systemSoftwareVersion: systemSoftwareVersionId,
          updatePolicy: updatePolicy ?? "patchLevel",
        },
      },
    });
  }

  public async updateSystemSoftwareVersion(
    systemSoftwareId: string,
    systemSoftwareVersionId: string,
  ): Promise<void> {
    await this.update({
      systemSoftware: {
        [systemSoftwareId]: {
          systemSoftwareVersion: systemSoftwareVersionId,
        },
      },
    });
  }

  public async deleteSystemSoftware(systemSoftwareId: string): Promise<void> {
    await this.update({
      systemSoftware: {
        [systemSoftwareId]: {},
      },
    });
  }

  public async delete(): Promise<void> {
    await config.behaviors.appInstallation.delete(this.id);
  }

  public async linkDatabase(
    data: AppInstallationLinkDatabaseRequestData,
  ): Promise<void> {
    await config.behaviors.appInstallation.linkDatabase(this.id, data);
  }

  public async unlinkDatabase(databaseId: string): Promise<void> {
    await config.behaviors.appInstallation.unlinkDatabase(this.id, databaseId);
  }

  public retrieveStatus = provideReact(
    async (id: string): Promise<AppInstallationStatus> => {
      return await config.behaviors.appInstallation.retrieveStatus(id);
    },
  );

  public async copy(data: AppInstallationCopyRequestData): Promise<void> {
    await config.behaviors.appInstallation.copy(this.id, data);
  }

  public listMissingDependencies = provideReact(
    async (
      id: string,
      targetAppVersionId: string,
    ): Promise<AppInstallationMissingDependencies> => {
      const data =
        await config.behaviors.appInstallation.listMissingDependencies(
          id,
          targetAppVersionId,
        );
      return new AppInstallationMissingDependencies(data);
    },
  );
}

class AppInstallationCommon extends classes(
  DataModel<AppInstallationData | AppInstallationListItemData>,
  AppInstallation,
) {
  public readonly description: string;
  public readonly execCommand: string;
  public readonly app: App;
  public readonly appVersion: AppVersion;
  public readonly project?: Project;
  public readonly mStudioPath: string | undefined;
  public readonly isUpdating: boolean;
  public readonly isInstalling: boolean;
  public readonly host?: string;
  public readonly installedSystemSoftwareList: InstalledSystemSoftware[];

  public constructor(data: AppInstallationData | AppInstallationListItemData) {
    super([data], [data.id]);
    this.description = data.description;
    this.execCommand = `app exec ${data.id}`;
    this.app = App.ofId(data.appId);
    this.project = data.projectId ? Project.ofId(data.projectId) : undefined;
    this.appVersion = AppVersion.ofId(data.appVersion.desired, this.app);
    this.mStudioPath = this.project
      ? `/app/projects/${this.project.id}/apps/${this.id}`
      : undefined;
    this.isUpdating =
      !!data.appVersion.current &&
      data.appVersion.current !== data.appVersion.desired;

    this.isInstalling = !data.appVersion.current;

    this.host = data.userInputs?.find((u) => u.name === "host")?.value;

    this.installedSystemSoftwareList = data.systemSoftware
      ? data.systemSoftware.map((s) => new InstalledSystemSoftware(s))
      : [];
  }

  public findInstalledSystemSoftware(
    systemSoftwareList: readonly SystemSoftwareListItem[],
    systemSoftwareName: SystemSoftwareNames,
  ) {
    const systemSoftware = systemSoftwareList.find(
      (s) => s.data.name === systemSoftwareName,
    );

    return this.data.systemSoftware?.find(
      (s) => s.systemSoftwareId === systemSoftware?.id,
    );
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

  public refine(query: AppInstallationListQueryData): AppInstallationListQuery {
    return new AppInstallationListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.appInstallation.list(
      this.project.id,
      this.query,
    );
    return new AppInstallationList(
      this.project,
      this.query,
      items.map((d) => new AppInstallationListItem(d)),
      totalCount,
    );
  });

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
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
