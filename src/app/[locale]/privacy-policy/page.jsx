import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "privacyTitle");
}

export default async function PrivacyPolicyRoute({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyPolicyPage />;
}
