import invariant from "tiny-invariant";

export function required<T>(
  value: T | undefined | null,
  valueType = "value",
): T {
  invariant(
    value !== undefined && value !== null,
    `Expected ${valueType} not to be undefined`,
  );
  return value;
}
