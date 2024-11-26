import { config } from "../../config/config.js";
import { classes } from "polytype";
import assertObjectFound from "../../base/assertObjectFound.js";
import type { AsyncResourceVariant } from "../../lib/provideReact.js";
import { provideReact } from "../../lib/provideReact.js";
import {
  AppInstallationCopyRequestData,
  AppInstallationCreateRequestData,
  AppInstallationData,
  AppInstallationLinkDatabaseRequestData,
  AppInstallationListItemData,
  AppInstallationListQueryModelData,
  AppInstallationStatus,
  AppInstallationUpdateRequestData,
} from "./types.js";
import { Project, ProjectListQuery } from "../../project/index.js";
import { DataModel } from "../../base/DataModel.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import { InstalledSystemSoftware } from "../InstalledSystemSoftware/index.js";
import { ListDataModel, ListQueryModel } from "../../base/index.js";
import { App, AppUpdatePolicy } from "../App/index.js";
import { AppInstallationMissingDependencies } from "../AppInstallationMissingDependencies/index.js";
import {
  SystemSoftware,
  SystemSoftwareNames,
} from "../SystemSoftware/index.js";
import { AppVersion } from "../AppVersion/index.js";
import {
  SystemSoftwareVersion,
  SystemSoftwareVersionListItem,
} from "../SystemSoftwareVersion/index.js";

export class AppInstallation extends ReferenceModel {
  public static ofId(id: string): AppInstallation {
    return new AppInstallation(id);
  }

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

  public static query(query: AppInstallationListQueryModelData = {}) {
    return new AppInstallationListQuery(query);
  }

  public getDetailed = provideReact(
    () => AppInstallation.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<AppInstallationDetailed, []>;

  public findDetailed = provideReact(
    () => AppInstallation.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<AppInstallationDetailed | undefined, []>;

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
    updatePolicy?: AppUpdatePolicy,
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

  public async start(): Promise<void> {
    await config.behaviors.appInstallation.executeAction(this.id, "start");
  }
  public async stop(): Promise<void> {
    await config.behaviors.appInstallation.executeAction(this.id, "stop");
  }
  public async restart(): Promise<void> {
    await config.behaviors.appInstallation.executeAction(this.id, "restart");
  }

  public retrieveStatus = provideReact(
    async (id: string): Promise<AppInstallationStatus> => {
      return await config.behaviors.appInstallation.retrieveStatus(id);
    },
  );

  public async copy(data: AppInstallationCopyRequestData): Promise<void> {
    await config.behaviors.appInstallation.copy(this.id, data);
  }

  // @todo: auf query umbauen?
  public getMissingDependencies = provideReact(
    async (
      id: string,
      targetAppVersionId: string,
    ): Promise<AppInstallationMissingDependencies> => {
      const data =
        await config.behaviors.appInstallation.getMissingDependencies(
          id,
          targetAppVersionId,
        );
      return data.map((d) => new AppInstallationMissingDependencies(d));
    },
  );
}

class AppInstallationCommon extends classes(
  DataModel<AppInstallationData | AppInstallationListItemData>,
  AppInstallation,
) {
  public readonly isUpdating: boolean;
  public readonly isInstalling: boolean;
  public readonly host?: string;
  public readonly installedSystemSoftwareList: InstalledSystemSoftware[];
  public readonly appVersion: AppVersion;
  public readonly app: App;
  public readonly project?: Project;

  public constructor(data: AppInstallationData | AppInstallationListItemData) {
    super([data], [data.id]);

    this.isUpdating =
      !!data.appVersion.current &&
      data.appVersion.current !== data.appVersion.desired;

    this.isInstalling = !data.appVersion.current;

    this.host = data.userInputs?.find((u) => u.name === "host")?.value;

    this.installedSystemSoftwareList = data.systemSoftware
      ? data.systemSoftware.map((s) => new InstalledSystemSoftware(s))
      : [];

    this.appVersion = AppVersion.ofId(
      data.appId,
      App.ofId(data.appVersion.desired),
    );
    this.app = App.ofId(data.appId);
    this.project = data.projectId ? Project.ofId(data.projectId) : undefined;
  }

  public listInstallableSystemSoftware = provideReact(
    async (): Promise<SystemSoftware[]> => {
      const systemSoftwareList = await SystemSoftware.list();

      return systemSoftwareList.filter(
        (s) =>
          !this.installedSystemSoftwareList.find(
            (i) => i.data.systemSoftwareId === s.id,
          ),
      );
    },
  );

  public findInstalledSystemSoftwareByName = provideReact(
    async (
      name: SystemSoftwareNames,
    ): Promise<InstalledSystemSoftware | undefined> => {
      const systemSoftwareList = await SystemSoftware.list();

      const systemSoftware = systemSoftwareList.find(
        (s) => s.data.name === name,
      );

      return this.installedSystemSoftwareList.find(
        (i) => i.data.systemSoftwareId === systemSoftware?.id,
      );
    },
  );

  public getSystemSoftwareVersionsInRange = provideReact(
    async (
      systemSoftwareId: string,
    ): Promise<Readonly<Array<SystemSoftwareVersionListItem>>> => {
      const appVersion = await this.getAppVersion();
      const versionRange = appVersion.data.systemSoftwareDependencies?.find(
        (d) => d.systemSoftwareId === systemSoftwareId,
      )?.versionRange;

      return SystemSoftwareVersion.list(systemSoftwareId, { versionRange });
    },
  );

  public isSystemSoftwareVersionUpdateAvailable = provideReact(
    async (systemSoftwareId: string): Promise<boolean> => {
      const systemSoftware = this.installedSystemSoftwareList.find(
        (s) => s.data.systemSoftwareId === systemSoftwareId,
      );

      const currentVersion = systemSoftware?.getVersion().data.internalVersion;
      const versionsInRange =
        this.getSystemSoftwareVersionsInRange(systemSoftwareId);

      return (
        versionsInRange
          .useItems()
          .filter((v) => v.internalVersion !== currentVersion).length > 0
      );
    },
  );

  public isSystemSoftwareRequired = provideReact(
    async (systemSoftwareId): Promise<boolean> => {
      const appVersion = this.getAppVersion();
      return appVersion.data.systemSoftwareDependencies?.find(
        (d) => d.systemSoftwareId === systemSoftwareId,
      );
    },
  );

  /* ToDo: Activate when Cronjob model is available
  public listConnectedCronjobs = provideReact(
    (): Promise<Readonly<Array<CronjobListItem>>> => {
      return Cronjob.list({ projectId: this.data.projectId }).filter(
        (c) => c.data.appId === this.id,
      );
    },
  );
 */

  /* ToDo: Activate when MySqlDatabase model is available
  public listAvailableMySqlDatabases = provideReact(
    (): Promise<Readonly<Array<DatabasesListItem>>> => {
      return MySqlDatabase.list({ projectId: this.data.projectId }).filter(
        (d) => !this.data.linkedDatabases?.find((l) => l.databaseId === d.id),
      );
    },
  );
  */
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

export class AppInstallationListQuery extends ListQueryModel<AppInstallationListQueryModelData> {
  public constructor(query: AppInstallationListQueryModelData = {}) {
    super(query);
  }

  public refine(query: AppInstallationListQueryModelData) {
    return new ProjectListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { server, customer, ...query } = this.query;
    const { items, totalCount } = await config.behaviors.project.list({
      ...query,
      serverId: server?.id,
      customerId: customer?.id,
    });

    return new AppInstallationList(
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
    query: AppInstallationListQueryModelData,
    appInstallation: AppInstallationListItem[],
    totalCount: number,
  ) {
    super([query], [appInstallation, totalCount]);
  }
}
