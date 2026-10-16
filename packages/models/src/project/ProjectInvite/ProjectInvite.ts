import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";

import type { ProjectRole } from "../ProjectMembership/index.js";
import type {
  ProjectInviteCreateRequestData,
  ProjectInviteListQueryData,
  ProjectInviteListItemData,
  ProjectInviteData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { AggregateMetaData } from "../../common/index.js";
import { User } from "../../user/User/User.js";
import { config } from "../../config/index.js";
import { Project } from "../Project/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "ProjectInvite",
})
export class ProjectInvite extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "membership",
    "projectinvite",
  );

  public static async acceptWithToken(invitationToken: string) {
    const invite =
      await config.behaviors.projectInvite.getByToken(invitationToken);

    await config.behaviors.projectInvite.accept(invite.id, invitationToken);
  }

  public static async create(
    project: Project,
    data: ProjectInviteCreateRequestData,
  ) {
    const response = await config.behaviors.projectInvite.create(
      project.id,
      data,
    );

    return new ProjectInvite(response.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.projectInvite.find(id);
    if (data) {
      return new ProjectInviteDetailed(data);
    }
  }

  public static async get(id: string) {
    const projectInvite = await ProjectInvite.find(id);
    assertObjectFound(projectInvite, ProjectInvite, id);
    return projectInvite;
  }

  public static async listIncoming() {
    const data = await config.behaviors.projectInvite.listIncoming();

    return data.items.map((i) => new ProjectInviteListItem(i));
  }

  public static ofId(id: string) {
    return new ProjectInvite(id);
  }

  public static query(
    project: Project,
    query: ProjectInviteListQueryData = {},
  ) {
    return new ProjectInviteListQuery(project, query);
  }

  public async decline() {
    await config.behaviors.projectInvite.decline(this.id);
  }

  public async delete() {
    await config.behaviors.projectInvite.delete(this.id);
  }

  public async findCommon(): Promise<ProjectInviteCommon | undefined> {
    return this instanceof ProjectInviteCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<ProjectInviteDetailed | undefined> {
    return ProjectInvite.find(this.id);
  }

  public async getCommon(): Promise<ProjectInviteCommon> {
    return this instanceof ProjectInviteCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<ProjectInviteDetailed> {
    return ProjectInvite.get(this.id);
  }
}

export class ProjectInviteCommon extends WithData<
  ProjectInviteListItemData | ProjectInviteData
>()(ProjectInvite) {
  public override readonly data: ProjectInviteListItemData | ProjectInviteData;
  public readonly invitedBy: User;
  public readonly mailAddress: string;
  public readonly message?: string;
  public readonly project: Project;
  public readonly projectDescription: string;
  public readonly role: ProjectRole;

  public constructor(data: ProjectInviteListItemData | ProjectInviteData) {
    super(data.id);
    this.data = data;
    this.role = data.role;
    this.mailAddress = data.mailAddress;
    this.projectDescription = data.projectDescription;
    this.invitedBy = User.ofId(data.information.invitedBy);
    this.message = data.message;
    this.project = Project.ofId(data.projectId);
  }

  public async accept() {
    await config.behaviors.projectInvite.accept(this.id);
  }
}

export class ProjectInviteDetailed extends ProjectInviteCommon {
  public override readonly data: ProjectInviteData;
  public constructor(data: ProjectInviteData) {
    super(data);
    this.data = data;
  }
}

export class ProjectInviteListItem extends ProjectInviteCommon {
  public override readonly data: ProjectInviteListItemData;
  public constructor(data: ProjectInviteListItemData) {
    super(data);
    this.data = data;
  }
}

export class ProjectInviteListQuery extends ListQueryModel<ProjectInviteListQueryData> {
  public readonly project: Project;

  public constructor(project: Project, query: ProjectInviteListQueryData = {}) {
    super(query, { dependencies: [project.id] });
    this.project = project;
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.projectInvite.list(
      this.project.id,
      this.query,
    );

    return new ProjectInviteList(
      this.project,
      this.query,
      items.map((d) => new ProjectInviteListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: ProjectInviteListQueryData) {
    return new ProjectInviteListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }
}

export class ProjectInviteList extends WithListData<ProjectInviteListItem>()(
  ProjectInviteListQuery,
) {
  public override readonly items: readonly ProjectInviteListItem[];
  public override readonly totalCount: number;
  public constructor(
    project: Project,
    query: ProjectInviteListQueryData,
    invites: ProjectInviteListItem[],
    totalCount: number,
  ) {
    super(project, query);
    this.items = Object.freeze(invites);
    this.totalCount = totalCount;
  }
}
