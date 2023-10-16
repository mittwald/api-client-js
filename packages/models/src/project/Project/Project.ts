import assertObjectFound from "../../base/assertObjectFound.js";
import BaseModel, { DataMode } from "../../base/BaseModel.js";
import deepFreeze from "../../lib/deepFreeze.js";
import Server from "../../server/Server.js";
import { CompactListResponse } from "../../base/types.js";
import { ProjectBehaviors } from "./behaviors/types.js";
import { ProjectCompactData, ProjectData, ProjectListQuery } from "./types.js";

export default class Project<
  TMode extends DataMode = "Default",
> extends BaseModel<ProjectData, ProjectCompactData, TMode> {
  public static behaviors: ProjectBehaviors;

  // loading
  public static async find(id: string): Promise<Project | undefined> {
    const data = await Project.behaviors.find(id);
    if (data !== undefined) {
      return new Project(data.id, "Default", data);
    }
  }

  public static async get(id: string): Promise<Project> {
    const project = await Project.find(id);
    assertObjectFound(project, this, id);
    return project;
  }

  public static async list(
    query: ProjectListQuery = {},
  ): CompactListResponse<Project<"Compact">> {
    const data = await Project.behaviors.list(query);
    return deepFreeze(data.map((d) => new Project(d.id, "Compact", d)));
  }

  // references
  public async getDetailed(): Promise<Project> {
    if (this.modeIs("Default")) {
      return this;
    }

    return Project.get(this.id);
  }

  public async getServer(): Promise<Server | undefined> {
    const detailedProject = await this.getDetailed();
    if (detailedProject.data.serverId) {
      return Server.get(detailedProject.data.serverId);
    }
  }

  // creating
  public static ofId(id: string): Project<"Id"> {
    return new Project<"Id">(id, "Id", null);
  }

  public static async create(
    serverId: string,
    description: string,
  ): Promise<Project<"Id">> {
    const { id } = await Project.behaviors.create(serverId, description);
    return new Project(id, "Id", null);
  }

  // actions
  public async updateDescription(description: string): Promise<void> {
    await Project.behaviors.updateDescription(this.id, description);
  }

  public async leave(): Promise<void> {
    await Project.behaviors.leave(this.id);
  }

  public async delete(): Promise<void> {
    await Project.behaviors.delete(this.id);
  }
}
