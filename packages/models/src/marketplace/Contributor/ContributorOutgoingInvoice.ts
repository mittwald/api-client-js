import { DateTime } from "luxon";

import type { ContributorOnBehalfInvoiceData } from "./types";

import { DataModel } from "../../base";
import { Money } from "../../common";

export class ContributorOutgoingInvoice extends DataModel<ContributorOnBehalfInvoiceData> {
  public readonly date: DateTime;
  public readonly invoiceNumber: string;
  public readonly pdfLink: string;
  public readonly totalGross: Money;
  public readonly totalNet: Money;

  public constructor(data: ContributorOnBehalfInvoiceData) {
    super(data);
    this.invoiceNumber = data.invoiceNumber;
    this.totalNet = Money({ amount: data.totalNet, currency: "EUR" });
    this.totalGross = Money({ amount: data.totalGross, currency: "EUR" });
    this.pdfLink = data.pdfLink;
    this.date = DateTime.fromISO(data.invoiceDate);
  }
}
