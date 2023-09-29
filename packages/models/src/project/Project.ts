import { MittwaldAPIV2 } from "@mittwald/api-client";
import { assertOneOfStatus, assertStatus } from "@mittwald/api-client-commons";
import assertObjectFound from "../base/assertObjectFound.js";
import BaseModel, { DataMode } from "../base/BaseModel.js";
import deepFreeze from "../lib/deepFreeze.js";
import Server from "../server/Server.js";
import { CompactListResponse } from "../base/types.js";

export type ProjectListQuery =
  MittwaldAPIV2.Paths.V2Projects.Get.Parameters.Query;

type Data = MittwaldAPIV2.Operations.ProjectGetProject.ResponseData;

type CompactData =
  MittwaldAPIV2.Operations.ProjectListProjects.ResponseData[number];

export default class Project<
  TMode extends DataMode = "Default",
> extends BaseModel<Data, CompactData, TMode> {
  // loading
  public static async find(id: string): Promise<Project | undefined> {
    const response = await Project.client.project.getProject({
      id,
    });

    if (response.status === 200) {
      return new Project(response.data.id, response.data);
    }
    assertOneOfStatus(response, [403 as any]);
  }

  public static async get(id: string): Promise<Project> {
    const project = await Project.find(id);
    assertObjectFound(project, this, id);
    return project;
  }

  public static async list(
    query: ProjectListQuery = {},
  ): CompactListResponse<Project<"Compact">> {
    const response = await Project.client.project.listProjects({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return deepFreeze(
      response.data.map((d) => new Project<"Compact">(d.id, d)),
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
  ): Promise<MittwaldAPIV2.Operations.ProjectCreateProject.ResponseData<201>> {
    const response = await Project.client.project.createProject({
      serverId,
      data: {
        description,
      },
    });
    assertStatus(response, 201);
    return response.data;
  }

  // actions
  public async updateDescription(description: string): Promise<void> {
    const response = await Project.client.project.updateProjectDescription({
      id: this.id,
      data: {
        description,
      },
    });
    assertStatus(response, 200);
  }

  public async leave(): Promise<void> {
    const response = await Project.client.project.leaveProject({
      projectId: this.id,
    });
    assertStatus(response, 204);
  }

  public async delete(): Promise<void> {
    const response = await Project.client.project.deleteProject({
      projectId: this.id,
    });
    assertStatus(response, 200);
  }
}
