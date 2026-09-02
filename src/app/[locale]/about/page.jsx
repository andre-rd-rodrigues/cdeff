import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import AboutPage from "./AboutPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "aboutTitle");
}

export default async function About({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPage />;
}
