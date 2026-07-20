/**
 * Premium UI customization prefs — shared by settings.html + results.html
 * Persisted in localStorage so they survive session auth/plan changes.
 */
(function (global) {
  const KEY = 'accounts-ui-prefs';

  const DEFAULTS = {
    scheme: 'default',
    font: 'inter',
    fontSize: 'medium',
    width: 'normal',
    align: 'left',
    bg: 'default',
    titleFont: 'inter',
    titleColor: 'link',
    siteIcons: true,
  };

  const FONT_STACKS = {
    inter: "'Inter', sans-serif",
    arial: 'Arial, Helvetica, sans-serif',
    georgia: 'Georgia, "Times New Roman", serif',
    helvetica: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    segoe: '"Segoe UI", Tahoma, sans-serif',
    verdana: 'Verdana, Geneva, sans-serif',
    serif: 'Georgia, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  };

  const TITLE_COLORS = {
    link: 'var(--color-text-link)',
    primary: 'var(--color-text-primary)',
    brand: 'var(--color-text-brandblue)',
    teal: 'var(--color-accent-teal)',
    inverted: 'var(--color-text-inverted)',
  };

  const BG_COLORS = {
    default: null,
    secondary: 'var(--color-background-secondary)',
    tertiary: 'var(--color-background-tertiary)',
    quaternary: 'var(--color-background-quaternary)',
    whisper: 'var(--color-whisper-100)',
    midnight: 'var(--color-midnight-50, #E8EAF4)',
  };

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { ...DEFAULTS };
      return { ...DEFAULTS, ...JSON.parse(raw) };
    } catch {
      return { ...DEFAULTS };
    }
  }

  function save(prefs) {
    const next = { ...DEFAULTS, ...prefs };
    localStorage.setItem(KEY, JSON.stringify(next));
    return next;
  }

  function reset() {
    localStorage.removeItem(KEY);
    return { ...DEFAULTS };
  }

  function apply(prefs, root) {
    const p = { ...DEFAULTS, ...prefs };
    const el = root || document.documentElement;

    el.dataset.uiScheme = p.scheme;
    el.dataset.uiFont = p.font;
    el.dataset.uiFontSize = p.fontSize;
    el.dataset.uiWidth = p.width;
    el.dataset.uiAlign = p.align;
    el.dataset.uiBg = p.bg;
    el.dataset.uiTitleFont = p.titleFont;
    el.dataset.uiTitleColor = p.titleColor;
    el.dataset.uiSiteIcons = p.siteIcons ? 'on' : 'off';

    el.style.setProperty('--ui-font-family', FONT_STACKS[p.font] || FONT_STACKS.inter);
    el.style.setProperty('--ui-title-font', FONT_STACKS[p.titleFont] || FONT_STACKS.inter);
    el.style.setProperty('--ui-title-color', TITLE_COLORS[p.titleColor] || TITLE_COLORS.link);

    const bg = BG_COLORS[p.bg];
    if (bg) {
      el.style.setProperty('--ui-bg-override', bg);
    } else {
      el.style.removeProperty('--ui-bg-override');
    }

    return p;
  }

  global.AccountsUIPrefs = {
    KEY,
    DEFAULTS,
    FONT_STACKS,
    TITLE_COLORS,
    BG_COLORS,
    load,
    save,
    reset,
    apply,
  };
})(window);
