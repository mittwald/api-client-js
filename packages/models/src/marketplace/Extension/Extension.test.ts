import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildExtensionListItemData } from "../../testing/builders/buildExtensionListItemData.js";
import { buildExtensionData } from "../../testing/builders/buildExtensionData.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { AggregateMetaData, LocalizedText } from "../../common/index.js";
import { ListQueryModel, ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function"
      ? (type as { name?: string }).name
      : undefined,
}));

import {
  ExtensionListQuery,
  ExtensionDetailed,
  ExtensionListItem,
  ExtensionCommon,
  ExtensionList,
  Extension,
} from "./Extension.js";

afterEach(resetBehaviors);

describe("reference and delegation", () => {
  test("find delegates and materializes a detailed extension", async () => {
    const find = vi.fn().mockResolvedValue(buildExtensionData({ id: "e-1" }));
    installBehaviors({ extension: { find } });

    const extension = await Extension.find("e-1");

    expect(find).toHaveBeenCalledWith("e-1");
    expect(extension).toBeInstanceOf(ExtensionDetailed);
    expect(extension?.id).toBe("e-1");
  });

  test("find returns undefined when the behavior does", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ extension: { find } });

    await expect(Extension.find("missing")).resolves.toBeUndefined();
  });

  test("get returns a found detailed extension", async () => {
    installBehaviors({
      extension: {
        find: vi.fn().mockResolvedValue(buildExtensionData({ id: "e-1" })),
      },
    });

    const extension = await Extension.get("e-1");

    expect(extension).toBeInstanceOf(ExtensionDetailed);
    expect(extension.id).toBe("e-1");
  });
});

describe("get on a missing extension", () => {
  test("throws ObjectNotFoundError", async () => {
    installBehaviors({ extension: { find: vi.fn().mockResolvedValue(undefined) } });

    await expect(Extension.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });
});

test("exposes data and derived values", () => {
  const extension = new ExtensionDetailed(
    buildExtensionData({
      assets: [
        { assetType: "image", id: "asset-2", index: 2 },
        { assetType: "image", id: "asset-1", index: 1 },
      ],
      contributorId: "c-1",
      logoRefId: "logo-1",
    }),
  );

  expect(extension.name).toBe("Test Extension");
  expect(extension.context).toBe("project");
  expect(extension.contributor.id).toBe("c-1");
  expect(extension.logo?.id).toBe("logo-1");
  expect(extension.assets.map(({ id }) => id)).toEqual(["asset-1", "asset-2"]);
  expect(extension.amountOfInstances).toBe(3);
  expect(extension.subTitle).toBeInstanceOf(LocalizedText);
  expect(extension.subTitle.getText()).toBe("Untertitel");
  expect(extension.createdAt?.year).toBe(2024);
});

describe("list query", () => {
  test("passes the query through and materializes list items", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildExtensionListItemData()],
      totalCount: 7,
    });
    installBehaviors({ extension: { list } });

    const result = await Extension.query().execute();

    expect(list).toHaveBeenCalledWith({});
    expect(result).toBeInstanceOf(ExtensionList);
    expect(result.items[0]).toBeInstanceOf(ExtensionListItem);
    expect(result.totalCount).toBe(7);
  });

  test("preserves an explicit limit", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ extension: { list } });

    await Extension.query({ limit: 5 }).execute();

    expect(list).toHaveBeenCalledWith(expect.objectContaining({ limit: 5 }));
  });

  test("getTotalCount returns the behavior total", async () => {
    installBehaviors({
      extension: {
        list: vi.fn().mockResolvedValue({ totalCount: 12, items: [] }),
      },
    });

    await expect(Extension.query().getTotalCount()).resolves.toBe(12);
  });
});

test("preserves ghostmaker identity chains", async () => {
  const item = new ExtensionListItem(buildExtensionListItemData());
  expect(item).toBeInstanceOf(ExtensionListItem);
  expect(item).toBeInstanceOf(ExtensionCommon);
  expect(item).toBeInstanceOf(Extension);
  expect(item).toBeInstanceOf(ReferenceModel);
  expect(item.data).toBeDefined();

  installBehaviors({
    extension: { list: vi.fn().mockResolvedValue({ totalCount: 0, items: [] }) },
  });
  const result = await Extension.query().execute();
  expect(result).toBeInstanceOf(ExtensionList);
  expect(result).toBeInstanceOf(ExtensionListQuery);
  expect(result).toBeInstanceOf(ListQueryModel);
  expect(result.items).toBeDefined();
});
describe("common variant and idempotency", () => {
  test("findCommon delegates to the detailed variant from a bare reference", async () => {
    const find = vi.fn().mockResolvedValue(buildExtensionData({ id: "e-1" }));
    installBehaviors({ extension: { find } });

    const common = await Extension.ofId("e-1").findCommon();

    expect(find).toHaveBeenCalledWith("e-1");
    expect(common).toBeInstanceOf(ExtensionCommon);
    expect(common?.id).toBe("e-1");
  });

  test("findCommon returns undefined when the behavior finds nothing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ extension: { find } });

    await expect(
      Extension.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon delegates and throws when the extension is missing", async () => {
    installBehaviors({
      extension: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Extension.ofId("missing").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("getCommon on an already-common model returns itself without re-fetching", async () => {
    const find = vi.fn();
    installBehaviors({ extension: { find } });
    const item = new ExtensionListItem(buildExtensionListItemData({ id: "e-2" }));

    const common = await item.getCommon();

    expect(common).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("findCommon on an already-common model returns itself without re-fetching", async () => {
    const find = vi.fn();
    installBehaviors({ extension: { find } });
    const detailed = new ExtensionDetailed(buildExtensionData({ id: "e-3" }));

    const common = await detailed.findCommon();

    expect(common).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("aggregate metadata wiring", () => {
  test("pins the extension aggregate identity", () => {
    expect(Extension.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Extension.aggregateMetaData.domain).toBe("extension");
    expect(Extension.aggregateMetaData.aggregate).toBe("extension");
  });
});

describe("absent optional source data", () => {
  test("omits the logo, description, fragments and external frontends when the source has none", () => {
    const extension = new ExtensionDetailed(
      buildExtensionData({ description: undefined, logoRefId: undefined }),
    );

    expect(extension.logo).toBeUndefined();
    expect(extension.description).toBeUndefined();
    expect(extension.frontendFragments).toEqual([]);
    expect(extension.externalFrontends).toEqual([]);
    expect(
      extension.findFrontendFragment("/projects/project/menu/section/extensions/item"),
    ).toBeUndefined();
  });
});
