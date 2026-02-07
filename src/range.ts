/**
 * Creates an array of integers from `start` (inclusive) to `end` (exclusive).
 *
 * @remarks
 * When called with a single argument, it generates a range from `0` to that value.
 *
 * @param startOrEnd - The start of the range if `maybeEnd` is provided, otherwise the end.
 * @param maybeEnd - The end of the range (exclusive). Must be greater than or equal to `start`.
 * @returns An array of sequential integers.
 *
 * @throws {@link TypeError} If either argument is not a finite integer.
 * @throws {@link RangeError} If `start` is greater than `end`.
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

  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    throw new TypeError(`Expected integer arguments, received start (${start}), and end (${end}).`);
  }

  const length = end - start;

  if (length < 0) {
    throw new RangeError(`Invalid range: start (${start}) must not be greater than end (${end}).`);
  }

  return Array.from({ length }, (_, index) => start + index);
}
