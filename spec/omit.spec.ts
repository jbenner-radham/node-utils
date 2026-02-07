import omit from '../src/omit.js';
import { describe, expect, it } from 'vitest';

describe('omit', () => {
  it('omits a single key', () => {
    expect(omit({ a: 1, b: 2 }, 'a')).toEqual({ b: 2 });
  });

  it('omits multiple keys', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ b: 2 });
  });

  it('returns all entries when omitting a key that does not exist', () => {
    expect(omit({ a: 1 }, 'b')).toEqual({ a: 1 });
  });

  it('returns an empty object when all keys are omitted', () => {
    expect(omit({ a: 1 }, 'a')).toEqual({});
  });
});
