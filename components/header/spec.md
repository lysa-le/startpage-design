# Header — Component Spec

## Overview
The SERP navigation header. Two contexts (desktop / mobile) share the same elements but arrange them differently. The header always contains a SERP search field, category tabs, a tab carousel with sticky filter button, and an active-tab indicator. Desktop adds the logo, Privacy Please dropdown, and filter icon aligned to the search bar. The `.site-header--desktop` variant is fully responsive: above 768px it shows the two-row desktop layout; at or below 768px it switches to the mobile-full layout (logo + hamburger + search + scrollable tabs). The two static mobile variants are 414px-wide demo snapshots.

---

## Variants

| Modifier | Size | Description |
|---|---|---|
| `.site-header--desktop` | 1440px (responsive) | Two-row desktop layout above 768px; switches to mobile-full layout at ≤768px |
| `.site-header--mobile` | 414×101px | Static demo: search bar + scrollable tabs + sticky filter (no logo) |
| `.site-header--mobile-full` | 414×143px | Static demo: logo + hamburger + search + scrollable tabs + sticky filter |

---

## Anatomy

### Desktop (> 768px)
```
.site-header.site-header--desktop
  .site-header__top                     grid-row 1, display:subgrid (shares parent columns)
    a.site-header__logo                 col 2 (104px); Startpage wordmark
    .site-header__search-wrap           col 4 (1fr, max 628px); contains .search-field--serp
    .site-header__right                 col 5 (auto); flex row, gap 40px
      button.site-header__pp-btn        "Privacy, Please!" + chevron
      button.site-header__hamburger-btn  20×20 hamburger icon
  .site-header__nav                     grid-row 2, display:subgrid (shares parent columns)
    .site-header__tabs-row              col 4 (same 1fr track as search bar, max 628px); scrollable tabs + sticky filter
      .site-header__tabs-scroll         overflow hidden; ::after gradient
        nav.site-header__tabs           overflow-x auto; gap 24px; padding-left 16px
          button.site-header__tab       × 6: Web Images Videos News Shopping Maps
      button.site-header__filter-btn    sticky right; padding-right 20px (x-aligns with search submit icon)
  span.site-header__tab-indicator       absolute, bottom 0, 3px high — positioned by JS
```

**Filter alignment:** The header uses a 7-column CSS Grid: `var(--spacing-24) 104px var(--spacing-24) 1fr var(--spacing-24) auto var(--spacing-40)`. Col 3 (logo→search gap) and col 5 (search→PP gap) are identical — `var(--spacing-24)` — so the spacing is symmetric. Both the top row and nav row are `display: grid; grid-template-columns: subgrid`, sharing the same col 4 (`1fr`). The filter icon is always x-aligned with the search submit icon because they both sit in col 4 with the same 20px right offset.

**Responsiveness:** The desktop header is a fixed-layout demo only and does not respond to viewport width. Mobile layouts are separate static demos (`.site-header--mobile`, `.site-header--mobile-full`).

### Desktop → Mobile responsive switch (≤ 768px)
The `.site-header__top` and `.site-header__nav` rows are hidden. The three mobile-only rows become visible:
```
.site-header.site-header--desktop          [data-theme responsive border applied]
  .site-header__mobile-top                 flex, center logo, hamburger absolute right; padding 20px 16px
    a.site-header__logo                    104×23px wordmark
    button.site-header__hamburger-btn      absolute right
  .site-header__search-wrap--mobile        block; padding 16px 16px 0
    .search-field--serp.search-field--mobile
  .site-header__tabs-row                   flex row, align-stretch
    .site-header__tabs-scroll              flex 1; overflow hidden; ::after gradient 48px right edge
      nav.site-header__tabs                overflow-x auto, no scrollbar, flex-wrap nowrap; gap 32px
        button.site-header__tab            × 6: Web Images Videos News Shopping Maps
    button.site-header__filter-btn         flex-shrink 0; padding 0 16px 0 8px (sticky right)
  span.site-header__tab-indicator          absolute, bottom 0, 3px high
```

### Mobile — Default (static demo)
```
.site-header.site-header--mobile
  .site-header__search-wrap             padding 16px 16px 0
    .search-field--serp.search-field--mobile
  .site-header__tabs-row                flex row, align-stretch
    .site-header__tabs-scroll           flex 1; overflow hidden; ::after gradient 48px right edge
      nav.site-header__tabs             overflow-x auto, no scrollbar, flex-wrap nowrap; gap 32px
        button.site-header__tab         × 6: Web Images Videos News Shopping Maps
    button.site-header__filter-btn      flex-shrink 0; padding 0 16px 0 8px (sticky right)
  span.site-header__tab-indicator       absolute, bottom 0, 3px high
```

### Mobile — Full (static demo)
```
.site-header.site-header--mobile-full
  .site-header__mobile-top              flex, center logo, hamburger absolute right; padding 20px 16px
    a.site-header__logo                 90×20px wordmark
    button.site-header__hamburger-btn   absolute right
  .site-header__search-wrap             padding 0 16px
    .search-field--serp.search-field--mobile
  .site-header__tabs-row                flex row, align-stretch
    .site-header__tabs-scroll           flex 1; overflow hidden; ::after gradient 48px right edge
      nav.site-header__tabs             overflow-x auto, no scrollbar, flex-wrap nowrap; gap 32px
        button.site-header__tab         × 6: Web Images Videos News Shopping Maps
    button.site-header__filter-btn      flex-shrink 0; padding 0 16px 0 8px (sticky right)
  span.site-header__tab-indicator       absolute, bottom 0, 3px high
```

---

## Sizes & Spacing (from Figma)

| Property | Value | Token |
|---|---|---|
| Desktop horizontal padding (left) | 24px | `--spacing-24` |
| Desktop horizontal padding (right) | 40px | `--spacing-40` |
| Desktop logo → search gap | 24px | `--spacing-24` |
| Desktop right nav gap (PP ↔ hamburger) | 8px | `--spacing-8` |
| Desktop tabs gap | 24px | `--spacing-24` |
| Desktop tabs left offset (aligns first tab with search input text) | 16px | `--spacing-16` |
| Desktop tabs → filter gap | 24px | `--spacing-24` |
| Mobile horizontal padding | 16px | `--spacing-16` |
| Mobile tabs gap | 32px | `--spacing-32` |
| Search bar height | 40px | (from search-field spec) |
| Desktop logo size | 104×23px | |
| Mobile full logo size | 90×20px | |
| Hamburger icon | 20×20px | |
| Filter / chevron / PP icons | 16×16px | |
| Active indicator height | 3px | |

---

## Tab Carousel

All mobile tab rows use a scrollable carousel pattern:
- **`.site-header__tabs-row`** — flex row containing the scroll area and the sticky filter button
- **`.site-header__tabs-scroll`** — `overflow: hidden` container with an `::after` pseudo-element that fades to `var(--color-background-primary)` over the last 48px, signalling more content to the right
- **`nav.site-header__tabs`** — `overflow-x: auto`, hidden scrollbar, `flex-wrap: nowrap`; tabs left-align and overflow naturally
- **Sticky filter button** — sits outside `.site-header__tabs-scroll` as a sibling; `flex-shrink: 0`; no gradient applied
- **Gradient color** uses `var(--color-background-primary)` so it matches the header background in both light and dark mode automatically

---

## Active Tab Indicator

A 3px `--color-text-brandblue` pill (`.site-header__tab-indicator`) sits at `bottom: 0` on `.site-header`. Its `left` and `width` are set by JS to match the first *visible* (rendered) active tab's bounding rect relative to the header — this handles the responsive desktop header where both desktop and mobile tab navs exist in the DOM simultaneously but only one is rendered at a time.

**Tab click behaviour:** clicking a tab sets `site-header__tab--active` on all tabs with the same `data-text` value (syncing desktop + mobile navs), then repositions the indicator and calls `scrollIntoView` to bring the clicked tab fully into view within the scroll container.

---

## Dependencies

- Embeds `.search-field--serp` + `.search-field--mobile` (styles from `components/search-field/`)
- Logo asset: `assets/logos/startpage-wordmark.svg` (not yet created — text placeholder used in demo)

---

## Token Mapping

| Property | Token |
|---|---|
| Background | `--color-background-primary` |
| Border bottom (desktop) | `--border-stroke-sm` + `--color-stroke-secondary` |
| Border bottom (mobile) | `--border-stroke-sm` + `--color-stroke-primary` |
| Tab text (inactive) | `--font-body-sm` / `--font-weight-regular` / `--color-text-primary` |
| Tab text (active) | `--font-body-sm` / `--font-weight-semibold` / `--color-text-brandblue` |
| Tab indicator | `--color-text-brandblue` / `--radius-full` |
| PP button text | `--font-body-sm` / `--color-text-primary` |
| Icon color | `--color-icon-primary` |
| Desktop search shadow | `--shadow-search` (context override — header adds shadow to SERP search) |

---

## Notes

1. **Logo is a placeholder.** Replace `<span class="site-header__logo-text">Startpage</span>` with `<img src="../../assets/logos/startpage-wordmark.svg" alt="Startpage">` once `assets/logos/` is created.
2. **Desktop search shadow.** In the search-field spec, SERP desktop has no shadow. The header overrides this with `--shadow-search` via `.site-header--desktop .search-field--serp`.
3. **Mobile border differs from desktop.** Desktop uses `--color-stroke-secondary` (lighter); mobile uses `--color-stroke-primary` (slightly darker). Both are 1px.
4. **Tab switching is JS-driven.** Clicking a tab syncs `site-header__tab--active` across all navs in the header by `data-text` match, then repositions the indicator to the first visible active tab. No server round-trip implied — this is purely a UI state.
5. **Mobile "default" has no logo.** This is the SERP state on mobile — minimal header focused on search + result types. The "full" variant is used when branding needs to be visible.
6. **Mobile scroll interaction.** The default state (search + tabs only) is what the user sees while scrolling down through results. When the user scrolls back up, the header transitions to the full variant (wordmark + hamburger appear). The demo shows both states statically — the scroll-triggered transition is a page-level behaviour, not implemented in the component demo.
7. **Mobile header has no rounded corners.** The header spans the full width of the viewport on mobile — no border-radius on the header element itself.
8. **Responsive desktop header contains both layout trees in the DOM.** The `.site-header--desktop` variant includes hidden mobile-only rows (`.site-header__mobile-top`, `.site-header__search-wrap--mobile`, `.site-header__tabs-row`) alongside the desktop rows (`.site-header__top`, `.site-header__nav`). CSS hides the inactive set at each breakpoint. The indicator JS always queries `offsetWidth > 0` to find the rendered active tab.
9. **Tab count is 6 across all variants.** Web · Images · Videos · News · Shopping · Maps. Maps was absent from mobile in the original design and has been added to match desktop.
