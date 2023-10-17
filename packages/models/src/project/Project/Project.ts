import { ProjectCompactData, ProjectData, ProjectListQuery } from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ProxyModel } from "../../base/ProxyModel.js";
import { ServerProxy } from "../../server/Server.js";

export class ProjectProxy extends ProxyModel {
  public async updateDescription(description: string): Promise<void> {
    await config.behaviors.project.updateDescription(this.id, description);
  }

  public async leave(): Promise<void> {
    await config.behaviors.project.leave(this.id);
  }

  public async delete(): Promise<void> {
    await config.behaviors.project.delete(this.id);
  }

  public async getDetailed(): Promise<ProjectDetailed> {
    if (this instanceof ProjectDetailed) {
      return this;
    }

    return Project.get(this.id);
  }

  public static createProxy(id: string): ProjectProxy {
    return new ProjectProxy(id);
  }
}

export class ProjectBase extends classes(
  DataModel<ProjectCompactData | ProjectData>,
  ProjectProxy,
) {
  public readonly server: ServerProxy | undefined;

  public constructor(data: ProjectCompactData | ProjectData) {
    super([data], [data.id]);
    this.server = data.serverId
      ? ServerProxy.createProxy(data.serverId)
      : undefined;
  }
}

export class ProjectDetailed extends classes(
  ProjectBase,
  DataModel<ProjectData>,
) {
  public constructor(data: ProjectData) {
    super([data]);
  }

  public static async find(id: string): Promise<ProjectDetailed | undefined> {
    const data = await config.behaviors.project.find(id);
    if (data !== undefined) {
      return new ProjectDetailed(data);
    }
  }

  public static async get(id: string): Promise<ProjectDetailed> {
    const project = await this.find(id);
    assertObjectFound(project, this, id);
    return project;
  }
}

export class ProjectListItem extends classes(
  ProjectBase,
  DataModel<ProjectCompactData>,
) {
  public constructor(data: ProjectCompactData) {
    super([data as ProjectData & ProjectCompactData]);
  }

  public static async list(
    query: ProjectListQuery = {},
  ): Promise<Array<ProjectListItem>> {
    const data = await config.behaviors.project.list(query);
    return data.map((d) => new ProjectListItem(d));
  }
}

export default class Project extends classes(
  ProjectDetailed,
  ProjectListItem,
  ProjectProxy,
) {
  public static async create(
    serverId: string,
    description: string,
  ): Promise<ProjectProxy> {
    const { id } = await config.behaviors.project.create(serverId, description);
    return new ProjectProxy(id);
  }
}
