import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { ObjectNotFoundError } from "../../errors/ObjectNotFoundError.js";
import {
  buildSystemSoftwareVersionListItemData,
  buildSystemSoftwareVersionData,
} from "../../testing/builders/buildSystemSoftwareVersionData.js";
import { SystemSoftware } from "../SystemSoftware/index.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { FeePeriod } from "./FeePeriod.js";
import {
  SystemSoftwareVersionDetailed,
  SystemSoftwareVersionListItem,
  SystemSoftwareVersionList,
  SystemSoftwareVersion,
} from "./SystemSoftwareVersion.js";

afterEach(resetBehaviors);

const systemSoftware = SystemSoftware.ofId("ss-1");

describe("SystemSoftwareVersion reference and delegation", () => {
  test("find delegates with both ids and returns a detailed model", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildSystemSoftwareVersionData({ id: "version-1" }));
    installBehaviors({ systemSoftwareVersion: { find } });

    const result = await SystemSoftwareVersion.find(
      "version-1",
      systemSoftware,
    );

    expect(find).toHaveBeenCalledWith("version-1", "ss-1");
    expect(result).toBeInstanceOf(SystemSoftwareVersionDetailed);
    expect(result?.id).toBe("version-1");
  });

  test("find returns undefined when the behavior finds nothing", async () => {
    installBehaviors({
      systemSoftwareVersion: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      SystemSoftwareVersion.find("missing", systemSoftware),
    ).resolves.toBeUndefined();
  });

  test("a reference delegates findDetailed with its ids", async () => {
    const find = vi.fn().mockResolvedValue(buildSystemSoftwareVersionData());
    installBehaviors({ systemSoftwareVersion: { find } });

    const reference = SystemSoftwareVersion.ofId("version-1", systemSoftware);
    const result = await reference.findDetailed();

    expect(reference).toBeInstanceOf(SystemSoftwareVersion);
    expect(find).toHaveBeenCalledWith("version-1", "ss-1");
    expect(result).toBeInstanceOf(SystemSoftwareVersionDetailed);
  });

  test("findCommon and getCommon materialize a reference via the behavior", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildSystemSoftwareVersionData({ id: "version-1" }));
    installBehaviors({ systemSoftwareVersion: { find } });
    const reference = SystemSoftwareVersion.ofId("version-1", systemSoftware);

    await expect(reference.findCommon()).resolves.toBeInstanceOf(
      SystemSoftwareVersionDetailed,
    );
    await expect(reference.getCommon()).resolves.toBeInstanceOf(
      SystemSoftwareVersionDetailed,
    );
    expect(find).toHaveBeenCalledWith("version-1", "ss-1");
  });

  test("findCommon resolves undefined and getCommon throws when missing", async () => {
    installBehaviors({
      systemSoftwareVersion: { find: vi.fn().mockResolvedValue(undefined) },
    });
    const reference = SystemSoftwareVersion.ofId("missing", systemSoftware);

    await expect(reference.findCommon()).resolves.toBeUndefined();
    await expect(reference.getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon are idempotent for materialized versions", async () => {
    const find = vi.fn();
    installBehaviors({ systemSoftwareVersion: { find } });
    const detailed = new SystemSoftwareVersionDetailed(
      buildSystemSoftwareVersionData({ id: "version-1" }),
      systemSoftware,
    );
    const listItem = new SystemSoftwareVersionListItem(
      buildSystemSoftwareVersionListItemData({ id: "version-2" }),
      systemSoftware,
    );

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    await expect(listItem.findCommon()).resolves.toBe(listItem);
    await expect(listItem.getCommon()).resolves.toBe(listItem);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("SystemSoftwareVersion data and derived values", () => {
  test("exposes the external version and parses the expiry date", () => {
    const item = new SystemSoftwareVersionListItem(
      buildSystemSoftwareVersionListItemData({
        expiryDate: "2030-04-15T00:00:00.000Z",
        externalVersion: "8.4",
      }),
      systemSoftware,
    );

    expect(item.version).toBe("8.4");
    expect(item.expiryDate).toBeInstanceOf(DateTime);
    expect(item.expiryDate?.toISODate()).toBe("2030-04-15");
  });

  test("leaves expiryDate undefined when absent", () => {
    const item = new SystemSoftwareVersionListItem(
      buildSystemSoftwareVersionListItemData(),
      systemSoftware,
    );

    expect(item.expiryDate).toBeUndefined();
  });

  test("returns no fee period when the version carries no fee", () => {
    const item = new SystemSoftwareVersionListItem(
      buildSystemSoftwareVersionListItemData(),
      systemSoftware,
    );

    expect(item.checkCurrentFee()).toBeUndefined();
    expect(item.checkImminentFee()).toBeUndefined();
  });

  test("reports only imminent expiry dates", () => {
    const imminent = DateTime.now().plus({ month: 1 }).toISO();
    const distant = DateTime.now().plus({ year: 5 }).toISO();

    expect(
      new SystemSoftwareVersionListItem(
        buildSystemSoftwareVersionListItemData({ expiryDate: imminent }),
        systemSoftware,
      ).checkImminentExpiryDate(),
    ).toBe(imminent);
    expect(
      new SystemSoftwareVersionListItem(
        buildSystemSoftwareVersionListItemData({ expiryDate: distant }),
        systemSoftware,
      ).checkImminentExpiryDate(),
    ).toBeUndefined();
  });

  test("compares internal semantic versions", () => {
    const newer = new SystemSoftwareVersionListItem(
      buildSystemSoftwareVersionListItemData({ internalVersion: "8.3.0" }),
      systemSoftware,
    );
    const older = new SystemSoftwareVersionListItem(
      buildSystemSoftwareVersionListItemData({ internalVersion: "8.2.0" }),
      systemSoftware,
    );

    expect(newer.compare(older)).toBe(1);
    expect(older.compare(newer)).toBe(-1);
    expect(newer.compare(newer)).toBe(0);
  });

  test("returns the current fee period", () => {
    const item = new SystemSoftwareVersionListItem(
      buildSystemSoftwareVersionListItemData({
        fee: {
          periods: [
            {
              feeValidFrom: DateTime.now().minus({ month: 1 }).toISO(),
              monthlyPrice: 1000,
            },
          ],
        },
      }),
      systemSoftware,
    );

    const period = item.checkCurrentFee();
    expect(period).toBeInstanceOf(FeePeriod);
    expect(period?.monthlyPrice).toBeDefined();
  });

  test("returns an imminent future fee when there is no current fee", () => {
    const item = new SystemSoftwareVersionListItem(
      buildSystemSoftwareVersionListItemData({
        fee: {
          periods: [
            {
              feeValidFrom: DateTime.now().plus({ month: 3 }).toISO(),
              monthlyPrice: 1200,
            },
          ],
        },
      }),
      systemSoftware,
    );

    const period = item.checkImminentFee();
    expect(period).toBeInstanceOf(FeePeriod);
    expect(period?.monthlyPrice).toBeDefined();
  });
});

describe("SystemSoftwareVersion list query", () => {
  test("delegates, materializes, and sorts versions descending", async () => {
    const list = vi.fn().mockResolvedValue({
      items: ["8.2.0", "8.4.0", "8.3.0"].map((internalVersion) =>
        buildSystemSoftwareVersionListItemData({
          externalVersion: internalVersion,
          internalVersion,
        }),
      ),
    });
    installBehaviors({ systemSoftwareVersion: { list } });

    const result = await SystemSoftwareVersion.query(systemSoftware, {
      recommended: true,
    }).execute();

    expect(list).toHaveBeenCalledWith("ss-1", { recommended: true });
    expect(result).toBeInstanceOf(SystemSoftwareVersionList);
    expect(
      result.items.every(
        (item) => item instanceof SystemSoftwareVersionListItem,
      ),
    ).toBe(true);
    expect(result.items.map((item) => item.version)).toEqual([
      "8.4.0",
      "8.3.0",
      "8.2.0",
    ]);
  });
});

test("SystemSoftwareVersion list items preserve the model composition chain", () => {
  const item = new SystemSoftwareVersionListItem(
    buildSystemSoftwareVersionListItemData(),
    systemSoftware,
  );

  expect(item).toBeInstanceOf(SystemSoftwareVersionListItem);
  expect(item).toBeInstanceOf(SystemSoftwareVersion);
  expect(item).toBeInstanceOf(ReferenceModel);
  expect(item.data).toBeDefined();
});
