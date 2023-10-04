import assertObjectFound from "../../base/assertObjectFound.js";
import BaseModel, { DataMode } from "../../base/BaseModel.js";
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
      return new Project(data.id, data);
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
    return BaseModel.behavior.deepFreeze(
      data.map((d) => new Project<"Compact">(d.id, d)),
    );
  }

  // references
  public async getDetailed(): Promise<Project> {
    return Project.get(this.id);
  }

  public async getServer(): Promise<Server | undefined> {
    if (this.data.serverId) {
      return Server.get(this.data.serverId);
    }
  }

  // creating
  public static async create(
    serverId: string,
    description: string,
  ): Promise<ReturnType<ProjectBehaviors["create"]>> {
    return Project.behaviors.create(serverId, description);
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
