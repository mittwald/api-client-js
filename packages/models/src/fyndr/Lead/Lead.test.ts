import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildLeadData } from "../../testing/builders/buildLeadData.js";
import { LeadDetailed, LeadListItem, LeadList, Lead } from "./Lead.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { getFormattedSalesVolume } from "../util/helper.js";
import { AggregateMetaData } from "../../common/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? type.name : undefined,
}));

afterEach(resetBehaviors);

describe("Lead", () => {
  test("find and get delegate and handle missing data", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildLeadData())
      .mockResolvedValueOnce(buildLeadData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ lead: { find } });

    expect(await Lead.find("c-1", "l-1")).toBeInstanceOf(LeadDetailed);
    expect(find).toHaveBeenCalledWith("c-1", "l-1");
    expect(await Lead.get("c-1", "l-1")).toBeInstanceOf(LeadDetailed);
    await expect(Lead.get("c-1", "missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("exposes derived lead data", () => {
    const lead = new LeadDetailed(
      "c-1",
      buildLeadData({ businessFields: ["IT", "Retail"] }),
    );
    const medium = new LeadDetailed("c-1", buildLeadData({ potential: 0.55 }));
    const low = new LeadDetailed("c-1", buildLeadData({ potential: 0.5 }));
    const unversioned = new LeadDetailed(
      "c-1",
      buildLeadData({ mainTechnology: { categoryPriority: 1, name: "React" } }),
    );

    expect(lead.businessFields).toBe("IT, Retail");
    expect(lead.potential).toBe(72);
    expect(lead.potentialType).toBe("high");
    expect(medium.potentialType).toBe("medium");
    expect(low.potentialType).toBe("low");
    expect(lead.formattedSalesVolume).toBe(getFormattedSalesVolume(2_000_000));
    expect(lead.mainTechnologyWithVersionText).toBe("TYPO3 12");
    expect(unversioned.mainTechnologyWithVersionText).toBe("React");
  });

  test("unlock delegates with the customer and lead ids", async () => {
    const unlock = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ lead: { unlock } });

    await Lead.ofId("c-1", "l-1").unlock();

    expect(unlock).toHaveBeenCalledWith("c-1", "l-1");
  });

  test("queries and maps lead lists", async () => {
    const list = vi
      .fn()
      .mockResolvedValue({ items: [buildLeadData()], totalCount: 9 });
    installBehaviors({ lead: { list } });

    const result = await Lead.query("c-1", { limit: 4 }).execute();

    expect(list).toHaveBeenCalledWith("c-1", { limit: 4 });
    expect(result).toBeInstanceOf(LeadList);
    expect(result.items[0]).toBeInstanceOf(LeadListItem);
    expect(result.totalCount).toBe(9);
  });

  test("getTotalCount executes a zero-limit query", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 12, items: [] });
    installBehaviors({ lead: { list } });

    expect(await Lead.query("c-1", { skip: 2 }).getTotalCount()).toBe(12);
    expect(list).toHaveBeenCalledWith("c-1", { limit: 0, skip: 2 });
  });

  test("maps store filters and omits the DACH placeholder location", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ lead: { list } });

    await Lead.queryFromStoreFilters("c-1", {
      location: { zipCode: "24103", city: "Kiel", radius: "25" },
      employeeCount: { min: "10", max: "50" },
      technologies: ["TYPO3", "React"],
      businessFields: ["IT"],
    }).execute();
    expect(list).toHaveBeenLastCalledWith("c-1", {
      technologies: ["TYPO3 CMS", "React"],
      locationPostCode: "24103",
      businessFields: ["IT"],
      locationRadiusInKm: 25,
      employeeCountMin: 10,
      employeeCountMax: 50,
      locationCity: "Kiel",
    });

    await Lead.queryFromStoreFilters("c-1", {
      location: { zipCode: "DACH-RAUM", radius: "100", city: "" },
      employeeCount: null,
      businessFields: [],
      technologies: [],
    }).execute();
    expect(list).toHaveBeenLastCalledWith("c-1", {
      employeeCountMin: undefined,
      employeeCountMax: undefined,
      businessFields: [],
      technologies: [],
    });
  });

  test("detailed leads retain Lead identity", () => {
    expect(new LeadDetailed("c-1", buildLeadData())).toBeInstanceOf(Lead);
  });

  test("findCommon and getCommon delegate to find", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildLeadData())
      .mockResolvedValueOnce(undefined)
      .mockResolvedValueOnce(buildLeadData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ lead: { find } });

    expect(await Lead.ofId("c-1", "l-1").findCommon()).toBeInstanceOf(
      LeadDetailed,
    );
    expect(find).toHaveBeenCalledWith("c-1", "l-1");
    expect(await Lead.ofId("c-1", "l-1").findCommon()).toBeUndefined();
    expect(await Lead.ofId("c-1", "l-1").getCommon()).toBeInstanceOf(
      LeadDetailed,
    );
    await expect(
      Lead.ofId("c-1", "missing").getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("getCommon and findCommon are idempotent on a materialized lead", async () => {
    const find = vi.fn();
    installBehaviors({ lead: { find } });
    const detailed = new LeadDetailed("c-1", buildLeadData());

    expect(await detailed.getCommon()).toBe(detailed);
    expect(await detailed.findCommon()).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("aggregateMetaData pins the cache identity", () => {
    expect(Lead.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Lead.aggregateMetaData.domain).toBe("leadfinder");
    expect(Lead.aggregateMetaData.aggregate).toBe("lead");
  });

  test("derived technology and scan fields fall back when data is absent", () => {
    const lead = new LeadDetailed(
      "c-1",
      buildLeadData({ mainTechnology: undefined }),
    );

    expect(lead.mainTechnology).toBeUndefined();
    expect(lead.mainTechnologyWithVersionText).toBeUndefined();
    expect(lead.scannedAt).toBeUndefined();
  });
});
