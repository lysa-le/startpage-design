# Header — Component Spec

## Overview
The SERP navigation header. Two contexts (desktop / mobile) share the same elements but arrange them differently. The header always contains a SERP search field, category tabs, and an active-tab indicator. Desktop adds the logo, Privacy Please dropdown, and filter icon. Mobile adds a "full" variant that includes the logo and hamburger.

---

## Variants

| Modifier | Size | Description |
|---|---|---|
| `.site-header--desktop` | 1440×103px | Two-row layout: top (logo + search + right nav) + bottom (tabs + filter) |
| `.site-header--mobile` | 414×101px | Search bar + tabs only (SERP focused, no logo) |
| `.site-header--mobile-full` | 414×143px | Logo + hamburger + search + tabs |

---

## Anatomy

### Desktop
```
.site-header.site-header--desktop
  .site-header__top                     67px row — flex, align-center
    a.site-header__logo                 Startpage wordmark (104×23px) ← replace with assets/logos/startpage-wordmark.svg
    .site-header__search-wrap           628px fixed width, contains .search-field--serp
    .site-header__right                 margin-left: auto; flex row, gap 8px
      button.site-header__pp-btn        "Privacy, Please!" + chevron
      button.site-header__hamburger-btn  20×20 hamburger icon
  .site-header__nav                     36px row — flex, align-center
    nav.site-header__tabs               flex row, gap 24px
      button.site-header__tab           × 6: Web Images Videos News Shopping Maps
    button.site-header__filter-btn      16×16 filter icon (after tabs, margin-left 24px)
  span.site-header__tab-indicator       absolute, bottom 0, 3px high — positioned by JS
```

### Mobile — Default
```
.site-header.site-header--mobile
  .site-header__search-wrap             padding 16px 16px 0
    .search-field--serp.search-field--mobile
  nav.site-header__tabs                 flex, centered, gap 32px; padding 12px 16px
    button.site-header__tab             × 5: Web Images Videos News Shopping
  span.site-header__tab-indicator       absolute, bottom 0, 3px high
```

### Mobile — Full
```
.site-header.site-header--mobile-full
  .site-header__mobile-top              flex, center logo, hamburger absolute right; padding 20px 16px
    a.site-header__logo                 90×20px wordmark ← assets/logos/startpage-wordmark.svg
    button.site-header__hamburger-btn   absolute right
  .site-header__search-wrap             padding 0 16px
    .search-field--serp.search-field--mobile
  nav.site-header__tabs                 flex, centered, gap 32px; padding 12px 16px 8px
    button.site-header__tab             × 5: Web Images Videos News Shopping
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

## Active Tab Indicator

A 3px `--color-text-brandblue` pill (`.site-header__tab-indicator`) sits at `bottom: 0` on `.site-header`. Its `left` and `width` are set by JS to match the active tab's bounding rect relative to the header. It transitions on tab change.

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
4. **Tab switching is JS-driven.** Clicking a tab adds `site-header__tab--active` and repositions the indicator. No server round-trip implied — this is purely a UI state.
5. **Mobile "default" has no logo.** This is the SERP state on mobile — minimal header focused on search + result types. The "full" variant is used when branding needs to be visible.
6. **Mobile scroll interaction.** The default state (search + tabs only) is what the user sees while scrolling down through results. When the user scrolls back up, the header transitions to the full variant (wordmark + hamburger appear). The demo shows both states statically — the scroll-triggered transition is a page-level behaviour, not implemented in the component demo.
7. **Mobile header has no rounded corners.** The header spans the full width of the viewport on mobile — no border-radius on the header element itself.
