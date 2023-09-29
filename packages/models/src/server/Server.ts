import BaseModel, { DataMode } from "../base/BaseModel.js";
import { assertStatus, MittwaldAPIV2 } from "@mittwald/api-client";
import assertObjectFound from "../base/assertObjectFound.js";
import Project from "../project/Project.js";
import { assertOneOfStatus } from "@mittwald/api-client-commons";
import deepFreeze from "../lib/deepFreeze.js";
import { CompactListResponse } from "../base/types.js";

export type ServerListQuery =
  MittwaldAPIV2.Paths.V2Servers.Get.Parameters.Query;

type Data = MittwaldAPIV2.Operations.ProjectGetServer.ResponseData;
type CompactData =
  MittwaldAPIV2.Operations.ProjectListServers.ResponseData[number];

export default class Server<
  TMode extends DataMode = "Default",
> extends BaseModel<Data, CompactData, TMode> {
  // loading
  public static async find(id: string): Promise<Server | undefined> {
    const response = await Server.client.project.getServer({
      serverId: id,
    });

    if (response.status === 200) {
      return new Server(response.data.id, response.data);
    }
    assertOneOfStatus(response, [403 as any, 404]);
  }

  public static async get(id: string): Promise<Server> {
    const server = await Server.find(id);
    assertObjectFound(server, this, id);
    return server;
  }

  public static async list(
    query: ServerListQuery = {},
  ): CompactListResponse<Server<"Compact">> {
    const response = await Server.client.project.listServers({
      queryParameters: query,
    });
    assertStatus(response, 200);
    return deepFreeze(response.data.map((d) => new Server<"Compact">(d.id, d)));
  }

  // references
  public async listProjects(): ReturnType<typeof Project.list> {
    return Project.list({ serverId: this.id });
  }

  // creating
  public async createProject(
    description: string,
  ): ReturnType<typeof Project.create> {
    return Project.create(this.id, description);
  }
}
