import { describe, it, expect } from 'vitest';
import type { NDKEvent } from '@nostr-dev-kit/ndk';
import {
  isBlocked,
  isMasterGardener,
  isGardener,
  isWhitelisted,
  hasRequiredTag,
  hasGardenerTag,
  extractImagesFromContent,
  extractImagesFromImeta,
  extractImagesFromEventTags,
  extractImages,
  filterEvent,
  filterEvents
} from './filters';
import { masterGardener, gardeners, blocklist } from './config';

// ---------------------------------------------------------------------------
// Mock helper
// ---------------------------------------------------------------------------

function mockEvent(overrides: {
  pubkey?: string;
  content?: string;
  tags?: string[][];
  created_at?: number;
} = {}): NDKEvent {
  const tags = overrides.tags ?? [];
  return {
    pubkey: overrides.pubkey ?? 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',
    content: overrides.content ?? '',
    tags,
    created_at: overrides.created_at ?? 1000000,
    id: 'mock-id-' + Math.random(),
    getMatchingTags: (name: string) => tags.filter((t) => t[0] === name)
  } as unknown as NDKEvent;
}

const PLEB_PUBKEY = 'cafecafecafecafecafecafecafecafecafecafecafecafecafecafecafecafe';

// ---------------------------------------------------------------------------
// isBlocked
// ---------------------------------------------------------------------------

describe('isBlocked', () => {
  it('returns true for a pubkey on the blocklist', () => {
    expect(isBlocked(blocklist[0])).toBe(true);
  });

  it('returns false for an unknown pubkey', () => {
    expect(isBlocked(PLEB_PUBKEY)).toBe(false);
  });

  it('is case-insensitive', () => {
    expect(isBlocked(blocklist[0].toUpperCase())).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// isMasterGardener
// ---------------------------------------------------------------------------

describe('isMasterGardener', () => {
  it('returns true for the master gardener pubkey', () => {
    expect(isMasterGardener(masterGardener)).toBe(true);
  });

  it('returns false for a gardener pubkey', () => {
    expect(isMasterGardener(gardeners[0])).toBe(false);
  });

  it('returns false for an unknown pubkey', () => {
    expect(isMasterGardener(PLEB_PUBKEY)).toBe(false);
  });

  it('is case-insensitive', () => {
    expect(isMasterGardener(masterGardener.toUpperCase())).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// isGardener
// ---------------------------------------------------------------------------

describe('isGardener', () => {
  it('returns true for a known gardener pubkey', () => {
    expect(isGardener(gardeners[0])).toBe(true);
  });

  it('returns false for the master gardener (not in gardeners array)', () => {
    expect(isGardener(masterGardener)).toBe(false);
  });

  it('returns false for an unknown pubkey', () => {
    expect(isGardener(PLEB_PUBKEY)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// isWhitelisted
// ---------------------------------------------------------------------------

describe('isWhitelisted', () => {
  it('returns true for master gardener', () => {
    expect(isWhitelisted(masterGardener)).toBe(true);
  });

  it('returns true for a gardener', () => {
    expect(isWhitelisted(gardeners[0])).toBe(true);
  });

  it('returns false for pleb', () => {
    expect(isWhitelisted(PLEB_PUBKEY)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// hasRequiredTag
// ---------------------------------------------------------------------------

describe('hasRequiredTag', () => {
  it('returns true for event with #nostrgardnpost tag', () => {
    const event = mockEvent({ tags: [['t', 'nostrgardnpost']] });
    expect(hasRequiredTag(event)).toBe(true);
  });

  it('returns false for event with unrelated tags', () => {
    const event = mockEvent({ tags: [['t', 'bitcoin'], ['t', 'nostr']] });
    expect(hasRequiredTag(event)).toBe(false);
  });

  it('returns false for event with no tags', () => {
    const event = mockEvent({ tags: [] });
    expect(hasRequiredTag(event)).toBe(false);
  });

  it('is case-insensitive for the tag value', () => {
    const event = mockEvent({ tags: [['t', 'NOSTRGARDNPOST']] });
    expect(hasRequiredTag(event)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// hasGardenerTag
// ---------------------------------------------------------------------------

describe('hasGardenerTag', () => {
  it('returns true for event with #gardn tag', () => {
    const event = mockEvent({ tags: [['t', 'gardn']] });
    expect(hasGardenerTag(event)).toBe(true);
  });

  it('returns false for event without #gardn tag', () => {
    const event = mockEvent({ tags: [['t', 'garden']] });
    expect(hasGardenerTag(event)).toBe(false);
  });

  it('is case-insensitive', () => {
    const event = mockEvent({ tags: [['t', 'GARDN']] });
    expect(hasGardenerTag(event)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// extractImagesFromContent
// ---------------------------------------------------------------------------

describe('extractImagesFromContent', () => {
  it('extracts a .jpg URL', () => {
    const result = extractImagesFromContent('Check this out https://example.com/photo.jpg nice pic');
    expect(result).toContain('https://example.com/photo.jpg');
  });

  it('extracts a .png URL', () => {
    const result = extractImagesFromContent('https://example.com/image.png');
    expect(result).toContain('https://example.com/image.png');
  });

  it('extracts nostr.build CDN URLs', () => {
    const result = extractImagesFromContent('https://cdn.nostr.build/abc123');
    expect(result).toContain('https://cdn.nostr.build/abc123');
  });

  it('returns empty array when no images found', () => {
    const result = extractImagesFromContent('just plain text, no images here');
    expect(result).toHaveLength(0);
  });

  it('extracts multiple URLs from one string', () => {
    const result = extractImagesFromContent(
      'https://example.com/a.jpg and https://example.com/b.png'
    );
    expect(result).toHaveLength(2);
  });
});

// ---------------------------------------------------------------------------
// extractImagesFromImeta
// ---------------------------------------------------------------------------

describe('extractImagesFromImeta', () => {
  it('extracts URL from a well-formed imeta tag', () => {
    const event = mockEvent({
      tags: [['imeta', 'url https://example.com/photo.webp', 'm image/webp', 'dim 800x600']]
    });
    const result = extractImagesFromImeta(event);
    expect(result).toContain('https://example.com/photo.webp');
  });

  it('extracts multiple URLs from multiple imeta tags', () => {
    const event = mockEvent({
      tags: [
        ['imeta', 'url https://example.com/a.jpg'],
        ['imeta', 'url https://example.com/b.jpg']
      ]
    });
    const result = extractImagesFromImeta(event);
    expect(result).toHaveLength(2);
  });

  it('ignores non-url fields in imeta tags', () => {
    const event = mockEvent({
      tags: [['imeta', 'm image/jpeg', 'dim 400x300']]
    });
    const result = extractImagesFromImeta(event);
    expect(result).toHaveLength(0);
  });

  it('returns empty array when no imeta tags present', () => {
    const event = mockEvent({ tags: [['t', 'gardn']] });
    const result = extractImagesFromImeta(event);
    expect(result).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// extractImagesFromEventTags
// ---------------------------------------------------------------------------

describe('extractImagesFromEventTags', () => {
  it('extracts URL from image tag', () => {
    const event = mockEvent({ tags: [['image', 'https://example.com/thumb.jpg']] });
    const result = extractImagesFromEventTags(event);
    expect(result).toContain('https://example.com/thumb.jpg');
  });

  it('extracts URL from thumb tag', () => {
    const event = mockEvent({ tags: [['thumb', 'https://example.com/thumb.jpg']] });
    const result = extractImagesFromEventTags(event);
    expect(result).toContain('https://example.com/thumb.jpg');
  });

  it('returns empty array for events with no image/thumb tags', () => {
    const event = mockEvent({ tags: [['t', 'gardn']] });
    const result = extractImagesFromEventTags(event);
    expect(result).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// extractImages (integration: all three strategies combined)
// ---------------------------------------------------------------------------

describe('extractImages', () => {
  it('prefers imeta over content regex (deduplicates)', () => {
    const url = 'https://example.com/photo.jpg';
    const event = mockEvent({
      content: url,
      tags: [['imeta', `url ${url}`]]
    });
    const result = extractImages(url, event);
    // Should appear only once despite being found by both strategies
    expect(result.filter((u) => u === url)).toHaveLength(1);
  });

  it('falls back to content regex when no tags', () => {
    const event = mockEvent({ content: 'see https://example.com/photo.png for details' });
    const result = extractImages(event.content, event);
    expect(result).toContain('https://example.com/photo.png');
  });

  it('returns empty array when no images anywhere', () => {
    const event = mockEvent({ content: 'just text' });
    expect(extractImages(event.content, event)).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// filterEvent — the decision tree
// ---------------------------------------------------------------------------

describe('filterEvent', () => {
  it('returns null for a blocked pubkey', () => {
    const event = mockEvent({ pubkey: blocklist[0] });
    expect(filterEvent(event)).toBeNull();
  });

  it('returns full post for master gardener with no restrictions', () => {
    const event = mockEvent({ pubkey: masterGardener, content: 'anything goes' });
    const result = filterEvent(event);
    expect(result).not.toBeNull();
    expect(result?.displayType).toBe('full');
    expect(result?.reason).toBe('whitelist');
  });

  it('returns full post for gardener with #gardn tag', () => {
    const event = mockEvent({
      pubkey: gardeners[0],
      tags: [['t', 'gardn']],
      content: 'gardener post'
    });
    const result = filterEvent(event);
    expect(result).not.toBeNull();
    expect(result?.displayType).toBe('full');
  });

  it('returns null for gardener without #gardn tag', () => {
    const event = mockEvent({
      pubkey: gardeners[0],
      tags: [['t', 'bitcoin']] // wrong tag
    });
    expect(filterEvent(event)).toBeNull();
  });

  it('returns null for pleb with no required tag', () => {
    const event = mockEvent({
      pubkey: PLEB_PUBKEY,
      content: 'https://example.com/photo.jpg',
      tags: [['t', 'bitcoin']]
    });
    expect(filterEvent(event)).toBeNull();
  });

  it('returns null for pleb with required tag but no images', () => {
    const event = mockEvent({
      pubkey: PLEB_PUBKEY,
      content: 'text only post, no image',
      tags: [['t', 'nostrgardnpost']]
    });
    expect(filterEvent(event)).toBeNull();
  });

  it('returns image-only post for pleb with required tag + images', () => {
    const event = mockEvent({
      pubkey: PLEB_PUBKEY,
      content: 'look at my garden https://example.com/garden.jpg',
      tags: [['t', 'nostrgardnpost']]
    });
    const result = filterEvent(event);
    expect(result).not.toBeNull();
    expect(result?.displayType).toBe('image-only');
    expect(result?.reason).toBe('tagged-with-images');
    expect(result?.images).toContain('https://example.com/garden.jpg');
  });
});

// ---------------------------------------------------------------------------
// filterEvents — sorting
// ---------------------------------------------------------------------------

describe('filterEvents', () => {
  it('returns posts sorted by createdAt descending', () => {
    const events = [
      mockEvent({ pubkey: masterGardener, created_at: 100 }),
      mockEvent({ pubkey: masterGardener, created_at: 300 }),
      mockEvent({ pubkey: masterGardener, created_at: 200 })
    ];
    const posts = filterEvents(events);
    expect(posts[0].createdAt).toBe(300);
    expect(posts[1].createdAt).toBe(200);
    expect(posts[2].createdAt).toBe(100);
  });

  it('filters out rejected events', () => {
    const events = [
      mockEvent({ pubkey: masterGardener }),       // allowed
      mockEvent({ pubkey: blocklist[0] }),          // blocked
      mockEvent({ pubkey: PLEB_PUBKEY, content: 'no tag no image' }) // rejected
    ];
    const posts = filterEvents(events);
    expect(posts).toHaveLength(1);
  });

  it('accepts Set<NDKEvent> as input', () => {
    const events = new Set([mockEvent({ pubkey: masterGardener })]);
    const posts = filterEvents(events);
    expect(posts).toHaveLength(1);
  });
});
