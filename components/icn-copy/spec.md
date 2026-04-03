# icn-copy / icn-check

**Figma source:** file `UEXWOZNBxxFQOOUrYem17y`
- Component frame: node `147:337`

---

## 1. Anatomy

```
<button class="icn-copy icn-copy--{size}" data-state="copy|check" aria-label="Copy|Copied">
  <svg class="icn-copy__svg icn-copy__svg--copy" …>   ← copy icon, visible in copy state
  <svg class="icn-copy__svg icn-copy__svg--check" …>  ← check icon, visible in check state
</button>
```

`icn-check` is not a separate component — it is the confirmation state of `icn-copy`. Both icons live inside the same button element; CSS handles which is visible via `data-state`.

---

## 2. Variants

| Figma variant | CSS class | Container size | Icon size |
|---|---|---|---|
| `copy-lg` | `.icn-copy--lg` | `--spacing-32` (32px) | 12px |
| `copy-sm` | `.icn-copy--sm` | `--spacing-24` (24px) | 9px |
| `copy-bare` | `.icn-copy--bare` | `--spacing-16` (16px) | 12px |

Icon sizes are derived from Figma's 31.25% inset on each side:
- 32px × (1 − 2×0.3125) = **12px** large
- 24px × (1 − 2×0.3125) = **9px** small
- 16px × (1 − 2×0.125)  = **12px** bare (different inset ratio — see Notes §1)

---

## 3. States

| State | `data-state` | Visual | Token(s) |
|---|---|---|---|
| **Copy (default)** | `"copy"` | Muted circle bg, copy icon visible | `--color-background-secondary`, `--color-icon-primary` |
| **Check (confirmed)** | `"check"` | Brand-blue circle bg, check icon visible | `--color-icon-secondary`, `--color-text-inverted` |
| **Bare** | n/a | No circle, transparent bg, icon only | `transparent`, `--color-icon-primary` |
| **Focus** | `:focus-visible` | 2px solid ring, 3px offset | `--border-stroke-lg` + `--color-stroke-primary-button` |

The bare variant (`icn-copy--bare`) has no circle and never gets the check-state circle fill — the background stays `transparent` in both copy and check states.

---

## 4. Icon Transitions

Both SVGs are always present in the DOM. State is driven by `data-state` on the button.

```css
/* Default: copy visible, check hidden */
.icn-copy__svg--copy  { opacity: 1; transform: scale(1);   }
.icn-copy__svg--check { opacity: 0; transform: scale(0.5); }

/* Check state: copy hidden, check visible */
.icn-copy[data-state="check"] .icn-copy__svg--copy  { opacity: 0; transform: scale(0.5); }
.icn-copy[data-state="check"] .icn-copy__svg--check { opacity: 1; transform: scale(1);   }
```

Transition: `opacity 0.15s ease, transform 0.15s ease` — fast, snappy feel.

---

## 5. Token Mapping

| Property | Token |
|---|---|
| Container bg (copy state) | `--color-background-secondary` |
| Container bg (check state) | `--color-icon-secondary` |
| Container bg (bare) | `transparent` |
| Icon color | `currentColor` (inherits from button `color`) |
| Button text color (copy state) | `--color-icon-primary` |
| Button text color (check state) | `--color-text-inverted` |
| Container border-radius | `--radius-full` |
| Transition | `background-color 0.2s ease, color 0.2s ease` |
| Focus outline | `--border-stroke-lg` + `--color-stroke-primary-button` |

---

## 6. SVG Paths

### Copy icon — `viewBox="0 0 14 14"`

```svg
<rect x="4.5" y="0.75" width="8.75" height="8.75" rx="1.25"/>
<path d="M4.5 4.5H2C1.31 4.5 0.75 5.06 0.75 5.75V12C0.75 12.69 1.31 13.25 2 13.25H8.25C8.94 13.25 9.5 12.69 9.5 12V9.5"/>
```

stroke: `currentColor`, `stroke-width="1.5"`, `stroke-linecap="round"`, `stroke-linejoin="round"`, `fill="none"`

### Check icon — `viewBox="0 0 12 9"`

```svg
<path d="M1 4L4.5 7.5L11 1"/>
```

stroke: `currentColor`, `stroke-width="1.5"`, `stroke-linecap="round"`, `stroke-linejoin="round"`, `fill="none"`

---

## 7. Interaction

1. Click fires when `data-state === "copy"`; ignored if already `"check"`
2. Sets `data-state="check"` and `aria-label="Copied"`
3. After 1500ms, reverts to `data-state="copy"` and `aria-label="Copy"`
4. Timer is cleared on each new click to prevent overlapping revert calls

---

## 8. Accessibility

- The button element is natively keyboard-operable (Enter / Space)
- `aria-label` updates with state: `"Copy"` → `"Copied"` → `"Copy"`
- Both SVGs carry `aria-hidden="true"` — the accessible name comes from `aria-label` only

---

## 9. Notes

### 1. Bare variant uses a different inset ratio

The bare (16px) variant uses a 12.5% inset per side rather than the 31.25% used by the circled variants. This keeps the icon at 12px — same absolute size as the large variant — so it reads as a standard icon, not a tiny dot.

### 2. Check circle fill does not apply to bare variant

The CSS selector `.icn-copy[data-state="check"]:not(.icn-copy--bare)` ensures the brand-blue fill is only applied to the lg and sm variants. The bare variant's background stays transparent in all states.
