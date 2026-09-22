import { expect, test } from "vitest";

import { formatTokenUsage } from "./helper";

test("formatTokenUsage returns '0' for zero tokens", () => {
  expect(formatTokenUsage(0)).toBe("0");
});

test("formatTokenUsage formats millions correctly with default digits", () => {
  expect(formatTokenUsage(1_000_000)).toBe("1,0");
  expect(formatTokenUsage(2_500_000)).toBe("2,5");
  expect(formatTokenUsage(10_000_000)).toBe("10,0");
});

test("formatTokenUsage formats millions correctly with custom digits", () => {
  expect(formatTokenUsage(1_234_567, 2)).toBe("1,23");
  expect(formatTokenUsage(1_234_567, 3)).toBe("1,235");
  expect(formatTokenUsage(5_000_000, 0)).toBe("5");
});

test("formatTokenUsage shows '< threshold' for very small values", () => {
  expect(formatTokenUsage(50_000)).toBe("< 0,1");
  expect(formatTokenUsage(1_000)).toBe("< 0,1");
  expect(formatTokenUsage(99_999)).toBe("< 0,1");
});

test("formatTokenUsage shows '< threshold' with custom digits", () => {
  expect(formatTokenUsage(5_000, 2)).toBe("< 0,01");
  expect(formatTokenUsage(999, 3)).toBe("< 0,001");
});

test("formatTokenUsage handles threshold boundary correctly", () => {
  expect(formatTokenUsage(100_000, 1)).toBe("0,1");
  expect(formatTokenUsage(99_999, 1)).toBe("< 0,1");

  expect(formatTokenUsage(10_000, 2)).toBe("0,01");
  expect(formatTokenUsage(9_999, 2)).toBe("< 0,01");
});

test("formatTokenUsage uses German number format", () => {
  expect(formatTokenUsage(1_500_000)).toBe("1,5");
  expect(formatTokenUsage(123_456_789, 2)).toBe("123,46");
});

test("formatTokenUsage handles large numbers", () => {
  expect(formatTokenUsage(1_000_000_000, 1)).toBe("1.000,0");
  expect(formatTokenUsage(999_999_999, 2)).toBe("1.000,00");
});
