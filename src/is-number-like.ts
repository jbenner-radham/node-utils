import attempt from './attempt.js';
import isNumber from './is-number.js';

/**
 * Checks whether the given value is a number or can be coerced to one.
 *
 * @remarks
 * This function only considers actual numbers and strings that represent numbers as
 * number-like. Even though the values `''`, `false`, and `null` convert to `0`, and
 * `true` converts to `1`, none of these are considered number-like by this function.
 *
 * @param value - The value to check.
 * @param options - Optional configuration.
 * @param options.bigint - When `true`, bigints and strings that can be converted to
 *   bigints are considered valid.
 * @param options.finite - When `true`, only finite numbers are considered valid (`NaN`,
 *   `Infinity`, and their string equivalents return `false`).
 * @returns `true` if `value` is number-like, `false` otherwise.
 *
 * @example
 * ```typescript
 * isNumberLike(42);                           // true
 * isNumberLike('42');                         // true
 * isNumberLike('3.14');                       // true
 * isNumberLike('NaN');                        // true
 * isNumberLike('NaN', { finite: true });      // false
 * isNumberLike('Infinity', { finite: true }); // false
 * isNumberLike('abc');                        // false
 * isNumberLike(null);                         // false
 * isNumberLike(1n);                           // false
 * isNumberLike(1n, { bigint: true });         // true
 * isNumberLike('1n', { bigint: true });       // true
 * ```
 */
export default function isNumberLike(
  value: unknown, options?: { bigint?: boolean; finite?: boolean }
): value is number {
  // `Number()` will coerce bigints to numbers, so we need to make this check.
  if (typeof value === 'bigint') {
    return Boolean(options?.bigint);
  }

  if (typeof value === 'string' && options?.bigint) {
    return Boolean(attempt(() => BigInt(value)) ?? false);
  }

  const infiniteNumberStrings = ['-Infinity', 'Infinity', 'NaN'];

  if (typeof value === 'string' && infiniteNumberStrings.includes(value)) {
    return !options?.finite;
  }

  // These values are converted to `0` by `Number()`.
  const falsyNumberValues = ['', false, null];

  // These values are converted to `1` by `Number()`.
  const truthyNumberValues = [true];

  if (
    falsyNumberValues.includes(value as boolean | null | string) ||
    truthyNumberValues.includes(value as boolean)
  ) {
    return false;
  }

  const numberValue = Number(value);

  if (typeof value !== 'number' && Number.isNaN(numberValue)) {
    return false;
  }

  return isNumber(numberValue, options);
}
