import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import ActivitiesPageClient from "./ActivitiesPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "activitiesTitle");
}

export default async function Activities({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ActivitiesPageClient />;
}
