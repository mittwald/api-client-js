import { DateTime } from "luxon";
import { DataModel } from "@mittwald/api-models";
import { ServicePeriod } from "./ServicePeriod.js";
import { Invoice } from "../Invoice/index.js";
import { InvoiceItemData } from "./types.js";

export class InvoiceItem extends DataModel<InvoiceItemData> {
  public readonly invoice: Invoice;
  public readonly id: string;
  public readonly servicePeriod?: ServicePeriod;
  public readonly serviceDate?: DateTime;

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
