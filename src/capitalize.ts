/**
 * Capitalizes the first character of a string.
 *
 * @param value - The string to capitalize.
 * @returns A new string with the first character in uppercase.
 */
export default function capitalize<T extends string>(value: T): Capitalize<T> {
  return (value.charAt(0).toUpperCase() + value.slice(1)) as Capitalize<T>;
}
