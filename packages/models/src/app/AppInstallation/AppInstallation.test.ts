import { jest } from "@jest/globals";
import { config } from "../../config/config.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  AppInstallation,
  AppInstallationDetailed,
  AppInstallationList,
  AppInstallationListItem,
  AppInstallationListQuery,
} from "./AppInstallation.js";
import { AppInstallationBehaviors } from "./behaviors/types.js";
import { AppInstallationData, AppInstallationListItemData } from "./types.js";
import { Project } from "../../project/index.js";

const appInstallationData = (
  overrides: Partial<AppInstallationData> = {},
): AppInstallationData =>
  ({
    id: "install-1",
    appId: "app-1",
    description: "My app",
    ...overrides,
  }) as unknown as AppInstallationData;

const listItemData = (
  overrides: Partial<AppInstallationData> = {},
): AppInstallationListItemData =>
  appInstallationData(overrides) as unknown as AppInstallationListItemData;

const appInstallation = {
  find: jest.fn<AppInstallationBehaviors["find"]>(),
  list: jest.fn<AppInstallationBehaviors["list"]>(),
};

const project = Project.ofId("project-1");

beforeEach(() => {
  Object.values(appInstallation).forEach((mock) => mock.mockReset());
  config.behaviors.appInstallation = appInstallation;
});

describe("AppInstallation reference", () => {
  test("ofId keeps the id", () => {
    expect(AppInstallation.ofId("install-1").id).toBe("install-1");
  });

  test("describes itself with class name and id", () => {
    expect(AppInstallation.ofId("install-1").describe()).toBe(
      "AppInstallation@install-1",
    );
  });
});

describe("AppInstallation.find", () => {
  test("wraps the found data in an AppInstallationDetailed", async () => {
    appInstallation.find.mockResolvedValue(appInstallationData());

    const found = await AppInstallation.find("install-1");

    expect(appInstallation.find).toHaveBeenCalledWith("install-1");
    expect(found).toBeInstanceOf(AppInstallationDetailed);
    expect(found?.id).toBe("install-1");
  });

  test("returns undefined when the behavior finds nothing", async () => {
    appInstallation.find.mockResolvedValue(undefined);

    await expect(AppInstallation.find("missing")).resolves.toBeUndefined();
  });
});

describe("AppInstallation.get", () => {
  test("returns the app installation when it exists", async () => {
    appInstallation.find.mockResolvedValue(appInstallationData());

    await expect(AppInstallation.get("install-1")).resolves.toBeInstanceOf(
      AppInstallationDetailed,
    );
  });

  test("throws a named ObjectNotFoundError when it does not exist", async () => {
    appInstallation.find.mockResolvedValue(undefined);

    await expect(AppInstallation.get("missing")).rejects.toThrow(
      ObjectNotFoundError,
    );
    await expect(AppInstallation.get("missing")).rejects.toThrow(
      "AppInstallation@missing not found",
    );
  });
});

describe("AppInstallationListQuery", () => {
  test("passes the project id as its own argument", async () => {
    appInstallation.list.mockResolvedValue({ items: [], totalCount: 0 });

    await new AppInstallationListQuery(project).execute();

    expect(appInstallation.list).toHaveBeenCalledWith("project-1", {
      limit: config.defaultPaginationLimit,
    });
  });

  test("lets an explicit limit win over the default", async () => {
    appInstallation.list.mockResolvedValue({ items: [], totalCount: 0 });

    await new AppInstallationListQuery(project, { limit: 5 }).execute();

    expect(appInstallation.list).toHaveBeenCalledWith("project-1", {
      limit: 5,
    });
  });

  test("exposes the project it is scoped to", () => {
    expect(new AppInstallationListQuery(project).project).toBe(project);
  });

  test("includes the project id in the query id", () => {
    const forProjectOne = new AppInstallationListQuery(Project.ofId("p-1"));
    const forProjectTwo = new AppInstallationListQuery(Project.ofId("p-2"));

    expect(forProjectOne.queryId).toContain("p-1");
    expect(forProjectOne.queryId).not.toBe(forProjectTwo.queryId);
  });

  test("wraps the response into an AppInstallationList", async () => {
    appInstallation.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 3,
    });

    const result = await new AppInstallationListQuery(project).execute();

    expect(result).toBeInstanceOf(AppInstallationList);
    expect(result.totalCount).toBe(3);
    expect(result.items[0]).toBeInstanceOf(AppInstallationListItem);
    expect(result.items[0].id).toBe("install-1");
  });

  test("refine keeps the project and merges the query", async () => {
    appInstallation.list.mockResolvedValue({ items: [], totalCount: 0 });

    const refined = new AppInstallationListQuery(project, {
      limit: 5,
    }).refine({ limit: 10 });

    expect(refined.project).toBe(project);
    await refined.execute();
    expect(appInstallation.list).toHaveBeenCalledWith("project-1", {
      limit: 10,
    });
  });

  test("refine returns a new query rather than mutating the old one", () => {
    const query = new AppInstallationListQuery(project, { limit: 5 });

    const refined = query.refine({ limit: 10 });

    expect(refined).not.toBe(query);
    expect(refined.queryId).not.toBe(query.queryId);
  });

  test("getTotalCount asks for a single item and reports the reported total", async () => {
    appInstallation.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 42,
    });

    await expect(
      new AppInstallationListQuery(project).getTotalCount(),
    ).resolves.toBe(42);
    expect(appInstallation.list).toHaveBeenCalledWith("project-1", {
      limit: 1,
    });
  });

  test("findOneAndOnly returns the single match", async () => {
    appInstallation.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 1,
    });

    const found = await new AppInstallationListQuery(project).findOneAndOnly();

    expect(found?.id).toBe("install-1");
    expect(appInstallation.list).toHaveBeenCalledWith("project-1", {
      limit: 2,
    });
  });

  test("findOneAndOnly returns undefined when the total count is not one", async () => {
    appInstallation.list.mockResolvedValue({
      items: [listItemData(), listItemData({ id: "install-2" })],
      totalCount: 2,
    });

    await expect(
      new AppInstallationListQuery(project).findOneAndOnly(),
    ).resolves.toBeUndefined();
  });
});

describe("AppInstallation.list", () => {
  test("scopes the list to the given project", async () => {
    appInstallation.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 1,
    });

    const items = await AppInstallation.list("project-1");

    expect(appInstallation.list).toHaveBeenCalledWith(
      "project-1",
      expect.anything(),
    );
    expect(items).toHaveLength(1);
    expect(items[0]).toBeInstanceOf(AppInstallationListItem);
  });
});
