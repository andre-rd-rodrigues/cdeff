import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { dm_sans, barlow } from "@/styles/fonts";
import ClientLayout from "@/components/ClientLayout";
import { SITE_URL, defaultOgImage } from "@/lib/metadata";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common.metadata" });
  const title = t("homeTitle");
  const description = t("description");

  return {
    metadataBase: new URL(SITE_URL),
    // `default` is the fallback title for any route that doesn't set its own;
    // pages that do set a title provide the full string, used verbatim.
    title: {
      default: title,
      template: "%s"
    },
    description,
    openGraph: {
      type: "website",
      siteName: "CDEFF",
      title,
      description,
      url: `${SITE_URL}/${locale}`,
      locale,
      images: [{ url: defaultOgImage(locale), alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage(locale)]
    }
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${dm_sans.className} ${barlow.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
