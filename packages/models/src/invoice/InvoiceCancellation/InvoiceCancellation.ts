import { DateTime } from "luxon";

import type { InvoiceCancellationData } from "./types.js";
import type { InvoiceDetailed } from "../Invoice/index.js";
import type { Ctor } from "../../base/index.js";

import { ReferenceModel, WithData } from "../../base/index.js";
import { Invoice } from "../Invoice/index.js";

export class InvoiceCancellation extends WithData<InvoiceCancellationData>()(
  // `ReferenceModel` is abstract; the mixin's `Ctor` parameter is a concrete
  // construct signature. The cast bridges that (ReferenceModel has no abstract
  // members and is never instantiated directly — only via this subclass).
  ReferenceModel as Ctor<ReferenceModel>,
) {
  public readonly cancelledAt: DateTime;
  public readonly cancelledBy: Invoice;
  public override readonly data: InvoiceCancellationData;
  public readonly invoice: InvoiceDetailed;
  public readonly reason?: string;

  public constructor(invoice: InvoiceDetailed, data: InvoiceCancellationData) {
    super(data.cancellationId);
    this.data = data;
    this.invoice = invoice;
    this.cancelledAt = DateTime.fromISO(data.cancelledAt);
    this.cancelledBy = Invoice.ofId(data.cancellationId);
    this.reason = data.reason;
  }
}
