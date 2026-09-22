import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type {
  LeadsExportListQueryData,
  LeadsExportListItemData,
  LeadsExportRequestData,
  LeadsExportExporter,
  LeadsExportData,
} from "./types";

import { Customer } from "../../customer/Customer/Customer";
import { config } from "../../config";
import { ListQueryModel, ReferenceModel, WithListData, WithData } from "../../base";

@GhostMakerModel({
  name: "LeadsExport",
})
export class LeadsExport extends ReferenceModel {
  public constructor(id: string) {
    super(id);
  }

  public static async create(customerId: string, data: LeadsExportRequestData) {
    return await config.behaviors.leadsExport.create(customerId, data);
  }

  public static ofId(id: string) {
    return new LeadsExport(id);
  }

  public static query(
    customerId: string,
    query: LeadsExportListQueryData = {},
  ) {
    return new LeadsExportListQuery(customerId, query);
  }
}

export class LeadsExportCommon extends WithData<
  LeadsExportListItemData | LeadsExportData
>()(LeadsExport) {
  public override readonly data: LeadsExportListItemData | LeadsExportData;
  public readonly exportedAt: DateTime;
  public readonly exportedBy: LeadsExportExporter;
  public readonly leadCount: number;

  public constructor(data: LeadsExportListItemData | LeadsExportData) {
    super(data.exportId);
    this.data = data;
    this.exportedAt = DateTime.fromISO(data.exportedAt);
    this.exportedBy = data.exportedBy;
    this.leadCount = data.leadCount;
  }
}

export class LeadsExportDetailed extends LeadsExportCommon {
  public constructor(data: LeadsExportData) {
    super(data);
  }
}

export class LeadsExportListItem extends LeadsExportCommon {
  public constructor(data: LeadsExportListItemData) {
    super(data);
  }
}

export class LeadsExportListQuery extends ListQueryModel<LeadsExportListQueryData> {
  public readonly customer: Customer;

  public constructor(customerId: string, query: LeadsExportListQueryData = {}) {
    super(query);
    this.customer = Customer.ofId(customerId);
  }

  public async execute(requestConfig?: AxiosRequestConfig) {
    const { totalCount, items } = await config.behaviors.leadsExport.list(
      this.customer.id,
      this.query,
      requestConfig,
    );

    return new LeadsExportList(
      this.customer.id,
      this.query,
      items.map((le) => new LeadsExportListItem(le)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({
      limit: 1,
    }).execute();
    return totalCount;
  }

  public refine(query: LeadsExportListQueryData) {
    return new LeadsExportListQuery(this.customer.id, {
      ...this.query,
      ...query,
    });
  }
}

export class LeadsExportList extends WithListData<LeadsExportListItem>()(
  LeadsExportListQuery,
) {
  public override readonly items: readonly LeadsExportListItem[];
  public override readonly totalCount: number;

  public constructor(
    customerId: string,
    query: LeadsExportListQueryData,
    leadsExports: LeadsExportListItem[],
    totalCount: number,
  ) {
    super(customerId, query);
    this.items = Object.freeze(leadsExports);
    this.totalCount = totalCount;
  }
}
