import compose from '../src/compose.js';
import { describe, expect, it } from 'vitest';

describe('compose', () => {
  it('applies functions from left to right', () => {
    const addOne = (value: number) => value + 1;
    const double = (value: number) => value * 2;

    expect(compose(addOne, double)(3)).toBe(8);
  });

  it('returns the input value when given no functions', () => {
    expect(compose<number>()(5)).toBe(5);
  });

  it('works with a single function', () => {
    const addOne = (value: number) => value + 1;

    expect(compose(addOne)(3)).toBe(4);
  });
});
