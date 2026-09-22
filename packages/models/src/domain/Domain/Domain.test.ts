import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildDomainListItemData } from "../../testing/builders/buildDomainListItemData";
import { buildDomainDomainData } from "../../testing/builders/buildDomainDomainData";
import { AggregateMetaData } from "../../common";
import { ReferenceModel } from "../../base";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import {
  DomainDetailed,
  DomainListItem,
  DomainCommon,
  DomainList,
  Domain,
} from "./Domain";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? type.name : undefined,
}));

afterEach(resetBehaviors);

describe("Domain aggregate + common variant", () => {
  test("aggregateMetaData carries the domain/domain identity", () => {
    expect(Domain.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Domain.aggregateMetaData.domain).toBe("domain");
    expect(Domain.aggregateMetaData.aggregate).toBe("domain");
  });

  test("findCommon delegates to a detailed variant for a reference", async () => {
    const find = vi.fn().mockResolvedValue(buildDomainDomainData());
    installBehaviors({ domain: { find } });

    const common = await Domain.ofId("d-1").findCommon();

    expect(common).toBeInstanceOf(DomainCommon);
    expect(find).toHaveBeenCalledWith("d-1");
  });

  test("getCommon throws for a missing reference", async () => {
    installBehaviors({
      domain: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Domain.ofId("d-1").getCommon()).rejects.toThrow();
  });

  test("getCommon/findCommon are idempotent on materialized models", async () => {
    const find = vi.fn();
    installBehaviors({ domain: { find } });
    const detailed = new DomainDetailed(buildDomainDomainData());
    const item = new DomainListItem(buildDomainListItemData());

    expect(await detailed.getCommon()).toBe(detailed);
    expect(await detailed.findCommon()).toBe(detailed);
    expect(await item.getCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("omits optional owner/admin data when absent", () => {
    const domain = new DomainDetailed(buildDomainDomainData());

    expect(domain.adminC).toBeUndefined();
    expect(domain.scheduledDeletionDate).toBeUndefined();
  });
});

describe("Domain reference and delegation", () => {
  test("creates a reference", () => {
    const domain = Domain.ofId("d-1");
    expect(domain).toBeInstanceOf(Domain);
    expect(domain).toBeInstanceOf(ReferenceModel);
    expect(domain.id).toBe("d-1");
  });

  test("find materializes detailed data and preserves undefined", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildDomainDomainData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ domain: { find } });

    const found = await Domain.find("domain-id");
    expect(found).toBeInstanceOf(DomainDetailed);
    expect(found).toBeInstanceOf(DomainCommon);
    expect(await Domain.find("missing")).toBeUndefined();
  });

  test("get throws when the domain is missing", async () => {
    installBehaviors({ domain: { find: vi.fn().mockResolvedValue(undefined) } });
    await expect(Domain.get("missing")).rejects.toThrow();
  });

  test("delegates instance operations", async () => {
    const deleteDomain = vi.fn().mockResolvedValue(undefined);
    const updateNameservers = vi.fn().mockResolvedValue(undefined);
    const createAuthCode = vi.fn().mockResolvedValue({
      expirationDate: "2030-01-01T00:00:00.000Z",
      authCode: "abc",
    });
    installBehaviors({
      domain: { delete: deleteDomain, updateNameservers, createAuthCode },
    });
    const domain = Domain.ofId("d-1");

    await domain.delete();
    expect(deleteDomain).toHaveBeenCalledWith("d-1", undefined, undefined);
    await domain.updateNameservers(["ns.example.com"]);
    expect(updateNameservers).toHaveBeenCalledWith("d-1", ["ns.example.com"]);
    const authCode = await domain.createAuthCode();
    expect(authCode.authCode).toBe("abc");
    expect(authCode.expirationDate?.isValid).toBe(true);
  });

  test("delegates static lookups and normalizes suggestions", async () => {
    const getSuggestions = vi.fn().mockResolvedValue(["EXAMPLE.COM"]);
    const response = { registrable: true };
    const checkDomainRegistrable = vi.fn().mockResolvedValue(response);
    installBehaviors({ domain: { checkDomainRegistrable, getSuggestions } });

    await expect(Domain.suggestDomains("x")).resolves.toEqual(["example.com"]);
    await expect(Domain.checkRegistrability("x.com")).resolves.toBe(response);
    expect(checkDomainRegistrable).toHaveBeenCalledWith("x.com");
  });
});

describe("Domain derived values", () => {
  test("derives nameserver and process state", () => {
    const domain = new DomainDetailed(
      buildDomainDomainData({
        processes: [
          {
            lastUpdate: "2024-01-01T00:00:00.000Z",
            processType: "REGISTER",
            transactionId: "t1",
            state: "FAILED",
          },
        ],
        nameservers: ["custom.ns.com", "ns01.agenturserver.de"],
        usesDefaultNameserver: true,
      }),
    );

    expect(domain.getCustomNameservers()).toEqual(["custom.ns.com"]);
    expect(domain.hasMittwaldNameservers()).toBe(true);
    expect(domain.hasProcessOfType("REGISTER")).toBe(true);
    expect(domain.isFailedRegistration()).toBe(true);
    expect(domain.hasProcessState("FAILED")).toBe(true);
  });
});

describe("Domain query", () => {
  test("materializes list behavior results", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildDomainDomainData({ domain: "a.com" })],
      totalCount: 1,
    });
    installBehaviors({ domain: { list } });

    const result = await Domain.query().execute();
    expect(result).toBeInstanceOf(DomainList);
    expect(result.items[0]).toBeInstanceOf(DomainListItem);
    expect(result.items[0]?.domain).toBe("a.com");
    expect(result.totalCount).toBe(1);
  });
});
