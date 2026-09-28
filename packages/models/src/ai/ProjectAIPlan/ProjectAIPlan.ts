import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";

import type {
  ProjectAIPlanListQueryData,
  ProjectAIPlanListItemData,
  ProjectAIPlanLicences,
  ProjectAIPlanData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { Project } from "../../project/internal.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "ProjectAIPlan",
})
export class ProjectAIPlan extends ReferenceModel {
  public readonly projectId: string;

  public constructor(planId: string, projectId: string) {
    super(planId);
    this.projectId = projectId;
  }

  public static async findByProject(
    projectId: string,
    planId: string,
    options?: AxiosRequestConfig,
  ) {
    const data = await config.behaviors.projectAiPlan.find(
      projectId,
      planId,
      options,
    );

    if (data) {
      return new ProjectAIPlanDetailed(data);
    }
  }

  public static async getByProject(
    projectId: string,
    planId: string,
    options?: AxiosRequestConfig,
  ) {
    const plan = await this.findByProject(projectId, planId, options);
    assertObjectFound(plan, ProjectAIPlan, planId);
    return plan;
  }

  public static ofId(projectId: string, planId: string) {
    return new ProjectAIPlan(planId, projectId);
  }

  public static query(project: Project | string) {
    return new ProjectAIPlanListQuery(extractId(project));
  }

  public async findCommon(
    options?: AxiosRequestConfig,
  ): Promise<ProjectAIPlanCommon | undefined> {
    return this instanceof ProjectAIPlanCommon
      ? this
      : this.findDetailed(options);
  }

  public async findDetailed(
    options?: AxiosRequestConfig,
  ): Promise<ProjectAIPlanDetailed | undefined> {
    return ProjectAIPlan.findByProject(this.projectId, this.id, options);
  }

  public async getCommon(
    options?: AxiosRequestConfig,
  ): Promise<ProjectAIPlanCommon> {
    return this instanceof ProjectAIPlanCommon
      ? this
      : this.getDetailed(options);
  }

  public async getDetailed(
    options?: AxiosRequestConfig,
  ): Promise<ProjectAIPlanDetailed> {
    return ProjectAIPlan.getByProject(this.projectId, this.id, options);
  }
}

export class ProjectAIPlanCommon extends WithData<
  ProjectAIPlanListItemData | ProjectAIPlanData
>()(ProjectAIPlan) {
  public readonly apiKeys: ProjectAIPlanLicences;
  public override readonly data: ProjectAIPlanListItemData | ProjectAIPlanData;
  public readonly description?: string;
  public readonly modelTermsApprovalRequired: boolean;
  public readonly planId: string;
  public readonly project: Project;

  public constructor(data: ProjectAIPlanListItemData | ProjectAIPlanData) {
    super(data.planId, data.projectId);
    this.data = data;

    this.planId = data.planId;
    this.project = Project.ofId(data.projectId);
    this.description = data.description;
    this.apiKeys = data.keys;
    this.modelTermsApprovalRequired = data.modelTermsApprovalRequired;
  }

  public hasPlan(): boolean {
    return this.apiKeys.planLimit > 0 || this.apiKeys.planLimit === -1;
  }
}

export class ProjectAIPlanDetailed extends ProjectAIPlanCommon {
  public constructor(data: ProjectAIPlanData) {
    super(data);
  }
}

export class ProjectAIPlanListItem extends ProjectAIPlanCommon {
  public override readonly data: ProjectAIPlanListItemData;

  public constructor(data: ProjectAIPlanListItemData) {
    super(data);
    this.data = data;
  }
}

export class ProjectAIPlanListQuery extends ListQueryModel<ProjectAIPlanListQueryData> {
  private readonly projectId: string;

  public constructor(
    projectId: string,
    query: ProjectAIPlanListQueryData = {},
  ) {
    super(query, { dependencies: [projectId] });
    this.projectId = projectId;
  }

  public async execute(options?: AxiosRequestConfig) {
    const result = await config.behaviors.projectAiPlan.list(
      this.projectId,
      this.query,
      options,
    );

    return new ProjectAIPlanList(
      this.projectId,
      this.query,
      result.items.map((item) => new ProjectAIPlanListItem(item)),
      result.totalCount,
    );
  }

  public override async getTotalCount(options?: AxiosRequestConfig) {
    const list = await this.execute(options);
    return list.totalCount;
  }
}

export class ProjectAIPlanList extends WithListData<ProjectAIPlanListItem>()(
  ProjectAIPlanListQuery,
) {
  public override readonly items: readonly ProjectAIPlanListItem[];
  public override readonly totalCount: number;

  public constructor(
    projectId: string,
    query: ProjectAIPlanListQueryData,
    items: ProjectAIPlanListItem[],
    totalCount: number,
  ) {
    super(projectId, query);
    this.items = Object.freeze(items);
    this.totalCount = totalCount;
  }
}
