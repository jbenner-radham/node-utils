import unique from '../src/unique.js';
import { describe, expect, it } from 'vitest';

describe('unique', () => {
  it('removes duplicate values', () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  it('preserves order of first occurrences', () => {
    expect(unique([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
  });

  it('returns an empty array when given an empty array', () => {
    expect(unique([])).toEqual([]);
  });

  it('returns the same elements when there are no duplicates', () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
