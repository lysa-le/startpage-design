/* News Hub prototypes — minimal shared JS (theme toggle + settings toggle).
   No frameworks. Only interaction needed for the design prototypes. */
(function () {
  "use strict";

  /* ── Theme toggle with localStorage persistence ── */
  var html = document.documentElement;
  var btn = document.getElementById("themeToggle");
  var icon = document.getElementById("themeIcon");
  var label = document.getElementById("themeLabel");

  function applyTheme(theme) {
    html.dataset.theme = theme;
    if (icon) icon.textContent = theme === "dark" ? "🌙" : "☀️";
    if (label) label.textContent = theme === "dark" ? "Dark" : "Light";
  }

  applyTheme(localStorage.getItem("theme") || "light");

  if (btn) {
    btn.addEventListener("click", function () {
      var next = html.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("theme", next);
    });
  }

  /* ── Switch toggles (role="switch") ── */
  document.querySelectorAll('.toggle[role="switch"]').forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var on = toggle.getAttribute("aria-checked") === "true";
      toggle.setAttribute("aria-checked", on ? "false" : "true");
      var target = document.getElementById(toggle.getAttribute("aria-controls"));
      if (target) target.hidden = on; // preview reflects the new state
    });
  });
}());
