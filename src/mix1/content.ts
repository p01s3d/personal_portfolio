export const EMAIL = 'osandi.designs@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/osandi';
export const DECK = 'https://bit.ly/osandi_design_deck_2026';

export const mix1Nav = [
  { name: 'Work', to: '/work' },
  { name: 'About', to: '/about' },
] as const;

export const mix1Work = {
  title: 'Work',
  intro:
    'Leading for impact, then designing for it — org infrastructure, product surfaces, and the numbers that followed.',
  introLines: [
    'Leading for impact, then designing for it — org',
    'infrastructure, product surfaces, and the numbers',
    'that followed.',
  ],
  services: [
    { id: 'all', label: 'All' },
    { id: 'product', label: 'Product' },
    { id: 'systems', label: 'Systems' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'consultant', label: 'Consultant' },
  ],
  sectors: [
    { id: 'all', label: 'All' },
    { id: 'crypto', label: 'Crypto' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'consumer', label: 'Consumer' },
    { id: 'ai', label: 'AI' },
  ],
  impact: [
    { org: 'BlockFi', value: '$1.5M → $50M', label: 'monthly revenue' },
    // TVL/users pair sourced together (Mezo-reported, late April 2026) —
    // kept as a matched snapshot rather than mixing an earlier TVL peak
    // with a later user count.
    { org: 'Mezo', value: '$70M+', label: 'mainnet TVL · 43,500+ users' },
    { org: 'a16z', value: '0 → 1', label: 'design function' },
    { org: 'EASI', value: '$500M+', label: 'acquisition valuation' },
    { org: 'Mezo', value: '~40%', label: 'conversion vs. 30% OKR' },
    { org: 'Vinyl Crate', value: '$250K', label: 'dev cost saved' },
  ],
  items: [
    {
      name: 'Mezo Clay: $70M+ TVL',
      headline: 'Mezo Clay turned design debt into $70M+ in TVL',
      desc: "43,500+ users run on Clay, the design system every Mezo product surface shipped from. As Senior Design Operations Manager, I owned Clay and Mezo's product operations, closing the override gap that was slowing every team touching the product. The system cut feature build time from six-plus weeks to two, a 4x multiplier from ideation to build, and reached 60.9% of the app's component usage six days before mainnet.",
      image: '/images/placeholder-mix1/ratio-451x567.svg',
      service: 'systems',
      sector: 'crypto',
    },
    {
      name: 'Mezo Deposits: $200M+ TVL',
      headline: 'Improving the deposit flow that unlocked Mezo’s liquidity',
      desc: 'Depositing Bitcoin to Mezo wasn’t a standard transfer — users were bridging assets across chains into a protocol where a wrong address meant permanent loss of funds. Research confirmed the existing deposit flow was fundamentally broken — perceived as risky and confusing. The redesign introduced upfront deposit instructions, surfaced network context and minimum thresholds before commitment, and provided unambiguous success states so users knew their funds had arrived safely. The deposit flow became the primary on-ramp enabling liquidity for vaults, pools, and rewards — contributing to TVL that peaked at $200M+ during testnet.',
      image: '/images/placeholder-mix1/ratio-451x567.svg',
      service: 'product',
      sector: 'crypto',
    },
    {
      name: 'Mezo Borrow: 43.5K+ Users',
      headline: 'Making high-stakes borrowing feel safe, not complex',
      desc: 'MUSD borrowing required users to understand collateralization, liquidation risk, and variable APR simultaneously — concepts that had no mainstream equivalent. The design challenge wasn’t simplification for its own sake; it was making consequential financial decisions feel appropriately weighted without overwhelming users into inaction. The redesign introduced progressive disclosure, consolidated error handling to a single inline signal, and leaned on benchmarked design patterns to lower the entry cost for users coming from traditional finance. Borrow shipped as part of the mainnet launch suite, contributing to TVL that peaked at $200M+ during testnet.',
      image: '/images/placeholder-mix1/ratio-451x567.svg',
      service: 'product',
      sector: 'crypto',
    },
    {
      name: 'BlockFi: $1.5M→$50M/mo',
      headline: 'Building BlockFi\'s design function from zero, across web, mobile, and credit card rewards',
      desc: "BlockFi hired me as its first design leader into a company with no in-house design function, no product operations, and no design system. I built all three — directing design across the marketplace, credit card rewards, and BlockFi Interest Accounts for retail and institutional customers, while scaling the design function from one to four within the first year. I designed three product experiences by hand: the native trading app built from the ground up, a premium redesign of the web trading experience that introduced recurring trades, and the credit card rewards product end to end. Recurring trades lifted mobile trading volume by roughly 200% and marked the first time mobile trades outpaced web; the credit card reached 50,000+ active cardholders within 90 days of a 400,000-signup waitlist.",
      image: '/images/placeholder-mix1/ratio-451x567.svg',
      service: 'leadership',
      sector: 'fintech',
    },
    {
      name: 'C@SH: 0→1 Design Function',
      headline: 'Zero-to-one product design that informed a strategic pivot',
      desc: 'At an a16z Crypto portfolio company, I established the design function from zero — customizing Uber Base into a branded component library before a single internal designer was hired, doubling engineering speed and giving the team infrastructure to build with from day one. The VC principal set a high bar: a premium product resonating with an urban audience. We met it — validated through affinity testing — delivering a full light and dark mode experience. The same research surfaced a harder finding: the market hadn’t matured enough for a social wallet. That insight informed a strategic pivot, preserving capital that would otherwise have been burned against a product without sufficient traction.',
      image: '/images/placeholder-mix1/ratio-451x567.svg',
      service: 'leadership',
      sector: 'crypto',
    },
    {
      name: 'EASI: $500M+ Valuation',
      headline: 'Rearchitecting EASI to win a second audience — and a $500M valuation',
      desc: 'EASI had a strong market position in Australian diaspora communities, but poor usability, frequent crashes, and a sub-3.0 App Store rating were capping their TAM. In six weeks, I used benchmarking to build stakeholder confidence for a full redesign, then rebuilt core ordering flow in parallel with engineering’s re-architecture — prototyping and testing each decision before handoff. App Store rating climbed from below 3.0 to 4.5 stars. EASI surpassed 1M+ users, reached a $500M+ valuation, and was acquired by HungryPanda in 2022 — whose acquisition rationale mirrored the market strategy the redesign was built around.',
      image: '/images/placeholder-mix1/ratio-451x567.svg',
      service: 'consultant',
      sector: 'consumer',
    },
    {
      name: 'Krisp Desktop Redesign',
      headline: 'Product innovation for Krisp.ai’s noise cancelling desktop application',
      desc: 'Krisp had built strong utility as a consumer noise-cancellation tool, but the desktop experience hadn’t kept pace with what AI-native software was starting to look like. Engaged as principal design consultant, I redesigned the application around a modern UI system — introducing branded components to accelerate implementation, reduce design debt, and establish a visual foundation capable of scaling with the product. The engagement paused when COVID-19 created market uncertainty across the space. Krisp later pivoted into meeting intelligence and recording — a different design brief than the original work was built to serve, but the component layer and system thinking behind it gave the team a structured starting point for that shift.',
      image: '/images/placeholder-mix1/ratio-451x567.svg',
      service: 'consultant',
      sector: 'ai',
    },
    {
      name: 'Mezo: Product and Design Operations',
      headline: 'Building the operating system Mezo\'s design org didn\'t have',
      desc: "No documentation, no design system, and no shared process — before a mainnet transition moving $322M in testnet deposits and $1.8B in MUSD borrowed. I introduced sprint discipline, shipped a 1,000+ variant design system over four sprint cycles, and cut delivery time roughly fourfold, holding 98% sprint completion along the way.",
      image: '/images/placeholder-mix1/ratio-451x567.svg',
      service: 'leadership',
      sector: 'crypto',
    },
  ],
} as const;

export const mix1About = {
  title: 'About',
  intro:
    'I build the conditions for great product work — org infrastructure, delivery systems, and cross-functional standards that make design a measurable driver of business outcomes across 0→1 builds and iterative product evolution.',
  teamIntro: 'Osandi Sekoú Robinson — product & design leader.',
  teamBody:
    'I am product fanatic, music producer, entrepreneur, leader and perpetual student. My passion is in generating disruptive product/service ideas with extraordinary uses of technology while delivering products that find a place in the hearts of those who use them.',
  portrait: '/images/placeholder-mix1/ratio-1024x1024.svg',
  capabilitiesFigure: '/images/placeholder-mix1/ratio-214x290.svg',
  team: [{ name: 'Osandi Sekoú Robinson', role: 'Product & design leader' }],
  capabilities: [
    {
      no: '01',
      name: 'Product design · 14 years',
      items: [
        'Hands-on research and craft across fintech, crypto, and consumer mobile',
        '0→1 builds and iterative product evolution',
        'Shaped by data, business goals, and operational strategy',
      ],
    },
    {
      no: '02',
      name: 'Research & testing · 14 years',
      items: [
        'Test programs and UX research',
        'Adoption and engagement',
        'Center user needs throughout the product journey',
      ],
    },
    {
      no: '03',
      name: 'Design operations · 6 years',
      items: [
        'Delivery systems and discovery protocols',
        'Team leveling frameworks',
        '98% sprint completion',
        'Feature delivery compressed from 6+ weeks to 2 weeks',
      ],
    },
    {
      no: '04',
      name: 'AI-assisted design · 2 years',
      items: ['Claude API, MCP, and agentic systems', 'Hands-on enough to know where models fall short'],
    },
    {
      no: '05',
      name: 'Functional',
      items: [
        'Native, tablet, and web design',
        'Design operations & strategy',
        '0 to 1 product development',
        'Iterative design improvement',
        'User research, testing & insights',
        'Design systems & governance',
        'Team leveling, mentoring, & org scaling',
        'Cross functional alignment',
        'AI native product development',
        'Prototyping & validation standards',
      ],
    },
    {
      no: '06',
      name: 'Industries',
      items: [
        'Fintech, blockchain, & web3',
        'AI-native products & agents',
        'Consumer mobile',
        'B2B & developer tools',
        'E-commerce & marketplaces',
        'Video & audio streaming',
        'Web & native SaaS',
        'IoT & hardware',
        'Social & community',
        'Sports & entertainment',
      ],
    },
  ],
  process: [
    {
      name: 'Discover',
      copy: 'Discovery determines whether a team is solving the right problem before anyone commits to a solution. Widen the aperture before narrowing toward anything buildable. The output is alignment on the problem, the evidence needed, and why it matters to the business.',
      image: '/images/placeholder-mix1/ratio-1603x2400.svg',
      methods: [
        'Customer feedback',
        'Quant data analysis',
        'Lived observations',
        'Surveys & questionnaires',
        'Business analysis',
        'Interviews',
        'Market research',
        'Session replay',
        'Goal & signal statements',
        'Hypothesis generation',
      ],
    },
    {
      name: 'Explore',
      copy: 'With the evidential problem in sight, artifacts and written context align stakeholders — connecting hypotheses and objectives to human needs and business goals.',
      image: '/images/placeholder-mix1/ratio-1603x2400.svg',
      methods: ['Diagram', 'Journey map', 'Wireframe', 'Prompt design & prototyping'],
    },
    {
      name: 'Validate',
      copy: 'Validation can occur at multiple touchpoints with an array of artifacts, ensuring the work addresses the needs of users — and, inevitably, the business.',
      image: '/images/placeholder-mix1/ratio-1603x2400.svg',
      methods: [
        'Card sorting',
        'Design reviews',
        'Usability testing',
        'Error rate analysis',
        'Business analysis',
        'Interviews',
        'Market research',
        'Session replay',
        'Goal & signal statements',
        'Hypothesis generation',
      ],
    },
    {
      name: 'Implement',
      copy: 'Collaborate closely with engineers for design alignment and capture details pre-release. For new components, ensure awareness for product consistency. Cross-functional stakeholders are informed via Loom and case-study briefs before final sign-off — including how we measure design intent.',
      image: '/images/placeholder-mix1/ratio-1603x2400.svg',
      methods: [
        'Feasibility sign-off',
        'Compliance sign-off',
        'Business sign-off',
        'Design QA',
        'Content sign-off',
        'Accessibility checklist',
        'Design-systems check-in',
        'Design guidelines',
        'Criteria sign-off',
        'Cross-functional review',
      ],
    },
  ],
  clients: ['Apple', 'Square', 'BlockFi', 'Andreessen Horowitz', 'Thesis*', 'EASI', 'Fennel', 'Krisp.ai', 'Vinyl Crate', 'Layer', 'Direct TV', 'Territory Foods', 'VNYLST'],
  seeking: 'Seeking design leadership roles where product, design, and engineering judgment equally matter.',
  contactLine: 'Got questions? Get in touch.',
} as const;

export const mix1Build = {
  title: 'Build',
  intro:
    'Mix1 is a mashup, not a rebuild — Craft’s home, Studio’s work and about, one spec for type and inset, and a short list of things we refused to Studio-wash away.',
  what: {
    kicker: '01 / Mashup',
    title: 'What mix1 is',
    body: 'The portfolio itself, at the site root. Home is Craft: two-line hero, carousel, process sheets, pixel fields. Work and about are Studio layouts with deck copy. /craft and /studio stay frozen, kept only as reference rooms.',
  },
  spec: {
    kicker: '02 / Spec',
    title: 'Type, color, inset',
    body: 'src/studio/design.md is the source. Mix1 copies those tokens onto html[data-mix1] so home (no data-wkhs) matches work and about. Page title is heading--hg. Sections are xl. Cards and intros are md. Body is base. Kickers are xs. Paper is #f9f8f5. Ink is #090909. Inset is --safe-area.',
  },
  keep: {
    kicker: '03 / Exceptions',
    title: 'Keep these',
    items: [
      {
        name: 'Pixel game',
        note: '#hero-kv, #procflow, #footcity. Grayscale until Color On. Cell and brush stay Craft.',
      },
      {
        name: 'Pixel buttons',
        note: '.mix1-pxbtn, home CTAs, Image/Block chip, #pxctl squares. Clip path, fill primary, hover #3b5bd9.',
      },
      {
        name: 'Pixel tags',
        note: 'Carousel .tags, left aligned, --fs-xxs.',
      },
      {
        name: 'Color blocks',
        note: 'On by default for mix1 routes only. Session key mix1-media-blocks — not the global media-blocks key.',
      },
      {
        name: 'Craft home skeleton',
        note: 'Two-line uppercase hero, carousel, process, --cell: 14px, --maxw: 1176px.',
      },
    ],
  },
  isolation: {
    kicker: '04 / Isolation',
    title: 'Do not leak',
    rows: [
      { k: 'html[data-mix1]', v: 'Every mix1 route.' },
      { k: 'data-craft', v: 'Home only, so Craft home.js and home.css run.' },
      { k: 'data-wkhs', v: 'Work, about, and this page — Studio layout CSS.' },
      { k: 'mix1-media-blocks', v: 'Blocks default on here; Poised/Craft/Studio stay on their own key.' },
    ],
  },
  sequence: {
    kicker: '05 / Sequence',
    title: 'How it was mashed',
    steps: [
      'Copy Craft home markup/runtime and Studio work/about into src/mix1. Do not edit the originals.',
      'One Osandi nav: Work / About. Wordmark home.',
      'Retarget type, color, and --safe-area from design.md onto html[data-mix1].',
      'Keep pixel game, pixel buttons, tags, and default-on color blocks as named exceptions.',
      'Fix inner pages in mix1.css only: nav size, reel block, intro wrap, one footer.',
    ],
  },
  broke: {
    kicker: '06 / What broke',
    title: 'Mix1-real, not Lenis.',
    items: [
      {
        challenge: 'Studio html[data-wkhs] a { font-size: inherit } shrank the mix1 nav on work/about.',
        solution: 'Prefix mix1-nav and .mix1-pxbtn with html[data-mix1] so they keep --fs-navigation.',
      },
      {
        challenge: 'Site .btn pill and uppercase leaked onto Get in touch and home CTAs.',
        solution: 'Reset border-radius and text-transform; clip-path is the chrome.',
      },
      {
        challenge: 'Work reel kept playing under Blocks — video background: transparent beat the paint.',
        solution: 'Set --media-block on .video-player__video and opacity: 0 on the video when blocks are on.',
      },
      {
        challenge: 'Wrapping intro scramble changed line count and shoved Team; then spaces vanished in inline-block slots.',
        solution: 'Lock each glyph to its final width; render word spaces as real spaces.',
      },
      {
        challenge: 'Work/about footers used Craft’s 1176 cap while the rest of the page was Studio full-bleed.',
        solution: 'One Mix1Contact: --safe-area / --block-vpadding, same seeking copy on both pages.',
      },
    ],
  },
  tradeoffs: {
    kicker: '07 / Tradeoffs',
    title: 'Choices we kept',
    rows: [
      { k: 'Home hero', v: 'Craft two-line uppercase. Fractured titles stay on work, about, build.' },
      { k: 'Nav', v: 'Work / About only. This page lives next to Deck in the footer.' },
      { k: 'Color', v: 'Color Off/On is the pixel game. Block/Image is media. They do not share a switch.' },
      { k: 'CSS', v: 'Override with html[data-mix1] specificity. Do not fork Craft or Studio stylesheets.' },
      { k: 'CMS', v: 'src/mix1/content.ts — thin pages, typed copy, no backend.' },
    ],
  },
  steal: {
    kicker: '08 / Steal this',
    title: 'If you mash two sites',
    items: [
      'Isolate with data-* on html and one wrapper CSS file.',
      'Write the spec once. Copy tokens onto the mashup root.',
      'Mash layouts. Do not duplicate vendor.css or home.css.',
      'Name the exceptions. Everything else follows the spec.',
      'Keep copy and image paths in a content module.',
    ],
    cta: 'See the work',
    href: '/work',
  },
} as const;

export const mix1Projects = [
  {
    // Problem-validation source (I-7): the styling-debt/inconsistency problem
    // was verified firsthand while doing this work — no pre-migration audit
    // or artifact was retained to cite. Confirmed by the author as accurate
    // from direct contemporaneous knowledge; kept as-is.
    slug: 'mezo-clay',
    name: 'Mezo Clay: $70M+ TVL',
    client: 'Mezo / Thesis',
    sector: 'Crypto',
    year: '2024–2026',
    service: 'Systems',
    readTime: 4,
    image: '/images/placeholder-mix1/ratio-99x124.svg',
    headline: 'Converting design debt into product infrastructure',
    intro:
      'What starts as a styling override always becomes a system problem. At Mezo, three product phases — legacy, testnet, mainnet — had accumulated enough inconsistency to slow every team touching the product. The work was infrastructure first, interface second.',
    featuredSections: [
      {
        lead: 'A design system is only as good as the governance behind it.',
        richTitle: 'Building the single source of truth',
        body: [
          "Led the full migration to Mezo Clay — partnering with Uber Base as the foundation and building a WCAG 2.2-compliant React library purpose-built for the Thesis BitcoinFi suite. Managed a direct report and an engineering contributor from execution through deployment.",
          "The post-launch audit identified premature styling as the primary implementation bottleneck — a pattern that shows up in every fast-moving crypto team. The fix wasn't more components; it was clearer rules about when to override them.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: '2,000+ variants. 50+ base components. One source of truth.',
        richTitle: 'Scale, compliance, and delivery',
        body: [
          "Partnered with the contributing designer to set quality standards and pattern library conventions. Built and tested every variant against the Mezo product surfaces — deposit, borrow, wallet, explore — so each could ship without a separate design review cycle.",
          "The system became the infrastructure behind $322M in testnet deposits, 154K transactions, and TVL that peaked at $200M+ during testnet.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'Design debt compounds silently until it stops shipping features.',
        richTitle: 'What the audit revealed',
        body: [
          "A 70% component integration rate at post-launch audit sounds like success. It is — but the 30% that wasn't integrated told the real story: premature styling decisions made during testnet were being maintained as one-off overrides instead of being resolved back into the system.",
          "The audit measured delivery three ways: the component inventory itself, design debt checked against actual component usage, and usability evaluated through a heuristic review — whether the system held up in use.",
          "The governance decisions informed by that audit — when to override, when to extend, when to propose a new component — were as important as the components themselves.",
          "The system behind that 70% came together over four sprint cycles, ahead of a mainnet transition the org couldn't afford to miss. Before it existed, designers on the team treated design systems as a visual exercise, a style guide with a different name. The distinction that changed that: a style guide is paint; a design system is the plumbing and wiring behind the wall, the reason a pattern exists and where else it applies. Once that infrastructure was in place, it cut product development time by a factor of four.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'Engineering came, but it didn\'t stay.',
        richTitle: 'What I\'d do differently',
        body: [
          "We lost a dedicated engineer to a new product priority early on, and could never get consistent attendance at working sessions or planning from the rest of the team — capacity was thin and the roadmap kept shifting under pivots. Frequent organizational restructuring compounded it, limiting how much dedicated design capacity could contribute and blocking the pattern-library buildout that would have cleaned up work that was poorly implemented both before and after the attrition.",
          "The pattern shows up across the field, not just this team: a first-year review of design-system adoption data (zeroheight, via Design Systems Collective) found adoption mattered more than technical elegance. Stakeholders often expect instant adoption against legacy products that can't easily absorb it that fast — a staggered rollout usually fits better, and some resistance from product teams is normal even after a pitch is approved.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
    ],
    mockups: ['/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg'],
    closingLead: 'Infrastructure that outlasts the sprint cycle is the difference between a design system and a component dump.',
    stats: [
      { name: 'Component integration', description: 'Post-launch audit established the baseline for system governance decisions.', value: '70%' },
      { name: 'TVL peak, testnet', description: 'Mezo-reported. The system shipped with every product surface that contributed to this growth.', value: '$200M+' },
      { name: 'Testnet deposits', description: 'Built on the infrastructure shipped during this engagement.', value: '$322M' },
      { name: 'Sprint completion', description: 'Maintained across the engagement from system build through deployment.', value: '98%' },
    ],
    tech: [
      { k: 'Foundation', v: 'Uber Base → Mezo Clay' },
      { k: 'Implementation', v: 'React + WCAG 2.2' },
      { k: 'Scale', v: '2,000+ variants · 50+ components' },
    ],
    tags: ['Design systems', 'Lead', 'Crypto', 'WCAG 2.2', 'React', 'Component library'],
    credits: [
      { role: 'Senior Design Operations Manager', name: 'Osandi Robinson' },
      { role: 'Contributing designer', name: 'Poised LLC' },
      { role: 'Engineering', name: 'Thesis engineering' },
    ],
    clientCredits: [
      { role: 'Organization', name: 'Mezo / Thesis' },
      { role: 'PM', name: 'Thesis product team' },
    ],
    motionDemos: [] as { label: string; src: string }[],
  },
  {
    slug: 'deposit-on-mezo',
    name: 'Mezo Deposits: $200M+ TVL',
    client: 'Mezo / Thesis',
    sector: 'Crypto',
    year: '2024–2026',
    service: 'Product',
    readTime: 3,
    image: '/images/placeholder-mix1/ratio-99x124.svg',
    headline: "Improving the deposit flow that unlocked Mezo's liquidity",
    intro:
      "Depositing Bitcoin to Mezo wasn't a standard transfer. Users were bridging assets across chains into a protocol where a wrong address meant permanent loss of funds. The bar for clarity wasn't high — it was non-negotiable.",
    featuredSections: [
      {
        lead: 'Research confirmed the flow was broken before we touched a pixel.',
        richTitle: 'Diagnosing the problem',
        body: [
          "The existing deposit flow was perceived as risky and confusing — no upfront context, no network guidance, no unambiguous success state. Users had to infer what was happening at every step.",
          "The redesign introduced upfront deposit instructions before any commitment, surfaced network context and minimum thresholds early, and delivered success states specific enough that users knew their funds had arrived safely — not just that a transaction had fired.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'The deposit flow became the primary on-ramp for all of Mezo\'s liquidity.',
        richTitle: 'Outcome and downstream impact',
        body: [
          "Vaults, pools, and rewards all depended on a working deposit experience. The redesign unblocked each of them — contributing directly to TVL that peaked at $200M+ during testnet.",
          "Sprint completion held at 98% across the engagement, which meant the research and design process ran fast enough to stay ahead of engineering.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: "A wrong address here doesn't produce a support ticket. It produces a permanent loss.",
        richTitle: 'What the flow had to solve for',
        body: [
          "This flow shipped under the same definition-of-done standard applied company-wide, cross-functional sign-off, not just a design review, because a wrong address here doesn't produce a support ticket. It produces a permanent loss. That standard came out of a broader operational rebuild at Mezo: before it existed, the org had no shared scope or done-readiness definition at all, and couldn't ship consistently as a result.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'Deposit work should have been sequenced with the mainnet build itself, not after it.',
        richTitle: 'What I\'d do differently',
        body: [
          "The debt this flow carried was inherited legacy technical debt, and depositing was the necessary next step after account creation before a user could touch MUSD or spend in the market at all. Planning it alongside the mainnet build, instead of catching up to it afterward, likely would have lifted the earliest revenue metrics.",
          "What we did ship — mobile-first patterns that deviated from what the team had used pre-attrition — would have addressed that inherited design debt on its own terms. It came after the team had already lost the capacity to carry it all the way through.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
    ],
    mockups: ['/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg'],
    closingLead: 'Clarity at the point of commitment is not a UX nicety in a protocol where a wrong address means permanent loss.',
    stats: [
      { name: 'TVL peak, testnet', description: 'Deposit flow was the primary on-ramp for Mezo liquidity growth toward this peak.', value: '$200M+' },
      { name: 'Active users', description: 'Mezo-reported, April 2026 — enabled by a deposit experience that worked.', value: '43,500+' },
      { name: 'Sprint completion', description: 'Maintained across the engagement from research through handoff.', value: '98%' },
    ],
    tech: [
      { k: 'Platform', v: 'Mobile + Web' },
      { k: 'Method', v: 'Research-led redesign' },
      { k: 'Protocol', v: 'Bitcoin bridge · cross-chain' },
    ],
    tags: ['Product design', 'Crypto', 'Fintech', 'Research', 'Mobile', 'Web'],
    credits: [
      { role: 'Senior Design Operations Manager', name: 'Osandi Robinson' },
      { role: 'Engineering', name: 'Thesis engineering' },
    ],
    clientCredits: [
      { role: 'Organization', name: 'Mezo / Thesis' },
      { role: 'PM', name: 'Thesis product team' },
    ],
    motionDemos: [] as { label: string; src: string }[],
  },
  {
    // Problem-validation source (I-7): the "no mainstream equivalent"
    // complexity problem was verified firsthand from direct knowledge of the
    // product and users at the time — no research artifact or drop-off data
    // was retained to cite. Confirmed by the author as accurate; kept as-is.
    slug: 'borrow-musd',
    name: 'Mezo Borrow: 43.5K+ Users',
    client: 'Mezo / Thesis',
    sector: 'Crypto',
    year: '2024–2026',
    service: 'Product',
    readTime: 3,
    image: '/images/placeholder-mix1/ratio-99x124.svg',
    headline: 'Making high-stakes borrowing feel safe, not complex',
    intro:
      'MUSD borrowing required users to hold collateralization ratio, liquidation threshold, and variable APR in their heads simultaneously. None of those concepts have mainstream equivalents. The design problem was weight, not simplification.',
    featuredSections: [
      {
        lead: 'Consequential decisions need to feel consequential — not overwhelming.',
        richTitle: 'Progressive disclosure as the primary tool',
        body: [
          "Progressive disclosure let us surface complexity only when it was relevant to the decision at hand. A user setting their collateral ratio doesn't need to see APR mechanics at the same moment.",
          "Error handling was consolidated to a single inline signal. Before the redesign, errors appeared in multiple places with inconsistent framing — adding cognitive load at the worst possible moment.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'Benchmarking against established DeFi patterns reduced the learning curve.',
        richTitle: 'Expanding the addressable market',
        body: [
          "The redesign borrowed interaction models from familiar financial interfaces — not to hide the complexity of DeFi, but to lower the entry cost for users coming from traditional finance.",
          "The borrow flow shipped as part of the mainnet launch suite, contributing to TVL that peaked at $200M+ during testnet, and supporting expansion into a broader addressable market beyond early adopters.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'We shipped Borrow without verifying utility first.',
        richTitle: 'What I\'d do differently',
        body: [
          "Testing prototypes with the designers who'd worked on this earlier could have given us a better signal than shipping blindly. We didn't allocate time or resources for it, and research that did exist sat in a silo and never got used.",
          "Borrow needed clearer alignment on its real-world value proposition before build. The better sequence: build for one verifiable segment first, learn from it, then pursue mainstream adoption once the product fit that broader market.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
    ],
    mockups: ['/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg'],
    closingLead: 'The job isn\'t to make DeFi simple. It\'s to make consequential decisions feel proportionally weighted.',
    stats: [
      { name: 'TVL peak, testnet', description: 'Borrow flow contributed to Mezo\'s liquidity growth toward this peak, alongside deposit and wallet.', value: '$200M+' },
      { name: 'Active users', description: 'Mezo-reported, April 2026, across all Mezo product surfaces.', value: '43,500+' },
    ],
    tech: [
      { k: 'Platform', v: 'Mobile + Web' },
      { k: 'Method', v: 'Progressive disclosure · benchmarking' },
      { k: 'Protocol', v: 'MUSD collateralized borrowing' },
    ],
    tags: ['Product design', 'Crypto', 'DeFi', 'Research', 'Progressive disclosure'],
    credits: [
      { role: 'Senior Design Operations Manager', name: 'Osandi Robinson' },
      { role: 'Engineering', name: 'Thesis engineering' },
    ],
    clientCredits: [
      { role: 'Organization', name: 'Mezo / Thesis' },
      { role: 'PM', name: 'Thesis product team' },
    ],
    motionDemos: [] as { label: string; src: string }[],
  },
  {
    slug: 'blockfi-product-design-leader',
    name: 'BlockFi: $1.5M→$50M/mo',
    client: 'BlockFi',
    sector: 'Fintech',
    year: '2020–2022',
    service: 'Leadership',
    readTime: 7,
    image: '/images/placeholder-mix1/ratio-99x124.svg',
    headline: "Building BlockFi's design function and raising the craft bar as the company scaled to a $3B valuation.",
    intro:
      'BlockFi hired me as its first design leader. Before I arrived, the company had no in-house design function — third-party vendors and one junior designer carried the work, and that designer left soon after I joined.',
    featuredSections: [
      {
        lead: "Building BlockFi's design function and raising the craft bar as the company scaled to a $3B valuation.",
        richTitle: "The Product's Business",
        body: [
          'BlockFi was the first company to offer interest on crypto assets. It also earned fees from a crypto marketplace and offered a rewards product that incentivized use of a line of credit. We served users globally, both retail and institutional investors, as regulation of crypto assets was still in early development and the second major bull market fueled media buzz, NFTs, DeFi, and interest from a younger demographic. The web product supported asset trading, creating and managing your BlockFi Interest Account, and accessing your settings and documents. The mobile product allowed you to track your portfolio, with limited support for a crypto marketplace.',
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'I was tasked with leveling up the product leadership around me and establishing the craft bar for design.',
        richTitle: 'Evidential Challenges',
        body: [
          "As the first design leader at BlockFi, I was tasked with leveling up the product leadership around me and establishing the craft bar for design, while ensuring we had the infrastructure to achieve it. The org was undergoing yet another restructure, and the expectation was to hit the ground running and ship features that had fallen behind their expected launch dates. The mandate was to build fast and ship quality. Accomplishing this meant understanding where the product org sat in terms of leveling.",
          'Using the Level Up framework, I found the operation in the early stages of development across every pillar. There was no design system or standard product development process, and there were no signals of healthy collaboration or feedback. Design recruiting and talent development were nonexistent, and interviews with those around me pointed to low morale in an environment with unclear expectations.',
          "A heuristic evaluation I conducted identified accessibility, navigation, and inconsistency as the gravest issues for the web experience. The mobile experience lagged behind the web's implementation, so the biggest issues I observed there were mostly related to inconsistency, given that web components were being used for the React build of the product.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'I built the structure the company lacked.',
        richTitle: 'Leadership',
        body: [
          "I directed design across BlockFi's full product line: the marketplace, credit card rewards, and BlockFi Interest Accounts, covering retail and institutional customers across US and international markets. On native, I owned the mobile conversion of that same suite to full parity with web, across iOS and Android. That work took shape during a period when BlockFi itself scaled fast — a $350M Series D at a $3B valuation in March 2021, assets on the platform growing from $1B to $15B across 260K+ funded retail accounts, and monthly revenue climbing from $1.5M to $50M year over year — the broader business context the product and design org operated inside.",
          "I built the structure the company lacked. BlockFi's one existing designer left as I came on, so I started as the design function's sole contributor. I directed the design system as a standing responsibility, owning its component architecture and implementation as the product grew rather than treating it as a one-time build. I owned a design vision built with the full product development cycle in view: product design, blockchain engineering, front-end and back-end engineering, security, and go-to-market, one that had to hold up across every function expected to execute against it. I also worked as a strategic partner to the go-to-market team, which owned both marketing and creative as one function at BlockFi rather than two. That partnership wasn't a formal design-embedded arm; it was close, ongoing collaboration that let go-to-market shape messaging and creative with real product context, rather than working from the outside once a feature had already shipped. And I pushed for visibility into risk and compliance where none had existed, working to translate that visibility into clear, in-app disclosures for users, including the KYC-related disclosures the product needed.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
        breakAfter: 'screenCarousel',
      },
      {
        lead: 'Scaled the design function within the first year, directed a design system that cut delivery time roughly fourfold, and grounded a vision that helped the team meet a standing 20% year-over-year growth target.',
        richTitle: 'Leadership Impact',
        body: [
          "I scaled the design function from one to four within the first year. The design system I directed cut delivery time on new work by roughly four times. The roadmap I built from the design vision let the team plan against real commitments instead of reacting to scope creep release by release, and the team met and exceeded a standing 20% year-over-year growth target on that footing. On risk and compliance, the limits of the role showed: acting on the gaps I surfaced required prioritization at the VP, CEO, and Head of Operations level, ahead of new feature work, and that prioritization didn't always follow. Raising the flag and having the authority to act on it are different things, and that distinction is part of the record here, not a footnote to it.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'Within that scope, I designed three product experiences by hand.',
        richTitle: 'Hands On Design Contribution',
        body: [
          "Within that scope, I designed three product experiences by hand. I built the native trading experience from the ground up. On web, I owned the update to an existing trading experience, bringing it to a premium, cohesive standard and paying down design debt that had built up before I arrived. Part of that work introduced recurring trades. I also owned the credit card rewards product end to end, on web and mobile, including the information architecture work required to support it. BlockFi's IA had no place for a credit product before this work, so I rebuilt it to hold the new product without breaking what already worked.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
        breakAfter: 'mockups',
      },
      {
        lead: '"Crypto rewards programs are a compelling way to engage consumers in the crypto economy. We\'re excited to see programs like the BlockFi Rewards Visa Card, which offer rewards that are relevant to the growing community of digital currency adopters." — Forbes, Jul 6 2021',
        richTitle: 'Individual Contributor Impact',
        body: [
          "Recurring trades lifted mobile trading volume by roughly 200%, per internal marketing and business reporting, and marked the first time mobile trades outpaced web, even as a new feature. The credit card launched to an estimated 400,000 pre-launch waitlist signups and reached 50,000+ active cardholders within its first 90 days. Cardholders spent an average of $30,000 a year, about 450% above the typical Amex, Mastercard, and Visa cardholder, pacing the product toward $2B+ in annualized spend and distributing more than 120 BTC in rewards, worth close to $6.8M as of October 2021.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'Being right about a problem and having the authority to act on it are two different achievements.',
        richTitle: 'Learnings',
        body: [
          'BlockFi handed me a company with no design function, no operating discipline, and a category still inventing its own conventions, and asked me to turn all three into something that could scale and hold user trust. The design system, the roadmap, and the products I built by hand are the record of that work.',
          'The sharper lesson sits in what happened next. I had an accurate read on the risk, and the standing as design lead to raise it. The organization still needed prioritization at the VP, CEO, and Head of Operations level to convert that read into action, and that prioritization did not consistently follow. Being right about a problem and having the authority to act on it are two different achievements, and the gap between them is where user protection gets decided. That distinction is the one I carry into every design leadership role since: build the case, then build the case for who needs to act on it.',
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
    ],
    // Placeholder frames pending real screens for the surfaces this role covered
    // (marketplace, credit card rewards, BIA, native trading) — swap each src once sourced.
    screenCarousel: Array.from({ length: 4 }, () => '/images/placeholder-mix1/ratio-1320x2868.svg'),
    mockups: ['/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg'],
    closingLead: 'Build the case, then build the case for who needs to act on it.',
    stats: [
      { name: 'Design function growth', description: 'Scaled from sole IC to a 4-person design team within the first year.', value: '1 → 4' },
      { name: 'Platform assets', description: "BlockFi's platform assets over this role's tenure as design leader.", value: '$1B → $15B' },
      { name: 'Monthly revenue', description: "BlockFi's monthly revenue growth during the same period.", value: '$1.5M → $50M' },
      { name: 'Delivery speed', description: "Faster delivery on new work following the design system's rollout.", value: '~4x' },
      { name: 'YoY growth target', description: 'Standing growth target the team met and exceeded on the roadmap this role established.', value: '20%+' },
      { name: 'Mobile trade volume', description: 'Mobile outpaced web-based trading for the first time following the recurring-trades redesign.', value: '+200%' },
      { name: 'Active cardholders', description: 'Within the first 90 days of the Credit Card Rewards national launch (BlockFi, GlobeNewswire, Oct 13 2021).', value: '50,000+' },
      { name: 'Annualized card spend pace', description: 'Pacing figure disclosed alongside the 90-day cardholder count (BlockFi, Oct 2021).', value: '$2B+' },
      { name: 'BTC rewards distributed', description: '≈$6.8M in BTC as of Oct 12, 2021 (BlockFi, GlobeNewswire).', value: '120+ BTC' },
    ],
    tech: [
      { k: 'Platform', v: 'iOS + Android + Web' },
      { k: 'Method', v: 'Stakeholder research · Designer Fund Level Up' },
      { k: 'Role', v: 'Director of Product Design' },
    ],
    tags: ['Founding IC', 'Fintech', 'Web', 'Mobile', 'iOS', 'Android', 'Director'],
    credits: [
      { role: 'Director of Product Design', name: 'Osandi Robinson' },
      { role: 'Engineering', name: 'BlockFi engineering' },
    ],
    clientCredits: [
      { role: 'PM', name: 'BlockFi product team' },
      { role: 'Organization', name: 'BlockFi' },
    ],
    motionDemos: [] as { label: string; src: string }[],
  },
  {
    slug: 'cash-native-app',
    name: 'C@SH: 0→1 Design Function',
    client: 'a16z Crypto portfolio',
    sector: 'Crypto',
    year: '2022–2024',
    service: 'Leadership',
    readTime: 3,
    image: '/images/placeholder-mix1/ratio-99x124.svg',
    headline: 'Zero-to-one product design that informed a strategic pivot',
    intro:
      "Building a design function before the first hire means every decision compounds. The component library you build becomes the product. The research you run becomes the strategy.",
    featuredSections: [
      {
        lead: 'A branded component library before a single internal designer was hired.',
        richTitle: 'Building the function from zero',
        body: [
          "Customized Uber Base into a branded library that doubled engineering speed and gave the team a shared vocabulary to build with from day one. The VC principal set a high bar — a premium product resonating with an urban audience — and we met it, validated through affinity testing.",
          "Full light and dark mode shipped. The same research surfaced a harder finding: the market hadn't matured enough for a social wallet.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: "The research that shaped the pivot preserved capital that would otherwise have been spent.",
        richTitle: 'When research becomes strategy',
        body: [
          "Identifying insufficient market traction before over-investing in the product direction was the most valuable output of the engagement. The design foundation remained intact for the company's next direction.",
          "Building 0→1 means the research has to do double duty — validating the product and validating the strategy. Here, it did both.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'I\'d have asked for the investor principal\'s visibility into the team earlier.',
        richTitle: 'What I\'d do differently',
        body: [
          "Inviting them into planning sessions and roadmap shaping, rather than after the fact, would have gotten them to understand the dependencies sooner — and made the eventual pivot conversation land faster.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
    ],
    mockups: ['/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg'],
    closingLead: 'The most valuable deliverable was the research that stopped us from building the wrong thing.',
    stats: [
      { name: 'Design function', description: 'Built from zero before the first internal design hire.', value: '0 → 1' },
      { name: 'Engineering speed', description: 'Doubled by shipping a branded component library on day one.', value: '2×' },
    ],
    tech: [
      { k: 'Foundation', v: 'Uber Base → custom library' },
      { k: 'Platform', v: 'iOS + Android' },
      { k: 'Method', v: 'Affinity testing · 0→1 build' },
    ],
    tags: ['0→1', 'Lead', 'Crypto', 'Mobile', 'iOS', 'Android', 'Design systems'],
    credits: [
      { role: 'Founding Head of Design', name: 'Osandi Robinson' },
      { role: 'Engineering', name: 'C@SH engineering' },
    ],
    clientCredits: [
      { role: 'Organization', name: 'a16z Crypto portfolio' },
      { role: 'PM', name: 'C@SH product team' },
    ],
    motionDemos: [] as { label: string; src: string }[],
  },
  {
    // Problem-validation source (I-7): the sub-3.0 rating and crash-rate
    // figures below were verified firsthand while contracted on this
    // engagement — no App Store historical snapshot exists to cite (no
    // public rating-history log for this period). Confirmed by the author
    // as accurate from direct contemporaneous knowledge; kept as-is rather
    // than softened or removed.
    slug: 'easi-food-delivery',
    name: 'EASI: $500M+ Valuation',
    client: 'EASI',
    sector: 'Consumer',
    year: '2020',
    service: 'Consultant',
    readTime: 4,
    image: '/images/placeholder-mix1/ratio-99x124.svg',
    headline: 'Rearchitecting EASI to win a second audience — and a $500M valuation',
    intro:
      "EASI had a real market and a broken product. A sub-3.0 App Store rating and frequent crashes weren't edge cases — they were capping the total addressable market. The problem wasn't the audience; it was the experience they were being asked to tolerate.",
    featuredSections: [
      {
        lead: 'Benchmarking built the stakeholder confidence that unlocked the redesign.',
        richTitle: 'Building the case for change',
        body: [
          "Six weeks. Skeptical stakeholders. A team that had shipped the original product and wasn't sure anything needed to change. Benchmarking gave us a shared language for what 'good' looked like — not opinions, but patterns from products the team already respected.",
          "Once the case was made, the redesign ran in parallel with engineering's re-architecture — prototyping and testing each decision before handoff, so no one was waiting on anyone.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'App Store rating: below 3.0 to 4.5. Acquired for $500M+.',
        richTitle: 'The numbers that followed',
        body: [
          "EASI surpassed 1M+ users and reached a $500M+ valuation. HungryPanda's acquisition rationale in 2022 mirrored the market strategy the redesign was built around — expanding from diaspora communities into a broader urban audience.",
          "The six-week timeline wasn't a constraint. It was the discipline that kept the scope focused on what would move the numbers.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'The advisor leaves before the work lands.',
        richTitle: 'What I\'d do differently',
        body: [
          "Attention from ownership and leadership fades right after sign-off — schedule the follow-ups while you still have it, and keep the plan simple enough to survive without you in the room. The same applies to the recommendation itself: test feasibility of team, budget, and politics during discovery, since a recommendation the client can't resource is a weak recommendation no matter how sound the analysis behind it.",
          "Design intent gets lost at the seam between design and engineering more often than anywhere else in the process. Involve engineers during design so feasibility problems surface early — as Questworks puts it, the most expensive time to discover a feasibility problem is during implementation. Specify behavior, not just visuals: document every state (loading, empty, error, success) and its edge cases, and walk the spec with the client's engineers. Design with the components and tokens engineers ship — per UXPin, translation is the biggest driver of drift. Build design QA into the process: review the implementation against the original design before it ships, contract for that review up front, and agree on a definition of done between design and engineering, then stay available for questions through the build.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
    ],
    mockups: ['/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg'],
    closingLead: 'A 4.5-star rating is a market signal. The $500M acquisition validated the strategy the redesign was built around.',
    stats: [
      { name: 'App Store rating', description: 'Climbed from below 3.0 to 4.5 stars following the redesign launch.', value: '3.0→4.5' },
      { name: 'Users', description: 'EASI passed 1M+ users after the redesign expanded its addressable market.', value: '1M+' },
      { name: 'Valuation at acquisition', description: 'HungryPanda acquired EASI in 2022 for a reported $500M+.', value: '$500M+' },
    ],
    tech: [
      { k: 'Platform', v: 'iOS + Android' },
      { k: 'Method', v: 'Benchmarking · prototype testing' },
      { k: 'Timeline', v: '6 weeks' },
    ],
    tags: ['Consultant', 'Consumer', 'Mobile', 'iOS', 'Android', 'Benchmarking'],
    credits: [
      { role: 'Design consultant', name: 'Osandi Robinson' },
      { role: 'Engineering', name: 'EASI engineering' },
    ],
    clientCredits: [
      { role: 'Organization', name: 'EASI' },
      { role: 'PM', name: 'EASI product team' },
    ],
    motionDemos: [] as { label: string; src: string }[],
  },
  {
    // Problem-validation source (I-7): the interface-lagging-behind problem
    // was known directly from the engagement itself — no retrievable client
    // feedback or audit artifact was retained to cite. Confirmed by the
    // author as accurate; kept as-is.
    slug: 'krisp-ai',
    name: 'Krisp Desktop Redesign',
    client: 'Krisp',
    sector: 'AI',
    year: '2020',
    service: 'Consultant',
    readTime: 3,
    image: '/images/placeholder-mix1/ratio-99x124.svg',
    headline: "Product innovation for Krisp.ai's noise cancelling desktop application",
    intro:
      "Krisp had strong utility and a dated interface. The noise cancellation worked. The desktop experience hadn't kept pace with what AI-native software was starting to look like — and that gap was starting to matter.",
    featuredSections: [
      {
        lead: 'A modern UI system, not a reskin.',
        richTitle: 'Redesigning for scale',
        body: [
          "Engaged as principal design consultant, I redesigned the application around a cohesive UI system — introducing branded components to accelerate implementation, reduce design debt, and establish a visual foundation capable of scaling with the product.",
          "The work ran until COVID-19 created market uncertainty across the consumer audio space. What was scoped as a foundation for growth became a foundation for a pivot.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'Krisp pivoted into meeting intelligence. The structural work held.',
        richTitle: 'When the brief changes',
        body: [
          "The shift toward enterprise aesthetics and recording features was a different design brief than the original work was built to serve. But the component layer and the system thinking behind it gave the team a structured starting point for that evolution.",
          "That's the value of system work over surface work — it outlives the original brief.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'The pandemic decided how this ended, not the work.',
        richTitle: 'What stayed unresolved',
        body: [
          "By the time there was enough clarity to confirm everyone involved had come through the pandemic safely, both the client and I had moved on to other things. It wasn't a resolution so much as time passing until neither side circled back — the kind of ending that doesn't show up in a stats block.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
    ],
    mockups: ['/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg'],
    closingLead: 'System work outlives the brief it was built for. That\'s the difference between components and infrastructure.',
    // "Principal" was a level of engagement, not an internal title (confirmed
    // by the author) — already stated correctly in prose above ("Engaged as
    // principal design consultant"). A standalone stat tile gave it more
    // formality than that, reading like a title classification next to
    // quantified metrics on sibling entries. Dropped rather than kept as a
    // bare, unsupported value.
    stats: [],
    tech: [
      { k: 'Platform', v: 'Desktop (macOS + Windows)' },
      { k: 'Method', v: 'UI system · component library' },
    ],
    tags: ['Consultant', 'AI', 'Desktop', 'Design systems', 'macOS', 'Windows'],
    credits: [
      { role: 'Design consultant', name: 'Osandi Robinson' },
      { role: 'Engineering', name: 'Krisp engineering' },
    ],
    clientCredits: [
      { role: 'Organization', name: 'Krisp' },
      { role: 'PM', name: 'Krisp product team' },
    ],
    motionDemos: [] as { label: string; src: string }[],
  },
  {
    // Canonical Mezo leadership entry (issue #95). mezo-design-operations-leadership
    // and mezo-leadership-v8 were removed as duplicates — see git history for
    // their content if needed. Renamed from mezo-leadership-v9 once I-6 settled
    // on the real title — "v9" was a draft-review version marker that had
    // leaked into the live slug/title/tags.
    slug: 'mezo-product-design-ops-leader',
    name: 'Mezo: Product and Design Operations',
    client: 'Mezo / Thesis',
    sector: 'Crypto',
    year: '2024–2026',
    service: 'Leadership',
    readTime: 9,
    image: '/images/placeholder-mix1/ratio-99x124.svg',
    headline: 'Building the operational discipline Mezo needed to scale product delivery without shipping broken builds',
    intro:
      "Mezo had no design system, no documentation standards, and no shared process when I joined — ahead of a mainnet transition that would move $322M in testnet deposits and $1.8B in MUSD borrowed. Shipping that without a shared operating system wasn't viable.",
    featuredSections: [
      {
        lead: 'Senior Design Operations Manager to Senior Principal Designer, Mezo (Thesis). Led a team of one product designer and one visual designer, partnered with a product manager, reporting to the Head of Design.',
        richTitle: 'Overview',
        body: [
          'Mezo (Thesis) is a Bitcoin Layer 2, a ten-year-old crypto studio that had never built the operational discipline to ship digital product at scale. Mezo\'s business runs on Bitcoin-backed DeFi mechanics: users deposit into Mezo Earn and Mezo Borrow for yield, mint the Bitcoin-collateralized stablecoin MUSD, trade through Mezo Swaps, and lock BTC through veBTC staking ("Proof of HODL"), with an institutional channel, Mezo Prime, deploying BTC at scale. Value and health track to how much moves through those products: deposits, MUSD circulation and lending, swap volume. That\'s what made the operational stakes concrete rather than abstract.',
          "I joined ahead of a mainnet transition that would process $322M in testnet deposits and $1.8B in MUSD borrowed. Shipping that transition without a shared operating system wasn't viable.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'Everything downstream depended on documentation, collaboration, and a design system existing before the org could trust its own output.',
        richTitle: 'What the stakes were',
        body: [
          "The org couldn't afford to find out mid-transition that nothing was documented, that collaboration and fundamental design practice were unstructured and non-existent, and that a design system was non-negotiable.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: "Mezo wasn't unique here. Nielsen Norman Group's research on DesignOps maturity found most organizations complete only 22% of recommended practices and have no dedicated role for it at all.",
        richTitle: 'Problem',
        body: [
          'The audit named the gaps directly: no design system, no shared documentation standard, and no clear target tying design work to a specific outcome.',
          "The gap showed up as much in how the org worked as in what it lacked. Without a shared design language or a defined standard for scope and done-readiness, the team couldn't run sprints with any consistency.",
          "User feedback and communication were scattered across uncontextualized Discord threads. Partners like legal and go-to-market had no visibility into the work until right before or after it shipped. This forced rebuilds and elevated unnecessary risk of doing business.",
          "Two more gaps didn't show up in the audit numbers, but showed up in the work itself. The org had user research on hand that had never been synthesized into anything usable, sitting unused while feature work went ahead without it. And builds that shipped before prototyping and testing were standard practice carried heuristic and accessibility issues that only surfaced after release, not before it.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: "I ran the team through Designer Fund's Level Up framework to get an honest read on process maturity, the design system, documentation, state of collaboration, and growth paths for design talent.",
        richTitle: 'What the audit found',
        body: [
          'A Level Up assessment found gaps at every level, including leadership: a nascent-to-non-existent cross-collaborative product development cadence, no design system, no standards, no defined growth path, and no shared understanding of what was expected from contributors.',
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'If the team had documented standards, a real design system, collaboration built into the process, and research and testing running inside the product cycle instead of around it, the org could ship reliably at the scale the mainnet transition demanded, hit specific user and business targets instead of shipping and hoping, and catch quality and access issues before release instead of after.',
        richTitle: 'Goals',
        body: [
          "How might we build a design system that scales output fast enough to be ready before mainnet? How might we make documentation, and a shared standard for scope and done-readiness, the default instead of the exception? How might we give designers a clear target, tied to a specific user outcome and a specific business outcome, not just a shipped feature?",
          "How might we get people building on each other's work instead of working in isolation? How might we give cross-functional partners, legal and engineering, visibility into product work before it's too late to change course?",
          "How might we catch heuristic and accessibility issues before a build ships, not after? How might we learn faster and cheaper by putting existing research and testing inside the product cycle instead of leaving it unused?",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'Linear started narrow, design work first, rather than a company-wide rollout that would have met resistance before proving its value.',
        richTitle: 'Tooling',
        body: [
          'I introduced Linear starting narrow, design work first, rather than a company-wide rollout that would have met resistance before proving its value. Issue and sub-issue tracking let us quantify rollover and compare planned work against headcount, turning planning into a signal instead of a guess.',
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: '"Done" went from an individual judgment call to a standard the team could hold each other to.',
        richTitle: 'Documentation and rituals',
        body: [
          'On top of the tooling, I built the org\'s first documentation standards: issue and design-request templating, sizing, priority, a bi-weekly sprint cadence, and a definition of done paired with cross-functional sign-off. The pairing mattered specifically because it turned "done" from an individual judgment call into a standard the team could hold each other to.',
          'Before I came on, there was no design critique and no formal weekly planning. I introduced both, along with open office hours and prototyping for early, internal feedback, none of which existed before.',
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'A former direct report and I shipped a full component library over four sprint cycles.',
        richTitle: 'The design system',
        body: [
          'Designers on the team treated design systems as visual exercises. I put the distinction in plain terms: a style guide is paint; a design system is the plumbing and wiring behind the wall. I brought on a former direct report, and over four sprint cycles, we shipped a full component library: over 1,000 components counting variants, documented, tested, and verifiable. Feature builds that had taken roughly four times as long before it existed dropped to two to three weeks, zero to one, once it was in place.',
          "I managed that sprint to 98% completion, the org's first proof that planned work could ship on schedule without blowing capacity.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'Research that had been sitting unused became an input the team actually reached for.',
        richTitle: 'Closing the research gap',
        body: [
          "I used AI to process existing studies and surface relevant insight automatically when the team started new feature work, turning research that had been sitting unused into an input the team actually reached for.",
          "I used the same approach to aggregate survey input from internal testing, which directly informed the rewards and incentives program, modeled on Aerodrome's vote-escrow approach.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: "It wasn't frictionless. The resistance was visible to anyone watching. But it was the first signal in product design that doing things correctly was repeatable, not a one-off.",
        richTitle: 'Prototyping as standard',
        body: [
          "With no dedicated feedback tool, the org stayed lean on tooling. I used Discord to pool users for prototype testing instead, a practice that didn't exist before I introduced it.",
          "When I stepped into an individual-contributor role after the team's attrition, I held that standard through craft rather than argument. Rather than concede a direction under pushback, I built out multiple prototype versions and let stakeholders see the trade-offs directly.",
          "I held the team, and myself, to a UX standard I brought in independently: a HEART framework (Happiness, Engagement, Adoption, Retention, Task Success) paired with Jobs To Be Done, so every shipped build had a stated line to the specific metric it was meant to move, not just a feature shipped and hoped for. Combined with correct reuse of the design system's components, that discipline meant work addressed the business goal and cleared sign-off from every stakeholder before shipping.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: "Three designers who predated me left within my first six months, work the team judged hadn't grown into the standard the role now required.",
        richTitle: 'Hiring and growth',
        body: [
          'The Level Up findings shaped who we hired next. I defined the skills a Mezo designer needed, mapped to business goals, wrote the job requirements, and ran the hiring process myself.',
          "I rebuilt to net +3 headcount across growth design, product design, and design systems, using that same skills matrix to inform who we hired.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: "I co-built the pitch for Claude accounts for the design team and won approval despite the org's lean-tooling stance.",
        richTitle: 'Cross-functional reach',
        body: [
          'When Mezo let its product manager go, I covered both the product manager and design manager functions until a replacement came on, then stayed on as strategic partner to incoming PMs.',
          "I took ownership of the Coda-to-Linear transition my boss handed me, which gave the whole company top-down visibility into product work and a direct benefit to marketing's go-to-market communication.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: 'An internal audit run when my report and I stepped into IC roles showed fewer design-system overrides, faster shipping, and lower component counts per build, and a collaboration uptick.',
        richTitle: 'Outcomes',
        body: [
          "That's evidence the team reached for standard, reusable patterns instead of one-off builds. The visibility we'd built into the process meant we shared components with each other more, not less. The same override and reuse pattern surfaced again, independently, in a follow-up Level Up assessment.",
          'The org\'s first validated OKR, a 30% conversion target, was overshot at roughly 40%, the result of the design system, my shift into an IC role, and close partnership with marketing together. It\'s the clearest evidence the "potential scheme" perception had shifted toward a product users trusted enough to convert on, backed by a custom survey I wrote with a researcher.',
          'The pushback to prototyping-first, HEART/JTBD-anchored work wasn\'t quiet, but the signal underneath it was real: positive user feedback on social channels, task success gains, OKR movement, and rising component reuse across the system, four independent indicators pointing the same direction.',
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
      {
        lead: "Being the exception has a cost. Structural gaps don't close because one person works around them. They get absorbed into that person's workload instead.",
        richTitle: 'Closing — what I learned',
        body: [
          'Transparency has to run in both directions. An organization responding to different expectations top-down and bottom-up starts to bifurcate, and that split is what makes alignment hard.',
          'Operating principles need room to flex. Being async-first and treating meetings as unnecessary is legitimate, but without a clear sense of when a real conversation is warranted, the principle becomes a liability. This stayed a real, unresolved struggle at Mezo.',
          'A vision has to be concrete and demonstrated, not declared. "Supernormal" meant something different to everyone because leadership described it in abstractions instead of explicit benchmarks. Sequencing mattered everywhere else in this work: tooling before scaling, infrastructure before argument. Vision is the one piece that can\'t be sequenced around. Without it, everything downstream inherits the ambiguity.',
          "Growth-path resolution never happened at Mezo, for anyone, not just design. Meaningful OKRs didn't exist company-wide until the final quarter of my tenure. After attrition, my direct hire report and I ran product design between us as the exception to how the org was structured, not the plan for it. Being the exception has a cost. Structural gaps don't close because one person works around them. They get absorbed into that person's workload instead.",
        ],
        images: ['/images/placeholder-mix1/ratio-686x868.svg', '/images/placeholder-mix1/ratio-686x868.svg'],
      },
    ],
    mockups: ['/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg', '/images/placeholder-mix1/ratio-900x1600.svg'],
    closingLead:
      "What shipped: a documented operating system for design at Mezo, none of it in place when I joined. Tooling, standards, and a 1,000+ variant design system went live ahead of the mainnet transition the org needed to enter prepared for. The team rebuild came after, within that same tenure, and the system is still what the team builds on.",
    // "4x" (below): author-confirmed from direct experience — full 0-to-1 feature
    // builds ran roughly 2-3 weeks once the design system was in place, versus
    // roughly four times that long before it existed. Stated internally at the
    // time; never externally documented, so kept as a rounded multiple rather
    // than a precise week count.
    stats: [
      { name: 'Component variants shipped', description: 'Shipped over four sprint cycles, ahead of a mainnet transition.', value: '1,000+' },
      { name: 'Product development speed', description: "Cut by a factor of four once the design system's infrastructure was in place.", value: '4x' },
      { name: 'Sprint completion', description: "The org's first working proof that Agile could function at Mezo.", value: '98%' },
      { name: 'Design headcount rebuilt', description: 'Net growth across growth design, product design, and design systems.', value: '+3' },
      { name: 'Conversion OKR', description: "The org's first validated OKR, a 30% target, overshot at roughly 40%.", value: '~40%' },
    ],
    tech: [
      { k: 'Tooling', v: 'Coda → Linear' },
      { k: 'Framework', v: 'Designer Fund Level Up · HEART + JTBD' },
      { k: 'Team', v: 'PM + product designer + visual designer' },
    ],
    tags: ['Design operations', 'Leadership', 'Crypto', 'Design systems', 'Hiring'],
    credits: [
      { role: 'Senior Design Operations Manager → Senior Principal Designer', name: 'Osandi Robinson' },
      { role: 'Design systems', name: 'Poised LLC' },
    ],
    clientCredits: [
      { role: 'Organization', name: 'Mezo / Thesis' },
      { role: 'Head of Design', name: 'Mezo design leadership' },
    ],
    motionDemos: [] as { label: string; src: string }[],
  },
] as const;