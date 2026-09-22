import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildUnlockedLeadData } from "../../testing/builders/buildUnlockedLeadData.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { getFormattedSalesVolume } from "../util/helper.js";
import { AggregateMetaData } from "../../common/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import {
  UnlockedLeadListQuery,
  UnlockedLeadDetailed,
  UnlockedLeadListItem,
  UnlockedLeadList,
  UnlockedLead,
} from "./UnlockedLead.js";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? type.name : undefined,
}));

afterEach(resetBehaviors);

describe("UnlockedLead", () => {
  test("find and get delegate and handle missing data", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildUnlockedLeadData())
      .mockResolvedValueOnce(buildUnlockedLeadData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ unlockedLead: { find } });

    expect(await UnlockedLead.find("c-1", "l-1")).toBeInstanceOf(
      UnlockedLeadDetailed,
    );
    expect(find).toHaveBeenCalledWith("c-1", "l-1");
    expect(await UnlockedLead.get("c-1", "l-1")).toBeInstanceOf(
      UnlockedLeadDetailed,
    );
    await expect(UnlockedLead.get("c-1", "missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("exposes unlocked lead data through getters", () => {
    const data = buildUnlockedLeadData({
      reservedAt: "2024-03-01T00:00:00.000Z",
      businessFields: ["IT", "Retail"],
      reservationAllowed: undefined,
    });
    const lead = new UnlockedLeadDetailed("c-1", data);
    const medium = new UnlockedLeadDetailed(
      "c-1",
      buildUnlockedLeadData({ potential: 0.55 }),
    );
    const low = new UnlockedLeadDetailed(
      "c-1",
      buildUnlockedLeadData({ potential: 0.5 }),
    );
    const unversioned = new UnlockedLeadDetailed(
      "c-1",
      buildUnlockedLeadData({
        mainTechnology: { categoryPriority: 1, name: "React" },
      }),
    );

    expect(lead.businessFields).toBe("IT, Retail");
    expect(lead.potential).toBe(72);
    expect(lead.potentialType).toBe("high");
    expect(medium.potentialType).toBe("medium");
    expect(low.potentialType).toBe("low");
    expect(lead.formattedSalesVolume).toBe(getFormattedSalesVolume(2_000_000));
    expect(lead.mainTechnologyWithVersionText).toBe("TYPO3 12");
    expect(unversioned.mainTechnologyWithVersionText).toBe("React");
    expect(lead.reservedAt?.toUTC().toISO()).toBe("2024-03-01T00:00:00.000Z");
    expect(lead.isReserved).toBe(true);
    expect(lead.unlockedAt.toUTC().toISO()).toBe("2024-02-01T00:00:00.000Z");
    expect(lead.socialMedia).toBe(data.socialMedia);
    expect(lead.contact).toBe(data.contact);
    expect(lead.languages).toBe(data.languages);
    expect(lead.reservationAllowed).toBe(false);
    expect(lead.actualUrl).toBe("https://example.com");
    expect(lead.domain).toBe("example.com");
  });

  test("reservation mutations delegate with identifiers", async () => {
    const reserve = vi.fn().mockResolvedValue(undefined);
    const removeReservation = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ unlockedLead: { removeReservation, reserve } });
    const lead = UnlockedLead.ofId("c-1", "l-1");

    await lead.reserve();
    await lead.removeReservation();

    expect(reserve).toHaveBeenCalledWith("c-1", "l-1");
    expect(removeReservation).toHaveBeenCalledWith("c-1", "l-1");
  });

  test("queries and maps unlocked lead lists", async () => {
    const list = vi
      .fn()
      .mockResolvedValue({ items: [buildUnlockedLeadData()], totalCount: 9 });
    installBehaviors({ unlockedLead: { list } });

    const result = await UnlockedLead.query("c-1", { limit: 4 }).execute();

    expect(list).toHaveBeenCalledWith("c-1", { limit: 4 });
    expect(result).toBeInstanceOf(UnlockedLeadList);
    expect(result.items[0]).toBeInstanceOf(UnlockedLeadListItem);
    expect(result.totalCount).toBe(9);
  });

  test("count and reserved queries merge their special filters", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 12, items: [] });
    installBehaviors({ unlockedLead: { list } });

    expect(await UnlockedLead.query("c-1", { skip: 2 }).getTotalCount()).toBe(
      12,
    );
    expect(list).toHaveBeenLastCalledWith("c-1", { limit: 0, skip: 2 });
    await UnlockedLeadListQuery.reserved("c-1", { limit: 3 }).execute();
    expect(list).toHaveBeenLastCalledWith("c-1", { reserved: true, limit: 3 });
  });

  test("detailed unlocked leads retain reference identity", () => {
    expect(
      new UnlockedLeadDetailed("c-1", buildUnlockedLeadData()),
    ).toBeInstanceOf(UnlockedLead);
  });

  test("findCommon and getCommon delegate to find", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildUnlockedLeadData())
      .mockResolvedValueOnce(undefined)
      .mockResolvedValueOnce(buildUnlockedLeadData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ unlockedLead: { find } });

    expect(await UnlockedLead.ofId("c-1", "l-1").findCommon()).toBeInstanceOf(
      UnlockedLeadDetailed,
    );
    expect(find).toHaveBeenCalledWith("c-1", "l-1");
    expect(await UnlockedLead.ofId("c-1", "l-1").findCommon()).toBeUndefined();
    expect(await UnlockedLead.ofId("c-1", "l-1").getCommon()).toBeInstanceOf(
      UnlockedLeadDetailed,
    );
    await expect(
      UnlockedLead.ofId("c-1", "missing").getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("getCommon and findCommon are idempotent on a materialized unlocked lead", async () => {
    const find = vi.fn();
    installBehaviors({ unlockedLead: { find } });
    const detailed = new UnlockedLeadDetailed("c-1", buildUnlockedLeadData());

    expect(await detailed.getCommon()).toBe(detailed);
    expect(await detailed.findCommon()).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("aggregateMetaData pins the cache identity", () => {
    expect(UnlockedLead.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(UnlockedLead.aggregateMetaData.domain).toBe("leadfinder");
    expect(UnlockedLead.aggregateMetaData.aggregate).toBe("unlockedlead");
  });

  test("optional unlocked lead fields fall back when data is absent", () => {
    const lead = new UnlockedLeadDetailed(
      "c-1",
      buildUnlockedLeadData({ mainTechnology: undefined }),
    );

    expect(lead.reservedAt).toBeUndefined();
    expect(lead.isReserved).toBe(false);
    expect(lead.scannedAt).toBeUndefined();
    expect(lead.mainTechnology).toBeUndefined();
    expect(lead.mainTechnologyWithVersionText).toBeUndefined();
  });
});
