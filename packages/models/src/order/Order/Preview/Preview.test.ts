import { afterEach, describe, expect, test } from "vitest";
import { DateTime } from "luxon";

import type { HostingOrderRequest } from "../Request/HostingOrderRequest";

import { buildExternalCertificateOrderPreviewData } from "../../../testing/builders/buildExternalCertificateOrderPreviewData";
import { buildMailArchiveOrderPreviewData } from "../../../testing/builders/buildMailArchiveOrderPreviewData";
import { buildLeadFyndrOrderPreviewData } from "../../../testing/builders/buildLeadFyndrOrderPreviewData";
import { buildHostingOrderPreviewData } from "../../../testing/builders/buildHostingOrderPreviewData";
import { buildLicenseOrderPreviewData } from "../../../testing/builders/buildLicenseOrderPreviewData";
import { buildDomainOrderPreviewData } from "../../../testing/builders/buildDomainOrderPreviewData";
import { ExternalCertificateOrderRequest } from "../Request/ExternalCertificateOrderRequest";
import { ExternalCertificateOrderPreview } from "./ExternalCertificateOrderPreview";
import { MailArchiveOrderRequest } from "../Request/MailArchiveOrderRequest";
import { LeadFyndrOrderRequest } from "../Request/LeadFyndrOrderRequest";
import { LicenseOrderRequest } from "../Request/LicenseOrderRequest";
import { MailArchiveOrderPreview } from "./MailArchiveOrderPreview";
import { resetBehaviors } from "../../../testing/installBehaviors";
import { DomainOrderRequest } from "../Request/DomainOrderRequest";
import { AIHostingOrderPreview } from "./AIHostingOrderPreview";
import { LeadFyndrOrderPreview } from "./LeadFyndrOrderPreview";
import { HostingOrderPreview } from "./HostingOrderPreview";
import { LicenseOrderPreview } from "./LicenseOrderPreview";
import { DomainOrderPreview } from "./DomainOrderPreview";

afterEach(resetBehaviors);

describe("DomainOrderPreview", () => {
  test("exposes prices, duration, and request data", () => {
    const request = DomainOrderRequest.create({
      domain: "example.com",
      authCode: "abc",
      project: "p-1",
    });
    const preview = new DomainOrderPreview(
      request,
      buildDomainOrderPreviewData({
        domainContractDuration: 12,
        domainPrice: 500,
        totalPrice: 700,
        feePrice: 200,
      }),
    );

    expect(preview.domainPrice.getAmount()).toBe(500);
    expect(preview.totalPrice.getAmount()).toBe(700);
    expect(preview.totalPrice.getCurrency()).toBe("EUR");
    expect(preview.feePrice.getAmount()).toBe(200);
    expect(preview.domainContractDuration).toBe(12);
    expect(preview.domain).toBe("example.com");
    expect(preview.authCode).toBe("abc");
  });
});

describe("HostingOrderPreview", () => {
  test("exposes prices and parses the free-trial date", () => {
    const preview = new HostingOrderPreview(
      {} as HostingOrderRequest,
      buildHostingOrderPreviewData({
        freeTrialUntil: "2026-01-01T00:00:00.000Z",
        machineTypePrice: 80,
        storagePrice: 20,
        totalPrice: 100,
      }),
    );

    expect(preview.totalPrice.getAmount()).toBe(100);
    expect(preview.totalPrice.getCurrency()).toBe("EUR");
    expect(preview.storagePrice.getAmount()).toBe(20);
    expect(preview.machineTypePrice.getAmount()).toBe(80);
    expect(DateTime.isDateTime(preview.freeTrialUntil)).toBe(true);
  });

  test("leaves an absent free-trial date undefined", () => {
    const preview = new HostingOrderPreview(
      {} as HostingOrderRequest,
      buildHostingOrderPreviewData({ freeTrialUntil: undefined }),
    );

    expect(preview.freeTrialUntil).toBeUndefined();
  });
});

describe("ExternalCertificateOrderPreview", () => {
  test("exposes its prices", () => {
    const request = ExternalCertificateOrderRequest.create({
      certificateRequestId: "cr-1",
      project: "p-1",
    });
    const preview = new ExternalCertificateOrderPreview(
      request,
      buildExternalCertificateOrderPreviewData({
        recurringPrice: 50,
        totalPrice: 75,
        feePrice: 25,
      }),
    );

    expect(preview.recurringPrice.getAmount()).toBe(50);
    expect(preview.totalPrice.getAmount()).toBe(75);
    expect(preview.totalPrice.getCurrency()).toBe("EUR");
    expect(preview.feePrice.getAmount()).toBe(25);
  });
});

describe("LeadFyndrOrderPreview", () => {
  test("exposes its total price", () => {
    const request = new LeadFyndrOrderRequest({
      reservationLimit: 1,
      unlockLimit: 1,
    });
    const preview = new LeadFyndrOrderPreview(
      request,
      buildLeadFyndrOrderPreviewData({ totalPrice: 100 }),
    );

    expect(preview.totalPrice.getAmount()).toBe(100);
    expect(preview.totalPrice.getCurrency()).toBe("EUR");
  });
});

describe("LicenseOrderPreview", () => {
  test("exposes its total price", () => {
    const request = new LicenseOrderRequest({
      licenseType: "typo3",
      majorVersion: 12,
    });
    const preview = new LicenseOrderPreview(
      request,
      buildLicenseOrderPreviewData({ totalPrice: 120 }),
    );

    expect(preview.totalPrice.getAmount()).toBe(120);
    expect(preview.totalPrice.getCurrency()).toBe("EUR");
  });
});

describe("MailArchiveOrderPreview", () => {
  test("exposes its recurring and fee prices", () => {
    const request = new MailArchiveOrderRequest({ mailAddress: "m-1" });
    const preview = new MailArchiveOrderPreview(
      request,
      buildMailArchiveOrderPreviewData({ recurringPrice: 40, feePrice: 10 }),
    );

    expect(preview.recurringPrice.getAmount()).toBe(40);
    expect(preview.recurringPrice.getCurrency()).toBe("EUR");
    expect(preview.feePrice.getAmount()).toBe(10);
  });
});

describe("AIHostingOrderPreview", () => {
  test("exposes its total price", () => {
    const preview = new AIHostingOrderPreview({} as any, { totalPrice: 250 });

    expect(preview.totalPrice.getAmount()).toBe(250);
  });
});
