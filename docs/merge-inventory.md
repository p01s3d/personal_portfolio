# Wave 1b inventory — Mezo IC merge and BlockFi split

Read-only inventory per `02b-wave-1b-merge-split-inventory.md`. No site files changed by this task (one small factual fix — stale "$151M TVL at mainnet" and "Christmas holiday" leftovers in `mezo-clay`'s own body — landed separately just before this, flagged in chat, not part of this inventory's output). Source: `src/mix1/content.ts` as of commit `a6a591e`.

---

## Task 1b.1 — Mezo IC trio, verbatim

### `mezo-clay` — "Mezo Clay: $200M+ TVL"

| Field | Value |
|---|---|
| slug | `mezo-clay` |
| name | `Mezo Clay: $200M+ TVL` |
| client | `Mezo / Thesis` |
| sector | `Crypto` |
| year | `2024–2026` |
| service | `Systems` |
| readTime | `4` |
| headline (dead field, unrendered) | `Converting design debt into product infrastructure` |
| intro (dead field, unrendered) | *"What starts as a styling override always becomes a system problem. At Mezo, three product phases — legacy, testnet, mainnet — had accumulated enough inconsistency to slow every team touching the product. The work was infrastructure first, interface second."* |
| tech | Foundation: Uber Base → Mezo Clay · Implementation: React + WCAG 2.2 · Scale: 2,000+ variants · 50+ components |
| tags | Design systems, Lead, Crypto, WCAG 2.2, React, Component library |
| credits | Design lead: Osandi Robinson · Contributing designer: Poised LLC · Engineering: Thesis engineering |
| clientCredits | Organization: Mezo / Thesis · PM: Thesis product team |
| closingLead | *"Infrastructure that outlasts the sprint cycle is the difference between a design system and a component dump."* |

**Body sections, in order:**
1. **"Building the single source of truth"** — led the Mezo Clay migration, partnered with Uber Base, WCAG 2.2-compliant React library; post-launch audit identified premature styling as the primary implementation bottleneck.
2. **"Scale, compliance, and delivery"** — partnered with the contributing designer on quality standards; built/tested every variant against deposit/borrow/wallet/explore; *"the infrastructure behind $322M in testnet deposits, 154K transactions, and TVL that peaked at $200M+ during testnet."*
3. **"What the audit revealed"** — 70% component integration rate, the 30% gap told the real story (one-off overrides); audit measured delivery three ways (component inventory, debt-vs-usage, heuristic usability review); system came together over four sprint cycles; cut product development time by a factor of four.
4. **"What I'd do differently"** *(added this session)* — lost dedicated engineering support to reprioritization/org churn; ties to external design-systems research (zeroheight/Design Systems Collective) on adoption vs. technical elegance and staggered rollout against legacy products.

**Stats:** Component integration 70% (internal) · TVL peak, testnet $200M+ (Mezo-reported) · Testnet deposits $322M (publicly sourced) · Sprint completion 98% (internal)

### `deposit-on-mezo` — "Mezo Deposits: $200M+ TVL"

| Field | Value |
|---|---|
| slug | `deposit-on-mezo` |
| name | `Mezo Deposits: $200M+ TVL` |
| client / sector / year / service / readTime | Mezo / Thesis · Crypto · 2024–2026 · Product · 3 |
| headline (dead) | `Improving the deposit flow that unlocked Mezo's liquidity` |
| intro (dead) | *"Depositing Bitcoin to Mezo wasn't a standard transfer. Users were bridging assets across chains into a protocol where a wrong address meant permanent loss of funds. The bar for clarity wasn't high — it was non-negotiable."* |
| tech | Platform: Mobile + Web · Method: Research-led redesign · Protocol: Bitcoin bridge · cross-chain |
| tags | Product design, Crypto, Fintech, Research, Mobile, Web |
| credits | Product design: Osandi Robinson · Engineering: Thesis engineering |
| clientCredits | Organization: Mezo / Thesis · PM: Thesis product team |
| closingLead | *"Clarity at the point of commitment is not a UX nicety in a protocol where a wrong address means permanent loss."* |

**Body sections:**
1. **"Diagnosing the problem"** — research confirmed the flow was broken pre-redesign (risky/confusing); redesign added upfront instructions, network context, thresholds, unambiguous success states.
2. **"Outcome and downstream impact"** — vaults/pools/rewards depended on this flow; *"contributing directly to TVL that peaked at $200M+ during testnet"*; 98% sprint completion.
3. **"What the flow had to solve for"** — cross-functional sign-off standard, tied to Mezo's broader operational rebuild (no prior shared done-readiness definition).
4. **"What I'd do differently"** *(added this session)* — deposit work should've been sequenced with the mainnet build itself, not after; shipped mobile-first patterns that deviated from pre-attrition patterns, addressing inherited debt but arriving late.

**Stats:** TVL peak, testnet $200M+ (Mezo-reported) · Active users 43,500+ (Mezo-reported, April 2026) · Sprint completion 98% (internal)

### `borrow-musd` — "Mezo Borrow: 43.5K+ Users"

| Field | Value |
|---|---|
| slug | `borrow-musd` |
| name | `Mezo Borrow: 43.5K+ Users` |
| client / sector / year / service / readTime | Mezo / Thesis · Crypto · 2024–2026 · Product · 3 |
| headline (dead) | `Making high-stakes borrowing feel safe, not complex` |
| intro (dead) | *"MUSD borrowing required users to hold collateralization ratio, liquidation threshold, and variable APR in their heads simultaneously. None of those concepts have mainstream equivalents. The design problem was weight, not simplification."* |
| tech | Platform: Mobile + Web · Method: Progressive disclosure · benchmarking · Protocol: MUSD collateralized borrowing |
| tags | Product design, Crypto, DeFi, Research, Progressive disclosure |
| credits | Product design: Osandi Robinson · Engineering: Thesis engineering |
| clientCredits | Organization: Mezo / Thesis · PM: Thesis product team |
| closingLead | *"The job isn't to make DeFi simple. It's to make consequential decisions feel proportionally weighted."* |

**Body sections:**
1. **"Progressive disclosure as the primary tool"** — surfaced complexity only when relevant; error handling consolidated to a single inline signal.
2. **"Expanding the addressable market"** — borrowed interaction models from familiar financial interfaces; shipped as part of mainnet launch suite, *"contributing to TVL that peaked at $200M+ during testnet."*
3. **"What I'd do differently"** *(added this session)* — shipped without fully verifying utility first; prototype testing existed but wasn't resourced/used; better sequence would've been one verifiable segment before mainstream adoption push.

**Stats:** TVL peak, testnet $200M+ (Mezo-reported) · Active users 43,500+ (Mezo-reported, April 2026)

### Figure table — all three entries

| Figure | Appears in | Point-in-time / cumulative | Testnet / mainnet | Internal / sourced |
|---|---|---|---|---|
| $200M+ TVL peak | All three (stats + body) | point-in-time peak | **testnet** | Mezo-reported (a search hit, not primary-sourced) |
| $322M testnet deposits | mezo-clay only | cumulative | testnet | publicly sourced (CoinDesk, PRNewswire) |
| 154K transactions | mezo-clay only | cumulative | testnet | publicly sourced |
| 43,500+ active users | deposit-on-mezo, borrow-musd | point-in-time | mainnet | Mezo-reported, dated April 2026 |
| 70% component integration | mezo-clay | point-in-time (post-launch audit) | unstated | internal |
| 98% sprint completion | mezo-clay, deposit-on-mezo | cumulative across engagement | unstated | internal |
| 2,000+ variants · 50+ components | mezo-clay (`tech.Scale`) | cumulative | unstated | internal — **conflicts with the leadership entry's own "1,000+" variant count; author confirmed this is inconsequential, not resolving here** |
| "factor of four" / four sprint cycles | mezo-clay | — | unstated | internal, author-confirmed this session (no external documentation) |

### Cross-references between the three, and to the leadership entry

- All three share identical `client` (`Mezo / Thesis`) and identical `clientCredits` (Organization: Mezo/Thesis, PM: Thesis product team).
- `mezo-clay` credits "Poised LLC" as **Contributing designer** — this maps to the leadership entry's own body ("I brought on a former direct report... over four sprint cycles, we shipped a full component library") — same person, described two different ways across sibling entries.
- Credits role labels disagree across the trio and against the leadership entry's real title: `mezo-clay` → "Design lead"; `deposit-on-mezo`/`borrow-musd` → "Product design"; leadership entry → "Senior Design Operations Manager → Senior Principal Designer" (the real, confirmed title). This is the standing `check:content` failure.
- None of the three states a job title or explicit Role & Scope line anywhere in prose — only Credits carries any title-like information, and it disagrees across all three.
- No entry currently links to either of its siblings or to the leadership entry inline (no "see also," no cross-reference text).

---

## Task 1b.2 — BlockFi, split into piles

Full entry verbatim is above (read in full this turn — slug `blockfi-product-design-leader`, name `BlockFi: $1.5M→$50M/mo`).

| Section / stat / image | Pile |
|---|---|
| "The Opportunity" (full section — no design function, no product ops, no design system, no documentation, no user testing, stakeholder interviews, Designer Fund Level Up read, category context) | **Management** |
| "Leadership" — directed design across full product line; Series D/valuation/assets/revenue business context; built the structure (design system as standing responsibility, cross-functional design vision, GTM partnership, risk/compliance visibility) | **Management** |
| "Leadership Impact" — scaled 1→4, design system cut delivery ~4x, roadmap, 20%+ YoY target met; risk/compliance authority-gap learning | **Management** |
| "Hands On Design Contribution" — three products designed by hand (native trading app, web trading premium redesign + recurring trades, credit card rewards end-to-end + IA rebuild) | **IC** |
| "Individual Contributor Impact" — Forbes quote; mobile trade volume +200%; card launch/cardholder/spend/BTC-rewards figures | **IC** |
| "Learnings" (full section) | **Shared** — the design system / roadmap / hand-built products are named together as "the record of that work" in the first paragraph; the authority-vs-correctness lesson in the second paragraph is a management-altitude reflection but frames the whole engagement, not just the leadership half. Doesn't cleanly split without either duplicating it or cutting the parts that reference IC work. Not assigned.
| Stats: Design function growth 1→4, Platform assets $1B→$15B, Monthly revenue $1.5M→$50M, YoY growth target 20%+ | **Management** |
| Stats: Delivery speed ~4x | **Shared** — attributed to "the design system," which the Management pile owns, but stated as enabling "delivery on new work," which is closer to IC output. Not assigned.
| Stats: Mobile trade volume +200%, Active cardholders 50,000+, Annualized card spend pace $2B+, BTC rewards distributed 120+ BTC | **IC** |
| `tech`: Role → Director of Product Design | **Shared** — the title covers the whole tenure, not one half |
| `tech`: Method → Stakeholder research · Designer Fund Level Up | **Management** |
| `tech`: Platform → iOS + Android + Web | **Shared** |
| `screenCarousel` (4 placeholder frames, marked pending real screens for marketplace/credit card/BIA/native trading) | **IC** — the frames are explicitly the surfaces this role covered hands-on |
| Credits: Director of Product Design / Engineering | **Shared** |
| clientCredits: PM / Organization | **Shared** |

---

## Task 1b.3 — Wiring inventory

**`mix1Work.items`** (rendered on `/work`, `src/mix1/content.ts` lines ~41–107): entries for all four appear, matched to their `mix1Projects` counterpart by exact `name` string (`WorkPage.tsx` does `mix1Projects.find(p => p.name === item.name)`). Current order in the array: `mezo-clay` → `deposit-on-mezo` → `borrow-musd` → `blockfi-product-design-leader` → `cash-native-app` → `easi-food-delivery` → `krisp-ai` → `mezo-product-design-ops-leader`. Each has its own `headline`/`desc`/`image`/`service`/`sector` — separate prose from the full entry, not shared.

**Home carousel** (`src/mix1/markup/home.html`, the `#work` slider, lines ~46–49 for these four): direct `href="/work/<slug>"` links with their own `alt`/title/description text, same relative order as `mix1Work.items`.

**Hard-coded links / cross-references:** none found between these four entries or to any other entry. No "next project" links exist anywhere in `mix1Projects` (that field exists only in the orphaned, unused `src/content/project.ts`).

**Redirect logic:** `src/App.tsx` currently has redirects only for the already-retired slugs (`mezo-leadership-v9`, the intermediate `mezo-product-design-operations`, `blockfi-director-of-design`). **No redirect exists yet for any of `mezo-clay`, `deposit-on-mezo`, `borrow-musd`, or `blockfi-product-design-leader`** — all four are live, real slugs today with no retirement path wired.

**What a redirect from each retiring slug would need** (not added — this is inventory only):
- `work/mezo-clay`, `work/deposit-on-mezo`, `work/borrow-musd` → all three would redirect to whatever slug the merged Mezo IC entry gets.
- `work/blockfi-product-design-leader` → would need to redirect to *one* of the two new BlockFi slugs (management or IC) — the split makes the choice non-obvious, since the same slug currently serves both audiences. Worth deciding explicitly rather than defaulting to one silently.

---

## Closing lists

### 1. Unclear which track/workstream something belongs to

- BlockFi's **"Learnings"** section (see Task 1b.2) — references both the built system/roadmap and the hand-built products in one reflection. Splitting it duplicates content or cuts a real half of the thought.
- BlockFi's **"Delivery speed ~4x"** stat — attributed to the design system (Management-owned) but framed as speed on "new work" generally, which reads IC-adjacent.
- BlockFi's **`tech.Role`** and **Credits** — the title spans the whole tenure; splitting into two entries means deciding whether both get the same title or whether the IC entry needs different framing (e.g. "as Director of Product Design, hands-on...").
- The Mezo trio's workstream mapping into the merged entry isn't in this inventory yet — Wave 1b's own instructions treat that as the *next* step, done against this material, not decided here.

### 2. Inconsistencies between the entries

- **Variant count**: mezo-clay says "2,000+ variants · 50+ base components"; the leadership entry says "1,000+" variants. Author confirmed this is inconsequential — not resolving, just recorded per the instruction to list every figure once with its label.
- **Credits role labels**: three different strings ("Design lead," "Product design" ×2) for one person's one real title, across the trio — the standing `check:content` failure.
- **"Contributing designer" attribution**: `mezo-clay` credits "Poised LLC" (a company) where the leadership entry's prose describes a specific person ("a former direct report"). Confirmed intentional by the author earlier this session — recorded here since it's a real cross-entry inconsistency, not re-litigated.
- **No redirect coverage**: all four slugs are live with zero retirement path currently wired (see Task 1b.3) — this isn't a content inconsistency but is a real gap the merge/split will need to close, not assumed already handled.
