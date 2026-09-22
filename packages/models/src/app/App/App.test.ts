import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { ObjectNotFoundError } from "../../errors/ObjectNotFoundError";
import { buildAppData } from "../../testing/builders/buildAppData";
import { ReferenceModel } from "../../base";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import {
  AppListQuery,
  AppDetailed,
  AppListItem,
  AppList,
  App,
} from "./App";

afterEach(resetBehaviors);

describe("App", () => {
  test("find and get delegate and materialize detailed apps", async () => {
    const find = vi.fn().mockResolvedValue(buildAppData({ id: "a-1" }));
    installBehaviors({ app: { find } });

    await expect(App.find("a-1")).resolves.toEqual(
      expect.objectContaining({ id: "a-1" }),
    );
    await expect(App.get("a-1")).resolves.toBeInstanceOf(AppDetailed);
    expect(find).toHaveBeenCalledWith("a-1");
  });

  test("find returns undefined and get throws when missing", async () => {
    installBehaviors({ app: { find: vi.fn().mockResolvedValue(undefined) } });

    await expect(App.find("missing")).resolves.toBeUndefined();
    await expect(App.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon materialize a reference via the behavior", async () => {
    const find = vi.fn().mockResolvedValue(buildAppData({ id: "a-1" }));
    installBehaviors({ app: { find } });
    const reference = App.ofId("a-1");

    await expect(reference.findCommon()).resolves.toBeInstanceOf(AppDetailed);
    await expect(reference.getCommon()).resolves.toBeInstanceOf(AppDetailed);
    expect(find).toHaveBeenCalledWith("a-1");
  });

  test("findCommon resolves undefined and getCommon throws when missing", async () => {
    installBehaviors({ app: { find: vi.fn().mockResolvedValue(undefined) } });
    const reference = App.ofId("missing");

    await expect(reference.findCommon()).resolves.toBeUndefined();
    await expect(reference.getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon are idempotent for materialized apps", async () => {
    const find = vi.fn();
    installBehaviors({ app: { find } });
    const detailed = new AppDetailed(buildAppData({ id: "a-1" }));
    const listItem = new AppListItem(buildAppData({ id: "a-2" }));

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    await expect(listItem.findCommon()).resolves.toBe(listItem);
    await expect(listItem.getCommon()).resolves.toBe(listItem);
    expect(find).not.toHaveBeenCalled();
  });

  test("references find their detailed model", async () => {
    const find = vi.fn().mockResolvedValue(buildAppData({ id: "a-1" }));
    installBehaviors({ app: { find } });
    const app = App.ofId("a-1");

    expect(app).toBeInstanceOf(App);
    await expect(app.findDetailed()).resolves.toBeInstanceOf(AppDetailed);
    expect(find).toHaveBeenCalledWith("a-1");
  });

  test("exposes app classification and tags", () => {
    const node = new AppListItem(
      buildAppData({ tags: ["runtime"], name: "Node.js" }),
    );
    const php = new AppListItem(buildAppData({ name: "PHP" }));
    const wordpress = new AppListItem(buildAppData({ name: "WordPress" }));

    expect(node).toMatchObject({
      isCustomApp: true,
      tags: ["runtime"],
      isNodeApp: true,
    });
    expect(php).toMatchObject({ isCustomApp: true, isNodeApp: false });
    expect(wordpress).toMatchObject({ isCustomApp: false, isPopular: true });
  });

  test("query delegates and preserves pagination", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildAppData({ id: "a-1" })],
      totalCount: 1,
    });
    installBehaviors({ app: { list } });
    const query = App.query();

    const result = await query.execute();

    expect(result).toBeInstanceOf(AppList);
    expect(result).toBeInstanceOf(AppListQuery);
    expect(result.items[0]).toBeInstanceOf(AppListItem);
    expect(result.totalCount).toBe(1);
    expect(list).toHaveBeenCalledWith({});
  });

  test("preserves ghostmaker composition chains", () => {
    for (const app of [
      new AppListItem(buildAppData()),
      new AppDetailed(buildAppData()),
    ]) {
      expect(app).toBeInstanceOf(App);
      expect(app).toBeInstanceOf(ReferenceModel);
      // ADR-0004: data is a capability mixin, not a nominal base.
      expect(app.data).toBeDefined();
    }
  });
});
