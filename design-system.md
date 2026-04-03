# Design System

## Table of Contents
1. [Typography](#typography)
2. [Spacing & Layout](#spacing--layout)
3. [Border Radius](#border-radius)
4. [Stroke / Border](#stroke--border)
5. [Color Primitives](#color-primitives)
6. [Semantic Colors — Light Mode](#semantic-colors--light-mode)
7. [Semantic Colors — Dark Mode](#semantic-colors--dark-mode)

---

## Typography

### Font Family

| Token | Value |
|---|---|
| `font/family` | Inter |

### Font Weights

| Token | Value |
|---|---|
| `font/weight/regular` | 400 |
| `font/weight/medium` | 500 |
| `font/weight/semibold` | 600 |
| `font/weight/bold` | 700 |
| `font/weight/extrabold` | 800 |
| `font/weight/heavy` | 900 |

### Font Size Primitives

| Token | px |
|---|---|
| `font/size/12` | 12px |
| `font/size/14` | 14px |
| `font/size/16` | 16px |
| `font/size/18` | 18px |
| `font/size/20` | 20px |
| `font/size/24` | 24px |
| `font/size/48` | 48px |
| `font/size/56` | 56px |
| `font/size/68` | 68px |
| `font/size/88` | 88px |
| `font/size/104` | 104px |

### Semantic Typography Scale

**Body**

| Token | Size | Line Height |
|---|---|
| `font/body/xl` | 20px | 28px |
| `font/body/lg` | 18px | 28px |
| `font/body/md` | 16px | 24px |
| `font/body/sm` | 14px | 20px |
| `font/body/xs` | 12px | 18px |

**Display**

| Token | Size | Line Height |
|---|---|
| `font/display/regular` | 104px | 112px |

**Heading**

| Token | Size | Line Height |
|---|---|
| `font/heading/xl` | 88px | 96px |
| `font/heading/lg` | 68px | 76px |
| `font/heading/md` | 56px | 64px |
| `font/heading/sm` | 48px | 56px |
| `font/heading/xs` | 24px | 32px |
| `font/heading/xxs` | 18px | 28px |

**Label**

| Token | Size | Line Height |
|---|---|
| `font/label/lg` | 24px | 32px |
| `font/label/sm` | 18px | 32px |
| `font/label/xs` | 14px | 20px |

**Button**

| Token | Size | Line Height |
|---|---|
| `font/button/lg` | 24px | 17px _(cap-height of Inter 24px; Figma auto-layout measures the frame to cap-height rather than the full 32px line box, so the CSS token is set to 17px to match the 81px Figma button at 32px v-padding)_ |
| `font/button/md` | 20px | 14px _(cap-height)_ |
| `font/button/sm` | 16px | 11px _(cap-height)_ |
| `font/button/xs` | 14px | 10px _(cap-height)_ |

**Utility**

| Token | Size | Line Height |
|---|---|
| `font/utility/caption` | 12px | 18px |

---

## Spacing & Layout

| Token | px |
|---|---|
| `spacing/4` | 4px |
| `spacing/8` | 8px |
| `spacing/12` | 12px |
| `spacing/16` | 16px |
| `spacing/20` | 20px |
| `spacing/24` | 24px |
| `spacing/32` | 32px |
| `spacing/40` | 40px |
| `spacing/48` | 48px |
| `spacing/64` | 64px |
| `spacing/80` | 80px |
| `spacing/96` | 96px |
| `spacing/104` | 104px |

---

## Border Radius

| Token | px |
|---|---|
| `radius/none` | 0px |
| `radius/sm` | 4px |
| `radius/md` | 8px |
| `radius/lg` | 12px |
| `radius/xl` | 16px |
| `radius/2xl` | 24px |
| `radius/3xl` | 48px |
| `radius/full` | 999px |

---

## Stroke / Border

| Token | px |
|---|---|
| `border/stroke/sm` | 1px |
| `border/stroke/md` | 1.5px |
| `border/stroke/lg` | 2px |
| `border/stroke/xl` | 2.5px |

---

## Color Primitives

> These are raw color values. Use semantic tokens (below) in components — not these directly.

**Black**

| Token | Hex |
|---|---|
| `color-black-400` | `#494D56` |
| `color-black-550` | `#34373D` |
| `color-black-600` | `#2E3443` |
| `color-black-650` | `#27292F` |
| `color-black-700` | `#1E222D` |
| `color-black-800` | `#1B1D21` |
| `color-black-900` | `#09090A` |

**Brand Blue**

| Token | Hex |
|---|---|
| `color-brand-blue-50` | `#F7F7FF` |
| `color-brand-blue-100` | `#C5CBFF` |
| `color-brand-blue-200` | `#B3BCFF` |
| `color-brand-blue-300` | `#6677FB` |
| `color-brand-blue-400` | `#5668F1` |
| `color-brand-blue-500` | `#3F5187` |
| `color-brand-blue-600` | `#2E39B3` |
| `color-brand-blue-700` | `#384775` |
| `color-brand-blue-800` | `#2B3860` |

**Gold**

| Token | Hex |
|---|---|
| `color-gold-100` | `#FFF3D3` |
| `color-gold-200` | `#FFE4AA` |
| `color-gold-500` | `#FCBB61` |

**Midnight**

| Token | Hex |
|---|---|
| `color-midnight-50` | `#C3C8DA` |
| `color-midnight-100` | `#ACB1C2` |
| `color-midnight-200` | `#9297A7` |
| `color-midnight-300` | `#7F869E` |
| `color-midnight-400` | `#5B627A` |
| `color-midnight-500` | `#3B435B` |
| `color-midnight-900` | `#202C46` |

**Purple**

| Token | Hex |
|---|---|
| `color-purple-100` | `#F9EAFE` |
| `color-purple-400` | `#D67DFD` |
| `color-purple-500` | `#C161EA` |

**Red**

| Token | Hex |
|---|---|
| `color-red-100` | `#FEE8E8` |
| `color-red-400` | `#F77779` |
| `color-red-500` | `#E23D3D` |

**Teal**

| Token | Hex |
|---|---|
| `color-teal-100` | `#DCF5EF` |
| `color-teal-200` | `#5AECDE` |
| `color-teal-400` | `#00E7D0` |
| `color-teal-500` | `#00B0A1` |
| `color-teal-550` | `#009F91` |

**Whisper (Neutrals)**

| Token | Hex |
|---|---|
| `color-whisper-0` | `#FFFFFF` |
| `color-whisper-50` | `#FBFBFD` |
| `color-whisper-100` | `#F2F3FF` |
| `color-whisper-200` | `#EBECF7` |
| `color-whisper-300` | `#E7E9FB` |
| `color-whisper-400` | `#DEE0F7` |
| `color-whisper-500` | `#D0D3F2` |

---

## Semantic Colors — Light Mode

> These tokens reference the primitives above and are what all components consume.

### Backgrounds

| Token | References |
|---|---|
| `color-background-primary` | `color-whisper-0` — `#FFFFFF` |
| `color-background-secondary` | `color-whisper-300` — `#E7E9FB` |
| `color-background-tertiary` | `color-brand-blue-50` — `#F7F7FF` |
| `color-background-quaternary` | `color-whisper-50` — `#FBFBFD` |

### Text

| Token | References |
|---|---|
| `color-text-primary` | `color-black-700` — `#1E222D` |
| `color-text-secondary` | `color-midnight-300` — `#7F869E` |
| `color-text-tertiary` | `color-midnight-400` — `#5B627A` |
| `color-text-inverted` | `color-whisper-100` — `#F2F3FF` |
| `color-text-brandblue` | `color-brand-blue-400` — `#5668F1` |
| `color-text-link` | `color-brand-blue-600` — `#2E39B3` |
| `color-text-teal` | `color-teal-550` — `#009F91` |
| `color-text-error` | `color-red-500` — `#E23D3D` |

### Icons

| Token | References |
|---|---|
| `color-icon-primary` | `color-black-700` — `#1E222D` |
| `color-icon-secondary` | `color-brand-blue-400` — `#5668F1` |
| `color-icon-tertiary` | `color-midnight-300` — `#7F869E` |

### Buttons

| Token | References |
|---|---|
| `color-button-brandblue` | `color-brand-blue-400` — `#5668F1` |
| `color-button-brandbluehover` | `color-brand-blue-300` — `#6677FB` |
| `color-button-purple` | `color-purple-500` — `#C161EA` |
| `color-button-purplehover` | `color-purple-400` — `#D67DFD` |
| `color-button-teal` | `color-teal-200` — `#5AECDE` |
| `color-button-tealhover` | `color-teal-400` — `#00E7D0` |
| `color-button-productfilled` | `color-whisper-300` — `#E7E9FB` |
| `color-button-productfilledhover` | `color-whisper-400` — `#DEE0F7` |
| `color-button-inactive` | `color-whisper-100` — `#F2F3FF` |

### Strokes

| Token | References |
|---|---|
| `color-stroke-primary` | `color-whisper-500` — `#D0D3F2` |
| `color-stroke-secondary` | `color-whisper-200` — `#EBECF7` |
| `color-stroke-primary-button` | `color-brand-blue-400` — `#5668F1` |
| `color-stroke-error` | `color-red-500` — `#E23D3D` |

### Accents

| Token | References |
|---|---|
| `color-accent-gold` | `color-gold-500` — `#FCBB61` |
| `color-accent-gold-alt` | `color-gold-200` — `#FFE4AA` |
| `color-accent-teal` | `color-teal-400` — `#00E7D0` |
| `color-accent-teal-alt` | `color-teal-100` — `#DCF5EF` |

---

## Semantic Colors — Dark Mode

> Same token names as light mode — values swap to dark-appropriate primitives.

### Backgrounds

| Token | References |
|---|---|
| `color-background-primary` | `color-black-900` — `#09090A` |
| `color-background-secondary` | `color-black-550` — `#34373D` |
| `color-background-tertiary` | `color-black-800` — `#1B1D21` |
| `color-background-quaternary` | `color-black-650` — `#27292F` |

### Text

| Token | References |
|---|---|
| `color-text-primary` | `color-whisper-100` — `#F2F3FF` |
| `color-text-secondary` | `color-midnight-200` — `#9297A7` |
| `color-text-tertiary` | `color-midnight-100` — `#ACB1C2` |
| `color-text-inverted` | `color-black-800` — `#1B1D21` |
| `color-text-brandblue` | `color-brand-blue-200` — `#B3BCFF` |
| `color-text-link` | `color-brand-blue-200` — `#B3BCFF` |
| `color-text-teal` | `color-teal-400` — `#00E7D0` |
| `color-text-error` | `color-red-400` — `#F77779` |

### Icons

| Token | References |
|---|---|
| `color-icon-primary` | `color-whisper-200` — `#EBECF7` |
| `color-icon-secondary` | `color-brand-blue-200` — `#B3BCFF` |
| `color-icon-tertiary` | `color-midnight-100` — `#ACB1C2` |

### Buttons

| Token | References |
|---|---|
| `color-button-brandblue` | `color-brand-blue-300` — `#6677FB` |
| `color-button-brandbluehover` | `color-brand-blue-400` — `#5668F1` |
| `color-button-purple` | `color-purple-400` — `#D67DFD` |
| `color-button-purplehover` | `color-purple-500` — `#C161EA` |
| `color-button-teal` | `color-teal-400` — `#00E7D0` |
| `color-button-tealhover` | `color-teal-200` — `#5AECDE` |
| `color-button-productfilled` | `color-black-550` — `#34373D` |
| `color-button-productfilledhover` | `color-black-400` — `#494D56` |
| `color-button-inactive` | `color-black-600` — `#2E3443` |

### Strokes

| Token | References |
|---|---|
| `color-stroke-primary` | `color-black-400` — `#494D56` |
| `color-stroke-secondary` | `color-black-550` — `#34373D` |
| `color-stroke-primary-button` | `color-brand-blue-200` — `#B3BCFF` |
| `color-stroke-error` | `color-red-400` — `#F77779` |

### Accents

| Token | References |
|---|---|
| `color-accent-gold` | `color-gold-200` — `#FFE4AA` |
| `color-accent-gold-alt` | `color-gold-500` — `#FCBB61` |
| `color-accent-teal` | `color-teal-200` — `#5AECDE` |
| `color-accent-teal-alt` | `color-teal-500` — `#00B0A1` |
