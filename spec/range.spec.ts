import range from '../src/range.js';
import { describe, expect, it } from 'vitest';

describe('range', () => {
  it('generates a range from 0 to end with a single argument', () => {
    expect(range(4)).toEqual([0, 1, 2, 3]);
  });

  it('generates a range from start to end with two arguments', () => {
    expect(range(2, 5)).toEqual([2, 3, 4]);
  });

  it('returns an empty array when start equals end', () => {
    expect(range(3, 3)).toEqual([]);
  });

  it('returns an empty array when called with 0', () => {
    expect(range(0)).toEqual([]);
  });
});
