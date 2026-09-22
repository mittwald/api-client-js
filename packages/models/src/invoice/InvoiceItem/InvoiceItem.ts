import { DateTime } from "luxon";

import type { InvoiceItemData } from "./types.js";
import type { Invoice } from "../Invoice/index.js";

import { ServicePeriod } from "./ServicePeriod.js";
import { DataModel } from "../../base/index.js";

export class InvoiceItem extends DataModel<InvoiceItemData> {
  public readonly id: string;
  public readonly invoice: Invoice;
  public readonly serviceDate?: DateTime;
  public readonly servicePeriod?: ServicePeriod;

  public constructor(invoice: Invoice, data: InvoiceItemData) {
    super(data);
    this.invoice = invoice;
    this.id = data.itemId;

    if (data.servicePeriod) {
      this.servicePeriod = new ServicePeriod(
        DateTime.fromISO(data.servicePeriod.start),
        DateTime.fromISO(data.servicePeriod.end),
      );
    }
    if (data.serviceDate) {
      this.serviceDate = DateTime.fromISO(data.serviceDate);
    }
  }
}
