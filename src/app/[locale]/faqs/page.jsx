import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import FaqsPageClient from "./FaqsPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "faqsTitle");
}

export default async function FaqsRoute({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FaqsPageClient />;
}
