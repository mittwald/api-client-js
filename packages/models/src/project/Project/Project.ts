import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { DateTime } from "luxon";

import type {
  CronjobCreateRequestData,
  CronjobListQuery,
} from "../../cronjob/index.js";
import type { ProjectMembershipListQuery } from "../ProjectMembership/index.js";
import type { ExtensionInstanceListQuery } from "../../marketplace/index.js";
import type { ProjectPermission } from "../projectPermissions.js";
import type { CertificateListQuery } from "../../certificate/index.js";
import type { PerformanceListQuery } from "../../performance/index.js";
import type { IngressListQuery } from "../../ingress/index.js";
import type { DomainListQuery } from "../../domain/index.js";
import type { DnsZoneListQuery } from "../../dns/index.js";
import type { OrderListQuery } from "../../order/index.js";
import type {
  ProjectInviteCreateRequestData,
  ProjectInviteListQuery,
} from "../ProjectInvite/index.js";
import type {
  ContainerStackPatchRequestData,
  RegistryCreateRequestData,
  ContainerStackListQuery,
  ContainerListQuery,
  RegistryListQuery,
  RegistryLoginType,
  VolumeListQuery,
} from "../../container/index.js";
import type {
  RedisCreateRequestData,
  MySqlCreateRequest,
  MySqlListQuery,
  RedisListQuery,
} from "../../database/index.js";
import type {
  SftpUserCreateRequestData,
  SshUserCreateRequestData,
  SftpUserListQuery,
  SshUserListQuery,
} from "../../access/index.js";
import type {
  BackupScheduleCreateRequestData,
  BackupCreateRequestData,
  BackupScheduleListQuery,
  BackupListQuery,
} from "../../backup/index.js";
import type {
  MailAddressRequestData,
  DeliveryBoxListQuery,
  MailAddressListQuery,
  ForwardRequestData,
} from "../../mail/index.js";
import type {
  AppInstallationCreateRequestData,
  AppInstallationListQuery,
  LicenseListQuery,
} from "../../app/index.js";
import type {
  ProjectAIModelListQuery,
  ProjectAIPlanListQuery,
} from "../../ai/index.js";
import type {
  ProjectListQueryModelData,
  ProjectDisableReason,
  ProjectListItemData,
  ProjectFeature,
  ProjectStatus,
  ProjectData,
} from "./types.js";

import { ExtensionInstance } from "../../marketplace/ExtensionInstance/ExtensionInstance.js";
import { ProjectAvatarAccessTokenProvider } from "./ProjectAvatarAccessTokenProvider.js";
import { AppInstallation } from "../../app/AppInstallation/AppInstallation.js";
import { BackupSchedule } from "../../backup/BackupSchedule/BackupSchedule.js";
import { ContainerStack } from "../../container/Container/ContainerStack.js";
import { ProjectAIModel } from "../../ai/ProjectAIModel/ProjectAIModel.js";
import { Certificate } from "../../certificate/Certificate/Certificate.js";
import {
  type FileAccessTokenProvider,
  type DomFile,
} from "../../file/index.js";
import { Performance } from "../../performance/Performance/Performance.js";
import { ProjectUsageMetrics, StorageMetrics } from "../../monitoring/index.js";
import { ProjectAIPlan } from "../../ai/ProjectAIPlan/ProjectAIPlan.js";
import { MailSettings } from "../../mail/MailSettings/MailSettings.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { DeliveryBox } from "../../mail/DeliveryBox/DeliveryBox.js";
import { MailAddress } from "../../mail/MailAddress/MailAddress.js";
import { Container } from "../../container/Container/Container.js";
import { HostingContractItem, Contract } from "../../contract/index.js";
import { Registry } from "../../container/Registry/Registry.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { projectPermissions } from "../projectPermissions.js";
import { SftpUser } from "../../access/SftpUser/SftpUser.js";
import { ProjectMembership } from "../ProjectMembership/index.js";
import { Cronjob } from "../../cronjob/Cronjob/Cronjob.js";
import { Ingress } from "../../ingress/Ingress/Ingress.js";
import { SshUser } from "../../access/SshUser/SshUser.js";
import { CertificateRequest } from "../../certificate/index.js";
import { Volume } from "../../container/Volume/Volume.js";
import { License } from "../../app/License/License.js";
import { Backup } from "../../backup/Backup/Backup.js";
import { DnsZone } from "../../dns/DnsZone/DnsZone.js";
import { Domain } from "../../domain/Domain/Domain.js";
import { Server } from "../../server/Server/Server.js";
import { MySql } from "../../database/MySql/MySql.js";
import { Redis } from "../../database/Redis/Redis.js";
import { AggregateMetaData } from "../../common/index.js";
import { ProjectInvite } from "../ProjectInvite/index.js";
import { Order } from "../../order/Order/Order.js";
import { File } from "../../file/File/internal.js";
import { HardwareSpecs } from "../internal.js";
import {
  CpuArticleAttribute,
  RamArticleAttribute,
} from "../../article/Article/internal.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Project",
})
export class Project extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("project", "project");
  public readonly aiModelsQuery: ProjectAIModelListQuery;

  public readonly aiPlans: ProjectAIPlanListQuery;

  public readonly appInstallations: AppInstallationListQuery;

  public readonly backups: BackupListQuery;
  public readonly backupSchedules: BackupScheduleListQuery;

  public readonly certificates: CertificateListQuery;

  public readonly containers: ContainerListQuery;
  public readonly cronjobs: CronjobListQuery;

  public readonly deliveryBoxes: DeliveryBoxListQuery;
  public readonly dnsZones: DnsZoneListQuery;
  public readonly domains: DomainListQuery;
  public readonly extensionInstances: ExtensionInstanceListQuery;

  public readonly fileAccessTokenProvider: FileAccessTokenProvider;

  public readonly ingresses: IngressListQuery;

  public readonly invites: ProjectInviteListQuery;

  public readonly licenses: LicenseListQuery;

  public readonly mailAddresses: MailAddressListQuery;

  public readonly mailSettings: MailSettings;

  public readonly memberships: ProjectMembershipListQuery;
  public readonly mySqlDatabases: MySqlListQuery;

  public readonly orders: OrderListQuery;

  public readonly performanceInsights: PerformanceListQuery;

  public readonly redisDatabases: RedisListQuery;
  public readonly registries: RegistryListQuery;
  public readonly sftpUsers: SftpUserListQuery;
  public readonly sshUsers: SshUserListQuery;

  public readonly stacks: ContainerStackListQuery;

  public readonly volumes: VolumeListQuery;

  public constructor(id: string) {
    super(id);
    this.fileAccessTokenProvider = new ProjectAvatarAccessTokenProvider(this);
    this.dnsZones = DnsZone.query({ project: this });
    this.invites = ProjectInvite.query(this);
    this.memberships = ProjectMembership.query(this);
    this.deliveryBoxes = DeliveryBox.query({ project: this });
    this.sshUsers = SshUser.query({ project: this });
    this.sftpUsers = SftpUser.query({ project: this });
    this.mySqlDatabases = MySql.query({ project: this });
    this.redisDatabases = Redis.query({ project: this });
    this.backups = Backup.query({ project: this });
    this.backupSchedules = BackupSchedule.query(this);
    this.cronjobs = Cronjob.query({ project: this });
    this.performanceInsights = Performance.query(this);
    this.containers = Container.query({ project: this });
    this.volumes = Volume.query({ project: this });
    this.registries = Registry.query({ project: this });
    this.licenses = License.query(this);
    this.stacks = ContainerStack.query({ project: this });
    this.ingresses = Ingress.query({
      project: id,
    });
    this.domains = Domain.query({
      project: id,
    });
    this.appInstallations = AppInstallation.query({ project: id });
    this.mailAddresses = MailAddress.query({ project: id });
    this.certificates = Certificate.query({ project: id });
    this.extensionInstances = ExtensionInstance.query({ project: id });
    this.mailSettings = MailSettings.ofId(this.id);
    this.orders = Order.query({ project: id });
    this.aiPlans = ProjectAIPlan.query(this.id);
    this.aiModelsQuery = ProjectAIModel.query(this.id);
  }

  public static async create(data: { description: string; serverId: string }) {
    const { description, serverId } = data;

    const { id } = await config.behaviors.project.create(serverId, description);
    return new Project(id);
  }

  public static async find(id: string, options?: AxiosRequestConfig) {
    const data = await config.behaviors.project.find(id, options);
    if (data) {
      return new ProjectDetailed(data);
    }
  }
  public static findAggregate(projectId?: string) {
    return projectId
      ? { id: projectId, ...Project.aggregateMetaData }
      : undefined;
  }

  public static async get(id: Project | string, options?: AxiosRequestConfig) {
    const project = await Project.find(extractId(id), options);
    assertObjectFound(project, Project, id);
    return project;
  }

  public static ofId(id: string) {
    return new Project(id);
  }

  public static ofReference(ref?: Project | string) {
    const id = extractId(ref);
    return id ? Project.ofId(id) : undefined;
  }

  public static query(query: ProjectListQueryModelData = {}) {
    return new ProjectListQuery(query);
  }

  public async createBackup(data: BackupCreateRequestData) {
    return Backup.create(this, data);
  }

  public async createBackupSchedule(data: BackupScheduleCreateRequestData) {
    return BackupSchedule.create(this, data);
  }

  public async createContainer(
    data: ContainerStackPatchRequestData,
    stackId: string,
  ) {
    return Container.create(stackId, data);
  }

  public async createCronjob(data: CronjobCreateRequestData) {
    return Cronjob.create(this, data);
  }

  public async createDeliveryBox(description: string, password: string) {
    return DeliveryBox.create(this, description, password);
  }

  public async createDnsCertificateRequest(commonName: string) {
    return CertificateRequest.createDnsCertificate(this, commonName);
  }

  public async createForward(data: ForwardRequestData) {
    return MailAddress.createForward(this, data);
  }

  public async createMailAddress(data: MailAddressRequestData) {
    return MailAddress.create(this, data);
  }

  public async createMySql(data: MySqlCreateRequest) {
    return MySql.create(this, data);
  }

  public async createRedis(data: RedisCreateRequestData) {
    return Redis.create(this, data);
  }

  public async createRegistry(
    data: RegistryCreateRequestData,
    loginType: RegistryLoginType,
  ) {
    return Registry.create(this, data, loginType);
  }

  public async createSftpUser(data: SftpUserCreateRequestData) {
    return SftpUser.create(this, data);
  }

  public async createSshUser(data: SshUserCreateRequestData) {
    return SshUser.create(this, data);
  }

  public async createVolume(name: string, stackId: string) {
    return Volume.create(name, stackId);
  }

  public async delete() {
    await config.behaviors.project.delete(this.id);
  }

  public findCommon(): Promise<ProjectCommon | undefined> | ProjectCommon {
    return this instanceof ProjectCommon ? this : this.findDetailed();
  }

  public async findContract(requestConfig?: AxiosRequestConfig) {
    return await Contract.findByProject(this.id, requestConfig);
  }

  public async findDefaultIngress() {
    const ingresses = await this.ingresses.execute();
    return ingresses.items.find((i) => i.data.isDefault);
  }

  public async findDetailed(): Promise<ProjectDetailed | undefined> {
    return Project.find(this.id);
  }

  public async findOpenExtensionOrders() {
    return await ExtensionInstance.listOpenOrders(this);
  }

  public async findStorageMetrics() {
    return await StorageMetrics.find(this.id, "project");
  }

  public async getAvatarUploadRules() {
    return File.getUploadRules("avatar");
  }

  public getCommon(
    options?: AxiosRequestConfig,
  ): Promise<ProjectCommon> | ProjectCommon {
    return this instanceof ProjectCommon ? this : this.getDetailed(options);
  }

  public async getContract() {
    return await Contract.getByProject(this.id);
  }

  public async getContractArticle() {
    const contract = await this.getContract();
    return contract.baseItem.baseArticle;
  }

  public async getDefaultIngress() {
    const defaultIngress = await this.findDefaultIngress();
    assertObjectFound(defaultIngress, Ingress, this);
    return defaultIngress;
  }

  public async getDetailed(
    options?: AxiosRequestConfig,
  ): Promise<ProjectDetailed> {
    return Project.get(this.id, options);
  }

  public async getHardwareSpecs() {
    const article = await this.getContractArticle().then((a) =>
      a!.article.getDetailed(),
    );

    const vcpuAttribute = article.getAttribute(CpuArticleAttribute);
    const ramAttribute = article.getAttribute(RamArticleAttribute);

    if (vcpuAttribute && ramAttribute) {
      return new HardwareSpecs(vcpuAttribute.cpuCount, ramAttribute.bytes);
    }
  }

  public async getOwnMembership() {
    return await ProjectMembership.getOwn(this);
  }

  public async getStorage() {
    const contract = await this.getContract();
    const hostingContractItem = HostingContractItem.fromContractItem(
      contract.baseItem,
    );
    return hostingContractItem.getStorage();
  }

  public async installApp(data: AppInstallationCreateRequestData) {
    return AppInstallation.create(this, data);
  }

  public async inviteMember(data: ProjectInviteCreateRequestData) {
    return ProjectInvite.create(this, data);
  }

  public async removeAvatar() {
    await config.behaviors.project.removeAvatar(this.id);
  }

  public async requestAvatarUpload(): Promise<string> {
    const response = await config.behaviors.project.createAvatarUploadToken(
      this.id,
    );

    return response.token;
  }

  public async updateDescription(description: string) {
    await config.behaviors.project.updateDescription(this.id, description);
  }

  public async updateStorageNotificationThreshold(threshold?: number) {
    await config.behaviors.project.updateStorageNotificationThreshold(
      this.id,
      threshold,
    );
  }

  public async uploadAvatar(file: DomFile) {
    await File.upload(file, this.fileAccessTokenProvider);
  }
}

export class ProjectCommon extends WithData<
  ProjectListItemData | ProjectData
>()(Project) {
  public readonly avatar?: File;
  public readonly createdAt: DateTime;
  public readonly customer: Customer;
  public override readonly data: ProjectListItemData | ProjectData;
  public readonly description: string;
  public readonly disabledAt?: DateTime;
  public readonly disabledReason?: ProjectDisableReason;
  public readonly enabled: boolean;
  public readonly features?: ProjectFeature[];
  public readonly hasContainerAccess?: boolean;
  public readonly isAllowedToPlaceOrders: boolean;
  public readonly isDisabled: boolean;
  public readonly isProSpaceLite: boolean;
  public readonly isSuspended: boolean;
  public readonly server?: Server;
  public readonly shortId: string;
  public readonly status: ProjectStatus;

  public constructor(data: ProjectListItemData | ProjectData) {
    super(data.id);
    this.data = data;
    this.server =
      !data.projectHostingId && data.serverId
        ? Server.ofId(data.serverId)
        : undefined;
    this.customer = Customer.ofId(data.customerId);
    this.shortId = data.shortId;
    this.description = data.description;
    if (data.disabledAt) {
      this.disabledAt = DateTime.fromISO(data.disabledAt);
    }
    this.createdAt = DateTime.fromISO(data.createdAt);
    this.avatar = data.imageRefId ? File.ofId(data.imageRefId) : undefined;
    this.isProSpaceLite = !!data.projectHostingId && !data.serverId;
    this.enabled = data.enabled;
    this.features = data.supportedFeatures;
    this.status = data.status;
    this.isDisabled = !!data.disableReason;
    this.isSuspended = data.disableReason === "suspended";
    this.disabledReason = data.disableReason;
    this.isAllowedToPlaceOrders = !this.isSuspended;
    if (this.features) {
      this.hasContainerAccess = this.features.includes("container");
    }
  }

  public async hasPermission(permission: ProjectPermission) {
    const ownMembership = await this.getOwnMembership();

    const inheritedRequired =
      projectPermissions[permission].includes("inheritedOwner");

    if (inheritedRequired) {
      return ownMembership.inherited;
    }

    return projectPermissions[permission].includes(ownMembership.role);
  }
}

export class ProjectDetailed extends ProjectCommon {
  public override readonly data: ProjectData;
  public readonly hostname: string;
  public readonly serverGroupId?: string;
  public readonly serverShortId?: string;
  public readonly usageMetrics: ProjectUsageMetrics;

  public constructor(data: ProjectData) {
    super(data);
    this.data = data;
    this.hostname = `ssh.${data.clusterID}.${data.clusterDomain}`;
    this.serverShortId = data.serverShortId;
    this.serverGroupId = data.serverGroupId;
    this.usageMetrics = ProjectUsageMetrics.of(this);
  }

  public async findFileSystemDirectories(
    directory: string,
    requestConfig?: AxiosRequestConfig,
  ) {
    return await config.behaviors.project.findFileSystemDirectories(
      this.id,
      directory,
      requestConfig,
    );
  }

  public getBaseDirectory(base?: "Home" | "Logs" | "Web") {
    if (!base) {
      return "";
    }

    return this.data.directories[base];
  }

  public getMetrics() {
    return new ProjectUsageMetrics(this);
  }
}

export class ProjectListItem extends ProjectCommon {
  public override readonly data: ProjectListItemData;
  public constructor(data: ProjectListItemData) {
    super(data);
    this.data = data;
  }
}

export class ProjectListQuery extends ListQueryModel<ProjectListQueryModelData> {
  public constructor(query: ProjectListQueryModelData = {}) {
    super(query);
  }

  public async execute() {
    const { customer, server, ...query } = this.query;
    const { totalCount, items } = await config.behaviors.project.list({
      ...query,
      customerId: extractId(customer),
      serverId: extractId(server),
    });

    return new ProjectList(
      this.query,
      items.map((d) => new ProjectListItem(d)),
      totalCount,
    );
  }

  public async findLatest() {
    const { items } = await this.refine({
      sort: "createdAt",
      order: "desc",
      limit: 1,
    }).execute();

    return items[0];
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: ProjectListQueryModelData) {
    return new ProjectListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class ProjectList extends WithListData<ProjectListItem>()(
  ProjectListQuery,
) {
  public override readonly items: readonly ProjectListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: ProjectListQueryModelData,
    projects: ProjectListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(projects);
    this.totalCount = totalCount;
  }
}
