import Container from "@/components/Container/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";
import { dm_sans } from "@/styles/fonts";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export const metadata = {
  title: "CDEFF - Clube Desportivo Escola Francisco Franco",
  description: "Preview"
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={dm_sans.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar locale={locale} />
          <div className="min-h-screen mt-52 md:mt-48">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
