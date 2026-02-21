import { describe, it, expect } from 'vitest';
import { formatDate, truncatedBech } from './utils';

describe('formatDate', () => {
  it('formats an ISO date string as medium style', () => {
    // 'medium' style: e.g. "Jan 1, 2024"
    const result = formatDate('2024-01-15');
    expect(result).toMatch(/jan/i);
    expect(result).toMatch(/2024/);
  });

  it('accepts dateStyle override', () => {
    const medium = formatDate('2024-06-15', 'medium');
    const short = formatDate('2024-06-15', 'short');
    expect(medium).not.toBe(short);
  });
});

describe('truncatedBech', () => {
  it('truncates a long bech32 string with ellipsis', () => {
    const long = 'npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
    const result = truncatedBech(long);
    expect(result).toContain('...');
    expect(result.length).toBeLessThan(long.length);
  });

  it('preserves the first 9 characters by default', () => {
    const long = 'npub1abcdefghijklmnopqrstuvwxyz';
    const result = truncatedBech(long);
    expect(result.startsWith('npub1abcd')).toBe(true);
  });

  it('preserves the last 9 characters', () => {
    const long = 'npub1abcdefghijklmnopqrstuvwxyz';
    const result = truncatedBech(long);
    expect(result.endsWith('tuvwxyz')).toBe(true);
  });

  it('accepts a custom length parameter', () => {
    const long = 'npub1abcdefghijklmnopqrstuvwxyz';
    const result = truncatedBech(long, 5);
    expect(result.startsWith('npub1')).toBe(true);
  });
});
