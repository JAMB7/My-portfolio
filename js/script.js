// =========================
// JAVASCRIPT FOR THE WEBSITE
// =========================


// =========================
// HERO FADE-IN ANIMATION
// =========================
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
// TRANSLATION SYSTEM (FULL FIXED VERSION)
// =========================

const translations = {
  en: {
    home: "Home",
    about: "About",
    work: "Work",
    contact: "Contact",

    heroTitle: "✨ Hey, Welcome to my portfolio.",
    heroSubtitle: "I'm Julisha A.M Busghit",
    studentNr: "Student nr.: BI/1122/045",

    aboutTitle: "About me 👩🏽‍🦲",
    aboutText:
      "A curious, open-minded, and thoughtful person who enjoys learning about new ideas and perspectives, exploring different areas of knowledge, and embracing new experiences.",

    aboutFocusTitle: "I am currently focused on professional growth through:",
    aboutFocus1: "New experiences",
    aboutFocus2: "Collaboration",
    aboutFocus3: "Continuous learning",

    interestsTitle: "Interests 🖼️",
    interestsText:
      "I enjoy deep thinking, drawing, painting, lofi music, fitness, swimming, kickboxing, dancing, trying new foods, meditation, sunsets and nature.",

    educationTitle: "Education 📚",

    workTitle: "Recent work Experience 📈",
    work1: "Salon Assistant & Social Media Coordinator at Beauty by Pascalle",
    work2: "Enquiry Projects & Data Processing at Suribet",
    work3: "Part-time IT Assistant at SuriTech",

    contactTitle: "Contact me",
    sendMessageTitle: "Send me a message",
    sendMessage: "Send Message ✨",

    phone: "Phone:",
    email: "Email:",

    skillsTitle: "Skills",

    // FORM PLACEHOLDERS
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Write your message..."
  },

  nl: {
    home: "Home",
    about: "Over mij",
    work: "Werk",
    contact: "Contact",

    heroTitle: "✨ Hey, welkom op mijn portfolio.",
    heroSubtitle: "Ik ben Julisha A.M Busghit",
    studentNr: "Student nr.: BI/1122/045",

    aboutTitle: "Over mij 👩🏽‍🦲",
    aboutText:
      "Een nieuwsgierig, open-minded en bedachtzaam persoon die graag leert over nieuwe ideeën en perspectieven en nieuwe ervaringen omarmt.",

    aboutFocusTitle: "Ik richt mij op professionele groei door:",
    aboutFocus1: "Nieuwe ervaringen",
    aboutFocus2: "Samenwerking",
    aboutFocus3: "Voortdurend leren",

    interestsTitle: "Interesses 🖼️",
    interestsText:
      "Ik houd van tekenen, muziek, fitness, zwemmen, kickboksen, dansen en natuur.",

    educationTitle: "Opleiding 📚",

    workTitle: "Recente werkervaring 📈",
    work1: "Salon assistent & social media coördinator bij Beauty by Pascalle",
    work2: "Enquête projecten & data verwerking bij Suribet",
    work3: "Parttime IT assistent bij SuriTech",

    contactTitle: "Contact opnemen",
    sendMessageTitle: "Stuur mij een bericht",
    sendMessage: "Verstuur Bericht ✨",

    phone: "Telefoon:",
    email: "E-mail:",

    skillsTitle: "Vaardigheden",

    // FORM PLACEHOLDERS
    namePlaceholder: "Jouw naam",
    emailPlaceholder: "Jouw e-mail",
    messagePlaceholder: "Schrijf je bericht..."
  }
};

let currentLang = "en";


// =========================
// TRANSLATE FUNCTION
// =========================
function translatePage(lang) {
  currentLang = lang;

  // TEXT TRANSLATION
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // PLACEHOLDER TRANSLATION (NEW FIX)
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Toggle button text
  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = lang === "en" ? "NL" : "EN";

  // Save language
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