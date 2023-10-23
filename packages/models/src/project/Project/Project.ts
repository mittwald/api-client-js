import { ProjectCompactData, ProjectData, ProjectListQuery } from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ProxyModel } from "../../base/ProxyModel.js";
import { ServerProxy } from "../../server/Server/Server.js";
import { isUuid } from "../../lib/isUuid.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";

export class ProjectProxy extends ProxyModel {
  protected async getUuid(): Promise<string> {
    return ProjectProxy.getUuid(this.id);
  }

  public static async getUuid(shortIdOrUuid: string): Promise<string> {
    if (isUuid(shortIdOrUuid)) {
      return shortIdOrUuid;
    }
    const allProjects = await ProjectListItem.list();

    const uuid = allProjects.find((p) => p.data.shortId === shortIdOrUuid)?.id;

    if (uuid === undefined) {
      throw new ObjectNotFoundError(Project.name, shortIdOrUuid);
    }

    return uuid;
  }

  public async updateDescription(description: string): Promise<void> {
    await config.behaviors.project.updateDescription(
      await this.getUuid(),
      description,
    );
  }

  public async leave(): Promise<void> {
    await config.behaviors.project.leave(await this.getUuid());
  }

  public async delete(): Promise<void> {
    await config.behaviors.project.delete(await this.getUuid());
  }

  public async getDetailed(): Promise<ProjectDetailed> {
    if (this instanceof ProjectDetailed) {
      return this;
    }

    return Project.get(await this.getUuid());
  }

  public static ofId(id: string): ProjectProxy {
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
    this.server = data.serverId ? ServerProxy.ofId(data.serverId) : undefined;
  }
}

export class ProjectDetailed extends classes(
  ProjectBase,
  DataModel<ProjectData>,
) {
  public static async find(id: string): Promise<ProjectDetailed | undefined> {
    const data = await config.behaviors.project.find(
      await ProjectProxy.getUuid(id),
    );
    if (data !== undefined) {
      return new ProjectDetailed([data]);
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
  public static async list(
    query: ProjectListQuery = {},
  ): Promise<Array<ProjectListItem>> {
    const data = await config.behaviors.project.list(query);
    return data.map((d) => new ProjectListItem([d]));
  }
}

export default class Project extends classes(ProjectDetailed, ProjectListItem) {
  public static async create(
    serverId: string,
    description: string,
  ): Promise<ProjectProxy> {
    const { id } = await config.behaviors.project.create(serverId, description);
    return new ProjectProxy(id);
  }
}
