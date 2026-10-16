import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

import type { OwnContributorData, ContributorData } from "./types.js";

import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { LocalizedText } from "../../common/index.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import {
  OwnContributorDetailed,
  ContributorListQuery,
  ContributorDetailed,
  ContributorListItem,
  ContributorList,
  Contributor,
} from "./Contributor.js";

afterEach(resetBehaviors);

const mittwaldContributorId = "322ba411-aafc-493a-b8ad-a42a01939f42";

function buildContributorData(
  overrides?: Partial<ContributorData>,
): ContributorData {
  return {
    supportInformation: {
      email: "support@example.com",
      inherited: false,
      phone: "12345",
    },
    descriptions: { de: "Beschreibung" },
    homepage: "https://example.com",
    customerId: "customer-id",
    logoRefId: "logo-ref-id",
    name: "Test Contributor",
    email: "s@example.com",
    id: "contributor-id",
    state: "enabled",
    ...overrides,
  };
}

function buildOwnContributorData(
  overrides?: Partial<OwnContributorData>,
): OwnContributorData {
  return {
    contractOwner: {
      contact: {
        address: {
          street: "Main Street",
          city: "Space City",
          countryCode: "DE",
          houseNumber: "1",
          zip: "12345",
        },
        salutation: "mr",
      },
      inherited: false,
    },
    supportInformation: { email: "support@example.com", inherited: false },
    contactPersonUserId: "user-id",
    contributorNumber: "C-4711",
    verificationRequested: true,
    customerId: "customer-id",
    name: "Own Contributor",
    email: "s@example.com",
    id: "contributor-id",
    nameInherited: false,
    state: "enabled",
    verified: false,
    ...overrides,
  };
}

describe("reference and delegation", () => {
  test("ofId flags the mittwald contributor", () => {
    expect(Contributor.ofId(mittwaldContributorId).isMittwald).toBe(true);
    expect(Contributor.ofId("c-1").isMittwald).toBe(false);
  });

  test("find delegates and materializes a detailed contributor", async () => {
    const find = vi.fn().mockResolvedValue(buildContributorData({ id: "c-1" }));
    installBehaviors({ contributor: { find } });

    const contributor = await Contributor.find("c-1");

    expect(find).toHaveBeenCalledWith("c-1", undefined);
    expect(contributor).toBeInstanceOf(ContributorDetailed);
    expect(contributor?.id).toBe("c-1");
  });

  test("find materializes an own contributor when verification data is present", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildOwnContributorData({ id: "c-2" }));
    installBehaviors({ contributor: { find } });

    const contributor = await Contributor.find("c-2");

    expect(contributor).toBeInstanceOf(OwnContributorDetailed);
    expect((contributor as OwnContributorDetailed).verificationRequested).toBe(
      true,
    );
    expect((contributor as OwnContributorDetailed).verified).toBe(false);
  });

  test("find returns undefined when the behavior does", async () => {
    installBehaviors({
      contributor: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Contributor.find("missing")).resolves.toBeUndefined();
  });
});

describe("get on a missing contributor", () => {
  test("throws ObjectNotFoundError", async () => {
    installBehaviors({
      contributor: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Contributor.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });
});

describe("common variant and idempotency", () => {
  test("findCommon delegates to the detailed variant from a bare reference", async () => {
    const find = vi.fn().mockResolvedValue(buildContributorData({ id: "c-1" }));
    installBehaviors({ contributor: { find } });

    const common = await Contributor.ofId("c-1").findCommon();

    expect(find).toHaveBeenCalledWith("c-1", undefined);
    expect(common).toBeInstanceOf(ContributorDetailed);
    expect(common?.id).toBe("c-1");
  });

  test("findCommon returns undefined when the behavior finds nothing", async () => {
    installBehaviors({
      contributor: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      Contributor.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon delegates and throws when the contributor is missing", async () => {
    installBehaviors({
      contributor: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      Contributor.ofId("missing").getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("getCommon on an already-common model returns itself without re-fetching", async () => {
    const find = vi.fn();
    installBehaviors({ contributor: { find } });
    const detailed = new ContributorDetailed(
      buildContributorData({ id: "c-3" }),
    );

    const common = await detailed.getCommon();

    expect(common).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("findCommon on an already-common model returns itself without re-fetching", async () => {
    const find = vi.fn();
    installBehaviors({ contributor: { find } });
    const item = new ContributorListItem(buildContributorData({ id: "c-4" }));

    const common = await item.findCommon();

    expect(common).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });
});

test("exposes data and derived values", () => {
  const contributor = new ContributorDetailed(
    buildContributorData({ customerId: "cust-9", logoRefId: "logo-9" }),
  );

  expect(contributor.name).toBe("Test Contributor");
  expect(contributor.customer.id).toBe("cust-9");
  expect(contributor.state).toBe("enabled");
  expect(contributor.description).toBeInstanceOf(LocalizedText);
  expect(contributor.description.getText()).toBe("Beschreibung");
  expect(contributor.email).toBe("support@example.com");
  expect(contributor.phone).toBe("12345");
  expect(contributor.homepage).toBe("https://example.com");
  expect(contributor.avatar?.id).toBe("logo-9");
});

test("exposes the contributor number of an own contributor", () => {
  const contributor = new OwnContributorDetailed(buildOwnContributorData());

  expect(contributor.contributorNumber).toBe("C-4711");
  expect(contributor.verified).toBe(false);
  expect(contributor.verificationRequested).toBe(true);
});

describe("absent optional source data", () => {
  test("omits the avatar, homepage and contributor number when the source has none", () => {
    const contributor = new ContributorDetailed(
      buildContributorData({
        descriptions: undefined,
        logoRefId: undefined,
        homepage: undefined,
      }),
    );

    expect(contributor.avatar).toBeUndefined();
    expect(contributor.homepage).toBeUndefined();
    expect(contributor.contributorNumber).toBeUndefined();
    expect(contributor.description).toBeInstanceOf(LocalizedText);
  });
});

describe("list query", () => {
  test("delegates to the behavior and materializes list items", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildContributorData({ id: "c-list" })],
      totalCount: 4,
    });
    installBehaviors({ contributor: { list } });

    const result = await Contributor.ofId("c-1").query().execute();

    expect(list).toHaveBeenCalledWith({});
    expect(result).toBeInstanceOf(ContributorList);
    expect(result).toBeInstanceOf(ContributorListQuery);
    expect(result.items[0]).toBeInstanceOf(ContributorListItem);
    expect(result.totalCount).toBe(4);
  });

  test("getTotalCount returns the behavior total", async () => {
    installBehaviors({
      contributor: {
        list: vi.fn().mockResolvedValue({ totalCount: 9, items: [] }),
      },
    });

    await expect(Contributor.ofId("c-1").query().getTotalCount()).resolves.toBe(
      9,
    );
  });
});

test("preserves ghostmaker identity chains", () => {
  const item = new ContributorListItem(buildContributorData());

  expect(item).toBeInstanceOf(ContributorListItem);
  expect(item).toBeInstanceOf(Contributor);
  expect(item).toBeInstanceOf(ReferenceModel);
  expect(item.data).toBeDefined();
});
