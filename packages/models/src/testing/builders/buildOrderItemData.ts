import type { OrderItemData } from "../../order/OrderItem/types.js";

export function buildOrderItemData(
  overrides: Partial<OrderItemData> = {},
): OrderItemData {
  return {
    articleName: "Test Article",
    articleId: "article-id",
    orderItemId: "item-id",
    isInclusive: false,
    price: 0,
    ...overrides,
  };
}
