import type { InvoiceItemGroupData } from "./types";
import type { InvoiceDetailed } from "../Invoice";

import { InvoiceItem } from "../InvoiceItem";
import { DataModel } from "../../base";

export class InvoiceItemGroup extends DataModel<InvoiceItemGroupData> {
  public readonly description?: string;
  public readonly invoice: InvoiceDetailed;
  public readonly items: InvoiceItem[];

  public constructor(invoice: InvoiceDetailed, data: InvoiceItemGroupData) {
    super(data);
    this.invoice = invoice;
    this.description = data.description;
    this.items = data.items.map((i) => new InvoiceItem(invoice, i));
  }
}
