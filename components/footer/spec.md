# Footer

Figma: desktop `10:1445` · mobile `94:619`

---

## Anatomy

1. **Wave** — Full-width inline SVG with a curved top edge, creating a smooth transition from the page background into the dark footer. Uses `preserveAspectRatio="none"` so one path stretches to any width.
2. **Background** — `--color-black-800` panel filling the area below the wave. Always dark, never swaps with theme.
3. **Logo** — 104×23px Startpage wordmark. Text path rendered in `--color-whisper-100` (overrides the default `#1E222D` fill). The gradient underline path is unchanged.
4. **Nav links** — Privacy Policy · About Us · Press · Blog. Rendered in `--color-whisper-100`, no underline.
5. **Social icons** — Twitter, Reddit, Instagram, Facebook, Mastodon. 32×32px circular icons with `--color-brand-blue-400` fill and white icon paths. Inline SVG.

---

## Variants

### Desktop — `.footer--desktop` (1440×259px)

| Zone | Layout | Token / Value |
|---|---|---|
| Wave | Full width, `height: 79px` | Fill `--color-black-800` |
| Body | `display: flex`, `height: 180px`, `padding: 0 100px` | `background: --color-black-800` |
| Logo | `flex: none`, `align-items: center` | Left edge at 100px |
| Nav links | `flex: 1`, `justify-content: center` | `--font-body-sm`, `--spacing-32` gap |
| Social icons | `flex: none` | `--spacing-12` gap, right edge at 100px |

### Mobile — `.footer--mobile` (402×652px)

| Zone | Layout | Token / Value |
|---|---|---|
| Wave | Full width, `height: 91px` | Fill `--color-black-800` |
| Body | `flex-direction: column`, `align-items: center` | `gap: var(--footer-content-gap, 72px)` |
| Logo | Centered | 104×23px |
| Nav links | `flex-direction: column`, `align-items: center` | `--font-body-lg`, `--footer-link-gap: 76px` |
| Social icons | Horizontal | `--spacing-24` gap |

---

## Token Mapping

| Element | Property | Token |
|---|---|---|
| Footer background | `background` | `--color-black-800` |
| Wave fill | SVG `fill` | `--color-black-800` |
| Link text | `color` | `--color-whisper-100` |
| Link font — desktop | `font-size` | `--font-body-sm` |
| Link line-height — desktop | `line-height` | `20px` |
| Link font — mobile | `font-size` | `--font-body-lg` |
| Link line-height — mobile | `line-height` | `--font-body-lg-lh` |
| Links gap — desktop | `gap` | `--spacing-32` |
| Social icon background | SVG `fill` | `--color-brand-blue-400` |
| Social icon gap — desktop | `gap` | `--spacing-12` |
| Social icon gap — mobile | `gap` | `--spacing-24` |

---

## Notes

1. **Always dark.** Footer uses `--color-black-800` unconditionally — no `[data-theme="dark"]` branching. The demo includes the dark theme switcher per CLAUDE.md rule, but toggling it only affects the page scaffold above the footer.

2. **Logo white override.** The default wordmark SVG uses `fill="#1E222D"` on the text path. In the footer, the SVG element carries `color: var(--color-whisper-100)` and the text path uses `fill="currentColor"`. The gradient underline path (`fill="url(#...)"`) remains unchanged. Unique IDs per instance prevent gradient ID collision between desktop and mobile.

3. **Wave `preserveAspectRatio="none"`.** The desktop wave path (viewBox `0 0 1440 79`) is reused for both desktop and mobile by setting `width: 100%; height: [variant value]` in CSS. The wave stretches horizontally without distorting vertically.

4. **Below-scale spacing.** Two values fall outside the token spacing scale:
   - `--footer-link-gap: 76px` — mobile vertical gap between nav links
   - `12px` desktop social icon gap (between `--spacing-8` and `--spacing-16`) — used as component variable

5. **Social icon paths.** Icons use standard well-known SVG paths (Simple Icons / geometric constructions) rendered inline as self-contained SVGs. No external file dependency — safe for `file://` sharing.

6. **Mobile link order.** Figma specifies: About · Privacy Policy · Press · Blog (top to bottom).
