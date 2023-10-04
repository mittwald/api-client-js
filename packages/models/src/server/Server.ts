import BaseModel, { DataMode } from "../base/BaseModel.js";
import assertObjectFound from "../base/assertObjectFound.js";
import Project from "../project/Project/Project.js";
import { CompactListResponse } from "../base/types.js";
import { ServerCompactData, ServerData, ServerListQuery } from "./types.js";
import { ServerBehaviors } from "./behaviors/types.js";

export default class Server<
  TMode extends DataMode = "Default",
> extends BaseModel<ServerData, ServerCompactData, TMode> {
  public static behaviors: ServerBehaviors;

  // loading
  public static async find(id: string): Promise<Server | undefined> {
    const serverData = await this.behaviors.find(id);
    if (serverData !== undefined) {
      return new Server(serverData.id, serverData);
    }
  }

  public static async get(id: string): Promise<Server> {
    const server = await Server.find(id);
    assertObjectFound(server, this, id);
    return server;
  }

  public static async list(
    query: ServerListQuery = {},
  ): CompactListResponse<Server<"Compact">> {
    const projectListData = await this.behaviors.list(query);
    return BaseModel.behavior.deepFreeze(
      projectListData.map((d) => new Server<"Compact">(d.id, d)),
    );
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
