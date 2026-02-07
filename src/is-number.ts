/**
 * Checks whether the given value is a number.
 *
 * @param value - The value to check.
 * @returns `true` if `value` is a number, `false` otherwise.
 */
export default function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}
