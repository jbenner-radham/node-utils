/**
 * Checks whether the given value is a number.
 *
 * @param value - The value to check.
 * @param options - Optional configuration.
 * @param options.rejectNaN - When `true`, `NaN` is not considered a number.
 * @returns `true` if `value` is a number, `false` otherwise.
 *
 * @example
 * ```typescript
 * isNumber(42);                       // true
 * isNumber('42');                     // false
 * isNumber(NaN);                      // true
 * isNumber(NaN, { rejectNaN: true }); // false
 * ```
 */
export default function isNumber(
  value: unknown, options?: { rejectNaN?: boolean }
): value is number {
  return typeof value === 'number' && !(options?.rejectNaN && Number.isNaN(value));
}
