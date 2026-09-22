import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import type { ContractData } from "../../contract/Contract/types.js";

import { buildLicenseData } from "../../testing/builders/buildLicenseData.js";
import { ObjectNotFoundError } from "../../errors/ObjectNotFoundError.js";
import { ContractDetailed } from "../../contract/index.js";
import { AggregateMetaData } from "../../common/index.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";
import {
  LicenseListQuery,
  LicenseDetailed,
  LicenseListItem,
  LicenseList,
  License,
} from "./License.js";

afterEach(resetBehaviors);

describe("License", () => {
  test("find delegates and maps missing licenses", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildLicenseData({ id: "l-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ license: { find } });

    await expect(License.find("l-1")).resolves.toBeInstanceOf(LicenseDetailed);
    await expect(License.find("missing")).resolves.toBeUndefined();
    expect(find).toHaveBeenNthCalledWith(1, "l-1");
  });

  test("get throws for a missing license", async () => {
    installBehaviors({
      license: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(License.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon materialize a reference via the behavior", async () => {
    const find = vi.fn().mockResolvedValue(buildLicenseData({ id: "l-1" }));
    installBehaviors({ license: { find } });
    const reference = License.ofId("l-1");

    await expect(reference.findCommon()).resolves.toBeInstanceOf(
      LicenseDetailed,
    );
    await expect(reference.getCommon()).resolves.toBeInstanceOf(
      LicenseDetailed,
    );
    expect(find).toHaveBeenCalledWith("l-1");
  });

  test("findCommon resolves undefined and getCommon throws when missing", async () => {
    installBehaviors({
      license: { find: vi.fn().mockResolvedValue(undefined) },
    });
    const reference = License.ofId("missing");

    await expect(reference.findCommon()).resolves.toBeUndefined();
    await expect(reference.getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon are idempotent for materialized licenses", async () => {
    const find = vi.fn();
    installBehaviors({ license: { find } });
    const detailed = new LicenseDetailed(buildLicenseData({ id: "l-1" }));
    const listItem = new LicenseListItem(buildLicenseData({ id: "l-2" }));

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    await expect(listItem.findCommon()).resolves.toBe(listItem);
    await expect(listItem.getCommon()).resolves.toBe(listItem);
    expect(find).not.toHaveBeenCalled();
  });

  test("pins the aggregate metadata identity for cache invalidation", () => {
    expect(License.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(License.aggregateMetaData).toMatchObject({
      aggregate: "licence",
      domain: "licence",
    });
  });

  test("rotateKey delegates", async () => {
    const rotateKey = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ license: { rotateKey } });

    await License.ofId("l-1").rotateKey();

    expect(rotateKey).toHaveBeenCalledWith("l-1");
  });

  test("getContract materializes a detailed contract", async () => {
    const contractData: ContractData = {
      baseItem: {
        totalPrice: { currency: "EUR", value: 10 },
        description: "Project contract",
        contractPeriod: 12,
        isActivated: true,
        isBaseItem: true,
        itemId: "item-1",
        articles: [],
      },
      contractNumber: "contract-number-1",
      contractId: "contract-1",
      customerId: "customer-1",
      additionalItems: [],
    };
    const getContract = vi.fn().mockResolvedValue(contractData);
    installBehaviors({ license: { getContract } });

    const result = await License.ofId("l-1").getContract();

    expect(getContract).toHaveBeenCalledWith("l-1");
    expect(result).toBeInstanceOf(ContractDetailed);
  });

  test("exposes derived license details", () => {
    const detailed = new LicenseDetailed(
      buildLicenseData({ kind: "typo3-elts", description: "d" }),
    );
    const external = new LicenseDetailed(
      buildLicenseData({ keyReference: { externalKey: "external" } }),
    );

    expect(detailed).toMatchObject({
      kind: "typo3-elts",
      key: "secret-key",
      description: "d",
      meta: {},
    });
    expect(detailed.aggregateReference).toBeInstanceOf(Project);
    expect(detailed.aggregateReference.id).toBe("project-id");
    expect(external.key).toBe("");
  });

  test("query delegates and preserves pagination", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildLicenseData({ id: "l-1" })],
      totalCount: 1,
    });
    installBehaviors({ license: { list } });
    const query = License.query(Project.ofId("p-1"));

    const result = await query.execute();

    expect(result).toBeInstanceOf(LicenseList);
    expect(result).toBeInstanceOf(LicenseListQuery);
    expect(result.items[0]).toBeInstanceOf(LicenseListItem);
    expect(result.totalCount).toBe(1);
    expect(list).toHaveBeenCalledWith("p-1", {});
  });

  test("preserves ghostmaker composition chains", () => {
    for (const license of [
      new LicenseListItem(buildLicenseData()),
      new LicenseDetailed(buildLicenseData()),
    ]) {
      expect(license).toBeInstanceOf(License);
      expect(license).toBeInstanceOf(ReferenceModel);
      expect(license.data).toBeDefined();
    }
  });
});
