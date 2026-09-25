import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildAppVersionData } from "../../testing/builders/buildAppVersionData.js";
import { ObjectNotFoundError } from "../../errors/ObjectNotFoundError.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { App } from "../index.js";
import {
  AppVersionListQuery,
  AppVersionDetailed,
  AppVersionListItem,
  AppVersionList,
  AppVersion,
} from "./AppVersion.js";

afterEach(resetBehaviors);

describe("AppVersion", () => {
  const app = App.ofId("app-1");

  test("find delegates and maps missing versions", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildAppVersionData({ id: "v1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ appVersion: { find } });

    await expect(AppVersion.find("v1", app)).resolves.toBeInstanceOf(
      AppVersionDetailed,
    );
    await expect(AppVersion.find("missing", app)).resolves.toBeUndefined();
    expect(find).toHaveBeenNthCalledWith(1, "v1", "app-1");
  });

  test("get throws for a missing version", async () => {
    installBehaviors({
      appVersion: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(AppVersion.get("missing", app)).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon materialize a reference via the behavior", async () => {
    const find = vi.fn().mockResolvedValue(buildAppVersionData({ id: "v1" }));
    installBehaviors({ appVersion: { find } });
    const reference = AppVersion.ofId("v1", app);

    await expect(reference.findCommon()).resolves.toBeInstanceOf(
      AppVersionDetailed,
    );
    await expect(reference.getCommon()).resolves.toBeInstanceOf(
      AppVersionDetailed,
    );
    expect(find).toHaveBeenNthCalledWith(1, "v1", "app-1");
  });

  test("findCommon resolves undefined and getCommon throws when missing", async () => {
    installBehaviors({
      appVersion: { find: vi.fn().mockResolvedValue(undefined) },
    });
    const reference = AppVersion.ofId("missing", app);

    await expect(reference.findCommon()).resolves.toBeUndefined();
    await expect(reference.getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon are idempotent for materialized versions", async () => {
    const find = vi.fn();
    installBehaviors({ appVersion: { find } });
    const detailed = new AppVersionDetailed(buildAppVersionData({ id: "v1" }));
    const listItem = new AppVersionListItem(buildAppVersionData({ id: "v2" }));

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    await expect(listItem.findCommon()).resolves.toBe(listItem);
    await expect(listItem.getCommon()).resolves.toBe(listItem);
    expect(find).not.toHaveBeenCalled();
  });

  test("derives empty user-input collections when source data is absent", () => {
    const version = new AppVersionDetailed(buildAppVersionData());

    expect(version.installationUserInputs).toEqual([]);
    expect(version.installationUserInputSteps).toEqual([]);
    expect(version.systemSoftwareDependencies).toEqual([]);
    expect(version.backendPathTemplate).toBeUndefined();
    expect(version.defaultCronjobs).toBeUndefined();
  });

  test("query reverses behavior items", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        buildAppVersionData({ id: "v1" }),
        buildAppVersionData({ id: "v2" }),
      ],
    });
    installBehaviors({ appVersion: { list } });
    const query = AppVersion.query({ app: app });

    const result = await query.execute();

    expect(result).toBeInstanceOf(AppVersionList);
    expect(result).toBeInstanceOf(AppVersionListQuery);
    expect(result.items.map(({ id }) => id)).toEqual(["v2", "v1"]);
    expect(
      result.items.every((item) => item instanceof AppVersionListItem),
    ).toBe(true);
    expect(list).toHaveBeenCalledWith("app-1", {});
  });

  test("exposes version details and compares internal versions", () => {
    const detailed = new AppVersionDetailed(
      buildAppVersionData({ externalVersion: "6.4.0", recommended: true }),
    );
    const older = new AppVersionListItem(
      buildAppVersionData({ internalVersion: "1.0.0" }),
    );
    const newer = new AppVersionListItem(
      buildAppVersionData({ internalVersion: "2.0.0" }),
    );

    expect(detailed).toMatchObject({ recommended: true, version: "6.4.0" });
    expect(Array.isArray(detailed.systemSoftwareDependencies)).toBe(true);
    expect(older.compare(newer)).toBe(-1);
    expect(newer.compare(older)).toBe(1);
  });

  test("lists update candidates", async () => {
    const listUpdateCandidates = vi
      .fn()
      .mockResolvedValue([buildAppVersionData({ id: "v2" })]);
    installBehaviors({ appVersion: { listUpdateCandidates } });

    const result = await AppVersion.ofId("v1", app).listUpdateCandidates();

    expect(listUpdateCandidates).toHaveBeenCalledWith("app-1", "v1");
    expect(result[0]).toBeInstanceOf(AppVersionListItem);
  });

  test("preserves ghostmaker composition chains", () => {
    for (const version of [
      new AppVersionListItem(buildAppVersionData()),
      new AppVersionDetailed(buildAppVersionData()),
    ]) {
      expect(version).toBeInstanceOf(AppVersion);
      expect(version).toBeInstanceOf(ReferenceModel);
      expect(version.data).toBeDefined();
    }
  });
});
