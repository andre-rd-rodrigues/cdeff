import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import TermsAndConditionsPage from "./TermsAndConditionsPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "termsTitle");
}

export default async function TermsAndConditionsRoute({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TermsAndConditionsPage />;
}
