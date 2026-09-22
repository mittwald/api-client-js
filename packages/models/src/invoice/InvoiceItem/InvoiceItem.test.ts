import { afterEach, describe, expect, test } from "vitest";

import { buildInvoiceItemData } from "../../testing/builders/buildInvoiceItemData.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { ServicePeriod } from "./ServicePeriod.js";
import { InvoiceItem } from "./InvoiceItem.js";
import { Invoice } from "../Invoice/index.js";

afterEach(resetBehaviors);

describe("InvoiceItem", () => {
  test("maps its identity and invoice reference", () => {
    const invoice = Invoice.ofId("i-1");
    const item = new InvoiceItem(invoice, buildInvoiceItemData());

    expect(item.id).toBe("item-id");
    expect(item.invoice).toBe(invoice);
  });

  test("maps a service period", () => {
    const item = new InvoiceItem(
      Invoice.ofId("i-1"),
      buildInvoiceItemData({
        servicePeriod: {
          start: "2024-01-01T00:00:00.000Z",
          end: "2024-03-01T00:00:00.000Z",
        },
      }),
    );

    expect(item.servicePeriod).toBeInstanceOf(ServicePeriod);
    expect(item.servicePeriod?.start.toMillis()).toBe(
      Date.parse("2024-01-01T00:00:00.000Z"),
    );
    expect(item.servicePeriod?.end.toMillis()).toBe(
      Date.parse("2024-03-01T00:00:00.000Z"),
    );
    expect(item.servicePeriod?.interval.isValid).toBe(true);
    expect(item.servicePeriod?.possibleStartDates.length).toBeGreaterThan(0);
    expect(item.servicePeriod?.possibleEndDates.length).toBeGreaterThan(0);
  });

  test("leaves an absent service period undefined", () => {
    const item = new InvoiceItem(Invoice.ofId("i-1"), buildInvoiceItemData());

    expect(item.servicePeriod).toBeUndefined();
  });

  test("maps a service date and leaves an absent one undefined", () => {
    const present = new InvoiceItem(
      Invoice.ofId("i-1"),
      buildInvoiceItemData({ serviceDate: "2024-02-03T00:00:00.000Z" }),
    );
    const absent = new InvoiceItem(Invoice.ofId("i-1"), buildInvoiceItemData());

    expect(present.serviceDate?.toMillis()).toBe(
      Date.parse("2024-02-03T00:00:00.000Z"),
    );
    expect(absent.serviceDate).toBeUndefined();
  });
});
