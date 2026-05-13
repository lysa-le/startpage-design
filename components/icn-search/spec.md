# icn-search — Component Spec

## Overview

A 16×16px search icon (magnifying glass) with two visual states: **inactive** and **active**. Used in search fields, headers, and navigation to indicate search functionality. The icon color changes based on state, driven entirely by CSS token swaps — no shape or size changes occur between states.

Figma file key: `UEXWOZNBxxFQOOUrYem17y`

---

## Variants

| Variant  | Figma node   | Description                                    |
|----------|--------------|------------------------------------------------|
| inactive | `1515:1222`  | Muted icon; default/resting state              |
| active   | `2481:2701`  | Brand-blue icon; triggered on user interaction |

---

## Anatomy

```
.icn-search                      ← root button / wrapper (16×16px)
  └── svg                        ← inline SVG, 16×16 viewBox
        ├── circle               ← magnifying glass lens (Ellipse 363)
        └── path                 ← handle / stem (Vector 81)
```

### SVG geometry (from Figma asset export)

**Canvas:** 16×16px viewBox (`0 0 16 16`)

**Lens circle (Ellipse 363)**
- Positioned at offset (2, 2) within the 16px canvas
- Inner viewBox: 12.6667×12.6667
- `cx="6.33333" cy="6.33333" r="5.33333"`
- Translated to canvas coords: center at approx (8.33, 8.33), radius ≈ 5.33
- `stroke-width="2"`, `fill="none"`

**Handle path (Vector 81)**
- Positioned at offset (10.67, 10.67) within the 16px canvas
- `M1 1 L5.33333 5.33333` in local coords → diagonal line bottom-right
- `stroke-width="2"`, `stroke-linecap="round"`, `fill="none"`

Combined as a single SVG (`viewBox="0 0 16 16"`):
```svg
<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Lens -->
  <circle cx="7" cy="7" r="4.333" stroke="currentColor" stroke-width="2"/>
  <!-- Handle -->
  <path d="M11 11L14.333 14.333" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
```

> Note: Figma exports the two sub-nodes in separate viewBoxes. The values above are recalculated into a single unified 16×16 canvas using the layout offsets from the Figma output (`circle` at offset 2,2 within 8.667px space; `handle` at offset 10.67,10.67 within 4.333px space).

---

## Sizes

Only one size is used in the current design system: **16×16px**. The Figma component set does not expose a size variant property for this icon; size is controlled by the consuming component's CSS.

---

## States

| State    | CSS token used           | Primitive resolves to    | Visual           |
|----------|--------------------------|--------------------------|------------------|
| inactive | `--color-icon-tertiary`  | `#7F869E` (light mode)   | Muted grey       |
|          |                          | `--color-midnight-200` (dark mode) | Muted    |
| active   | `--color-icon-secondary` | `#5668F1` (light mode)   | Brand blue       |
|          |                          | `#B3BCFF` (dark mode)    | Light brand blue |

State is set via `data-state="inactive"` / `data-state="active"` on the root element. CSS switches the `color` property, which SVG `stroke="currentColor"` inherits.

---

## Token Mapping

| Property      | Token                    | Notes                                         |
|---------------|--------------------------|-----------------------------------------------|
| Icon color    | `--color-icon-tertiary`  | Inactive state stroke color                   |
| Icon color    | `--color-icon-secondary` | Active state stroke color                     |
| Icon size     | `--icn-search-size`      | Component variable, defaults to 16px          |
| Stroke width  | `--border-stroke-lg`     | 2px — maps to Figma stroke-width="2"          |
| Focus ring    | `--color-stroke-primary-button` | Accessibility addition, not from Figma  |

---

## Interaction

- **Clickable variant** (interactive): The icon is wrapped in a `<button>`. Clicking toggles between `data-state="inactive"` and `data-state="active"`.
- **Embedded variant** (non-interactive): When embedded in a search field, the parent component controls the state externally (e.g. the search field adds `.has-value` and the icon receives `data-state="active"` via JS).
- No animation/transition between states (instant color change). If a transition is desired, add `transition: color 150ms ease` to `.icn-search`.
- Press feedback: `transform: scale(0.9)` on `:active` (same pattern as `icn-copy`).

---

## Accessibility

- When used as a standalone interactive element: `<button role="button" aria-label="Search">` wrapping the SVG.
- SVG has `aria-hidden="true"` — the accessible label lives on the `<button>`.
- When embedded in a search field, the icon is decorative only (`aria-hidden="true"`, no button wrapper).
- Focus ring: `outline: var(--border-stroke-lg) solid var(--color-stroke-primary-button)` with `outline-offset: 4px`.

---

## Figma Cross-References

- Figma component set: **icn-search** on the Icons page, Navigation & Controls category
- Variants in Figma: `Property 1=inactive` (node `1515:1222`), `Property 1=active` (node `2481:2701`)
- Used inside: `components/search-field/`, `components/header/`
- Sprite entry: `assets/icons/icons.svg#icon-search` — the inactive (neutral) path is used for the static sprite; the active color is applied via `currentColor` in consuming components

---

## Notes

- The icon is drawn with `stroke="currentColor"` and `fill="none"`. It never uses a fill color.
- Inactive state uses `--color-icon-tertiary` (`--color-midnight-300`, `#7F869E` in light mode) — confirmed match to Figma's inactive stroke color.
- Active in Figma uses `#5668F1` (`--color-brand-blue-400`) which resolves to `--color-icon-secondary` in light mode — exact match.
