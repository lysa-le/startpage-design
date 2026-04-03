# radio-button — Component Spec

## Overview
A 20×20px radio button in two states (default, active/selected). Used in groups where exactly one option can be selected. Implemented as a native `<input type="radio">` with `appearance: none` so every visual detail is token-driven.

---

## Variants / States

| State | Description | Figma name |
|---|---|---|
| Default | Outer ring only, `--color-stroke-primary` | Default |
| Active (selected) | Blue outer ring + filled inner dot | Active |

---

## Anatomy

```
input[type="radio"].radio-button          ← the control itself
  ::after                                 ← inner dot (CSS, active state only)

label.radio-label                         ← wrapper for accessible labelling
  input[type="radio"].radio-button
  span.radio-label__text
```

Group multiple radio buttons inside a `<fieldset>` with a shared `name` attribute.

---

## Sizes (from Figma SVG)

| Element | Size | Detail |
|---|---|---|
| Outer circle | 20×20px | `r=9.25`, `stroke-width=1.5` |
| Inner dot | 12×12px | 20% inset from each edge (`r=6` filled circle) |

---

## Token Mapping

| Property | Token |
|---|---|
| Default ring stroke | `--color-stroke-primary` |
| Active ring stroke | `--color-stroke-primary-button` |
| Inner dot fill | `--color-button-brandblue` |
| Ring stroke weight | `--border-stroke-md` (1.5px) |

---

## Accessibility

- Native `<input type="radio">` provides `role="radio"` and `aria-checked` automatically.
- Always wrap in a `<label>` or use `aria-label` / `aria-labelledby`.
- Group with shared `name` attribute inside `<fieldset>` + `<legend>`.
- Focus ring uses `:focus-visible` with `--color-stroke-primary-button` outline.

---

## Notes

1. **No custom JS needed** — native radio group semantics handle mutual exclusion.
2. **Inner dot is a CSS `::after`** — not an SVG image. The Figma exported it as a rasterized ellipse; re-derived from its dimensions (12×12, centered, `--color-button-brandblue`).
3. **Outer ring is a CSS `border`** — re-derived from Figma SVG (`r=9.25 stroke-width=1.5` on a 20px circle = effectively a 1.5px full-radius border).
