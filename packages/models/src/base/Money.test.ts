import { Money } from "./Money.js";

test("defaults to EUR", () => {
  expect(Money({ amount: 1000 }).getCurrency()).toBe("EUR");
});

test("defaults to a precision of two decimals", () => {
  expect(Money({ amount: 1000 }).getPrecision()).toBe(2);
  expect(Money({ amount: 1000 }).toUnit()).toBe(10);
});

test("formats using the German locale by default", () => {
  expect(Money({ amount: 123456 }).toFormat("0,0.00")).toBe("1.234,56");
});

test("keeps an explicitly given currency", () => {
  expect(Money({ amount: 1000, currency: "USD" }).getCurrency()).toBe("USD");
});

test("adds amounts of the same currency", () => {
  const sum = Money({ amount: 1000 }).add(Money({ amount: 500 }));

  expect(sum.getAmount()).toBe(1500);
});
