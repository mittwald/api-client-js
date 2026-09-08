import { serializeDates } from "./serializeDates.js";

const date = new Date("2024-10-12T09:08:07.006Z");
const iso = "2024-10-12T09:08:07.006Z";

describe("serializeDates", () => {
  test("converts a Date to an ISO 8601 string", () => {
    expect(serializeDates(date)).toBe(iso);
  });

  test("converts Dates nested in objects", () => {
    expect(serializeDates({ data: { terminationTargetDate: date } })).toEqual({
      data: { terminationTargetDate: iso },
    });
  });

  test("converts Dates in arrays", () => {
    expect(serializeDates({ dates: [date, date] })).toEqual({
      dates: [iso, iso],
    });
  });

  test("converts Dates in arrays of objects", () => {
    expect(serializeDates([{ at: date }])).toEqual([{ at: iso }]);
  });

  test("passes strings through unchanged", () => {
    expect(serializeDates({ at: iso })).toEqual({ at: iso });
  });

  test("keeps null and undefined", () => {
    expect(serializeDates({ a: null, b: undefined })).toEqual({
      a: null,
      b: undefined,
    });
    expect(serializeDates(null)).toBeNull();
    expect(serializeDates(undefined)).toBeUndefined();
  });

  test("keeps other primitives", () => {
    expect(serializeDates({ a: 1, b: true, c: "x" })).toEqual({
      a: 1,
      b: true,
      c: "x",
    });
  });

  test("leaves non-plain objects untouched and by reference", () => {
    class Custom {
      public readonly at = date;
    }
    const custom = new Custom();
    const params = new URLSearchParams({ a: "b" });
    const bytes = new Uint8Array([1, 2, 3]);
    const map = new Map([["a", date]]);

    const result = serializeDates({ custom, params, bytes, map });

    expect(result.custom).toBe(custom);
    expect(result.params).toBe(params);
    expect(result.bytes).toBe(bytes);
    expect(result.map).toBe(map);
  });

  test("does not mutate the input", () => {
    const input = { data: { at: date, list: [date] } };
    serializeDates(input);
    expect(input.data.at).toBe(date);
    expect(input.data.list[0]).toBe(date);
  });

  test("handles objects without a prototype", () => {
    const input = Object.assign(Object.create(null), { at: date });
    expect(serializeDates(input)).toEqual({ at: iso });
  });

  test("handles an invalid Date by throwing, as Date#toISOString does", () => {
    expect(() => serializeDates(new Date(NaN))).toThrow(RangeError);
  });
});
