# Startpage Design System — Handover

## 1. What We're Building

A **component library** for a startpage product, where every component is built strictly from a token-based design system. The goal is 1-to-1 parity between Figma designs and code so that vibe coding from Figma specs and updating Figma from code changes are both lossless.

The folder will contain:
- A single token layer (`tokens.css`) that maps every design system token to a CSS custom property
- One folder per component, each containing a `spec.md` (anatomy, variants, states, token mapping — mirrors the Figma component structure) and a rendered `component.html`
- `design-system.md` as the source of truth for all tokens

**Target folder structure:**
```
startpage-design/
├── design-system.md          ← token source of truth (exists)
├── tokens.css                ← CSS custom properties (to be created)
├── CLAUDE.md                 ← this file
├── components/
│   ├── button/
│   │   ├── spec.md
│   │   └── button.html
│   ├── dropdown/
│   │   ├── spec.md
│   │   └── dropdown.html
│   ├── carousel/
│   │   ├── spec.md
│   │   └── carousel.html
│   └── ...
```

---

## 2. Decisions Locked In

**Tokens only — no hardcoded values.**
Every color, spacing value, font size, border radius, and stroke weight in component CSS must reference a CSS custom property from the token set. No raw hex codes, pixel values, or font sizes written directly. This was enforced strictly and caught at least one violation (the dropdown select element).

**Semantic tokens, not primitives.**
`design-system.md` defines color primitives (e.g. `color-brand-blue-400`) and semantic tokens (e.g. `color-text-link`). Components must use semantic tokens only. Primitives are for the token layer alone.

**Dark mode via `[data-theme="dark"]` on `<html>`, toggled by a fixed button — not `@media prefers-color-scheme`.**
Token values swap inside a `[data-theme="dark"]` CSS block (not a media query) so the toggle button can control the theme independently of the OS setting. Component CSS never branches on theme — it only references tokens.

**Every component `.html` demo file must include the dark theme switcher.** Do not build a component HTML without it — the user must not need to ask for this separately. Required elements:
1. `data-theme="light"` on `<html>`
2. A `[data-theme="dark"]` CSS block at the top of `<style>` with all semantic token overrides (background, text, icon, stroke, button-inactive tokens)
3. A `.theme-toggle` fixed button (top-right, `position: fixed`, `z-index: 100`) with a sun/moon icon + "Light"/"Dark" label
4. Theme toggle JS with `localStorage` persistence — reads saved theme on load, writes on click, calls `applyTheme()` which sets `html.dataset.theme` and updates the icon/label text

**Component spec files mirror Figma component structure.**
`spec.md` documents anatomy, variants, states, and token mapping in a format that mirrors how the component is built in Figma (frames = elements, Figma variants = CSS classes or data attributes). This is what makes AI-assisted coding 1-to-1 with Figma — the spec is read before building.

**Any design change or modification applies to both `component.html` and `spec.md` simultaneously.**
When a token value, color, state, variant, or behaviour is changed in the HTML, the corresponding entry in `spec.md` must be updated in the same response — never one without the other. This keeps the spec the authoritative source of truth and prevents drift between documentation and implementation.

**Font: Inter.**
Loaded from Google Fonts. Weights used: 400, 500, 600, 700 (regular, medium, semibold, bold).

**No native `<select>` elements.**
The modal dialog had a `<select>` styled with `.form-input` — it looked off because browsers override native select rendering in ways tokens can't fully control. Going forward, dropdowns must be custom-built (button + positioned list) so every visual detail is token-driven.

---

## 3. Critical Context a New Chat Would Miss

**The design-system.md is not a component spec — it is only a token reference.**
It defines typography scale, spacing scale, border radius, stroke weights, color primitives, and semantic colors (light + dark). It does NOT define component anatomy, spacing patterns within components, or interaction states. Any component decisions not derivable from tokens must come from a `spec.md`.

**The Figma file is here:**
`https://www.figma.com/design/UEXWOZNBxxFQOOUrYem17y/Startpage-Design-System?node-id=0-1`

The user has designed buttons, dropdowns, carousels, and other components in this file. The Figma variables match the token names in `design-system.md`.

**Figma MCP is configured but requires a fresh session to surface tools.**
`claude mcp list` shows `claude.ai Figma: https://mcp.figma.com/mcp - ✓ Connected` after authentication. However, Figma MCP tools (e.g. `get_file`, `get_node`) did not appear in tool search mid-session — they need to be available from session start. In a fresh session, try calling a Figma tool directly before assuming it's unavailable.

---

## 4. Current State

**Done:**
- `tokens.css` — full token layer (typography, spacing, radius, stroke, color, shadows)
- `components/button/` — all CTA, product, ghost variants; liquid fill hover animation (CTA only); press + ripple interaction; dark mode
- `components/dropdown/` — all variants including search + icons; open/close interaction
- `components/pagination/` — all 4 Figma variants; interactive active-page selection; press + ripple
- `components/toggle/` — on/off states; labeled variant; `role="switch"` + `aria-checked`
- `components/icn-copy/` — 5 variants (lg/sm/bare × copy/check); Figma SVG paths; CSS opacity+scale transition; press + ripple; 1500ms auto-revert
- `components/search-field/` — homepage + SERP × desktop + mobile × 3 states; `--shadow-search` token added; clear+divider visibility driven by `.has-value` JS class; SERP always-visible clear override
- `components/header/` — desktop 1440px (2-row) + mobile default 414px + mobile full 414px; inline SVG logo with `fill="currentColor"` for dark mode; active tab indicator positioned by JS `getBoundingClientRect()`; inline SVG sprite (file:// safe); CSS Grid nav row aligns tabs+filter to search column
- `components/icn-arrows/` — 9 variants (right-sm/lg/circle, down-sm/lg/circle, v7, v8 48px+shadow, v9 32px); circle backgrounds CSS-driven via `--color-button-inactive`
- `components/tags/` — 5 variants (default, outline, dismissible, sm, label); JS dismiss; `--tag-gap: 6px` component variable
- `components/form-field/` — default, focus, error, multiline states; `:focus-within` border transition; no native `<select>`
- `components/radio-button/` — `appearance: none`; custom track + dot; group with `<fieldset>`; focus ring
- `components/footer/` — desktop 1440px + mobile 402px; wave SVG with `preserveAspectRatio="none"`; logo text `fill="currentColor"`; all social icons inline SVG (file:// safe); always dark background
- `assets/icons/icons.svg` — full sprite; 10 icons: filter, search, close, hamburger, settings, open-close, download, info, image, av
- `assets/icons/icons.html` — preview page; inline sprite (file:// safe); icons shown in swatch grid by category

**Not yet started:**
- `components/carousel/`

**Workflow (confirmed working):**
1. Call `mcp__claude_ai_Figma__get_design_context` with the node ID and file key `UEXWOZNBxxFQOOUrYem17y`
2. Generate `spec.md` from the response
3. Build `component.html` from the spec — never from memory or invention

**`index.html` is a generated shell — do not hand-edit component content inside it.**
`index.html` embeds each component via `<iframe src="components/…/….html">`. It is ~250 lines of library chrome only (header, sidebar, theme toggle). All component CSS, HTML, and JS lives exclusively in the component file. Editing a component file is the only step needed — `index.html` reflects the change automatically on browser refresh.

- To add a new component: create `components/<name>/<name>.html`, then add a `<section>` + `<iframe>` block to `index.html` and a nav link to the sidebar. That is the only time `index.html` needs to be touched.
- Every component HTML must include the iframe embed block at the end of its `<script>` tag (hides the per-page theme toggle when embedded, listens for `setTheme` postMessage, reports height for auto-sizing). Copy from any existing component.

**Local preview requires an HTTP server, not `file://`.**
Chrome blocks cross-file iframes on `file://`. Run `npx serve /Users/mary.evans/Documents/startpage-design` and open `http://localhost:3000`. GitHub Pages also works and is the canonical shared URL.

**GitHub repository:** `https://github.com/lysa-le/startpage-design`
Commit and push changes to keep GitHub Pages up to date. The hosted library at `https://lysa-le.github.io/startpage-design/` is what to share with collaborators.

---

## 5. Icon Library Decisions

**Static icons live in `assets/icons/icons.svg` as an SVG sprite.**
One `<symbol>` per icon, ID matches the Figma component name kebab-cased (`icn-search` → `#icon-search`). Components reference icons via `<use href="../../assets/icons/icons.svg#icon-search"/>`. Icons inherit color from `currentColor` — no separate color token needed. Size is controlled by the component's CSS class, not the SVG.

**Static icons in the sprite:**
`icn-settings`, `icn-hamburger`, `icn-filter`, `icn-image`, `icn-info`, `icn-download`, `icn-av`

**Stateful icons are their own component folders** (anatomy, states, ARIA semantics, JS behaviour):
- `components/icn-copy/` — two-state icon (idle → confirmed → idle); timeout revert
- `components/icn-search/` — inactive + active states; color shifts on activation
- `components/icn-close/` — default-grey + secondary states; secondary on hover/activation
- `components/icn-open-close/` — open (plus) ↔ close (minus) toggle; `aria-expanded`
- `components/icn-check/` — standalone checkmark; large + small sizes; no interaction
- `components/radio-button/` — group selection state, `role="radio"` + `aria-checked`

**Do not make all icons variants of a single Figma component set.** Each icon is its own named component set in Figma where variants = sizes (16 / 24). All icon component sets live on a dedicated **Icons page** in Figma, grouped by category:
- Navigation & Controls — `icn-search`, `icn-hamburger`, `icn-close`, `icn-settings`, `icn-filter`
- Arrows & Direction — `icn-arrows`, `icn-open-close`
- Actions — `icn-download`, `icn-copy`
- Media — `icn-av`, `icn-sound`, `icn-image`
- Feedback — `icn-info`, `icn-check`

**`icn-copy + icn-check` is one stateful component, not two icons.** The check state is the confirmation feedback when a user clicks copy. It lives in `components/icn-copy/`, not the sprite. `icon-list.md` notes this cross-reference.

**`assets/` folder structure:**
```
assets/
├── icons/
│   ├── icons.svg       ← SVG sprite (static icons only)
│   └── icon-list.md    ← name, sprite ID, Figma node ID, notes
├── logos/
│   └── startpage-wordmark.svg  ← 104×23px; text path uses fill="#1E222D"; inline as SVG with fill="currentColor" for dark mode
└── illustrations/      ← spot illustrations for empty states etc.
```

---

## 6. Outstanding Issues

These are known deviations, patches, or unresolved questions that need designer input or a future token update.

### Token gaps

- **`--color-text-on-teal` missing.** In dark mode `--color-button-teal` (#00E7D0) against `--color-text-primary` (#F2F3FF) fails WCAG contrast. Patched in `button.html` with a component-level `[data-theme="dark"] .btn--teal { color: var(--color-text-inverted) }`. Long-term fix: add a `--color-text-on-teal` semantic token that resolves to a dark primitive in both modes.

- **`--color-toggle-thumb` not yet defined.** The toggle thumb must be white in both light and dark mode (pure white circle on a coloured track). No existing semantic token covers this — `--color-background-primary` flips to near-black in dark mode. A dedicated `--color-toggle-thumb: var(--color-whisper-0)` token is needed in `tokens.css` and both theme blocks.

- **Button line-height tokens set to cap-height values.** `--font-button-*-lh` tokens were updated from their Figma type-style line heights (32/28/24px) to Inter cap-height values (17/14/11/10px) so that CSS button heights match Figma's auto-layout frame heights. `design-system.md` was updated to match. Figma itself still shows the original type-style line heights — reconcile in Figma if the type styles are reused in non-button contexts.

### Spacing gaps

- **Ghost button horizontal padding.** Figma specifies 26px, which is not in the spacing scale. `--spacing-24` (24px) is used as the nearest token. Needs designer confirmation — possibly intentional to account for border width.

- **Toggle thumb gap.** The 3px gap between the toggle thumb and track edge is outside the spacing scale (scale jumps 4 → 8). A component-level `--toggle-thumb-gap: 3px` custom property is used. Consider adding `--spacing-3` or adjusting the Figma spec to 4px.

### Accessibility

- **Focus states not defined in Figma.** Focus rings were added to all interactive components (`button`, `dropdown`, `pagination`) using `--border-stroke-lg` + `--color-stroke-primary-button`. These are accessibility additions, not from Figma. Needs designer sign-off before finalising.

