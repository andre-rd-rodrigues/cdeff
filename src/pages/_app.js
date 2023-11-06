import { NextIntlClientProvider } from "next-intl";
import Layout from "@/components/Layout";
import "../styles/globals.scss";
import { barlow } from "@/styles/fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-barlow: ${barlow.style.fontFamily};
        }
      `}</style>
      <NextIntlClientProvider messages={pageProps.messages}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextIntlClientProvider>
    </>
  );
}
