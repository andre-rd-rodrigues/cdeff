import enTranslations from "./messages/en.json";
import ptTranslations from "./messages/pt.json";

export const getTranslations = (locale) => {
  const translations = locale === "en" ? enTranslations : ptTranslations;

  return translations;
};

export const DATE_FORMAT = `MMMM DD, YYYY`;
export const DATE_FORMAT_HOURS = `MMMM DD, YYYY [at] HH:mm`;

export const SPORTS = {
  BASKETBALL: "basketball",
  FUTSAL: "futsal"
};

export const TEL_LINK = "tel:+351 914 333 333";

export const REVALIDATE_TIME = 1800; // 30 minutes

export const headConfig = {
  "/": {
    title: "homeTitle" // These are keys for your translation files
  },
  "/about": {
    title: "aboutTitle"
  },
  "/about/sponsors": {
    title: "sponsorsTitle" // Key for the translation of the title
  },
  "/activities": {
    title: "activitiesTitle"
  },
  "/basketball": {
    title: "basketballTitle"
  },
  "/blog": {
    // Assuming [slug].jsx is for individual blog posts
    title: "blogTitle"
  },
  "/blog/[slug]": {
    // Dynamic route for blog posts
    title: "blogPostTitle"
  },
  "/contacts": {
    title: "contactsTitle"
  },
  "/faqs": {
    title: "faqsTitle"
  },
  "/futsal": {
    title: "futsalTitle"
  },
  "/store": {
    title: "storeTitle"
  },
  "/tournaments": {
    title: "tournamentsTitle"
  },
  "/registrations": {
    title: "registrationsTitle"
  }
};

// generate country list for pt, en, fr and es
export const LANGUAGE = {
  PT: "PT",
  ES: "ES",
  FR: "FR",
  EN: "EN"
};

export const languagesCodes = [
  {
    language: "Português",
    code: "PT"
  },
  {
    language: "Español",
    code: "ES"
  },
  {
    language: "Français",
    code: "FR"
  },
  {
    language: "English",
    code: "EN"
  }
];

export const viiTournamentPreLinks = {
  PT: "https://docs.google.com/forms/d/e/1FAIpQLSeKY0oIJ-SHGTtmRnPeUD9a-G2XLjWH28d2WeQZD8EA9mfNQA/viewform?usp=sf_link",
  EN: "https://docs.google.com/forms/d/e/1FAIpQLSdhbRY47AfA1d42v5Ukz3Wwak0f25ZLrcsPO1OJrLTrUdK5ow/viewform?usp=sf_link",
  ES: "https://docs.google.com/forms/d/e/1FAIpQLSde3wNB-3U1PKtO_GAX1fCxDEzM9CHusl4x9gCpwraPbA4Z2Q/viewform?usp=sf_link",
  FR: "https://docs.google.com/forms/d/e/1FAIpQLSf7AZZ747AiwhKrEHsQagvsv5QwuJANOw8HOcpeEzUJxuv32g/viewform?usp=sf_link"
};
