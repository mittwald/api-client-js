import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildInvoiceSettingsData } from "../../testing/builders/buildInvoiceSettingsData.js";
import { InvoiceSettingsDetailed, InvoiceSettings } from "./InvoiceSettings.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

afterEach(resetBehaviors);

describe("InvoiceSettings delegation", () => {
  test("find returns detailed invoice settings", async () => {
    const find = vi.fn().mockResolvedValue(buildInvoiceSettingsData());
    installBehaviors({ invoiceSettings: { find } });

    const result = await InvoiceSettings.find("customer-id");

    expect(find).toHaveBeenCalledWith("customer-id", undefined);
    expect(result).toBeInstanceOf(InvoiceSettingsDetailed);
  });

  test("find returns undefined for missing invoice settings", async () => {
    installBehaviors({
      invoiceSettings: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(InvoiceSettings.find("missing")).resolves.toBeUndefined();
  });

  test("update delegates with the customer id", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ invoiceSettings: { update } });
    const data = {
      paymentSettings: { method: "invoice" as const },
      additionalEmailRecipients: [],
      invoicePeriod: 1,
    };

    await InvoiceSettings.ofCustomerId("customer-id").update(data);

    expect(update).toHaveBeenCalledWith("customer-id", data);
  });
});

describe("InvoiceSettings common variant", () => {
  test("findCommon on a reference delegates to find and returns detailed settings", async () => {
    const find = vi.fn().mockResolvedValue(buildInvoiceSettingsData());
    installBehaviors({ invoiceSettings: { find } });

    const result = await InvoiceSettings.ofCustomerId("customer-id").findCommon();

    expect(find).toHaveBeenCalledWith("customer-id", undefined);
    expect(result).toBeInstanceOf(InvoiceSettingsDetailed);
  });

  test("findCommon resolves undefined when the reference is not found", async () => {
    installBehaviors({
      invoiceSettings: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      InvoiceSettings.ofCustomerId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon rejects when the reference is not found", async () => {
    installBehaviors({
      invoiceSettings: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      InvoiceSettings.ofCustomerId("missing").getCommon(),
    ).rejects.toThrow();
  });

  test("findCommon on already materialized settings returns itself without another call", async () => {
    const find = vi.fn();
    installBehaviors({ invoiceSettings: { find } });
    const detailed = new InvoiceSettingsDetailed(buildInvoiceSettingsData());

    const result = await detailed.findCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on already materialized settings returns itself without another call", async () => {
    const find = vi.fn();
    installBehaviors({ invoiceSettings: { find } });
    const detailed = new InvoiceSettingsDetailed(buildInvoiceSettingsData());

    const result = await detailed.getCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("leaves optional derived values undefined when their source data is absent", () => {
    const settings = new InvoiceSettingsDetailed(buildInvoiceSettingsData());

    expect(settings.recipient).toBeUndefined();
    expect(settings.debitPaymentStopUntil).toBeUndefined();
    expect(settings.targetDay).toBeUndefined();
  });
});

describe("InvoiceSettings data", () => {
  test("exposes payment settings", () => {
    const settings = new InvoiceSettingsDetailed(buildInvoiceSettingsData());

    expect(settings.invoicePeriod).toBe(1);
    expect(settings.paymentMethod).toBe("invoice");
    expect(settings.paymentSettings).toEqual({ method: "invoice" });
    expect(settings.additionalEmailRecipients).toEqual([]);
  });

  test("applies defaults for missing optional payment data", () => {
    const settings = new InvoiceSettingsDetailed(
      buildInvoiceSettingsData({
        additionalEmailRecipients: undefined,
        paymentSettings: undefined,
        invoicePeriod: undefined,
      }),
    );

    expect(settings.invoicePeriod).toBe(1);
    expect(settings.paymentSettings).toEqual({ method: "invoice" });
    expect(settings.paymentMethod).toBeUndefined();
    expect(settings.additionalEmailRecipients).toEqual([]);
  });

  test("derives status flags", () => {
    const status = (type: "notReachable" | "bankrupt") => ({
      severity: "error" as const,
      message: "",
      type,
    });

    expect(
      new InvoiceSettingsDetailed(
        buildInvoiceSettingsData({ status: [status("bankrupt")] }),
      ).isBankrupt,
    ).toBe(true);
    expect(
      new InvoiceSettingsDetailed(
        buildInvoiceSettingsData({ status: [status("notReachable")] }),
      ).hasInvalidMail,
    ).toBe(true);
    const clear = new InvoiceSettingsDetailed(buildInvoiceSettingsData());
    expect(clear.isBankrupt).toBe(false);
    expect(clear.hasInvalidMail).toBe(false);
  });

  test("parses the debit payment stop date", () => {
    const settings = new InvoiceSettingsDetailed(
      buildInvoiceSettingsData({
        debitPaymentStopUntil: "2024-04-01T00:00:00.000Z",
      }),
    );

    expect(settings.debitPaymentStopUntil).toBeInstanceOf(DateTime);
  });
});
