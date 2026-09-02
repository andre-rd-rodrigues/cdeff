import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import StorePageClient from "./StorePage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "storeTitle");
}

export default async function Store({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <StorePageClient />;
}
