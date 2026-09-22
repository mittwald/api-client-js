import type { OrderData } from "../../order/Order/types";

export function buildOrderData(overrides: Partial<OrderData> = {}): OrderData {
  return {
    summary: { nonRecurring: 0, recurring: 0, summary: 0 },
    customerId: "customer-id",
    orderNumber: "ORD-1",
    invoicingPeriod: 12,
    orderId: "order-id",
    type: "NEW_ORDER",
    status: "NEW",
    items: [],
    ...overrides,
  };
}
