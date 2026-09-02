import { setRequestLocale } from "next-intl/server";
import ActivitiesPageClient from "./ActivitiesPage";

export default async function Activities({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ActivitiesPageClient />;
}
