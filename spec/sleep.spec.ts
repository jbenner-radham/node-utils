import sleep from '../src/sleep.js';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('sleep', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns a promise', () => {
    const result = sleep(100);

    expect(result).toBeInstanceOf(Promise);
  });

  it('resolves after the specified milliseconds', async () => {
    let resolved = false;

    // eslint-disable-next-line @stylistic/max-statements-per-line
    sleep(500).then(() => { resolved = true; });

    expect(resolved).toBe(false);

    vi.advanceTimersByTime(499);
    await Promise.resolve();

    expect(resolved).toBe(false);

    vi.advanceTimersByTime(1);
    await Promise.resolve();

    expect(resolved).toBe(true);
  });

  it('defaults to 0 milliseconds', async () => {
    let resolved = false;

    // eslint-disable-next-line @stylistic/max-statements-per-line
    sleep().then(() => { resolved = true; });

    expect(resolved).toBe(false);

    vi.advanceTimersByTime(0);
    await Promise.resolve();

    expect(resolved).toBe(true);
  });

  it('resolves with undefined', async () => {
    const promise = sleep(0);

    vi.advanceTimersByTime(0);

    await expect(promise).resolves.toBeUndefined();
  });
});
