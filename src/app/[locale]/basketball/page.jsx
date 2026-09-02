import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import BasketballPageClient from "./BasketballPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "basketballTitle");
}

export default async function Basketball({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BasketballPageClient />;
}
