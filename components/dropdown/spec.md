# Dropdown

**Figma source:** file `UEXWOZNBxxFQOOUrYem17y`
- Dropdown frame: node `2485:1606`
- Default (closed): node `2485:1607`
- Expanded (text-only): node `2485:1605`
- With icon: node `2518:567`
- With search box + icons: node `2537:457`
- Small (closed): node `2547:531`

---

## 1. Anatomy

### HTML structure

```
.dropdown                           ← container (position: relative; handles bg, border, radius, shadow)
  .dropdown__trigger                ← <button> — trigger row, always present
    .dropdown__label                ← trigger text (placeholder or selected value)
    <svg class="dropdown__chevron"> ← 16×16 chevron, rotates 180° when open
  .dropdown__panel                  ← collapsible panel, hidden when closed
    .dropdown__divider              ← 1px separator between trigger and panel
    .dropdown__search               ← [optional] search input row (with-search variant only)
      <input class="dropdown__search-input">
    <ul class="dropdown__list">     ← list of options
      <li class="dropdown__item">  ← repeating option item
        <img class="dropdown__item-icon"> ← [optional] 24×24 circular avatar (icon variants only)
        <span class="dropdown__item-label">
        <svg class="dropdown__item-check"> ← [optional] 16×16 checkmark (text-only selected only)
      </li>
    </ul>
    .dropdown__footer               ← [optional] footer row (text-only variant only)
      <a class="dropdown__footer-link">
```

### Required vs optional elements

| Element | Required | Condition |
|---|---|---|
| `.dropdown__trigger` | yes | always |
| `.dropdown__chevron` | yes | always |
| `.dropdown__panel` | yes | always (hidden when closed) |
| `.dropdown__divider` | yes | always (inside panel) |
| `.dropdown__search` | no | `dropdown--with-search` variant only |
| `.dropdown__list` | yes | always (inside panel) |
| `.dropdown__item-icon` | no | `dropdown--with-icons` variant only |
| `.dropdown__item-check` | no | text-only variant, selected item only |
| `.dropdown__footer` | no | text-only variant only |

---

## 2. Variants

The variant is set by modifier classes on `.dropdown`. Size (`dropdown--small`) is orthogonal to content type.

### 2.1 Content-type variants

| CSS class | Description | Extras |
|---|---|---|
| _(none)_ | Text-only, no icons. Checkmark on selected item. Optional footer link. | `dropdown__item-check`, `dropdown__footer` |
| `.dropdown--with-icons` | Each item has a 24×24 circular icon before the label. No checkmark. No footer. | `dropdown__item-icon` |
| `.dropdown--with-search` | Search input above the item list. Each item has icon. No checkmark. No footer. | `dropdown__search`, `dropdown__item-icon` |

### 2.2 Size modifier

| CSS class | Trigger padding (v / h) | Use |
|---|---|---|
| _(none — default)_ | `--spacing-12` / `--spacing-16` | Standard size |
| `.dropdown--small` | `--spacing-8` / `--spacing-12` | Compact size |

The size modifier affects trigger padding only — item rows, panel, and divider are unchanged.

---

## 3. States

### 3.1 Trigger / container

| State | CSS selector | Visual change | Token(s) |
|---|---|---|---|
| **Closed (default)** | — | Border only, no shadow | `--color-stroke-primary`, `--border-stroke-sm` |
| **Open** | `.dropdown--open` | Drop shadow added | `--shadow-dropdown` |
| **Trigger hover** | `.dropdown__trigger:hover` | Background tint | `--color-background-secondary` |
| **Trigger focus** | `.dropdown__trigger:focus-visible` | 2px solid ring, 3px offset | `--border-stroke-lg`, `--color-stroke-primary-button` |

### 3.2 Menu items

| State | CSS selector | Visual change | Token(s) |
|---|---|---|---|
| **Default** | `.dropdown__item` | No background | — |
| **Hover** | `.dropdown__item:hover` | Pill highlight, regular weight, no checkmark | `--color-background-secondary`, `--radius-lg` |
| **Selected** | `.dropdown__item--selected` | Pill highlight + **semibold** font + checkmark (text-only) | `--color-background-secondary`, `--font-weight-semibold` |
| **Disabled** | — | No disabled state. Unavailable options are not shown. | — |

### 3.3 Highlight pill geometry

The selected/hover highlight is not a full-width background — it's an inset pill:
- Outer item padding collapses to `--spacing-8` on all sides
- Inner highlight fills `calc(100% - 0px)` of the padded inner box
- Height: 36px (8px top + 20px text + 8px bottom)
- Border-radius: `--radius-lg`
- The horizontal inset from the dropdown edge is `--spacing-8` each side

In unselected state the item uses `padding: --spacing-8 --spacing-16` (full-width rows with no background).

---

## 4. Token Mapping

| Figma variable | CSS custom property | Category |
|---|---|---|
| `color/background/primary` | `--color-background-primary` | Backgrounds |
| `color/background/secondary` | `--color-background-secondary` | Backgrounds |
| `color/stroke/primary` | `--color-stroke-primary` | Strokes |
| `color/text/primary` | `--color-text-primary` | Text |
| `color/text/secondary` | `--color-text-secondary` | Text |
| `color/text/link` | `--color-text-link` | Text |
| `border/stroke/sm` | `--border-stroke-sm` | Stroke / Border |
| `border/stroke/lg` | `--border-stroke-lg` | Stroke / Border |
| `spacing/8` | `--spacing-8` | Spacing |
| `spacing/12` | `--spacing-12` | Spacing |
| `spacing/16` | `--spacing-16` | Spacing |
| `radius/lg` | `--radius-lg` | Border Radius |
| `font/body/sm` | `--font-body-sm` | Body |
| `font/body/sm-lh` | `--font-body-sm-lh` | Body |
| `font/weight/regular` | `--font-weight-regular` | Weights |
| `font/weight/semibold` | `--font-weight-semibold` | Weights |

---

## 5. Notes

### 1. Container width is not a token

Figma defines the dropdown container at `w-[248px]`. No width token exists. The component is implemented at 248px. If dropdowns need to be fluid or used at multiple widths, this should become a CSS custom property or a layout concern passed in by the parent.

### 3. Figma uses `spacing/12` as a border-radius on the selected item pill

The selected-item highlight uses `rounded-[var(--spacing/12,12px)]` in the Figma output — a spacing token used as a radius value. `--spacing-12` and `--radius-lg` are both 12px, so the value is correct. The implementation uses `--radius-lg` (the semantically correct token). No visual delta.

### 4. Hover state confirmed

Hover = `--color-background-secondary` pill, regular weight, no checkmark. Selected = same pill + semibold weight + checkmark (text-only variant). The two states share identical background treatment; the checkmark is the sole visual differentiator in the text-only variant.

### 5. No disabled state — unavailable options are hidden

Design decision: there is no disabled option treatment. If an option is unavailable it is omitted from the list entirely.

### 6. Focus state on trigger is not defined in Figma

No focus frame for the trigger. A `:focus-visible` ring using `--border-stroke-lg` + `--color-stroke-primary-button` is included — mirrors the button component pattern. Confirmed by designer.

### 7. Icon element is a circle placeholder for icon or favicon

The 24×24 circle in the "with icon" and "with search + icons" variants represents an icon or favicon — the specific element is defined by each use case. The `dropdown__item-icon` slot accepts any `<img>`, `<svg>`, or styled element at 24×24px with `border-radius: --radius-full`. The demo renders a filled circle using `--color-button-brandblue` as a stand-in.

### 8. Search input padding uses `spacing/12` not `spacing/16`

The search field in "with search + icons" uses `px-[12px]` (= `--spacing-12`) not the standard item horizontal padding of `--spacing-16`. Reproduced as-is from Figma.

### 9. Footer link only defined in text-only expanded variant

The "Optional link" row (using `--color-text-link`) appears in the `expanded` variant only. It is absent from the icon and search variants. The link is preceded by a second divider. Treat as optional and addable to any variant if needed.

---

## 6. Accessibility

### Trigger

Use a `<button>` with `aria-haspopup="listbox"` and `aria-expanded="true|false"`. Never use `<div>`.

### List

Use `role="listbox"` on `<ul>` and `role="option"` on each `<li>`. Set `aria-selected="true"` on the active item.

### Keyboard

- `Enter` / `Space` on trigger: toggle open/close
- `Escape`: close
- `ArrowDown` / `ArrowUp`: navigate items (implement with `tabindex` management or `roving tabindex`)
- `Enter` on item: select and close

### Search input

When present, the search input should receive focus automatically on panel open. Label it with `aria-label="Search options"` (no visible label in design).

### Chevron icon

The chevron SVG must have `aria-hidden="true"`. The trigger's accessible name comes from its text label.
