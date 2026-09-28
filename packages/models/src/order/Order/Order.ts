import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";

import type {
  OrderListQueryModelData,
  PlanChangeRequestData,
  OrderListItemData,
  OrderTypeData,
  OrderStatus,
  OrderData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { AggregateMetaData, Money } from "../../common/index.js";
import { OrderItem } from "../OrderItem/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Order",
})
export class Order extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("order", "order");
  public static openStatuses: OrderStatus[] = ["CONFIRMED", "NEW"];

  public static async changePlan(planChangeData: PlanChangeRequestData) {
    await config.behaviors.order.createTariffChange(planChangeData);
  }

  public static async find(id: string) {
    const data = await config.behaviors.order.find(id);

    if (data) {
      return new OrderDetailed(data);
    }
  }

  public static async get(id: string) {
    const order = await Order.find(id);
    assertObjectFound(order, Order, id);
    return order;
  }

  public static ofId(id: string) {
    return new Order(id);
  }

  public static query(query: OrderListQueryModelData = {}) {
    return new OrderListQuery(query);
  }

  public async findCommon(): Promise<OrderCommon | undefined> {
    return this instanceof OrderCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<OrderDetailed | undefined> {
    return Order.find(this.id);
  }

  public async getCommon(): Promise<OrderCommon> {
    return this instanceof OrderCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<OrderDetailed> {
    return Order.get(this.id);
  }
}

export class OrderCommon extends WithData<OrderListItemData | OrderData>()(
  Order,
) {
  public readonly customer: Customer;
  public override readonly data: OrderListItemData | OrderData;
  public readonly dueDate?: Date;
  public readonly items?: OrderItem[];
  public readonly orderDate?: Date;
  public readonly orderNumber: string;
  public readonly status: OrderStatus;
  public readonly summary?: Money;
  public readonly summaryNonRecurring?: Money;
  public readonly summaryRecurring?: Money;
  public readonly type: OrderTypeData;

  public constructor(data: OrderListItemData | OrderData) {
    super(data.orderId);
    this.data = data;
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
    this.type = data.type;
  }

  public getOrderItemAttribute(key: string) {
    return (this.items ?? [])
      .flatMap((i) => i.attributeConfiguration)
      .find((i) => i?.key === key);
  }
}

export class OrderDetailed extends OrderCommon {
  public override readonly data: OrderData;

  public constructor(data: OrderData) {
    super(data);
    this.data = data;
  }
}

export class OrderListItem extends OrderCommon {
  public override readonly data: OrderListItemData;

  public constructor(data: OrderListItemData) {
    super(data);
    this.data = data;
  }
}

export class OrderListQuery extends ListQueryModel<OrderListQueryModelData> {
  public async execute() {
    const { customer, project, ...restQuery } = this.query;

    const { totalCount, items } = await config.behaviors.order.list({
      ...restQuery,
      customerId: extractId(customer),
      projectId: extractId(project),
    });

    return new OrderList(
      this.query,
      items.map((d) => new OrderListItem(d)),
      totalCount,
    );
  }

  public async executeOptional() {
    try {
      return await this.execute();
    } catch {
      return new OrderList(this.query, [], 0);
    }
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: OrderListQueryModelData) {
    return new OrderListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class OrderList extends WithListData<OrderListItem>()(OrderListQuery) {
  public override readonly items: readonly OrderListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: OrderListQueryModelData,
    orders: OrderListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(orders);
    this.totalCount = totalCount;
  }
}
