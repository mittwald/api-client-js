import { minimatch } from "minimatch";

import type { ValidationErrorMapping, MappingReturn } from "./types.js";

interface Options<T> {
  mappings: ValidationErrorMapping<T>;
  property: keyof T;
}

export const performMappings = <T>(source: T, options: Options<T>) => {
  const { property, mappings } = options;

  let mappedValue: MappingReturn | undefined;

  for (const [key, val] of Object.entries(mappings)) {
    if (mappedValue) {
      break;
    }
    const sourceValue = String(source[property]);
    const matching = minimatch(sourceValue, key);
    if (matching) {
      if (typeof val === "function") {
        mappedValue = val(source);
      } else {
        mappedValue = val;
      }
    }
  }

  if (mappedValue) {
    const mappedValueList = Array.isArray(mappedValue)
      ? mappedValue
      : [mappedValue];

    return mappedValueList.map((mappedProperty) => ({
      ...source,
      [property]: mappedProperty,
    }));
  }

  return [source];
};
