import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import FutsalPageClient from "./FutsalPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "futsalTitle");
}

export default async function Futsal({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FutsalPageClient />;
}
