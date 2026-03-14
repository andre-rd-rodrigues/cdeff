import { getTranslations } from "./locale.helpers";
import enTranslations from "../messages/en.json";
import ptTranslations from "../messages/pt.json";

describe("getTranslations", () => {
  it("returns en.json translations when locale is 'en'", () => {
    const result = getTranslations("en");
    expect(result).toBe(enTranslations);
    expect(result).toEqual(enTranslations);
  });

  it("returns pt.json translations when locale is 'pt'", () => {
    const result = getTranslations("pt");
    expect(result).toBe(ptTranslations);
    expect(result).toEqual(ptTranslations);
  });

  it("returns pt.json translations for any other locale (default fallback)", () => {
    const result = getTranslations("fr");
    expect(result).toBe(ptTranslations);

    const resultEs = getTranslations("es");
    expect(resultEs).toBe(ptTranslations);

    const resultUnknown = getTranslations("unknown");
    expect(resultUnknown).toBe(ptTranslations);
  });
});
