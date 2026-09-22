import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

import type { ExtensionInstanceCreateRequestData } from "./types.js";

import { buildExtensionInstanceListItemData } from "../../testing/builders/buildExtensionInstanceListItemData.js";
import { buildExtensionInstanceData } from "../../testing/builders/buildExtensionInstanceData.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { AggregateMetaData } from "../../common/index.js";
import { ReferenceModel } from "../../base/index.js";
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

import { ExtensionInstanceContract } from "./ExtensionInstanceContract.js";
import { ExtensionInstanceContext } from "./ExtensionInstanceContext.js";
import {
  ExtensionInstanceListQuery,
  ExtensionInstanceDetailed,
  ExtensionInstanceListItem,
  ExtensionInstanceCommon,
  ExtensionInstanceList,
  ExtensionInstance,
} from "./ExtensionInstance.js";

afterEach(resetBehaviors);

describe("reference and delegation", () => {
  test("ofId creates its contract reference", () => {
    const instance = ExtensionInstance.ofId("i-1");

    expect(instance.id).toBe("i-1");
    expect(instance.contract).toBeInstanceOf(ExtensionInstanceContract);
    expect(instance.contract.id).toBe("i-1");
  });

  test("find delegates and materializes a detailed instance", async () => {
    const find = vi.fn().mockResolvedValue(
      buildExtensionInstanceData({ id: "i-1" }),
    );
    installBehaviors({ extensionInstance: { find } });

    const instance = await ExtensionInstance.find("i-1");

    expect(find).toHaveBeenCalledWith("i-1");
    expect(instance).toBeInstanceOf(ExtensionInstanceDetailed);
    expect(instance?.id).toBe("i-1");
  });

  test("find returns undefined when the behavior does", async () => {
    installBehaviors({
      extensionInstance: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(ExtensionInstance.find("missing")).resolves.toBeUndefined();
  });
});

test("create delegates and returns a reference", async () => {
  const create = vi.fn().mockResolvedValue({ id: "i-9" });
  installBehaviors({ extensionInstance: { create } });
  const data = {
    extensionId: "extension-id",
    contextId: "project-id",
    consentedScopes: [],
    context: "project",
  } satisfies ExtensionInstanceCreateRequestData;

  const instance = await ExtensionInstance.create(data);

  expect(create).toHaveBeenCalledWith(data);
  expect(instance).toBeInstanceOf(ExtensionInstance);
  expect(instance.id).toBe("i-9");
});

test("findAggregate materializes metadata only for an id", () => {
  expect(ExtensionInstance.findAggregate("i-1")).toEqual({
    id: "i-1",
    ...ExtensionInstance.aggregateMetaData,
  });
  expect(ExtensionInstance.findAggregate(undefined)).toBeUndefined();
});

test("exposes data and derived values for a project context", () => {
  const instance = new ExtensionInstanceDetailed(
    buildExtensionInstanceData({
      createdAt: "2024-01-01T00:00:00.000Z",
      consentedScopes: ["scope:read"],
      variantKey: "variant-1",
    }),
  );

  expect(instance.extension.id).toBe("extension-id");
  expect(instance.extensionName).toBe("Test Extension");
  expect(instance.consentedScopes).toEqual(["scope:read"]);
  expect(instance.context).toBeInstanceOf(ExtensionInstanceContext);
  expect(instance.context.type).toBe("project");
  expect(instance.context.project?.id).toBe("project-id");
  expect(instance.isOwnExtension).toBe(true);
  expect(instance.pricePlanVariant?.key).toBe("variant-1");
  expect(instance.pricePlanVariant?.id).toBe("extension-id::variant-1");
  expect(instance.createdAtInSeconds).toBeTypeOf("number");
});

test("supports customer context and an absent price plan variant", () => {
  const instance = new ExtensionInstanceDetailed(
    buildExtensionInstanceData({
      aggregateReference: {
        aggregate: "customer",
        domain: "customer",
        id: "customer-id",
      },
      variantKey: undefined,
    }),
  );

  expect(instance.context.type).toBe("customer");
  expect(instance.context.customer?.id).toBe("customer-id");
  expect(instance.pricePlanVariant).toBeUndefined();
});

test("base query materializes a paginated list", async () => {
  const list = vi.fn().mockResolvedValue({
    items: [buildExtensionInstanceListItemData()],
    totalCount: 1,
  });
  installBehaviors({ extensionInstance: { list } });

  const result = await ExtensionInstance.query().execute();

  expect(list).toHaveBeenCalledWith(expect.any(Object));
  expect(result).toBeInstanceOf(ExtensionInstanceList);
  expect(result).toBeInstanceOf(ExtensionInstanceListQuery);
  expect(result.items).toHaveLength(1);
  expect(result.items[0]).toBeInstanceOf(ExtensionInstanceListItem);
  expect(result.totalCount).toBe(1);
});

test("preserves ghostmaker identity chains", () => {
  const item = new ExtensionInstanceListItem(
    buildExtensionInstanceListItemData(),
  );

  expect(item).toBeInstanceOf(ExtensionInstanceListItem);
  expect(item).toBeInstanceOf(ExtensionInstance);
  expect(item).toBeInstanceOf(ReferenceModel);
  expect(item.data).toBeDefined();
});

describe("get on a missing extension instance", () => {
  test("throws ObjectNotFoundError", async () => {
    installBehaviors({
      extensionInstance: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(ExtensionInstance.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });
});
describe("common variant and idempotency", () => {
  test("findCommon delegates to the detailed variant from a bare reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildExtensionInstanceData({ id: "i-1" }));
    installBehaviors({ extensionInstance: { find } });

    const common = await ExtensionInstance.ofId("i-1").findCommon();

    expect(find).toHaveBeenCalledWith("i-1");
    expect(common).toBeInstanceOf(ExtensionInstanceCommon);
    expect(common?.id).toBe("i-1");
  });

  test("findCommon returns undefined when the behavior finds nothing", async () => {
    installBehaviors({
      extensionInstance: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ExtensionInstance.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon delegates and throws when the instance is missing", async () => {
    installBehaviors({
      extensionInstance: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ExtensionInstance.ofId("missing").getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("getCommon on an already-common model returns itself without re-fetching", async () => {
    const find = vi.fn();
    installBehaviors({ extensionInstance: { find } });
    const item = new ExtensionInstanceListItem(
      buildExtensionInstanceListItemData({ id: "i-2" }),
    );

    const common = await item.getCommon();

    expect(common).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("findCommon on an already-common model returns itself without re-fetching", async () => {
    const find = vi.fn();
    installBehaviors({ extensionInstance: { find } });
    const detailed = new ExtensionInstanceDetailed(
      buildExtensionInstanceData({ id: "i-3" }),
    );

    const common = await detailed.findCommon();

    expect(common).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("aggregate metadata wiring", () => {
  test("pins the extension instance aggregate identity", () => {
    expect(ExtensionInstance.aggregateMetaData).toBeInstanceOf(
      AggregateMetaData,
    );
    expect(ExtensionInstance.aggregateMetaData.domain).toBe("extension");
    expect(ExtensionInstance.aggregateMetaData.aggregate).toBe(
      "extensionInstance",
    );
  });
});

describe("absent optional source data", () => {
  test("omits the derived optionals when the source has none", () => {
    const instance = new ExtensionInstanceDetailed(
      buildExtensionInstanceData({
        extensionDeletionDeadline: undefined,
        extensionSubTitle: undefined,
        variantKey: undefined,
        createdAt: undefined,
      }),
    );

    expect(instance.extensionSubTitle).toBeUndefined();
    expect(instance.createdAtInSeconds).toBeUndefined();
    expect(instance.extensionDeletionDeadline).toBeUndefined();
    expect(instance.pricePlanVariant).toBeUndefined();
    expect(instance.frontendFragments).toEqual([]);
    expect(
      instance.findFrontendFragment(
        "/projects/project/menu/section/extensions/item",
      ),
    ).toBeUndefined();
  });
});
