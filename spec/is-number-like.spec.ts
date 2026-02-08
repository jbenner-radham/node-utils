import isNumberLike from '../src/is-number-like.js';
import { describe, expect, it } from 'vitest';

describe('isNumberLike', () => {
  it('returns true for a number', () => {
    expect(isNumberLike(42)).toBe(true);
  });

  it('returns true for a numeric string', () => {
    expect(isNumberLike('42')).toBe(true);
  });

  it('returns true for a negative numeric string', () => {
    expect(isNumberLike('-3.14')).toBe(true);
  });

  it('returns true for an exponential notation numeric string', () => {
    expect(isNumberLike('1e6')).toBe(true);
  });

  it('returns false for a bigint', () => {
    expect(isNumberLike(1n)).toBe(false);
  });

  it('returns false for a bigint string', () => {
    expect(isNumberLike('1n')).toBe(false);
  });

  it('returns false for a numeric string which contains numeric separators', () => {
    expect(isNumberLike('1_000_000')).toBe(false);
  });

  it('returns true for the string "NaN"', () => {
    expect(isNumberLike('NaN')).toBe(true);
  });

  it('returns true for the string "Infinity"', () => {
    expect(isNumberLike('Infinity')).toBe(true);
  });

  it('returns true for the string "-Infinity"', () => {
    expect(isNumberLike('-Infinity')).toBe(true);
  });

  it('returns true for NaN', () => {
    expect(isNumberLike(Number.NaN)).toBe(true);
  });

  it('returns false for a non-numeric string', () => {
    expect(isNumberLike('abc')).toBe(false);
  });

  it('returns false for an empty string', () => {
    expect(isNumberLike('')).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isNumberLike(undefined)).toBe(false);
  });

  it('returns false for null', () => {
    expect(isNumberLike(null)).toBe(false);
  });

  it('returns false for a boolean', () => {
    expect(isNumberLike(true)).toBe(false);
  });

  describe('with bigint option', () => {
    it('returns true for a bigint when bigint is true', () => {
      expect(isNumberLike(1n, { bigint: true })).toBe(true);
    });

    it('returns true for a numeric string when bigint is true', () => {
      expect(isNumberLike('42', { bigint: true })).toBe(true);
    });

    it('returns true for a negative numeric string when bigint is true', () => {
      expect(isNumberLike('-42', { bigint: true })).toBe(true);
    });

    it('returns false for a non-numeric string when bigint is true', () => {
      expect(isNumberLike('abc', { bigint: true })).toBe(false);
    });

    it('returns false for a decimal string when bigint is true', () => {
      expect(isNumberLike('3.14', { bigint: true })).toBe(false);
    });
  });

  describe('with finite option', () => {
    it('returns true for a finite number', () => {
      expect(isNumberLike(42, { finite: true })).toBe(true);
    });

    it('returns true for a finite numeric string', () => {
      expect(isNumberLike('42', { finite: true })).toBe(true);
    });

    it('returns false for NaN when finite is true', () => {
      expect(isNumberLike(Number.NaN, { finite: true })).toBe(false);
    });

    it('returns false for the string "NaN" when finite is true', () => {
      expect(isNumberLike('NaN', { finite: true })).toBe(false);
    });

    it('returns false for the string "Infinity" when finite is true', () => {
      expect(isNumberLike('Infinity', { finite: true })).toBe(false);
    });

    it('returns false for the string "-Infinity" when finite is true', () => {
      expect(isNumberLike('-Infinity', { finite: true })).toBe(false);
    });

    it('returns false for Infinity when finite is true', () => {
      expect(isNumberLike(Number.POSITIVE_INFINITY, { finite: true })).toBe(false);
    });

    it('returns false for -Infinity when finite is true', () => {
      expect(isNumberLike(Number.NEGATIVE_INFINITY, { finite: true })).toBe(false);
    });
  });
});
