Build a **single-page React** website for a Solana token called **TURN THE VOLUME UP** (ticker **$VOLUME**). Contract address: **XbXVF3H489xUDuyUCaRMLomCo8wsk2bfQGySJutpump**. The page must feel cinematic, high-contrast, and rally-like — visitors should feel a surge: _impact, defiance, mobilisation_.

### Tech & project setup

- **React + Vite**, **TypeScript**.
- **Tailwind CSS** for styling.
- **Framer Motion** for animations (parallax, reveal, marquee).
- **Lucide-react** for icons.
- **Lenis** (or similar) for smooth scrolling.
- **Shadcn/ui** for buttons, sheet (mobile menu), dialog (contract copy).
- **SEO & meta**: Title, description, Open Graph/Twitter cards, favicon placeholders, social preview.
- **Fonts**: Use system stack, plus **Inter** for body, **Space Grotesk** for headings (via @import).
- **Accessible**: semantic HTML, alt text, focus states, reduced-motion fallback.

### Visual language

- **Palette** (dark mode default):

  - Background: `#0A0A0B`
  - Primary: **Electric Red** `#FF2436`
  - Accent: **Signal Orange** `#FF7A1A`
  - Secondary text: `#B3B3B8`
  - Lines/frames: `#1C1C21`
  - Success/green accent for on-chain stats: `#00D68F`

- **Aesthetic**: Bold typographic grids, vertical rhythm, split screens, **giant headline** treatments, halftone textures of NYC skylines, subtle CRT scanline overlay at 6–8% opacity.
- **Motion**: Parallax hero, kinetic marquee, staggered reveals, magnetic hover on CTAs, subtle “audio-meter” animated bars behind headings (accessible; turn off with `prefers-reduced-motion`).
- **Imagery**: Abstract NYC silhouettes, protest crowd silhouettes, neon-style equaliser bars, Solana-style spectral gradients (red→orange). No real person photos; keep it symbolic.

### Page structure (one page, anchored sections)

1. **Sticky Nav** (desktop & mobile)
2. **Hero** with parallax & kinetic headline
3. **Ticker/Contract Bar** (copy-to-clipboard)
4. **Lore** (the origin spark)
5. **Manifesto** (the pledge / what “turn it up” means in policy-energy)
6. **Amplify NYC** (visual tiles of commitments)
7. **Token** (symbol, supply note, on-chain links placeholders)
8. **Call to Action** (Join the noise)
9. **FAQ** (short, punchy)
10. **Footer** (disclaimer + social)

---

## Components & content (provide all copy exactly)

### 1) Header / Sticky Nav

- **Left**: bold wordmark `TURN THE VOLUME UP` (monospace alt on small screens: `VOLUME`).
- **Right**: anchor links — `Lore`, `Manifesto`, `Token`, `FAQ` — plus a primary **Get $VOLUME** button.
- **Mobile**: hamburger → sheet with the same anchors and CTA.
- **Behaviour**: On scroll, header gains a thin red bottom border and slight blur.

### 2) HERO (full viewport height)

- **Layout**: Split screen on desktop. Left: copy. Right: animated backdrop (equaliser bars + faint NYC skyline parallax).
- **Top micro-marquee** (Framer Motion): “TURN IT UP • TURN IT UP • TURN IT UP” looping, thin weight, letter-spaced.
- **Headline** (XL, 3 lines, weight 800):

  ```
  TURN THE
  VOLUME UP
  ```

- **Subhead** (max 70ch):

  > A rallying cry born of defiance. $VOLUME is a Solana token inspired by a moment when New York rejected fear, and chose to **turn it up** — together.

- **Primary CTA**: `Get $VOLUME` (solid Electric Red)
  **Secondary CTA**: `Read the Lore` (ghost button, scroll to section)
- **Micro trust row** (small, muted):

  - Ticker: **$VOLUME**
  - Chain: **Solana**
  - Contract: shortened + `Copy` icon opens dialog with full address and “Copied!” toast.

- **Backdrop motion**: slow vertical wave on equaliser bars; skyline parallax at 10–15% depth.

### 3) Ticker / Contract Bar (full-width strip)

- Dark strip with **Contract**: `XbXVF3H489xUDuyUCaRMLomCo8wsk2bfQGySJutpump` and **Copy** button.
- Buttons (outline): `Birdeye`, `Dexscreener`, `Jupiter` (placeholder `href="#"`, open new tab).
- On small screens, stack vertically with generous spacing.

### 4) LORE (anchor: `#lore`)

- **Section label**: `LORE`
- **Kicker**: `“Turn the volume up.”`
- **Copy** (two columns on desktop, single column on mobile; show as provided, with a small note that it’s a narrative inspiration):

  > In his victory speech on 4 November 2025, following his election as New York City’s mayor, **Zohran Mamdani** — a 34-year-old democratic socialist and state assemblyman — directly addressed President **Donald Trump** with the phrase **“Turn the volume up.”** It was a bold, defiant challenge, urging Trump to escalate his attacks and opposition efforts against Mamdani’s progressive agenda.
  >
  > The remark landed amid Mamdani’s pledge to dismantle the systemic inequalities, corruption, and cronyism that he argued enabled Trump’s rise. The message: **terrify a despot** by confronting those power structures — ending tax loopholes for billionaires, expanding labour protections, making public transit free, and protecting immigrants, the trans community, and other marginalised groups from federal overreach.
  >
  > By daring Trump to **turn the volume up**, Mamdani signalled that New York City — where Trump built his empire — would lead national resistance, united in solidarity: **“to get to any of us, you will have to get through all of us.”** Intensified conflict would only amplify the mandate for transformative change.
  >
  > Trump, who had called Mamdani a “communist” and threatened to withhold federal funding, appeared to answer in real time on Truth Social: **“…AND SO IT BEGINS!”**
  >
  > **$VOLUME** channels that energy — not as politics, but as **collective signal**. When they turn it up, **we turn up together**.

- **Note (small, muted)**: “The above is a **narrative inspiration** and rallying metaphor for the token. It is **not** an endorsement, verification, or political solicitation.”

### 5) MANIFESTO (anchor: `#manifesto`)

- **Headline**: `What does “turn it up” mean here?`
- **Grid of four cards** (animated in with stagger):

  1. **From Silence to Signal**
     We organise noise into **signal** — collective attention, transparent intent, and on-chain proof that a crowd can move as one.
  2. **From Fear to Frequency**
     Volume is courage measured in decibels. We stand taller, speak louder, and keep rhythm when the room tries to mute us.
  3. **From Walls to Waves**
     Walls block sound; waves pass through. We choose waves — open, permissionless, unstoppable energy moving through the city and beyond.
  4. **From Moments to Movements**
     A phrase becomes a pulse; a pulse becomes a beat; the beat becomes a march. **$VOLUME** is that beat — steady, rising, undeniable.

### 6) AMPLIFY NYC (visual row of commitments)

- **Headline**: `What we amplify`
- **Three wide tiles** with icon + caption (hover lifts + glow):

  - **Workers** — Fair pay, dignity, protection.
  - **Transit** — Mobility as a right, not a luxury.
  - **Belonging** — Immigrants, trans folks, and every neighbour who’s been told to keep it down.

- **Footnote (small)**: Symbolic commitments reflecting themes of fairness and solidarity. Not a promise of utility or outcomes.

### 7) TOKEN (anchor: `#token`)

- **Headline**: `$VOLUME on Solana`
- **Two-column layout**:

  - **Left (specs box)**:

    - **Ticker**: $VOLUME
    - **Chain**: Solana
    - **Contract**: `XbXVF3H489xUDuyUCaRMLomCo8wsk2bfQGySJutpump` (copy button)
    - **Supply**: Community-driven, meme-native (placeholder text; no guarantee implied)
    - **On-chain links**: Birdeye / Dexscreener / Jupiter (placeholders)

  - **Right (symbol card)**: Abstract equaliser logo lockup (SVG placeholder with animated bars). Caption:

    > **Symbol**: The equaliser. When they raise the volume, we return with more signal — sharper, clearer, louder together.

- **Inline note** (muted): _$VOLUME is a meme token with no intrinsic value, expectation of profit, or claim on anything. It is art, culture, and community energy on a ledger._

### 8) CTA (full-bleed “call-and-response” band)

- **Background**: diagonal gradient Electric Red → Signal Orange; faint halftone texture.
- **Large line**: `If they turn it up, we turn up louder.`
- **Buttons**:

  - **Get $VOLUME** (primary, large)
  - **Join the Noise** (secondary → opens X/Twitter community link placeholder)

- **Subtext (small)**: Trade links are third-party. Do your own research. Nothing here is financial advice.

### 9) FAQ (anchor: `#faq`)

- **Compact accordion (shadcn/ui)** with the following Q/A:

  **What is $VOLUME?**
  A community-driven Solana meme token inspired by a moment of civic defiance. It is a symbol, not a security or promise.

  **Is this political?**
  It’s a cultural statement about courage and solidarity. The narrative above is inspiration, not an endorsement or solicitation.

  **How do I get $VOLUME?**
  Use a Solana wallet and trade via your preferred DEX aggregator. We link common explorers for convenience only.

  **Any roadmap?**
  No hard promises. We prefer **frequency over fantasy** — community-led drops, art, and moments that keep the signal rising.

  **Risks?**
  Tokens can go to zero. Only participate with what you can afford to lose. This site is not advice.

### 10) Footer

- **Left**: small wordmark + year.
- **Centre**: tiny nav anchors.
- **Right**: Social icons (X/Twitter, Telegram) placeholders.
- **Legal line (tiny, high contrast)**:
  `This website is an artistic, community-oriented expression. It does not represent any public figure or institution. Nothing herein is financial, legal, or political advice.`

---

## Interactions & micro-details

- **Scroll cues**: chevron bounce in hero (reduced motion fallback = static).
- **Copy-to-clipboard**: contract address with toast “Contract copied”.
- **Marquee speed** changes slightly on hover for tactile feel.
- **Magnetic hover** on primary CTAs (button follows cursor within 16px radius).
- **Section reveals**: 60ms stagger per child with gentle y-translate + opacity fade.
- **Hash routing**: clicking nav anchors smooth-scrolls with offset for sticky header.
- **Responsive**: 320px → 1440px+. Typography scales with clamp(); grids collapse to single column on mobile.
- **Performance**: lazy-load non-critical images/SVGs; use CSS where possible for effects; ship below-the-fold motion after first paint.
- **Accessibility**: full keyboard support; visible focus rings; aria-labels; reduced motion respected.

---

## File structure (suggested)

```
/src
  /components
    Header.tsx
    Hero.tsx
    ContractBar.tsx
    Lore.tsx
    Manifesto.tsx
    Amplify.tsx
    Token.tsx
    Cta.tsx
    Faq.tsx
    Footer.tsx
    EqualiserLogo.tsx
  /lib
    animations.ts
    copyToClipboard.ts
  /assets
    skyline.svg
    halftone.png
    og-image.png
  App.tsx
  main.tsx
  index.css
```

---

## Exact button labels & links (placeholders)

- **Get $VOLUME** → `#token`
- **Read the Lore** → `#lore`
- **Birdeye** → `#`
- **Dexscreener** → `#`
- **Jupiter** → `#`
- **Join the Noise** → `#`

---

## Meta & SEO

- **Title**: TURN THE VOLUME UP — $VOLUME on Solana
- **Description**: A cinematic, one-page site for $VOLUME — a Solana meme token inspired by a moment of defiance. If they turn it up, we turn up louder.
- **OG Image**: gradient background with equaliser icon + headline.
- **Theme-colour**: `#FF2436`.

---

### Deliverables

- Fully functional one-page React site with all sections and copy above.
- Smooth animations with reduced-motion fallbacks.
- Accessible, responsive, and production-ready styling with Tailwind.
- All CTAs wired to anchors; contract copy works; placeholder external links included.

**Contract Address (must appear in Hero, Contract Bar, and Token sections):**
`XbXVF3H489xUDuyUCaRMLomCo8wsk2bfQGySJutpump`

**Ticker:** `$VOLUME` — **Name:** `TURN THE VOLUME UP`

Build it bold. Make the first scroll feel like a bass drop.
