import { DataModel } from "./DataModel.js";

class TestModel extends DataModel<{
  id: string;
  nested: { values: number[] };
}> {}

const makeData = () => ({ id: "abc", nested: { values: [1, 2] } });

test("exposes the given data", () => {
  const model = new TestModel(makeData());

  expect(model.data.id).toBe("abc");
  expect(model.data.nested.values).toEqual([1, 2]);
});

test("freezes the top level of the data", () => {
  const model = new TestModel(makeData());

  expect(Object.isFrozen(model.data)).toBe(true);
});

test("freezes nested objects and arrays", () => {
  const model = new TestModel(makeData());

  expect(Object.isFrozen(model.data.nested)).toBe(true);
  expect(Object.isFrozen(model.data.nested.values)).toBe(true);
});

test("rejects writes to the data", () => {
  const model = new TestModel(makeData());

  expect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (model.data as any).id = "changed";
  }).toThrow(TypeError);
  expect(model.data.id).toBe("abc");
});

test("freezes a copy and leaves the caller's object mutable", () => {
  const data = makeData();

  const model = new TestModel(data);

  expect(model.data).not.toBe(data);
  expect(model.data).toEqual(data);
  expect(Object.isFrozen(data)).toBe(false);
});

test("does not see later mutations of the caller's object", () => {
  const data = makeData();
  const model = new TestModel(data);

  data.id = "changed";

  expect(model.data.id).toBe("abc");
});

/**
 * `deepFreeze` treats every `typeof x === "object"` value as a plain object and
 * spreads it, which turns `null` into `{}`. API payloads use `null` for absent
 * values throughout, so any nullable field is silently rewritten here.
 */
test("replaces null values with an empty object", () => {
  class NullableModel extends DataModel<{ optional: string | null }> {}

  const model = new NullableModel({ optional: null });

  expect(model.data.optional).not.toBeNull();
  expect(model.data.optional).toEqual({});
});

/**
 * `deepFreeze` iterates `Object.keys()` and dereferences `obj[key].__proto__`,
 * which throws for a key whose value is explicitly `undefined`. JSON payloads
 * never contain `undefined`, but data objects assembled in TypeScript (object
 * spreads, optional fields set to `undefined`) do, and those crash here.
 */
test("throws for a property that is explicitly undefined", () => {
  class OptionalModel extends DataModel<{ optional?: string }> {}

  expect(() => new OptionalModel({ optional: undefined })).toThrow(TypeError);
});

test("accepts an omitted optional property", () => {
  class OptionalModel extends DataModel<{ optional?: string }> {}

  expect(new OptionalModel({}).data.optional).toBeUndefined();
});

/**
 * Same root cause as the `null` case: class instances are spread into plain
 * objects, so non-plain values such as `Date` lose their contents.
 */
test("flattens class instances such as Date into empty objects", () => {
  class WithDateModel extends DataModel<{ createdAt: Date }> {}

  const model = new WithDateModel({ createdAt: new Date("2026-01-01") });

  expect(model.data.createdAt).toEqual({});
});
