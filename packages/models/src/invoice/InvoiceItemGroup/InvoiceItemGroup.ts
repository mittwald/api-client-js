import { DataModel } from "@mittwald/api-models";
import { InvoiceItemGroupData } from "./types.js";
import { InvoiceDetailed } from "../Invoice/index.js";
import { InvoiceItemDetailed } from "../InvoiceItem/index.js";

export class InvoiceItemGroup extends DataModel<InvoiceItemGroupData> {
  public readonly invoice: InvoiceDetailed;
  public readonly items: InvoiceItemDetailed[];
  public readonly description?: string;

  public constructor(invoice: InvoiceDetailed, data: InvoiceItemGroupData) {
    super(data);
    this.invoice = invoice;
    this.description = data.description;
    this.items = data.items.map((i) => new InvoiceItemDetailed(invoice, i));
  }
}
