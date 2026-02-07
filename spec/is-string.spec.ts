import isString from '../src/is-string.js';
import { describe, expect, it } from 'vitest';

describe('isString', () => {
  it('returns true for a string', () => {
    expect(isString('hello')).toBe(true);
  });

  it('returns true for an empty string', () => {
    expect(isString('')).toBe(true);
  });

  it('returns false for a number', () => {
    expect(isString(42)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isString()).toBe(false);
  });
});
