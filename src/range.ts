/**
 * Creates an array of numbers from `start` (inclusive) to `end` (exclusive).
 *
 * @remarks
 * When called with a single argument, it generates a range from `0` to that value.
 *
 * @param startOrEnd - The start of the range if `maybeEnd` is provided, otherwise the end.
 * @param maybeEnd - The end of the range (exclusive).
 * @returns An array of sequential numbers.
 *
 * @example
 * ```typescript
 * range(4);    // [0, 1, 2, 3]
 * range(2, 5); // [2, 3, 4]
 * ```
 */
export default function range(startOrEnd: number, maybeEnd?: number): number[] {
  const start = maybeEnd === undefined ? 0 : startOrEnd;
  const end = maybeEnd ?? startOrEnd;

  return Array.from({ length: end - start }, (_, index) => start + index);
}
