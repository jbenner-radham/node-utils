/**
 * Composes multiple functions into a single function that applies them from left to right.
 *
 * @param functions - The functions to compose, each taking and returning the same type.
 * @returns A function that pipes a value through each function in order.
 *
 * @example
 * ```typescript
 * const addOne = (value: number) => value + 1;
 * const double = (value: number) => value * 2;
 *
 * compose(addOne, double)(3); // 8
 * ```
 */
export default function compose<T>(...functions: Array<(value: T) => T>): (value: T) => T {
  return (value: T) => functions.reduce((accumulator, fn) => fn(accumulator), value);
}
