// =========================
// JAVASCRIPT FOR THE WEBSITE
// =========================

// HERO FADE-IN ANIMATION
window.addEventListener("load", () => {

  const hero = document.querySelector(".hero");

  if (hero) {
    hero.style.opacity = 0;

    setTimeout(() => {
      hero.style.transition = "2s ease";
      hero.style.opacity = 1;
    }, 200);
  }

});


// =========================
// TRANSLATION SYSTEM
// =========================

const translations = {
  en: {
    home: "Home",
    about: "About",
    work: "Work",
    contact: "Contact",

    heroTitle: "✨ Hey, Welcome to my portfolio.",
    heroSubtitle: "I'm Julisha A.M Busghit",

    aboutTitle: "About me 👩🏽‍🦲",
    skillsTitle: "Skills",
    educationTitle: "Education 📚",
    contactTitle: "Contact me",
    sendMessage: "Send me a message"
  },

  nl: {
    home: "Home",
    about: "Over mij",
    work: "Werk",
    contact: "Contact",

    heroTitle: "✨ Hey, welkom op mijn portfolio.",
    heroSubtitle: "Ik ben Julisha A.M Busghit",

    aboutTitle: "Over mij 👩🏽‍🦲",
    skillsTitle: "Vaardigheden",
    educationTitle: "Opleiding 📚",
    contactTitle: "Contact opnemen",
    sendMessage: "Stuur mij een bericht"
  }
};

let currentLang = "en";

function translatePage(lang) {
  currentLang = lang;

  // NAV LINKS
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // HERO TEXT
  const heroTitle = document.querySelector(".hero h1");
  const heroSubtitle = document.querySelector(".hero p");

  if (heroTitle) heroTitle.textContent = translations[lang].heroTitle;
  if (heroSubtitle) heroSubtitle.textContent = translations[lang].heroSubtitle;

  // SECTION TITLES (safe matching)
  const h2s = document.querySelectorAll("h2");

  h2s.forEach(h2 => {
    const text = h2.textContent.trim();

    if (text.includes("About me") || text.includes("Over mij")) {
      h2.textContent = translations[lang].aboutTitle;
    }

    if (text.includes("Skills") || text.includes("Vaardigheden")) {
      h2.textContent = translations[lang].skillsTitle;
    }

    if (text.includes("Education") || text.includes("Opleiding")) {
      h2.textContent = translations[lang].educationTitle;
    }

    if (text.includes("Contact me") || text.includes("Contact opnemen")) {
      h2.textContent = translations[lang].contactTitle;
    }
  });

  // CONTACT FORM TITLE
  const formTitle = document.querySelector(".contact-form h2");
  if (formTitle) {
    formTitle.textContent = translations[lang].sendMessage;
  }

  // BUTTON LABEL
  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = lang === "en" ? "NL" : "EN";

  // SAVE LANGUAGE
  localStorage.setItem("lang", lang);
}


// =========================
// INIT
// =========================

document.addEventListener("DOMContentLoaded", () => {

  const savedLang = localStorage.getItem("lang") || "en";
  translatePage(savedLang);

  const btn = document.getElementById("langBtn");

  if (btn) {
    btn.addEventListener("click", () => {
      translatePage(currentLang === "en" ? "nl" : "en");
    });
  }

});