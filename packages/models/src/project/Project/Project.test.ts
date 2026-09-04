import { jest } from "@jest/globals";
import { config } from "../../config/config.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  Project,
  ProjectDetailed,
  ProjectList,
  ProjectListItem,
  ProjectListQuery,
} from "./Project.js";
import { ProjectBehaviors } from "./behaviors/types.js";
import { ProjectData, ProjectListItemData } from "./types.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { Server } from "../../server/index.js";
import { IngressBehaviors } from "../../domain/Ingress/behaviors/types.js";
import { IngressListItem } from "../../domain/index.js";

const projectData = (overrides: Partial<ProjectData> = {}): ProjectData =>
  ({
    id: "project-1",
    description: "My project",
    customerId: "customer-1",
    serverId: "server-1",
    ...overrides,
  }) as unknown as ProjectData;

const listItemData = (
  overrides: Partial<ProjectData> = {},
): ProjectListItemData =>
  projectData(overrides) as unknown as ProjectListItemData;

const ingressData = (overrides: Record<string, unknown> = {}) =>
  ({
    id: "ingress-1",
    hostname: "example.com",
    isDefault: false,
    paths: [{ path: "/", target: { useDefaultPage: true } }],
    ...overrides,
  }) as never;

const project = {
  find: jest.fn<ProjectBehaviors["find"]>(),
  list: jest.fn<ProjectBehaviors["list"]>(),
  create: jest.fn<ProjectBehaviors["create"]>(),
  leave: jest.fn<ProjectBehaviors["leave"]>(),
  delete: jest.fn<ProjectBehaviors["delete"]>(),
  updateDescription: jest.fn<ProjectBehaviors["updateDescription"]>(),
};

const ingress = {
  find: jest.fn<IngressBehaviors["find"]>(),
  list: jest.fn<IngressBehaviors["list"]>(),
};

beforeEach(() => {
  Object.values(project).forEach((mock) => mock.mockReset());
  Object.values(ingress).forEach((mock) => mock.mockReset());
  config.behaviors.project = project;
  config.behaviors.ingress = ingress;
});

describe("Project reference", () => {
  test("ofId keeps the id", () => {
    expect(Project.ofId("project-1").id).toBe("project-1");
  });

  test("describes itself with class name and id", () => {
    expect(Project.ofId("project-1").describe()).toBe("Project@project-1");
  });

  test("exposes an ingress query scoped to itself", async () => {
    ingress.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Project.ofId("project-1").ingresses.execute();

    expect(ingress.list).toHaveBeenCalledWith({ projectId: "project-1" });
  });

  test("exposes an app installation query", () => {
    expect(Project.ofId("project-1").appInstallations).toBeDefined();
  });
});

describe("Project.find", () => {
  test("wraps the found data in a ProjectDetailed", async () => {
    project.find.mockResolvedValue(projectData());

    const found = await Project.find("project-1");

    expect(project.find).toHaveBeenCalledWith("project-1");
    expect(found).toBeInstanceOf(ProjectDetailed);
    expect(found?.id).toBe("project-1");
  });

  test("returns undefined when the behavior finds nothing", async () => {
    project.find.mockResolvedValue(undefined);

    await expect(Project.find("missing")).resolves.toBeUndefined();
  });
});

describe("Project.get", () => {
  test("returns the project when it exists", async () => {
    project.find.mockResolvedValue(projectData());

    await expect(Project.get("project-1")).resolves.toBeInstanceOf(
      ProjectDetailed,
    );
  });

  test("throws a named ObjectNotFoundError when it does not exist", async () => {
    project.find.mockResolvedValue(undefined);

    await expect(Project.get("missing")).rejects.toThrow(ObjectNotFoundError);
    await expect(Project.get("missing")).rejects.toThrow(
      "Project@missing not found",
    );
  });
});

describe("Project.create", () => {
  test("delegates to the behavior and returns a reference to the new project", async () => {
    project.create.mockResolvedValue({ id: "project-new" });

    const created = await Project.create("server-1", "My project");

    expect(project.create).toHaveBeenCalledWith("server-1", "My project");
    expect(created).toBeInstanceOf(Project);
    expect(created.id).toBe("project-new");
  });
});

describe("mutating operations", () => {
  test("updateDescription passes id and description to the behavior", async () => {
    project.updateDescription.mockResolvedValue(undefined);

    await Project.ofId("project-1").updateDescription("New description");

    expect(project.updateDescription).toHaveBeenCalledWith(
      "project-1",
      "New description",
    );
  });

  test("leave passes the id to the behavior", async () => {
    project.leave.mockResolvedValue(undefined);

    await Project.ofId("project-1").leave();

    expect(project.leave).toHaveBeenCalledWith("project-1");
  });

  test("delete passes the id to the behavior", async () => {
    project.delete.mockResolvedValue(undefined);

    await Project.ofId("project-1").delete();

    expect(project.delete).toHaveBeenCalledWith("project-1");
  });

  test("propagates behavior failures", async () => {
    project.delete.mockRejectedValue(new Error("forbidden"));

    await expect(Project.ofId("project-1").delete()).rejects.toThrow(
      "forbidden",
    );
  });
});

describe("getDefaultIngress", () => {
  /**
   * `getDefaultIngress` goes through the deprecated `listIngresses` ->
   * `Ingress.list({ projectId })` path, and `IngressListQuery.execute` spreads
   * the query before assigning `projectId: project?.id`. With no `project`
   * model in the query that resolves to `undefined` and overwrites the id, so
   * the ingress list is never scoped to this project — the returned "default"
   * ingress may belong to a different project entirely.
   */
  test("does not scope the ingress lookup to this project", async () => {
    ingress.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Project.ofId("project-1")
      .getDefaultIngress()
      .catch(() => undefined);

    expect(ingress.list).toHaveBeenCalledWith(
      expect.objectContaining({ projectId: undefined }),
    );
  });

  test("the ingresses property does apply the filter, unlike getDefaultIngress", async () => {
    ingress.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Project.ofId("project-1").ingresses.execute();

    expect(ingress.list).toHaveBeenCalledWith({ projectId: "project-1" });
  });

  test("returns the ingress flagged as default", async () => {
    ingress.list.mockResolvedValue({
      items: [ingressData(), ingressData({ id: "ingress-2", isDefault: true })],
      totalCount: 2,
    });

    const defaultIngress = await Project.ofId("project-1").getDefaultIngress();

    expect(defaultIngress).toBeInstanceOf(IngressListItem);
    expect(defaultIngress.id).toBe("ingress-2");
  });

  test("throws when no ingress is flagged as default", async () => {
    ingress.list.mockResolvedValue({
      items: [ingressData()],
      totalCount: 1,
    });

    await expect(Project.ofId("project-1").getDefaultIngress()).rejects.toThrow(
      ObjectNotFoundError,
    );
  });
});

describe("ProjectDetailed", () => {
  test("exposes the raw data", () => {
    const detailed = new ProjectDetailed(projectData());

    expect(detailed.data.description).toBe("My project");
    expect(detailed.id).toBe("project-1");
  });

  test("resolves the customer reference", () => {
    const detailed = new ProjectDetailed(projectData());

    expect(detailed.customer).toBeInstanceOf(Customer);
    expect(detailed.customer.id).toBe("customer-1");
  });

  test("resolves the server reference", () => {
    const detailed = new ProjectDetailed(projectData());

    expect(detailed.server).toBeInstanceOf(Server);
    expect(detailed.server?.id).toBe("server-1");
  });

  test("leaves the server undefined for a project without one", () => {
    const withoutServer = projectData();
    delete (withoutServer as { serverId?: string }).serverId;

    const detailed = new ProjectDetailed(withoutServer);

    expect(detailed.server).toBeUndefined();
  });
});

describe("ProjectListQuery", () => {
  test("passes the query through to the behavior", async () => {
    project.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Project.query({ limit: 5 }).execute();

    expect(project.list).toHaveBeenCalledWith({
      limit: 5,
      serverId: undefined,
      customerId: undefined,
    });
  });

  test("maps server and customer references to ids", async () => {
    project.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Project.query({
      server: Server.ofId("server-1"),
      customer: Customer.ofId("customer-1"),
    }).execute();

    expect(project.list).toHaveBeenCalledWith({
      serverId: "server-1",
      customerId: "customer-1",
    });
  });

  test("wraps the response into a ProjectList of ProjectListItems", async () => {
    project.list.mockResolvedValue({ items: [listItemData()], totalCount: 3 });

    const result = await Project.query().execute();

    expect(result).toBeInstanceOf(ProjectList);
    expect(result.totalCount).toBe(3);
    expect(result.items[0]).toBeInstanceOf(ProjectListItem);
    expect(result.items[0].id).toBe("project-1");
  });

  test("refine merges the new query on top of the existing one", async () => {
    project.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Project.query({ limit: 5 }).refine({ limit: 10 }).execute();

    expect(project.list).toHaveBeenCalledWith({
      limit: 10,
      serverId: undefined,
      customerId: undefined,
    });
  });

  test("refine returns a new query rather than mutating the old one", () => {
    const query = Project.query({ limit: 5 });

    const refined = query.refine({ limit: 10 });

    expect(refined).not.toBe(query);
    expect(refined).toBeInstanceOf(ProjectListQuery);
    expect(refined.queryId).not.toBe(query.queryId);
  });

  test("getTotalCount asks for a single item and reports the reported total", async () => {
    project.list.mockResolvedValue({ items: [listItemData()], totalCount: 42 });

    await expect(Project.query().getTotalCount()).resolves.toBe(42);
    expect(project.list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: 1 }),
    );
  });

  test("findOneAndOnly returns the single match", async () => {
    project.list.mockResolvedValue({ items: [listItemData()], totalCount: 1 });

    const found = await Project.query().findOneAndOnly();

    expect(found?.id).toBe("project-1");
    expect(project.list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: 2 }),
    );
  });

  test("findOneAndOnly returns undefined when the total count is not one", async () => {
    project.list.mockResolvedValue({
      items: [listItemData(), listItemData({ id: "project-2" })],
      totalCount: 2,
    });

    await expect(Project.query().findOneAndOnly()).resolves.toBeUndefined();
  });

  test("findOneAndOnly returns undefined when there is no match", async () => {
    project.list.mockResolvedValue({ items: [], totalCount: 0 });

    await expect(Project.query().findOneAndOnly()).resolves.toBeUndefined();
  });
});

describe("Project.list", () => {
  test("returns just the items of the query result", async () => {
    project.list.mockResolvedValue({ items: [listItemData()], totalCount: 1 });

    const items = await Project.list();

    expect(items).toHaveLength(1);
    expect(items[0]).toBeInstanceOf(ProjectListItem);
  });
});
