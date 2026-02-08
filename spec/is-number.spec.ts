import isNumber from '../src/is-number.js';
import { describe, expect, it } from 'vitest';

describe('isNumber', () => {
  it('returns true for a number', () => {
    expect(isNumber(42)).toBe(true);
  });

  it('returns true for NaN', () => {
    expect(isNumber(Number.NaN)).toBe(true);
  });

  it('returns false for a string', () => {
    expect(isNumber('42')).toBe(false);
  });

  it('returns false for undefined', () => {
    // @ts-expect-error No argument provided purposely.
    expect(isNumber()).toBe(false);
  });

  it('returns true for a finite number when finite is true', () => {
    expect(isNumber(42, { finite: true })).toBe(true);
  });

  it('returns false for NaN when finite is true', () => {
    expect(isNumber(Number.NaN, { finite: true })).toBe(false);
  });

  it('returns false for Infinity when finite is true', () => {
    expect(isNumber(Number.POSITIVE_INFINITY, { finite: true })).toBe(false);
  });

  it('returns false for -Infinity when finite is true', () => {
    expect(isNumber(Number.NEGATIVE_INFINITY, { finite: true })).toBe(false);
  });
});
