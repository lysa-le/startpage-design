# icn-check — Component Spec

## Overview

`icn-check` is a static standalone checkmark icon with two size variants: **large** and **small**. It is a pure display element — no interaction states, no JS, no ripple. Color is inherited from its container via `currentColor`, making it trivially composable inside any parent element that sets a `color`.

This component is **distinct from the check confirmation state inside `components/icn-copy/`**. That check mark is embedded within the icn-copy interactive button and is used only as a transient feedback signal after a copy action. `icn-check` is a standalone glyph for use anywhere a static checkmark is needed (e.g. feature lists, form validation indicators, success states).

---

## Figma Source

- File key: `UEXWOZNBxxFQOOUrYem17y`
- Component set: `icn-check` (Icons page — Feedback category)
- Large variant node: `1524:1095`
- Small variant node: `2483:1347`

---

## Sizes

| Variant | Container | SVG viewBox       | Stroke path geometry                                 | Stroke width |
|---------|-----------|-------------------|------------------------------------------------------|--------------|
| Large   | 16×16 px  | `0 0 13.5 10.8306`| `M0.750002 5.81251 L4.95 9.75001 L12.75 0.750012`   | 1.5px        |
| Small   | 12×12 px  | `0 0 10.5 8.58056`| `M0.750002 4.54689 L3.9 7.50001 L9.75 0.750012`     | 1.5px        |

Notes:
- Both variants are rendered with `stroke="currentColor"`, `fill="none"`, `stroke-linecap="round"`.
- The Figma frame for both variants is 16×16 px. The small variant uses a proportionally smaller path (75% of the large geometry) inside the same bounding frame. For the demo, the small variant is rendered in a 12×12 px container to visually distinguish the two.
- `stroke-width` is a fixed 1.5px from Figma — it is a Figma stroke weight, not a spacing token. It is expressed as `var(--border-stroke-md)` (1.5px) to stay token-driven.

---

## Anatomy

```
.icn-check                     ← container div/span, sets width/height and color
  └── <svg>                    ← inline SVG, stroke="currentColor", no fill
        └── <path>             ← single checkmark stroke path
```

There is no background, no border, no padding — the icon is purely the SVG stroke.

---

## Variants

| Class              | Container size | Notes                             |
|--------------------|----------------|-----------------------------------|
| `.icn-check--lg`   | 16×16 px       | Default, maps to Figma large      |
| `.icn-check--sm`   | 12×12 px       | Reduced container for small glyph |

---

## Token Mapping

| Property        | Token used               | Resolves to (light)     | Resolves to (dark)      |
|-----------------|--------------------------|-------------------------|-------------------------|
| Icon color      | `--color-icon-secondary` | `#5668F1` (brand-blue-400) | `#B3BCFF` (brand-blue-200) |
| Stroke weight   | `--border-stroke-md`     | 1.5px                   | 1.5px                   |

The color token is set as `color` on the `.icn-check` container. The SVG uses `stroke="currentColor"` to inherit it. No hardcoded hex values anywhere in component CSS.

---

## SVG Paths

### Large (`1524:1095`)

```svg
<svg viewBox="0 0 13.5 10.8306" fill="none"
     xmlns="http://www.w3.org/2000/svg"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <path d="M0.750002 5.81251L4.95 9.75001L12.75 0.750012"/>
</svg>
```

### Small (`2483:1347`)

```svg
<svg viewBox="0 0 10.5 8.58056" fill="none"
     xmlns="http://www.w3.org/2000/svg"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
  <path d="M0.750002 4.54689L3.9 7.50001L9.75 0.750012"/>
</svg>
```

---

## Usage Notes

### When to use `icn-check` vs the check state in `icn-copy`

- Use **`icn-check`** anywhere a static, standalone checkmark is needed — success messages, feature lists, completed-step indicators, validation feedback, etc.
- Use the **check state in `icn-copy`** only as the confirmation feedback after a copy interaction. It is not a standalone icon; it lives inside the copy button's state machine with a 1500ms auto-revert.

### Colorability

Set `color` on the `.icn-check` wrapper to change the icon color. Use semantic tokens only:

```css
/* Brand blue (default) */
color: var(--color-icon-secondary);

/* Teal success */
color: var(--color-accent-teal);

/* Error/warning */
color: var(--color-text-error);
```

### Accessibility

`icn-check` is purely decorative in most contexts. Apply `aria-hidden="true"` to the SVG by default. If the icon is the sole indicator of a state change (e.g. task complete), wrap it with a visually hidden `<span>` for screen readers:

```html
<span class="icn-check icn-check--lg" aria-label="Completed">
  <svg aria-hidden="true" ...>...</svg>
</span>
```
