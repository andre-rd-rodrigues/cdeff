import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import "../styles/globals.scss";
import { barlow } from "@/styles/fonts";

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <>
      <style jsx global>{`
        :root {
          --font-barlow: ${barlow.style.fontFamily};
        }
      `}</style>
      <NextIntlClientProvider locale={locale} messages={pageProps.messages}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextIntlClientProvider>
    </>
  );
}
