import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildCertificateRequestData } from "../../testing/builders/buildCertificateRequestData";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import { ReferenceModel } from "../../base";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import {
  CertificateRequestDetailed,
  CertificateRequestListItem,
  CertificateRequestCommon,
  CertificateRequestList,
  CertificateRequest,
} from "./CertificateRequest";

afterEach(resetBehaviors);

describe("CertificateRequest", () => {
  test("findCommon delegates to a detailed variant for a reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildCertificateRequestData({ id: "cr-1" }));
    installBehaviors({ certificateRequest: { find } });

    const common = await CertificateRequest.ofId("cr-1").findCommon();

    expect(common).toBeInstanceOf(CertificateRequestCommon);
    expect(find).toHaveBeenCalledWith("cr-1");
  });

  test("getCommon throws for a missing reference", async () => {
    installBehaviors({
      certificateRequest: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      CertificateRequest.ofId("cr-1").getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("getCommon/findCommon are idempotent on materialized models", async () => {
    const find = vi.fn();
    installBehaviors({ certificateRequest: { find } });
    const detailed = new CertificateRequestDetailed(
      buildCertificateRequestData(),
    );
    const item = new CertificateRequestListItem(buildCertificateRequestData());

    expect(await detailed.getCommon()).toBe(detailed);
    expect(await detailed.findCommon()).toBe(detailed);
    expect(await item.getCommon()).toBe(item);
    expect(await item.findCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("omits optional request data when absent", () => {
    const request = new CertificateRequestDetailed(
      buildCertificateRequestData({
        commonName: undefined,
        projectId: undefined,
        validFrom: undefined,
        dnsNames: undefined,
        validTo: undefined,
      }),
    );

    expect(request.project).toBeUndefined();
    expect(request.commonName).toBeUndefined();
    expect(request.dnsNames).toEqual([]);
    expect(request.validFrom).toBeUndefined();
    expect(request.validTo).toBeUndefined();
  });

  test("find delegates and returns a detailed request", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildCertificateRequestData({ id: "cr-1" }));
    installBehaviors({ certificateRequest: { find } });

    const result = await CertificateRequest.find("cr-1");

    expect(find).toHaveBeenCalledWith("cr-1");
    expect(result).toBeInstanceOf(CertificateRequestDetailed);
    expect(result?.id).toBe("cr-1");
  });

  test("find returns undefined when the request is missing", async () => {
    installBehaviors({
      certificateRequest: { find: vi.fn().mockResolvedValue(undefined) },
    });

    expect(await CertificateRequest.find("missing")).toBeUndefined();
  });

  test("get throws ObjectNotFoundError when missing", async () => {
    installBehaviors({
      certificateRequest: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(CertificateRequest.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("ofId creates a request reference", () => {
    const request = CertificateRequest.ofId("cr-ref");

    expect(request).toBeInstanceOf(CertificateRequest);
    expect(request.id).toBe("cr-ref");
  });

  test("create delegates and returns a request reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "created-id" });
    installBehaviors({ certificateRequest: { create } });

    const result = await CertificateRequest.create(
      "project-id",
      "certificate",
      "private-key",
      "ca",
    );

    expect(create).toHaveBeenCalledWith(
      "project-id",
      "certificate",
      "private-key",
      "ca",
    );
    expect(result).toBeInstanceOf(CertificateRequest);
    expect(result.id).toBe("created-id");
  });

  test("query delegates and materializes a request list", async () => {
    const query = vi.fn().mockResolvedValue({
      items: [buildCertificateRequestData({ id: "cr-list" })],
      totalCount: 3,
    });
    installBehaviors({ certificateRequest: { query } });

    const result = await CertificateRequest.query().execute();

    expect(query).toHaveBeenCalledWith({ projectId: undefined });
    expect(result).toBeInstanceOf(CertificateRequestList);
    expect(result.items[0]).toBeInstanceOf(CertificateRequestListItem);
    expect(result.items[0]?.id).toBe("cr-list");
    expect(result.totalCount).toBe(3);
  });

  test("exposes common request data", () => {
    const request = new CertificateRequestDetailed(
      buildCertificateRequestData({
        dnsNames: ["one.example.com", "two.example.com"],
        commonName: "cert.example.com",
        isCompleted: true,
      }),
    );

    expect(request.dnsNames).toEqual(["one.example.com", "two.example.com"]);
    expect(request.commonName).toBe("cert.example.com");
    expect(request.isCompleted).toBe(true);
    expect(request.createdAt).toBeInstanceOf(DateTime);
    expect(request.createdAt.isValid).toBe(true);
  });

  test("preserves the list item identity chain", () => {
    const item = new CertificateRequestListItem(buildCertificateRequestData());

    expect(item).toBeInstanceOf(CertificateRequestListItem);
    expect(item).toBeInstanceOf(CertificateRequestCommon);
    expect(item).toBeInstanceOf(CertificateRequest);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });
});
