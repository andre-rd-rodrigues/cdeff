import { getTranslations } from "next-intl/server";

export const SITE_URL = "https://www.cdeff.com";

// Locale-specific default share images (used by openGraph when a page has no
// image of its own, e.g. the static routes).
const OG_IMAGE = {
  pt: "/images/meta/meta-pt.webp",
  en: "/images/meta/meta-en.webp"
};

export function defaultOgImage(locale) {
  return OG_IMAGE[locale] ?? OG_IMAGE.en;
}

/**
 * Build Next.js Metadata for a static route from a `common.metadata.*` title key.
 * The description and default share image are inherited from the same namespace.
 */
export async function pageMetadata(locale, titleKey) {
  const t = await getTranslations({ locale, namespace: "common.metadata" });
  const title = t(titleKey);
  const description = t("description");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}`,
      locale,
      images: [{ url: defaultOgImage(locale), alt: title }]
    }
  };
}
