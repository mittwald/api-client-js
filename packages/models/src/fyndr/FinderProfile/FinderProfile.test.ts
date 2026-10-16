import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildFinderProfileData } from "../../testing/builders/buildFinderProfileData.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { AggregateMetaData } from "../../common/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import {
  FinderProfileDetailed,
  FinderProfileList,
  FinderProfile,
} from "./FinderProfile.js";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? type.name : undefined,
}));

afterEach(resetBehaviors);

describe("FinderProfile", () => {
  test("find delegates with options and maps missing data", async () => {
    const options = { retryCache: false };
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildFinderProfileData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ finderProfile: { find } });

    expect(await FinderProfile.find("c-1", options)).toBeInstanceOf(
      FinderProfileDetailed,
    );
    expect(find).toHaveBeenCalledWith("c-1", options);
    expect(await FinderProfile.find("missing")).toBeUndefined();
  });

  test("get returns detailed data and rejects when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildFinderProfileData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ finderProfile: { find } });

    expect(await FinderProfile.get("c-1")).toBeInstanceOf(
      FinderProfileDetailed,
    );
    await expect(FinderProfile.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("exposes profile data through derived getters", () => {
    const tariff = buildFinderProfileData().tariff;
    const enabled = new FinderProfileDetailed(
      buildFinderProfileData({ tariff }),
    );
    const disabled = new FinderProfileDetailed(
      buildFinderProfileData({
        disabledOn: "2024-03-01T00:00:00.000Z",
        domain: "https://example.org",
      }),
    );

    expect(enabled.url).toBe("https://example.com");
    expect(enabled.approvedAt?.toUTC().toISO()).toBe(
      "2024-01-01T00:00:00.000Z",
    );
    expect(enabled.plan).toBe(tariff);
    expect(enabled.unlockContingentRenewalDate?.toUTC().toISO()).toBe(
      "2024-06-01T00:00:00.000Z",
    );
    expect(enabled.isDisabled).toBe(false);
    expect(enabled.disabledAt).toBeUndefined();
    expect(enabled.hasAccess()).toBe(true);
    expect(enabled.customer.id).toBe("c-1");
    expect(disabled.url).toBe("https://example.org");
    expect(disabled.isDisabled).toBe(true);
    expect(disabled.disabledAt?.toUTC().toISO()).toBe(
      "2024-03-01T00:00:00.000Z",
    );
    expect(disabled.hasAccess()).toBe(false);
  });

  test("getContract delegates and preserves undefined", async () => {
    const findContract = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ finderProfile: { findContract } });

    expect(await FinderProfile.ofCustomer("c-1").getContract()).toBeUndefined();
    expect(findContract).toHaveBeenCalledWith("c-1");
  });

  test("preserves identity and queries the list behavior", async () => {
    const list = vi
      .fn()
      .mockResolvedValue({ items: [buildFinderProfileData()], totalCount: 8 });
    installBehaviors({ finderProfile: { list } });

    const result = await FinderProfile.query().execute();

    expect(FinderProfile.ofCustomer("c-1").id).toBe("c-1");
    expect(result).toBeInstanceOf(FinderProfileList);
    expect(result.items[0]).toBeInstanceOf(FinderProfile);
    expect(new FinderProfileDetailed(buildFinderProfileData())).toBeInstanceOf(
      FinderProfile,
    );
    expect(list).toHaveBeenCalledWith();
  });

  test("findCommon delegates to find and maps the common variant, undefined when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildFinderProfileData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ finderProfile: { find } });

    expect(await FinderProfile.ofCustomer("c-1").findCommon()).toBeInstanceOf(
      FinderProfileDetailed,
    );
    expect(find).toHaveBeenCalledWith("c-1", undefined);
    expect(await FinderProfile.ofCustomer("c-2").findCommon()).toBeUndefined();
  });

  test("getCommon returns the common variant and rejects when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildFinderProfileData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ finderProfile: { find } });

    expect(await FinderProfile.ofCustomer("c-1").getCommon()).toBeInstanceOf(
      FinderProfileDetailed,
    );
    await expect(
      FinderProfile.ofCustomer("missing").getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("getCommon and findCommon are idempotent on a materialized profile", async () => {
    const find = vi.fn();
    installBehaviors({ finderProfile: { find } });
    const detailed = new FinderProfileDetailed(buildFinderProfileData());

    expect(await detailed.getCommon()).toBe(detailed);
    expect(await detailed.findCommon()).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("aggregateMetaData pins the cache identity", () => {
    expect(FinderProfile.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(FinderProfile.aggregateMetaData.domain).toBe("leadfinder");
    expect(FinderProfile.aggregateMetaData.aggregate).toBe("finderprofile");
  });

  test("derived dates fall back to undefined when source fields are absent", () => {
    const profile = new FinderProfileDetailed(
      buildFinderProfileData({
        tariff: {
          reservation: { tariffLimit: 0, available: 0, used: 0 },
          unlocked: { tariffLimit: 0, available: 0, used: 0 },
        },
        approvedOn: undefined,
      }),
    );

    expect(profile.approvedAt).toBeUndefined();
    expect(profile.unlockContingentRenewalDate).toBeUndefined();
  });
});
