import enTranslations from "./messages/en.json";
import ptTranslations from "./messages/pt.json";

export const getTranslations = (locale) => {
  const translations = locale === "en" ? enTranslations : ptTranslations;

  return translations;
};
