import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildFinderProfileRequestCustomerData } from "../../testing/builders/buildFinderProfileRequestCustomerData.js";
import { buildFinderProfileRequestData } from "../../testing/builders/buildFinderProfileRequestData.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { AggregateMetaData } from "../../common/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import {
  FinderProfileRequestDetailed,
  FinderProfileRequestCommon,
  FinderProfileRequestList,
  FinderProfileRequest,
} from "./FinderProfileRequest.js";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? type.name : undefined,
}));

afterEach(resetBehaviors);

describe("FinderProfileRequest", () => {
  test("find and get delegate and handle missing data", async () => {
    const options = { retryCache: false };
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildFinderProfileRequestData())
      .mockResolvedValueOnce(buildFinderProfileRequestData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ finderProfileRequest: { find } });

    expect(await FinderProfileRequest.find("c-1", options)).toBeInstanceOf(
      FinderProfileRequestDetailed,
    );
    expect(find).toHaveBeenCalledWith("c-1", options);
    expect(await FinderProfileRequest.get("c-1")).toBeInstanceOf(
      FinderProfileRequestDetailed,
    );
    await expect(FinderProfileRequest.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("exposes request data through getters", () => {
    const request = new FinderProfileRequestDetailed(
      buildFinderProfileRequestData({ resultOn: undefined }),
    );
    const completed = new FinderProfileRequestDetailed(
      buildFinderProfileRequestData({
        resultOn: "2024-02-01T00:00:00.000Z",
        domain: "https://example.org",
      }),
    );

    expect(request.profileId).toBe("p-1");
    expect(request.customer.id).toBe("c-1");
    expect(request.domain).toBe("example.com");
    expect(request.url).toBe("https://example.com");
    expect(request.createdAt.toUTC().toISO()).toBe("2024-01-01T00:00:00.000Z");
    expect(request.resultAt).toBeUndefined();
    expect(request.status).toBe("APPROVED");
    expect(completed.url).toBe("https://example.org");
    expect(completed.resultAt?.toUTC().toISO()).toBe(
      "2024-02-01T00:00:00.000Z",
    );
  });

  test("create derives the domain from the customer owner email", async () => {
    const customer = buildFinderProfileRequestCustomerData({
      owner: {
        address: {
          countryCode: "DE",
          houseNumber: "1",
          street: "Main",
          city: "Kiel",
          zip: "24103",
        },
        emailAddress: "info@sub.example.com",
        salutation: "mr",
      },
    });
    const find = vi.fn().mockResolvedValue(customer);
    const create = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ finderProfileRequest: { create }, customer: { find } });

    await FinderProfileRequest.create("c-1");

    expect(create).toHaveBeenCalledWith("c-1", { domain: "sub.example.com" });
  });

  test("create rejects when the owner email is absent", async () => {
    const customer = buildFinderProfileRequestCustomerData({
      owner: {
        address: {
          countryCode: "DE",
          houseNumber: "1",
          street: "Main",
          city: "Kiel",
          zip: "24103",
        },
        salutation: "mr",
      },
    });
    installBehaviors({
      customer: { find: vi.fn().mockResolvedValue(customer) },
    });

    await expect(FinderProfileRequest.create("c-1")).rejects.toThrow(
      "Contract partner email is not defined",
    );
  });

  test("preserves identity and queries the list behavior", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildFinderProfileRequestData()],
      totalCount: 1,
    });
    installBehaviors({ finderProfileRequest: { list } });

    const result = await FinderProfileRequest.query().execute();

    expect(result).toBeInstanceOf(FinderProfileRequestList);
    expect(result.items[0]).toBeInstanceOf(FinderProfileRequest);
    expect(
      new FinderProfileRequestDetailed(buildFinderProfileRequestData()),
    ).toBeInstanceOf(FinderProfileRequest);
    expect(list).toHaveBeenCalledWith();
  });

  test("findCommon and getCommon delegate to find", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildFinderProfileRequestData())
      .mockResolvedValueOnce(undefined)
      .mockResolvedValueOnce(buildFinderProfileRequestData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ finderProfileRequest: { find } });

    expect(
      await FinderProfileRequest.ofCustomer("c-1").findCommon(),
    ).toBeInstanceOf(FinderProfileRequestCommon);
    expect(
      await FinderProfileRequest.ofCustomer("c-1").findCommon(),
    ).toBeUndefined();
    expect(
      await FinderProfileRequest.ofCustomer("c-1").getCommon(),
    ).toBeInstanceOf(FinderProfileRequestCommon);
    await expect(
      FinderProfileRequest.ofCustomer("missing").getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("getCommon, findCommon and getDetailed are idempotent on a materialized request", async () => {
    const find = vi.fn();
    installBehaviors({ finderProfileRequest: { find } });
    const detailed = new FinderProfileRequestDetailed(
      buildFinderProfileRequestData(),
    );

    expect(await detailed.getCommon()).toBe(detailed);
    expect(await detailed.findCommon()).toBe(detailed);
    expect(await detailed.getDetailed()).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("aggregateMetaData pins the cache identity", () => {
    expect(FinderProfileRequest.aggregateMetaData).toBeInstanceOf(
      AggregateMetaData,
    );
    expect(FinderProfileRequest.aggregateMetaData.domain).toBe("leadfinder");
    expect(FinderProfileRequest.aggregateMetaData.aggregate).toBe(
      "finderprofilerequest",
    );
  });
});
