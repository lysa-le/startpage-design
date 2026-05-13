# icn-close

**Figma source:** file `UEXWOZNBxxFQOOUrYem17y`
- `default-grey` variant: node `1515:1201`
- `secondary` variant: node `2566:2175`

---

## 1. Overview

`icn-close` is a two-state interactive icon button used to dismiss, clear, or cancel. It is not a static illustration — it carries click semantics, ARIA role, and a visible state transition. The icon itself is an X shape (two diagonal strokes crossing at centre).

Both states share the same SVG geometry. State is communicated through the `color` CSS property, which propagates to the SVG via `stroke="currentColor"`.

---

## 2. Anatomy

```
<button class="icn-close" data-state="default|secondary" aria-label="Close">
  <svg class="icn-close__svg" …>
    <line … />   ← diagonal stroke: top-left → bottom-right
    <line … />   ← diagonal stroke: top-right → bottom-left
  </svg>
</button>
```

The button element is the interactive root. The SVG is purely decorative (`aria-hidden="true"`); the accessible name comes from `aria-label` on the button.

---

## 3. Variants

| Figma variant    | `data-state`  | Color token            | Description                             |
|------------------|---------------|------------------------|-----------------------------------------|
| `default-grey`   | `"default"`   | `--color-icon-primary` | Resting state — muted, neutral grey     |
| `secondary`      | `"secondary"` | `--color-icon-secondary` | Active / hover / focused state — brand blue |

There is one size only in these nodes: **16×16px** container, **10×10px** X icon (centred, as per Figma's `size-[10px]` inner frame with `inset-[-7.5%]` overflow — meaning the drawn X spans ~10.75px to account for stroke overhang).

---

## 4. States

| State       | `data-state`  | Visual                            | Trigger                      |
|-------------|---------------|-----------------------------------|------------------------------|
| Default     | `"default"`   | Grey X icon (`--color-icon-primary`)    | Initial / resting            |
| Secondary   | `"secondary"` | Brand-blue X icon (`--color-icon-secondary`) | Hover, focus, or click       |
| Focus       | `:focus-visible` | 2px solid ring, 3px offset     | Keyboard navigation          |

---

## 5. SVG Paths

**Container:** 16×16px  
**Icon frame:** 10×10px, centred within container  
**viewBox:** `0 0 10 10`  
**Stroke:** `currentColor`, `stroke-width="1.5"`, `stroke-linecap="round"`, `fill="none"`

The X is drawn as two line segments from corner to corner:

```svg
<!-- Top-left → Bottom-right -->
<line x1="1" y1="1" x2="9" y2="9" />
<!-- Top-right → Bottom-left -->
<line x1="9" y1="1" x2="1" y2="9" />
```

These lines produce an X centred at (5, 5) with 1px inset from each edge, giving the icon visual breathing room against the stroke weight of 1.5px.

---

## 6. Sizes

| Figma node | Container | Icon frame | viewBox   |
|------------|-----------|------------|-----------|
| `1515:1201` / `2566:2175` | 16×16px | 10×10px | `0 0 10 10` |

Only one size is defined in the Figma source. If larger sizes are needed in future, the inset ratio (62.5% of container = icon frame) should be maintained.

---

## 7. Token Mapping

| Property              | Token                          | Light value              | Dark value               |
|-----------------------|--------------------------------|--------------------------|--------------------------|
| Icon color (default)  | `--color-icon-primary`         | `#1E222D` (black-700)    | `#EBECF7` (whisper-200)  |
| Icon color (secondary)| `--color-icon-secondary`       | `#5668F1` (brand-blue-400) | `#B3BCFF` (brand-blue-200) |
| Container bg          | `transparent`                  | —                        | —                        |
| Focus ring            | `--border-stroke-lg` + `--color-stroke-primary-button` | — | — |
| Transition            | `color 0.15s ease`             | —                        | —                        |

The button has no background by default — it is a bare icon. If a circle background is needed (e.g. inside a tag or search field), that background is provided by the parent component, not by `icn-close` itself.

---

## 8. Interaction

### Click behaviour (demo)
Clicking the `default` state icon switches it to `secondary`. This mirrors the hover/active pattern — the secondary state is the activated appearance.

In production use, clicking the close button would dismiss the parent element (tag, modal, search field, etc.). The state machine is intentionally simple:
- `default` → click → `secondary` (and trigger dismissal)
- No auto-revert (unlike `icn-copy` which reverts after 1500ms)

### Hover behaviour
`:hover` on a `[data-state="default"]` button transitions the icon to brand-blue. This is achieved by setting `color: var(--color-icon-secondary)` on hover.

### Press / ripple
Press scales the button down slightly (`scale(0.90)`) and a ripple emanates from the click point, matching the press interaction pattern from other icon buttons in the system.

---

## 9. Accessibility

- `<button>` element is natively keyboard-operable (Enter / Space)
- `aria-label="Close"` provides the accessible name
- `aria-label` should be updated to reflect context in production (e.g. `"Remove tag"`, `"Clear search"`, `"Dismiss"`)
- SVG carries `aria-hidden="true"` — accessible name comes from `aria-label` only
- Focus ring: `outline: var(--border-stroke-lg) solid var(--color-stroke-primary-button); outline-offset: 3px`

---

## 10. Notes

### 1. No background circle on this component
The Figma nodes show a bare 16×16px frame with no filled background. If a circular close button (e.g. with `--color-background-secondary` fill) is needed, it should be a separate variant or a parent-applied style — not baked into `icn-close` itself.

### 2. Relation to the icon sprite
`icn-close` is a **stateful component** (interactive, two states, ARIA semantics, JS behaviour) and therefore lives in `components/icn-close/`, not the static sprite at `assets/icons/icons.svg`. If a purely decorative static close X is ever needed without interactivity, it can be added to the sprite as `#icon-close`.

### 3. Secondary state is not an error or warning state
The blue secondary state is consistent with the system-wide pattern for active/focused icon colour. It is not a special dismiss-confirmation — it is simply the activated/hover appearance.
