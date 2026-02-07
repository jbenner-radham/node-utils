/**
 * Executes a function and returns its result, or `undefined` if it throws.
 *
 * @param callback - The function to execute.
 * @returns The return value of `callback`, or `undefined` if an error is thrown.
 *
 * @example
 * ```typescript
 * attempt(() => JSON.parse('{"a":1}')); // { a: 1 }
 * attempt(() => JSON.parse('invalid')); // undefined
 * ```
 */
export default function attempt<T>(callback: () => T): T | undefined {
  try {
    return callback();
  } catch { /* Do nothing. */ }
}
