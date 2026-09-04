import { jest } from "@jest/globals";
import { config } from "../../config/config.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  Contributor,
  ContributorDetailed,
  ContributorList,
  ContributorListItem,
  ContributorListQuery,
} from "./Contributor.js";
import {
  ContributorIncomingInvoice,
  ContributorIncomingInvoicesList,
} from "./ContributorIncomingInvoice.js";
import { ContributorBehaviors } from "./behaviors/types.js";
import {
  ContributorData,
  ContributorIncomingInvoiceData,
  ContributorListItemData,
} from "./types.js";

const contributorData = (
  overrides: Partial<ContributorData> = {},
): ContributorData =>
  ({
    id: "contributor-1",
    name: "ACME Software",
    ...overrides,
  }) as unknown as ContributorData;

const listItemData = (
  overrides: Partial<ContributorData> = {},
): ContributorListItemData =>
  contributorData(overrides) as unknown as ContributorListItemData;

const invoiceData = (
  overrides: Partial<ContributorIncomingInvoiceData> = {},
): ContributorIncomingInvoiceData =>
  ({
    id: "invoice-1",
    pdfId: "pdf-1",
    invoiceNumber: "INV-0001",
    date: "2026-01-15T00:00:00.000Z",
    totalNet: 10000,
    totalGross: 11900,
    ...overrides,
  }) as unknown as ContributorIncomingInvoiceData;

const contributor = {
  find: jest.fn<ContributorBehaviors["find"]>(),
  list: jest.fn<ContributorBehaviors["list"]>(),
  listIncomingInvoices: jest.fn<ContributorBehaviors["listIncomingInvoices"]>(),
};

beforeEach(() => {
  Object.values(contributor).forEach((mock) => mock.mockReset());
  config.behaviors.contributor = contributor;
});

describe("Contributor reference", () => {
  test("ofId keeps the id", () => {
    expect(Contributor.ofId("contributor-1").id).toBe("contributor-1");
  });

  test("describes itself with class name and id", () => {
    expect(Contributor.ofId("contributor-1").describe()).toBe(
      "Contributor@contributor-1",
    );
  });

  test("exposes an incoming invoice query scoped to itself", async () => {
    contributor.listIncomingInvoices.mockResolvedValue({
      items: [],
      totalCount: 0,
    });

    await Contributor.ofId("contributor-1").incomingInvoices.execute();

    expect(contributor.listIncomingInvoices).toHaveBeenCalledWith(
      "contributor-1",
      {},
    );
  });
});

describe("Contributor.find", () => {
  test("wraps the found data in a ContributorDetailed", async () => {
    contributor.find.mockResolvedValue(contributorData());

    const found = await Contributor.find("contributor-1");

    expect(contributor.find).toHaveBeenCalledWith("contributor-1");
    expect(found).toBeInstanceOf(ContributorDetailed);
    expect(found?.id).toBe("contributor-1");
  });

  test("returns undefined when the behavior finds nothing", async () => {
    contributor.find.mockResolvedValue(undefined);

    await expect(Contributor.find("missing")).resolves.toBeUndefined();
  });
});

describe("Contributor.get", () => {
  test("returns the contributor when it exists", async () => {
    contributor.find.mockResolvedValue(contributorData());

    await expect(Contributor.get("contributor-1")).resolves.toBeInstanceOf(
      ContributorDetailed,
    );
  });

  test("throws a named ObjectNotFoundError when it does not exist", async () => {
    contributor.find.mockResolvedValue(undefined);

    await expect(Contributor.get("missing")).rejects.toThrow(
      ObjectNotFoundError,
    );
    await expect(Contributor.get("missing")).rejects.toThrow(
      "Contributor@missing not found",
    );
  });
});

describe("ContributorListQuery", () => {
  test("applies the default pagination limit", async () => {
    contributor.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Contributor.query().execute();

    expect(contributor.list).toHaveBeenCalledWith({
      limit: config.defaultPaginationLimit,
    });
  });

  test("lets an explicit limit win over the default", async () => {
    contributor.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Contributor.query({ limit: 5 }).execute();

    expect(contributor.list).toHaveBeenCalledWith({ limit: 5 });
  });

  test("wraps the response into a ContributorList", async () => {
    contributor.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 3,
    });

    const result = await Contributor.query().execute();

    expect(result).toBeInstanceOf(ContributorList);
    expect(result.totalCount).toBe(3);
    expect(result.items[0]).toBeInstanceOf(ContributorListItem);
    expect(result.items[0].id).toBe("contributor-1");
  });

  test("refine merges the new query on top of the existing one", async () => {
    contributor.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Contributor.query({ limit: 5 }).refine({ limit: 10 }).execute();

    expect(contributor.list).toHaveBeenCalledWith({ limit: 10 });
  });

  test("refine returns a new query rather than mutating the old one", () => {
    const query = Contributor.query({ limit: 5 });

    const refined = query.refine({ limit: 10 });

    expect(refined).not.toBe(query);
    expect(refined).toBeInstanceOf(ContributorListQuery);
    expect(refined.queryId).not.toBe(query.queryId);
  });

  test("getTotalCount asks for a single item and reports the reported total", async () => {
    contributor.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 42,
    });

    await expect(Contributor.query().getTotalCount()).resolves.toBe(42);
    expect(contributor.list).toHaveBeenCalledWith({ limit: 1 });
  });

  test("findOneAndOnly returns the single match", async () => {
    contributor.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 1,
    });

    await expect(Contributor.query().findOneAndOnly()).resolves.toHaveProperty(
      "id",
      "contributor-1",
    );
  });

  test("findOneAndOnly returns undefined when the total count is not one", async () => {
    contributor.list.mockResolvedValue({
      items: [listItemData(), listItemData({ id: "contributor-2" })],
      totalCount: 2,
    });

    await expect(Contributor.query().findOneAndOnly()).resolves.toBeUndefined();
  });
});

describe("ContributorIncomingInvoice", () => {
  const owner = Contributor.ofId("contributor-1");

  test("exposes the plain fields of the invoice", () => {
    const invoice = new ContributorIncomingInvoice(owner, invoiceData());

    expect(invoice.id).toBe("invoice-1");
    expect(invoice.pdfId).toBe("pdf-1");
    expect(invoice.invoiceNumber).toBe("INV-0001");
    expect(invoice.contributor).toBe(owner);
  });

  test("parses the date into a valid DateTime", () => {
    const invoice = new ContributorIncomingInvoice(owner, invoiceData());

    expect(invoice.date.isValid).toBe(true);
    expect(invoice.date.toISODate()).toBe("2026-01-15");
  });

  test("marks an unparseable date as invalid rather than throwing", () => {
    const invoice = new ContributorIncomingInvoice(
      owner,
      invoiceData({ date: "not a date" } as never),
    );

    expect(invoice.date.isValid).toBe(false);
  });

  test("turns the net and gross totals into Money, in EUR", () => {
    const invoice = new ContributorIncomingInvoice(owner, invoiceData());

    expect(invoice.totalNet.getAmount()).toBe(10000);
    expect(invoice.totalNet.getCurrency()).toBe("EUR");
    expect(invoice.totalGross.toUnit()).toBe(119);
  });
});

describe("ContributorIncomingInvoiceListQuery", () => {
  const owner = Contributor.ofId("contributor-1");

  test("includes the contributor id in the query id", () => {
    expect(owner.incomingInvoices.queryId).toContain("contributor-1");
  });

  test("exposes the contributor it is scoped to", () => {
    expect(owner.incomingInvoices.contributor).toBe(owner);
  });

  test("wraps the response into a list of invoice models", async () => {
    contributor.listIncomingInvoices.mockResolvedValue({
      items: [invoiceData()],
      totalCount: 1,
    });

    const result = await owner.incomingInvoices.execute();

    expect(result).toBeInstanceOf(ContributorIncomingInvoicesList);
    expect(result.totalCount).toBe(1);
    expect(result.items[0]).toBeInstanceOf(ContributorIncomingInvoice);
    expect(result.items[0].invoiceNumber).toBe("INV-0001");
  });

  test("refine keeps the contributor and merges the query", async () => {
    contributor.listIncomingInvoices.mockResolvedValue({
      items: [],
      totalCount: 0,
    });

    const refined = owner.incomingInvoices.refine({ limit: 5 });

    expect(refined.contributor).toBe(owner);
    await refined.execute();
    expect(contributor.listIncomingInvoices).toHaveBeenCalledWith(
      "contributor-1",
      { limit: 5 },
    );
  });

  test("getTotalCount asks for a single item from the start of the list", async () => {
    contributor.listIncomingInvoices.mockResolvedValue({
      items: [invoiceData()],
      totalCount: 42,
    });

    await expect(owner.incomingInvoices.getTotalCount()).resolves.toBe(42);
    expect(contributor.listIncomingInvoices).toHaveBeenCalledWith(
      "contributor-1",
      { limit: 1, skip: 0 },
    );
  });
});
