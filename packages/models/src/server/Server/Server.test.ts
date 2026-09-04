import { jest } from "@jest/globals";
import { config } from "../../config/config.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  Server,
  ServerDetailed,
  ServerList,
  ServerListItem,
  ServerListQuery,
} from "./Server.js";
import { ServerBehaviors } from "./behaviors/types.js";
import { ServerData, ServerListItemData } from "./types.js";
import { ProjectBehaviors } from "../../project/Project/behaviors/types.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { Project } from "../../project/index.js";

const serverData = (overrides: Partial<ServerData> = {}): ServerData =>
  ({
    id: "server-1",
    description: "My server",
    customerId: "customer-1",
    ...overrides,
  }) as unknown as ServerData;

const listItemData = (
  overrides: Partial<ServerData> = {},
): ServerListItemData => serverData(overrides) as unknown as ServerListItemData;

const server = {
  find: jest.fn<ServerBehaviors["find"]>(),
  list: jest.fn<ServerBehaviors["list"]>(),
};

const project = {
  find: jest.fn<ProjectBehaviors["find"]>(),
  list: jest.fn<ProjectBehaviors["list"]>(),
  create: jest.fn<ProjectBehaviors["create"]>(),
  leave: jest.fn<ProjectBehaviors["leave"]>(),
  delete: jest.fn<ProjectBehaviors["delete"]>(),
  updateDescription: jest.fn<ProjectBehaviors["updateDescription"]>(),
};

beforeEach(() => {
  Object.values(server).forEach((mock) => mock.mockReset());
  Object.values(project).forEach((mock) => mock.mockReset());
  config.behaviors.server = server;
  config.behaviors.project = project;
});

describe("Server reference", () => {
  test("ofId keeps the id", () => {
    expect(Server.ofId("server-1").id).toBe("server-1");
  });

  test("describes itself with class name and id", () => {
    expect(Server.ofId("server-1").describe()).toBe("Server@server-1");
  });

  test("exposes a project query scoped to itself", async () => {
    project.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Server.ofId("server-1").projects.execute();

    expect(project.list).toHaveBeenCalledWith({
      serverId: "server-1",
      customerId: undefined,
    });
  });
});

describe("Server.find", () => {
  test("wraps the found data in a ServerDetailed", async () => {
    server.find.mockResolvedValue(serverData());

    const found = await Server.find("server-1");

    expect(server.find).toHaveBeenCalledWith("server-1");
    expect(found).toBeInstanceOf(ServerDetailed);
    expect(found?.id).toBe("server-1");
  });

  test("returns undefined when the behavior finds nothing", async () => {
    server.find.mockResolvedValue(undefined);

    await expect(Server.find("missing")).resolves.toBeUndefined();
  });
});

describe("Server.get", () => {
  test("returns the server when it exists", async () => {
    server.find.mockResolvedValue(serverData());

    await expect(Server.get("server-1")).resolves.toBeInstanceOf(
      ServerDetailed,
    );
  });

  test("throws a named ObjectNotFoundError when it does not exist", async () => {
    server.find.mockResolvedValue(undefined);

    await expect(Server.get("missing")).rejects.toThrow(ObjectNotFoundError);
    await expect(Server.get("missing")).rejects.toThrow(
      "Server@missing not found",
    );
  });
});

describe("createProject", () => {
  test("creates the project on this server", async () => {
    project.create.mockResolvedValue({ id: "project-new" });

    const created =
      await Server.ofId("server-1").createProject("My new project");

    expect(project.create).toHaveBeenCalledWith("server-1", "My new project");
    expect(created).toBeInstanceOf(Project);
    expect(created.id).toBe("project-new");
  });
});

describe("listProjects", () => {
  /**
   * `listProjects` passes `serverId` into `Project.list`, but
   * `ProjectListQuery.execute` spreads the query first and then assigns
   * `serverId: server?.id` — with no `server` model in the query that resolves
   * to `undefined` and overwrites the id. The filter is silently dropped, so
   * this returns every project the caller can see rather than this server's.
   */
  test("loses the server filter on its way to the behavior", async () => {
    project.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Server.ofId("server-1").listProjects();

    expect(project.list).toHaveBeenCalledWith(
      expect.objectContaining({ serverId: undefined }),
    );
  });

  test("keeps additional query options", async () => {
    project.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Server.ofId("server-1").listProjects({ limit: 5 });

    expect(project.list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: 5 }),
    );
  });

  test("the projects property does apply the filter, unlike listProjects", async () => {
    project.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Server.ofId("server-1").projects.execute();

    expect(project.list).toHaveBeenCalledWith(
      expect.objectContaining({ serverId: "server-1" }),
    );
  });
});

describe("ServerDetailed", () => {
  test("exposes the raw data and the id", () => {
    const detailed = new ServerDetailed(serverData());

    expect(detailed.id).toBe("server-1");
    expect(detailed.data.description).toBe("My server");
  });
});

describe("ServerListQuery", () => {
  test("applies the default pagination limit", async () => {
    server.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Server.query().execute();

    expect(server.list).toHaveBeenCalledWith({
      limit: config.defaultPaginationLimit,
      customerId: undefined,
    });
  });

  test("lets an explicit limit win over the default", async () => {
    server.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Server.query({ limit: 5 }).execute();

    expect(server.list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: 5 }),
    );
  });

  test("maps a customer reference to a customerId", async () => {
    server.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Server.query({ customer: Customer.ofId("customer-1") }).execute();

    expect(server.list).toHaveBeenCalledWith(
      expect.objectContaining({ customerId: "customer-1" }),
    );
  });

  test("wraps the response into a ServerList of ServerListItems", async () => {
    server.list.mockResolvedValue({ items: [listItemData()], totalCount: 3 });

    const result = await Server.query().execute();

    expect(result).toBeInstanceOf(ServerList);
    expect(result.totalCount).toBe(3);
    expect(result.items[0]).toBeInstanceOf(ServerListItem);
    expect(result.items[0].id).toBe("server-1");
  });

  test("refine merges the new query on top of the existing one", async () => {
    server.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Server.query({ limit: 5 }).refine({ limit: 10 }).execute();

    expect(server.list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: 10 }),
    );
  });

  test("refine returns a new query rather than mutating the old one", () => {
    const query = Server.query({ limit: 5 });

    const refined = query.refine({ limit: 10 });

    expect(refined).not.toBe(query);
    expect(refined).toBeInstanceOf(ServerListQuery);
    expect(refined.queryId).not.toBe(query.queryId);
  });

  test("getTotalCount asks for a single item and reports the reported total", async () => {
    server.list.mockResolvedValue({ items: [listItemData()], totalCount: 42 });

    await expect(Server.query().getTotalCount()).resolves.toBe(42);
    expect(server.list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: 1 }),
    );
  });

  test("findOneAndOnly returns the single match", async () => {
    server.list.mockResolvedValue({ items: [listItemData()], totalCount: 1 });

    const found = await Server.query().findOneAndOnly();

    expect(found?.id).toBe("server-1");
    expect(server.list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: 2 }),
    );
  });

  test("findOneAndOnly returns undefined when the total count is not one", async () => {
    server.list.mockResolvedValue({
      items: [listItemData(), listItemData({ id: "server-2" })],
      totalCount: 2,
    });

    await expect(Server.query().findOneAndOnly()).resolves.toBeUndefined();
  });
});

describe("Server.list", () => {
  test("returns just the items of the query result", async () => {
    server.list.mockResolvedValue({ items: [listItemData()], totalCount: 1 });

    const items = await Server.list();

    expect(items).toHaveLength(1);
    expect(items[0]).toBeInstanceOf(ServerListItem);
  });
});
