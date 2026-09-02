// Top-level path prefixes owned by the standalone reference rooms.
// Everything else (root included) belongs to mix1, the live portfolio.
export const OTHER_ROOM_PREFIXES = ['/studio', '/craft', '/1sap', '/os1', '/obs', '/andk'];

export function isMix1Path(pathname: string) {
  return !OTHER_ROOM_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}
