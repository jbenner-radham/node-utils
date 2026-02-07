/**
 * Checks whether the given value is a plain object.
 *
 * @remarks
 * A plain object is one created by the `Object` constructor, a `null` prototype, or an object
 * literal.
 *
 * @param value - The value to check.
 * @returns `true` if `value` is a plain object, `false` otherwise.
 *
 * @example
 * ```typescript
 * isPlainObject({ a: 1 }); // true
 * isPlainObject([1, 2]);   // false
 * ```
 */
export default function isPlainObject(value: unknown): value is Record<PropertyKey, unknown> {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value) as unknown;

  if (prototype !== null && prototype !== Object.prototype) {
    return false;
  }

  // This is needed for `Atomics`, `Intl`, `JSON`, `Math`, and `Reflect`.
  return !Object.hasOwn(value, Symbol.toStringTag);
}
