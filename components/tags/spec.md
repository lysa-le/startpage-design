# tags — Component Spec

## Overview
Pill-shaped label used for categories, filters, ratings, and metadata. 5 variants across two heights (36px / 28px) and three styles (filled, outline, dismissible). Static by default; the dismissible variant includes an active close button.

---

## Variants

| Class modifier | Height | Description | Figma name |
|---|---|---|---|
| `.tag` (no modifier) | 36px | Filled, text only | Variant8 |
| `.tag--outline` | 36px | White bg + stroke, text only | Variant9 |
| `.tag--dismissible` | 36px | Filled, text + close × button | Variant13 |
| `.tag--sm` | 28px | Filled, leading icon + text | Variant12 |
| `.tag--label` | 36px | Filled, longer text label (e.g. "Rating: 10/10") | tag yellow |

---

## Anatomy

```
span.tag.tag--[variant]
  svg.tag__icon          ← .tag--sm only — 16×16 icon from sprite
  span.tag__text
  button.tag__dismiss    ← .tag--dismissible only — 16×16 × close
    svg (close icon)
```

---

## Sizes & Spacing (from Figma)

| Property | Value | Token |
|---|---|---|
| Height (36px variants) | 36px | — (set by padding + line-height) |
| Height (.tag--sm) | 28px | — (set by padding + line-height) |
| Horizontal padding (36px) | 12px | `--spacing-12` |
| Horizontal padding (.tag--sm) | 8px | `--spacing-8` |
| Icon ↔ text gap | 6px | `--tag-gap` (component var — below token scale) |
| Border radius | pill | `--radius-full` |
| Icon / close size | 16×16px | — |

---

## Token Mapping

| Property | Token |
|---|---|
| Background (filled variants) | `--color-button-productfilled` |
| Background (outline) | `--color-background-primary` |
| Border (outline) | `--border-stroke-sm` + `--color-stroke-primary` |
| Text | `--color-text-primary` |
| Close / icon color | `--color-icon-primary` |
| Font size | `--font-label-xs` |
| Font weight | `--font-weight-regular` |
| Line height | `--font-label-xs-lh` |

---

## Notes

1. **`.tag--dismissible` close button** — needs a JS click handler to remove the tag from the DOM. `aria-label="Remove"` on the `<button>`.
2. **`.tag--sm` icon** — 16×16 from the sprite. Demo shows a generic category icon placeholder; replace with the appropriate `#icon-*` once the sprite symbol exists.
3. **"tag yellow" name** — comes from an earlier Figma version. The variant uses `--color-button-productfilled` (lavender) like all other filled variants. Renamed `.tag--label` in code.
4. **6px gap** — below the 8px spacing scale minimum. A component-level `--tag-gap: 6px` custom property is used. Consider aligning to `--spacing-8` (8px) in a future Figma update.
