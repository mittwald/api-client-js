import { InvoiceListItemData, InvoiceData, InvoiceListQuery } from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { Customer } from "../../customer/index.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";

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
      const project = await this.find(id);
      assertObjectFound(project, this, id);
      return project;
    },
  );

  public getDetailed = provideReact(() =>
    Invoice.get(this.id),
  ) as AsyncResourceVariant<InvoiceDetailed, []>;

  public static list = provideReact(
    async (
      query: InvoiceListQuery = {},
    ): Promise<Readonly<Array<InvoiceListItemData>>> => {
      const data = await config.behaviors.project.list(query);
      return Object.freeze(data.map((d) => new InvoiceListItem(d)));
    },
  );

  public static async requestFileAccessToken(
    invoiceId: string,
    customerId: string,
  ): Promise<string> {
    const { token } = await config.behaviors.invoice.requestFileAccessToken(
      invoiceId,
      customerId,
    );
    return token;
  }
}

class InvoiceCommon extends classes(
  DataModel<InvoiceListItemData | InvoiceData>,
  Invoice,
) {
  public readonly customer: Customer;

  public constructor(data: InvoiceListItemData | InvoiceData) {
    super([data.id]);
    this.customer = Customer.ofId(data.customerId);
  }
}

export class InvoiceDetailed extends classes(
  InvoiceCommon,
  DataModel<InvoiceData>,
) {
  public constructor(data: InvoiceData) {
    super([data]);
  }
}

export class InvoiceListItem extends classes(
  InvoiceCommon,
  DataModel<InvoiceListItemData>,
) {
  public constructor(data: InvoiceListItemData) {
    super([data]);
  }
}
