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
