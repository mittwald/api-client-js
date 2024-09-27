import { classes } from "polytype";
import { OrderData, OrderListItemData, OrderListQueryData } from "./types.js";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class Order extends ReferenceModel {
  public readonly orderId: string;

  public constructor(orderId: string) {
    super(orderId);
    this.orderId = orderId;
  }

  public static ofId(orderId: string): Order {
    return new Order(orderId);
  }

  public static find = provideReact(
    async (orderId: string): Promise<OrderDetailed | undefined> => {
      const data = await config.behaviors.order.find(orderId);
      if (data !== undefined) {
        return new OrderDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (orderId: string): Promise<OrderDetailed> => {
      const order = await this.find(orderId);
      assertObjectFound(order, this, orderId);
      return order;
    },
  );

  public static query(query: OrderListQueryData = {}) {
    return new OrderListQuery(query);
  }
}

export class OrderCommon extends classes(DataModel<OrderData>, Order) {
  public readonly data: OrderData;
  public readonly dueDate: Date | undefined;
  public readonly orderDate: Date | undefined;
  public readonly customerId: string;
  public readonly orderId: string;
  public readonly orderNumber: string;
  public readonly invoicingPeriod: number;
  public readonly contractChangeContractId: string | undefined;
  public constructor(data: OrderData) {
    super([data], [data.orderId]);
    this.data = Object.freeze(data);
    this.customerId = data.customerId;
    this.orderId = data.orderId;
    this.orderNumber = data.orderNumber;
    this.invoicingPeriod = data.invoicingPeriod;
    this.contractChangeContractId = data.contractChangeContractId;
    this.orderDate = data.orderDate ? new Date(data.orderDate) : undefined;
    this.dueDate = data.dueDate ? new Date(data.dueDate) : undefined;
  }
}

export class OrderDetailed extends classes(DataModel<OrderData>, OrderCommon) {
  public constructor(data: OrderData) {
    super([data]);
  }
}

export class OrderListItem extends classes(
  DataModel<OrderListItemData>,
  OrderCommon,
) {
  public constructor(data: OrderListItemData) {
    super([data]);
  }
}

export class OrderListQuery extends ListQueryModel<OrderListQueryData> {
  public constructor(query: OrderListQueryData = {}) {
    super(query);
  }

  public refine(query: OrderListQueryData) {
    return new OrderListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { ...query } = this.query;
    const { items, totalCount } = await config.behaviors.order.list({
      limit: config.defaultPaginationLimit,
      ...query,
    });

    return new OrderList(
      this.query,
      items.map((d) => new OrderListItem(d)),
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

export class OrderList extends classes(
  OrderListQuery,
  ListDataModel<OrderListItem>,
) {
  public constructor(
    query: OrderListQueryData,
    orders: OrderListItem[],
    totalCount: number,
  ) {
    super([query], [orders, totalCount]);
  }
}
