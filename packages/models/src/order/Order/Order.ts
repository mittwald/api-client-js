import { classes } from "polytype";
import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "@mittwald/api-models";
import {
  type AsyncResourceVariant,
  provideReact,
} from "@mittwald/api-models/react";
import { AggregateMetaData, extractId } from "../../base/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import {
  OrderCreateRequestData,
  OrderData,
  OrderListItemData,
  OrderListModelQueryData,
  OrderListQueryData,
  OrderPreviewRequestData,
  OrderStatus,
} from "./types.js";
import { Customer } from "../../customer/index.js";
import { Money } from "../../base/Money.js";
import { OrderItem } from "../OrderItem/index.js";
import { omit } from "remeda";
import { OrderPreview } from "../OrderPreview/index.js";

export class Order extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("order", "order");

  public static ofId(id: string): Order {
    return new Order(id);
  }

  public static find = provideReact(
    async (id: string): Promise<OrderDetailed | undefined> => {
      const data = await config.behaviors.order.find(id);

      if (data !== undefined) {
        return new OrderDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<OrderDetailed> => {
      const order = await this.find(id);
      assertObjectFound(order, this, id);
      return order;
    },
  );

  public findDetailed = provideReact((): Promise<OrderDetailed | undefined> => {
    return Order.find(this.id);
  }, [this.id]) as AsyncResourceVariant<
    () => Promise<OrderDetailed | undefined>
  >;

  public getDetailed = provideReact((): Promise<OrderDetailed> => {
    return Order.get(this.id);
  }, [this.id]) as AsyncResourceVariant<() => Promise<OrderDetailed>>;

  public static query(query: OrderListModelQueryData = {}) {
    return new OrderListQuery(query);
  }

  public static async create(
    requestData: OrderCreateRequestData,
  ): Promise<Order> {
    const { id } = await config.behaviors.order.create(requestData);
    return Order.ofId(id);
  }

  public static preview = provideReact(
    async (requestData: OrderPreviewRequestData): Promise<OrderPreview> => {
      const previewData = await config.behaviors.order.preview(requestData);
      return new OrderPreview(previewData);
    },
  );
}

export class OrderCommon extends classes(
  DataModel<OrderListItemData | OrderData>,
  Order,
) {
  public readonly orderNumber: string;
  public readonly status: OrderStatus;
  public readonly customer: Customer;
  public readonly summary?: Money;
  public readonly summaryRecurring?: Money;
  public readonly summaryNonRecurring?: Money;
  public readonly dueDate?: Date;
  public readonly orderDate?: Date;
  public readonly items?: OrderItem[];

  public constructor(data: OrderData | OrderListItemData) {
    super([data], [data.orderId]);
    this.orderNumber = data.orderNumber;
    this.status = data.status;
    this.customer = Customer.ofId(data.customerId);
    if (data.summary) {
      this.summary = Money({ amount: data.summary.summary, currency: "EUR" });
      this.summaryRecurring = Money({
        amount: data.summary.recurring,
        currency: "EUR",
      });
      this.summaryNonRecurring = Money({
        amount: data.summary.nonRecurring,
        currency: "EUR",
      });
    }
    this.orderDate = data.orderDate ? new Date(data.orderDate) : undefined;
    this.dueDate = data.dueDate ? new Date(data.dueDate) : undefined;
    if (data.items) {
      this.items = data.items.map((i) => new OrderItem(i));
    }
  }
}

export class OrderDetailed extends classes(OrderCommon, DataModel<OrderData>) {
  public constructor(data: OrderData) {
    super([data], [data]);
  }
}

export class OrderListItem extends classes(
  OrderCommon,
  DataModel<OrderListItemData>,
) {
  public constructor(data: OrderListItemData) {
    super([data], [data]);
  }
}

export class OrderListQuery extends ListQueryModel<OrderListModelQueryData> {
  public refine(query: OrderListQueryData) {
    return new OrderListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = this.query.customer
      ? await config.behaviors.order.listByCustomer({
          ...omit(this.query, ["customer"]),
          customerId: extractId(this.query.customer)!,
        })
      : await config.behaviors.order.list(this.query);

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
}

export class OrderList extends classes(
  OrderListQuery,
  ListDataModel<OrderListItem>,
) {
  public constructor(
    query: OrderListModelQueryData,
    orders: OrderListItem[],
    totalCount: number,
  ) {
    super([query], [orders, totalCount]);
  }
}
