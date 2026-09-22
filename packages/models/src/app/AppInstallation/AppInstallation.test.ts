import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildAppInstallationData } from "../../testing/builders/buildAppInstallationData.js";
import { ObjectNotFoundError } from "../../errors/ObjectNotFoundError.js";
import { AggregateMetaData } from "../../common/index.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";
import { App } from "../App/index.js";
import {
  AppInstallationListQuery,
  AppInstallationDetailed,
  AppInstallationListItem,
  AppInstallationList,
  AppInstallation,
} from "./AppInstallation.js";

afterEach(resetBehaviors);

describe("AppInstallation", () => {
  test("create delegates and returns a reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "ai-1" });
    installBehaviors({ appInstallation: { create } });
    const data = {
      updatePolicy: "none" as const,
      appVersionId: "v-1",
      description: "site",
      userInputs: [],
    };

    const result = await AppInstallation.create(Project.ofId("p-1"), data);

    expect(create).toHaveBeenCalledWith("p-1", data);
    expect(result).toBeInstanceOf(AppInstallation);
    expect(result.id).toBe("ai-1");
  });

  test("find maps found and missing installations", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildAppInstallationData({ id: "ai-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ appInstallation: { find } });

    await expect(AppInstallation.find("ai-1")).resolves.toBeInstanceOf(
      AppInstallationDetailed,
    );
    await expect(AppInstallation.find("missing")).resolves.toBeUndefined();
  });

  test("findCommon and getCommon materialize a reference via the behavior", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildAppInstallationData({ id: "ai-1" }));
    installBehaviors({ appInstallation: { find } });
    const reference = AppInstallation.ofId("ai-1");

    await expect(reference.findCommon()).resolves.toBeInstanceOf(
      AppInstallationDetailed,
    );
    await expect(reference.getCommon()).resolves.toBeInstanceOf(
      AppInstallationDetailed,
    );
    expect(find).toHaveBeenCalledWith("ai-1");
  });

  test("findCommon resolves undefined and getCommon throws when missing", async () => {
    installBehaviors({
      appInstallation: { find: vi.fn().mockResolvedValue(undefined) },
    });
    const reference = AppInstallation.ofId("missing");

    await expect(reference.findCommon()).resolves.toBeUndefined();
    await expect(reference.getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon are idempotent for materialized installations", async () => {
    const find = vi.fn();
    installBehaviors({ appInstallation: { find } });
    const detailed = new AppInstallationDetailed(
      buildAppInstallationData({ id: "ai-1" }),
    );
    const listItem = new AppInstallationListItem(
      buildAppInstallationData({ id: "ai-2" }),
    );

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    await expect(listItem.findCommon()).resolves.toBe(listItem);
    await expect(listItem.getCommon()).resolves.toBe(listItem);
    expect(find).not.toHaveBeenCalled();
  });

  test("pins the aggregate metadata identity and reference", () => {
    expect(AppInstallation.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(AppInstallation.aggregateMetaData).toMatchObject({
      aggregate: "appinstallation",
      domain: "app",
    });
    expect(AppInstallation.findAggregate("ai-1")).toEqual({
      aggregate: "appinstallation",
      domain: "app",
      id: "ai-1",
    });
    expect(AppInstallation.findAggregate()).toBeUndefined();
  });

  test("derives empty and absent installation fields when source data is missing", () => {
    const installation = new AppInstallationDetailed(
      buildAppInstallationData(),
    );

    expect(installation.installedSystemSoftware).toEqual([]);
    expect(installation.linkedDatabases).toEqual([]);
    expect(installation.userInputs).toEqual([]);
    expect(installation.host).toBeUndefined();
    expect(installation.previousAppVersion).toBeUndefined();
    expect(installation.primaryDatabase).toBeUndefined();
    expect(installation.httpPort).toBeUndefined();
    expect(installation.entryPointUserInput).toBeUndefined();
    expect(installation.lastVersionChangedAt).toBeUndefined();
    expect(installation.lastVersionChangedBy).toBeUndefined();
  });

  test("mutations delegate with correct arguments", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    const deleteBehavior = vi.fn().mockResolvedValue(undefined);
    const copy = vi.fn().mockResolvedValue(undefined);
    const unlinkDatabase = vi.fn().mockResolvedValue(undefined);
    installBehaviors({
      appInstallation: {
        delete: deleteBehavior,
        unlinkDatabase,
        update,
        copy,
      },
    });
    const installation = AppInstallation.ofId("ai-1");

    await installation.update({ description: "x" });
    await installation.delete();
    await installation.copy({ targetProjectId: "p-2", description: "copy" });
    await installation.unlinkDatabase("db-1");

    expect(update).toHaveBeenCalledWith("ai-1", { description: "x" });
    expect(deleteBehavior).toHaveBeenCalledWith("ai-1");
    expect(copy).toHaveBeenCalledWith("ai-1", {
      targetProjectId: "p-2",
      description: "copy",
    });
    expect(unlinkDatabase).toHaveBeenCalledWith("ai-1", "db-1");
  });

  test("exposes derived installation details", () => {
    const installing = new AppInstallationDetailed(
      buildAppInstallationData({
        phase: "installing",
        appName: "Node.js",
        appId: "app-x",
        id: "ai-1",
      }),
    );
    const ready = new AppInstallationDetailed(
      buildAppInstallationData({ phase: "ready" }),
    );

    expect(installing).toMatchObject({
      execCommand: "app exec ai-1",
      primaryDatabase: undefined,
      description: "my site",
      installationPath: "/",
      phase: "installing",
      shortId: "abc123",
      isNodeApp: true,
      isBusy: true,
    });
    expect(installing.app).toBeInstanceOf(App);
    expect(installing.app.id).toBe("app-x");
    expect(ready.isBusy).toBe(false);
  });

  test("queries by project and preserves pagination", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildAppInstallationData({ id: "ai-1" })],
      totalCount: 1,
    });
    installBehaviors({ appInstallation: { list } });

    const result = await AppInstallation.query({
      project: Project.ofId("p-1"),
    }).execute();

    expect(result).toBeInstanceOf(AppInstallationList);
    expect(result.items[0]).toBeInstanceOf(AppInstallationListItem);
    expect(result.totalCount).toBe(1);
    expect(list).toHaveBeenCalledWith("p-1", {});
  });

  test("queries all installations without a project", async () => {
    const listForUser = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ appInstallation: { listForUser } });
    const query = AppInstallation.query();

    await query.execute();

    expect(listForUser).toHaveBeenCalledWith({});
  });

  test("preserves ghostmaker composition chains", () => {
    const detailed = new AppInstallationDetailed(
      buildAppInstallationData(),
    );

    expect(detailed).toBeInstanceOf(AppInstallation);
    expect(detailed).toBeInstanceOf(ReferenceModel);
    expect(detailed.data).toBeDefined();
    expect(new AppInstallationList({}, [], 0)).toBeInstanceOf(
      AppInstallationListQuery,
    );
  });
});
