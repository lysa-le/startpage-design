# Pagination

**Figma source:** file `UEXWOZNBxxFQOOUrYem17y`
- Pagination frame: node `161:684`
- Product buttons (Prev/Next): node `2520:949`

---

## 1. Anatomy

```
<nav class="pagination" aria-label="Pagination">
  <button class="pagination__nav">Prev</button>          <!-- optional -->
  <button class="pagination__page">1</button>
  <span   class="pagination__ellipsis" aria-hidden="true">…</span>  <!-- conditional -->
  <button class="pagination__page" aria-current="page">6</button>
  <button class="pagination__nav">Next</button>
</nav>
```

| Layer | Element | Role |
|---|---|---|
| Container | `<nav class="pagination">` | flex row, `--spacing-12` gap |
| Nav button | `<button class="pagination__nav">` | Prev / Next; styled identically to `btn--product-filled` |
| Page button | `<button class="pagination__page">` | 34×34px circle; default or selected state |
| Ellipsis | `<span class="pagination__ellipsis">` | `…` gap indicator; non-interactive |

---

## 2. Variants

Four variants defined in Figma. They differ only in which page is active and whether Prev is present — the component elements are the same.

| Figma variant | Prev | Pages shown | Active | Next |
|---|---|---|---|---|
| `desktop default` | — | 1 2 3 4 | 1 | ✓ |
| `Variant2` | ✓ | 1 2 3 4 | 2 | ✓ |
| `Variant3` | ✓ | 1 … 5 6 7 | 6 | ✓ |
| `Variant4` | ✓ | 1 … 5 | 5 | ✓ |

Ellipsis appears in Variant3 and Variant4 when the active range is not adjacent to page 1.

---

## 3. Page Button States

| State | Selector | Background | Border | Text | Weight |
|---|---|---|---|---|---|
| **Default** | `.pagination__page` | transparent | `--border-stroke-sm` solid `--color-stroke-primary` | `--color-text-primary` | regular |
| **Hover** | `.pagination__page:hover` | `--color-button-productfilled` | `--color-button-productfilled` (flush) | — | — |
| **Selected** | `[aria-current="page"]` | `--color-button-brandblue` | `--color-button-brandblue` (flush) | `--color-text-inverted` | semibold |
| **Focus** | `:focus-visible` | — | 2px solid `--color-stroke-primary-button`, 3px offset | — | — |

---

## 4. Prev / Next Button

Matches `btn--product-filled` from the button component exactly. No new CSS class is needed if the button component's styles are available; `.pagination__nav` is defined locally in `pagination.html` to keep the component self-contained.

| Property | Token |
|---|---|
| Background | `--color-button-productfilled` |
| Hover background | `--color-button-productfilledhover` |
| Text | `--color-text-primary` |
| Padding | `--spacing-12` / `--spacing-16` |
| Border radius | `--radius-lg` |
| Font size | `--font-button-xs` |
| Line height | `--font-button-xs-lh` |
| Font weight | regular |

---

## 5. Ellipsis

| Property | Value |
|---|---|
| Container size | `--pagination-btn-size` × `--pagination-btn-size` (same as page button, for alignment) |
| Text | `…` (`&hellip;`) |
| Color | `--color-text-link` |
| Font size | `--font-body-sm` |
| Interactive | No — `aria-hidden="true"` on the `<span>` |

---

## 6. Token Mapping

| Property | Token |
|---|---|
| Container gap | `--spacing-12` |
| Page button padding | `--spacing-12` (all sides) |
| Page button size | 34px — derived: `--spacing-12` + `--font-button-xs-lh` cap-height (10px) + `--spacing-12` |
| Page button border radius | `--radius-full` |
| Page button border width | `--border-stroke-sm` |
| Default border color | `--color-stroke-primary` |
| Default text | `--color-text-primary` |
| Hover / flush border + fill | `--color-button-productfilled` |
| Selected fill | `--color-button-brandblue` |
| Selected text | `--color-text-inverted` |
| Ellipsis padding | `--spacing-12` (all sides) + `aspect-ratio: 1` — matches page button width |
| Ellipsis color | `--color-text-link` |
| Nav button fill | `--color-button-productfilled` |
| Nav button hover fill | `--color-button-productfilledhover` |
| Nav button text | `--color-text-primary` |
| Focus outline | `--border-stroke-lg` + `--color-stroke-primary-button` |

---

## 7. Accessibility

### Active page

Use `aria-current="page"` on the active page button — not a class alone. This communicates the current page to screen readers.

```html
<button class="pagination__page" aria-current="page" aria-label="Page 6">6</button>
```

### Page button labels

Bare numbers are not self-describing. Add `aria-label="Page N"` to each page button so screen readers announce "Page 6" instead of just "6".

### Ellipsis

The ellipsis is presentational — wrap it in a `<span>` with `aria-hidden="true"` so screen readers skip it. If needed for screen-reader users, a visually-hidden description can be added (e.g. "… more pages").

### Container

Wrap the entire pagination in `<nav aria-label="Pagination">` so it is a landmark region.

---

## 8. Notes

### 1. Figma uses image assets for page button backgrounds

The Figma export renders the page button circle as a raster image rather than CSS. This is an artifact of how the component was built in Figma (likely a component with a background fill baked in). The HTML implementation builds the circle entirely in CSS using `border-radius: var(--radius-full)` and token-driven colors — no images needed.

### 3. Ellipsis color resolves to brand-blue-600 in light mode

Figma specifies `#2E39B3` for the ellipsis, described as "brand-blue/600 - link". In the token system this maps to `--color-text-link` (→ `--color-brand-blue-600` in light, `--color-brand-blue-200` in dark). This is the correct semantic token for interactive/link-style text.
