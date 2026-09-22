import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import invariant from "tiny-invariant";

import type { AIContainerType } from "../aiContainerType.js";
import type {
  AIApiKeyContainerMetaData,
  AIApiKeyTokenUsageData,
  AIApiKeyRateLimitData,
  AIApiKeyData,
} from "../types.js";
import type {
  ProjectAIApiKeyListQueryData,
  ProjectAIApiKeyListItemData,
  ProjectAIApiKeyRequestData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { Project } from "../../project/internal.js";
import { formatTokenUsage } from "../helper.js";
import { Ingress } from "../../ingress/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

export const AI_HOSTING_DOCUMENTATION_LINK =
  "https://developer.mittwald.de/de/docs/v2/platform/aihosting/";
export const AI_HOSTING_ERROR_RESOLUTION_LINK =
  "https://developer.mittwald.de/de/docs/v2/platform/aihosting/api-endpoints/errors/";
export const AI_HOSTING_INTRODUCTION_LINK =
  "https://developer.mittwald.de/de/docs/v2/platform/aihosting/introduction/";
export const AI_HOSTING_MODELS_LINK =
  "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/";
export const AI_HOSTING_LANDING_PAGE_LINK =
  "https://www.mittwald.de/mstudio/ai-hosting";
export const AI_HOSTING_LLM_ENDPOINT = "https://llm.aihosting.mittwald.de/v1";
export const AI_HOSTING_DEFAULT_RATE_LIMIT = 300;

@GhostMakerModel({
  name: "ProjectAIApiKey",
})
export class ProjectAIApiKey extends ReferenceModel {
  public readonly projectId: string;

  public constructor(licenceId: string, projectId: string) {
    super(licenceId);
    this.projectId = projectId;
  }

  public static async create(
    project: Project,
    data: ProjectAIApiKeyRequestData,
  ): Promise<ProjectAIApiKey | undefined> {
    const response = await config.behaviors.projectAiApiKey.create(
      project.id,
      data,
    );
    if (response) {
      return new ProjectAIApiKey(response.id, project.id);
    }
    return undefined;
  }

  public static async find(projectId: string, licenceId: string) {
    const data = await config.behaviors.projectAiApiKey.find(
      projectId,
      licenceId,
    );

    if (data) {
      return new ProjectAIApiKeyDetailed(data);
    }
  }

  public static async get(projectId: string, licenceId: string) {
    const apiKey = await this.find(projectId, licenceId);
    assertObjectFound(apiKey, ProjectAIApiKey, licenceId);
    return apiKey;
  }

  public static ofId(projectId: string, licenceId: string) {
    return new ProjectAIApiKey(licenceId, projectId);
  }

  public static query(
    project: Project,
    query: ProjectAIApiKeyListQueryData = {},
  ) {
    return new ProjectAIApiKeyListQuery(project, query);
  }

  public async findCommon(): Promise<ProjectAIApiKeyCommon | undefined> {
    return this instanceof ProjectAIApiKeyCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<ProjectAIApiKeyDetailed | undefined> {
    return ProjectAIApiKey.find(this.projectId, this.id);
  }

  public async getCommon(): Promise<ProjectAIApiKeyCommon> {
    return this instanceof ProjectAIApiKeyCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<ProjectAIApiKeyDetailed> {
    return ProjectAIApiKey.get(this.projectId, this.id);
  }
}

export class ProjectAIApiKeyCommon extends WithData<
  ProjectAIApiKeyListItemData | AIApiKeyData
>()(ProjectAIApiKey) {
  public readonly containerMeta: AIApiKeyContainerMetaData | undefined;
  public readonly customer: Customer | undefined;
  public override readonly data: ProjectAIApiKeyListItemData | AIApiKeyData;
  public readonly isBlocked: boolean;
  public readonly key: string;
  public readonly models: string[];
  public readonly name: string;
  public readonly planId?: string;
  public readonly project: Project;
  public readonly rateLimit: AIApiKeyRateLimitData;

  public readonly tokenUsage: AIApiKeyTokenUsageData;

  public constructor(data: ProjectAIApiKeyListItemData | AIApiKeyData) {
    invariant(data.projectId, "project id not found");
    super(data.keyId, data.projectId);
    this.data = data;
    this.project = Project.ofId(data.projectId);
    this.key = data.key;
    this.models = data.models;
    this.name = data.name;
    this.planId = data.planId;
    this.containerMeta = data.containerMeta;
    this.isBlocked = data.isBlocked;
    this.rateLimit = data.rateLimit;
    this.tokenUsage = {
      ...data.tokenUsage,
      formattedUsed: formatTokenUsage(data.tokenUsage.used),
    };

    this.customer = data.profileId ? Customer.ofId(data.profileId) : undefined;
  }

  public async addContainer(
    containerType: AIContainerType = "openwebui",
  ): Promise<void> {
    await config.behaviors.projectAiApiKey.update(this.project.id, this.id, {
      createWebuiContainer: containerType === "openwebui",
    });
  }

  public async delete(): Promise<void> {
    await config.behaviors.projectAiApiKey.delete(this.project.id, this.id);
  }

  public async linkContainer(data: {
    containerId: string;
    ingressId: string;
    stackId: string;
  }): Promise<void> {
    await config.behaviors.projectAiApiKey.linkContainer(
      this.project.id,
      this.id,
      data,
    );
  }

  public async updateName(name: string): Promise<void> {
    await config.behaviors.projectAiApiKey.update(this.project.id, this.id, {
      name,
    });
  }
}

export class ProjectAIApiKeyDetailed extends ProjectAIApiKeyCommon {
  public override readonly data: AIApiKeyData;
  public constructor(data: AIApiKeyData) {
    super(data);
    this.data = data;
  }

  public async getContainerRelatedIngress() {
    const defaultIngressId = this.containerMeta?.ingressId;

    if (!defaultIngressId || !this.project) {
      return undefined;
    }

    const ingresses = (
      await Ingress.query({
        project: this.project,
      }).execute()
    ).items;

    const defaultIngress = ingresses.find(
      (ingress) => ingress.id === defaultIngressId,
    );

    if (defaultIngress) {
      return defaultIngress;
    }

    const ingressWithContainerId = ingresses.find((ingress) =>
      ingress.paths.some(
        (path) =>
          path.target &&
          path.target.type === "container" &&
          path.target.data.container.id === this.containerMeta?.containerId,
      ),
    );

    if (ingressWithContainerId) {
      return ingressWithContainerId;
    }

    return undefined;
  }
}

export class ProjectAIApiKeyListItem extends ProjectAIApiKeyCommon {
  public override readonly data: ProjectAIApiKeyListItemData;
  public constructor(data: ProjectAIApiKeyListItemData) {
    super(data);
    this.data = data;
  }
}

export class ProjectAIApiKeyListQuery extends ListQueryModel<ProjectAIApiKeyListQueryData> {
  private readonly project: Project;

  public constructor(
    project: Project,
    query: ProjectAIApiKeyListQueryData = {},
  ) {
    super(query);
    this.project = project;
  }

  public async execute(options?: AxiosRequestConfig) {
    const { totalCount, items } = await config.behaviors.projectAiApiKey.list(
      extractId(this.project),
      options,
    );

    return new ProjectAIApiKeyList(
      this.project,
      this.query,
      items.map((d) => new ProjectAIApiKeyListItem(d)),
      totalCount,
    );
  }

  public refine(query: ProjectAIApiKeyListQueryData) {
    return new ProjectAIApiKeyListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }
}

export class ProjectAIApiKeyList extends WithListData<ProjectAIApiKeyListItem>()(
  ProjectAIApiKeyListQuery,
) {
  public override readonly items: readonly ProjectAIApiKeyListItem[];
  public override readonly totalCount: number;
  public constructor(
    project: Project,
    query: ProjectAIApiKeyListQueryData,
    apiKeys: ProjectAIApiKeyListItem[],
    totalCount: number,
  ) {
    super(project, query);
    this.items = Object.freeze(apiKeys);
    this.totalCount = totalCount;
  }
}
