import { classes } from "polytype";
import type { InvoiceData, InvoiceListItemData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class Invoice extends ReferenceModel {
  public static ofId(id: string): Invoice {
    return new Invoice(id);
  }

  public static find = provideReact(
    async (id: string): Promise<InvoiceDetailed | undefined> => {
      const data = await config.behaviors.invoice.find(id);

      if (data !== undefined) {
        return new InvoiceDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<InvoiceDetailed> => {
      const invoice = await this.find(id);
      assertObjectFound(invoice, this, id);
      return invoice;
    },
  );

  public findDetailed = provideReact(async (): Promise<
    InvoiceDetailed | undefined
  > => {
    return await Invoice.find(this.id);
  }, [this.id]) as AsyncResourceVariant<InvoiceDetailed | undefined, []>;

  public getDetailed = provideReact(
    () => Invoice.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<InvoiceDetailed, []>;
}

class InvoiceCommon extends classes(
  DataModel<InvoiceData | InvoiceListItemData>,
  Invoice,
) {
  public constructor(data: InvoiceData | InvoiceListItemData) {
    super([data], [data.id]);
  }
}

export class InvoiceDetailed extends classes(
  InvoiceCommon,
  DataModel<InvoiceData>,
) {
  public constructor(data: InvoiceData) {
    super([data], [data]);
  }
}

export class InvoiceListItem extends classes(
  InvoiceCommon,
  DataModel<InvoiceListItemData>,
) {
  public constructor(data: InvoiceListItemData) {
    super([data], [data]);
  }
}
