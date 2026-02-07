/**
 * Converts a value to its string representation.
 *
 * @param value - The value to convert.
 * @returns The string representation of `value`.
 *
 * @example
 * ```typescript
 * toString(42);   // '42'
 * toString(null); // 'null'
 * ```
 */
export default function toString(value: unknown): string {
  return value?.toString?.() ?? String(value);
}
