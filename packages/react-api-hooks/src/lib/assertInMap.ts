/**
 * Utility functions round about Maps.
 *
 * @packageDocumentation
 * @module misc/maps
 * @preferred
 */

/**
 * Gets a value from a map by key. If the value is not in the map, this function adds the given value
 * before, so that you get a value in any case.
 *
 * ```typescript
 * // `val` is either 42 or the value at "my-key"
 * const val = assertInMap(mapWithValues, "my-key", 42);
 * ```
 *
 * @typeparam TKey - The type of the maps key
 * @typeparam TValue - The type of the maps value
 * @param map - The map where to look after key
 * @param key - The key
 * @param val - This value will be inserted into the map, if there is no value for the given key
 * @returns The value at the given key or `val`
 */
export const assertInMap = <TKey, TValue>(map: Map<TKey, TValue>, key: TKey, val: TValue): TValue => {
    if (map.has(key)) {
        return map.get(key)!;
    }
    map.set(key, val);
    return val;
};
