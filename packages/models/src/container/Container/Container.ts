import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { omit, pick } from "remeda";
import { DateTime } from "luxon";
import slugify from "slugify";

import type { ContainerVolumeRelationList } from "./ContainerVolumeRelation.js";
import type { ContainerEnvVariableList } from "./ContainerEnvVariable.js";
import type { ContainerPortList } from "./ContainerPort.js";
import type {
  ContainerStackPatchRequestData,
  ContainerListQueryModelData,
  ContainerResourceLimitsData,
  ContainerListItemData,
  ContainerUpdateData,
  ContainerStatus,
  ContainerData,
} from "./types.js";

import {
  type DownloadableFile,
  AggregateMetaData,
} from "../../common/index.js";
import { ContainerVolumeRelation } from "./ContainerVolumeRelation.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { ContainerTemplate } from "./ContainerTemplate.js";
import { ContainerStack } from "./ContainerStack.js";
import { ContainerState } from "./ContainerState.js";
import { Project } from "../../project/internal.js";
import { shellSplit } from "../lib/shellwords.js";
import { Cronjob } from "../../cronjob/index.js";
import { ImageMeta } from "./ImageMeta.js";
import { config } from "../../config/index.js";
import { Volume } from "../Volume/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Container",
})
export class Container extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "container",
    "container",
  );

  public readonly stackId: string;

  public constructor(id: string, stackId: string) {
    super(id);
    this.stackId = stackId;
  }

  public static async create(
    stackId: string,
    data: ContainerStackPatchRequestData,
  ) {
    const response = await config.behaviors.container.create(stackId, data);

    return new Container(response.id, stackId);
  }

  public static async find(id: string, stackId: string) {
    const data = await config.behaviors.container.find(id, stackId);
    if (data) {
      return new ContainerDetailed(data);
    }
  }

  public static findAggregate(containerId?: string) {
    return containerId
      ? { id: containerId, ...Container.aggregateMetaData }
      : undefined;
  }

  public static generateServiceName(description: string) {
    return slugify(description, {
      strict: true,
      lower: true,
    });
  }

  public static async get(id: string, stackId: string) {
    const container = await Container.find(id, stackId);
    assertObjectFound(container, Container, id);
    return container;
  }

  public static async getImageMeta(
    imageRef: string,
    projectId: string,
    generateAiData?: boolean,
    language?: string,
  ): Promise<ImageMeta | string> {
    const result = await config.behaviors.container.getImageMeta(
      imageRef,
      projectId,
      generateAiData,
      language,
    );

    if (typeof result !== "string" && "isAiAvailable" in result) {
      return new ImageMeta(result, imageRef);
    }
    return result;
  }

  public static ofId(id: string, stackId: string) {
    return new Container(id, stackId);
  }

  public static query(query: ContainerListQueryModelData = {}) {
    return new ContainerListQuery(query);
  }

  public async findCommon(): Promise<ContainerCommon | undefined> {
    return this instanceof ContainerCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<ContainerDetailed | undefined> {
    return Container.find(this.id, this.stackId);
  }

  public async getCommon(): Promise<ContainerCommon> {
    return this instanceof ContainerCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<ContainerDetailed> {
    return Container.get(this.id, this.stackId);
  }

  public async pullImage() {
    await config.behaviors.container.pullImage(this.id, this.stackId);
  }

  public async recreate() {
    await config.behaviors.container.recreate(this.id, this.stackId);
  }

  public async restart() {
    await config.behaviors.container.restart(this.id, this.stackId);
  }

  public async start() {
    await config.behaviors.container.start(this.id, this.stackId);
  }

  public async stop() {
    await config.behaviors.container.stop(this.id, this.stackId);
  }
}

export class ContainerCommon extends WithData<
  ContainerListItemData | ContainerData
>()(Container) {
  public readonly command?: string;
  public readonly cpuLimit?: string;
  public override readonly data: ContainerListItemData | ContainerData;
  public readonly deployedState: ContainerState;
  public readonly description: string;
  public readonly entrypoint?: string;
  public readonly message?: string;
  public readonly pendingState: ContainerState;
  public readonly project: Project;
  public readonly ramLimit?: string;
  public readonly recreateRequired?: boolean;
  public readonly serviceName: string;
  public readonly shortId: string;
  public readonly stack: ContainerStack;
  public readonly status?: ContainerStatus;
  public readonly statusSetAt?: DateTime;
  public readonly template?: ContainerTemplate;

  public constructor(data: ContainerListItemData | ContainerData) {
    super(data.id, data.stackId);
    this.data = data;
    this.shortId = data.shortId;
    this.description = data.description.trim();
    this.serviceName = data.serviceName.trim();
    this.deployedState = new ContainerState(data.deployedState);
    this.pendingState = new ContainerState(data.pendingState);
    this.status = data.status;
    this.statusSetAt = DateTime.fromISO(data.statusSetAt);
    this.message = data.message;
    this.recreateRequired = data.requiresRecreate;
    this.cpuLimit = data.deploy?.resources?.limits?.cpus;
    this.ramLimit = data.deploy?.resources?.limits?.memory;
    this.project = Project.ofId(data.projectId);
    this.stack = ContainerStack.ofId(data.stackId);
    this.template = data.templateId
      ? new ContainerTemplate(data.templateId)
      : undefined;
  }

  public canRestart(): boolean {
    return this.status === "running" || this.status === "error";
  }

  public canStart(): boolean {
    return this.status === "stopped";
  }

  public canStop(): boolean {
    return this.status !== "stopped";
  }

  public async delete() {
    await config.behaviors.container.delete(this.serviceName, this.stackId);
  }

  public async getLogDownload(): Promise<DownloadableFile> {
    const response = await config.behaviors.container.getLog(
      this.id,
      this.stackId,
    );
    return { filename: `${this.serviceName}.log`, content: response };
  }

  public async listCronjobs() {
    const cronjobList = await Cronjob.query({
      project: this.project,
    }).execute();

    return cronjobList.items.filter(
      (cronjob) =>
        cronjob.targetType === "container" &&
        cronjob.linkedContainer?.id === this.shortId &&
        cronjob.linkedContainer?.stackId === this.stackId,
    );
  }

  public async resetToDeployedState() {
    await config.behaviors.container.updateStack(this.stackId, {
      services: {
        [this.serviceName]: {
          entrypoint: shellSplit(this.deployedState.entrypoint ?? ""),
          command: shellSplit(this.deployedState.command ?? ""),
          volumes: this.deployedState.volumes.toStringArray(),
          envs: this.deployedState.envs.toApiDataObject(),
          ports: this.deployedState.ports.toStringArray(),
          image: this.deployedState.imageReference,
        },
      },
    });
  }

  public async rotateImagePullWebhook() {
    return await config.behaviors.container.rotateImagePullWebhook(
      this.id,
      this.stackId,
    );
  }

  public async update(
    data: ContainerUpdateData,
  ): Promise<ContainerDetailed | void> {
    const response = await config.behaviors.container.updateStack(
      this.stackId,
      {
        services: {
          [this.serviceName]: {
            description: data.description,
            image: data.image,
          },
        },
      },
    );

    const containerData = response.services?.find(
      (s) => s.serviceName === this.serviceName,
    );

    return containerData ? new ContainerDetailed(containerData) : undefined;
  }

  public async updateCommand(
    command: string,
    custom?: boolean,
  ): Promise<ContainerDetailed | void> {
    const result = await config.behaviors.container.updateStack(this.stackId, {
      services: {
        [this.serviceName]: {
          command:
            command.trim() !== this.command?.trim() && custom
              ? shellSplit(command)
              : [],
        },
      },
    });

    const containerData = result.services?.find(
      (s) => s.serviceName === this.serviceName,
    );

    return containerData ? new ContainerDetailed(containerData) : undefined;
  }

  public async updateEntrypoint(
    entrypoint: string,
    custom?: boolean,
  ): Promise<ContainerDetailed | void> {
    const result = await config.behaviors.container.updateStack(this.stackId, {
      services: {
        [this.serviceName]: {
          entrypoint:
            entrypoint.trim() !== this.entrypoint?.trim() && custom
              ? shellSplit(entrypoint)
              : [],
        },
      },
    });

    const containerData = result.services?.find(
      (s) => s.serviceName === this.serviceName,
    );

    return containerData ? new ContainerDetailed(containerData) : undefined;
  }

  public async updateEnvs(
    envList: ContainerEnvVariableList,
  ): Promise<ContainerDetailed | void> {
    const result = await config.behaviors.container.updateStack(this.stackId, {
      services: {
        [this.serviceName]: {
          envs: envList.toApiDataObject(),
        },
      },
    });

    const containerData = result.services?.find(
      (s) => s.serviceName === this.serviceName,
    );

    return containerData ? new ContainerDetailed(containerData) : undefined;
  }

  public async updatePorts(
    portList: ContainerPortList,
  ): Promise<ContainerDetailed | void> {
    const result = await config.behaviors.container.updateStack(this.stackId, {
      services: {
        [this.serviceName]: {
          ports: portList.toStringArray(),
        },
      },
    });

    const containerData = result.services?.find(
      (s) => s.serviceName === this.serviceName,
    );

    return containerData ? new ContainerDetailed(containerData) : undefined;
  }

  public async updateResourceLimits(
    limits: ContainerResourceLimitsData,
  ): Promise<ContainerDetailed | void> {
    const hasCpuLimit = limits.cpuLimit != null;
    const hasRamLimit = limits.ramLimit != null;

    const result = await config.behaviors.container.updateStack(this.stackId, {
      services: {
        [this.serviceName]: {
          deploy: {
            resources:
              hasCpuLimit || hasRamLimit
                ? {
                    limits: {
                      memory: limits.ramLimit,
                      cpus: limits.cpuLimit,
                    },
                  }
                : {},
          },
        },
      },
    });

    const containerData = result.services?.find(
      (s) => s.serviceName === this.serviceName,
    );

    return containerData ? new ContainerDetailed(containerData) : undefined;
  }

  public async updateVolumes(
    volumes: ContainerVolumeRelationList,
  ): Promise<ContainerDetailed | void> {
    const newVolumes = volumes.items
      .filter((v) => v.volumeCreationRequired)
      .map(
        (v) =>
          new ContainerVolumeRelation(
            v.data.replace(
              "createNewVolume",
              Volume.generateRandomName(
                `${this.serviceName}${v.containerPath?.toLowerCase().split("/").join("-")}`,
              ),
            ),
          ),
      );
    const existingVolumesAndProjectPaths = volumes.items
      .filter((v) => !v.volumeCreationRequired)
      .map((v) => v.data);

    const result = await config.behaviors.container.updateStack(this.stackId, {
      volumes:
        newVolumes.length > 0
          ? newVolumes.reduce(
              (prev: Record<string, { name: string }>, curr) => {
                if (!curr.volume) {
                  return prev;
                }
                prev[curr.volume] = { name: curr.volume };
                return prev;
              },
              {},
            )
          : {},
      services: {
        [this.serviceName]: {
          volumes: [
            ...newVolumes.map((v) => v.data),
            ...existingVolumesAndProjectPaths,
          ],
        },
      },
    });

    const containerData = result.services?.find(
      (s) => s.serviceName === this.serviceName,
    );

    return containerData ? new ContainerDetailed(containerData) : undefined;
  }
}

export class ContainerDetailed extends ContainerCommon {
  public override readonly data: ContainerData;
  public readonly project: Project;

  public constructor(data: ContainerData) {
    super(data);
    this.data = data;
    this.project = Project.ofId(data.projectId);
  }
}

export class ContainerListItem extends ContainerCommon {
  public override readonly data: ContainerListItemData;
  public constructor(data: ContainerListItemData) {
    super(data);
    this.data = data;
  }
}

export class ContainerListQuery extends ListQueryModel<ContainerListQueryModelData> {
  public constructor(query: ContainerListQueryModelData = {}) {
    const projectId = extractId(query.project);
    super(query, projectId ? { dependencies: [projectId] } : undefined);
  }

  public async checkServiceNameIsAvailable(serviceName: string) {
    const result = await this.refine({
      searchTerm: serviceName,
      limit: 10,
    }).execute();

    return !result.items.some((c) => c.serviceName === serviceName);
  }

  public async execute(options?: AxiosRequestConfig) {
    const projectId = extractId(this.query.project);
    const { totalCount, items } = projectId
      ? await config.behaviors.container.list(
          projectId,
          {
            ...omit(this.query, ["project", "stack"]),
            stackId: extractId(this.query.stack),
          },
          options,
        )
      : await config.behaviors.container.listAccessible(
          pick(this.query, [
            "searchTerm",
            "sortOrder",
            "limit",
            "skip",
            "page",
          ]),
          options,
        );

    return new ContainerList(
      this.query,
      items.map((c) => new ContainerListItem(c)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: Partial<ContainerListQueryModelData> = {}) {
    return new ContainerListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class ContainerList extends WithListData<ContainerListItem>()(
  ContainerListQuery,
) {
  public override readonly items: readonly ContainerListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: ContainerListQueryModelData,
    containers: ContainerListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(containers);
    this.totalCount = totalCount;
  }
}
