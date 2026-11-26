(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const e of t.addedNodes)
          e.tagName === "LINK" && e.rel === "modulepreload" && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === "use-credentials"
          ? "include"
          : e.crossOrigin === "anonymous"
            ? "omit"
            : "same-origin"),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    const n = t(e);
    fetch(e.href, n);
  }
})();
var e = "admin@example.com",
  t = "CristianoRonaldo7";
function n() {
  alert("Кнопка MAX нажата!");
}
function r() {
  alert("Кнопка Gosuslugi нажата!");
}
var i = document.getElementById("MaxEnter"),
  a = document.getElementById("GosuslugiEnter");
(i && i.addEventListener("click", n), a && a.addEventListener("click", r));
var o = document.querySelector(".formEmail");
o &&
  o.addEventListener("submit", (e) => {
    e.preventDefault();
    const t = o.elements.namedItem("email")?.value.trim() ?? "",
      n = o.elements.namedItem("password")?.value ?? "";
    t &&
      n &&
      (c(n)
        ? l(t, n)
          ? alert("Данные верны! Доступ разрешен.")
          : s("Ошибка! Введена неверная пара логин/пароль.")
        : s(
            `Ошибка! Длина вашего пароля: ${n.length} символ(а/ов). Длина пароля должна быть хотя бы 8 символов!`,
          ),
      o.reset());
  });
function s(e) {
  const t = document.getElementById("error-block");
  t &&
    ((t.textContent = e),
    (t.style.display = "block"),
    setTimeout(() => {
      t.style.display = "none";
    }, 9e3));
}
var c = (e) => e.length >= 8,
  l = (n, r) => n === e && r === t,
  u = "snow",
  d = document.querySelector(".snow"),
  f = document.querySelectorAll(".snow__flake"),
  p = document.querySelector(".snow-toggle");
function m(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
function h(e, t) {
  return (Math.random() * (t - e) + e).toFixed(1);
}
f.forEach((e) => {
  ((e.style.fontSize = h(0.7, 1.5) + "em"),
    (e.style.animationDuration = m(20, 30) + "s"),
    (e.style.animationDelay = m(-1, f.length / 2) + "s"));
});
function g(e) {
  d?.style.setProperty("--animation-name", e);
}
(p?.addEventListener("change", (e) => {
  const t = e.target.value;
  (g(t), localStorage.setItem(u, t));
}),
  document.addEventListener("DOMContentLoaded", () => {
    const e = localStorage.getItem(u);
    if (e) {
      const t = p?.querySelector(`.snow-toggle__control[value='${e}']`);
      t && (t.checked = !0);
    }
    (g(e),
      window.addEventListener("storage", () => {
        g(localStorage.getItem(u));
      }));
  }));
