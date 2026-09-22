import { DateTime } from "luxon";

import type { Contributor } from "./Contributor";
import type {
  ContributorListIncomingInvoiceQueryData,
  ContributorIncomingInvoiceData,
} from "./types";

import { ContributorIncomingInvoicePdfAccessTokenProvider } from "./ContributorIncomingInvoicePdfAccessTokenProvider";
import { ListQueryModel, WithListData, DataModel } from "../../base";
import { File } from "../../file/File/internal";
import { config } from "../../config";
import { Money } from "../../common";

export class ContributorIncomingInvoice extends DataModel<ContributorIncomingInvoiceData> {
  public readonly contributor: Contributor;
  public readonly date: DateTime;
  public readonly id: string;
  public readonly invoiceNumber: string;
  public readonly pdf: File;
  public readonly totalGross: Money;
  public readonly totalNet: Money;

  public constructor(
    contributor: Contributor,
    data: ContributorIncomingInvoiceData,
  ) {
    super(data);
    this.contributor = contributor;
    this.id = data.id;
    this.pdf = File.ofId(
      data.pdfId,
      new ContributorIncomingInvoicePdfAccessTokenProvider(this),
    );
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
    super(query);
    this.contributor = contributor;
  }

  public async execute() {
    const { totalCount, items } =
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
  }

  public async getTotalCount() {
    const result = await this.refine({ limit: 1, skip: 0 }).execute();
    return result.totalCount;
  }

  public refine(query: ContributorListIncomingInvoiceQueryData) {
    return new ContributorIncomingInvoiceListQuery(this.contributor, {
      ...this.query,
      ...query,
    });
  }
}

export class ContributorIncomingInvoicesList extends WithListData<ContributorIncomingInvoice>()(
  ContributorIncomingInvoiceListQuery,
) {
  public override readonly items: readonly ContributorIncomingInvoice[];
  public override readonly totalCount: number;
  public constructor(
    contributor: Contributor,
    query: ContributorListIncomingInvoiceQueryData,
    invoices: ContributorIncomingInvoice[],
    totalCount: number,
  ) {
    super(contributor, query);
    this.items = Object.freeze(invoices);
    this.totalCount = totalCount;
  }
}
