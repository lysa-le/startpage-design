# Button

**Figma source:** file `UEXWOZNBxxFQOOUrYem17y`
- Components frame: node `2479:2651`
- CTA buttons: node `2494:2147`
- Product buttons: node `1525:2432`
- Hover state examples: node `2558:1045`

---

## 1. Anatomy

### CTA and Product buttons (label only)

```
<button class="btn btn--[color] btn--[size]" data-btn>
  <span class="btn__label">Label text</span>
</button>
```

### Ghost and icon-bearing product buttons

```
<button class="btn btn--ghost" data-btn>
  <span class="btn__label">Label text</span>
  <svg class="btn__icon" width="16" height="16" aria-hidden="true">…</svg>   <!-- optional -->
</button>
```

Disabled / inactive buttons omit `data-btn` and may use a bare text node (no label wrap needed since JS never targets them):

```
<button class="btn btn--inactive btn--sm" disabled>CTA</button>
```

| Layer | Element | Role |
|---|---|---|
| Container | `<button>` | background, padding, border-radius, border (ghost + product-selected only); `position: relative; overflow: hidden; isolation: isolate` |
| Wave fill | `::before` pseudo-element | liquid fill animation layer; sits below label and icon via `z-index: 0` |
| Label | `<span class="btn__label">` | text; `position: relative; z-index: 1` keeps it above the wave |
| Icon | `<svg class="btn__icon">` | optional, 16×16px; gap controlled by `--spacing-8`; `position: relative; z-index: 1` |
| Ripple | `<span class="btn-ripple">` | injected by JS on mousedown; removed after `animationend` |

---

## 2. Component Families

Three distinct families live under the `.btn` base class. They differ in weight, scale, and whether size is orthogonal to color.

| Family | Figma frame | Font weight | Size axis |
|---|---|---|---|
| **CTA** | `buttons` (2494:2147) | bold (700) | orthogonal — combine a color class with a size class |
| **Product** | `product buttons` (1525:2432) | regular (400), except `--product-brand-blue` = bold | self-sizing — padding/radius/font are in the color class; `.btn--xs` shrinks further |
| **Ghost** | `product buttons` (1525:2431) | regular (400) | fixed — single size defined in Figma |

---

## 3. Variants

### 3.1 CTA Color Variants

| CSS class | Background | Text | Hover background |
|---|---|---|---|
| `.btn--teal` | `--color-button-teal` | `--color-text-primary` | `--color-button-tealhover` |
| `.btn--brand-blue` | `--color-button-brandblue` | `--color-text-inverted` | `--color-button-brandbluehover` |
| `.btn--purple` | `--color-button-purple` | `--color-text-inverted` | `--color-button-purplehover` |
| `.btn--inactive` | `--color-button-inactive` | `--color-text-secondary` | _(none — non-interactive)_ |

### 3.2 Product Color Variants

These classes are self-sizing (include padding, radius, font). A `.btn--xs` modifier reduces them.

| CSS class | Background | Text | Border | Hover background | Weight | Animation |
|---|---|---|---|---|---|---|
| `.btn--product-filled` | `--color-button-productfilled` | `--color-text-primary` | _(none)_ | `--color-button-productfilledhover` | regular | flat transition |
| `.btn--product-selected` | transparent | `--color-text-primary` | `--border-stroke-md` solid `--color-stroke-primary-button` | _(none defined in Figma)_ | regular | none |
| `.btn--product-brand-blue` | `--color-button-brandblue` | `--color-text-inverted` | _(none)_ | `--color-button-brandbluehover` | **bold** | flat transition |

### 3.3 Ghost Variant

| CSS class | Background | Text | Border | Hover background | Animation |
|---|---|---|---|---|---|
| `.btn--ghost` | `--color-background-primary` | `--color-text-primary` | `--border-stroke-sm` solid `--color-stroke-primary` | `--color-button-productfilledhover` | flat transition |

---

## 4. Sizes

### 4.1 CTA Sizes

Compose with a color class: `<button class="btn btn--teal btn--md">`.

| CSS class | Padding (v / h) | Border radius | Font size token | Line height token |
|---|---|---|---|---|
| `.btn--sm` | `--spacing-20` / `--spacing-24` | `--radius-xl` | `--font-button-sm` | `--font-button-sm-lh` |
| `.btn--md` | `--spacing-20` / `--spacing-80` | `--radius-xl` | `--font-button-md` | `--font-button-md-lh` |
| `.btn--lg` | `--spacing-32` / see overrides ↓ | see overrides ↓ | `--font-button-lg` | `--font-button-lg-lh` |

**lg overrides — padding and radius vary by color (Figma source of truth):**

| Color | Horizontal padding | Border radius |
|---|---|---|
| `.btn--teal.btn--lg` | `--spacing-40` | `--radius-2xl` |
| `.btn--brand-blue.btn--lg` | `--spacing-48` | `--radius-2xl` |
| `.btn--purple.btn--lg` | `--spacing-48` | `--radius-2xl` |
| `.btn--inactive.btn--lg` | `--spacing-80` | `--radius-xl` |

### 4.2 Product Sizes

| Modifier | Padding (v / h) | Border radius | Font size token | Line height token |
|---|---|---|---|---|
| _(default — no modifier)_ | `--spacing-12` / `--spacing-16` | `--radius-lg` | `--font-button-xs` | `--font-button-xs-lh` |
| `.btn--xs` | `--spacing-8` / `--spacing-12` | `--radius-lg` | `--font-body-xs` | `--font-body-xs-lh` |

### 4.3 Ghost Size

Single size. Icon gap uses `--spacing-8`.

| Padding (v / h) | Border radius | Font size token | Line height token |
|---|---|---|---|
| `--spacing-8` / `--spacing-24`† | `--radius-lg` | `--font-button-xs` | `--font-button-xs-lh` |

†Figma uses 26px — see Notes §2.

---

## 5. States

| State | Selector | Visual change | Token(s) controlling it |
|---|---|---|---|
| **Default** | — | Resting fill, text, border | variant color tokens |
| **Hover** | `:hover` | `::before` wave floods upward to fill button; resting `background-color` stays in place beneath it | `--btn-wave-color` (per variant — resolves to hover token) |
| **Focus** | `:focus-visible` | 2px solid outline in brand-blue; 3px offset | `--border-stroke-lg` + `--color-stroke-primary-button` |
| **Pressed** | `.is-clicking` (JS-managed) | Wave fill accelerates to 0.1s; button scales to `0.985`; ripple expands from click point | `--btn-wave-color` (same as hover); scale via inline style |
| **Inactive** | `.btn--inactive` | Muted fill + secondary text; `pointer-events: none`; no wave | `--color-button-inactive` + `--color-text-secondary` |

No loading state is defined in Figma.

---

## 6. Token Mapping

| Figma variable | CSS custom property | Category in tokens.css |
|---|---|---|
| `color/button/teal` | `--color-button-teal` | Buttons |
| `color/button/teal-hover` | `--color-button-tealhover` | Buttons |
| `color/button/brand-blue` | `--color-button-brandblue` | Buttons |
| `color/button/brand-blue-hover` | `--color-button-brandbluehover` | Buttons |
| `color/button/purple` | `--color-button-purple` | Buttons |
| `color/button/purple-hover` | `--color-button-purplehover` | Buttons |
| `color/button/inactive` | `--color-button-inactive` | Buttons |
| `color/button/product-filled` | `--color-button-productfilled` | Buttons |
| `color/button/product-filled-hover` | `--color-button-productfilledhover` | Buttons |
| `color/text/primary` | `--color-text-primary` | Text |
| `color/text/inverted` | `--color-text-inverted` | Text |
| `color/text/secondary` | `--color-text-secondary` | Text |
| `color/background/primary` | `--color-background-primary` | Backgrounds |
| `color/stroke/primary` | `--color-stroke-primary` | Strokes |
| `color/stroke/primary-button` | `--color-stroke-primary-button` | Strokes |
| `border/stroke/sm` | `--border-stroke-sm` | Stroke / Border |
| `border/stroke/md` | `--border-stroke-md` | Stroke / Border |
| `border/stroke/lg` | `--border-stroke-lg` | Stroke / Border |
| `spacing/8` | `--spacing-8` | Spacing |
| `spacing/12` | `--spacing-12` | Spacing |
| `spacing/16` | `--spacing-16` | Spacing |
| `spacing/20` | `--spacing-20` | Spacing |
| `spacing/24` | `--spacing-24` | Spacing |
| `spacing/32` | `--spacing-32` | Spacing |
| `spacing/40` | `--spacing-40` | Spacing |
| `spacing/48` | `--spacing-48` | Spacing |
| `spacing/80` | `--spacing-80` | Spacing |
| `radius/lg` | `--radius-lg` | Border Radius |
| `radius/xl` | `--radius-xl` | Border Radius |
| `radius/2xl` | `--radius-2xl` | Border Radius |
| `font/button/xs` | `--font-button-xs` | Button |
| `font/button/sm` | `--font-button-sm` | Button |
| `font/button/md` | `--font-button-md` | Button |
| `font/button/lg` | `--font-button-lg` | Button |
| `font/body/xs` | `--font-body-xs` | Body |

---

## 7. Notes

### 1. Product button family was absent from previous spec and HTML

The prior spec only covered CTA buttons (teal, brand-blue, purple, inactive). The product-filled, product-selected, product-brand-blue, ghost, and product-xs variants are all present in the Figma file and have been added to button.html.

### 2. Ghost button horizontal padding is not tokenized in Figma

Figma nodes `1525:2431` (plus large) and `2489:1689` (chevron large) specify `px: 26px` — a value absent from the spacing scale. The nearest token is `--spacing-24` (24px). The 2px delta matches exactly one `--border-stroke-md` (1.5px) width, suggesting the designer may have been padding to a perceived edge that accounts for the border. `--spacing-24` is used in the implementation; flag for designer confirmation.

### 3. lg CTA padding is not uniform across color variants

Teal lg uses `--spacing-40` (40px) horizontal padding; brand-blue lg and purple lg use `--spacing-48` (48px). This means color and size are not fully orthogonal for lg. Both the spec and button.html reproduce this exactly via CSS overrides rather than normalizing it.

### 4. inactive lg uses `--radius-xl` not `--radius-2xl`

All other lg CTA variants use `--radius-2xl` (24px). Inactive lg uses `--radius-xl` (16px), matching the sm/md radius. Additionally, inactive lg horizontal padding (`--spacing-80`) matches the md padding rather than a distinct lg value. Reproduced as-is from Figma.

### 5. product-brand-blue has an untokenized font-size in Figma output

Figma node `2547:569` emits a hardcoded `text-[14px]` rather than `var(--font/button/xs, 14px)`. The pixel value is correct (14px = `--font-button-xs`) but the variable reference is missing in the raw Figma output. The implementation uses `var(--font-button-xs)` as it should.

### 6. Focus state is not defined in Figma

No `:focus` or `:focus-visible` frames exist in the Figma file. The focus ring in button.html is an accessibility addition using existing tokens (`--border-stroke-lg`, `--color-stroke-primary-button`). Confirm with designer before finalising.

### 7. Teal button text fails contrast in dark mode — patched at component level

In dark mode `--color-button-teal` resolves to `#00E7D0` (bright teal) while `--color-text-primary` resolves to `#F2F3FF` (near-white). Measured contrast: **1.43:1** — fails all WCAG levels.

**Applied fix:** `[data-theme="dark"] .btn--teal` overrides text color to `var(--color-text-inverted)` (→ `--color-black-800`, `#1B1D21`), giving **10.72:1**.

This is a component-level patch. The correct long-term fix is a `--color-text-on-teal` token (or equivalent) that resolves to a dark primitive in both light and dark mode. Flagged with designer — pending token update.

---

## 9. Interaction Animation

### Overview

Three layered effects fire together on hover and press:

1. **Liquid fill (wave)** — a `::before` pseudo-element floods upward on `:hover`, replacing the flat background-color transition with a wave-shaped fill.
2. **Accelerated wave on press** — `.is-clicking` shortens the wave transition to 0.1s so the fill snaps in on mousedown.
3. **Ripple** — a `<span class="btn-ripple">` is injected on mousedown, expands from the click point, and removes itself after `animationend`.

### Wave layer anatomy

```css
.btn::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -10%;
  width: 120%;
  height: 200%;
  border-radius: 50% 50% 0 0 / 30px 30px 0 0;   /* wave crown shape */
  transform: translateY(105%);                    /* hidden below fold */
  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
  background: var(--btn-wave-color);
}

.btn:hover::before {
  transform: translateY(0%);
}
```

The wave overshoots the button boundaries (120% wide, 200% tall) so the curved crown is never visible at the clipped edges — only the flat fill is seen once it rises above the button's bottom edge. `overflow: hidden` on `.btn` clips everything outside.

### `--btn-wave-color` per-variant mapping

The wave applies to **CTA variants only**. Product and ghost buttons use a plain `background-color` transition on hover instead (`::before` is `display: none` for those variants).

| Variant class | `--btn-wave-color` value |
|---|---|
| `.btn--teal` | `var(--color-button-tealhover)` |
| `.btn--brand-blue` | `var(--color-button-brandbluehover)` |
| `.btn--purple` | `var(--color-button-purplehover)` |
| `.btn--inactive` / `[disabled]` | `transparent` — wave is invisible, animation suppressed |
| `.btn--product-*` / `.btn--ghost` | `::before { display: none }` — no wave; flat `background-color` hover |

Colors are unchanged: `--btn-wave-color` always resolves to an existing hover token. No new color values are introduced.

### JS hook — `data-btn`

The press interaction (ripple + scale) is driven by JS targeting `[data-btn]`. Rules:

- All interactive buttons carry `data-btn`.
- Disabled buttons (`[disabled]`, `.btn--inactive`) must **not** carry `data-btn` — they are excluded from the listener at the markup level, with a redundant `if (btn.disabled) return` guard in the handler.

### Press sequence

1. `mousedown` → inject `.btn-ripple`, add `.is-clicking`, set `transform: scale(0.985)` inline
2. `mouseup` → remove `.is-clicking`, spring to `scale(1.001)`
3. `transitionend` → clear inline `transform` and `transition`

---

## 8. Accessibility

### Disabled / inactive state

Use the native `disabled` boolean attribute on `<button>` elements — do not rely on CSS alone. Native `disabled` removes the element from tab order, suppresses all pointer and keyboard events, and communicates the state to assistive technology.

```html
<!-- correct -->
<button class="btn btn--inactive btn--sm" disabled>CTA</button>

<!-- incorrect — visually disabled but still reachable by screen reader -->
<button class="btn btn--inactive btn--sm">CTA</button>
```

CSS targets both the class and the attribute so either works defensively:

```css
.btn--inactive,
.btn:disabled { … }
```

### Toggle / selected state (`product-selected`)

When `.btn--product-selected` is used as a toggle (e.g. a selected pagination page or active filter), add `aria-pressed`:

```html
<button class="btn btn--product-selected" aria-pressed="true">5</button>
<button class="btn btn--product-filled" aria-pressed="false">6</button>
```

In a mutually-exclusive group (only one selected at a time), prefer `role="radio"` + `aria-checked` inside a `role="radiogroup"`, or a native `<fieldset>` + radio inputs styled as buttons.

### Icon-bearing buttons

Decorative icons (the arrow in ghost buttons) must have `aria-hidden="true"` so screen readers skip them. The button's text label provides the accessible name.

```html
<button class="btn btn--ghost">
  More news
  <svg class="btn__icon" aria-hidden="true">…</svg>
</button>
```

If a button has **no visible text label** (icon-only), provide an accessible name via `aria-label`:

```html
<button class="btn btn--ghost" aria-label="Next page">
  <svg class="btn__icon" aria-hidden="true">…</svg>
</button>
```

### Element choice

Always use `<button>` for actions and `<a>` for navigation. Never use `<div>` or `<span>` as interactive buttons.
