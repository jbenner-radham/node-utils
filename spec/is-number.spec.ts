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
    expect(isNumber()).toBe(false);
  });

  it('returns false for NaN when rejectNaN is true', () => {
    expect(isNumber(Number.NaN, { rejectNaN: true })).toBe(false);
  });

  it('returns true for a number when rejectNaN is true', () => {
    expect(isNumber(42, { rejectNaN: true })).toBe(true);
  });
});
