import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { omit } from "remeda";

import type {
  ContainerStackListQueryModelData,
  ContainerStackUpdateScheduleData,
  ContainerTemplateUserInputValues,
  ContainerStackDeclareRequestData,
  ContainerStackCreateRequestData,
  ContainerStackPatchRequestData,
  ContainerStackListItemData,
  ContainerStackData,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { ContainerTemplate } from "./ContainerTemplate";
import { Project } from "../../project/internal";
import { AggregateMetaData } from "../../common";
import { ContainerListItem } from "./Container";
import { VolumeListItem } from "../Volume";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "ContainerStack",
})
export class ContainerStack extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("container", "stack");

  public constructor(id: string) {
    super(id);
  }

  public static async create(
    project: Project,
    data: ContainerStackCreateRequestData,
  ) {
    const response = await config.behaviors.container.createStack(
      data,
      project.id,
    );

    return new ContainerStackDetailed(response);
  }

  public static async find(id: string, options?: AxiosRequestConfig) {
    const data = await config.behaviors.container.findStack(id, options);
    if (data) {
      return new ContainerStackDetailed(data);
    }
  }

  public static findAggregate(stackId?: string) {
    return stackId
      ? { id: stackId, ...ContainerStack.aggregateMetaData }
      : undefined;
  }

  public static async get(id: string, options?: AxiosRequestConfig) {
    const stack = await ContainerStack.find(id, options);
    assertObjectFound(stack, ContainerStack, id);
    return stack;
  }

  public static ofId(id: string) {
    return new ContainerStack(id);
  }

  public static query(query: ContainerStackListQueryModelData = {}) {
    return new ContainerStackListQuery(query);
  }

  public async addTemplateComponent(
    templateId: string,
    userInputs?: ContainerTemplateUserInputValues,
  ) {
    await config.behaviors.container.addTemplateComponent(this.id, {
      templateConfig: { templateId, userInputs },
    });
  }

  public async clearUpdateSchedule() {
    await config.behaviors.container.updateStackUpdateSchedule(this.id, null);
  }

  public async delete() {
    return await config.behaviors.container.deleteStack(this.id);
  }

  public async findCommon(): Promise<ContainerStackCommon | undefined> {
    return this instanceof ContainerStackCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<ContainerStackDetailed | undefined> {
    return ContainerStack.find(this.id);
  }

  public async getCommon(): Promise<ContainerStackCommon> {
    return this instanceof ContainerStackCommon ? this : this.getDetailed();
  }

  public getDetailed(
    options?: AxiosRequestConfig,
  ): Promise<ContainerStackDetailed> {
    return ContainerStack.get(this.id, options);
  }

  public async setUpdateSchedule(data: ContainerStackUpdateScheduleData) {
    const payload: ContainerStackUpdateScheduleData = {
      timezone: data.timezone,
      cron: data.cron,
    };
    await config.behaviors.container.updateStackUpdateSchedule(
      this.id,
      payload,
    );
  }
}

export class ContainerStackCommon extends WithData<
  ContainerStackListItemData | ContainerStackData
>()(ContainerStack) {
  public readonly containers: ContainerListItem[];
  public override readonly data:
    | ContainerStackListItemData
    | ContainerStackData;
  public readonly description: string;
  public readonly disabled: boolean;
  public readonly isDefaultStack: boolean;
  public readonly project: Project;
  public readonly shortId: string;
  public readonly template?: ContainerTemplate;
  public readonly updateSchedule?: ContainerStackUpdateScheduleData;
  public readonly volumes: VolumeListItem[];

  public constructor(data: ContainerStackListItemData | ContainerStackData) {
    super(data.id);
    this.data = data;
    this.description = data.description;
    this.isDefaultStack = data.description === "default";
    this.shortId = data.prefix;
    this.disabled = data.disabled;
    this.project = Project.ofId(data.projectId);
    this.containers = data.services?.map((s) => new ContainerListItem(s)) ?? [];
    this.volumes = data.volumes?.map((v) => new VolumeListItem(v)) ?? [];
    this.template = data.templateId
      ? new ContainerTemplate(data.templateId)
      : undefined;
    this.updateSchedule = data.updateSchedule ?? undefined;
  }

  public async declare(
    data: ContainerStackDeclareRequestData,
  ): Promise<ContainerStackDetailed | void> {
    const response = await config.behaviors.container.declareStack(
      this.id,
      data,
    );

    return response ? new ContainerStackDetailed(response) : undefined;
  }

  public async update(
    data: ContainerStackPatchRequestData,
  ): Promise<ContainerStackDetailed | void> {
    const response = await config.behaviors.container.updateStack(
      this.id,
      data,
    );

    return response ? new ContainerStackDetailed(response) : undefined;
  }

  public async updateDescription(description: string): Promise<void> {
    return await config.behaviors.container.updateStackDescription(
      this.id,
      description,
    );
  }
}

export class ContainerStackDetailed extends ContainerStackCommon {
  public override readonly data: ContainerStackData;
  public readonly project: Project;

  public constructor(data: ContainerStackData) {
    super(data);
    this.data = data;
    this.project = Project.ofId(data.projectId);
  }
}

export class ContainerStackListItem extends ContainerStackCommon {
  public override readonly data: ContainerStackListItemData;
  public constructor(data: ContainerStackListItemData) {
    super(data);
    this.data = data;
  }
}

export class ContainerStackListQuery extends ListQueryModel<ContainerStackListQueryModelData> {
  public constructor(query: ContainerStackListQueryModelData = {}) {
    const projectId = extractId(query.project);
    super(query, projectId ? { dependencies: [projectId] } : undefined);
  }

  public async execute() {
    const projectId = extractId(this.query.project);
    const { totalCount, items } = projectId
      ? await config.behaviors.container.listStacksOfProject(
          projectId,
          omit(this.query, ["project"]),
        )
      : await config.behaviors.container.listStacks(
          omit(this.query, ["project"]),
        );

    return new ContainerStackList(
      this.query,
      items.map((c) => new ContainerStackListItem(c)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: Partial<ContainerStackListQueryModelData> = {}) {
    return new ContainerStackListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class ContainerStackList extends WithListData<ContainerStackListItem>()(
  ContainerStackListQuery,
) {
  public override readonly items: readonly ContainerStackListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: ContainerStackListQueryModelData,
    containers: ContainerStackListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(containers);
    this.totalCount = totalCount;
  }
}
