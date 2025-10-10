import { classes } from "polytype";
import { ListQueryModel } from "../../base/ListQueryModel.js";
import { Money } from "../../base/Money.js";
import { provideReact } from "../../react.js";
import { DateTime } from "luxon";
import type { Contributor } from "./Contributor.js";
import type {
  ContributorIncomingInvoiceData,
  ContributorListIncomingInvoiceQueryData,
} from "./types.js";
import { ListDataModel } from "../../base/ListDataModel.js";
import { DataModel } from "../../base/DataModel.js";
import { config } from "../../config/config.js";

export class ContributorIncomingInvoice extends DataModel<ContributorIncomingInvoiceData> {
  public readonly contributor: Contributor;
  public readonly id: string;
  public readonly pdfId: string;
  public readonly invoiceNumber: string;
  public readonly date: DateTime;
  public readonly totalNet: Money;
  public readonly totalGross: Money;

  public constructor(
    contributor: Contributor,
    data: ContributorIncomingInvoiceData,
  ) {
    super(data);
    this.contributor = contributor;
    this.id = data.id;
    this.pdfId = data.pdfId;
    this.invoiceNumber = data.invoiceNumber;
    this.date = DateTime.fromISO(data.date);
    this.totalNet = Money({ amount: data.totalNet, currency: "EUR" });
    this.totalGross = Money({ amount: data.totalGross, currency: "EUR" });
  }
}

export class ContributorIncomingInvoiceListQuery extends ListQueryModel<ContributorListIncomingInvoiceQueryData> {
  public readonly contributor: Contributor;
  public constructor(
    contributor: Contributor,
    query: ContributorListIncomingInvoiceQueryData = {},
  ) {
    super(query, { dependencies: [contributor.id] });
    this.contributor = contributor;
  }

  public refine(query: ContributorListIncomingInvoiceQueryData) {
    return new ContributorIncomingInvoiceListQuery(this.contributor, {
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } =
      await config.behaviors.contributor.listIncomingInvoices(
        this.contributor.id,
        this.query,
      );

    return new ContributorIncomingInvoicesList(
      this.contributor,
      this.query,
      items.map((i) => new ContributorIncomingInvoice(this.contributor, i)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const result = await this.refine({ limit: 1, skip: 0 }).execute();
    return result.totalCount;
  });
}

export class ContributorIncomingInvoicesList extends classes(
  ContributorIncomingInvoiceListQuery,
  ListDataModel<ContributorIncomingInvoice>,
) {
  public constructor(
    contributor: Contributor,
    query: ContributorListIncomingInvoiceQueryData,
    invoices: ContributorIncomingInvoice[],
    totalCount: number,
  ) {
    super([contributor, query], [invoices, totalCount]);
  }
}
