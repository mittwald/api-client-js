import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type {
  ProjectMembershipListQueryData,
  ProjectMembershipListItemData,
  ProjectMembershipData,
  ProjectRole,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { File } from "../../file/File/internal";
import { User } from "../../user/User/User";
import { config } from "../../config";
import { Project } from "../Project";
import { ListQueryModel, ReferenceModel, WithListData, WithData } from "../../base";

@GhostMakerModel({
  name: "ProjectMembership",
})
export class ProjectMembership extends ReferenceModel {
  public static async find(id: string, options?: AxiosRequestConfig) {
    const data = await config.behaviors.projectMembership.find(id, options);
    if (data) {
      return new ProjectMembershipDetailed(data);
    }
  }

  public static async findOwn(project: Project) {
    const data = await config.behaviors.projectMembership.findOwn(project.id);
    if (data) {
      return new ProjectMembershipDetailed(data);
    }
  }

  public static async get(id: string, options?: AxiosRequestConfig) {
    const projectMembership = await ProjectMembership.find(id, options);
    assertObjectFound(projectMembership, ProjectMembership, id);
    return projectMembership;
  }

  public static async getOwn(project: Project) {
    const membership = await ProjectMembership.findOwn(project);
    assertObjectFound(membership, ProjectMembership, project.id);
    return membership;
  }

  public static ofId(id: string) {
    return new ProjectMembership(id);
  }

  public static query(
    project: Project,
    query: ProjectMembershipListQueryData = {},
  ) {
    return new ProjectMembershipListQuery(project, query);
  }

  public async findCommon(
    options?: AxiosRequestConfig,
  ): Promise<ProjectMembershipCommon | undefined> {
    return this instanceof ProjectMembershipCommon
      ? this
      : this.findDetailed(options);
  }

  public async findDetailed(
    options?: AxiosRequestConfig,
  ): Promise<ProjectMembershipDetailed | undefined> {
    return ProjectMembership.find(this.id, options);
  }

  public async getCommon(
    options?: AxiosRequestConfig,
  ): Promise<ProjectMembershipCommon> {
    return this instanceof ProjectMembershipCommon
      ? this
      : this.getDetailed(options);
  }

  public getDetailed(
    options?: AxiosRequestConfig,
  ): Promise<ProjectMembershipDetailed> {
    return ProjectMembership.get(this.id, options);
  }

  public async remove() {
    await config.behaviors.projectMembership.remove(this.id);
  }
}

export class ProjectMembershipCommon extends WithData<
  ProjectMembershipListItemData | ProjectMembershipData
>()(ProjectMembership) {
  public readonly avatar?: File;
  public override readonly data:
    | ProjectMembershipListItemData
    | ProjectMembershipData;
  public readonly expiresAt?: DateTime;
  public readonly fullName: string;
  public readonly inherited: boolean;
  public readonly project: Project;
  public readonly role: ProjectRole;
  public readonly user: User;

  public constructor(
    data: ProjectMembershipListItemData | ProjectMembershipData,
  ) {
    super(data.id);
    this.data = data;
    this.user = User.ofId(data.userId);
    this.role = data.role;
    this.inherited = data.inherited;
    if (data.expiresAt) {
      this.expiresAt = DateTime.fromISO(data.expiresAt);
    }
    this.fullName = `${data.firstName} ${data.lastName}`;
    this.avatar = data.avatarRef ? File.ofId(data.avatarRef) : undefined;
    this.project = Project.ofId(data.projectId);
  }

  public async updateExpirationDate(expiresAt: string | null) {
    await config.behaviors.projectMembership.update(this.id, {
      expiresAt: expiresAt as string | undefined,
      role: this.role,
    });
  }

  public async updateRole(role: ProjectRole) {
    await config.behaviors.projectMembership.update(this.id, {
      expiresAt: this.data.expiresAt,
      role,
    });
  }
}

export class ProjectMembershipDetailed extends ProjectMembershipCommon {
  public override readonly data: ProjectMembershipData;
  public constructor(data: ProjectMembershipData) {
    super(data);
    this.data = data;
  }
}

export class ProjectMembershipListItem extends ProjectMembershipCommon {
  public override readonly data: ProjectMembershipListItemData;
  public constructor(data: ProjectMembershipListItemData) {
    super(data);
    this.data = data;
  }
}

export class ProjectMembershipListQuery extends ListQueryModel<ProjectMembershipListQueryData> {
  public readonly project: Project;

  public constructor(
    project: Project,
    query: ProjectMembershipListQueryData = {},
  ) {
    super(query, { dependencies: [project.id] });
    this.project = project;
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.projectMembership.list(
      this.project.id,
      this.query,
    );

    return new ProjectMembershipList(
      this.project,
      this.query,
      items.map((d) => new ProjectMembershipListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: ProjectMembershipListQueryData) {
    return new ProjectMembershipListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }
}

export class ProjectMembershipList extends WithListData<ProjectMembershipListItem>()(
  ProjectMembershipListQuery,
) {
  public override readonly items: readonly ProjectMembershipListItem[];
  public override readonly totalCount: number;
  public constructor(
    project: Project,
    query: ProjectMembershipListQueryData,
    memberships: ProjectMembershipListItem[],
    totalCount: number,
  ) {
    super(project, query);
    this.items = Object.freeze(memberships);
    this.totalCount = totalCount;
  }
}
