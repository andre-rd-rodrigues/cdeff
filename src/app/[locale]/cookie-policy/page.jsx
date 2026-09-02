import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import CookiePolicyPage from "./CookiePolicyPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "cookiesTitle");
}

export default async function CookiePolicyRoute({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookiePolicyPage />;
}
