import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

// Names any class by its JS name, so ObjectNotFoundError's type does not depend on the ghost registry.
vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { CronjobExecutionListQuery } from "../CronjobExecution/index.js";
import {
  buildCronjobListItemData,
  buildCronjobData,
} from "../../testing/builders/buildCronjobData.js";
import { AppInstallation } from "../../app/index.js";
import { Container } from "../../container/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";
import {
  CronjobDetailed,
  CronjobListItem,
  CronjobList,
  Cronjob,
} from "./Cronjob.js";

afterEach(resetBehaviors);

const project = Project.ofId("project-id");

describe("Cronjob reference + delegation", () => {
  test("find delegates to the cronjob behavior and returns a detailed cronjob", async () => {
    const find = vi.fn().mockResolvedValue(buildCronjobData({ id: "c-1" }));
    installBehaviors({ cronjob: { find } });

    const result = await Cronjob.find("c-1");

    expect(find).toHaveBeenCalledWith("c-1");
    expect(result).toBeInstanceOf(CronjobDetailed);
    expect(result?.id).toBe("c-1");
  });

  test("find maps a missing cronjob to undefined", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ cronjob: { find } });

    const result = await Cronjob.find("missing");

    expect(result).toBeUndefined();
  });

  test("get returns a detailed cronjob when found", async () => {
    const find = vi.fn().mockResolvedValue(buildCronjobData({ id: "c-2" }));
    installBehaviors({ cronjob: { find } });

    const result = await Cronjob.get("c-2");

    expect(result).toBeInstanceOf(CronjobDetailed);
    expect(result.id).toBe("c-2");
  });

  test("get throws ObjectNotFoundError when the cronjob is missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ cronjob: { find } });

    await expect(Cronjob.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findDetailed delegates with the reference id", async () => {
    const ref = Cronjob.ofId("c-3");
    const find = vi.fn().mockResolvedValue(buildCronjobData({ id: "c-3" }));
    installBehaviors({ cronjob: { find } });

    const result = await ref.findDetailed();

    expect(find).toHaveBeenCalledWith("c-3");
    expect(result?.id).toBe("c-3");
  });

  test("create delegates with the project id and returns a cronjob reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "created-1" });
    installBehaviors({ cronjob: { create } });

    const data = {
      interval: "*/5 * * * *",
      description: "new",
      timeout: 3600,
      active: true,
    };
    const result = await Cronjob.create(project, data);

    expect(create).toHaveBeenCalledWith("project-id", data);
    expect(result).toBeInstanceOf(Cronjob);
    expect(result.id).toBe("created-1");
  });

  test("getTimeZones returns the behavior value", async () => {
    const getTimeZones = vi.fn().mockResolvedValue(["Europe/Berlin", "UTC"]);
    installBehaviors({ cronjob: { getTimeZones } });

    const result = await Cronjob.getTimeZones();

    expect(result).toEqual(["Europe/Berlin", "UTC"]);
  });

  test("update, delete and trigger delegate with the reference id", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    const del = vi.fn().mockResolvedValue(undefined);
    const trigger = vi.fn().mockResolvedValue(undefined);
    installBehaviors({
      cronjob: { delete: del, trigger, update },
    });

    const ref = Cronjob.ofId("c-4");
    await ref.update({ description: "changed" });
    await ref.delete();
    await ref.trigger();

    expect(update).toHaveBeenCalledWith("c-4", { description: "changed" });
    expect(del).toHaveBeenCalledWith("c-4");
    expect(trigger).toHaveBeenCalledWith("c-4");
  });
});

describe("Cronjob data + derived getters", () => {
  test("copies simple fields through from the data", () => {
    const item = new CronjobListItem(
      buildCronjobListItemData({
        failedExecutionAlertThreshold: 3,
        timeZone: "Europe/Berlin",
        email: "ops@example.com",
        description: "backup",
        interval: "0 * * * *",
        active: false,
        timeout: 120,
      }),
    );

    expect(item.description).toBe("backup");
    expect(item.active).toBe(false);
    expect(item.interval).toBe("0 * * * *");
    expect(item.timeout).toBe(120);
    expect(item.email).toBe("ops@example.com");
    expect(item.timeZone).toBe("Europe/Berlin");
    expect(item.failedExecutionAlertThreshold).toBe(3);
    expect(item.project.id).toBe("project-id");
  });

  test("derives a url cronjob from a url destination", () => {
    const item = new CronjobListItem(
      buildCronjobListItemData({
        destination: { url: "https://example.com/hook" },
      }),
    );

    expect(item.targetType).toBe("app");
    expect(item.type).toBe("url");
    expect(item.url).toBe("https://example.com/hook");
    expect(item.command).toBeUndefined();
  });

  test("derives a command cronjob and remaps the legacy bash interpreter", () => {
    const item = new CronjobListItem(
      buildCronjobListItemData({
        destination: {
          interpreter: "/bin/bash",
          path: "/scripts/run.sh",
          parameters: "-x",
        },
      }),
    );

    expect(item.type).toBe("command");
    expect(item.command).toEqual({
      interpreter: "/usr/bin/bash",
      path: "/scripts/run.sh",
      parameters: "-x",
    });
    expect(item.url).toBeUndefined();
  });

  test("derives a container target with command text and linked container", () => {
    const item = new CronjobListItem(
      buildCronjobListItemData({
        target: {
          serviceShortId: "svc-1",
          command: "echo hi",
          stackId: "stack-1",
        },
      }),
    );

    expect(item.targetType).toBe("container");
    expect(item.commandText).toBe("echo hi");
    expect(item.linkedContainer).toBeInstanceOf(Container);
    expect(item.linkedContainer?.id).toBe("svc-1");
    expect(item.type).toBeUndefined();
  });

  test("links the app installation from the appId when no target is present", () => {
    const item = new CronjobListItem(
      buildCronjobListItemData({ appId: "app-42" }),
    );

    expect(item.targetType).toBe("app");
    expect(item.linkedAppInstallation).toBeDefined();
    expect(item.linkedAppInstallation?.id).toBe("app-42");
    expect(item.linkedContainer).toBeUndefined();
  });

  test("leaves target derivations undefined when no destination, target or app link is present", () => {
    const item = new CronjobListItem(
      buildCronjobListItemData({
        timeZone: undefined,
        appId: undefined,
        email: undefined,
      }),
    );

    expect(item.type).toBeUndefined();
    expect(item.url).toBeUndefined();
    expect(item.command).toBeUndefined();
    expect(item.commandText).toBeUndefined();
    expect(item.linkedAppInstallation).toBeUndefined();
    expect(item.linkedContainer).toBeUndefined();
    expect(item.latestExecution).toBeUndefined();
    expect(item.email).toBeUndefined();
    expect(item.timeZone).toBeUndefined();
  });

  test("exposes an executions list query and a latest execution", () => {
    const item = new CronjobListItem(
      buildCronjobListItemData({
        latestExecution: {
          cronjobId: "cronjob-id",
          status: "Complete",
          successful: true,
          id: "exec-9",
        },
      }),
    );

    expect(item.executions).toBeInstanceOf(CronjobExecutionListQuery);
    expect(item.latestExecution?.id).toBe("exec-9");
  });
});

describe("Cronjob list query pagination", () => {
  test("execute always includes service cronjobs by default", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildCronjobListItemData({ id: "c-1" })],
      totalCount: 1,
    });
    installBehaviors({ cronjob: { list } });

    const result = await Cronjob.query({ project: project }).execute();

    expect(result).toBeInstanceOf(CronjobList);
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toBeInstanceOf(CronjobListItem);
    expect(result.totalCount).toBe(1);
    expect(list).toHaveBeenCalledWith(
      "project-id",
      expect.objectContaining({ includeServiceCronjobs: true }),
    );
  });

  test("passes an explicit query through to the behavior", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ cronjob: { list } });

    await Cronjob.query({ project: project, limit: 5 }).execute();

    expect(list).toHaveBeenCalledWith(
      "project-id",
      expect.objectContaining({ limit: 5 }),
    );
  });

  test("getTotalCount refines the query to a single item", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 42, items: [] });
    installBehaviors({ cronjob: { list } });

    const total = await Cronjob.query({ project: project }).getTotalCount();

    expect(total).toBe(42);
    expect(list).toHaveBeenCalledWith(
      "project-id",
      expect.objectContaining({ limit: 1 }),
    );
  });

  test("refine merges the new query onto the existing one", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ cronjob: { list } });

    await Cronjob.query({ project: project, limit: 2 })
      .refine({ skip: 4 })
      .execute();

    expect(list).toHaveBeenCalledWith(
      "project-id",
      expect.objectContaining({ limit: 2, skip: 4 }),
    );
  });
});

describe("Cronjob.getInterpreters", () => {
  test("returns only the default interpreters when no matching software is installed", async () => {
    const getInstalledSystemSoftware = vi.fn().mockResolvedValue([]);
    installBehaviors({ appInstallation: { getInstalledSystemSoftware } });

    const appInstallation = AppInstallation.ofId("app-inst-id");

    const interpreters = await Cronjob.getInterpreters(appInstallation);

    expect(getInstalledSystemSoftware).toHaveBeenCalledWith("app-inst-id", {
      tagFilter: "interpreter",
    });
    expect(interpreters.map((i) => i.name)).toEqual(["Bash"]);
  });

  test("adds an additional interpreter when the matching software is installed", async () => {
    const getInstalledSystemSoftware = vi
      .fn()
      .mockResolvedValue([{ tags: ["interpreter"], name: "php", id: "s-1" }]);
    installBehaviors({ appInstallation: { getInstalledSystemSoftware } });

    const appInstallation = AppInstallation.ofId("app-inst-id");

    const interpreters = await Cronjob.getInterpreters(appInstallation);
    const names = interpreters.map((i) => i.name);

    expect(names).toContain("Bash");
    expect(names).toContain("PHP");
    expect(names).not.toContain("Python");
  });
});

describe("Cronjob common variant + idempotency", () => {
  test("findCommon on a reference delegates to findDetailed and returns the common variant", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildCronjobData({ id: "c-common-1" }));
    installBehaviors({ cronjob: { find } });

    const result = await Cronjob.ofId("c-common-1").findCommon();

    expect(find).toHaveBeenCalledWith("c-common-1");
    expect(result).toBeInstanceOf(CronjobDetailed);
    expect(result?.id).toBe("c-common-1");
  });

  test("findCommon on a reference maps a missing cronjob to undefined", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ cronjob: { find } });

    const result = await Cronjob.ofId("missing").findCommon();

    expect(result).toBeUndefined();
  });

  test("getCommon on a reference returns the common variant when found", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildCronjobData({ id: "c-common-2" }));
    installBehaviors({ cronjob: { find } });

    const result = await Cronjob.ofId("c-common-2").getCommon();

    expect(result).toBeInstanceOf(CronjobDetailed);
    expect(result.id).toBe("c-common-2");
  });

  test("getCommon on a reference throws ObjectNotFoundError when missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ cronjob: { find } });

    await expect(Cronjob.ofId("missing").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon on an already materialized list item returns itself without a behavior call", async () => {
    const find = vi.fn();
    installBehaviors({ cronjob: { find } });

    const item = new CronjobListItem(
      buildCronjobListItemData({ id: "c-common-3" }),
    );
    const result = await item.findCommon();

    expect(result).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on an already detailed cronjob returns itself without a behavior call", async () => {
    const find = vi.fn();
    installBehaviors({ cronjob: { find } });

    const detailed = new CronjobDetailed(
      buildCronjobData({ id: "c-common-4" }),
    );
    const result = await detailed.getCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });
});
