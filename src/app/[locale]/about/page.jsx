import { setRequestLocale } from "next-intl/server";
import AboutPage from "./AboutPage";

export default async function About({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPage />;
}
