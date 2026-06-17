# News Hub — Homepage Prototype

HTML/CSS design prototype for surfacing a news hub and affiliate veve tiles on
the Startpage homepage. A single file (`homepage-news-veve.html`) covers both
promotional-messaging states; additional files document earlier design
explorations.

All visual values reference the live design system token layer
(`../../startpage-design/tokens.css`). The prototype is self-contained — no
external stylesheet is required — but it does depend on the local `assets/`
folder for images (tile logos, illustrations, product icons). **Share the entire
`homepage-veve-news/` folder, not just the HTML file.**

---

## Files

| File | Intent |
|---|---|
| `homepage-news-veve.html` | Primary prototype. Single file covering both promo ON and promo OFF states, toggled in-page. See *Prototype controls* below. Represents the **phase 2** surface (veve tiles + Opera-powered news hub). |
| `homepage-veve.html` | **Phase 1** design: how the above-the-fold promo card looks alongside the veve (affiliate) tiles, which launch first — no news hub. Mobile promotes "Get the app" only. Phase 2 adds the Opera news API to the homepage news hub. |
| `settings-toggle.html` | The promotional-messaging toggle control in isolation. |

---

## Prototype controls

### Hide promotional messaging toggle
Mirrors the production quick-setting exactly — same behaviour, same
localStorage persistence. In the prototype it appears as a floating button so
both states are easy to compare without navigating away. Clicking it removes the
below-the-fold promotional content (hero CTAs, feature section, stats,
comparison table, press ticker) while keeping the news hub, veve tiles, and
footer visible.

### Theme switcher
A light/dark toggle sits in the upper-right corner of the page, to the left of
the hamburger menu. It is **not** present in the sticky header. This is
prototype chrome only — not part of the production design — included so the
design can be reviewed in both colour modes. The preference is persisted in
localStorage (`sp-proto-theme`).

---

## New features in this prototype

| Feature | Notes |
|---|---|
| **Veve tiles** | Row of 8 affiliate link tiles (desktop) / 2 tiles (mobile) between the search box and the news hub. Fixed, server-curated affiliate links — identical for everyone in a locale; users cannot select, reorder, or personalize them (hence "veve," not "fave"/favorites). Hover state uses `--color-background-secondary`. "Sponsored" label + info icon with popover, right-aligned to the search box. |
| **Top News hub** | Replaces the old menu CTA cards. 16-card grid in both promo states. Kebab menu (⋯) opens "About Top News" and "Send feedback". One-time dismissible intro note. |
| **Visit in Anonymous View** | Each news card carries an inline "Visit in Anonymous View" link (AV glasses icon + label, sourced from the Search Result component) below the publisher and timeframe. The card uses a stretched-link pattern so the whole card opens the article while the AV link stays independently clickable. |
| **Slim promo banner** | Single-row floating CTA between the news hub and "Learn more". Uses `position: sticky; bottom` so it docks above the learn-more row as the user scrolls. Visible only in promo ON state. Mobile copy reads "Make Startpage your default on desktop." |
| **Responsive mobile layout** | News grid: 2 columns. Veve tiles: 2 (desktop size). Product cards: full-width, 16 px from edges, single-column. Feature section: static stacked layout (no sticky-scroll). Stats: vertically stacked. |
| **Footer (swaps by promo state)** | **Promo ON** keeps the full design-system footer from `components/footer`: wave + dark panel + white wordmark + nav links + social icons (desktop row layout; mobile stacked with About Us first). **Promo OFF** reverts to the slim legacy footer — a thin bottom bar with Privacy Policy · About Us · Press, theme-aware (light bar in light mode, dark bar in dark mode). |

---

## How to view

Open `homepage-news-veve.html` from inside the unzipped `homepage-veve-news/` folder. Because asset
paths are relative (`assets/…`), the file must be opened from its own directory:

```
startpage-design-playground/
└── homepage-veve-news/
    ├── homepage-news-veve.html  ← open this
    └── assets/                  ← must stay alongside it
```

`file://` works directly in the browser — no local server required. For sharing
with stakeholders, either:

- **Zip the `homepage-veve-news/` folder** and open `homepage-news-veve.html` from inside the unzipped
  copy, or
- **Drag the `homepage-veve-news/` folder into [Netlify Drop](https://app.netlify.com/drop)**
  for an instant shareable URL (no account needed).

---

## Decisions

The questions below have now been resolved. Context: **phase 1** launches the
veve (affiliate) tiles first, with no news hub; **phase 2** integrates the Opera
news API to power the Top News hub on the homepage.

---

### 1 — Can we limit the number of news articles fetched on the homepage?

**Decision: Yes.** We can limit the number of news items called on the homepage.
(Applies to phase 2, when the Opera-powered news hub is integrated.) The
prototype currently shows 16 cards; open follow-ups for engineering once the
Opera API is wired up:

- What is the minimum viable count for a useful news surface?
- Does a lower limit meaningfully reduce page-weight or API cost?
- If we ever show fewer than 16, how do we handle the empty grid state?

**Owner:** Engineering / Product

---

### 2 — Are we allowed to include "Visit in Anonymous View" on each news tile?

**Decision: Yes.** Opera confirmed that the news tiles link out to articles that
carry ads, but the articles themselves are not "sponsored" and therefore don't
constitute ads — so they can be surfaced in Anonymous View. The AV affordance is
now implemented inline on each news card in `homepage-news-veve.html` (icon + "Visit
in Anonymous View", below the publisher and timeframe).

**Owner:** Legal / Engineering

---

### 3 — Sponsored label and info icon on veve tiles

*Background:* Startpage tells users we show only contextual ads. Displaying
affiliate tiles without any attribution appears inconsistent with that promise
and risks a trust gap with privacy-conscious users.

**Decision: Yes — include them.** The veve tiles ship with a "Sponsored" label
and an info icon (right-aligned to the search box). The info popover is **not
open by default** on either desktop or mobile — it opens only on tap/click. The
popover reads:

> "Quick links to our partners. They're the same for everyone and not based on
> your searches or data. They help keep Startpage free."

**Owner:** Product / Legal

---

### 4 — Redesign (or remove) the above-the-fold promo cards

The existing CTA cards ("Install on Chrome", "Get the app") were designed to
occupy significant above-the-fold real estate. With veve tiles and the news hub
now sharing that space, the cards create visual clutter and compete with new
features for attention.

**Decision: Redesign — not remove.** We will ship redesigned promo cards for both
desktop and mobile, across both phases:

- **Phase 1 (veve tiles only):** an above-the-fold promo card alongside the veve
  tiles — see `homepage-veve.html` (mobile promotes "Get the app").
- **Phase 2 (veve tiles + news hub):** a promo card alongside the veve tiles and
  the Opera-powered Top News hub — see `homepage-news-veve.html`.

**Data for reference:**  
Current promo card click-through data is in Sigma:  
[Startpage Clicks Report](https://app.sigmacomputing.com/system1/workbook/Startpage-Startpage-Clicks-Report-6bJ00DpSevck6BZ3pfzREt?:customView=eff104e8-d2ea-40a0-8eed-f8e33566c140&:nodeId=6hJYnU9hcD)

**Owner:** Product / Design

---

## Principles honored

- **No personalisation for now.** No accounts, no sync, no like/save/dislike, no
  "recommended for you" at launch. Content is identical for everyone in a locale.
- **Editorial only at launch.** Personalisation / customization is deferred —
  not cut; visual room is left for it, but no controls are built yet.
- **Pull, not push.** With promo messaging OFF, news is still reachable — the
  toggle governs content blocks, not global navigation.
- **Brand voice.** Direct, privacy-first; "private" over "safe/secure".

---

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `footer`), `aria-label` /
  `aria-current` on nav.
- Whole-card links carry descriptive `aria-label` (title + publisher + time);
  decorative elements are `aria-hidden`.
- Kebab menu follows ARIA `menu` / `menuitem` pattern with keyboard navigation
  (↑ ↓ Home End Escape).
- Sponsored popover uses `aria-haspopup` / `aria-expanded` / `role="tooltip"`.
- Real `:focus-visible` rings using design-system stroke tokens.
- Scroll-driven animations respect `prefers-reduced-motion`.
