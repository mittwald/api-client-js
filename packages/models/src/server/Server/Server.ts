import { ReferenceModel } from "../../base/ReferenceModel.js";
import { ServerListItemData, ServerData, ServerListQuery } from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Project } from "../../project/index.js";
import { FirstParameter, ParamsExceptFirst } from "../../lib/types.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";

export class Server extends ReferenceModel {
  public static find = provideReact(
    async (id: string): Promise<Server | undefined> => {
      const serverData = await config.behaviors.server.find(id);

      if (serverData !== undefined) {
        return new ServerDetailed([serverData]);
      }
    },
  );

  public static get = provideReact(async (id: string): Promise<Server> => {
    const server = await ServerDetailed.find(id);
    assertObjectFound(server, this, id);
    return server;
  });

  public static list = provideReact(
    async (query: ServerListQuery = {}): Promise<ServerListItem[]> => {
      const projectListData = await config.behaviors.server.list(query);
      return projectListData.map((d) => new ServerListItem([d]));
    },
  );

  public static ofId(id: string): Server {
    return new Server(id);
  }

  public async createProject(
    ...parameters: ParamsExceptFirst<typeof Project.create>
  ): ReturnType<typeof Project.create> {
    return Project.create(this.id, ...parameters);
  }

  public listProjects = provideReact(
    async (
      query: Omit<FirstParameter<typeof Project.list>, "serverId"> = {},
    ): ReturnType<typeof Project.list> => {
      return Project.list({
        ...query,
        serverId: this.id,
      });
    },
  );

  public getDetailed = provideReact(() =>
    ServerDetailed.get(this.id),
  ) as AsyncResourceVariant<ServerDetailed, []>;
}

// Common class for future extension
class ServerCommon extends classes(
  DataModel<ServerListItemData | ServerData>,
  Server,
) {
  public constructor(data: ServerListItemData | ServerData) {
    super([data], [data.id]);
  }
}

export class ServerListItem extends classes<
  [typeof ServerCommon, typeof DataModel<ServerListItemData>]
>(ServerCommon, DataModel<ServerListItemData>) {}

export class ServerDetailed extends classes<
  [typeof ServerCommon, typeof DataModel<ServerData>]
>(ServerCommon, DataModel<ServerData>) {}
