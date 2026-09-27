# Credits vocabulary

Canonical reference for the `credits` / `clientCredits` fields on every
project in `src/mix1/content.ts` (`mixProjects`). Nothing in the code
enforces any of this — `role` and `name` are free-text strings with no
interface, enum, or allowlist (see `src/mix1/pages/ProjectPage.tsx`,
where the Credits block just maps over whatever's there). This doc is
the only thing standing between that flexibility and drift. Check new
or edited Credits entries against it before committing.

## The `name` field

Just a name — the person or company being credited. Nothing else. It's
rendered as a single list item directly under the role label, with no
support for qualifiers, parentheticals, or scope explanations. If a
role's actual scope needs explaining, that explanation belongs in the
case study's own prose (see **Role & scope**, below), never bolted
onto `name`.

## The Organization field

`role: 'Organization'` on the client-side (`clientCredits`) entry names
the entity the work was done for or within — whether that was an
external client engagement, a full-time employer, or an embedded role.
"Organization" is used instead of "Client" because several projects on
this site weren't client work at all (Mezo, BlockFi were full-time
roles), and "Client" misrepresents those. Every `clientCredits` entry
should use `Organization`, not `Client`.

## The Industry field

Not yet part of the schema (tracked separately). When added, it's a
short, open-ended classification of what kind of company/product the
project was for — e.g. `fintech`, `DeFi`, `food delivery`,
`cybersecurity`, `voice AI` — derived from what's actually represented
across current projects, not a fixed enum. Add a new value when a new
project needs one; don't force-fit into an existing category if it
doesn't belong.

## Role & scope

The Credits `role` field shows only a confirmed, real title. Connect
two titles with `→` only when the title itself changed during the
engagement — not when the scope of work grew while the title stayed
the same.

If scope grew without a title change, that story belongs in the
project's own opening prose (its `intro`, or the first featured
section's lead), never in the Credits field. The Credits block
identifies who did the work and under what title. The case study
explains what the work actually covered.

## Canonical role labels

Twelve labels currently in use, kept distinct rather than merged. Two
pairs look similar enough to invite silent merging — resolved here so
they don't get accidentally collapsed later:

- **`Product design` vs. `Design lead`** — different scope, not a
  naming inconsistency. `Product design` is individual-craft work on a
  specific flow, no team or system ownership implied
  (`deposit-on-mezo`, `borrow-musd`). `Design lead` is used where the
  role owned a system and managed collaborators (`mezo-clay`:
  direct report + engineering contributor; `cash-native-app`: sole 0→1
  lead).
- **`Design strategy & execution` vs. `Design lead`** — also distinct,
  and merging them would understate the broader role. `Design
  strategy & execution` (`blockfi-director-of-design`) covers a
  founding/sole design leader directing vision across product design,
  blockchain, front-end, back-end, security, and go-to-market while
  scaling the org 1→4 — a wider, more senior mandate than `Design
  lead` implies elsewhere on the site.

Full list:

| Label | Side | Used on |
|---|---|---|
| `Senior Design Operations Manager → Senior Principal Designer` | credits | `mezo-leadership-v9` (real title change, see **Role & scope**) |
| `Design systems` | credits | `mezo-leadership-v9` |
| `Design lead` | credits | `mezo-clay`, `cash-native-app` |
| `Contributing designer` | credits | `mezo-clay` |
| `Engineering` | credits | most projects |
| `Product design` | credits | `deposit-on-mezo`, `borrow-musd` |
| `Design strategy & execution` | credits | `blockfi-director-of-design` |
| `Design consultant` | credits | `easi-food-delivery`, `krisp-ai` |
| `Organization` | clientCredits | see **The Organization field** |
| `Head of Design` | clientCredits | `mezo-leadership-v9` |
| `PM` | clientCredits | most projects |

## Status

Written from a direct code audit of `mixProjects` and `ProjectPage.tsx`.
Some existing `clientCredits` entries still read `role: 'Client'`
rather than `Organization` — that migration is tracked separately, not
part of this doc.
