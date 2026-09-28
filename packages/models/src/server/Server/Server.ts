import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import invariant from "tiny-invariant";
import { DateTime } from "luxon";

import type { ProjectListQuery as ProjectListQueryType } from "../../project/index.js";
import type {
  ServerListQueryModelData,
  ServerDisableReason,
  ServerListItemData,
  ServerStatus,
  ServerData,
} from "./types.js";

import { ServerAvatarAccessTokenProvider } from "./ServerAvatarAccessTokenProvider.js";
import {
  type FileAccessTokenProvider,
  type DomFile,
} from "../../file/index.js";
import { ServerUsageMetrics, StorageMetrics } from "../../monitoring/index.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { ProjectListQuery } from "../../project/internal.js";
import { AggregateMetaData } from "../../common/index.js";
import { File } from "../../file/File/internal.js";
import { Contract } from "../../contract/index.js";
import { config } from "../../config/index.js";
import { Order } from "../../order/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Server",
})
export class Server extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "project",
    "placementgroup",
  );
  public readonly fileAccessTokenProvider: FileAccessTokenProvider;

  public readonly projects: ProjectListQueryType;

  public constructor(id: string) {
    super(id);
    this.fileAccessTokenProvider = new ServerAvatarAccessTokenProvider(this);
    this.projects = new ProjectListQuery({
      server: this,
    });
  }

  public static async find(id: string, options?: AxiosRequestConfig) {
    const data = await config.behaviors.server.find(id, options);

    if (data) {
      return new ServerDetailed(data);
    }
  }

  public static findAggregate(serverId?: string) {
    return serverId ? { id: serverId, ...Server.aggregateMetaData } : undefined;
  }

  public static async get(id: string, options?: AxiosRequestConfig) {
    const server = await Server.find(id, options);
    assertObjectFound(server, Server, id);
    return server;
  }

  public static ofId(id: string) {
    return new Server(id);
  }

  public static query(query: ServerListQueryModelData = {}) {
    return new ServerListQuery(query);
  }

  public async findCommon(
    options?: AxiosRequestConfig,
  ): Promise<ServerCommon | undefined> {
    return this instanceof ServerCommon ? this : this.findDetailed(options);
  }

  public async findDetailed(
    options?: AxiosRequestConfig,
  ): Promise<ServerDetailed | undefined> {
    return Server.find(this.id, options);
  }

  public async findStorageMetrics() {
    return await StorageMetrics.find(this.id, "server");
  }

  public async getAvatarUploadRules() {
    return File.getUploadRules("avatar");
  }

  public async getCommon(options?: AxiosRequestConfig): Promise<ServerCommon> {
    return this instanceof ServerCommon ? this : this.getDetailed(options);
  }

  public async getContract() {
    return await Contract.getByServer(this.id);
  }

  public async getDetailed(
    options?: AxiosRequestConfig,
  ): Promise<ServerDetailed> {
    return Server.get(this.id, options);
  }

  public async removeAvatar() {
    await config.behaviors.server.removeAvatar(this.id);
  }

  public async requestAvatarUpload(): Promise<string> {
    const response = await config.behaviors.server.createAvatarUploadToken(
      this.id,
    );

    return response.token;
  }

  public async updateDescription(description: string) {
    await config.behaviors.server.updateDescription(this.id, description);
  }

  public async updatePlan(data: { machineType?: string; storage: number }) {
    const { machineType, storage } = data;

    invariant(!!machineType, "Machine type is required for plan change");

    const contract = await this.getContract();

    await Order.changePlan({
      tariffChangeData: {
        machineType: machineType,
        diskspaceInGiB: storage,
        contractId: contract.id,
      },
      tariffChangeType: "server",
    });
  }

  public async updateStorageNotificationThreshold(threshold?: number) {
    await config.behaviors.server.updateStorageNotificationThreshold(
      this.id,
      threshold,
    );
  }

  public async uploadAvatar(file: DomFile) {
    await File.upload(file, this.fileAccessTokenProvider);
  }
}

export class ServerCommon extends WithData<ServerListItemData | ServerData>()(
  Server,
) {
  public readonly avatar?: File;
  public readonly clusterName: string;
  public readonly createdAt: DateTime;
  public readonly customer: Customer;
  public override readonly data: ServerListItemData | ServerData;
  public readonly description: string;
  public readonly disabledReason?: ServerDisableReason;
  public readonly groupId: string;
  public readonly machineType: string;
  public readonly ram: number;
  public readonly shortId: string;
  public readonly status: ServerStatus;
  public readonly storage: number;
  public readonly vcpu: number;

  public constructor(data: ServerListItemData | ServerData) {
    super(data.id);
    this.data = data;
    this.customer = Customer.ofId(data.customerId);
    this.shortId = data.shortId;
    this.groupId = data.groupId;
    this.vcpu = parseInt(data.machineType.cpu);
    this.ram = parseInt(data.machineType.memory.replace("Gi", ""));
    this.storage = parseInt(data.storage.replace("Gi", ""));
    this.description = data.description;
    this.clusterName = data.clusterName;
    this.createdAt = DateTime.fromISO(data.createdAt);
    this.avatar = data.imageRefId ? File.ofId(data.imageRefId) : undefined;
    this.machineType = data.machineType.name;
    this.status = data.status;
    this.disabledReason = data.disabledReason;
  }
}

export class ServerDetailed extends ServerCommon {
  public override readonly data: ServerData;
  public readonly usageMetrics: ServerUsageMetrics;
  public constructor(data: ServerData) {
    super(data);
    this.data = data;
    this.usageMetrics = ServerUsageMetrics.of(this);
  }
}

export class ServerListItem extends ServerCommon {
  public override readonly data: ServerListItemData;
  public constructor(data: ServerListItemData) {
    super(data);
    this.data = data;
  }
}

export class ServerListQuery extends ListQueryModel<ServerListQueryModelData> {
  public constructor(query: ServerListQueryModelData = {}) {
    super(query);
  }

  public async execute() {
    const { customer, ...query } = this.query;
    const { totalCount, items } = await config.behaviors.server.list({
      limit: config.defaultPaginationLimit,
      customerId: extractId(customer),
      ...query,
    });

    return new ServerList(
      this.query,
      items.map((d) => new ServerListItem(d)),
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

  public refine(query: ServerListQueryModelData) {
    return new ServerListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class ServerList extends WithListData<ServerListItem>()(
  ServerListQuery,
) {
  public override readonly items: readonly ServerListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: ServerListQueryModelData,
    servers: ServerListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(servers);
    this.totalCount = totalCount;
  }
}
