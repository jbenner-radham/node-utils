/**
 * Composes multiple functions into a single function that applies them from left to right.
 *
 * @param functions - The functions to compose, each taking and returning the same type.
 * @returns A function that pipes a value through each function in order.
 */
export default function compose<T>(...functions: Array<(value: T) => T>): (value: T) => T {
  return (value: T) => functions.reduce((accumulator, fn) => fn(accumulator), value);
}
