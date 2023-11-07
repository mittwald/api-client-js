import { ProxyModel } from "../../base/ProxyModel.js";
import { ServerCompactData, ServerData, ServerListQuery } from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Project } from "../../project/index.js";
import { FirstParameter, ParamsExceptFirst } from "../../lib/types.js";
import { isUuid } from "../../lib/isUuid.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  AsyncResourceVariant,
  withAsyncResourceVariant,
} from "../../react/index.js";

export class ServerProxy extends ProxyModel {
  public async getUuid(): Promise<string> {
    return ServerProxy.getUuid(this.id);
  }

  public static async getUuid(shortIdOrUuid: string): Promise<string> {
    if (isUuid(shortIdOrUuid)) {
      return shortIdOrUuid;
    }
    const allServers = await ServerListItem.list();

    const uuid = allServers.find((p) => p.data.shortId === shortIdOrUuid)?.id;

    if (uuid === undefined) {
      throw new ObjectNotFoundError(Server.name, shortIdOrUuid);
    }

    return uuid;
  }

  public static ofId(id: string): ServerProxy {
    return new ServerProxy(id);
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

export class ServerBase extends classes(
  DataModel<ServerCompactData | ServerData>,
  ServerProxy,
) {
  public constructor(data: ServerCompactData | ServerData) {
    super([data], [data.id]);
  }
}

export class ServerListItem extends classes<
  [typeof ServerBase, typeof DataModel<ServerCompactData>]
>(ServerBase, DataModel<ServerCompactData>) {
  public static list = withAsyncResourceVariant(
    async (query: ServerListQuery = {}): Promise<ServerListItem[]> => {
      const projectListData = await config.behaviors.server.list(query);
      return projectListData.map((d) => new ServerListItem([d]));
    },
  );
}

export class ServerDetailed extends classes<
  [typeof ServerBase, typeof DataModel<ServerData>]
>(ServerBase, DataModel<ServerData>) {
  public static find = withAsyncResourceVariant(
    async (id: string): Promise<Server | undefined> => {
      const serverData = await config.behaviors.server.find(
        await ServerProxy.getUuid(id),
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
}

export class Server extends classes(ServerDetailed, ServerListItem) {}
