import { DateTime } from "luxon";
import { DataModel, ReferenceModel } from "@mittwald/api-models";
import { provideReact } from "@mittwald/api-models/react";
import { classes } from "polytype";
import { required } from "../../base/required.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ServicePeriod } from "./ServicePeriod.js";
import { Invoice } from "../Invoice/index.js";
import { InvoiceItemData } from "./types.js";

export class InvoiceItem extends ReferenceModel {
  public readonly invoice: Invoice;

  public constructor(invoice: Invoice, id: string) {
    super(id);
    this.invoice = invoice;
  }

  public static ofId(invoice: Invoice, id: string) {
    return new InvoiceItem(invoice, id);
  }

  public static find = provideReact(
    async (
      invoice: Invoice,
      itemId: string,
    ): Promise<InvoiceItemDetailed | undefined> => {
      const detailed = await invoice.findDetailed();
      if (!detailed) {
        return;
      }
      return detailed.itemGroups
        .flatMap((g) => g.items)
        .find((i) => i.id === itemId);
    },
  );

  public static get = provideReact(
    async (invoice: Invoice, itemId: string): Promise<InvoiceItemDetailed> => {
      const found = await InvoiceItem.find(invoice, itemId);
      assertObjectFound(found, InvoiceItem, `${itemId}@${invoice.id}`);
      return found;
    },
  );

  public getDetailed = provideReact((): Promise<InvoiceItemDetailed> => {
    return InvoiceItem.get(this.invoice, this.id);
  }, [this.id]);

  public findDetailed = provideReact((): Promise<InvoiceItem | undefined> => {
    return InvoiceItem.find(this.invoice, this.id);
  }, [this.id]);
}

export class InvoiceItemDetailed extends classes(
  DataModel<InvoiceItemData>,
  InvoiceItem,
) {
  public readonly id: string;
  public readonly servicePeriod?: ServicePeriod;
  public readonly serviceDate?: DateTime;
  public readonly cancelledOrCorrectedBy: InvoiceItem[];

  public constructor(invoice: Invoice, data: InvoiceItemData) {
    super([data], [invoice, data.itemId]);
    this.id = data.itemId;
    this.cancelledOrCorrectedBy =
      data.itemCancelledOrCorrectedBy?.map(
        (i) =>
          new InvoiceItem(
            Invoice.ofId(required(i.sourceInvoiceId)),
            required(i.sourceInvoiceItemId),
          ),
      ) ?? [];

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
