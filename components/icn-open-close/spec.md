# icn-open-close — Component Spec

## Overview

`icn-open-close` is a stateful toggle icon used in accordion headers, collapsible sections, and expandable panels. Clicking the icon switches between an **open** state (plus/expand) and a **close** state (minus/collapse). It is implemented as a `<button>` with `aria-expanded` so assistive technologies understand the expanded/collapsed state of the associated content.

**Figma file:** `UEXWOZNBxxFQOOUrYem17y`
**Figma nodes:**
- Open state: `2481:2721`
- Close state: `2481:2745`

---

## States

| State | `data-state` | `aria-expanded` | `aria-label` | Icon shown |
|-------|-------------|-----------------|--------------|------------|
| Open  | `"open"`    | `"false"`       | `"Expand"`   | Plus (+)   |
| Close | `"close"`   | `"true"`        | `"Collapse"` | Minus (−)  |

**State naming rationale:** `data-state="open"` means the icon is in its "open/expand available" rest position (content is collapsed, the icon invites expansion). `data-state="close"` means the icon signals "close/collapse" (content is expanded). This mirrors Figma's `property1="open"` and `property1="close"` variant names.

---

## Anatomy

```
.icn-open-close                  ← <button> root (16×16px)
  └── .icn-open-close__svg--plus   ← plus SVG (open state) — 8×8px
  └── .icn-open-close__svg--minus  ← minus SVG (close state) — 8×1.5px
```

Figma layer structure (from `get_design_context`):
- Root frame: 16×16px (`size-[16px]`)
- Inner group: 12×12px, centered (`-translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`)
- Shape: 8×8px inset by 2px on each side
  - Open: plus sign, rendered as two crossing strokes
  - Close: minus sign, rendered as a single horizontal stroke (`h-0`, width 8px)

---

## SVG Paths

### Plus (open state) — viewBox `0 0 8 8`

```svg
<line x1="4" y1="0" x2="4" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
```

### Minus (close state) — viewBox `0 0 8 8`

```svg
<line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
```

---

## Variants

This component has a single visual variant. There is no size variant — it is always 16×16px. The only variation is state (open ↔ close), controlled by `data-state`.

---

## Token Mapping

| Property            | Token                      | Value (light)       | Value (dark)        |
|---------------------|---------------------------|---------------------|---------------------|
| Icon color          | `--color-icon-primary`    | `#1E222D` (black-700) | `#EBECF7` (whisper-200) |
| Background          | none (transparent)        | —                   | —                   |
| Focus ring color    | `--color-stroke-primary-button` | `#5668F1` | `#B3BCFF` |
| Focus ring width    | `--border-stroke-lg`      | `2px`               | `2px`               |

The icon is transparent by default — no background circle. It sits directly on the parent container's background. Color is driven entirely by `--color-icon-primary` via `color: currentColor` inheritance to SVG strokes.

---

## Interaction

### Toggle on click
1. User clicks the button
2. If `data-state="open"`: set `data-state="close"`, `aria-expanded="true"`, `aria-label="Collapse"`
3. If `data-state="close"`: set `data-state="open"`, `aria-expanded="false"`, `aria-label="Expand"`
4. The outgoing icon fades out and scales down (opacity 1→0, scale 1→0.5)
5. The incoming icon fades in and scales up (opacity 0→1, scale 0.5→1)
6. Transition duration: 150ms ease

### Press feedback
- On `mousedown`: button scales to `scale(0.9)` with `80ms ease` transition
- On `mouseup`: button bounces to `scale(1.02)` then settles back to `scale(1)`
- Ripple effect: white semi-transparent circle expands from click point, 400ms

### CSS transition pattern

```css
/* Both SVGs stack absolutely; visibility driven by data-state */
.icn-open-close__svg {
  position: absolute;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

/* Default (open state): plus visible, minus hidden */
.icn-open-close__svg--plus  { opacity: 1; transform: scale(1);   }
.icn-open-close__svg--minus { opacity: 0; transform: scale(0.5); }

/* Close state: minus visible, plus hidden */
.icn-open-close[data-state="close"] .icn-open-close__svg--plus  { opacity: 0; transform: scale(0.5); }
.icn-open-close[data-state="close"] .icn-open-close__svg--minus { opacity: 1; transform: scale(1);   }
```

---

## Accessibility

- Element: `<button>` (not `<div>`) for native keyboard and focus support
- `aria-expanded="false"` in open state / `"true"` in close state
- `aria-label="Expand"` in open state / `"Collapse"` in close state
- `aria-controls="[panel-id]"` should be set by the consuming component to link the button to the content panel it controls
- Focus ring: `outline: 2px solid --color-stroke-primary-button` at `3px` offset
- No `aria-hidden` on the button itself; SVGs within use `aria-hidden="true"` since the button's `aria-label` provides the label

---

## Usage Context

- **Accordion headers**: the icon sits at the trailing edge of a row header. Clicking the row or the icon expands the accordion panel below.
- **Collapsible sidebar sections**: the icon indicates whether a nav section is open or closed.
- **Expandable filter panels**: paired with a label to show/hide filter options.
- **FAQ items**: each question row contains this icon at the right.

### Integration pattern

```html
<button
  class="icn-open-close"
  data-state="open"
  aria-expanded="false"
  aria-label="Expand"
  aria-controls="panel-001"
>
  <!-- SVG icons inlined -->
</button>
<div id="panel-001" hidden>
  <!-- Panel content -->
</div>
```

The consuming component is responsible for toggling `hidden` on the panel element when `aria-expanded` changes.

---

## Dark Mode

Token values swap automatically via `[data-theme="dark"]` on `<html>`. The component CSS references only `--color-icon-primary` and `--color-stroke-primary-button` — no hardcoded values. No component-level dark mode branching is needed.
