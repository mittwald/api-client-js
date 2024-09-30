import {
  InvoiceListItemData,
  InvoiceData,
  InvoiceFileAccessTokenData,
  InvoiceListQueryModelData,
  InvoiceListQueryData,
} from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { provideReact } from "../../react/provideReact.js";
import { ReferenceModel } from "../../base/ReferenceModel.js";
import { ListDataModel, ListQueryModel } from "../../base/index.js";

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

  public static query(query: InvoiceListQueryModelData) {
    return new InvoiceListQuery(query);
  }

  public static requestFileAccessToken = provideReact(
    async (
      invoiceId: string,
      customerId: string,
    ): Promise<InvoiceFileAccessTokenData> => {
      return await config.behaviors.invoice.requestFileAccessToken(
        invoiceId,
        customerId,
      );
    },
  );
}

class InvoiceCommon extends classes(
  DataModel<InvoiceListItemData | InvoiceData>,
  Invoice,
) {
  public constructor(data: InvoiceListItemData | InvoiceData) {
    super([data], [data.customerId]);
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

export class InvoiceListQuery extends ListQueryModel<InvoiceListQueryModelData> {
  public constructor(query: InvoiceListQueryModelData) {
    super(query);
  }

  public refine(query: InvoiceListQueryData) {
    return new InvoiceListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { customer, ...query } = this.query;

    const customerId = customer.id;
    const request = {
      customerId: customerId,
      queryParameters: {
        limit: config.defaultPaginationLimit,
        ...query,
      },
    };
    const { items, totalCount } = await config.behaviors.invoice.list(request);

    return new InvoiceList(
      this.query,
      items.map((d) => new InvoiceListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({ limit: 1 }).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class InvoiceList extends classes(
  InvoiceListQuery,
  ListDataModel<InvoiceListItem>,
) {
  public constructor(
    query: InvoiceListQueryModelData,
    invoices: InvoiceListItem[],
    totalCount: number,
  ) {
    super([query], [invoices, totalCount]);
  }
}
