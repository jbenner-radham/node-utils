/**
 * Checks whether the given value is a number.
 *
 * @param value - The value to check.
 * @returns `true` if `value` is a number, `false` otherwise.
 *
 * @example
 * ```typescript
 * isNumber(42);   // true
 * isNumber('42'); // false
 * ```
 */
export default function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}
