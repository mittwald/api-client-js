import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildTlsCertificateData } from "../../testing/builders/buildTlsCertificateData.js";
import { buildIngressData } from "../../testing/builders/buildIngressData.js";
import { buildTlsAcmeData } from "../../testing/builders/buildTlsAcmeData.js";
import { AggregateMetaData } from "../../common/index.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";
import {
  IngressDetailed,
  IngressListItem,
  IngressCommon,
  IngressList,
  Ingress,
} from "./Ingress.js";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (t: unknown) =>
    typeof t === "function" ? (t as { name?: string }).name : undefined,
}));

afterEach(resetBehaviors);

describe("Ingress", () => {
  test("aggregateMetaData carries the ingress/ingress identity", () => {
    expect(Ingress.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Ingress.aggregateMetaData.domain).toBe("ingress");
    expect(Ingress.aggregateMetaData.aggregate).toBe("ingress");
  });

  test("findCommon delegates to a detailed variant for a reference", async () => {
    const find = vi.fn().mockResolvedValue(buildIngressData({ id: "i-1" }));
    installBehaviors({ ingress: { find } });

    const common = await Ingress.ofId("i-1").findCommon();

    expect(common).toBeInstanceOf(IngressCommon);
    expect(find).toHaveBeenCalledWith("i-1");
  });

  test("getCommon throws for a missing reference", async () => {
    installBehaviors({
      ingress: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Ingress.ofId("i-1").getCommon()).rejects.toThrow();
  });

  test("getCommon/findCommon are idempotent on materialized models", async () => {
    const find = vi.fn();
    installBehaviors({ ingress: { find } });
    const detailed = new IngressDetailed(buildIngressData());
    const item = new IngressListItem(buildIngressData());

    expect(await detailed.getCommon()).toBe(detailed);
    expect(await detailed.findCommon()).toBe(detailed);
    expect(await item.getCommon()).toBe(item);
    expect(await item.findCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("omits optional verification record for unverified ownership", () => {
    const ingress = new IngressListItem(
      buildIngressData({ ownership: { verified: false } }),
    );

    expect(ingress.verificationTxtRecord).toBeUndefined();
    expect(ingress.isVerified).toBe(false);
  });

  test("find delegates and materializes detailed data", async () => {
    const find = vi.fn().mockResolvedValue(buildIngressData({ id: "i-1" }));
    installBehaviors({ ingress: { find } });

    const ingress = await Ingress.find("i-1");

    expect(find).toHaveBeenCalledWith("i-1");
    expect(ingress).toBeInstanceOf(IngressDetailed);
    expect(ingress?.id).toBe("i-1");
  });

  test("find returns undefined when the behavior finds nothing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ ingress: { find } });

    expect(await Ingress.find("missing")).toBeUndefined();
    expect(find).toHaveBeenCalledWith("missing");
  });

  test("get throws when the ingress is missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ ingress: { find } });

    await expect(Ingress.get("missing")).rejects.toThrow();
  });

  test("create delegates and returns an ingress reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "new-ingress" });
    const paths = [{ target: { useDefaultPage: true }, path: "/" }];
    installBehaviors({ ingress: { create } });

    const ingress = await Ingress.create("p-1", "example.com", paths);

    expect(create).toHaveBeenCalledWith("p-1", "example.com", paths);
    expect(ingress).toBeInstanceOf(Ingress);
    expect(ingress.id).toBe("new-ingress");
  });

  test("instance mutations delegate with the ingress id", async () => {
    const deleteIngress = vi.fn().mockResolvedValue(undefined);
    const updatePaths = vi.fn().mockResolvedValue(undefined);
    const verifyOwnership = vi.fn().mockResolvedValue(true);
    const paths = [{ target: { useDefaultPage: true }, path: "/" }];
    installBehaviors({
      ingress: { delete: deleteIngress, verifyOwnership, updatePaths },
    });
    const ingress = Ingress.ofId("i-1");

    await ingress.delete();
    await ingress.updatePaths(paths);
    await expect(ingress.verifyOwnership()).resolves.toBe(true);

    expect(deleteIngress).toHaveBeenCalledWith("i-1");
    expect(updatePaths).toHaveBeenCalledWith("i-1", paths);
    expect(verifyOwnership).toHaveBeenCalledWith("i-1");
  });

  test("query materializes pagination data", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildIngressData({ id: "i-1" })],
      totalCount: 3,
    });
    installBehaviors({ ingress: { list } });

    const result = await Ingress.query({ project: "p-1" }).execute();

    expect(list).toHaveBeenCalledWith({ projectId: "p-1" }, undefined);
    expect(result).toBeInstanceOf(IngressList);
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toBeInstanceOf(IngressListItem);
    expect(result.totalCount).toBe(3);
  });

  test("execute strips the project key and resolves a project reference id", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ ingress: { list } });

    await Ingress.query({ project: Project.ofId("p-2"), limit: 5 }).execute();

    expect(list).toHaveBeenCalledWith(
      { projectId: "p-2", limit: 5 },
      undefined,
    );
  });

  test("exposes derived ingress properties", () => {
    const ingress = new IngressListItem(
      buildIngressData({
        ips: { v4: ["9.9.9.9"], v6: [] },
        hostname: "www.example.com",
        isDefault: true,
      }),
    );

    expect(ingress.baseUrl).toBe("https://www.example.com");
    expect(ingress.hostname).toBe("www.example.com");
    expect(ingress.hostnameWithProtocol).toBe("https://www.example.com");
    expect(ingress.isDefault).toBe(true);
    expect(ingress.isSubdomain).toBe(true);
    expect(ingress.isVerified).toBe(true);
    expect(ingress.ips).toEqual(["9.9.9.9"]);
    expect(ingress.defaultPath.path).toBe("/");
    expect(
      new IngressListItem(buildIngressData({ hostname: "example.com" }))
        .isSubdomain,
    ).toBe(false);
  });

  test("preserves the ghostmaker identity chain", () => {
    const ingress = new IngressListItem(buildIngressData());

    expect(ingress).toBeInstanceOf(IngressListItem);
    expect(ingress).toBeInstanceOf(IngressCommon);
    expect(ingress).toBeInstanceOf(Ingress);
    expect(ingress).toBeInstanceOf(ReferenceModel);
    expect(ingress.data).toBeDefined();
  });
  describe("getTlsAcmeStatus", () => {
    test("returns the ACME status for an enabled ingress", () => {
      const ingress = new IngressListItem(
        buildIngressData({
          tls: buildTlsAcmeData({ isCreated: false, acme: true }),
          isEnabled: true,
        }),
      );

      expect(ingress.getTlsAcmeStatus()).toBe("running");
    });

    test("returns undefined for a disabled ingress", () => {
      const ingress = new IngressListItem(
        buildIngressData({
          tls: buildTlsAcmeData({ isCreated: false, acme: true }),
          isEnabled: false,
        }),
      );

      expect(ingress.getTlsAcmeStatus()).toBeUndefined();
    });

    test("returns undefined for certificate TLS", () => {
      const ingress = new IngressListItem(
        buildIngressData({
          tls: buildTlsCertificateData(),
          isEnabled: true,
        }),
      );

      expect(ingress.getTlsAcmeStatus()).toBeUndefined();
    });
  });
});
