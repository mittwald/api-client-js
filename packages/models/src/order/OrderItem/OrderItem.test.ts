import { afterEach, expect, test } from "vitest";

import { buildOrderItemData } from "../../testing/builders/buildOrderItemData";
import { resetBehaviors } from "../../testing/installBehaviors";
import { OrderItem } from "./OrderItem";
import { DataModel } from "../../base";

afterEach(resetBehaviors);

test("constructs an order item from behavior data", () => {
  const item = new OrderItem(
    buildOrderItemData({
      attributeConfiguration: [{ value: "v", key: "k" }],
      articleName: "My Article",
      orderItemId: "i-1",
    }),
  );

  expect(item.id).toBe("i-1");
  expect(item.name).toBe("My Article");
  expect(item.attributeConfiguration?.[0]?.value).toBe("v");
});

test("uses the order item id as the name when the article name is absent", () => {
  const item = new OrderItem(
    buildOrderItemData({ articleName: undefined, orderItemId: "i-2" }),
  );

  expect(item.name).toBe("i-2");
});

test("is a data model", () => {
  expect(new OrderItem(buildOrderItemData())).toBeInstanceOf(DataModel);
});
