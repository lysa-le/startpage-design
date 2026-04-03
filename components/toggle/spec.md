# Toggle

**Figma source:** file `UEXWOZNBxxFQOOUrYem17y`
- Toggle frame: node `46:843`

---

## 1. Anatomy

```
<button class="toggle" role="switch" aria-checked="true|false" aria-label="...">
  <span class="toggle__thumb"></span>
</button>
```

| Layer | Element | Role |
|---|---|---|
| Track | `<button>` | pill-shaped background; colour signals on/off state |
| Thumb | `<span class="toggle__thumb">` | white circle that slides left/right |

---

## 2. Variants

Two states defined in Figma — `toggle on` and `toggle off`. No size variants.

| Figma variant | `aria-checked` | Track colour | Thumb position |
|---|---|---|---|
| `toggle on` | `"true"` | `--color-icon-secondary` | right (translateX = `--toggle-travel`) |
| `toggle off` | `"false"` | `--color-stroke-primary` | left (translateX = 0) |

---

## 3. States

| State | Selector | Visual change | Token(s) |
|---|---|---|---|
| **Off** | `[aria-checked="false"]` | Muted track | `--color-stroke-primary` |
| **On** | `[aria-checked="true"]` | Brand-blue track | `--color-icon-secondary` |
| **Focus** | `:focus-visible` | 2px solid ring, 3px offset | `--border-stroke-lg` + `--color-stroke-primary-button` |

---

## 4. Geometry

All dimensions are defined as component-level custom properties on `.toggle`. Only `--toggle-thumb-gap` uses a raw pixel value — see Notes §1.

| Custom property | Value | Resolves to |
|---|---|---|
| `--toggle-width` | `var(--spacing-40)` | 40px |
| `--toggle-height` | `var(--spacing-24)` | 24px |
| `--toggle-thumb-gap` | `3px` | 3px — outside spacing scale, see Notes §1 |
| `--toggle-thumb-size` | `calc(var(--toggle-height) - var(--toggle-thumb-gap) * 2)` | 18px |
| `--toggle-travel` | `calc(var(--toggle-width) - var(--toggle-height))` | 16px |

The thumb travel formula works because: travel = width − height = 40 − 24 = 16px, which equals width − thumb_size − 2×gap = 40 − 18 − 6 = 16px.

---

## 5. Token Mapping

| Property | Token |
|---|---|
| Track off | `--color-stroke-primary` |
| Track on | `--color-icon-secondary` |
| Thumb background | `--color-toggle-thumb` → `--color-background-primary` (white in light, near-black in dark) |
| Thumb shadow | `--shadow-card` |
| Track border radius | `--radius-full` |
| Thumb border radius | `--radius-full` |
| Track transition | `background-color 0.2s ease` |
| Thumb transition | `transform 0.2s ease` |
| Focus outline | `--border-stroke-lg` + `--color-stroke-primary-button` |

---

## 6. Interaction

State is toggled by clicking the `<button>`. JavaScript flips `aria-checked` between `"true"` and `"false"`. CSS handles all visual changes via the `[aria-checked]` attribute selector — no JS class manipulation needed.

---

## 7. Accessibility

- Use `role="switch"` on the `<button>` — this is the correct ARIA role for a binary on/off control.
- Always provide an accessible name via `aria-label` (standalone) or a visible `<label>` (labeled variant).
- For labeled toggles, clicking the label text should activate the toggle. Since `<button>` is not a labelable element, wire the label with an `onclick` that calls `.click()` on the button, or wrap both in a `<div role="group">`.
- The native `<button>` is keyboard-operable (Space/Enter) without extra JS.

---

## 8. Notes

### 1. Thumb gap (3px) is outside the spacing scale

The spacing scale jumps from `--spacing-4` (4px) directly — 3px has no token. A component-level `--toggle-thumb-gap: 3px` custom property is used and documented here. Consider asking the designer to adjust to 4px to bring it into the scale, or add a `--spacing-3` token.
