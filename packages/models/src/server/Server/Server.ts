import { ProxyModel } from "../../base/ProxyModel.js";
import { ServerCompactData, ServerData, ServerListQuery } from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Project } from "../../project/index.js";
import { FirstParameter, ParamsExceptFirst } from "../../lib/types.js";
import { isUuid } from "../../lib/isUuid.js";
import {
  AsyncResourceVariant,
  withAsyncResourceVariant,
} from "../../react/index.js";

export class Server extends ProxyModel {
  public static find = withAsyncResourceVariant(
    async (id: string): Promise<Server | undefined> => {
      const serverData = await config.behaviors.server.find(
        await Server.getUuid(id),
      );

      if (serverData !== undefined) {
        return new ServerDetailed([serverData]);
      }
    },
  );

  public static get = withAsyncResourceVariant(
    async (id: string): Promise<Server> => {
      const server = await ServerDetailed.find(id);
      assertObjectFound(server, this, id);
      return server;
    },
  );

  public static list = withAsyncResourceVariant(
    async (query: ServerListQuery = {}): Promise<ServerListItem[]> => {
      const projectListData = await config.behaviors.server.list(query);
      return projectListData.map((d) => new ServerListItem([d]));
    },
  );

  public static ofId(id: string): Server {
    return new Server(id);
  }

  private async getUuid(): Promise<string> {
    return Server.getUuid(this.id);
  }

  private static async getUuid(shortIdOrUuid: string): Promise<string> {
    if (isUuid(shortIdOrUuid)) {
      return shortIdOrUuid;
    }
    const allServers = await ServerListItem.list();

    const uuid = allServers.find((p) => p.data.shortId === shortIdOrUuid)?.id;
    assertObjectFound(uuid, Server, shortIdOrUuid);
    return uuid;
  }

  public async createProject(
    ...parameters: ParamsExceptFirst<typeof Project.create>
  ): ReturnType<typeof Project.create> {
    return Project.create(await this.getUuid(), ...parameters);
  }

  public listProjects = withAsyncResourceVariant(
    async (
      query: Omit<FirstParameter<typeof Project.list>, "serverId"> = {},
    ): ReturnType<typeof Project.list> => {
      return Project.list({
        ...query,
        serverId: await this.getUuid(),
      });
    },
  );

  public getDetailed = withAsyncResourceVariant(() =>
    ServerDetailed.get(this.id),
  ) as AsyncResourceVariant<ServerDetailed, []>;
}

// Common class for future extension
class ServerCommon extends classes(
  DataModel<ServerCompactData | ServerData>,
  Server,
) {
  public constructor(data: ServerCompactData | ServerData) {
    super([data], [data.id]);
  }
}

export class ServerListItem extends classes<
  [typeof ServerCommon, typeof DataModel<ServerCompactData>]
>(ServerCommon, DataModel<ServerCompactData>) {}

export class ServerDetailed extends classes<
  [typeof ServerCommon, typeof DataModel<ServerData>]
>(ServerCommon, DataModel<ServerData>) {}
