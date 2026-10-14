import {
  containsDateTimeInput,
  dateTimeInputTsType,
  widenDateTimeInputs,
} from "./dateTimeInput.js";

describe("widenDateTimeInputs", () => {
  test("widens a date-time string", () => {
    expect(
      widenDateTimeInputs({ type: "string", format: "date-time" }),
    ).toEqual({
      type: "string",
      format: "date-time",
      tsType: dateTimeInputTsType,
    });
  });

  test("does not widen date (YYYY-MM-DD has a different wire format)", () => {
    const schema = { type: "string", format: "date" };
    expect(widenDateTimeInputs(schema)).toEqual(schema);
  });

  test("does not widen plain strings", () => {
    const schema = { type: "string" };
    expect(widenDateTimeInputs(schema)).toEqual(schema);
  });

  test("does not widen enums", () => {
    const schema = {
      type: "string",
      format: "date-time",
      enum: ["2024-01-01T00:00:00Z"],
    };
    expect(widenDateTimeInputs(schema)).toEqual(schema);
  });

  test("does not overwrite an existing tsType", () => {
    const schema = {
      type: "string",
      format: "date-time",
      tsType: "SomethingElse",
    };
    expect(widenDateTimeInputs(schema)).toEqual(schema);
  });

  test("widens nested properties, arrays and compositions", () => {
    const dateTime = { type: "string", format: "date-time" };
    const widened = { ...dateTime, tsType: dateTimeInputTsType };

    expect(
      widenDateTimeInputs({
        type: "object",
        properties: {
          nested: { type: "object", properties: { at: dateTime } },
          list: { type: "array", items: dateTime },
          composed: { anyOf: [dateTime, { type: "null" }] },
          untouched: { type: "number" },
        },
      }),
    ).toEqual({
      type: "object",
      properties: {
        nested: { type: "object", properties: { at: widened } },
        list: { type: "array", items: widened },
        composed: { anyOf: [widened, { type: "null" }] },
        untouched: { type: "number" },
      },
    });
  });

  test("does not mutate the input", () => {
    const schema = {
      type: "object",
      properties: { at: { type: "string", format: "date-time" } },
    };
    const before = JSON.stringify(schema);
    widenDateTimeInputs(schema);
    expect(JSON.stringify(schema)).toBe(before);
  });

  test("leaves refs alone", () => {
    const schema = { $ref: "#/components/schemas/Foo" };
    expect(widenDateTimeInputs(schema)).toEqual(schema);
  });
});

describe("containsDateTimeInput", () => {
  test.each([
    [{ type: "string", format: "date-time" }, true],
    [{ type: "object", properties: { at: { $ref: "#/x" } } }, false],
    [
      {
        type: "object",
        properties: { at: { type: "string", format: "date-time" } },
      },
      true,
    ],
    [{ type: "object", properties: { at: { type: "string" } } }, false],
    [{ type: "string", format: "date" }, false],
    [{}, false],
  ])("works for test %#", (schema, expected) => {
    expect(containsDateTimeInput(schema)).toBe(expected);
  });
});
