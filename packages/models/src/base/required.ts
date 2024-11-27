import assert from "assert";

export function required<T>(
  value: T | undefined | null,
  valueType: string = "value",
): T {
  assert(
    value !== undefined && value !== null,
    `Expected ${valueType} not to be undefined`,
  );
  return value;
}
