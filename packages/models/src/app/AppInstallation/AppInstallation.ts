import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import invariant from "tiny-invariant";
import { DateTime } from "luxon";
import { omit } from "remeda";

import type { MySqlDetailed, RedisDetailed } from "../../database/index.js";
import type { IngressListItem, IngressPath } from "../../ingress/index.js";
import type { AppUpdatePolicyData } from "..//index.js";
import type {
  AppInstallationStagingCreateRequestData,
  AppInstallationStagingDetachRequestData,
  AppInstallationListQueryModelData,
  AppInstallationCreateRequestData,
  AppInstallationUpdateRequestData,
  AppInstallationCopyRequestData,
  InstalledSystemSoftwareQuery,
  AppInstallationListItemData,
  AppInstallationData,
  AppSavedUserInput,
  AppPhase,
} from "./types.js";

import { SystemSoftwareDetailed, SystemSoftwareId } from "../SystemSoftware/index.js";
import { InstalledSystemSoftware } from "../InstalledSystemSoftware/index.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { AppLinkedDatabase, AppVersion, AppId, App } from "..//index.js";
import { Project } from "../../project/internal.js";
import { AggregateMetaData } from "../../common/index.js";
import { User } from "../../user/User/User.js";
import { Cronjob } from "../../cronjob/index.js";
import { Ingress } from "../../ingress/index.js";
import { MySql } from "../../database/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "AppInstallation",
})
export class AppInstallation extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "app",
    "appinstallation",
  );

  public static async create(
    project: Project,
    data: AppInstallationCreateRequestData,
  ) {
    const response = await config.behaviors.appInstallation.create(
      project.id,
      data,
    );

    return new AppInstallation(response.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.appInstallation.find(id);
    if (data) {
      return new AppInstallationDetailed(data);
    }
  }

  public static findAggregate(appInstallationId?: string) {
    return appInstallationId
      ? { id: appInstallationId, ...AppInstallation.aggregateMetaData }
      : undefined;
  }

  public static async get(id: string) {
    const appInstallation = await this.find(id);
    assertObjectFound(appInstallation, AppInstallation, id);
    return appInstallation;
  }

  public static ofId(id: string) {
    return new AppInstallation(id);
  }

  public static query(query: AppInstallationListQueryModelData = {}) {
    return new AppInstallationListQuery(query);
  }

  public async addSystemSoftware(
    systemSoftwareId: string,
    systemSoftwareVersionId: string,
    updatePolicy?: AppUpdatePolicyData,
  ) {
    await this.update({
      systemSoftware: {
        [systemSoftwareId]: {
          systemSoftwareVersion: systemSoftwareVersionId,
          updatePolicy: updatePolicy ?? "patchLevel",
        },
      },
    });
  }

  public async copy(data: AppInstallationCopyRequestData) {
    await config.behaviors.appInstallation.copy(this.id, data);
  }

  public async createStaging(
    data: AppInstallationStagingCreateRequestData,
  ) {
    return config.behaviors.appInstallation.createStaging(this.id, data);
  }

  public async delete() {
    await config.behaviors.appInstallation.delete(this.id);
  }

  public async deleteSystemSoftware(systemSoftwareId: string) {
    await this.update({
      systemSoftware: {
        [systemSoftwareId]: {},
      },
    });
  }

  public async detachStaging(
    data: AppInstallationStagingDetachRequestData,
  ) {
    return config.behaviors.appInstallation.detachStaging(this.id, data);
  }

  public async findCommon(): Promise<AppInstallationCommon | undefined> {
    return this instanceof AppInstallationCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<AppInstallationDetailed | undefined> {
    return AppInstallation.find(this.id);
  }

  public async getCommon(): Promise<AppInstallationCommon> {
    return this instanceof AppInstallationCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<AppInstallationDetailed> {
    return AppInstallation.get(this.id);
  }

  public async getInstalledSystemSoftware(
    query?: InstalledSystemSoftwareQuery,
  ) {
    const data =
      await config.behaviors.appInstallation.getInstalledSystemSoftware(
        this.id,
        query,
      );
    return data.map((d) => new SystemSoftwareDetailed(d));
  }

  public async goLive() {
    return config.behaviors.appInstallation.goLive(this.id);
  }

  public async linkDatabase(database: MySqlDetailed | RedisDetailed) {
    const mainMySqlUser =
      database instanceof MySql ? database.mainUser : undefined;

    await config.behaviors.appInstallation.update(this.id, {
      databases: {
        [database.id]: {
          databaseUserIds: mainMySqlUser
            ? { admin: mainMySqlUser.id }
            : undefined,
          purpose: "custom",
        },
      },
    });
  }

  public async unlinkDatabase(databaseId: string) {
    await config.behaviors.appInstallation.unlinkDatabase(this.id, databaseId);
  }

  public async update(data: AppInstallationUpdateRequestData) {
    await config.behaviors.appInstallation.update(this.id, data);
  }

  public async updateSystemSoftwareVersion(
    systemSoftwareId: string,
    systemSoftwareVersionId: string,
  ) {
    await this.update({
      systemSoftware: {
        [systemSoftwareId]: {
          systemSoftwareVersion: systemSoftwareVersionId,
        },
      },
    });
  }
}

export class AppInstallationCommon extends WithData<
  AppInstallationListItemData | AppInstallationData
>()(AppInstallation) {
  public readonly app: App;
  public readonly appName: string;
  public readonly appVersion: AppVersion;
  public readonly appVersionString: string;
  public readonly customDocumentRoot?: string;
  public override readonly data:
    | AppInstallationListItemData
    | AppInstallationData;
  public readonly deletionRequested?: boolean;
  public readonly description: string;
  public readonly entryPointUserInput?: AppSavedUserInput;
  public readonly execCommand: string;
  public readonly host?: string;
  public readonly httpPort?: number;
  public readonly installationPath: string;
  public readonly installedSystemSoftware: InstalledSystemSoftware[];
  public readonly isBusy: boolean;
  public readonly isLocked: boolean;
  public readonly isNodeApp: boolean;
  public readonly isStagingInstallation: boolean;
  public readonly lastError?: string;
  public readonly lastVersionChangedAt?: DateTime;
  public readonly lastVersionChangedBy?: User;
  public readonly linkedDatabases: AppLinkedDatabase[];
  public readonly mainSystemSoftware?: InstalledSystemSoftware;
  public readonly phase: AppPhase;
  public readonly php?: InstalledSystemSoftware;
  public readonly previousAppVersion?: AppVersion;
  public readonly primaryDatabase?: AppLinkedDatabase;
  public readonly project: Project;
  public readonly projectDescription: string;
  public readonly shortId: string;
  public readonly sourceInstallation: AppInstallation | undefined;
  public readonly updateAvailable: boolean;
  public readonly userInputs: AppSavedUserInput[];

  public constructor(data: AppInstallationListItemData | AppInstallationData) {
    super(data.id);
    this.data = data;
    this.description = data.description;
    this.execCommand = `app exec ${data.id}`;
    this.app = App.ofId(data.appId);
    this.appVersionString = data.appExternalVersion;
    this.appName = data.appName;
    this.isNodeApp = this.appName === "Node.js";
    this.project = Project.ofId(data.projectId!);
    this.projectDescription = data.projectDescription;
    this.phase = data.phase;
    this.isBusy = data.phase === "upgrading" || data.phase === "installing";
    this.isLocked = Object.keys(data.lockedBy ?? {}).length > 0;

    this.isStagingInstallation = data.staging ?? false;
    this.sourceInstallation = data.sourceAppInstallationId
      ? AppInstallation.ofId(data.sourceAppInstallationId)
      : undefined;

    this.host = data.userInputs?.find((u) => u.name === "host")?.value;

    this.installedSystemSoftware = data.systemSoftware
      ? data.systemSoftware
          .sort((a, b) => a.systemSoftwareId.localeCompare(b.systemSoftwareId))
          .map((s) => new InstalledSystemSoftware(s))
      : [];
    this.installationPath = data.installationPath;
    this.userInputs = data.userInputs ?? [];
    this.linkedDatabases = data.linkedDatabases
      ? data.linkedDatabases.map((d) => new AppLinkedDatabase(d))
      : [];
    this.primaryDatabase = this.linkedDatabases.find((d) => d.isPrimary);
    this.shortId = data.shortId;
    this.customDocumentRoot = data.customDocumentRoot;

    this.entryPointUserInput = this.userInputs.find(
      (u) => u.name === "entrypoint",
    );
    this.deletionRequested = data.deletionRequested;

    const { lastChangedAt, lastChangeBy, previous, desired, current } =
      data.appVersion;
    this.appVersion = AppVersion.ofId(current ?? desired, this.app);
    this.previousAppVersion = previous
      ? AppVersion.ofId(previous, App.ofId(data.appId))
      : undefined;
    this.lastVersionChangedAt = lastChangedAt
      ? DateTime.fromISO(lastChangedAt)
      : undefined;
    this.lastVersionChangedBy = lastChangeBy
      ? User.ofId(lastChangeBy)
      : undefined;

    if (this.app.id === AppId.nodejs) {
      this.mainSystemSoftware = this.installedSystemSoftware.find(
        (i) => i.systemSoftware.id === SystemSoftwareId.node,
      );
    } else if (this.app.id === AppId.python) {
      this.mainSystemSoftware = this.installedSystemSoftware.find(
        (i) => i.systemSoftware.id === SystemSoftwareId.python,
      );
    } else if (this.app.id !== AppId.staticFiles) {
      this.mainSystemSoftware =
        this.installedSystemSoftware.find(
          (i) => i.systemSoftware.id === SystemSoftwareId.php,
        ) ??
        this.installedSystemSoftware.find(
          (i) => i.systemSoftware.id === SystemSoftwareId.node,
        ) ??
        this.installedSystemSoftware.find(
          (i) => i.systemSoftware.id === SystemSoftwareId.python,
        );
    }

    this.php = this.installedSystemSoftware.find(
      (i) => i.systemSoftware.id === SystemSoftwareId.php,
    );
    this.lastError = data.lastError;
    this.updateAvailable = data.updateAvailable;
    this.httpPort = data.ports?.find((p) => p.name === "http")?.port;
  }

  public async findMainSystemSoftware() {
    if (this.app.id === AppId.staticFiles) {
      return;
    } else if (this.app.id === AppId.nodejs) {
      return this.installedSystemSoftware.find(
        (i) => i.systemSoftware.id === SystemSoftwareId.node,
      );
    } else if (this.app.id === AppId.python) {
      return this.installedSystemSoftware.find(
        (i) => i.systemSoftware.id === SystemSoftwareId.python,
      );
    } else {
      return (
        this.installedSystemSoftware.find(
          (i) => i.systemSoftware.id === SystemSoftwareId.php,
        ) ??
        this.installedSystemSoftware.find(
          (i) => i.systemSoftware.id === SystemSoftwareId.node,
        ) ??
        this.installedSystemSoftware.find(
          (i) => i.systemSoftware.id === SystemSoftwareId.python,
        )
      );
    }
  }

  public async findStagingInstallation() {
    const appInstallations = await AppInstallation.query({
      project: this.project,
    }).execute();

    return appInstallations.items.find(
      (appInstallation) => appInstallation.sourceInstallation?.id === this.id,
    );
  }

  public async listCompatibleDatabases() {
    const mySqlList = await MySql.query({ project: this.project }).execute();

    const appVersionDetailed = await this.appVersion.getDetailed();

    const allowedDatabaseVersions: string[] =
      appVersionDetailed.data.databases?.map((d) => {
        switch (d.version) {
          case "91bbc8ea-9308-4b7f-88dc-1a2873d02c8c":
            return "5.6";
          case "1be01968-784d-434c-aa05-2e64a51ced28":
            return "5.7";
          case "37931c38-e05e-470b-9e22-a035ef9f383b":
            return "8.0";
          case "3c7f71f7-27bb-41fc-99a5-c7ec6d24e1f7":
            return "8.4";
          default:
            return "";
        }
      }) ?? [];

    return mySqlList.items.filter((d) =>
      allowedDatabaseVersions.includes(d.version),
    );
  }

  // todo: Query parameter zum filtern nach Apps
  public async listCronjobs() {
    const cronjobList = await Cronjob.query({
      project: this.project,
    }).execute();

    return cronjobList.items.filter(
      (i) => i.linkedAppInstallation?.id === this.id && i.targetType === "app",
    );
  }

  public async listIngresses() {
    const ingressList = await Ingress.query().execute();

    return ingressList.items.filter(
      (i) =>
        i.defaultPath.target?.type === "appInstallation" &&
        i.defaultPath.target.appInstallation.id === this.id,
    );
  }

  public async listIngressesAndPaths() {
    const ingressList = await Ingress.query().execute();

    const ingressAndPathList: (IngressListItem | IngressPath)[] = [];

    ingressList.items.forEach((i) => {
      if (
        i.defaultPath.target?.type === "appInstallation" &&
        i.defaultPath.target.appInstallation.id === this.id
      ) {
        ingressAndPathList.push(i);
      }

      i.paths.forEach((p) => {
        if (
          p.target?.type === "appInstallation" &&
          p.target.appInstallation.id === this.id &&
          p.path !== "/"
        ) {
          ingressAndPathList.push(p);
        }
      });
    });

    return ingressAndPathList;
  }

  public async replacePrimaryDatabase(mySql: MySqlDetailed) {
    const oldDatabaseId =
      this.linkedDatabases.find((d) => d.isPrimary)?.id ?? "";

    invariant(mySql.mainUser, "my sql main user not found");

    await config.behaviors.appInstallation.update(this.id, {
      databases: {
        [mySql.id]: {
          databaseUserIds: { admin: mySql.mainUser.id },
          replacesDatabaseId: oldDatabaseId,
        },
      },
    });
  }
}

export class AppInstallationDetailed extends AppInstallationCommon {
  public override readonly data: AppInstallationData;

  public constructor(data: AppInstallationData) {
    super(data);
    this.data = data;
  }
}

export class AppInstallationListItem extends AppInstallationCommon {
  public override readonly data: AppInstallationListItemData;

  public constructor(data: AppInstallationListItemData) {
    super(data);
    this.data = data;
  }
}

export class AppInstallationListQuery extends ListQueryModel<AppInstallationListQueryModelData> {
  public async execute() {
    const projectId = extractId(this.query.project);

    const { totalCount, items } = projectId
      ? await config.behaviors.appInstallation.list(
          projectId,
          omit(this.query, ["project"]),
        )
      : await config.behaviors.appInstallation.listForUser(this.query);

    return new AppInstallationList(
      this.query,
      items
        .map((d) => new AppInstallationListItem(d))

        .sort((a, b) =>
          this.query.sortOrder ? 0 : a.description.localeCompare(b.description),
        ),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: AppInstallationListQueryModelData) {
    return new AppInstallationListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class AppInstallationList extends WithListData<AppInstallationListItem>()(
  AppInstallationListQuery,
) {
  public override readonly items: readonly AppInstallationListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: AppInstallationListQueryModelData,
    appInstallations: AppInstallationListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(appInstallations);
    this.totalCount = totalCount;
  }
}
