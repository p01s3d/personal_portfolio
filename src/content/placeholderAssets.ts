/**
 * Test placeholder pool from GitHub issue #62, grouped by the aspect ratio
 * that best matches each site slot (see MediaFrame/CSS aspect-ratio callers).
 * Ratios not represented here (3:4 hero cells, 4:3 roll stage, 3:4 portraits)
 * have no close match in the issue's assets and are left on real content.
 */
export const placeholderAssets = {
  '4:5': [
    '/images/placeholder/ratio-4x5-01.svg',
    '/images/placeholder/ratio-4x5-02.svg',
    '/images/placeholder/ratio-4x5-03.svg',
    '/images/placeholder/ratio-4x5-04.svg',
    '/images/placeholder/ratio-4x5-05.svg',
    '/images/placeholder/ratio-4x5-06.svg',
  ],
  '16:10': [
    '/images/placeholder/ratio-16x10-01.svg',
    '/images/placeholder/ratio-16x10-02.svg',
    '/images/placeholder/ratio-16x10-03.svg',
  ],
  '16:9': ['/images/placeholder/ratio-16x9-01.svg', '/images/placeholder/ratio-16x9-02.svg'],
  square: ['/images/placeholder/ratio-square-01.svg', '/images/placeholder/ratio-square-02.svg', '/images/placeholder/ratio-square-03.svg'],
} as const;

export type PlaceholderRatio = keyof typeof placeholderAssets;

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/** Deterministic pick so a given real src always resolves to the same placeholder. */
export function pickPlaceholder(ratio: PlaceholderRatio, seed: string): string {
  const bucket = placeholderAssets[ratio];
  return bucket[hashString(seed) % bucket.length];
}
