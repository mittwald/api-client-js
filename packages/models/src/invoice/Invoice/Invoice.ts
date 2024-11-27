import { classes } from "polytype";
import type {
  InvoiceData,
  InvoiceListItemData,
  InvoiceStatus,
} from "./types.js";
import {
  AggregateMetaData,
  DataModel,
  ReferenceModel,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { DateTime } from "luxon";
import { Money } from "../../base/Money.js";
import { InvoiceRecipient } from "../InvoiceRecipient/index.js";
import { Customer } from "../../customer/index.js";
import { InvoiceItemGroup } from "../InvoiceItemGroup/index.js";
import { InvoiceItemDetailed } from "../InvoiceItem/index.js";
import { InvoiceCancellation } from "../InvoiceCancellation/index.js";
import { File } from "../../file/File/index.js";
import { InvoicePdfAccessTokenProvider } from "./InvoicePdfAccessTokenProvider.js";

export class Invoice extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("invoice", "invoice");

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
  public readonly invoiceNumber: string;
  public readonly date: DateTime;
  public readonly paymentTerm: DateTime;
  public readonly totalGross: Money;
  public readonly totalNet: Money;
  public readonly amountPaid: Money;
  public readonly amountOutstanding: Money;
  public readonly recipient: InvoiceRecipient;

  public constructor(data: InvoiceData | InvoiceListItemData) {
    super([data], [data.id]);
    this.invoiceNumber = data.invoiceNumber;
    this.totalGross = Money({ amount: data.totalGross ?? 0, currency: "EUR" });
    this.totalNet = Money({ amount: data.totalNet ?? 0, currency: "EUR" });
    this.amountPaid = Money({ amount: data.amountPaid ?? 0, currency: "EUR" });
    this.amountOutstanding = this.totalNet.isNegative()
      ? Money({ currency: "EUR" })
      : this.totalGross.subtract(this.amountPaid);
    this.date = DateTime.fromISO(data.date);
    this.paymentTerm = this.date.plus({ day: 14 });
    this.recipient = new InvoiceRecipient(data.recipient);
  }
}

export class InvoiceDetailed extends classes(
  InvoiceCommon,
  DataModel<InvoiceData>,
) {
  public readonly customer: Customer;
  public readonly recipient: InvoiceRecipient;
  public readonly mStudioPath: string;
  public readonly itemGroups: InvoiceItemGroup[];
  public readonly itemsFlat: InvoiceItemDetailed[];
  public readonly cancellation?: InvoiceCancellation;
  public readonly cancellationOf?: Invoice;
  public readonly status: InvoiceStatus;
  public readonly isOverdue: boolean;
  public readonly pdf: File;
  public constructor(data: InvoiceData) {
    super([data], [data]);
    this.customer = Customer.ofId(data.customerId);
    this.status = data.status;
    this.recipient = new InvoiceRecipient(data.recipient);
    this.mStudioPath = `/app/organizations/${this.customer.id}/invoices/${this.id}`;
    this.itemGroups = data.groups.map((g) => new InvoiceItemGroup(this, g));
    this.itemsFlat = this.itemGroups.flatMap((g) => g.items);
    this.pdf = new File(data.pdfId, new InvoicePdfAccessTokenProvider(this));
    this.cancellation = data.cancellation
      ? new InvoiceCancellation(this, data.cancellation)
      : undefined;
    this.cancellationOf = data.cancellationOf
      ? Invoice.ofId(data.cancellationOf)
      : undefined;
    this.isOverdue =
      (this.status === "PARTIALLY_PAID" ||
        this.status === "NEW" ||
        this.status === "CONFIRMED") &&
      this.paymentTerm.startOf("day") < DateTime.now().startOf("day");
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
