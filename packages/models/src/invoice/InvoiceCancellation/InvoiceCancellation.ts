import { DateTime } from "luxon";
import { DataModel, ReferenceModel } from "@mittwald/api-models";
import { classes } from "polytype";
import { InvoiceCancellationData } from "./types.js";
import { Invoice, InvoiceDetailed } from "../Invoice/index.js";

export class InvoiceCancellation extends classes(
  ReferenceModel,
  DataModel<InvoiceCancellationData>,
) {
  public readonly invoice: InvoiceDetailed;
  public readonly cancelledBy: Invoice;
  public readonly cancelledAt: DateTime;
  public readonly reason?: string;

  public constructor(invoice: InvoiceDetailed, data: InvoiceCancellationData) {
    super([data.cancellationId], [data]);
    this.invoice = invoice;
    this.cancelledAt = DateTime.fromISO(data.cancelledAt);
    this.cancelledBy = Invoice.ofId(data.cancellationId);
    this.reason = data.reason;
  }
}
