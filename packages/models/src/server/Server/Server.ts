import { ReferenceModel } from "../../base/ReferenceModel.js";
import {
  ServerData,
  ServerListItemData,
  ServerListQueryData,
  ServerListQueryModelData,
} from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Project, ProjectListQuery } from "../../project/index.js";
import { FirstParameter, ParamsExceptFirst } from "../../lib/types.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { ListQueryModel } from "../../base/ListQueryModel.js";
import { ListDataModel } from "../../base/ListDataModel.js";

export class Server extends ReferenceModel {
  public readonly projects: ProjectListQuery;

  public constructor(id: string) {
    super(id);
    this.projects = new ProjectListQuery({
      server: this,
    });
  }

  public static ofId(id: string): Server {
    return new Server(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ServerDetailed | undefined> => {
      const data = await config.behaviors.server.find(id);

      if (data !== undefined) {
        return new ServerDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ServerDetailed> => {
      const server = await this.find(id);
      assertObjectFound(server, this, id);
      return server;
    },
  );

  public static query(query: ServerListQueryModelData = {}) {
    return new ServerListQuery(query);
  }

  /** @deprecated: use query() or customer.servers */
  public static list = provideReact(
    async (
      query: ServerListQueryData = {},
    ): Promise<Readonly<ServerListItem[]>> => {
      return new ServerListQuery(query).execute().then((r) => r.items);
    },
  );

  public async createProject(
    ...parameters: ParamsExceptFirst<typeof Project.create>
  ): ReturnType<typeof Project.create> {
    return Project.create(this.id, ...parameters);
  }

  /** @deprecated Use Server.projects property */
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

  public getDetailed = provideReact(
    () => Server.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<ServerDetailed, []>;

  public findDetailed = provideReact(
    () => Server.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<ServerDetailed | undefined, []>;
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

export class ServerDetailed extends classes(
  ServerCommon,
  DataModel<ServerData>,
) {
  public constructor(data: ServerData) {
    super([data], [data]);
  }
}

export class ServerListItem extends classes(
  ServerCommon,
  DataModel<ServerListItemData>,
) {
  public constructor(data: ServerListItemData) {
    super([data], [data]);
  }
}

export class ServerListQuery extends ListQueryModel<ServerListQueryModelData> {
  public constructor(query: ServerListQueryModelData = {}) {
    super(query);
  }

  public refine(query: ServerListQueryModelData) {
    return new ServerListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { customer, ...query } = this.query;
    const { items, totalCount } = await config.behaviors.server.list({
      limit: config.defaultPaginationLimit,
      customerId: customer?.id,
      ...query,
    });

    return new ServerList(
      this.query,
      items.map((d) => new ServerListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({ limit: 2 }).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class ServerList extends classes(
  ServerListQuery,
  ListDataModel<ServerListItem>,
) {
  public constructor(
    query: ServerListQueryData,
    servers: ServerListItem[],
    totalCount: number,
  ) {
    super([query], [servers, totalCount]);
  }
}
