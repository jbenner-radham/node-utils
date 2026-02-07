/**
 * Checks whether the given value is a plain object.
 *
 * @remarks
 * A plain object is one created by the `Object` constructor or with a `null` prototype.
 *
 * @param value - The value to check.
 * @returns `true` if `value` is a plain object, `false` otherwise.
 */
export default function isPlainObject(value: unknown): value is Record<PropertyKey, unknown> {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value) as unknown;

  return prototype === null || prototype === Object.prototype;
}
