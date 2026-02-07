/**
 * Creates a new object with the specified keys omitted.
 *
 * @param object - The source object to omit keys from.
 * @param omitted - A key or array of keys to exclude from the result.
 * @returns A new object containing all entries from `object` except those with keys in `omitted`.
 */
export default function omit(
  object: Record<PropertyKey, unknown>, omitted: PropertyKey | PropertyKey[]
) {
  const omittedKeys = Array.isArray(omitted) ? omitted : [omitted];

  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !omittedKeys.includes(key))
  );
}
