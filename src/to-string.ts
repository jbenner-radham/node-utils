/**
 * Converts a value to its string representation.
 *
 * @param value - The value to convert.
 * @returns The string representation of `value`.
 */
export function toString(value: unknown): string {
  return value?.toString?.() ?? String(value);
}
