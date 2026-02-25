/**
 * Returns a promise that resolves after the specified number of milliseconds.
 *
 * @param milliseconds - The number of milliseconds to sleep. Defaults to `0`.
 * @returns A promise that resolves after the delay.
 *
 * @example
 * ```typescript
 * await sleep(1_000); // pauses execution for 1 second
 * ```
 */
export default function sleep(milliseconds: number = 0): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
