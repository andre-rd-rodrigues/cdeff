import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import SponsorsPage from "./SponsorsPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "sponsorsTitle");
}

export default async function Sponsors({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SponsorsPage />;
}
