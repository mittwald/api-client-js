import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { DateTime } from "luxon";
import { omit } from "remeda";

import type { InvoiceItem } from "../InvoiceItem/index.js";
import type {
  InvoiceListQueryModelData,
  InvoiceListItemData,
  InvoiceStatus,
  InvoiceData,
} from "./types.js";

import { InvoicePdfAccessTokenProvider } from "./InvoicePdfAccessTokenProvider.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { InvoiceCancellation } from "../InvoiceCancellation/index.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { AggregateMetaData, Money } from "../../common/index.js";
import { InvoiceItemGroup } from "../InvoiceItemGroup/index.js";
import { InvoiceRecipient } from "../InvoiceRecipient/index.js";
import { File } from "../../file/File/internal.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Invoice",
})
export class Invoice extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("invoice", "invoice");

  public static async find(id: string) {
    const data = await config.behaviors.invoice.find(id);

    if (data) {
      return new InvoiceDetailed(data);
    }
  }

  public static async get(id: string) {
    const invoice = await this.find(id);
    assertObjectFound(invoice, Invoice, id);
    return invoice;
  }

  public static ofId(id: string) {
    return new Invoice(id);
  }

  public static query(query: InvoiceListQueryModelData) {
    return new InvoiceListQuery(query);
  }

  public async findCommon(): Promise<InvoiceCommon | undefined> {
    return this instanceof InvoiceCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<InvoiceDetailed | undefined> {
    return Invoice.find(this.id);
  }

  public async getCommon(): Promise<InvoiceCommon> {
    return this instanceof InvoiceCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<InvoiceDetailed> {
    return Invoice.get(this.id);
  }
}

export class InvoiceCommon extends WithData<
  InvoiceListItemData | InvoiceData
>()(Invoice) {
  public readonly amountOutstanding: Money;
  public readonly amountPaid: Money;
  public readonly cancellation?: InvoiceCancellation;
  public readonly cancellationOf?: Invoice;
  public readonly customer: Customer;
  public override readonly data: InvoiceListItemData | InvoiceData;
  public readonly date: DateTime;
  public readonly invoiceNumber: string;
  public readonly invoiceType: string;
  public readonly isOverdue: boolean;
  public readonly itemGroups: InvoiceItemGroup[];
  public readonly itemsFlat: InvoiceItem[];
  public readonly paymentTerm: DateTime;
  public readonly pdf: File;
  public readonly recipient: InvoiceRecipient;
  public readonly status: InvoiceStatus;
  public readonly totalGross: Money;
  public readonly totalNet: Money;

  public constructor(data: InvoiceListItemData | InvoiceData) {
    super(data.id);
    this.data = data;
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
    this.customer = Customer.ofId(data.customerId);
    this.status = data.status;
    this.invoiceType = data.invoiceType;
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

export class InvoiceDetailed extends InvoiceCommon {
  public override readonly data: InvoiceData;

  public constructor(data: InvoiceData) {
    super(data);
    this.data = data;
  }
}

export class InvoiceListItem extends InvoiceCommon {
  public override readonly data: InvoiceListItemData;

  public constructor(data: InvoiceListItemData) {
    super(data);
    this.data = data;
  }
}

export class InvoiceListQuery extends ListQueryModel<InvoiceListQueryModelData> {
  public constructor(query: InvoiceListQueryModelData) {
    super(query, { dependencies: [extractId(query.customer)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.invoice.list(
      extractId(this.query.customer),
      omit(this.query, ["customer"]),
    );

    return new InvoiceList(
      this.query,
      items.map((d) => new InvoiceListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: Partial<InvoiceListQueryModelData> = {}) {
    return new InvoiceListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class InvoiceList extends WithListData<InvoiceListItem>()(
  InvoiceListQuery,
) {
  public override readonly items: readonly InvoiceListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: InvoiceListQueryModelData,
    invoices: InvoiceListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(invoices);
    this.totalCount = totalCount;
  }
}
