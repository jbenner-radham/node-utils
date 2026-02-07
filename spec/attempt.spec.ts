import attempt from '../src/attempt.js';
import { describe, expect, it } from 'vitest';

describe('attempt', () => {
  it('returns the return value of the callback', () => {
    expect(attempt(() => 'hello')).toBe('hello');
  });

  it('returns undefined when the callback throws', () => {
    // eslint-disable-next-line @stylistic/max-statements-per-line
    expect(attempt(() => { throw new Error('fail'); })).toBeUndefined();
  });
});
