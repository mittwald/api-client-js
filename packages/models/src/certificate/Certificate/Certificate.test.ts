import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildCertificateCheckReplaceResponseData } from "../../testing/builders/buildCertificateCheckReplaceResponseData";
import { CertificateCheckReplaceResponse } from "../CertificateCheckReplaceResponse";
import { buildCertificateData } from "../../testing/builders/buildCertificateData";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import { AggregateMetaData } from "../../common";
import { ReferenceModel } from "../../base";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import {
  CertificateDetailed,
  CertificateListItem,
  CertificateCommon,
  CertificateList,
  Certificate,
} from "./Certificate";

afterEach(resetBehaviors);

describe("Certificate", () => {
  test("aggregateMetaData carries the ssl/certificate identity", () => {
    expect(Certificate.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Certificate.aggregateMetaData.domain).toBe("ssl");
    expect(Certificate.aggregateMetaData.aggregate).toBe("certificate");
  });

  test("findCommon delegates to a detailed variant for a reference", async () => {
    const find = vi.fn().mockResolvedValue(buildCertificateData({ id: "c-1" }));
    installBehaviors({ certificate: { find } });

    const common = await Certificate.ofId("c-1").findCommon();

    expect(common).toBeInstanceOf(CertificateCommon);
    expect(find).toHaveBeenCalledWith("c-1");
  });

  test("getCommon throws for a missing reference", async () => {
    installBehaviors({
      certificate: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Certificate.ofId("c-1").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("getCommon/findCommon are idempotent on materialized models", async () => {
    const find = vi.fn();
    installBehaviors({ certificate: { find } });
    const detailed = new CertificateDetailed(buildCertificateData());
    const item = new CertificateListItem(buildCertificateData());

    expect(await detailed.getCommon()).toBe(detailed);
    expect(await detailed.findCommon()).toBe(detailed);
    expect(await item.getCommon()).toBe(item);
    expect(await item.findCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("omits optional status and validity data when absent", () => {
    const certificate = new CertificateDetailed(buildCertificateData());

    expect(certificate.getStatus()).toBeUndefined();
    expect(certificate.certificateOrder).toBeUndefined();
    expect(certificate.validTo).toBeUndefined();
  });

  test("find delegates and returns a detailed certificate", async () => {
    const find = vi.fn().mockResolvedValue(buildCertificateData({ id: "c-1" }));
    installBehaviors({ certificate: { find } });

    const result = await Certificate.find("c-1");

    expect(find).toHaveBeenCalledWith("c-1");
    expect(result).toBeInstanceOf(CertificateDetailed);
    expect(result?.id).toBe("c-1");
  });

  test("find returns undefined when the certificate is missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ certificate: { find } });

    expect(await Certificate.find("missing")).toBeUndefined();
  });

  test("get returns a detailed certificate when found", async () => {
    const find = vi.fn().mockResolvedValue(buildCertificateData({ id: "c-2" }));
    installBehaviors({ certificate: { find } });

    const result = await Certificate.get("c-2");

    expect(result).toBeInstanceOf(CertificateDetailed);
    expect(result.id).toBe("c-2");
  });

  test("get throws ObjectNotFoundError when missing", async () => {
    installBehaviors({
      certificate: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Certificate.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("ofId creates a certificate reference", () => {
    const certificate = Certificate.ofId("c-ref");

    expect(certificate).toBeInstanceOf(Certificate);
    expect(certificate.id).toBe("c-ref");
  });

  test("exposes names and hostname compatibility", () => {
    const exact = new CertificateDetailed(
      buildCertificateData({
        dnsNames: ["api.example.com"],
        commonName: "example.com",
      }),
    );
    const wildcard = new CertificateDetailed(
      buildCertificateData({ commonName: "*.example.com", dnsNames: [] }),
    );
    const dnsFallback = new CertificateDetailed(
      buildCertificateData({
        dnsNames: ["fallback.example.com"],
        commonName: undefined,
      }),
    );
    const empty = new CertificateDetailed(
      buildCertificateData({ commonName: undefined, dnsNames: undefined }),
    );

    expect(exact.displayName).toBe("example.com");
    expect(exact.dnsNames).toEqual(["api.example.com"]);
    expect(dnsFallback.displayName).toBe("fallback.example.com");
    expect(empty.displayName).toBe("");
    expect(wildcard.isWildcard()).toBe(true);
    expect(exact.isCompatibleWithHostname("example.com")).toBe(true);
    expect(wildcard.isCompatibleWithHostname("www.example.com")).toBe(true);
    expect(wildcard.isCompatibleWithHostname("unrelated.test")).toBe(false);
  });

  test("query delegates and materializes a certificate list", async () => {
    const query = vi.fn().mockResolvedValue({
      items: [buildCertificateData({ id: "c-list" })],
      totalCount: 4,
    });
    installBehaviors({ certificate: { query } });

    const result = await Certificate.query().execute();

    expect(query).toHaveBeenCalledWith({ projectId: undefined });
    expect(result).toBeInstanceOf(CertificateList);
    expect(result.items[0]).toBeInstanceOf(CertificateListItem);
    expect(result.items[0]?.id).toBe("c-list");
    expect(result.totalCount).toBe(4);
  });

  test("checkReplace delegates and materializes the response", async () => {
    const checkReplace = vi
      .fn()
      .mockResolvedValue(buildCertificateCheckReplaceResponseData());
    installBehaviors({ certificate: { checkReplace } });

    const result = await Certificate.ofId("c-1").checkReplace(
      "certificate",
      "private-key",
      "ca",
    );

    expect(checkReplace).toHaveBeenCalledWith(
      "c-1",
      "certificate",
      "private-key",
      "ca",
    );
    expect(result).toBeInstanceOf(CertificateCheckReplaceResponse);
  });

  test("preserves the list item identity chain", () => {
    const item = new CertificateListItem(buildCertificateData());

    expect(item).toBeInstanceOf(CertificateListItem);
    expect(item).toBeInstanceOf(CertificateCommon);
    expect(item).toBeInstanceOf(Certificate);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });
});
