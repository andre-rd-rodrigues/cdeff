import { renderHook } from "@/test-utils";
import { NextIntlClientProvider } from "next-intl";
import ptMessages from "@/messages/pt.json";
import useTranslationArray from "./useTranslationsArray";

function AllProviders({ children }) {
  return (
    <NextIntlClientProvider locale="pt" messages={ptMessages}>
      {children}
    </NextIntlClientProvider>
  );
}

describe("useTranslationArray", () => {
  const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

  afterEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it("returns array when translation key points to an array", () => {
    const { result } = renderHook(
      () => useTranslationArray("pages.activities.section_4.schedule"),
      {
        wrapper: AllProviders
      }
    );

    expect(Array.isArray(result.current)).toBe(true);
    expect(result.current).toEqual([
      "4 aos 12 anos: 18h30 às 19h30",
      "a partir dos 13 anos: 19h30 às 20h30",
      "avançados e interessados em competições: 20h30 às 21h30"
    ]);
  });

  it("returns empty array and logs error when translation is not an array", () => {
    const { result } = renderHook(
      () => useTranslationArray("pages.homepage.title"),
      {
        wrapper: AllProviders
      }
    );

    expect(result.current).toEqual([]);
    expect(consoleSpy).toHaveBeenCalledWith(
      'Translation for key "pages.homepage.title" is not an array.'
    );
  });
});
