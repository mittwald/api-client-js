import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildInvoiceItemData } from "../../testing/builders/buildInvoiceItemData";
import { buildInvoiceData } from "../../testing/builders/buildInvoiceData";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import { InvoiceCancellation } from "../InvoiceCancellation";
import { InvoiceItemGroup } from "../InvoiceItemGroup";
import { InvoiceRecipient } from "../InvoiceRecipient";
import { AggregateMetaData } from "../../common";
import { Customer } from "../../customer";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import { File } from "../../file";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import {
  InvoiceListQuery,
  InvoiceDetailed,
  InvoiceListItem,
  InvoiceList,
  Invoice,
} from "./Invoice";

afterEach(resetBehaviors);

describe("Invoice references and delegation", () => {
  test("ofId creates an invoice reference with the given id", () => {
    const invoice = Invoice.ofId("i-1");

    expect(invoice).toBeInstanceOf(Invoice);
    expect(invoice.id).toBe("i-1");
  });

  test("find delegates and materializes present data", async () => {
    const find = vi.fn().mockResolvedValue(buildInvoiceData({ id: "i-1" }));
    installBehaviors({ invoice: { find } });

    const invoice = await Invoice.find("i-1");

    expect(find).toHaveBeenCalledWith("i-1");
    expect(invoice).toBeInstanceOf(InvoiceDetailed);
    expect(invoice?.id).toBe("i-1");
  });

  test("find returns undefined for missing data", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ invoice: { find } });

    await expect(Invoice.find("missing")).resolves.toBeUndefined();
  });

  test("get returns detailed data and throws ObjectNotFoundError when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildInvoiceData({ id: "i-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ invoice: { find } });

    await expect(Invoice.get("i-1")).resolves.toBeInstanceOf(InvoiceDetailed);
    await expect(Invoice.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findDetailed delegates with the reference id", async () => {
    const find = vi.fn().mockResolvedValue(buildInvoiceData({ id: "i-1" }));
    installBehaviors({ invoice: { find } });

    const invoice = await Invoice.ofId("i-1").findDetailed();

    expect(find).toHaveBeenCalledWith("i-1");
    expect(invoice).toBeInstanceOf(InvoiceDetailed);
  });

  test("common instances return themselves from findCommon and getCommon", async () => {
    const find = vi.fn().mockResolvedValue(buildInvoiceData({ id: "i-1" }));
    installBehaviors({ invoice: { find } });
    const invoice = await Invoice.find("i-1");

    await expect(invoice?.findCommon()).resolves.toBe(invoice);
    await expect(invoice?.getCommon()).resolves.toBe(invoice);
    expect(find).toHaveBeenCalledTimes(1);
  });

  test("plain references delegate findCommon and getCommon", async () => {
    const find = vi.fn().mockResolvedValue(buildInvoiceData({ id: "i-1" }));
    installBehaviors({ invoice: { find } });
    const invoice = Invoice.ofId("i-1");

    await expect(invoice.findCommon()).resolves.toBeInstanceOf(InvoiceDetailed);
    await expect(invoice.getCommon()).resolves.toBeInstanceOf(InvoiceDetailed);
    expect(find).toHaveBeenNthCalledWith(1, "i-1");
    expect(find).toHaveBeenNthCalledWith(2, "i-1");
  });

  test("findCommon resolves undefined for a missing plain reference", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ invoice: { find } });

    await expect(Invoice.ofId("missing").findCommon()).resolves.toBeUndefined();
    expect(find).toHaveBeenCalledWith("missing");
  });

  test("getCommon throws ObjectNotFoundError for a missing plain reference", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ invoice: { find } });

    await expect(Invoice.ofId("missing").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("getDetailed re-fetches even on an already materialized invoice", async () => {
    const find = vi.fn().mockResolvedValue(buildInvoiceData({ id: "i-1" }));
    installBehaviors({ invoice: { find } });
    const materialized = await Invoice.find("i-1");

    const reFetched = await materialized?.getDetailed();

    expect(reFetched).toBeInstanceOf(InvoiceDetailed);
    expect(reFetched).not.toBe(materialized);
    expect(find).toHaveBeenCalledTimes(2);
  });
});

describe("Invoice aggregate metadata", () => {
  test("carries the invoice domain and aggregate identity", () => {
    expect(Invoice.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Invoice.aggregateMetaData.domain).toBe("invoice");
    expect(Invoice.aggregateMetaData.aggregate).toBe("invoice");
  });
});

describe("Invoice detailed data", () => {
  test("defaults missing monetary values to zero", () => {
    const invoice = new InvoiceDetailed(
      buildInvoiceData({
        totalGross: undefined,
        amountPaid: undefined,
        totalNet: undefined,
      }),
    );

    expect(invoice.totalGross.getAmount()).toBe(0);
    expect(invoice.totalNet.getAmount()).toBe(0);
    expect(invoice.amountPaid.getAmount()).toBe(0);
    expect(invoice.amountOutstanding.getAmount()).toBe(0);
  });

  test("maps invoice data to observable domain values", () => {
    const invoice = new InvoiceDetailed(
      buildInvoiceData({
        groups: [
          {
            items: [
              buildInvoiceItemData({ itemId: "item-1" }),
              buildInvoiceItemData({ itemId: "item-2" }),
            ],
            description: "Group",
          },
        ],
      }),
    );

    expect(invoice.invoiceNumber).toBe("INV-2024-001");
    expect(invoice.status).toBe("NEW");
    expect(invoice.invoiceType).toBe("REGULAR");
    expect(invoice.customer).toBeInstanceOf(Customer);
    expect(invoice.customer.id).toBe("customer-id");
    expect(invoice.recipient).toBeInstanceOf(InvoiceRecipient);
    expect(invoice.itemGroups).toHaveLength(1);
    expect(invoice.itemGroups[0]).toBeInstanceOf(InvoiceItemGroup);
    expect(invoice.itemsFlat.map((item) => item.id)).toEqual([
      "item-1",
      "item-2",
    ]);
    expect(invoice.pdf).toBeInstanceOf(File);
    expect(invoice.pdf.id).toBe("pdf-id");
    expect(invoice.pdf.isProtected).toBe(true);
  });

  test("maps money and derives the outstanding amount", () => {
    const invoice = new InvoiceDetailed(buildInvoiceData());

    expect(invoice.totalGross.getAmount()).toBe(11900);
    expect(invoice.totalNet.getAmount()).toBe(10000);
    expect(invoice.amountPaid.getAmount()).toBe(0);
    expect(invoice.amountOutstanding.getAmount()).toBe(11900);
  });

  test("sets the outstanding amount to zero for a negative net total", () => {
    const invoice = new InvoiceDetailed(buildInvoiceData({ totalNet: -100 }));

    expect(invoice.amountOutstanding.getAmount()).toBe(0);
  });

  test("is overdue only for an unpaid status after the payment term", () => {
    const overdue = new InvoiceDetailed(
      buildInvoiceData({ date: "2000-01-01T00:00:00.000Z", status: "NEW" }),
    );
    const paid = new InvoiceDetailed(
      buildInvoiceData({ date: "2000-01-01T00:00:00.000Z", status: "PAID" }),
    );

    expect(overdue.isOverdue).toBe(true);
    expect(paid.isOverdue).toBe(false);
  });

  test("maps optional cancellation relationships", () => {
    const cancellation = {
      cancellationId: "cancellation-invoice-id",
      cancelledAt: "2024-06-01T00:00:00.000Z",
      correctionNumber: "COR-2024-001",
      pdfId: "cancellation-pdf-id",
      reason: "Correction",
    };
    const present = new InvoiceDetailed(
      buildInvoiceData({ cancellationOf: "original-invoice-id", cancellation }),
    );
    const absent = new InvoiceDetailed(
      buildInvoiceData({ cancellationOf: undefined, cancellation: undefined }),
    );

    expect(present.cancellation).toBeInstanceOf(InvoiceCancellation);
    expect(present.cancellationOf).toBeInstanceOf(Invoice);
    expect(present.cancellationOf?.id).toBe("original-invoice-id");
    expect(absent.cancellation).toBeUndefined();
    expect(absent.cancellationOf).toBeUndefined();
  });
});

describe("Invoice list queries", () => {
  test("delegates customer and query and materializes the result", async () => {
    const customer = Customer.ofId("customer-id");
    const query = { limit: 2, page: 3 };
    const list = vi.fn().mockResolvedValue({
      items: [buildInvoiceData({ id: "i-1" })],
      totalCount: 7,
    });
    installBehaviors({ invoice: { list } });

    const listQuery = Invoice.query({ customer: customer, ...query });
    const result = await listQuery.execute();

    expect(listQuery).toBeInstanceOf(InvoiceListQuery);
    expect(list).toHaveBeenCalledWith("customer-id", query);
    expect(result).toBeInstanceOf(InvoiceList);
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toBeInstanceOf(InvoiceListItem);
    expect(result.totalCount).toBe(7);
  });

  test("getTotalCount refines the query with limit one", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 23, items: [] });
    installBehaviors({ invoice: { list } });

    const totalCount = await Invoice.query({
      customer: Customer.ofId("customer-id"),
      page: 4,
    }).getTotalCount();

    expect(totalCount).toBe(23);
    expect(list).toHaveBeenCalledWith("customer-id", { limit: 1, page: 4 });
  });
});
