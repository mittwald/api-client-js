import type { InvoiceItemGroupData } from "./types.js";
import type { InvoiceDetailed } from "../Invoice/index.js";

import { InvoiceItem } from "../InvoiceItem/index.js";
import { DataModel } from "../../base/index.js";

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
