import { ProxyModel } from "../../base/ProxyModel.js";
import { ServerCompactData, ServerData, ServerListQuery } from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import Project from "../../project/Project/Project.js";

export class ServerProxy extends ProxyModel {
  public static createProxy(id: string): ServerProxy {
    return new ServerProxy(id);
  }

  public async createProject(
    description: string,
  ): ReturnType<typeof Project.create> {
    return Project.create(this.id, description);
  }

  public async listProjects(): ReturnType<typeof Project.list> {
    return Project.list({
      serverId: this.id,
    });
  }

  public async getDetailed(): Promise<ServerDetailed> {
    return ServerDetailed.get(this.id);
  }
}

export class ServerBase extends classes(
  DataModel<ServerCompactData | ServerData>,
  ServerProxy,
) {
  public constructor(data: ServerCompactData | ServerData) {
    super([data], [data.id]);
  }
}

export class ServerListItem extends classes(
  ServerBase,
  DataModel<ServerCompactData>,
) {
  public constructor(data: ServerCompactData) {
    super([data]);
  }

  public static async list(
    query: ServerListQuery = {},
  ): Promise<ServerListItem[]> {
    const projectListData = await config.behaviors.server.list(query);
    return projectListData.map((d) => new ServerListItem(d));
  }
}

export class ServerDetailed extends classes(ServerBase, DataModel<ServerData>) {
  public constructor(data: ServerData) {
    super([data]);
  }

  public static async find(id: string): Promise<Server | undefined> {
    const serverData = await config.behaviors.server.find(id);
    if (serverData !== undefined) {
      return new ServerDetailed(serverData);
    }
  }

  public static async get(id: string): Promise<Server> {
    const server = await ServerDetailed.find(id);
    assertObjectFound(server, this, id);
    return server;
  }
}

export default class Server extends classes(
  ServerDetailed,
  ServerListItem,
  ServerProxy,
) {}
