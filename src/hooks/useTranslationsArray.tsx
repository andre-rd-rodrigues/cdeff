import { useTranslations } from "next-intl";

const useTranslationArray = (key) => {
  const t = useTranslations();

  const arrayTranslation = t.raw(key);
  if (Array.isArray(arrayTranslation)) {
    return arrayTranslation;
  }

  // Log an error or handle the case where the translation is not an array
  console.error(`Translation for key "${key}" is not an array.`);
  return [];
};

export default useTranslationArray;
