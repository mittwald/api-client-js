import { inMemProjectBehaviors } from "./inMem.js";
import { ProjectData } from "../types.js";

const projectData = (overrides: Partial<ProjectData> = {}): ProjectData =>
  ({
    id: "project-1",
    description: "My project",
    customerId: "customer-1",
    ...overrides,
  }) as unknown as ProjectData;

const storeWith = (...projects: ProjectData[]): Map<string, ProjectData> =>
  new Map(projects.map((p) => [p.id, p]));

describe("find", () => {
  test("returns the stored project", async () => {
    const behaviors = inMemProjectBehaviors(storeWith(projectData()));

    await expect(behaviors.find("project-1")).resolves.toHaveProperty(
      "description",
      "My project",
    );
  });

  test("returns undefined for an unknown id", async () => {
    const behaviors = inMemProjectBehaviors(storeWith(projectData()));

    await expect(behaviors.find("missing")).resolves.toBeUndefined();
  });
});

describe("list", () => {
  test("returns every stored project with a matching total count", async () => {
    const behaviors = inMemProjectBehaviors(
      storeWith(projectData(), projectData({ id: "project-2" })),
    );

    const { items, totalCount } = await behaviors.list();

    expect(items).toHaveLength(2);
    expect(totalCount).toBe(2);
  });

  test("returns an empty result for an empty store", async () => {
    const behaviors = inMemProjectBehaviors(new Map());

    await expect(behaviors.list()).resolves.toEqual({
      items: [],
      totalCount: 0,
    });
  });

  test("derives the customerMeta that list items carry", async () => {
    const behaviors = inMemProjectBehaviors(storeWith(projectData()));

    const { items } = await behaviors.list();

    expect(items[0].customerMeta).toEqual({ id: "customer-1" });
  });

  test("defaults deletionRequested to false when the project omits it", async () => {
    const behaviors = inMemProjectBehaviors(storeWith(projectData()));

    const { items } = await behaviors.list();

    expect(items[0].deletionRequested).toBe(false);
  });

  test("keeps an explicit deletionRequested flag", async () => {
    const behaviors = inMemProjectBehaviors(
      storeWith(projectData({ deletionRequested: true })),
    );

    const { items } = await behaviors.list();

    expect(items[0].deletionRequested).toBe(true);
  });

  test("reflects later changes to the store", async () => {
    const store = storeWith(projectData());
    const behaviors = inMemProjectBehaviors(store);

    store.set("project-2", projectData({ id: "project-2" }));

    await expect(behaviors.list()).resolves.toHaveProperty("totalCount", 2);
  });
});

describe("unimplemented operations", () => {
  const behaviors = inMemProjectBehaviors(new Map());

  test.each([
    ["create", () => behaviors.create("server-1", "My project")],
    ["leave", () => behaviors.leave("project-1")],
    ["delete", () => behaviors.delete("project-1")],
    [
      "updateDescription",
      () => behaviors.updateDescription("project-1", "New description"),
    ],
  ])("%s rejects as not implemented", async (_name, call) => {
    await expect(call()).rejects.toThrow("Not implemented");
  });
});
