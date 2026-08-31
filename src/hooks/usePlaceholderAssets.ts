import { useSyncExternalStore } from 'react';
import { pickPlaceholder, type PlaceholderRatio } from '../content/placeholderAssets';

const STORAGE_KEY = 'poised-placeholder-assets';

function readInitial(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

let state = readInitial();
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function setPlaceholderAssets(on: boolean) {
  state = on;
  try {
    window.localStorage.setItem(STORAGE_KEY, on ? '1' : '0');
  } catch {
    // localStorage unavailable — in-memory state still updates for this session
  }
  emit();
}

export function togglePlaceholderAssets() {
  setPlaceholderAssets(!state);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

export function usePlaceholderAssets() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

/** Resolves to a test placeholder (matched by aspect ratio) when the toggle is on, else the real src. */
export function useTestImage(realSrc: string, ratio: PlaceholderRatio, seed?: string): string {
  const on = usePlaceholderAssets();
  return on ? pickPlaceholder(ratio, seed ?? realSrc) : realSrc;
}
