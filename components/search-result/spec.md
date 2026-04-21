# Search Result — Spec

**Figma source:** `UEXWOZNBxxFQOOUrYem17y` node `8:215` — "algo desktop"

---

## Anatomy

```
┌─────────────────────────────────────────────────────┐
│ [favicon 28×28]  Site Name                          │  ← source row
│                  https://domain.com › path          │
├─────────────────────────────────────────────────────┤
│ Page Title — Site Name                              │  ← title (link)
│ Description snippet text runs up to three lines     │  ← description
│ and trails off with an ellipsis...                  │
│ [🔒] Visit in Anonymous View                        │  ← AV badge
└─────────────────────────────────────────────────────┘
```

### Elements

| Element | Class | Notes |
|---|---|---|
| Wrapper | `.algo-result` | Flex column, gap 4px |
| Source row | `.algo-result__source` | Flex row, gap 12px, items-center |
| Favicon | `.algo-result__favicon` | 28×28px circle, placeholder or real img |
| Source info | `.algo-result__source-info` | Flex column, stacks site name + URL |
| Site name | `.algo-result__site-name` | `font-body-sm`, `color-text-primary` |
| URL breadcrumb | `.algo-result__url` | `font-body-sm`, `color-text-tertiary` |
| Content block | `.algo-result__content` | Flex column, gap 4px |
| Title | `.algo-result__title` | `font-body-lg` (18px/28px lh), `color-text-link` |
| Description | `.algo-result__description` | `font-body-sm` (14px/20px lh), `color-text-primary` |
| AV badge | `.algo-result__av-badge` | Flex row, gap 4px, items-center |
| AV icon | `.algo-result__av-icon` | 20×20px, `#icon-av` from sprite |
| AV label | `.algo-result__av-label` | `font-body-xs` (12px/18px lh), `color-text-link` |

---

## States

| State | Element | Change |
|---|---|---|
| Default | — | As designed |
| Hover | `.algo-result__title` | Underline |
| Hover | `.algo-result__av-label` | Underline |

---

## Token Mapping

| Property | Token | Light value | Dark value |
|---|---|---|---|
| Site name color | `color-text-primary` | `#1E222D` | `#F2F3FF` |
| URL color | `color-text-tertiary` | `#5B627A` | `#ACB1C2` |
| Title / AV label color | `color-text-link` | `#2E39B3` | `#8290FF` |
| Description color | `color-text-primary` | `#1E222D` | `#F2F3FF` |
| Favicon placeholder bg | `color-background-secondary` | `#E7E9FB` | `#34373D` |
| Title font size | `font-body-lg` | 18px | — |
| Title line height | `font-body-lg-lh` | 28px | — |
| Body font size | `font-body-sm` | 14px | — |
| Body line height | `font-body-sm-lh` | 20px | — |
| Caption font size | `font-body-xs` | 12px | — |
| Caption line height | `font-body-xs-lh` | 18px | — |

---

## Variants

| Variant | Status |
|---|---|
| Desktop (598px wide, auto height) | ✅ Built |
| Mobile | Pending |

---

# Search Result — Ad — Spec

**Figma source:** `UEXWOZNBxxFQOOUrYem17y` node `45:794` — "Desktop ads google"

---

## Anatomy

```
┌─────────────────────────────────────────────────────┐
│ Sponsored                                           │  ← sponsored label
│ [favicon 28×28]  Site Name                          │  ← source row
│                  https://domain.com/path  ⋮         │    (with three-dot menu)
├──────────────────────────────────────┬──────────────┤
│ Ad Headline Title — Long & Clickable │  [100×100px] │  ← title + optional image
│ Description body text up to 2–3      │  placeholder │
│ lines, supporting the headline...    │              │
├──────────────────────────────────────┴──────────────┤
│ ★★★★☆  rating for gooddog.com                      │  ← star rating (optional)
│ Sitelink 1 · Sitelink 2 · Sitelink 3               │  ← sitelinks (optional)
└─────────────────────────────────────────────────────┘
```

### Elements

| Element | Class | Notes |
|---|---|---|
| Wrapper | `.ad-result` | Flex column, `--ad-gap: 10px` between blocks |
| Sponsored label | `.ad-result__sponsored` | `font-body-sm`, `color-text-secondary` |
| Source row | `.ad-result__source` | Flex row, gap 12px, items-center |
| Favicon | `.ad-result__favicon` | 28×28px circle, placeholder or img |
| Source meta | `.ad-result__source-meta` | Flex row, gap 16px, items-center |
| Source info | `.ad-result__source-info` | Flex column: site name + URL |
| Site name | `.ad-result__site-name` | `font-body-sm`, `color-text-primary` |
| URL | `.ad-result__url` | `font-body-sm`, `color-text-tertiary` |
| Dots menu | `.ad-result__dots-btn` | Three-dot vertical icon, `color-text-tertiary` |
| Body row | `.ad-result__body` | Flex row, gap 19px (Figma spec) |
| Text block | `.ad-result__text` | Flex column, gap 4px, flex: 1 |
| Title | `.ad-result__title` | `font-body-lg` (18px/28px lh), `color-text-link` |
| Description | `.ad-result__description` | `font-body-sm` (14px/20px lh), `color-text-primary` |
| Image | `.ad-result__image` | 100×100px, `radius-lg`, `color-background-secondary` |
| Rating row | `.ad-result__rating` | Flex row, gap 12px, items-center |
| Stars | `.ad-result__stars` | Five 16×16px SVG stars |
| Star filled | `.star--filled` | `color-accent-gold` (gold-500 / gold-200 dark) |
| Star empty | `.star--empty` | `color-stroke-primary` (outline stroke) |
| Rating label | `.ad-result__rating-label` | `font-body-xs` (12px/18px lh), `color-text-tertiary` |
| Sitelinks row | `.ad-result__sitelinks` | Flex row, gap 8px, flex-wrap |
| Sitelink | `.ad-result__sitelink` | `font-body-sm`, `color-text-link` |
| Sitelink separator | `.ad-result__sitelink-sep` | Middle dot `·`, `color-text-tertiary` |

---

## Variants

| Variant | Property | Status |
|---|---|---|
| With image | `property1="image"` | ✅ Built |
| No image | `property1="no image"` | ✅ Built |

---

## States

| State | Element | Change |
|---|---|---|
| Default | — | As designed |
| Hover | `.ad-result__title` | Underline |
| Hover | `.ad-result__sitelink` | Underline |
| Hover | `.ad-result__dots-btn` | Background secondary, text secondary |

---

## Token Mapping

| Property | Token | Light value | Dark value |
|---|---|---|---|
| Sponsored label | `color-text-secondary` | `#7F869E` | `#7A8096` |
| Site name | `color-text-primary` | `#1E222D` | `#F2F3FF` |
| URL | `color-text-tertiary` | `#5B627A` | `#ACB1C2` |
| Title / sitelinks | `color-text-link` | `#2E39B3` | `#8290FF` |
| Description | `color-text-primary` | `#1E222D` | `#F2F3FF` |
| Favicon bg | `color-background-secondary` | `#E7E9FB` | `#34373D` |
| Image placeholder bg | `color-background-secondary` | `#E7E9FB` | `#34373D` |
| Stars filled | `color-accent-gold` | `#FCBB61` (gold-500) | `#FFE4AA` (gold-200) |
| Stars empty stroke | `color-stroke-primary` | `#D0D3F2` | `#494D56` |
| Rating label | `color-text-tertiary` | `#5B627A` | `#ACB1C2` |
| Sitelink separator | `color-text-tertiary` | `#5B627A` | `#ACB1C2` |
| Dots menu icon | `color-text-tertiary` | `#5B627A` | `#ACB1C2` |

### Spacing gap note

The 10px column gap (`--ad-gap`) falls outside the spacing scale (which steps 4 → 8 → 12). Stored as a component-level custom property — matches Figma exactly. The 19px body gap also falls outside the scale and is specified directly per the Figma `gap-[19px]` value.
