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
  }
};
