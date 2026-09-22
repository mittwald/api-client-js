import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildContributorExtensionListItemData } from "../../testing/builders/buildContributorExtensionListItemData";
import { buildContributorExtensionData } from "../../testing/builders/buildContributorExtensionData";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import { ReferenceModel } from "../../base";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function"
      ? (type as { name?: string }).name
      : undefined,
}));

import {
  ContributorExtensionListQuery,
  ContributorExtensionDetailed,
  ContributorExtensionListItem,
  ContributorExtensionList,
  ContributorExtension,
} from "./ContributorExtension";

afterEach(resetBehaviors);

describe("reference and delegation", () => {
  test("ofId preserves both identifiers", () => {
    const extension = ContributorExtension.ofId("c-1", "e-1");
    expect(extension.contributorId).toBe("c-1");
    expect(extension.id).toBe("e-1");
  });

  test("find delegates with both identifiers", async () => {
    const find = vi.fn().mockResolvedValue(
      buildContributorExtensionData({ contributorId: "c-1", id: "e-1" }),
    );
    installBehaviors({ contributorExtension: { find } });

    const extension = await ContributorExtension.find("c-1", "e-1");

    expect(find).toHaveBeenCalledWith("c-1", "e-1");
    expect(extension).toBeInstanceOf(ContributorExtensionDetailed);
    expect(extension?.id).toBe("e-1");
  });

  test("find returns undefined when the behavior does", async () => {
    installBehaviors({
      contributorExtension: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ContributorExtension.find("c-1", "missing"),
    ).resolves.toBeUndefined();
  });
});

test("create delegates and returns a reference", async () => {
  const create = vi.fn().mockResolvedValue({ id: "new-id" });
  installBehaviors({ contributorExtension: { create } });

  const extension = await ContributorExtension.create({
    contributorId: "c-1",
    name: "X",
  });

  expect(create).toHaveBeenCalledWith("c-1", "X");
  expect(extension).toBeInstanceOf(ContributorExtension);
  expect(extension.contributorId).toBe("c-1");
  expect(extension.id).toBe("new-id");
});

test("exposes data and derived values", () => {
  const extension = new ContributorExtensionDetailed(
    buildContributorExtensionData({
      assets: [
        { assetType: "image", id: "asset-2", index: 2 },
        { assetType: "image", id: "asset-1", index: 1 },
      ],
      deletionDeadline: "2025-02-03T00:00:00.000Z",
      contributorId: "c-1",
      verified: true,
    }),
  );

  expect(extension.name).toBe("Own Extension");
  expect(extension.contributor.id).toBe("c-1");
  expect(extension.amountOfInstances).toBe(5);
  expect(extension.assets.map(({ id }) => id)).toEqual(["asset-1", "asset-2"]);
  expect(extension.verified).toBe(true);
  expect(extension.deletionDeadline?.year).toBe(2025);
});

test("defaults the amount of instances to zero", () => {
  const extension = new ContributorExtensionDetailed(
    buildContributorExtensionData({ statistics: {} }),
  );

  expect(extension.amountOfInstances).toBe(0);
});

test("query delegates with the contributor and materializes items", async () => {
  const list = vi.fn().mockResolvedValue({
    items: [buildContributorExtensionListItemData()],
    totalCount: 1,
  });
  installBehaviors({ contributorExtension: { list } });

  const result = await ContributorExtension.query("c-1").execute();

  expect(list).toHaveBeenCalledWith("c-1", expect.any(Object));
  expect(result).toBeInstanceOf(ContributorExtensionList);
  expect(result).toBeInstanceOf(ContributorExtensionListQuery);
  expect(result.items[0]).toBeInstanceOf(ContributorExtensionListItem);
  expect(result.totalCount).toBe(1);
});

test("preserves ghostmaker identity chains", () => {
  const item = new ContributorExtensionListItem(
    buildContributorExtensionListItemData(),
  );

  expect(item).toBeInstanceOf(ContributorExtensionListItem);
  expect(item).toBeInstanceOf(ContributorExtension);
  expect(item).toBeInstanceOf(ReferenceModel);
  expect(item.data).toBeDefined();
});

describe("get on a missing contributor extension", () => {
  test("throws ObjectNotFoundError", async () => {
    installBehaviors({
      contributorExtension: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ContributorExtension.get("c-1", "missing"),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });
});
describe("common variant and idempotency", () => {
  test("findCommon delegates to the detailed variant from a bare reference", async () => {
    const find = vi.fn().mockResolvedValue(
      buildContributorExtensionData({ contributorId: "c-1", id: "e-1" }),
    );
    installBehaviors({ contributorExtension: { find } });

    const common = await ContributorExtension.ofId("c-1", "e-1").findCommon();

    expect(find).toHaveBeenCalledWith("c-1", "e-1");
    expect(common).toBeInstanceOf(ContributorExtensionDetailed);
    expect(common?.id).toBe("e-1");
  });

  test("findCommon returns undefined when the behavior finds nothing", async () => {
    installBehaviors({
      contributorExtension: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ContributorExtension.ofId("c-1", "missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon delegates and throws when the extension is missing", async () => {
    installBehaviors({
      contributorExtension: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ContributorExtension.ofId("c-1", "missing").getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("getCommon on an already-common model returns itself without re-fetching", async () => {
    const find = vi.fn();
    installBehaviors({ contributorExtension: { find } });
    const item = new ContributorExtensionListItem(
      buildContributorExtensionListItemData({ id: "e-2" }),
    );

    const common = await item.getCommon();

    expect(common).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("findCommon on an already-common model returns itself without re-fetching", async () => {
    const find = vi.fn();
    installBehaviors({ contributorExtension: { find } });
    const detailed = new ContributorExtensionDetailed(
      buildContributorExtensionData({ id: "e-3" }),
    );

    const common = await detailed.findCommon();

    expect(common).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("absent optional source data", () => {
  test("omits the logo, fragments and external frontends when the source has none", () => {
    const extension = new ContributorExtensionDetailed(
      buildContributorExtensionData({ logoRefId: undefined }),
    );

    expect(extension.logo).toBeUndefined();
    expect(extension.deprecation).toBeUndefined();
    expect(extension.deletionDeadline).toBeUndefined();
    expect(extension.frontendFragments).toEqual([]);
    expect(extension.externalFrontends).toEqual([]);
    expect(
      extension.findFrontendFragment(
        "/projects/project/menu/section/extensions/item",
      ),
    ).toBeUndefined();
  });
});
