# form-field — Component Spec

## Overview
A text input field in single-line and multi-line variants, across 3 states (default, active/focused, error). Used for data entry in forms. 300px wide in Figma; width is determined by context in production.

---

## Variants & States

| Modifier / state | Description | Figma name |
|---|---|---|
| Default | Placeholder text, `--color-stroke-primary` border | default |
| `:focus-within` | Blue border `--color-stroke-primary-button` | active |
| `.form-field--error` | Red border + error message below | Variant4 |
| `.form-field--multiline` | Textarea, 64px height, resize handle | multi-line |

---

## Anatomy

```
div.form-field[.form-field--multiline][.form-field--error]
  input.form-field__input   ← single-line (<input type="text">)
  textarea.form-field__input ← multi-line (<textarea>)
  span.form-field__error    ← only when .form-field--error
```

---

## Sizes & Spacing (from Figma)

| Property | Value | Token |
|---|---|---|
| Width (Figma) | 300px | — (context-dependent in production) |
| Height (single-line) | auto (~36px) | set by padding + line-height |
| Height (multi-line) | 64px | hardcoded |
| Horizontal padding | 12px | `--spacing-12` |
| Vertical padding | 8px | `--spacing-8` |
| Border radius | 12px | `--radius-lg` |
| Border weight | 1px | `--border-stroke-sm` |

---

## Token Mapping

| Property | Token |
|---|---|
| Background | `--color-background-primary` |
| Border (default) | `--color-stroke-primary` |
| Border (focused) | `--color-stroke-primary-button` |
| Border (error) | `--color-stroke-error` |
| Placeholder text | `--color-text-secondary` |
| Input text | `--color-text-primary` |
| Error message text | `--color-text-error` |
| Font size (input) | `--font-body-sm` |
| Font size (error) | `--font-body-xs` |

---

## Notes

1. **No native `<select>`** — per project convention. This component is for `<input>` and `<textarea>` only.
2. **Focus state** — driven by CSS `:focus-within` on the wrapper. No JS needed for the active border.
3. **Error state** — `.form-field--error` class toggled by form validation logic. Error message is a sibling `<span class="form-field__error">` below the input wrapper.
4. **Resize handle** — the multi-line Figma variant shows a resize grip image in the bottom-right. This is handled by `resize: vertical` on the `<textarea>` in CSS; the browser renders its own handle.
5. **Width** — 300px in Figma spec. Do not encode this in the component CSS — let the containing layout determine width.
