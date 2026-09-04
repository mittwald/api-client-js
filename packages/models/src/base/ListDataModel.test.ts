import { ListDataModel } from "./ListDataModel.js";

test("exposes items and total count", () => {
  const model = new ListDataModel(["a", "b"], 17);

  expect(model.items).toEqual(["a", "b"]);
  expect(model.totalCount).toBe(17);
});

test("allows a total count larger than the page of items", () => {
  const model = new ListDataModel(["a"], 100);

  expect(model.items).toHaveLength(1);
  expect(model.totalCount).toBe(100);
});

test("handles an empty list", () => {
  const model = new ListDataModel([], 0);

  expect(model.items).toEqual([]);
  expect(model.totalCount).toBe(0);
});

test("freezes the item list", () => {
  const model = new ListDataModel(["a"], 1);

  expect(Object.isFrozen(model.items)).toBe(true);
});

test("does not freeze the items themselves", () => {
  const item = { id: "a" };

  const model = new ListDataModel([item], 1);

  expect(Object.isFrozen(model.items[0])).toBe(false);
});
