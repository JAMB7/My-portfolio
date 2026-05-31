// javascript for the website

let currentLang = localStorage.getItem("lang") || "en";

/* =========================
   LANGUAGE SYSTEM (EN ↔ NL)
   ========================= */

function applyLanguage() {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
}

function switchLanguage() {
  currentLang = currentLang === "en" ? "nl" : "en";
  localStorage.setItem("lang", currentLang);
  applyLanguage();
}

/* =========================
   PAGE LOAD (ANIMATIONS + INIT)
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

  // HERO FADE ANIMATION
  const hero = document.querySelector(".hero");

  if (hero) {
    hero.style.opacity = 0;

    setTimeout(() => {
      hero.style.transition = "2s ease";
      hero.style.opacity = 1;
    }, 200);
  }

  // APPLY SAVED LANGUAGE ON PAGE LOAD
  applyLanguage();

});