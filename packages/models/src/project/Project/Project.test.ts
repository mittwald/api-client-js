import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildProjectListItemData } from "../../testing/builders/buildProjectListItemData.js";
import { buildProjectData } from "../../testing/builders/buildProjectData.js";
import { installBehaviors, resetBehaviors } from "../../testing/index.js";
import { AggregateMetaData } from "../../common/index.js";
import {
  ProjectDetailed,
  ProjectListItem,
  ProjectList,
  Project,
} from "../internal.js";

afterEach(resetBehaviors);

describe("Project references and delegation", () => {
  test("find delegates and materializes a detailed project", async () => {
    const find = vi.fn().mockResolvedValue(buildProjectData({ id: "p-1" }));
    installBehaviors({ project: { find } });

    const result = await Project.find("p-1");

    expect(find).toHaveBeenCalledWith("p-1", undefined);
    expect(result).toBeInstanceOf(ProjectDetailed);
    expect(result?.id).toBe("p-1");
  });

  test("find maps a missing project to undefined", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ project: { find } });

    await expect(Project.find("missing")).resolves.toBeUndefined();
  });

  test("get returns a detailed project", async () => {
    const find = vi.fn().mockResolvedValue(buildProjectData({ id: "p-2" }));
    installBehaviors({ project: { find } });

    const result = await Project.get("p-2");

    expect(result).toBeInstanceOf(ProjectDetailed);
    expect(result.id).toBe("p-2");
  });

  test("get throws when the project is missing", async () => {
    installBehaviors({
      project: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Project.get("x")).rejects.toThrow();
  });

  test("create delegates and returns a project reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "p-created" });
    installBehaviors({ project: { create } });

    const result = await Project.create({
      description: "created project",
      serverId: "s-1",
    });

    expect(create).toHaveBeenCalledWith("s-1", "created project");
    expect(result).toBeInstanceOf(Project);
    expect(result.id).toBe("p-created");
  });

  test("updateDescription and delete delegate with the project id", async () => {
    const updateDescription = vi.fn().mockResolvedValue(undefined);
    const deleteProject = vi.fn().mockResolvedValue(undefined);
    installBehaviors({
      project: { delete: deleteProject, updateDescription },
    });
    const project = Project.ofId("p-1");

    await project.updateDescription("new description");
    await project.delete();

    expect(updateDescription).toHaveBeenCalledWith("p-1", "new description");
    expect(deleteProject).toHaveBeenCalledWith("p-1");
  });
});

describe("Project common resolution and idempotency", () => {
  test("findCommon delegates from a reference and returns the common variant", async () => {
    const find = vi.fn().mockResolvedValue(buildProjectData({ id: "p-1" }));
    installBehaviors({ project: { find } });

    const result = await Project.ofId("p-1").findCommon();

    expect(find).toHaveBeenCalledWith("p-1", undefined);
    expect(result).toBeInstanceOf(ProjectDetailed);
    expect(result?.id).toBe("p-1");
  });

  test("findCommon maps a missing reference to undefined", async () => {
    installBehaviors({
      project: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Project.ofId("missing").findCommon()).resolves.toBeUndefined();
  });

  test("getCommon resolves the common variant and throws when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildProjectData({ id: "p-2" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ project: { find } });

    await expect(Project.ofId("p-2").getCommon()).resolves.toBeInstanceOf(
      ProjectDetailed,
    );
    await expect(Project.ofId("missing").getCommon()).rejects.toThrow();
  });

  test("findCommon and getCommon are idempotent on a materialized project", async () => {
    const find = vi.fn();
    installBehaviors({ project: { find } });
    const item = new ProjectListItem(buildProjectListItemData({ id: "p-1" }));

    expect(await item.findCommon()).toBe(item);
    expect(await item.getCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("Project aggregate metadata", () => {
  test("aggregateMetaData pins the cache identity", () => {
    expect(Project.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Project.aggregateMetaData.domain).toBe("project");
    expect(Project.aggregateMetaData.aggregate).toBe("project");
  });

  test("findAggregate combines an id with the aggregate identity", () => {
    expect(Project.findAggregate()).toBeUndefined();
    expect(Project.findAggregate("p-1")).toEqual({
      aggregate: "project",
      domain: "project",
      id: "p-1",
    });
  });
});

describe("Project data", () => {
  test("derives ProSpace Lite state and omits a server reference", () => {
    const project = new ProjectListItem(
      buildProjectListItemData({
        projectHostingId: "hosting-id",
        serverId: undefined,
      }),
    );

    expect(project.isProSpaceLite).toBe(true);
    expect(project.server).toBeUndefined();
    expect(new ProjectListItem(buildProjectListItemData()).isProSpaceLite).toBe(
      false,
    );
  });

  test("derives disabled, suspended, and ordering state", () => {
    const suspended = new ProjectListItem(
      buildProjectListItemData({ disableReason: "suspended" }),
    );
    const active = new ProjectListItem(buildProjectListItemData());

    expect(suspended.isDisabled).toBe(true);
    expect(suspended.isSuspended).toBe(true);
    expect(suspended.isAllowedToPlaceOrders).toBe(false);
    expect(active.isDisabled).toBe(false);
    expect(active.isSuspended).toBe(false);
    expect(active.isAllowedToPlaceOrders).toBe(true);
  });

  test("exposes container access and a parsed creation date", () => {
    const project = new ProjectListItem(
      buildProjectListItemData({ supportedFeatures: ["container"] }),
    );

    expect(project.hasContainerAccess).toBe(true);
    expect(project.createdAt).toBeInstanceOf(DateTime);
    expect(project.createdAt.isValid).toBe(true);
  });

  test("omits optional derived values when the source data is absent", () => {
    const project = new ProjectListItem(
      buildProjectListItemData({ supportedFeatures: undefined }),
    );

    expect(project.avatar).toBeUndefined();
    expect(project.disabledAt).toBeUndefined();
    expect(project.disabledReason).toBeUndefined();
    expect(project.features).toBeUndefined();
    expect(project.hasContainerAccess).toBeUndefined();
  });

  test("derives the hostname and base directories for detailed projects", () => {
    const project = new ProjectDetailed(
      buildProjectData({
        directories: {
          Logs: "/home/custom/logs",
          Web: "/home/custom/html",
          Home: "/home/custom",
        },
        clusterDomain: "example.test",
        clusterID: "cluster-2",
      }),
    );

    expect(project.hostname).toBe("ssh.cluster-2.example.test");
    expect(project.getBaseDirectory("Home")).toBe("/home/custom");
    expect(project.getBaseDirectory()).toBe("");
  });
});

describe("Project list query", () => {
  test("materializes the behavior result", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildProjectListItemData({ id: "p-1" })],
      totalCount: 1,
    });
    installBehaviors({ project: { list } });

    const result = await Project.query().execute();

    expect(result).toBeInstanceOf(ProjectList);
    expect(result.items[0]).toBeInstanceOf(ProjectListItem);
    expect(result.items[0].id).toBe("p-1");
    expect(result.totalCount).toBe(1);
    expect(list).toHaveBeenCalledTimes(1);
  });

  test("passes through an explicit limit", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ project: { list } });

    await Project.query({ limit: 5 }).execute();

    expect(list).toHaveBeenCalledWith(expect.objectContaining({ limit: 5 }));
  });

  test("refine merges query values", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ project: { list } });

    await Project.query({ limit: 5, page: 2 }).refine({ limit: 10 }).execute();

    expect(list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: 10, page: 2 }),
    );
  });
});
