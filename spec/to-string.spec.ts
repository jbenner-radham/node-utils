import toString from '../src/to-string.js';
import { describe, expect, it } from 'vitest';

describe('toString', () => {
  it('converts a number to a string', () => {
    expect(toString(42)).toBe('42');
  });

  it('converts null to a string', () => {
    expect(toString(null)).toBe('null');
  });

  it('converts undefined to a string', () => {
    expect(toString()).toBe('undefined');
  });

  it('converts an object with a custom toString method', () => {
    expect(toString({ toString: () => 'custom' })).toBe('custom');
  });
});
