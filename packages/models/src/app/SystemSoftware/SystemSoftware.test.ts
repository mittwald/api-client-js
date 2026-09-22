import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { ObjectNotFoundError } from "../../errors/ObjectNotFoundError.js";
import {
  buildSystemSoftwareListItemData,
  buildSystemSoftwareData,
} from "../../testing/builders/buildSystemSoftwareData.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import {
  SystemSoftwareListQuery,
  SystemSoftwareDetailed,
  SystemSoftwareListItem,
  SystemSoftwareList,
  SystemSoftware,
} from "./SystemSoftware.js";

afterEach(resetBehaviors);

describe("SystemSoftware reference and delegation", () => {
  test("find delegates by id and returns a detailed model", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildSystemSoftwareData({ id: "ss-1" }));
    installBehaviors({ systemSoftware: { find } });

    const result = await SystemSoftware.find("ss-1");

    expect(find).toHaveBeenCalledWith("ss-1");
    expect(result).toBeInstanceOf(SystemSoftwareDetailed);
    expect(result?.id).toBe("ss-1");
  });

  test("find returns undefined when the behavior finds nothing", async () => {
    installBehaviors({
      systemSoftware: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(SystemSoftware.find("missing")).resolves.toBeUndefined();
  });

  test("get returns a detailed model", async () => {
    installBehaviors({
      systemSoftware: {
        find: vi
          .fn()
          .mockResolvedValue(buildSystemSoftwareData({ id: "ss-1" })),
      },
    });

    await expect(SystemSoftware.get("ss-1")).resolves.toBeInstanceOf(
      SystemSoftwareDetailed,
    );
  });

  test("ofId creates a reference whose findDetailed delegates by id", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildSystemSoftwareData({ id: "ss-1" }));
    installBehaviors({ systemSoftware: { find } });

    const reference = SystemSoftware.ofId("ss-1");
    const result = await reference.findDetailed();

    expect(reference).toBeInstanceOf(SystemSoftware);
    expect(find).toHaveBeenCalledWith("ss-1");
    expect(result).toBeInstanceOf(SystemSoftwareDetailed);
  });

  test("findCommon and getCommon materialize a reference via the behavior", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildSystemSoftwareData({ id: "ss-1" }));
    installBehaviors({ systemSoftware: { find } });
    const reference = SystemSoftware.ofId("ss-1");

    await expect(reference.findCommon()).resolves.toBeInstanceOf(
      SystemSoftwareDetailed,
    );
    await expect(reference.getCommon()).resolves.toBeInstanceOf(
      SystemSoftwareDetailed,
    );
    expect(find).toHaveBeenCalledWith("ss-1");
  });

  test("findCommon resolves undefined and getCommon throws when missing", async () => {
    installBehaviors({
      systemSoftware: { find: vi.fn().mockResolvedValue(undefined) },
    });
    const reference = SystemSoftware.ofId("missing");

    await expect(reference.findCommon()).resolves.toBeUndefined();
    await expect(reference.getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon are idempotent for materialized system software", async () => {
    const find = vi.fn();
    installBehaviors({ systemSoftware: { find } });
    const detailed = new SystemSoftwareDetailed(
      buildSystemSoftwareData({ id: "ss-1" }),
    );
    const listItem = new SystemSoftwareListItem(
      buildSystemSoftwareListItemData({ id: "ss-2" }),
    );

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    await expect(listItem.findCommon()).resolves.toBe(listItem);
    await expect(listItem.getCommon()).resolves.toBe(listItem);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("SystemSoftware data", () => {
  test.each([
    ["php", "PHP"],
    ["wp-cli", "WP-CLI"],
  ] as const)("derives the full name for %s", (name, fullName) => {
    const item = new SystemSoftwareListItem(
      buildSystemSoftwareListItemData({ tags: [name], name }),
    );
    const detailed = new SystemSoftwareDetailed(
      buildSystemSoftwareData({ tags: [name], name }),
    );

    for (const model of [item, detailed]) {
      expect(model.name).toBe(name);
      expect(model.fullName).toBe(fullName);
      expect(model.tags).toEqual([name]);
    }
  });
});

describe("SystemSoftware list query", () => {
  test("delegates the query and materializes list items", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildSystemSoftwareListItemData({ id: "ss-1" })],
    });
    installBehaviors({ systemSoftware: { list } });

    const query = SystemSoftware.query({ limit: 5 });
    const result = await query.execute();

    expect(query).toBeInstanceOf(SystemSoftwareListQuery);
    expect(list).toHaveBeenCalledWith({ limit: 5 });
    expect(result).toBeInstanceOf(SystemSoftwareList);
    expect(result.items[0]).toBeInstanceOf(SystemSoftwareListItem);
  });

  test("refine merges query values", async () => {
    const list = vi.fn().mockResolvedValue({ items: [] });
    installBehaviors({ systemSoftware: { list } });

    await SystemSoftware.query({ limit: 5, skip: 1 })
      .refine({ skip: 2 })
      .execute();

    expect(list).toHaveBeenCalledWith({ limit: 5, skip: 2 });
  });
});

test("SystemSoftware list items preserve the model composition chain", () => {
  const item = new SystemSoftwareListItem(buildSystemSoftwareListItemData());

  expect(item).toBeInstanceOf(SystemSoftwareListItem);
  expect(item).toBeInstanceOf(SystemSoftware);
  expect(item).toBeInstanceOf(ReferenceModel);
  expect(item.data).toBeDefined();
});
