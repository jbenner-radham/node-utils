/**
 * Returns a new array with duplicate values removed.
 *
 * @param array - The array to deduplicate.
 * @returns A new array containing only the first occurrence of each value.
 */
export default function unique<T>(array: T[]): T[] {
  // NOTE: This benchmarks significantly better than `return [...new Set(array)]`.
  return array.filter((item, index) => array.indexOf(item) === index);
}
