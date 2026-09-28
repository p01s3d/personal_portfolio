#!/usr/bin/env node
/**
 * Case-study content consistency guard.
 *
 * Why this exists: src/mix1/content.ts and src/mix1/markup/home.html
 * restate the same facts (org, title, dates, TVL, headcount) in several
 * independent places with no shared source of truth and nothing in the
 * type system enforcing agreement between them. A title or date can drift
 * out of sync in one spot and nothing catches it until a human reads two
 * pages side by side. This script is that read, automated.
 *
 * It is intentionally conservative: every check below is a structural
 * pattern-match against the *current* content, not a judgment about
 * whether a given number or title is *true*. It cannot verify facts —
 * only that the facts already present agree with each other and that no
 * internal-only artifact (an issue number, a version suffix, a TODO) has
 * leaked into user-facing copy. Failing checks are expected right now;
 * this script exists to make each gap re-detectable after every edit,
 * not to already be green.
 *
 * Run: node scripts/check-content-consistency.mjs
 * Exits non-zero if any check fails.
 */

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const CONTENT_PATH = join(ROOT, 'src/mix1/content.ts');
const HOME_PATH = join(ROOT, 'src/mix1/markup/home.html');

const content = readFileSync(CONTENT_PATH, 'utf8');
const home = existsSync(HOME_PATH) ? readFileSync(HOME_PATH, 'utf8') : '';

// ── Tiny bracket-depth splitter ─────────────────────────────────────────
// Regex alone can't safely carve up nested object literals. This walks
// balanced {...} pairs and pulls out each top-level entry of a named
// array export, which is all we need for mix1Projects / mix1Work.items.
function extractArrayEntries(source, arrayName) {
  const startMatch = source.match(new RegExp(`export const ${arrayName}[^=]*=\\s*\\[`));
  if (!startMatch) return [];
  let i = startMatch.index + startMatch[0].length;
  const entries = [];
  let depth = 0;
  let entryStart = -1;
  for (; i < source.length; i++) {
    const ch = source[i];
    if (ch === '{') {
      if (depth === 0) entryStart = i;
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0 && entryStart !== -1) {
        entries.push(source.slice(entryStart, i + 1));
        entryStart = -1;
      }
    } else if (depth === 0 && ch === ']') {
      break;
    }
  }
  return entries;
}

function field(entryText, key) {
  const m = entryText.match(new RegExp(`\\b${key}:\\s*'((?:[^'\\\\]|\\\\.)*)'`));
  return m ? m[1].replace(/\\'/g, "'") : null;
}

function fieldList(entryText, key) {
  // Pulls the first top-level array literal after `key:` and returns each
  // { role: '...', name: '...' } pair inside it — used for credits/clientCredits.
  const start = entryText.indexOf(`${key}:`);
  if (start === -1) return [];
  const openBracket = entryText.indexOf('[', start);
  if (openBracket === -1) return [];
  let depth = 0, i = openBracket, end = -1;
  for (; i < entryText.length; i++) {
    if (entryText[i] === '[') depth++;
    else if (entryText[i] === ']') { depth--; if (depth === 0) { end = i; break; } }
  }
  const slice = entryText.slice(openBracket, end + 1);
  const pairs = [];
  const pairRe = /\{\s*role:\s*'((?:[^'\\]|\\.)*)'\s*,\s*name:\s*'((?:[^'\\]|\\.)*)'\s*\}/g;
  let m;
  while ((m = pairRe.exec(slice)) !== null) pairs.push({ role: m[1], name: m[2] });
  return pairs;
}

const projectEntries = extractArrayEntries(content, 'mix1Projects');
const workItemEntries = extractArrayEntries(content, 'mix1Work\\.items|items');

const projects = projectEntries.map((text) => ({
  slug: field(text, 'slug'),
  name: field(text, 'name'),
  client: field(text, 'client'),
  year: field(text, 'year'),
  service: field(text, 'service'),
  credits: fieldList(text, 'credits'),
  clientCredits: fieldList(text, 'clientCredits'),
  raw: text,
}));

const failures = [];
const warnings = [];

function fail(check, msg) { failures.push({ check, msg }); }
function warn(check, msg) { warnings.push({ check, msg }); }

// ── Check 1: internal-only artifacts leaking into user-facing fields ───
{
  const LEAK_PATTERNS = [
    /\bv\d+\b/i,           // version suffixes: v8, v9
    /\bissue #?\d+\b/i,
    /\bTODO\(/,
    /claude-code-handoff/i,
    /\brealignment pass\b/i,
    /\bredundant callouts?\b/i,
  ];
  for (const p of projects) {
    for (const key of ['slug', 'name']) {
      const val = p[key];
      if (!val) continue;
      for (const pattern of LEAK_PATTERNS) {
        if (pattern.test(val)) {
          fail('internal-leak', `${p.slug ?? '(no slug)'}.${key} = "${val}" matches internal-artifact pattern ${pattern}`);
        }
      }
    }
    // Also scan the whole entry body (headline/intro/body/tags) for the same patterns —
    // catches leaks in prose fields, not just slug/name.
    for (const pattern of LEAK_PATTERNS) {
      const m = p.raw.match(pattern);
      if (m && !['slug', 'name'].some((k) => pattern.test(p[k] ?? ''))) {
        warn('internal-leak', `${p.slug ?? '(no slug)'} body contains "${m[0]}" — verify it's not a leaked editorial artifact`);
      }
    }
  }
}

// ── Check 2: role-label / title consistency within the same organization ─
{
  const byOrg = new Map();
  for (const p of projects) {
    if (!p.client) continue;
    if (!byOrg.has(p.client)) byOrg.set(p.client, []);
    byOrg.get(p.client).push(p);
  }
  for (const [org, entries] of byOrg) {
    if (entries.length < 2) continue;
    const roleLabels = new Set(
      entries.flatMap((e) => e.credits.length ? [e.credits[0].role] : [])
    );
    if (roleLabels.size > 1) {
      fail(
        'role-label-drift',
        `Organization "${org}" has ${roleLabels.size} distinct primary Credits role labels across ${entries.length} entries: ` +
          [...roleLabels].map((r) => `"${r}"`).join(', ') +
          ` (slugs: ${entries.map((e) => e.slug).join(', ')})`
      );
    }
    const years = new Set(entries.map((e) => e.year).filter(Boolean));
    if (years.size > 1) {
      fail(
        'date-inconsistency',
        `Organization "${org}" has ${years.size} distinct year values across entries: ` +
          [...years].map((y) => `"${y}"`).join(', ') +
          ` (slugs: ${entries.map((e) => `${e.slug}=${e.year}`).join(', ')})`
      );
    }
  }
}

// ── Check 3: Organization vs. Client field label ────────────────────────
{
  for (const p of projects) {
    const bad = p.clientCredits.find((c) => c.role === 'Client');
    if (bad) fail('organization-label', `${p.slug}: clientCredits uses role "Client" instead of "Organization" (name: "${bad.name}")`);
  }
}

// ── Check 4: Credits `name` field doesn't hide a real collaborator behind
//    the author's own company name for a role that implies a distinct person ─
{
  const PERSON_IMPLYING_ROLES = ['Contributing designer', 'Design systems'];
  for (const p of projects) {
    for (const c of p.credits) {
      if (PERSON_IMPLYING_ROLES.includes(c.role) && /LLC|Inc\.?$|Studio$/i.test(c.name)) {
        warn('credit-attribution', `${p.slug}: role "${c.role}" is credited to a company ("${c.name}") rather than a named person — confirm this isn't obscuring a real collaborator`);
      }
    }
  }
}

// ── Check 5: role-key collision risk (React uses `role` as list key) ────
{
  for (const p of projects) {
    for (const [listName, list] of [['credits', p.credits], ['clientCredits', p.clientCredits]]) {
      const seen = new Set();
      for (const c of list) {
        if (seen.has(c.role)) fail('key-collision', `${p.slug}.${listName} has duplicate role "${c.role}" — React list key collision`);
        seen.add(c.role);
      }
    }
  }
}

// ── Check 6: mix1Work.items reference a real mix1Projects slug ─────────
{
  const workNamesMatch = content.match(/items:\s*\[([\s\S]*?)\n\s*\],\n\}\s*as const;\n\nexport const mix1About/);
  const workBlock = workNamesMatch ? workNamesMatch[1] : '';
  const nameRe = /name:\s*'((?:[^'\\]|\\.)*)'/g;
  const workNames = [];
  let m;
  while ((m = nameRe.exec(workBlock)) !== null) workNames.push(m[1]);
  const projectNames = new Set(projects.map((p) => p.name));
  for (const n of workNames) {
    if (!projectNames.has(n)) {
      fail('orphaned-work-item', `mix1Work.items entry "${n}" has no matching mix1Projects entry — WorkPage.tsx will render it as a dead, unlinked card`);
    }
  }
}

// ── Check 7: home.html carousel links resolve to a live slug ───────────
if (home) {
  const hrefRe = /href="\/work\/([a-z0-9-]+)"/g;
  const liveSlugs = new Set(projects.map((p) => p.slug));
  let m;
  while ((m = hrefRe.exec(home)) !== null) {
    if (!liveSlugs.has(m[1])) {
      fail('broken-carousel-link', `home.html links to /work/${m[1]}, which is not a slug in mix1Projects`);
    }
  }
}

// ── Check 8: hero role/title field presence (structural — see gap analysis Finding 2) ─
{
  for (const p of projects) {
    const hasHeroRoleField = /\brole:\s*'/.test(p.raw.slice(0, p.raw.indexOf('credits:') === -1 ? p.raw.length : p.raw.indexOf('credits:')));
    if (!hasHeroRoleField) {
      warn('missing-hero-role', `${p.slug}: no top-level "role" field found before Credits — ProjectPage.tsx hero has nothing to render for job title (only Organization/sector/year/service)`);
    }
  }
}

// ── Report ───────────────────────────────────────────────────────────────
function printGroup(label, items) {
  if (items.length === 0) return;
  console.log(`\n${label} (${items.length}):`);
  const byCheck = new Map();
  for (const it of items) {
    if (!byCheck.has(it.check)) byCheck.set(it.check, []);
    byCheck.get(it.check).push(it.msg);
  }
  for (const [check, msgs] of byCheck) {
    console.log(`  [${check}]`);
    for (const msg of msgs) console.log(`    - ${msg}`);
  }
}

console.log(`Scanned ${projects.length} entries in mix1Projects.`);
printGroup('✗ FAILURES', failures);
printGroup('⚠ WARNINGS (review, not blocking)', warnings);

if (failures.length === 0) {
  console.log('\n✓ content consistency check passed — no structural drift detected.');
  process.exit(0);
} else {
  console.error(`\n✗ content consistency check FAILED — ${failures.length} issue(s) above.`);
  process.exit(1);
}
