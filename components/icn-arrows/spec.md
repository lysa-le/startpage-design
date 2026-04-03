# icn-arrows — Component Spec

## Overview
Chevron/arrow icon in 9 variants across two directions (right, down), two styles (bare, circle), and multiple sizes. Used inline within interactive elements — the icon itself carries no interaction; the parent (button, link) handles that.

---

## Variants

| Class modifier | Direction | Style | Size | Figma name |
|---|---|---|---|---|
| `icn-arrows--right-sm` | right | bare | 16×16 | right small |
| `icn-arrows--right-lg` | right | bare | 16×16 (larger chevron) | right large |
| `icn-arrows--right-circle` | right | circle bg | 24×24 | right circle |
| `icn-arrows--down-sm` | down | bare | 16×16 | down small |
| `icn-arrows--down-lg` | down | bare | 16×16 (larger chevron) | down large |
| `icn-arrows--down-circle` | down | circle bg | 16×16 | down circle |
| `icn-arrows--v7` | down | bare | 16×16 | Variant7 (unnamed in Figma) |
| `icn-arrows--v8` | right | circle bg + shadow | 48×48 | Variant8 |
| `icn-arrows--v9` | down | circle bg | 32×32 | Variant9 |

---

## Anatomy

```
span.icn-arrows.icn-arrows--[variant]   root — inline-flex, centers content
  svg                                   chevron path only; currentColor stroke
```

The circle background is CSS-driven (`background` + `border-radius: --radius-full`), not embedded in the SVG. This keeps the SVG as a pure path and lets the background token adapt to dark mode automatically.

---

## Token Mapping

| Property | Token |
|---|---|
| Chevron colour | `--color-icon-primary` |
| Circle background | `--color-button-inactive` |
| Circle + shadow | `--color-button-inactive` + `--shadow-dropdown` |
| Border radius (circles) | `--radius-full` |

---

## SVG Paths

All chevrons use `fill="none"`, `stroke="currentColor"`, `stroke-linecap="round"`, `stroke-linejoin="round"`.

| Variant | ViewBox | Path | Stroke width |
|---|---|---|---|
| right-sm | 0 0 16 16 | `M6 4.5L10 8L6 11.5` | 1.5 |
| right-lg | 0 0 16 16 | `M5 3L11 8L5 13` | 1.5 |
| right-circle | 0 0 24 24 | `M10 8.5L14 12L10 15.5` | 1.5 |
| down-sm | 0 0 16 16 | `M4.5 6L8 10L11.5 6` | 1.5 |
| down-lg | 0 0 16 16 | `M3 5.5L8 10.5L13 5.5` | 1.5 |
| down-circle | 0 0 16 16 | `M4.5 6L8 10L11.5 6` | 1.5 |
| v7 | 0 0 16 16 | `M4.5 6L8 10L11.5 6` | 1.5 |
| v8 | 0 0 48 48 | `M20 17L28 24L20 31` | 2 |
| v9 | 0 0 32 32 | `M10.5 12.5L16 18L21.5 12.5` | 1.5 |

---

## Usage

Always wrap in a button or link when the icon is interactive. `aria-hidden="true"` on the icon; the wrapper provides the accessible label.

```html
<!-- In the PP dropdown button (header) -->
<button class="site-header__pp-btn" aria-haspopup="true" aria-expanded="false">
  Privacy, Please!
  <span class="icn-arrows icn-arrows--down-sm" aria-hidden="true">...</span>
</button>
```

---

## Notes

1. **Variant7** is an unnamed Figma variant visually identical to `down-sm`. Clarify with designer if a distinct use case is intended.
2. **Sprite.** The bare right-pointing chevron (`right-sm`) should be added to `assets/icons/icons.svg` as `#icon-arrows` when that sprite is created. The circle/shadow variants are component-level treatments, not sprite symbols.
3. **`--shadow-dropdown`** is used for v8 (0px 10px 10px rgba(0,0,0,0.10)) — close to the Figma spec (0px 12px 12px rgba(0,0,0,0.1)).
