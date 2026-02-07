/**
 * Checks whether the given value is a number.
 *
 * @param value - The value to check.
 * @param options - Optional configuration.
 * @param options.finite - When `true`, only finite numbers are considered valid (`NaN` and
 *   `Infinity` return `false`).
 * @returns `true` if `value` is a number, `false` otherwise.
 *
 * @example
 * ```typescript
 * isNumber(42);                         // true
 * isNumber('42');                       // false
 * isNumber(NaN);                        // true
 * isNumber(NaN, { finite: true });      // false
 * isNumber(Infinity, { finite: true }); // false
 * ```
 */
export default function isNumber(
  value: unknown, options?: { finite?: boolean }
): value is number {
  return typeof value === 'number' && (!options?.finite || Number.isFinite(value));
}
