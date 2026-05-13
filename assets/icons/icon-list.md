# Icon Sprite — assets/icons/icons.svg

Static icons only. Stateful icons (icn-copy, icn-av, radio-button) live in their own component folders.

Usage:
```html
<svg width="16" height="16" aria-hidden="true">
  <use href="../../assets/icons/icons.svg#icon-name"/>
</svg>
```

| Sprite ID        | Figma node  | Category              | viewBox       | Notes                                                                     |
|------------------|-------------|-----------------------|---------------|---------------------------------------------------------------------------|
| `icon-filter`    | 2566:1213   | Navigation & Controls | 0 0 13.5 14   | 16px render                                                               |
| `icon-hamburger` | 151:588     | Navigation & Controls | 0 0 20 20     | 20px render; stroke-width 2                                               |
| `icon-settings`  | 1524:1158   | Navigation & Controls | 0 0 16 16     | 16px render; gear path direct from Figma                                  |
| `icon-download`  | 2566:1973   | Actions               | 0 0 13.5 13.5 | 16px render; viewBox is 13.5 (stroke bleed), scale up                    |
| `icon-info`      | 2565:1026   | Feedback              | 0 0 15 15     | 16px render; color is `var(--color-icon-tertiary)` — not `currentColor`   |
| `icon-image`     | 2566:1971   | Media                 | 0 0 16 16     | 16px render                                                               |
| `icon-av`        | 45:624      | Media                 | 0 0 16 8      | Non-square; render at 16×8px; fill is `var(--color-icon-secondary)` — not `currentColor` |

## Cross-references (stateful — live in components/)

- `icn-search` → `components/icn-search/` — inactive + active states
- `icn-close` → `components/icn-close/` — default-grey + secondary states
- `icn-open-close` → `components/icn-open-close/` — open (plus) + close (minus) toggle
- `icn-check` → `components/icn-check/` — large + small sizes (standalone checkmark)
- `icn-copy + icn-check` (combined) → `components/icn-copy/` — copy-to-clipboard with confirmation state
- `icn-arrows` → `components/icn-arrows/` — 9 size/style variants
