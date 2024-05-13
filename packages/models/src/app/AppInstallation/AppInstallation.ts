import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import type { AsyncResourceVariant } from "../../lib/provideReact.js";
import { provideReact } from "../../lib/provideReact.js";
import {
  AppInstallationCopyRequestData,
  AppInstallationCreateRequestData,
  AppInstallationData,
  AppInstallationListItemData,
  AppInstallationListQuery,
  AppInstallationMissingDependencies,
  AppInstallationStatus,
  AppInstallationUpdateRequestData,
  AppLinkDatabaseRequestData,
  AppUpdatePolicy,
} from "./types.js";
import { InstalledSystemSoftwareListItem } from "../InstalledSystemSoftware/index.js";

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

  public getDetailed = provideReact(() =>
    AppInstallation.get(this.id),
  ) as AsyncResourceVariant<AppInstallationDetailed, []>;

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

  public async linkDatabase(data: AppLinkDatabaseRequestData): Promise<void> {
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

  public getMissingDependencies = provideReact(
    async (
      id: string,
      targetAppVersionId: string,
    ): Promise<AppInstallationMissingDependencies> => {
      return await config.behaviors.appInstallation.getMissingDependencies(
        id,
        targetAppVersionId,
      );
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
  public readonly installedSystemSoftwareList: InstalledSystemSoftwareListItem[];

  public constructor(data: AppInstallationData | AppInstallationListItemData) {
    super([data], [data.id]);

    this.isUpdating =
      !!this.data.appVersion.current &&
      this.data.appVersion.current !== this.data.appVersion.desired;

    this.isInstalling = !this.data.appVersion.current;

    this.host = this.data.userInputs?.find((u) => u.name === "host")?.value;

    this.installedSystemSoftwareList = this.data.systemSoftware
      ? this.data.systemSoftware.map(
          (s) => new InstalledSystemSoftwareListItem(s),
        )
      : [];
  }

  /* ToDo: Activate when SystemSoftware model is merged (https://github.com/mittwald/api-client-js/pull/91)
  public listInstallableSystemSoftware = provideReact(
    async (): Promise<SystemSoftware[]> => {
      const systemSoftwareList = await SystemSoftware.list();

      return systemSoftwareList.filter(
        (s) => !this.installedSystemSoftwareList.find((i) => i.id === s.id),
      );
    },
  );

   public findInstalledSystemSoftwareByName = provideReact(
    async (
      name: SystemSoftwareNames,
    ): Promise<InstalledSystemSoftwareListItem | undefined> => {
      const systemSoftwareList = await SystemSoftware.list();

      const systemSoftware = systemSoftwareList.find((s) => s.name === name);

      return this.installedSystemSoftwareList.find(
        (i) => i.data.systemSoftwareId === systemSoftware?.id,
      );
    },
  );
  */

  /* ToDo: Activate when App model is merged (https://github.com/mittwald/api-client-js/pull/96)
  public getApp = provideReact(async (): Promise<AppDetailed> => {
    return await App.get(this.data.appId);
  });
  */

  /* ToDo: Activate when AppVersion model is merged (https://github.com/mittwald/api-client-js/pull/72)
  public getAppVersion = provideReact(
    async (): Promise<AppVersionDetailed> => {
      return appVersion.get(this.data.appId, this.data.appVersion.desired);
    },
  );

  public listUpdateCandidateVersions = provideReact(
    (): Promise<Readonly<Array<AppVersionListItem>>> => {
      const appVersion = this.getAppVersion();

      return appVersion.listUpdateCandidates();
    },
  );

  public listUpdateCandidatesAvailable = provideReact(
    async (): Promise<boolean> => {
      return this.listUpdateCandidateVersions().length > 0;
    },
  );

  public listUserInputsForReconfigure = provideReact(
   (): Promise<Readonly<Array<AppUserInput[]>>> => {
     const appVersion = this.getAppVersion();

     return appVersion.userInputs.filter({
       lifeCycle: "reconfigure",
     });
    },
  );

    public getSystemSoftwareVersionsInRange = provideReact(
    async (
      systemSoftwareId: string,
    ): Promise<Readonly<Array<SystemSoftwareVersionListItem>>> => {
      const appVersion = this.getAppVersion();
      const versionRange = appVersion.data.systemSoftwareDependencies?.find(
        (d) => d.systemSoftwareId === systemSoftwareId,
      )?.versionRange;

      return SystemSoftwareVersion.list(systemSoftwareId, { versionRange });
    },
  );

  public isSystemSoftwareVersionUpdateAvailable = provideReact(
    async (systemSoftwareId: string): Promise<boolean> => {
      const systemSoftware = this.installedSystemSoftwareList.find(
        (s) => s.id === systemSoftwareId,
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
  */

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
