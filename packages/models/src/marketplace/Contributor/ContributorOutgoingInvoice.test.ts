import { afterEach, expect, test } from "vitest";

import { ContributorOutgoingInvoice } from "./ContributorOutgoingInvoice";
import {
  buildContributorOnBehalfInvoiceData,
  resetBehaviors,
} from "../../testing";

afterEach(resetBehaviors);

test("derives monetary amounts and the invoice date", () => {
  const data = buildContributorOnBehalfInvoiceData({
    invoiceDate: "2024-05-01",
    totalGross: 11900,
    totalNet: 10000,
  });
  const invoice = new ContributorOutgoingInvoice(data);

  expect(invoice.totalNet.getAmount()).toBe(10000);
  expect(invoice.totalNet.getCurrency()).toBe("EUR");
  expect(invoice.totalGross.getAmount()).toBe(11900);
  expect(invoice.totalGross.getCurrency()).toBe("EUR");
  expect(invoice.date.year).toBe(2024);
  expect(invoice.date.month).toBe(5);
  expect(invoice.date.day).toBe(1);
});
