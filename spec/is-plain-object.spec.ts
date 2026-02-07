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

  it('returns false for the Array object', () => {
    expect(isPlainObject(Array)).toBe(false);
  });

  it('returns false for the Atomics object', () => {
    expect(isPlainObject(Atomics)).toBe(false);
  });

  it('returns false for the Intl object', () => {
    expect(isPlainObject(Intl)).toBe(false);
  });

  it('returns false for the JSON object', () => {
    expect(isPlainObject(JSON)).toBe(false);
  });

  it('returns false for the Math object', () => {
    expect(isPlainObject(Math)).toBe(false);
  });

  it('returns false for the Reflect object', () => {
    expect(isPlainObject(Reflect)).toBe(false);
  });
});
