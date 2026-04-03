# Search Field — Component Spec

## Overview
Primary search input. Used in two contexts — **homepage** (before search) and **SERP** (in the page header during/after search). Each context has a desktop and mobile variant with identical state logic but different heights and padding.

---

## Anatomy

```
.search-field                     root container (flex row, align-center, pill border)
  input.search-field__input       text input (flex-grow, left padding)
  .search-field__actions          right-side icon group (flex row, right padding)
    button.search-field__clear    × clear button — hidden unless .has-value (SERP: always visible)
    .search-field__divider        1px vertical divider — same visibility rule as .search-field__clear
    button.search-field__submit   magnifying-glass submit button (always visible)
```

---

## Variants

### By context
| Modifier | Height (mobile) | Height (desktop) | Input `padding-left` |
|---|---|---|---|
| `.search-field--homepage` | 48px | 56px (+ `.search-field--desktop`) | `--spacing-20` |
| `.search-field--serp`     | 40px | 40px                              | `--spacing-16` |

### By state
| State | Trigger | Border colour | Shadow |
|---|---|---|---|
| Inactive | default | `--color-stroke-secondary` | none (SERP mobile: always has `--shadow-search`) |
| Active (focused, empty) | `:focus-within` | `--color-stroke-primary-button` | `--shadow-search` (homepage only) |
| Active with query | `.has-value` + `:focus-within` | `--color-stroke-primary-button` | `--shadow-search` (homepage only) |

---

## Sizes (from Figma)

| Context | Width | Height |
|---|---|---|
| Homepage mobile  | 382px (fluid) | 48px |
| Homepage desktop | 686px (fluid) | 56px |
| SERP desktop     | 628px (fluid) | 40px |
| SERP mobile      | 382px (fluid) | 40px |

Width is always fluid — set by the parent context, not the component.

---

## Spacing (from Figma measurements)

| Property | Value | Token |
|---|---|---|
| Input `padding-left` (homepage) | 20px | `--spacing-20` |
| Input `padding-left` (SERP)     | 16px | `--spacing-16` |
| Actions `padding-right` (all)   | 20px | `--spacing-20` |
| Actions `padding-right` (homepage desktop) | 24px | `--spacing-24` |
| Gap between action items        | 12px | `--spacing-12` |

---

## Interaction

- **Focus** → `:focus-within` adds blue border; homepage adds `--shadow-search`
- **Type** → JS adds `.has-value` to `.search-field` when `input.value.length > 0`; clear button + divider become visible
- **Clear** → click clears input, JS removes `.has-value`, refocuses input
- **Submit** → search icon button triggers query submission
- **SERP** → clear button + divider are CSS-forced visible regardless of `.has-value` (SERP always pre-fills the previous query)

---

## Token Mapping

| Property | Token |
|---|---|
| Background | `--color-background-primary` |
| Border width | `--border-stroke-sm` |
| Border (inactive) | `--color-stroke-secondary` |
| Border (active) | `--color-stroke-primary-button` |
| Border radius | `--radius-full` |
| Input font size | `--font-body-md` |
| Input line height | `--font-body-md-lh` |
| Input font weight | `--font-weight-regular` |
| Placeholder colour | `--color-text-secondary` |
| Input text colour | `--color-text-primary` |
| Caret colour | `--color-text-tertiary` |
| Search icon colour | `--color-icon-secondary` |
| Clear icon colour | `--color-icon-tertiary` |
| Divider colour | `--color-stroke-primary` |
| Focus shadow (homepage) | `--shadow-search` |
| Transition | `border-color 150ms ease, box-shadow 150ms ease` |

---

## Notes

1. **Width is fluid** — always 100% of the parent container. Figma widths (382/628/686px) are the context-level constraint, not the component.
2. **`--shadow-search`** (`0px 4px 15px 0px rgba(59, 67, 91, 0.08)`) was added to `tokens.css` for this component. Corresponds to "search bar dropshadow" in Figma.
3. **SERP inactive = pre-filled.** On SERP you always arrive with a search term, so the field starts with the previous query. Clear + divider are visible by default via CSS override on `.search-field--serp`.
4. **SERP mobile shadow.** The SERP mobile bar floats on the page (not embedded in a nav bar), so it always carries `--shadow-search` regardless of focus state.
5. **Icons are inline SVG** using `currentColor` — they inherit colour from the parent's `color` property, which is set to the appropriate token per element.
