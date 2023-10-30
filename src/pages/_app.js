import { NextIntlClientProvider } from "next-intl";
import Layout from "@/components/Layout";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlClientProvider>
  );
}
