import { afterEach, describe, expect, test, vi } from "vitest";

import { buildExternalCertificateOrderPreviewData } from "../../../testing/builders/buildExternalCertificateOrderPreviewData.js";
import { buildMailArchiveOrderPreviewData } from "../../../testing/builders/buildMailArchiveOrderPreviewData.js";
import { buildLeadFyndrOrderPreviewData } from "../../../testing/builders/buildLeadFyndrOrderPreviewData.js";
import { buildHostingOrderPreviewData } from "../../../testing/builders/buildHostingOrderPreviewData.js";
import { buildLicenseOrderPreviewData } from "../../../testing/builders/buildLicenseOrderPreviewData.js";
import { buildDomainOrderPreviewData } from "../../../testing/builders/buildDomainOrderPreviewData.js";
import { ExternalCertificateOrderPreview } from "../Preview/ExternalCertificateOrderPreview.js";
import { ExternalCertificateOrderRequest } from "./ExternalCertificateOrderRequest.js";
import { MailArchiveOrderPreview } from "../Preview/MailArchiveOrderPreview.js";
import { AIHostingOrderPreview } from "../Preview/AIHostingOrderPreview.js";
import { LeadFyndrOrderPreview } from "../Preview/LeadFyndrOrderPreview.js";
import { WebhostingArticle } from "../../../article/Article/internal.js";
import { HostingOrderPreview } from "../Preview/HostingOrderPreview.js";
import { LicenseOrderPreview } from "../Preview/LicenseOrderPreview.js";
import { MailArchiveOrderRequest } from "./MailArchiveOrderRequest.js";
import { DomainOrderPreview } from "../Preview/DomainOrderPreview.js";
import { AIHostingOrderRequest } from "./AIHostingOrderRequest.js";
import { LeadFyndrOrderRequest } from "./LeadFyndrOrderRequest.js";
import { HostingOrderRequest } from "./HostingOrderRequest.js";
import { LicenseOrderRequest } from "./LicenseOrderRequest.js";
import { DomainOrderRequest } from "./DomainOrderRequest.js";
import {
  buildArticleAttributeData,
  buildArticleTemplateData,
  buildArticleData,
} from "../../../testing/builders/buildArticleData.js";
import { Contract } from "../../../contract/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../../testing/installBehaviors.js";
import { Bytes } from "../../../common/index.js";
import { Order } from "../Order.js";

afterEach(resetBehaviors);

describe("DomainOrderRequest", () => {
  test("exposes construction data and delegates preview creation", async () => {
    const preview = vi.fn().mockResolvedValue(buildDomainOrderPreviewData());
    installBehaviors({ order: { preview } });
    const request = DomainOrderRequest.create({
      domain: "example.com",
      authCode: "abc",
      project: "p-1",
    });

    const result = await request.getPreview();

    expect(request.domain).toBe("example.com");
    expect(request.authCode).toBe("abc");
    expect(preview).toHaveBeenCalledWith(
      expect.objectContaining({
        orderData: expect.objectContaining({
          domain: "example.com",
          projectId: "p-1",
        }),
        orderType: "domain",
      }),
    );
    expect(result).toBeInstanceOf(DomainOrderPreview);
  });
});

describe("ExternalCertificateOrderRequest", () => {
  test("delegates preview creation", async () => {
    const preview = vi
      .fn()
      .mockResolvedValue(buildExternalCertificateOrderPreviewData());
    installBehaviors({ order: { preview } });
    const request = ExternalCertificateOrderRequest.create({
      certificateRequestId: "cr-1",
      project: "p-1",
    });

    const result = await request.getPreview();

    expect(preview).toHaveBeenCalledWith(
      expect.objectContaining({
        orderData: expect.objectContaining({ projectId: "p-1" }),
        orderType: "externalCertificate",
      }),
    );
    expect(result).toBeInstanceOf(ExternalCertificateOrderPreview);
  });
});

describe("LicenseOrderRequest", () => {
  test("delegates preview creation", async () => {
    const preview = vi.fn().mockResolvedValue(buildLicenseOrderPreviewData());
    installBehaviors({ order: { preview } });
    const request = new LicenseOrderRequest({
      licenseType: "typo3",
      majorVersion: 12,
    });

    const result = await request.getPreview();

    expect(preview).toHaveBeenCalledWith(
      expect.objectContaining({ orderType: "license" }),
    );
    expect(result).toBeInstanceOf(LicenseOrderPreview);
  });

  test("delegates ordering and returns an order reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "new-order" });
    installBehaviors({ order: { create } });
    const request = new LicenseOrderRequest({
      licenseType: "typo3",
      majorVersion: 12,
    });

    const result = await request.order({ description: "d", projectId: "p-1" });

    expect(create).toHaveBeenCalledWith(
      expect.objectContaining({ orderType: "license" }),
    );
    expect(result).toBeInstanceOf(Order);
    expect(result.id).toBe("new-order");
  });
});

describe("LeadFyndrOrderRequest", () => {
  test("delegates preview creation", async () => {
    const preview = vi.fn().mockResolvedValue(buildLeadFyndrOrderPreviewData());
    installBehaviors({ order: { preview } });
    const request = new LeadFyndrOrderRequest({
      reservationLimit: 1,
      unlockLimit: 1,
    });

    const result = await request.getPreview();

    expect(preview).toHaveBeenCalledWith(
      expect.objectContaining({ orderType: "leadFyndr" }),
    );
    expect(result).toBeInstanceOf(LeadFyndrOrderPreview);
  });

  test("delegates ordering and returns an order reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "new-order" });
    installBehaviors({ order: { create } });
    const request = new LeadFyndrOrderRequest({
      reservationLimit: 1,
      unlockLimit: 1,
    });

    const result = await request.order({ customerId: "c-1" });

    expect(create).toHaveBeenCalledWith(
      expect.objectContaining({ orderType: "leadFyndr" }),
    );
    expect(result).toBeInstanceOf(Order);
    expect(result.id).toBe("new-order");
  });
});

describe("MailArchiveOrderRequest", () => {
  test("delegates preview creation with the mail address id", async () => {
    const preview = vi
      .fn()
      .mockResolvedValue(buildMailArchiveOrderPreviewData());
    installBehaviors({ order: { preview } });
    const request = new MailArchiveOrderRequest({ mailAddress: "m-1" });

    const result = await request.getPreview();

    expect(preview).toHaveBeenCalledWith(
      expect.objectContaining({
        orderData: expect.objectContaining({ mailAddressId: "m-1" }),
        orderType: "mailArchive",
      }),
    );
    expect(result).toBeInstanceOf(MailArchiveOrderPreview);
  });
});

describe("AIHostingOrderRequest", () => {
  test("delegates preview creation", async () => {
    const preview = vi.fn().mockResolvedValue({ totalPrice: 100 });
    installBehaviors({ order: { preview } });
    const request = new AIHostingOrderRequest({
      requestsPerMinute: 10,
      monthlyTokens: 1000,
    });

    const result = await request.getPreview();

    expect(preview).toHaveBeenCalledWith(
      expect.objectContaining({ orderType: "aiHosting" }),
    );
    expect(result).toBeInstanceOf(AIHostingOrderPreview);
  });
});

const buildWebhostingArticle = () =>
  new WebhostingArticle(
    buildArticleData({
      attributes: [
        buildArticleAttributeData({ key: "storage", value: "20", unit: "GiB" }),
        buildArticleAttributeData({ unit: "GiB", key: "ram", value: "2" }),
        buildArticleAttributeData({ key: "vcpu", value: "2" }),
      ],
      template: buildArticleTemplateData({ name: "Webhosting" }),
      articleId: "webhosting-1",
    }),
  );

describe("HostingOrderRequest", () => {
  test("clamps storage below the article base up to the base storage", () => {
    const request = HostingOrderRequest.create(
      buildWebhostingArticle(),
      Bytes.of(5, "GiB"),
    );

    expect(request.storage.gib).toBe(20);
  });

  test("keeps storage at or above the article base", () => {
    const request = HostingOrderRequest.create(
      buildWebhostingArticle(),
      Bytes.of(40, "GiB"),
    );

    expect(request.storage.gib).toBe(40);
  });

  test("delegates preview creation without a contract", async () => {
    const preview = vi
      .fn()
      .mockResolvedValue(buildHostingOrderPreviewData({ totalPrice: 500 }));
    installBehaviors({ order: { preview } });
    const request = HostingOrderRequest.create(
      buildWebhostingArticle(),
      Bytes.of(40, "GiB"),
    );

    const result = await request.getPreview();

    expect(preview).toHaveBeenCalledWith({
      orderData: {
        spec: { vcpu: 2, ram: 2 },
        useFreeTrial: undefined,
        diskspaceInGiB: 40,
      },
      orderType: "projectHosting",
    });
    expect(result).toBeInstanceOf(HostingOrderPreview);
    expect(result.totalPrice.getAmount()).toBe(500);
  });

  test("delegates a tariff-change preview when a contract is present", async () => {
    const previewTariffChange = vi
      .fn()
      .mockResolvedValue(buildHostingOrderPreviewData());
    installBehaviors({ order: { previewTariffChange } });
    const request = HostingOrderRequest.create(
      buildWebhostingArticle(),
      Bytes.of(40, "GiB"),
      Contract.ofId("contract-1"),
    );

    const result = await request.getPreview();

    expect(previewTariffChange).toHaveBeenCalledWith({
      tariffChangeData: {
        spec: { vcpu: 2, ram: 2 },
        contractId: "contract-1",
        useFreeTrial: undefined,
        diskspaceInGiB: 40,
      },
      tariffChangeType: "projectHosting",
    });
    expect(result).toBeInstanceOf(HostingOrderPreview);
  });

  test("delegates order creation with customer and description", async () => {
    const create = vi.fn().mockResolvedValue({ id: "order-1" });
    installBehaviors({ order: { create } });
    const request = HostingOrderRequest.create(
      buildWebhostingArticle(),
      Bytes.of(40, "GiB"),
    );

    const result = await request.order({
      description: "My hosting",
      customerId: "c-1",
    });

    expect(create).toHaveBeenCalledWith({
      orderData: {
        description: "My hosting",
        spec: { vcpu: 2, ram: 2 },
        promotionCode: undefined,
        useFreeTrial: undefined,
        diskspaceInGiB: 40,
        customerId: "c-1",
      },
      orderType: "projectHosting",
    });
    expect(result).toBeInstanceOf(Order);
    expect(result.id).toBe("order-1");
  });
});
