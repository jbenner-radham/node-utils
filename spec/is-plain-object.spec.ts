import isPlainObject from '../src/is-plain-object.js';
import { describe, expect, it } from 'vitest';

describe('isPlainObject', () => {
  it('returns true for an object literal', () => {
    expect(isPlainObject({ a: 1 })).toBe(true);
  });

  it('returns true for new Object', () => {
    expect(isPlainObject(new Object())).toBe(true);
  });

  it('returns true for an object with a null prototype', () => {
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('returns false for null', () => {
    expect(isPlainObject(null)).toBe(false);
  });

  it('returns false for an array', () => {
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });

  it('returns false for a class instance', () => {
    expect(isPlainObject(new Date())).toBe(false);
  });
});
