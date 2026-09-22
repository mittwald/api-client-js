import { afterEach, describe, expect, test, vi } from "vitest";

import type { LeadsExportRequestData } from "./types.js";

import { buildLeadsExportData } from "../../testing/builders/buildLeadsExportData.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import {
  LeadsExportListItem,
  LeadsExportList,
  LeadsExport,
} from "./LeadsExport.js";

afterEach(resetBehaviors);

describe("LeadsExport", () => {
  test("queries exports with request config and maps list items", async () => {
    const list = vi.fn().mockResolvedValue({ items: [buildLeadsExportData()], totalCount: 8 });
    const requestConfig = { retryCache: false };
    installBehaviors({ leadsExport: { list } });

    const result = await LeadsExport.query("c-1", { limit: 3 }).execute(requestConfig);

    expect(list).toHaveBeenCalledWith("c-1", { limit: 3 }, requestConfig);
    expect(result).toBeInstanceOf(LeadsExportList);
    expect(result.items[0]).toBeInstanceOf(LeadsExportListItem);
    expect(result.items[0]?.exportedAt.toUTC().toISO()).toBe("2024-01-01T00:00:00.000Z");
    expect(result.items[0]?.exportedBy).toEqual({ userId: "u-1" });
    expect(result.items[0]?.leadCount).toBe(5);
    expect(result.totalCount).toBe(8);
  });

  test("getTotalCount executes a one-limit query", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 6, items: [] });
    installBehaviors({ leadsExport: { list } });

    expect(await LeadsExport.query("c-1", { skip: 2 }).getTotalCount()).toBe(6);
    expect(list).toHaveBeenCalledWith("c-1", { limit: 1, skip: 2 }, undefined);
  });

  test("create delegates and returns the behavior result", async () => {
    const response = { base64FileContent: "csv", exportId: "e-1" };
    const create = vi.fn().mockResolvedValue(response);
    const data: LeadsExportRequestData = {
      fieldKeys: ["domain"],
      exportAllLeads: true,
    };
    installBehaviors({ leadsExport: { create } });

    await expect(LeadsExport.create("c-1", data)).resolves.toBe(response);
    expect(create).toHaveBeenCalledWith("c-1", data);
  });

  test("creates references by id", () => {
    expect(LeadsExport.ofId("e-1").id).toBe("e-1");
  });
});
