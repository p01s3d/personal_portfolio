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

## Industry / category classification

Not a separate field — this is the existing `sector` field on each
`mixProjects` entry (`'Crypto'`, `'Fintech'`, `'Consumer'`, `'AI'`). A
proposal to add a dedicated `industry` field was closed as redundant:
`sector` already renders on the project detail hero
(`ProjectPage.tsx`, next to the year) and already drives `/work` grid
filtering via the `sectors` list. Don't add a second classification
field alongside it.

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

Eleven labels currently in use, kept distinct rather than merged. One
pair looks similar enough to invite silent merging — resolved here so
it doesn't get accidentally collapsed later:

- **`Product design` vs. `Design lead`** — different scope, not a
  naming inconsistency. `Product design` is individual-craft work on a
  specific flow, no team or system ownership implied
  (`deposit-on-mezo`, `borrow-musd`). `Design lead` is used where the
  role owned a system and managed collaborators (`mezo-clay`:
  direct report + engineering contributor).

`blockfi-product-design-leader` previously used `Design strategy &
execution` here — a scope description standing in for the title,
against the **Role & scope** rule directly above it. Corrected to the
confirmed real title, `Director of Product Design` (see
`01-inputs-to-fill.md` I-1). The broader mandate that label was trying
to capture — directing vision across product design, blockchain,
front-end, back-end, security, and go-to-market while scaling the org
1→4 — belongs in the case study's own prose, which already covers it
in the "Leadership" section, not in a Credits label doing double duty.

Full list:

| Label | Side | Used on |
|---|---|---|
| `Senior Design Operations Manager → Senior Principal Designer` | credits | `mezo-product-design-ops-leader` (real title change, see **Role & scope**) |
| `Design systems` | credits | `mezo-product-design-ops-leader` |
| `Design lead` | credits | `mezo-clay` |
| `Contributing designer` | credits | `mezo-clay` |
| `Engineering` | credits | most projects |
| `Product design` | credits | `deposit-on-mezo`, `borrow-musd` |
| `Director of Product Design` | credits | `blockfi-product-design-leader` (real title, confirmed — see `01-inputs-to-fill.md` I-1) |
| `Founding Head of Design` | credits | `cash-native-app` (real title, confirmed by the author — see `01-inputs-to-fill.md` I-13) |
| `Design consultant` | credits | `krisp-ai` |
| `Design strategist` | credits | `easi-food-delivery` (author-stated role: design strategist and IC lead) |
| `Organization` | clientCredits | see **The Organization field** |
| `Head of Design` | clientCredits | `mezo-product-design-ops-leader` |
| `PM` | clientCredits | most projects |

## Status

Written from a direct code audit of `mixProjects` and `ProjectPage.tsx`.
Some existing `clientCredits` entries still read `role: 'Client'`
rather than `Organization` — that migration is tracked separately, not
part of this doc.
